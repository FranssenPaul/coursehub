import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended, // Base recommended rules
      ...tseslint.configs.recommendedTypeChecked, // Type-aware lint rules for TypeScript
      prettierConfig, // Disable ESLint rules conflicting with Prettier
    ],
    files: ['**/*.{ts,tsx}'], // Lint TypeScript and TSX files
    languageOptions: {
      ecmaVersion: 2020, // Enable modern ECMAScript features
      globals: globals.browser, // Add browser globals
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'], // TypeScript project references
        tsconfigRootDir: import.meta.dirname, // Root directory for `tsconfig`
        ecmaFeatures: { jsx: true }, // Enable JSX
      },
    },
    settings: {
      react: { version: '18.3' }, // Set React version
    },
    plugins: {
      react, // Add React plugin
      'react-hooks': reactHooks, // Add React Hooks plugin
      'react-refresh': reactRefresh, // Add React Refresh plugin
      prettier, // Add Prettier plugin
    },
    rules: {
      ...react.configs.recommended.rules, // Enable recommended React rules
      ...react.configs['jsx-runtime'].rules, // Enable rules for JSX runtime
      ...reactHooks.configs.recommended.rules, // Enable recommended React Hooks rules

      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Prettier rules
      'prettier/prettier': 'warn', // Display Prettier issues as warnings
    },
  }
);
