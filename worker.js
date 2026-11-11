/**
 * Cloudflare Worker: Telegram Bot + Google AI Studio (Gemini 3.8 Flash) + GitHub Actions VieNeu-TTS
 */

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "POST") {
      return new Response("Telegram Webhook Worker is running!", { status: 200 });
    }

    try {
      const update = await request.json();
      if (!update.message || !update.message.text) {
        return new Response("OK");
      }

      const chatId = update.message.chat.id;
      const text = update.message.text.trim();

      // Handle /start command
      if (text === "/start") {
        await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, 
          `👋 <b>Chào mừng bạn đến với AI Script & VieNeu-TTS Studio!</b>\n\n` +
          `✨ <b>Cách sử dụng cực kỳ đơn giản:</b>\n` +
          `Chỉ cần gửi bất kỳ chủ đề video nào bạn muốn làm, ví dụ:\n` +
          `👉 <i>3 mẹo tiết kiệm pin iPhone ai cũng nên biết</i>\n` +
          `👉 <i>Kịch bản video ngắn TikTok review quán cà phê vintage</i>\n\n` +
          `⚡ <b>Quy trình tự động 100%:</b>\n` +
          `1. Gemini 3.8 Flash sẽ viết kịch bản chi tiết trong 2 giây.\n` +
          `2. Máy chủ GitHub sẽ đọc kịch bản bằng giọng <b>VieNeu-TTS</b> và gửi file MP3 về Telegram!`
        );
        return new Response("OK");
      }

      // 1. Notify user that Gemini is writing the script
      await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, "✍️ <b>Gemini 3.8 Flash đang viết kịch bản...</b> Vui lòng đợi 2-3 giây.");

      // 2. System prompt
      const systemPrompt = `Bạn là một chuyên gia biên kịch video ngắn (TikTok, Reels, YouTube Shorts).
Khi nhận được chủ đề, hãy viết kịch bản hấp dẫn và phân tách rõ ràng.
BẮT BUỘC trả về dữ liệu đúng định dạng JSON hợp lệ (không kèm markdown \`\`\`json ở ngoài):
{
  "title": "Tiêu đề ngắn gọn của video",
  "voice": "Hải Đăng",
  "script_display": "Nội dung kịch bản chi tiết cho người đọc (gồm Tiêu đề, Hook 3s đầu, Phân cảnh [Hình ảnh] và [Lời thoại], Kêu gọi hành động CTA)",
  "voiceover_text": "Toàn bộ lời thoại đọc liên tục thuần tiếng Việt để máy đọc TTS. Tuyệt đối KHÔNG chứa bất kỳ ký tự mô tả nào như [Cảnh 1], [Âm nhạc], Hook:, CTA:, ngoặc đơn, ngoặc vuông."
}

Danh sách giọng đọc VieNeu có thể chọn cho 'voice':
- "Hải Đăng" (Nam, Bắc, tự nhiên - khuyên dùng)
- "Mai Anh" (Nữ, Bắc, tin tức/phát thanh)
- "Thùy Dung" (Nữ, Nam, tin tức/quảng cáo)
- "Chuyện Đời Hải Ngoại" (Nam, kể chuyện, phóng sự truyền cảm)
- "Hồ Sơ Việt Kiều" (Nam, tin tức/phóng sự thời sự)`;

      // Ưu tiên Gemini 3.8 Flash đầu tiên, kèm dự phòng nếu Google báo quá tải tạm thời (503)
      const candidateModels = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-3-flash-preview"];
      let rawOutput = null;
      let lastError = null;

      for (const model of candidateModels) {
        try {
          const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
          const res = await fetch(geminiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ role: "user", parts: [{ text: `${systemPrompt}\n\nChủ đề: ${text}` }] }],
              generationConfig: { temperature: 0.7, responseMimeType: "application/json" }
            })
          });

          if (res.ok) {
            const data = await res.json();
            rawOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (rawOutput) break;
          } else {
            lastError = await res.text();
          }
        } catch (e) {
          lastError = e.message;
        }
      }

      if (!rawOutput) {
        await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, `❌ Lỗi Gemini API: ${lastError ? lastError.slice(0, 200) : "Không nhận được phản hồi"}`);
        return new Response("OK");
      }

      let parsed;
      try {
        parsed = JSON.parse(rawOutput);
      } catch (e) {
        parsed = {
          title: "Kịch bản video",
          voice: "Hải Đăng",
          script_display: rawOutput,
          voiceover_text: rawOutput.replace(/\[.*?\]/g, "")
        };
      }

      // 3. Send detailed script to Telegram
      const scriptMessage = `🎬 <b>${escapeHtml(parsed.title || "KỊCH BẢN VIDEO")}</b>\n\n${escapeHtml(parsed.script_display || rawOutput)}`;
      await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, scriptMessage);

      // 4. Notify user about audio generation
      const voiceName = parsed.voice || "Hải Đăng";
      await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, 
        `🎙️ <b>Đang kích hoạt VieNeu-TTS với giọng:</b> <i>${voiceName}</i>\n` +
        `⏳ Đang tổng hợp âm thanh MP3 trên GitHub Actions, file sẽ được gửi về sau khoảng 40-60 giây...`
      );

      // 5. Trigger GitHub Actions via repository_dispatch
      const ghUrl = `https://api.github.com/repos/${env.GITHUB_REPO}/dispatches`;
      const ghRes = await fetch(ghUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.GITHUB_PAT}`,
          "Accept": "application/vnd.github.v3+json",
          "User-Agent": "Cloudflare-Worker-Telegram-Bot",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          event_type: "generate_audio",
          client_payload: {
            text: parsed.voiceover_text || parsed.script_display,
            voice: voiceName,
            chat_id: String(chatId),
            title: parsed.title || "Kịch bản AI"
          }
        })
      });

      if (!ghRes.ok) {
        const ghErr = await ghRes.text();
        await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, `⚠️ Không thể kích hoạt GitHub Actions: ${ghErr.slice(0, 150)}`);
      }

      return new Response("OK");
    } catch (err) {
      return new Response("Error: " + err.message, { status: 500 });
    }
  }
};

async function sendTelegramMessage(token, chatId, text) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const maxLen = 4000;
  for (let i = 0; i < text.length; i += maxLen) {
    const chunk = text.slice(i, i + maxLen);
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: chunk, parse_mode: "HTML" })
    });
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
