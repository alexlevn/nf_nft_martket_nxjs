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
        pcdark: '#080A0c',
        pcyellow: '#FFC71F',
      }),
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    // preflight: true,
  },
}
