export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#061f49',
        ink: '#10284f',
        cobalt: '#1067ff',
        sky: '#12b8e8',
        pearl: '#f7f9fc',
        ivory: '#fbfaf6',
        mist: '#eaf1fb',
        line: '#dce6f5',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(6, 31, 73, 0.10)',
        glow: '0 14px 34px rgba(16, 103, 255, 0.24)',
      },
    },
  },
  plugins: [],
}
