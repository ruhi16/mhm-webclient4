/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage:{
        bgHero1: 'url(https://img.freepik.com/free-vector/abstract-watercolor-background_23-2149050921.jpg?w=1380&t=st=1708914486~exp=1708915086~hmac=83efbf65509b92b07e0120cb471f9df49bfde5fa0cf087ab12d5e0cfeef043f6)'
      },
      colors: {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
  ],
}