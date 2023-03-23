/* eslint-disable @typescript-eslint/no-var-requires */
const plugins = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    // loại bỏ đi thằng container mặc định của tailwind
    container: false
  },
  theme: {
    extend: {
      colors: {
        primary: '#ff0000'
      },
      boxShadow: {
        before: '0px 0px 7px 8px rgba(255, 0, 0, 0.3019607843)',
        after: '0px 0px 7px 15px rgba(255, 0, 0, 0.3019607843)',
        custom: 'rgba(100, 100, 111, 0.2) 0px 7px 29px'
      }
    }
  },
  plugins: [
    plugins(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: 1660 + 'px',
          margin: 'auto'
        }
      })
    })
  ]
}
