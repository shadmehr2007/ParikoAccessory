module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBrown: "#DDCCAD",
        darkBrown: "#4D4730",
        middleBrown: "#805F37",
        brown: "#AC8A53",
      },
      fontFamily: {
        sans: ["Iran", "yekan", "sans-serif"]
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "group-hover"],
      textColor: ["group-hover"],
    },
  },
  plugins: [],
};
