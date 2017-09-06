module.exports = {
  extends: [
    "./rules/main",
    "./rules/react",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    "react",
    "jsx-a11y",
  ],
  rules: {
    strict: "error",
  },
}
