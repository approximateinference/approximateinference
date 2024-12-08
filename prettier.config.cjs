/** @type {import("prettier").Config} */
module.exports = {
  ...require("prettier-config-standard"),
  pluginSearchDirs: [__dirname],
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  useTabs: false,
  printWidth: 88,
};
