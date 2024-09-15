import globals from "globals";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {
    languageOptions: { globals: globals.browser }
  }
];