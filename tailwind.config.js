module.exports = {
  purge: ["./src/**/*.tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': "#0B172A",
        "slider-blue": "#10213c",
        "light-blue": "#d0e1f9",
        "regal-red": "#e38168"
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
