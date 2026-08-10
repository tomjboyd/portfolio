import js from "@eslint/js";
import globals from "globals";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "./dist/**",
    "./node_modules/**",
    "./.astro/**",
    "./.cache/**",
    "./public/**",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{ts,mts,cts}"],
    plugins: { tseslint },
    extends: ["tseslint/recommended"],
  },
  {
    files: ["**/*.astro"],
    plugins: { eslintPluginAstro },
    extends: [
      "eslintPluginAstro/recommended",
      "eslintPluginAstro/jsx-a11y-strict",
    ],
  },
]);
