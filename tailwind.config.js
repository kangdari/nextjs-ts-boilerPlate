const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_4000 = { ...Array.from(Array(4001)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    './pages/**/*.{js.jsx,ts,tsx}',
    './components/**/*.{js.jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        // lg: '1060px',
        lg: '1280px',
        xl: '1920px',
      },
      width: px0_4000,
      height: px0_4000,
      borderRadius: px0_200,
      borderWidth: px0_100,
      lineHeight: px0_100,
      maxWidth: px0_4000,
      maxHeight: px0_4000,
      minWidth: px0_4000,
      minHeight: px0_4000,
      spacing: px0_200,
      rounded: px0_100,
      fontSize: {
        d1: [
          '64px',
          {
            lineHeight: '84px',
          },
        ],
        d2: [
          '56px',
          {
            lineHeight: '72px',
          },
        ],
        d3: [
          '48px',
          {
            lineHeight: '62px',
          },
        ],
        h1: [
          '32px',
          {
            lineHeight: '44px',
          },
        ],
        h2: [
          '24px',
          {
            lineHeight: '34px',
          },
        ],
        h3: [
          '20px',
          {
            lineHeight: '28px',
          },
        ],
        h4: [
          '18px',
          {
            lineHeight: '26px',
          },
        ],
        h5: [
          '16px',
          {
            lineHeight: '22px',
          },
        ],
        p: [
          '15px',
          {
            lineHeight: '24px',
          },
        ],
        b1: [
          '18px',
          {
            lineHeight: '28px',
          },
        ],
        b2: [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        b3: [
          '14px',
          {
            lineHeight: '20px',
          },
        ],
        b4: [
          '12px',
          {
            lineHeight: '18px',
          },
        ],
        l1: [
          '18px',
          {
            lineHeight: '28px',
          },
        ],
        l2: [
          '16px',
          {
            lineHeight: '24px',
          },
        ],
        l3: [
          '14px',
          {
            lineHeight: '20px',
          },
        ],
        l4: [
          '12px',
          {
            lineHeight: '18px',
          },
        ],
        l5: [
          '10px',
          {
            lineHeight: '14px',
          },
        ],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        'grey-1': '#F8F8F8',
        'grey-2': '#F3F4F5',
        'grey-3': '#EAEBED',
        'grey-4': '#DCDEE0',
        'grey-5': '#CBCED0',
        'grey-6': '#93999F',
        'grey-7': '#777F88',
        'grey-8': '#5E656E',
        'grey-9': '#464C53',
        'grey-10': '#2E3338',
        'grey-11': '#16191D',
        'grey-12': '#0B0D0F',
        'blue-1': '#F0F6FF',
        'blue-2': '#D0E2FF',
        'blue-3': '#96BEFF',
        'blue-4': '#70A6FF',
        'blue-5': '#4088FF',
        'blue-6': '#2074FF',
        'blue-7': '#0060FF',
        'blue-8': '#004ED1',
        'red-1': '#FFF7F7',
        'red-2': '#FFD0D7',
        'red-3': '#FF9DA4',
        'red-4': '#FF6168',
        'red-5': '#F2434A',
        'red-6': '#D63037',
        'yellow-1': '#FEF5DB',
        'yellow-2': '#FEECB8',
        'yellow-3': '#FDD970',
        'yellow-4': '#FCC629',
        'yellow-5': '#FBBC05',
        'yellow-6': '#E0A500',
        'green-1': '#E5FFEF',
        'green-2': '#AAFFCC',
        'green-3': '#39FF88',
        'green-4': '#00CC52',
        'green-5': '#00AA44',
        'green-6': '#008F33',
        'info-blue-1': '#E3F0FC',
        'info-blue-2': '#C6E0F8',
        'info-blue-3': '#8EC1F1',
        'info-blue-4': '#55A2EA',
        'info-blue-5': '#3993E7',
        'info-blue-6': '#1B7FDC',
        yellow: '#FCEC2E',
      },
    },
    fontFamily: {
      pretendard: 'pretendard',
    },
  },
  plugins: [],
};
