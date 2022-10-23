/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        pcgray: '#0E1114',
        scgray: '#7D8DA7',

        pcmodal: '#191D24',
        pcdark: '#080A0c',
        pcyellow: '#FFC71F',
      }),
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    // preflight: true,
    // Phải set false để có thể sử dụng các component của antd không bị lỗi
    // Vấn đề là: khi set false => sẽ không có border cho 1 số thuộc tính?
    // Có 2 cách:
    // Cách 1: set true, khi nào gặp lỗi antd khác thì sửa sau => có lỗi tiềm tàng
    // Cách 2: set false, tìm cách nào đó để cho có border lại
    // Vì cần nhanh => chọn set true
    // Vì style UI đã chọn theo tailwind, nên chọn base là tailwind.
    // còn antd chỉ để sài cho component & chức năng

    // Test thử = false & tự set base => dùng cách 2
  },
}
