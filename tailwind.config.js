/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navBg: '#021521',
        textDark: '#022032',
        bg: '#E9E9E9',
        textRed: '#9C0000',
        breakingRed: '#BB1919',
        newsListBg: '#DCDCDC',
        tech: '#007FBD',
        world: '#0092A8',
        infoText: '#819099',
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      fontSize: {
        '14-16': ['14px', '16px'],
        '14-20': ['14px', '20px'],
        '14-22': ['14px', '22px'],
        '16-19': ['16px', '19px'],
        '18-28': ['18px', '28px'],
        '20-22': ['20px', '22px'],
        '20-28': ['20px', '28px'],
      },
      boxShadow: {
        '3xl': '0px 6px 8px -5px rgba(0, 0, 0, 0.2)',
      },
      width: {
        '100/3': '32%',
        130: '130%',
      },
      minHeight: {
        11: '11rem',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
