# Hướng dẫn Tích hợp Giao diện vào Dự án ASP.NET Core MVC

> **Dự án:** Template giao diện Hệ thống Quản lý Văn bản - Trường Đại học
> **Stack Frontend:** HTML5 + Tailwind CSS (CDN) + Vanilla JS
> **Stack Backend mục tiêu:** ASP.NET Core MVC + Identity

---

## 1. Tổng quan Cấu trúc Dự án

```
university-fe-project/
├── shared/
│   ├── _Layout.html          → Views/Shared/_Layout.cshtml
│   └── mock-data.js          → Thay thế bằng ASP.NET Core Identity
├── components/
│   ├── _Sidebar.html         → Views/Shared/_Sidebar.cshtml (Partial View)
│   └── _Header.html          → Views/Shared/_Header.cshtml (Partial View)
├── pages/                    → Views/[Controller]/[Action].cshtml
│   ├── login.html            → Views/Account/Login.cshtml
│   ├── home/                 → Views/Home/
│   ├── clerk/                → Views/Clerk/
│   ├── incoming-documents/   → Views/IncomingDocuments/
│   ├── outgoing-documents/   → Views/OutgoingDocuments/
│   ├── tasks/                → Views/Tasks/
│   ├── calendar/             → Views/Calendar/
│   ├── internal-news/        → Views/InternalNews/
│   ├── private-messages/     → Views/PrivateMessages/
│   └── tien-ich/             → Views/Utilities/
├── assets/
│   ├── css/styles.css        → wwwroot/css/styles.css
│   └── images/               → wwwroot/images/
└── tailwind.config.js        → Tailwind config cho build production
```

---

## 2. Ánh xạ Routing đầy đủ (Routes Map)

Mỗi file HTML trong `pages/` sẽ tương ứng 1 Action trong Controller.

### 2.1. Xác thực (Authentication)

| Prototype File | Controller | Action | Ghi chú |
|:---|:---|:---|:---|
| `pages/login.html` | `AccountController` | `Login()` | Trang đăng nhập (standalone) |
| *(logout từ Header/Sidebar)* | `AccountController` | `Logout()` | POST, xóa session |

### 2.2. Trang chủ (Home)

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/home/index.html` | `HomeController` | `Index()` |

### 2.3. Văn thư (Clerk)

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/clerk/so-van-ban.html` | `ClerkController` | `SoVanBan()` |
| `pages/clerk/chua-tiep-nhan.html` | `ClerkController` | `ChuaTiepNhan()` |
| `pages/clerk/chi-tiet-chua-tiep-nhan.html` | `ClerkController` | `ChiTietChuaTiepNhan(int id)` |
| `pages/clerk/tiep-nhan-van-ban.html` | `ClerkController` | `TiepNhanVanBan()` |
| `pages/clerk/vao-so-van-ban-den.html` | `ClerkController` | `VaoSoVanBanDen()` |
| `pages/clerk/cho-but-phe.html` | `ClerkController` | `ChoButPhe()` |
| `pages/clerk/chuyen-thuc-hien.html` | `ClerkController` | `ChuyenThucHien()` |
| `pages/clerk/chi-tiet-chuyen-thuc-hien.html` | `ClerkController` | `ChiTietChuyenThucHien(int id)` |
| `pages/clerk/danh-sach-vb-den.html` | `ClerkController` | `DanhSachVBDen()` |
| `pages/clerk/danh-sach-van-ban-den.html` | `ClerkController` | `DanhSachVanBanDen()` |
| `pages/clerk/chi-tiet-van-ban-den.html` | `ClerkController` | `ChiTietVanBanDen(int id)` |
| `pages/clerk/cap-so.html` | `ClerkController` | `CapSo()` |
| `pages/clerk/chi-tiet-cap-so.html` | `ClerkController` | `ChiTietCapSo(int id)` |
| `pages/clerk/ban-hanh-van-ban.html` | `ClerkController` | `BanHanhVanBan()` |
| `pages/clerk/dong-dau-van-ban.html` | `ClerkController` | `DongDauVanBan()` |
| `pages/clerk/danh-sach-vb-di.html` | `ClerkController` | `DanhSachVBDi()` |

### 2.4. Văn bản đến (Incoming Documents)

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/incoming-documents/index.html` | `IncomingDocumentsController` | `Index()` |
| `pages/incoming-documents/danh-sach-van-ban-den.html` | `IncomingDocumentsController` | `DanhSachVanBanDen()` |
| `pages/incoming-documents/van-ban-but-phe.html` | `IncomingDocumentsController` | `VanBanButPhe()` |
| `pages/incoming-documents/chi-tiet-van-ban-but-phe.html` | `IncomingDocumentsController` | `ChiTietVanBanButPhe(int id)` |
| `pages/incoming-documents/van-ban-chi-dao.html` | `IncomingDocumentsController` | `VanBanChiDao()` |
| `pages/incoming-documents/chi-tiet-van-ban-chi-dao.html` | `IncomingDocumentsController` | `ChiTietVanBanChiDao(int id)` |
| `pages/incoming-documents/van-ban-tham-muu.html` | `IncomingDocumentsController` | `VanBanThamMuu()` |
| `pages/incoming-documents/van-ban-noi-bo.html` | `IncomingDocumentsController` | `VanBanNoiBo()` |
| `pages/incoming-documents/chi-tiet-xu-ly-noi-bo.html` | `IncomingDocumentsController` | `ChiTietXuLyNoiBo(int id)` |
| `pages/incoming-documents/van-ban-cu.html` | `IncomingDocumentsController` | `VanBanCu()` |
| `pages/incoming-documents/xu-ly-van-ban-truong-phong.html` | `IncomingDocumentsController` | `XuLyVanBanTruongPhong()` |
| `pages/incoming-documents/chi-tiet-xu-ly.html` | `IncomingDocumentsController` | `ChiTietXuLy(int id)` |
| `pages/incoming-documents/xu-ly-van-ban-noi-bo.html` | `IncomingDocumentsController` | `XuLyVanBanNoiBo()` |

### 2.5. Văn bản đi (Outgoing Documents)

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/outgoing-documents/index.html` | `OutgoingDocumentsController` | `Index()` (Phối hợp kiểm tra) |
| `pages/outgoing-documents/chi-tiet-phoi-hop.html` | `OutgoingDocumentsController` | `ChiTietPhoiHop(int id)` |
| `pages/outgoing-documents/soan-thao.html` | `OutgoingDocumentsController` | `SoanThao()` |
| `pages/outgoing-documents/soan-thao-co-dong-dau.html` | `OutgoingDocumentsController` | `SoanThaoCoDongDau()` |
| `pages/outgoing-documents/soan-thao-khong-dong-dau.html` | `OutgoingDocumentsController` | `SoanThaoKhongDongDau()` |
| `pages/outgoing-documents/soan-thao-dong-dau-khong-so.html` | `OutgoingDocumentsController` | `SoanThaoDongDauKhongSo()` |
| `pages/outgoing-documents/chinh-sua-soan-thao.html` | `OutgoingDocumentsController` | `ChinhSuaSoanThao(int id)` |
| `pages/outgoing-documents/trinh-ky-van-ban.html` | `OutgoingDocumentsController` | `TrinhKyVanBan()` |
| `pages/outgoing-documents/chi-tiet-trinh-ky.html` | `OutgoingDocumentsController` | `ChiTietTrinhKy(int id)` |
| `pages/outgoing-documents/can-ky.html` | `OutgoingDocumentsController` | `CanKy()` |
| `pages/outgoing-documents/chi-tiet-can-ky.html` | `OutgoingDocumentsController` | `ChiTietCanKy(int id)` |
| `pages/outgoing-documents/chi-tiet-can-ky-noi-dung.html` | `OutgoingDocumentsController` | `ChiTietCanKyNoiDung(int id)` |
| `pages/outgoing-documents/chuyen-kiem-tra-ky.html` | `OutgoingDocumentsController` | `ChuyenKiemTraKy()` |
| `pages/outgoing-documents/ban-hanh.html` | `OutgoingDocumentsController` | `BanHanh()` |
| `pages/outgoing-documents/them-moi-ban-hanh.html` | `OutgoingDocumentsController` | `ThemMoiBanHanh()` |
| `pages/outgoing-documents/da-ban-hanh.html` | `OutgoingDocumentsController` | `DaBanHanh()` |
| `pages/outgoing-documents/chi-tiet-da-ban-hanh.html` | `OutgoingDocumentsController` | `ChiTietDaBanHanh(int id)` |
| `pages/outgoing-documents/ky-misa.html` | `OutgoingDocumentsController` | `KyMisa()` |
| `pages/outgoing-documents/ky-vcca.html` | `OutgoingDocumentsController` | `KyVcca()` |
| `pages/outgoing-documents/van-ban-cu.html` | `OutgoingDocumentsController` | `VanBanCu()` |

### 2.6. Xử lý Công việc (Tasks)

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/tasks/cong-viec-giao.html` | `TasksController` | `CongViecGiao()` |
| `pages/tasks/cong-viec-chi-dao.html` | `TasksController` | `CongViecChiDao()` |
| `pages/tasks/cong-viec-nhan.html` | `TasksController` | `CongViecNhan()` |
| `pages/tasks/cong-viec-xu-ly.html` | `TasksController` | `CongViecXuLy()` |
| `pages/tasks/de-nam-thong-tin.html` | `TasksController` | `DeNamThongTin()` |
| `pages/tasks/them-moi-cong-viec.html` | `TasksController` | `ThemMoiCongViec()` |
| `pages/tasks/chinh-sua-cong-viec.html` | `TasksController` | `ChinhSuaCongViec(int id)` |
| `pages/tasks/chi-tiet-cong-viec.html` | `TasksController` | `ChiTietCongViec(int id)` |
| `pages/tasks/chi-tiet-cong-viec-nhan.html` | `TasksController` | `ChiTietCongViecNhan(int id)` |
| `pages/tasks/chi-tiet-cong-viec-xu-ly.html` | `TasksController` | `ChiTietCongViecXuLy(int id)` |
| `pages/tasks/luu-tru-van-ban.html` | `TasksController` | `LuuTruVanBan()` |

### 2.7. Lịch công tác (Calendar)

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/calendar/phong-hop.html` | `CalendarController` | `PhongHop()` |
| `pages/calendar/chi-tiet-phong-hop.html` | `CalendarController` | `ChiTietPhongHop(int id)` |
| `pages/calendar/them-phong-hop.html` | `CalendarController` | `ThemPhongHop()` |
| `pages/calendar/sua-phong-hop.html` | `CalendarController` | `SuaPhongHop(int id)` |
| `pages/calendar/tuan-dang-ky.html` | `CalendarController` | `TuanDangKy()` |
| `pages/calendar/dang-ky-lich.html` | `CalendarController` | `DangKyLich()` |
| `pages/calendar/dang-ky-lich-create.html` | `CalendarController` | `DangKyLichCreate()` |
| `pages/calendar/dang-ky-lich-dhdn.html` | `CalendarController` | `DangKyLichDHDN()` |
| `pages/calendar/tong-hop-lich.html` | `CalendarController` | `TongHopLich()` |
| `pages/calendar/nhap-lich.html` | `CalendarController` | `NhapLich()` |

### 2.8. Tin tức & Tin nhắn

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/internal-news/index.html` | `InternalNewsController` | `Index()` |
| `pages/internal-news/create.html` | `InternalNewsController` | `Create()` / `Edit(int id)` |
| `pages/private-messages/index.html` | `PrivateMessagesController` | `Index()` |

### 2.9. Tiện ích (Utilities)

| Prototype File | Controller | Action |
|:---|:---|:---|
| `pages/tien-ich/phan-mem.html` | `UtilitiesController` | `PhanMem()` |
| `pages/tien-ich/mau-van-bang.html` | `UtilitiesController` | `MauVanBang()` |
| `pages/tien-ich/huong-dan-su-dung.html` | `UtilitiesController` | `HuongDanSuDung()` |

---

## 3. Hệ thống Roles & Phân quyền

### 3.1. Các Roles

| Role Key | Vị trí | Mô tả |
|:---|:---|:---|
| `Director` | Giám đốc | Toàn quyền xem, bút phê, chỉ đạo |
| `Principal` | Hiệu trưởng | Quản lý, chỉ đạo, phê duyệt |
| `Clerk` | Văn thư | Tiếp nhận, vào sổ, đóng dấu, cấp số |
| `AdministrativeHead` | Trưởng phòng Hành chính | Quản lý phòng, tham mưu, phối hợp |
| `DeputyHead` | Phó phòng | Quản lý thay, phối hợp |
| `Specialist` | Chuyên viên | Soạn thảo, ban hành, xử lý chuyên môn |

### 3.2. Ma trận quyền truy cập Module

| Module | Director | Principal | Clerk | AdminHead | DeputyHead | Specialist |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Trang chủ** | All | All | All | All | All | All |
| **Văn thư (Clerk)** | - | - | All | - | - | - |
| **Tin nội bộ** | Yes | Yes | - | Yes | Yes | Yes |
| **Tin nhắn riêng** | Yes | Yes | - | Yes | Yes | Yes |
| **Văn bản đến** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Văn bản đi** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Lịch công tác** | Yes | Yes | Yes | Yes | Yes | Yes |
| **Xử lý công việc** | Yes | Yes | - | Yes | Yes | Yes |
| **Tiện ích** | Yes | Yes | Yes | Yes | Yes | Yes |

### 3.3. Ma trận quyền chi tiết trong Sidebar

```csharp
// Văn thư - Chỉ Clerk
@if (User.IsInRole("Clerk")) { /* Menu nhóm Văn thư */ }

// Tin nội bộ - Director, Principal, AdminHead, DeputyHead, Specialist
@if (User.IsInRole("Director") || User.IsInRole("Principal") || User.IsInRole("AdministrativeHead") || User.IsInRole("DeputyHead") || User.IsInRole("Specialist")) { /* Menu Tin nội bộ */ }

// Văn bản bút phê - Director, Principal
@if (User.IsInRole("Director") || User.IsInRole("Principal")) { /* Bút phê */ }

// Văn bản chỉ đạo - Principal only
@if (User.IsInRole("Principal")) { /* Chỉ đạo */ }

// Văn bản tham mưu - AdministrativeHead only
@if (User.IsInRole("AdministrativeHead")) { /* Tham mưu */ }

// Soạn thảo - Specialist only
@if (User.IsInRole("Specialist")) { /* Soạn thảo */ }

// Trình ký - Director, AdminHead, DeputyHead
@if (User.IsInRole("Director") || User.IsInRole("AdministrativeHead") || User.IsInRole("DeputyHead")) { /* Trình ký */ }

// VB phối hợp kiểm tra - Director, Principal, AdminHead, DeputyHead
@if (User.IsInRole("Director") || User.IsInRole("Principal") || User.IsInRole("AdministrativeHead") || User.IsInRole("DeputyHead")) { /* Phối hợp */ }

// Ban hành - Specialist only
@if (User.IsInRole("Specialist")) { /* Ban hành */ }

// Công việc giao/chỉ đạo - Director, Principal, AdminHead, DeputyHead
@if (User.IsInRole("Director") || User.IsInRole("Principal") || User.IsInRole("AdministrativeHead") || User.IsInRole("DeputyHead")) { /* Giao/Chỉ đạo */ }

// Lưu trữ - Principal, Clerk, AdminHead, DeputyHead, Specialist
@if (User.IsInRole("Principal") || User.IsInRole("Clerk") || User.IsInRole("AdministrativeHead") || User.IsInRole("DeputyHead") || User.IsInRole("Specialist")) { /* Lưu trữ */ }
```

---

## 4. Hướng dẫn từng bước Tích hợp

### Bước 1: Tạo project .NET và cấu trúc thư mục

```bash
dotnet new mvc -n UniversityManagement
cd UniversityManagement
```

Tạo cấu trúc thư mục:

```
wwwroot/
├── css/
├── js/
└── images/          ← Copy từ assets/images/

Views/
├── Shared/
│   ├── _Layout.cshtml
│   ├── _Sidebar.cshtml
│   └── _Header.cshtml
├── Home/
│   └── Index.cshtml
├── Account/
│   └── Login.cshtml
├── Clerk/
│   └── [các view]
├── IncomingDocuments/
│   └── [các view]
├── OutgoingDocuments/
│   └── [các view]
├── Tasks/
│   └── [các view]
├── Calendar/
│   └── [các view]
├── InternalNews/
│   └── [các view]
├── PrivateMessages/
│   └── [các view]
└── Utilities/
    └── [các view]
```

### Bước 2: Chuyển đổi Layout chính

**Từ:** `shared/_Layout.html` → **Sang:** `Views/Shared/_Layout.cshtml`

Những thay đổi chính:

```html
<!-- XÓA: CDN Tailwind (thay bằng build production) -->
<!-- <script src="https://cdn.tailwindcss.com"></script> -->

<!-- THAY BẰNG: CSS file đã build -->
<link rel="stylesheet" href="~/css/site.css" />

<!-- XÓA: Mock data script -->
<!-- <script src="../shared/mock-data.js"></script> -->

<!-- THAY: div#content-placeholder → @RenderBody() -->
<div id="content-placeholder" class="flex-1 overflow-y-auto">
    @RenderBody()
</div>

<!-- XÓA: Tất cả JS mock (renderRazor, loadPage, initLayout...) -->
<!-- Thay bằng script production -->
<script src="~/js/site.js"></script>
```

### Bước 3: Chuyển đổi Partial Views

**Sidebar** (`components/_Sidebar.html` → `Views/Shared/_Sidebar.cshtml`):

```html
<!-- Prototype (commented Razor): -->
<!-- @if (User.IsInRole("Clerk")) { -->
<div id="group-clerk">...</div>
<!-- } -->

<!-- .NET Real Razor: -->
@if (User.IsInRole("Clerk")) {
    <div id="group-clerk">...</div>
}
```

**Header** (`components/_Header.html` → `Views/Shared/_Header.cshtml`):

```html
<!-- Prototype: -->
<img src="@Model.UserAvatar" />
<p>@Model.UserName</p>
<p>@Model.UserRole</p>

<!-- .NET: Dùng User Claims hoặc ViewBag -->
<img src="@User.FindFirst("Avatar")?.Value" alt="Avatar" />
<p>@User.Identity.Name</p>
<p>@User.FindFirst("Role")?.Value</p>

<!-- Hoặc dùng ViewBag từ Controller: -->
<img src="@ViewBag.UserAvatar" />
<p>@ViewBag.UserName</p>
<p>@ViewBag.UserRole</p>
```

### Bước 4: Chuyển đổi Pages sang Views

Mỗi file HTML fragment trong `pages/` sẽ trở thành 1 Razor view. Loại bỏ `<html>`, `<head>`, `<body>` (Layout sẽ lo phần này), giữ lại nội dung content.

**Prototype (fragment):**
```html
<!-- pages/incoming-documents/index.html -->
<div class="p-6">
    <table>...</table>
</div>
```

**.NET (cshtml):**
```html
<!-- Views/IncomingDocuments/Index.cshtml -->
@model IEnumerable<VanBanDenViewModel>

<div class="p-6">
    <table>
        @foreach (var item in Model)
        {
            <tr>
                <td>@item.SoDen</td>
                <td>@item.TrichYeu</td>
            </tr>
        }
    </table>
</div>
```

### Bước 5: Cấu hình Tailwind CSS cho Production

Thay vì dùng CDN, build Tailwind CSS:

```bash
# Trong thư mục wwwroot:
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

`tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../Views/**/*.cshtml"],
    theme: {
        extend: {
            colors: {
                // Copy TOÀN BỘ section "colors" từ inline config trong _Layout.html
                // (Material Design 3 color tokens: primary, secondary, tertiary, surface, error...)
            },
            fontFamily: {
                headline: ["Manrope"],
                body: ["Inter"],
                label: ["Inter"]
            }
        }
    }
};
```

Build script trong `package.json`:
```json
{
    "scripts": {
        "build:css": "tailwindcss -i ./src/input.css -o ./wwwroot/css/site.css --minify",
        "watch:css": "tailwindcss -i ./src/input.css -o ./wwwroot/css/site.css --watch"
    }
}
```

### Bước 6: Migrate Authentication

**Loại bỏ hoàn toàn:** `shared/mock-data.js`, `window.MOCK_USERS`, `localStorage` auth.

**Thay bằng:** ASP.NET Core Identity

```csharp
// Program.cs
builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

// Seed roles
await roleManager.CreateAsync(new IdentityRole("Director"));
await roleManager.CreateAsync(new IdentityRole("Principal"));
await roleManager.CreateAsync(new IdentityRole("Clerk"));
await roleManager.CreateAsync(new IdentityRole("AdministrativeHead"));
await roleManager.CreateAsync(new IdentityRole("DeputyHead"));
await roleManager.CreateAsync(new IdentityRole("Specialist"));
```

### Bước 7: Chuyển đổi JavaScript

**Loại bỏ:**
- `renderRazor()` - không cần nữa (Razor server-side xử lý)
- `loadPage()` - thay bằng `<a href>` hoặc AJAX với PartialView
- `initLayout()` - Layout .NET tự render
- `updatePageTitle()` - dùng `@ViewData["Title"]` trong mỗi view
- `logout()` - dùng `AccountController.Logout()`

**Giữ lại (chuyển sang wwwroot/js/):**
- `toggleSidebarMenu()` - accordion menu
- `toggleExpand()` - expand/collapse text
- `initViewMore()` - view more button logic
- Các script inline trong pages (table interactions, form handling)

**2 lựa chọn approach:**

| Approach | Ưu điểm | Nhược điểm |
|:---|:---|:---|
| **Traditional MVC** (dùng `<a href>`) | Đơn giản, SEO-friendly, .NET-native | Mỗi click load lại toàn bộ layout |
| **SPA-like** (AJAX + PartialView) | Mượt như prototype hiện tại | Phức tạp hơn, cần xử lý script re-execution |

**Khuyến nghị:** Dùng Traditional MVC cho giai đoạn đầu, có thể upgrade lên SPA-like sau.

---

## 5. Hướng dẫn Mapping Razor Syntax

### 5.1. Thay thế @Model placeholders

| Prototype | .NET Equivalent |
|:---|:---|
| `@Model.UserName` | `@User.Identity.Name` hoặc `@ViewBag.UserName` |
| `@Model.UserRole` | `@User.FindFirst("Role")?.Value` hoặc `@ViewBag.UserRole` |
| `@Model.UserAvatar` | `@ViewBag.UserAvatar` hoặc từ Claim |
| `@Model.DashboardTitle` | `@ViewData["Title"]` hoặc `@ViewBag.DashboardTitle` |

### 5.2. Chuyển đổi Role-based Conditionals

| Prototype (Comment) | .NET (Real Razor) |
|:---|:---|
| `<!-- @if (User.IsInRole("Director")) { -->` | `@if (User.IsInRole("Director")) {` |
| `<!-- } -->` | `}` |
| `<!-- @if (User.IsInRole("A") \|\| User.IsInRole("B")) { -->` | `@if (User.IsInRole("A") \|\| User.IsInRole("B")) {` |

### 5.3. Form Submission

**Prototype:**
```javascript
// Trong private-messages/index.html
console.log('Dữ liệu gửi lên .NET Controller:', data);
```

**.NET:**
```html
<form asp-action="SendMessage" asp-controller="PrivateMessages" method="post">
    <input asp-for="Title" />
    <textarea asp-for="Content"></textarea>
    <button type="submit">Gửi</button>
</form>
```

---

## 6. Asset Migration

### 6.1. Font Awesome
```html
<!-- Giữ nguyên CDN hoặc self-host -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<!-- Hoặc download về wwwroot/lib/font-awesome/ -->
```

### 6.2. Google Fonts
```html
<!-- Giữ nguyên CDN -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
```

### 6.3. Images
```
Copy assets/images/*.svg → wwwroot/images/
```

Cập nhật paths trong Sidebar, Header từ `../assets/images/` thành `~/images/`.

### 6.4. CKEditor (dùng trong Private Messages & Internal News)

```html
<!-- CDN approach (giữ nguyên) -->
<script src="https://cdn.ckeditor.com/ckeditor5/41.1.0/classic/ckeditor.js"></script>

<!-- Hoặc self-host vào wwwroot/lib/ckeditor5/ -->
```

---

## 7. Danh sách Views cần tạo (Checklist)

### Shared (3 files)
- [ ] `Views/Shared/_Layout.cshtml`
- [ ] `Views/Shared/_Sidebar.cshtml`
- [ ] `Views/Shared/_Header.cshtml`

### Account (1 file)
- [ ] `Views/Account/Login.cshtml`

### Home (1 file)
- [ ] `Views/Home/Index.cshtml`

### Clerk (16 files)
- [ ] `Views/Clerk/SoVanBan.cshtml`
- [ ] `Views/Clerk/ChuaTiepNhan.cshtml`
- [ ] `Views/Clerk/ChiTietChuaTiepNhan.cshtml`
- [ ] `Views/Clerk/TiepNhanVanBan.cshtml`
- [ ] `Views/Clerk/VaoSoVanBanDen.cshtml`
- [ ] `Views/Clerk/ChoButPhe.cshtml`
- [ ] `Views/Clerk/ChuyenThucHien.cshtml`
- [ ] `Views/Clerk/ChiTietChuyenThucHien.cshtml`
- [ ] `Views/Clerk/DanhSachVBDen.cshtml`
- [ ] `Views/Clerk/DanhSachVanBanDen.cshtml`
- [ ] `Views/Clerk/ChiTietVanBanDen.cshtml`
- [ ] `Views/Clerk/CapSo.cshtml`
- [ ] `Views/Clerk/ChiTietCapSo.cshtml`
- [ ] `Views/Clerk/BanHanhVanBan.cshtml`
- [ ] `Views/Clerk/DongDauVanBan.cshtml`
- [ ] `Views/Clerk/DanhSachVBDi.cshtml`

### Incoming Documents (13 files)
- [ ] `Views/IncomingDocuments/Index.cshtml`
- [ ] `Views/IncomingDocuments/DanhSachVanBanDen.cshtml`
- [ ] `Views/IncomingDocuments/VanBanButPhe.cshtml`
- [ ] `Views/IncomingDocuments/ChiTietVanBanButPhe.cshtml`
- [ ] `Views/IncomingDocuments/VanBanChiDao.cshtml`
- [ ] `Views/IncomingDocuments/ChiTietVanBanChiDao.cshtml`
- [ ] `Views/IncomingDocuments/VanBanThamMuu.cshtml`
- [ ] `Views/IncomingDocuments/VanBanNoiBo.cshtml`
- [ ] `Views/IncomingDocuments/ChiTietXuLyNoiBo.cshtml`
- [ ] `Views/IncomingDocuments/VanBanCu.cshtml`
- [ ] `Views/IncomingDocuments/XuLyVanBanTruongPhong.cshtml`
- [ ] `Views/IncomingDocuments/ChiTietXuLy.cshtml`
- [ ] `Views/IncomingDocuments/XuLyVanBanNoiBo.cshtml`

### Outgoing Documents (20 files)
- [ ] `Views/OutgoingDocuments/Index.cshtml`
- [ ] `Views/OutgoingDocuments/ChiTietPhoiHop.cshtml`
- [ ] `Views/OutgoingDocuments/SoanThao.cshtml`
- [ ] `Views/OutgoingDocuments/SoanThaoCoDongDau.cshtml`
- [ ] `Views/OutgoingDocuments/SoanThaoKhongDongDau.cshtml`
- [ ] `Views/OutgoingDocuments/SoanThaoDongDauKhongSo.cshtml`
- [ ] `Views/OutgoingDocuments/ChinhSuaSoanThao.cshtml`
- [ ] `Views/OutgoingDocuments/TrinhKyVanBan.cshtml`
- [ ] `Views/OutgoingDocuments/ChiTietTrinhKy.cshtml`
- [ ] `Views/OutgoingDocuments/CanKy.cshtml`
- [ ] `Views/OutgoingDocuments/ChiTietCanKy.cshtml`
- [ ] `Views/OutgoingDocuments/ChiTietCanKyNoiDung.cshtml`
- [ ] `Views/OutgoingDocuments/ChuyenKiemTraKy.cshtml`
- [ ] `Views/OutgoingDocuments/BanHanh.cshtml`
- [ ] `Views/OutgoingDocuments/ThemMoiBanHanh.cshtml`
- [ ] `Views/OutgoingDocuments/DaBanHanh.cshtml`
- [ ] `Views/OutgoingDocuments/ChiTietDaBanHanh.cshtml`
- [ ] `Views/OutgoingDocuments/KyMisa.cshtml`
- [ ] `Views/OutgoingDocuments/KyVcca.cshtml`
- [ ] `Views/OutgoingDocuments/VanBanCu.cshtml`

### Tasks (11 files)
- [ ] `Views/Tasks/CongViecGiao.cshtml`
- [ ] `Views/Tasks/CongViecChiDao.cshtml`
- [ ] `Views/Tasks/CongViecNhan.cshtml`
- [ ] `Views/Tasks/CongViecXuLy.cshtml`
- [ ] `Views/Tasks/DeNamThongTin.cshtml`
- [ ] `Views/Tasks/ThemMoiCongViec.cshtml`
- [ ] `Views/Tasks/ChinhSuaCongViec.cshtml`
- [ ] `Views/Tasks/ChiTietCongViec.cshtml`
- [ ] `Views/Tasks/ChiTietCongViecNhan.cshtml`
- [ ] `Views/Tasks/ChiTietCongViecXuLy.cshtml`
- [ ] `Views/Tasks/LuuTruVanBan.cshtml`

### Calendar (10 files)
- [ ] `Views/Calendar/PhongHop.cshtml`
- [ ] `Views/Calendar/ChiTietPhongHop.cshtml`
- [ ] `Views/Calendar/ThemPhongHop.cshtml`
- [ ] `Views/Calendar/SuaPhongHop.cshtml`
- [ ] `Views/Calendar/TuanDangKy.cshtml`
- [ ] `Views/Calendar/DangKyLich.cshtml`
- [ ] `Views/Calendar/DangKyLichCreate.cshtml`
- [ ] `Views/Calendar/DangKyLichDHDN.cshtml`
- [ ] `Views/Calendar/TongHopLich.cshtml`
- [ ] `Views/Calendar/NhapLich.cshtml`

### Internal News (2 files)
- [ ] `Views/InternalNews/Index.cshtml`
- [ ] `Views/InternalNews/Create.cshtml`

### Private Messages (1 file)
- [ ] `Views/PrivateMessages/Index.cshtml`

### Utilities (3 files)
- [ ] `Views/Utilities/PhanMem.cshtml`
- [ ] `Views/Utilities/MauVanBang.cshtml`
- [ ] `Views/Utilities/HuongDanSuDung.cshtml`

**Tổng cộng: 81 views** (bao gồm 3 Shared)

---

## 8. Lưu ý Quan trọng

### 8.1. Hai file trùng chức năng trong Clerk
- `clerk/danh-sach-vb-den.html` và `clerk/danh-sach-van-ban-den.html` có nội dung tương tự.
- **Kiểm tra lại design** để xác định đây là 2 view riêng hay trùng lặp → gộp lại nếu cần.

### 8.2. File tham chiếu nhưng không tồn tại
- Sidebar tham chiếu `pages/tien-ich/nhom-nguoi-nhan.html` nhưng file này **không tồn tại**.
- Cần tạo view `Views/Utilities/NhomNguoiNhan.cshtml` hoặc xóa link khỏi Sidebar.

### 8.3. Header buttons chưa hoạt động
- Button "Lịch tuần" và "Hỗ trợ kỹ thuật" trong `_Header.html` chưa có `onclick`.
- Cần quyết định: tạo modal/redirect hoặc tích hợp API khi backend sẵn sàng.

### 8.4. Image external (Login page)
- Login page dùng ảnh background từ `cdn2.fptshop.com.vn` → download về `wwwroot/images/` để tránh broken link.

### 8.5. Data Migration
Tất cả data trong prototype là mock/hardcoded. Khi tích hợp .NET:
- Table data → Entity Framework + database
- Form submissions → Controller Actions + ModelState
- Search/filter → Server-side query with LINQ
- Stat cards (Home dashboard) → API/Service aggregations

---

