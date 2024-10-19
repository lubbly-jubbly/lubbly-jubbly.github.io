/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      background: 'white',
      'header-1': '#ba506c',
      'skills-bubble': '#fafad3',
      'active-1': '#ed6864',
      'dark-text': '#414558',
      'employer-blue': '#377acc',
      'employee-burnt-orange': '#d98750',
      'switch-orange': '#ff5c4a',

      'dark-red': '#bd261b',
      'medium-blue': '#0679f5',
      'light-blue': '#46bcfe',
      green: '#25b264',
      orange: '#f47d11',
      purple: '#9847d4',
      yellow: '#fecb00',
      'pale-yellow': '#f8fae3',
      grey: '#a8a8a8',
      'light-blue-grey': '#f7fafa',
      languages: '#bd0000',
      'libraries-and-frameworks': '#0000ff',
      data: '#8a00da',
      other: 'rgb(0, 124, 41)',

      'placeholder-text': '#777c99',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        typing: 'typing 3s steps(30, end) 1',
      },
    },
  },
  plugins: [],
}
