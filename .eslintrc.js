module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
    "next/babel"
  ],
  rules: {
    semi: ["error", "always"],
  },
};
