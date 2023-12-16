module.exports = {
  root: true,
  extends: "@react-native",
  rules: {
    quotes: ["error", "double"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
