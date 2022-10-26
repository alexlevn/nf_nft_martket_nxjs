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
        scgray_3: '#637592',
        scgray_4: '#29313D',

        pcmodal: '#191D24',
        pcdark: '#080A0c',
        pcgreen: '#64D121',

        pcyellow: '#FFC71F',
        pcblue: '#027EF2',
        pcgray_2: '#B6BFCD',
      }),
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
