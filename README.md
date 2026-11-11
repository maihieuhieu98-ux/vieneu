# Telegram Bot + Google AI Studio + VieNeu-TTS (Cloudflare + GitHub Actions)

Hệ thống viết kịch bản AI tự động và lồng tiếng VieNeu-TTS 100% trên điện thoại qua Telegram, không cần bật máy tính.

## Cấu trúc thư mục:
- `generate.py`: Code Python gọi VieNeu-TTS (chạy ONNX nhẹ trên GitHub Actions) và gửi MP3 về Telegram.
- `.github/workflows/vieneu.yml`: File cấu hình GitHub Actions nhận lệnh tự động từ Cloudflare Worker.
- `worker.js`: Mã nguồn Cloudflare Worker xử lý Webhook Telegram, gọi Gemini API và kích hoạt GitHub Actions.

## Hướng dẫn cài đặt 4 bước:
1. Tạo Repo trên GitHub (Public hoặc Private) và đẩy toàn bộ thư mục này lên.
2. Vào GitHub Repo > Settings > Secrets and variables > Actions > Tạo Secret `TELEGRAM_BOT_TOKEN`.
3. Vào Cloudflare Dashboard > Workers & Pages > Create Worker > Dán code `worker.js`.
   Thêm 4 biến môi trường:
   - `TELEGRAM_BOT_TOKEN`
   - `GEMINI_API_KEY`
   - `GITHUB_PAT`
   - `GITHUB_REPO` (dạng `username/repo-name`)
4. Kích hoạt Webhook:
   `https://api.telegram.org/bot<TOKEN>/setWebhook?url=<WORKER_URL>`
