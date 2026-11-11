import os
import sys
import subprocess
import requests

# Ensure UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

text = os.environ.get("TEXT", "").strip()
voice = os.environ.get("VOICE", "Hải Đăng").strip()
chat_id = os.environ.get("CHAT_ID", "").strip()
title = os.environ.get("SCRIPT_TITLE", "Kịch bản AI").strip()
bot_token = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()

if not text:
    print("❌ Lỗi: Không có nội dung text để đọc.")
    sys.exit(1)

if not chat_id or not bot_token:
    print("❌ Lỗi: Thiếu CHAT_ID hoặc TELEGRAM_BOT_TOKEN.")
    sys.exit(1)

print(f"🎬 Kịch bản: {title}")
print(f"🎙️ Giọng đọc: {voice}")
print(f"📝 Số ký tự: {len(text)}")

# Import VieNeu-TTS (ONNX mode - torch-free, runs fast on GitHub CPU)
from vieneu import Vieneu

print("🚀 Khởi động mô hình VieNeu-TTS (backend=onnx)...")
engine = Vieneu(backend="onnx")

wav_temp = "output_temp.wav"
mp3_output = "voice_output.mp3"

print("🔊 Đang tổng hợp âm thanh...")
audio = engine.infer(text, voice=voice)
engine.save(audio, wav_temp)

print("🎵 Đang chuyển đổi sang định dạng MP3 192kbps...")
subprocess.run(
    ["ffmpeg", "-y", "-i", wav_temp, "-b:a", "192k", mp3_output],
    stdout=subprocess.DEVNULL,
    stderr=subprocess.DEVNULL,
    check=True
)

if os.path.exists(wav_temp):
    os.remove(wav_temp)

print(f"✅ Đã tạo file MP3: {mp3_output} ({os.path.getsize(mp3_output):,} bytes)")

# Send Audio file to Telegram via Bot API
print(f"📤 Đang gửi file âm thanh về Telegram Chat ID: {chat_id}...")
telegram_url = f"https://api.telegram.org/bot{bot_token}/sendAudio"

caption_text = f"🎙️ <b>Giọng đọc:</b> {voice} (VieNeu-TTS)\n🎬 <b>Chủ đề:</b> {title}"

with open(mp3_output, "rb") as audio_file:
    response = requests.post(
        telegram_url,
        data={
            "chat_id": chat_id,
            "title": title[:64],
            "performer": f"VieNeu ({voice})",
            "caption": caption_text,
            "parse_mode": "HTML"
        },
        files={"audio": audio_file},
        timeout=60
    )

if response.status_code == 200:
    print("🎉 Gửi file âm thanh về Telegram thành công!")
else:
    print(f"❌ Lỗi gửi Telegram ({response.status_code}): {response.text}")
    sys.exit(1)
