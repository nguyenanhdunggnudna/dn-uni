# Hướng dẫn Tích hợp Giao diện vào Dự án ASP.NET Core MVC

Dự án này được xây dựng dưới dạng prototype HTML/JS tĩnh nhưng đã được cấu hình giả lập hệ thống **Razor Engine** của .NET (sử dụng `@Model` và `@if` logic). Dưới đây là hướng dẫn để lập trình viên .NET tích hợp vào dự án thực tế.

## 1. Cấu trúc Ánh xạ (Mapping)

| Thư mục Prototype | Ánh xạ ứng dụng .NET | Ghi chú |
|:--- |:--- |:--- |
| `shared/_Layout.html` | `Views/Shared/_Layout.cshtml` | Phần khung chính của ứng dụng. |
| `components/_Sidebar.html` | `Views/Shared/_Sidebar.cshtml` | Sử dụng làm Partial View. |
| `components/_Header.html` | `Views/Shared/_Header.cshtml` | Sử dụng làm Partial View. |
| `pages/` | `Views/[Controller]/` | Các file nội dung trang. |
| `assets/` | `wwwroot/assets/` | Tài nguyên tĩnh (CSS, JS, Images). |

## 2. Các Bước Tích hợp

### Bước 1: Thiết lập Layout chính
1. Copy nội dung từ `shared/_Layout.html` vào `Views/Shared/_Layout.cshtml`.
2. Thay thế thẻ `<div id="content-placeholder"></div>` bằng lệnh `@RenderBody()`.
3. Nhúng các Partial View cho Sidebar và Header bằng `@await Html.PartialAsync("_Sidebar")`.

### Bước 2: Chuyển đổi Logic Razor
Dự án prototype sử dụng comment để giả lập logic Razor. Bạn cần chuyển đổi chúng sang cú pháp real:

- **Logic phân quyền:**
  - Prototype: `<!-- @if (User.IsInRole("Principal")) { --> ... <!-- } -->`
  - .NET: `@if (User.IsInRole("Principal")) { ... }`

- **Hiển thị dữ liệu Model:**
  - Prototype: `@Model.UserName`
  - .NET: `@Model.UserName` (hoặc `@User.Identity.Name` tùy thuộc vào cách bạn quản lý User).

### Bước 3: Cấu hình Tailwind CSS
Dự án sử dụng Tailwind qua CDN với cấu hình runtime trong `_Layout.html`. Để tối ưu cho production trong .NET:
1. Cài đặt Tailwind CSS qua npm trong project .NET.
2. Copy phần `tailwind.config` từ `_Layout.html` vào file `tailwind.config.js` của dự án.
3. Build CSS và nhúng vào header thay vì dùng CDN.

### Bước 4: Chuyển đổi AJAX LoadPage (Tùy chọn)
Hiện tại dự án dùng JS `loadPage(path)` để chuyển trang mà không load lại toàn bộ. Trong .NET bạn có 2 lựa chọn:
1. **Truyền thống:** Sử dụng các thẻ `<a>` bình thường trỏ về Controller/Action.
2. **SPA-like:** Tiếp tục dùng AJAX để gọi các Action trả về PartialView và nhúng vào vùng chứa nội dung.

## 3. Lưu ý về Mock Data
File `shared/mock-data.js` chứa dữ liệu mẫu cho các role:
- **Director** (Giám đốc)
- **Principal** (Hiệu trưởng)
- **Clerk** (Văn thư)

Khi tích hợp, bạn hãy thay thế phần Mock này bằng `Identity System` thực tế của ASP.NET Core.

## 4. Các trang hiện có (Views)
Các trang đã được tạo sẵn cấu trúc HTML chuẩn Tailwind:
- `incoming-documents/index.html` -> Danh sách văn bản đến
- `incoming-documents/van-ban-but-phe.html` -> Văn bản bút phê
- `incoming-documents/van-ban-chi-dao.html` -> Văn bản chỉ đạo
- ... (xem trong thư mục `pages`)

---
*Ghi chú: Các phần tính năng chi tiết sẽ được cập nhật thêm trong quá trình phát triển.*
