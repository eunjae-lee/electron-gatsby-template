module.exports = {
  extends: ["algolia/react", "algolia/typescript"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/extensions": "off",
    "import/no-unresolved": "off",
  },
  overrides: [
    {
      files: ["*.config.js", "gatsby-*.js", "src/electron.js"],
      rules: {
        "import/no-commonjs": "off",
      },
    },
  ],
}
