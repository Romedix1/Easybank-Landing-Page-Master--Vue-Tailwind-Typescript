/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,ts,,tsx}'],
  theme: {
    extend: {
      colors: {
        DarkBlue: 'hsl(233, 26%, 24%)',
        LimeGreen: 'hsl(136, 65%, 51%)',
        BrightCyan: 'hsl(192, 70%, 51%)',
        GrayishBlue: 'hsl(233, 8%, 62%)',
        LightGrayishBlue: 'hsl(220, 16%, 96%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}

