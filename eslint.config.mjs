import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Define las extensiones a analizar
    languageOptions: {
      globals: globals.browser, // Habilita variables globales del navegador
    },
    rules: {
      "no-console": "warn", // Ejemplo: advertencia para uso de console.log
      "no-unused-vars": "error", // Error si hay variables no usadas
    },
  },
];
