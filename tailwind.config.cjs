module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: '#b91c1c' },
      transitionTimingFunction: { DEFAULT: 'cubic-bezier(.4,0,.2,1)' }
    }
  },
  plugins: [],
}
