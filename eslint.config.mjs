import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

// Flat config for the MyTourbook homepage.
//
// Stack: typescript-eslint (TS/JS), eslint-plugin-react-hooks (React hooks
// rules), eslint-plugin-jsx-a11y (accessibility). We enable only the two
// battle-tested react-hooks rules rather than the v7 `recommended` preset,
// which also turns on the stricter React-Compiler-style rules (use-memo,
// immutability, purity, ...) that tend to false-positive on Docusaurus
// components and would make the structural gate noisy.

export default tseslint.config(
  {
    ignores: [
      'build/**',
      '.docusaurus/**',
      '.cache-loader/**',
      'node_modules/**',
      'pnpm-lock.yaml',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {'react-hooks': reactHooks},
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
      ],
    },
  },
);
