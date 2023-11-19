module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "vitest.setup.ts",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
    ecmaVersion: 15,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jest-dom",
    "testing-library",
    "unused-imports",
    "react-refresh",
  ],
  rules: {
    curly: "error",
    eqeqeq: "error",
    "no-else-return": "error",
    "no-empty-pattern": "error",
    "no-param-reassign": "error",
    "no-redeclare": "error",
    "no-return-await": "error",
    "no-useless-return": "error",
    "prefer-template": "error",
    radix: "error",
    "unused-imports/no-unused-imports": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-refresh/only-export-components": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-key": [
      "error",
      { checkFragmentShorthand: true, warnOnDuplicates: true },
    ],
    "react/self-closing-comp": "error",
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-floating-promises": [
      "error",
      {
        ignoreIIFE: true,
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
