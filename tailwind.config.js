/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.html", // Đảm bảo quét cả các file trong thư mục pages của bạn
  ],
  theme: {
    extend: {
      colors: {
        'table-head': '#EDEFF1',
        // Màu chủ đạo xanh dương xuất hiện xuyên suốt các nút và text active
        primary: {
          light: '#eff6ff', // blue-50 (dùng cho hover background)
          DEFAULT: '#2563eb', // blue-600 (màu chính của nút số, icon)
          dark: '#1d4ed8', // blue-700 (màu nút Lưu, Tạo sổ)
          hover: '#1e40af', // blue-800
        },
        // Hệ màu xám cho border và text phụ
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb', // Màu border-gray-200 bạn dùng rất nhiều
          300: '#d1d5db',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        },
        // Màu đỏ cho thông báo và nút xóa
        danger: {
          light: '#fef2f2', // red-50
          DEFAULT: '#ef4444', // red-500
          dark: '#b91c1c', // red-700
        }
      },
     fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '26px',
      },
      spacing: {
        'sidebar': '16rem',
        'header': '4rem', // h-16
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      transitionProperty: {
        'height': 'max-height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}