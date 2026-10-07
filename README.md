# Trần Bá Đông — AI Engineer Portfolio

Website HTML/CSS/JavaScript độc lập, không cần ChatGPT, Node.js hay API key để chạy.

## Đưa lên GitHub Pages

1. Tạo repository **public** tên `3sdont.github.io` trong tài khoản `3sDont`.
2. Đưa các tệp trong thư mục này vào gốc repository: `index.html`, `style.css`, `script.js`, `.nojekyll` và thư mục `assets/`. Không upload nguyên file ZIP.
3. Vào **Settings → Pages → Build and deployment**.
4. Chọn **Deploy from a branch**, branch **main**, thư mục **/(root)**, rồi **Save**.
5. Sau khi GitHub triển khai thành công, website sẽ có địa chỉ https://3sdont.github.io/ . Đây là địa chỉ dự kiến, chưa phải xác nhận đã triển khai.

## Upload bằng trình duyệt

Giải nén ZIP, mở repository, chọn **Add file → Upload files**, kéo thả các tệp và thư mục assets, rồi commit. Nếu chưa có tệp nào, dùng liên kết **uploading an existing file** trên trang repository.

## Chỉnh sửa

- `index.html`: nội dung, dự án, kinh nghiệm và liên hệ.
- `style.css`: màu sắc, bố cục và giao diện điện thoại.
- `script.js`: hình minh họa sóng âm và nút sao chép email.
- `assets/Tran-Ba-Dong-CV.pdf`: CV gốc do chủ website cung cấp. CV vẫn giữ tên công ty và số điện thoại trong bản gốc.

Các lần commit lên main sẽ cập nhật website sau khi Pages đã được bật.

## Xem trên máy

Mở `index.html` bằng trình duyệt. Hoặc chạy `python -m http.server 8000` tại thư mục này rồi truy cập http://localhost:8000 . Nút sao chép email cần trình duyệt hỗ trợ Clipboard API và ngữ cảnh an toàn (HTTPS hoặc localhost); nếu không, có thể sao chép địa chỉ hiển thị.

## Tài liệu

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Bản xuất không chứa cấu hình hosting Sites hay thông tin xác thực. Kiểm tra đã thực hiện: cú pháp JavaScript, liên kết nội bộ và các tệp tài nguyên. Chưa kiểm tra trực quan bằng trình duyệt.
