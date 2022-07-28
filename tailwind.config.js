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
        carouselBorder: '#E6E6E6',
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
        '20-34': ['20px', '34px'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '40/23': '40 / 23',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
