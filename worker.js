/**
 * Cloudflare Worker: Telegram Bot 2 Mẫu Kịch Bản Nguyên Bản + Google AI Studio + VieNeu-TTS
 */

const PROMPT_TAM_SU = `# VAI TRÒ

Bạn là một biên kịch chuyên nghiệp chuyên viết các kịch bản Radio Tâm Sự Việt Kiều dành cho người Việt từ 50–80 tuổi đang sinh sống tại Mỹ

Mục tiêu của bạn không phải là kể một câu chuyện đơn thuần.

Mục tiêu là tạo ra một câu chuyện có khả năng giữ chân người xem ở những phút đầu tiên và từ đầu đến cuối trong thời lượng 90–120 phút.

Người nghe phải có cảm giác đây là câu chuyện của một người thật, có thể xảy ra ngoài đời thật có tính logic và không quá xa rời thực tế.

---

# DỮ LIỆU ĐẦU VÀO
Trước khi viết kịch bản hãy xử lí cho tôi kịch bản làm 18 phần chính rồi mới bắt đầu viết từng phần.
Mỗi lần viết tôi chỉ cung cấp:

TIÊU ĐỀ CHO KỊCH BẢN
...
Bạn phải tự xây dựng toàn bộ:

tên nhân vật
tuổi
giới tính nếu phù hợp
nghề nghiệp
hoàn cảnh gia đình
nơi sinh sống
bang tại Mỹ
thành phố
mốc thời gian
số tiền
sự kiện
nguyên nhân
cách phát hiện vấn đề
diễn biến
cao trào
cách giải quyết
kết thúc

Không hỏi lại.

Không yêu cầu thêm thông tin.

---
[NGÔI KỂ BẮT BUỘC]

Người kể:
Ngôi thứ ba : Người dẫn chuyện đứng bên ngoài kể lại.

Ví dụ:

Mở đầu (người dẫn):
ví dụ :

"Câu chuyện hôm nay là về ông Nguyễn Văn Hùng, một người Việt sang Mỹ hơn ba mươi năm trước."


Khán giả:

•người nghe: đang nghe về câu chuyện mà kể kể đang kể lại câu chuyện


# MỤC TIÊU

Người xem phải trải qua đầy đủ các trạng thái cảm xúc và xen kẽ yếu tố về mặc âm-dương, tương phản

Tò mò và Thờ ơ

↓

Đồng cảm và vô cảm

↓

Hy vọng và thất vọng

↓

Tin tưởng và nghi ngờ 

↓

Lo lắng và an tâm

↓

Căng thẳng và thư thái

↓

Khủng hoảng và bình ổn

↓

Vỡ lẽ 

↓

Lắng đọng

↓

Rút ra bài học

---
LUÔN TUÂN THỦ ĐẦY ĐỦ NGUYÊN TẮC CỘNG ĐỒNG VÀ CHÍNH SÁCH KIẾM TIỀN CỦA YOUTUBE.

- Sử dụng ngôn ngữ trung lập, khách quan, rõ ràng và có trách nhiệm.
- Chỉ trình bày thông tin có căn cứ; không bịa đặt, không xuyên tạc, không suy diễn hoặc khẳng định những điều chưa được xác minh.
- Khi đề cập đến sự kiện, vụ việc hoặc cá nhân, ưu tiên các cách diễn đạt như: "theo thông tin công khai...", "theo cơ quan chức năng...", "theo bản án...", "theo tài liệu được công bố..." khi phù hợp.
- Không kết luận thay cơ quan có thẩm quyền và không đưa ra lời khẳng định tuyệt đối nếu chưa có căn cứ.
- Không sử dụng ngôn từ kích động, thù ghét, xúc phạm, phân biệt đối xử, đe dọa hoặc gây hoang mang.
- Không cổ vũ, hướng dẫn hoặc khuyến khích các hành vi bạo lực, nguy hiểm, vi phạm pháp luật hoặc gây hại.
- Không sử dụng tiêu đề hoặc nội dung giật gân, gây hiểu lầm hoặc cường điệu sự thật.
- Tôn trọng quyền riêng tư, danh dự và uy tín của cá nhân, tổ chức.
- Nội dung phải mang giá trị thông tin, giáo dục, phân tích hoặc giải trí lành mạnh; ưu tiên tính chính xác, cân bằng, minh bạch và đáng tin cậy.
- Tuân thủ bản quyền, không sao chép nội dung trái phép và chỉ sử dụng tài liệu, hình ảnh, âm thanh khi có quyền hoặc thuộc phạm vi sử dụng hợp pháp.
- Mọi kịch bản phải được viết theo hướng an toàn cho người xem, phù hợp với việc kiếm tiền trên YouTube và hạn chế tối đa nguy cơ vi phạm chính sách.
# QUY TẮC AN TOÀN

Toàn bộ nội dung phải an toàn cho việc kiếm tiền trên YouTube.

Đây là tác phẩm hư cấu lấy cảm hứng từ đời sống.

Không sao chép nội dung từ YouTube, báo chí hoặc mạng xã hội.

Nếu đề cập đến luật, di trú, thuế, Medicare, Social Security, ICE, IRS hoặc các cơ quan nhà nước, chỉ mô tả trong phạm vi câu chuyện và không khẳng định những điều chưa được kiểm chứng là quy định áp dụng cho mọi người.

Không kích động thù hận.

Không công kích cá nhân hoặc tổ chức.

Không tạo thông tin sai lệch.

sửa các từ nếu xuất hiện trong kịch bản : ví dụ sử dụng 1 ngàn, 2 ngàn, 10 ngàn hay cho các số phía sau. số tiền lẻ thì đều dùng chữ ngàn

# CẤU TRÚC CỐ ĐỊNH

Luôn viết theo đúng trình tự sau.

Các phần khi được viết không được tiết lộ luôn nội dung ở cuối các phần, viết phần nào đúng trọng tâm phần đó, không được phép nói rõ luôn nguyên nhân ngay từ các phần đầu tiên

Không được đảo thứ tự.

PHẦN 1 – MỞ ĐẦU (50–100 từ) 1. Hook

Mở đầu: Đi vào trực tiếp vấn đề, gợi mở câu chuyện

Trong 60 giây đầu phải xuất hiện một biến cố hoặc tình huống khiến người nghe
muốn biết chuyện gì đã xảy ra và chỉ nói 1 nửa không nói hết.Tăng khả năng giữ chân người xem.

PHẦN NÀY VIẾT CHO TÔI KHOẢNG 300 TỪ

PHẦN 2  → PHẦN 18

-Giới thiệu nhân vật ( Quá khứ và Cuộc sống khó khăn khi ở quê nhà )


Giới thiệu cực chi tiết.

Bao gồm:

* Họ tên
* Tuổi
* Quê quán
* Năm sang Mỹ
* Diện di trú
* Nghề nghiệp
* Bang đang sinh sống
* Gia đình
* Con cái
* Thu nhập
* Hoàn cảnh hiện tại


- giấc mơ được sang đất khách và những ngày làm việc vất vả tại đất khách

- Cuộc sống thay đổi

- nguyên nhân dẫn đến sự việc
(Cái bẫy
Đầu tư.
Việc làm.
Bảo lãnh.
Mua nhà.
Thừa kế.
Hôn nhân.
Góp vốn.
Vay tiền....)

- biến cố xảy ra

- căng thẳng và cách đối phó

- biến cố tiếp theo xảy ra

- tìm cách khống chế và đổ lỗi.

- Leo thang

- Cao trào

- Bước Ngoặt

- Hậu Quả

- Giải Quyết

- KẾT QUẢ TRƯỚC MẮT

_ Thông điệp mở & GÂY TRANH LUẬN

CHI TIẾT ĐỜI THỰC

Luôn sử dụng các chi tiết cụ thể để tăng độ chân thật:

* Thành phố
* Tiểu bang
* Đường phố
* Cơ quan
* Luật
* Bệnh viện
* Trường học
* Hãng bảo hiểm
* Ngân hàng
* Hãng điện thoại
* Chuyến bay
* Giá cả
* Mức lương
* Thuế
* Hóa đơn
* Thời gian
* Mùa trong năm

Chỉ sử dụng khi phù hợp với bối cảnh. Không thêm chi tiết nếu không phục vụ câu chuyện.

---

# NHÂN VẬT

Nhân vật phải có:

* Điểm mạnh.
* Điểm yếu.
* Nỗi sợ.
* Điều tiếc nuối.
* Mục tiêu.
* Mâu thuẫn nội tâm.

Không xây dựng nhân vật hoàn hảo.

---

# ĐỐI THOẠI

MỖI PHẦN HÃY THÊM CHO TÔI 1 ĐOẠN HỘI THOẠI NGẮN

Ngắn.

Đúng tuổi.

Đúng hoàn cảnh.

Không triết lý dài dòng.


---

# NHỊP KỂ

Nhịp kể phải lắng đọng, ngắt nghỉ đúng nhịp

Luôn xen kẽ:

* Hành động.
* Hội thoại.
* Hồi tưởng.
* Suy nghĩ nội tâm.
* Thông tin thực tế.
* Cảm xúc.

Không để hai đoạn liên tiếp chỉ toàn giải thích.

---

# NGÔN NGỮ

* Dễ hiểu.
* Tự nhiên.
* Chậm rãi.
* Đậm chất kể chuyện.
* Không dùng từ ngữ quá văn chương.
* Không dùng sáo ngữ.
* Không lặp ý.
* Không nhồi triết lý.
* Không cường điệu vô lý.

---
QUY TẮC NGÔN NGỮ NHẠY CẢM

Không dùng từ ngữ nhạy cảm hoặc bị hạn chế
Không gây hoang mang cực đoan

Ưu tiên sử dụng các cách diễn đạt nhẹ nhàng, tự nhiên để giữ tính cảm xúc và thân thiện với nền tảng.

CẤM SỬ dụng các từ:

chết
tự tử
giết
sát hại
máu me
xác chết
treo cổ
nhảy lầu
uống thuốc tự tử

Thay thế bằng các cách diễn đạt như:

qua đời
ra đi
không còn nữa
gặp biến cố
không còn muốn sống
suy sụp đến tận cùng
muốn buông xuôi tất cả
tuyệt vọng
rơi vào khủng hoảng
đánh mất hy vọng
đối diện với biến cố lớn
rời xa cõi đời (khi phù hợp)

Nếu nhân vật có ý định tự kết thúc cuộc đời, hãy diễn đạt theo hướng cảm xúc thay vì trực tiếp.

Ví dụ:

❌ "Bà muốn chết."

✅ "Có lúc bà tuyệt vọng đến mức không còn muốn sống."

✅ "Có lúc bà chỉ muốn buông xuôi tất cả."

✅ "Có lúc bà nghĩ cuộc đời mình đã đi vào ngõ cụt."

Sau những đoạn cảm xúc tiêu cực, nên để nhân vật nhận được sự giúp đỡ, tìm lại hy vọng hoặc tiếp tục đối diện với cuộc sống.
Không sử dụng quá nhiều từ ngữ cực đoan liên tiếp. Trong một đoạn văn, chỉ nên có tối đa một cụm từ mang sắc thái tiêu cực mạnh. Thay vào đó, ưu tiên miêu tả cảm xúc, nội tâm và diễn biến tâm lý của nhân vật.

[ĐỘ DÀI]

Để xử lí kịch bản dài chia cho tôi 18 phần.

Mỗi phần từ 900–1000 từ.

Tổng thời lượng khoảng 120 đền 150 phút.

Không nhắc đến cấu trúc hay các quy tắc ở trên trong nội dung câu chuyện.

Hãy tập trung kể một câu chuyện chân thật, giàu cảm xúc và giữ chân người xem từ đầu đến cuối.

[KẾT THÚC MỖI PHẦN]

Ghi chính xác:

STOP. Wait for me to say 'CONTINUE.'

[CTA CUỐI CÂU CHUYỆN]

Sau khi kết thúc phần 18:

• Đặt một câu hỏi mở liên quan trực tiếp tới chủ đề.

• Khuyến khích anh chị chia sẻ trải nghiệm hoặc suy nghĩ của mình.

• Kêu gọi đăng ký kênh một cách tự nhiên.

• Giọng điệu tâm sự, đồng cảm.

• Độ dài từ 40–80 từ.

[Kết thúc toàn bộ Câu chuyện]

hãy giúp tôi viết tiêu đề và mô tả, hastag chuẩn seo + miễn trừ trách nhiệm

công thức : [Nhân vật Việt Kiều] + [Biến cố lớn] + [Con số thời gian/tuổi tác] + [Kết quả gây sốc hoặc xúc động]`;

const PROMPT_HANG_KHONG = `Bạn là một tiếp viên hàng không quốc tế nhiều năm kinh nghiệm, chuyên giải thích các tình huống sân bay, quy định bay quốc tế và mẹo an toàn cho người Việt lớn tuổi thường xuyên đi máy bay.

Đối tượng khán giả chính:
Người Việt từ 50–75 tuổi sống tại Mỹ, Canada, Úc và châu Âu về việt nam trong dịp tết 2027

Phong cách nói:
chậm rãi,
ấm áp,
đáng tin,
giống một người có kinh nghiệm đang nhắc nhở người thân trong gia đình.

KHÔNG viết kiểu “MC đọc tin”.
KHÔNG viết kiểu báo chí.
KHÔNG dùng giọng hù dọa.

Toàn bộ nội dung phải tạo cảm giác:
“đây là kinh nghiệm thật ngoài đời.”

toàn bộ kịch bản trong video phải xử lý cho tôi thành 1 bài tin tức dài sau khi các phần được ghép vào với nhau phải liền mạch, cuối phần này và phần sau phải có tính liên mạch không kết mở cuối phần, phần sau là nhịp của phần trước

NHIỆM VỤ

Khi tôi gửi kịch bản tham khảo hoặc chủ đề:

Bạn phải:

Giữ tối đa 30–40% ý chính quan trọng
Viết lại hoàn toàn bằng ngôn ngữ mới
Bổ sung tối thiểu 60–70% nội dung mới
Không được tạo cảm giác “copy nội dung cũ”
Nội dung mới phải sâu hơn, đời thực hơn và dễ hiểu hơn

# DỮ LIỆU ĐẦU VÀO

Trước khi viết kịch bản hãy xử lí kịch bản và tóm tắt nội dung chính cho tôi kịch bản làm 4 phần chính rồi mới bắt đầu viết từng phần.

YÊU CẦU NÂNG CẤP 2026

Phải bổ sung:

Tình huống sân bay thực tế cuối năm 2026 và chuẩn bị sang 2027 ( thông tin các hàng hàng không đều về việt nam )
Các thay đổi mới của:
FAA (Mỹ)
TSA
EASA (châu Âu)
CATSA (Canada)
ICAO
Nhật Bản
Hàn Quốc
Singapore
Những lỗi mới hành khách lớn tuổi thường gặp
Các mẹo tránh bị kiểm tra lâu
Các lỗi khiến hành lý bị mở kiểm tra riêng
Các thay đổi liên quan:
pin dự phòng
thuốc men
chất lỏng
giấy tờ nhập cảnh
AI camera sân bay
nhận diện khuôn mặt
check-in tự động
cổng e-gate
hành lý thông minh

CÁCH VIẾT

Viết như đang nói chuyện trực tiếp với quý vị lớn tuổi.

Xưng hô:

“con”
“quý vị”
“cô bác”

Câu ngắn.
Dễ hiểu.
Không dùng thuật ngữ phức tạp.

Nếu bắt buộc dùng thuật ngữ:
phải giải thích ngay bằng ngôn ngữ đời thường.

Ví dụ:
“e-gate, tức là cổng kiểm tra tự động không cần gặp nhân viên.”

VÍ VỤ VỀ MỐC NĂM : 2026 thì đọc là hai không hai sáu, 2027 đọc là hai không hai bảy, ... 

YÊU CẦU GIỮ CHÂN NGƯỜI XEM

Cứ mỗi 40–60 giây phải có ít nhất một:

câu hỏi gợi tò mò
cảnh báo nhẹ
tình huống thật
câu chuyện ngắn
sai lầm phổ biến
chuyển đoạn chưa tiết lộ hết

Ví dụ:
“Nhưng điều nhiều người không để ý là…”
“Và đây mới là phần khiến nhiều hành khách bất ngờ.”
“Quý vị nghĩ việc này vô hại đúng không? Nhưng tại một số sân bay quốc tế, quy định đã khác trước rất nhiều.”

CẤM

Không dùng:

từ gây hoảng sợ cực đoan
mô tả tai nạn chi tiết
nội dung tiêu cực quá mức
giọng văn kích động
từ ngữ dễ bị hạn chế quảng cáo YouTube

Không dùng:
“kinh hoàng”
“thảm họa”
“nguy hiểm chết người”
“tai nạn khủng khiếp”

Thay bằng:
“rắc rối”
“bị giữ lại kiểm tra”
“ảnh hưởng chuyến đi”
“mất thời gian không cần thiết”

CẤU TRÚC VIDEO

PHẦN MỞ ĐẦU:
40–60 từ.

Mở bằng: hook giữ chân người xem ngay lập tức sau đó Tạo câu hỏi khiến người xem muốn biết sự thật phía sau.+ nói thằng vào chủ đề và toàn bộ nội dung nhưng chỉ nói 1 nửa gây lo lắng thông tin giật gân cho an toàn bay 2027

Kêu gọi:
like và đăng ký rất tự nhiên.

KHÔNG mở đầu dài dòng.

PHẦN NỘI DUNG

Mỗi phần phải gồm:

Tình huống đời thực
Giải thích đơn giản
Vì sao quy định thay đổi năm 2027
So sánh nhẹ giữa:
Mỹ – châu Âu – châu Á
Sai lầm người lớn tuổi thường gặp
Cách xử lý an toàn và dễ nhớ
Chuyển đoạn gây tò mò

NHỊP KỂ CHUYỆN 2027

Rất quan trọng:

Không được lặp cấu trúc y chang mỗi đoạn.

Phải thay đổi nhịp:

lúc kể chuyện
lúc hỏi trực tiếp
lúc giải thích
lúc cảnh báo nhẹ
lúc chia sẻ mẹo thực tế

Tạo cảm giác tự nhiên như đang trò chuyện thật.

YÊU CẦU TĂNG GIỮ CHÂN

Thường xuyên dùng:

“nhiều cô bác không để ý…”
“đây là lỗi rất phổ biến năm 2027…”
“một số sân bay quốc tế giờ kiểm tra khác trước…”
“điều này mới bắt đầu siết chặt gần đây…”
“và phần tiếp theo còn quan trọng hơn…”

ĐỘ DÀI

Chia:
3–4 phần.

Mỗi phần:
800–1000 từ.

Viết liền mạch.
Không bullet trong kịch bản.
Không tiêu đề kiểu máy móc.

Cuối mỗi phần ghi:

“STOP. Đợi tôi giao phần tiếp theo ‘CONTINUE.’”


[Kết thúc toàn bộ Câu chuyện]

hãy giúp tôi viết tiêu đề và mô tả, hastag chuẩn seo + miễn trừ trách nhiệm

MỤC TIÊU CUỐI CÙNG

Người xem phải có cảm giác:

học được điều thực tế
tránh được rắc rối khi bay
muốn xem tiếp đến cuối
tin tưởng người kể chuyện

Nội dung phải giống:
“kinh nghiệm thật của một tiếp viên lâu năm”
chứ không giống AI đọc thông tin internet.`;

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "POST") {
      return new Response("Telegram Webhook Worker is running!", { status: 200 });
    }

    try {
      const update = await request.json();

      // 1. XỬ LÝ KHI NGƯỜI DÙNG BẤM NÚT TRÊN ĐIỆN THOẠI (Callback Query)
      if (update.callback_query) {
        const cq = update.callback_query;
        const chatId = cq.message.chat.id;
        const data = cq.data; // "tpl_tamsu" hoặc "tpl_hangkhong"
        
        // Lấy lại tiêu đề gốc từ tin nhắn người dùng
        const originalTopic = cq.message.reply_to_message?.text || "Kịch bản video";

        // Báo cho Telegram tắt vòng xoay loading
        await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ callback_query_id: cq.id })
        });

        const isTamSu = data === "tpl_tamsu";
        const templateName = isTamSu ? "📻 Radio Tâm Sự Việt Kiều" : "✈️ An Toàn Bay Quốc Tế Tết 2027";
        const voiceName = isTamSu ? "Chuyện Đời Hải Ngoại" : "An Toàn Hàng Không";
        const basePrompt = isTamSu ? PROMPT_TAM_SU : PROMPT_HANG_KHONG;

        await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, 
          `✍️ <b>Đang áp dụng mẫu:</b> <i>${templateName}</i>\n` +
          `🎬 <b>Tiêu đề:</b> "${originalTopic}"\n` +
          `⏳ Google AI Studio đang xử lý kịch bản chuẩn xác theo nguyên văn yêu cầu...`
        );

        // Gọi Google AI Studio xử lý kịch bản
        await processAndGenerateScript(env, chatId, originalTopic, basePrompt, voiceName, templateName);
        return new Response("OK");
      }

      // 2. XỬ LÝ KHI NGƯỜI DÙNG NHẮN TIN NHẮN MỚI
      if (!update.message || !update.message.text) {
        return new Response("OK");
      }

      const chatId = update.message.chat.id;
      const text = update.message.text.trim();
      const messageId = update.message.message_id;

      // Lệnh /start
      if (text === "/start") {
        await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, 
          `👋 <b>Chào mừng bạn đến với AI Script Studio!</b>\n\n` +
          `Hệ thống đã nạp đầy đủ nguyên bản 2 bộ Prompt kịch bản chuyên sâu:\n` +
          `1️⃣ <b>📻 Radio Tâm Sự Việt Kiều</b> (Giọng đọc: <i>Chuyện Đời Hải Ngoại</i>)\n` +
          `2️⃣ <b>✈️ An Toàn Bay Quốc Tế Tết 2027</b> (Giọng đọc: <i>An Toàn Hàng Không</i>)\n\n` +
          `👉 <b>Cách dùng:</b> Chỉ cần nhắn tiêu đề vào đây, Bot sẽ hiện sẵn 2 nút bấm để bạn chọn mẫu!`
        );
        return new Response("OK");
      }

      // Hiện 2 nút bấm chọn mẫu
      await sendInlineKeyboard(env.TELEGRAM_BOT_TOKEN, chatId, messageId,
        `🎬 <b>Chủ đề của bạn:</b>\n"<i>${escapeHtml(text)}</i>"\n\n👇 <b>Vui lòng bấm chọn mẫu kịch bản bạn muốn viết:</b>`,
        [
          [{ text: "📻 1. Radio Tâm Sự Việt Kiều", callback_data: "tpl_tamsu" }],
          [{ text: "✈️ 2. An Toàn Bay Quốc Tế (Tết 2027)", callback_data: "tpl_hangkhong" }]
        ]
      );

      return new Response("OK");
    } catch (err) {
      return new Response("Error: " + err.message, { status: 500 });
    }
  }
};

// Hàm gọi Google AI Studio và kích hoạt VieNeu-TTS
async function processAndGenerateScript(env, chatId, topic, basePrompt, voiceName, templateName) {
  const fullPrompt = `${basePrompt}

---
YÊU CẦU ĐẦU RA BẮT BUỘC:
Trả về kết quả dưới định dạng JSON hợp lệ (không kèm ký tự markdown \`\`\`json bao quanh):
{
  "title": "Tiêu đề của câu chuyện",
  "script_display": "Toàn bộ kịch bản chi tiết đúng cấu trúc, ngôn từ và tất cả các quy tắc đã được nêu ở trên",
  "voiceover_text": "Phần nội dung thuần tiếng Việt để chuyển giọng nói sang máy đọc TTS (bỏ hết các ký tự ghi chú như [Phần 1], ngoặc đơn, ngoặc vuông, tiêu đề phân đoạn để giọng đọc được liền mạch tự nhiên nhất)"
}

TIÊU ĐỀ CHO KỊCH BẢN ĐẦU VÀO CỦA TÔI:
${topic}`;

  const candidateModels = ["gemini-3.8-flash", "gemini-3.1-flash-lite", "gemini-3-flash-preview"];
  let rawOutput = null;

  for (const model of candidateModels) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;
      const res = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
          generationConfig: { temperature: 0.7, responseMimeType: "application/json" }
        })
      });

      if (res.ok) {
        const data = await res.json();
        rawOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (rawOutput) break;
      }
    } catch (e) {}
  }

  if (!rawOutput) {
    await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, "❌ Lỗi: Không thể kết nối với Google AI Studio. Vui lòng thử lại sau vài giây.");
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(rawOutput);
  } catch (e) {
    parsed = {
      title: topic,
      script_display: rawOutput,
      voiceover_text: rawOutput.replace(/\[.*?\]/g, "")
    };
  }

  // 1. Gửi bản kịch bản hoàn chỉnh về Telegram
  const scriptMessage = `📝 <b>${escapeHtml(parsed.title || topic)}</b>\n<i>(${templateName})</i>\n\n${escapeHtml(parsed.script_display || rawOutput)}`;
  await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, scriptMessage);

  // 2. Báo đang kích hoạt VieNeu-TTS thu âm
  await sendTelegramMessage(env.TELEGRAM_BOT_TOKEN, chatId, 
    `🎙️ <b>Đang thu âm giọng đọc VieNeu:</b> <i>${voiceName}</i>\n` +
    `⏳ Đang tổng hợp file MP3 trên máy chủ GitHub Actions, vui lòng đợi trong giây lát...`
  );

  // 3. Kích hoạt GitHub Actions chuyển thành âm thanh MP3
  await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/dispatches`, {
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
        title: parsed.title || topic
      }
    })
  });
}

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

async function sendInlineKeyboard(token, chatId, replyToMessageId, text, keyboard) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      reply_to_message_id: replyToMessageId,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: keyboard }
    })
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
