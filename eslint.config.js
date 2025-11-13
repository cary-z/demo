import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 副作用，就是单纯 import 没 from
            ['^\\u0000'],
            // react 全家桶
            ['^react'],
            // node 内置，web 项目应该没有
            ['^node:', '^node:.*\\u0000$'],
            // mono 包，@foo
            ['^@?\\w', '^@?\\w.*\\u0000$'],
            // 自定义别名的包，@/bar
            ['(?<!\\u0000)$', '(?<=\\u0000)$'],
            // 相对路径
            ['^\\..*\\u0000$', '^\\.'],
            // 样式引入
            ['^.+\\.(s?css|less)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      // 强制类型导入使用 type 修饰符
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
        },
      ],
      // 强制类型导出使用 type 修饰符
      '@typescript-eslint/consistent-type-exports': [
        'error',
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      // 禁止重复引入并自动合并（import 插件支持自动修复）
      'no-duplicate-imports': 'off',
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      // 其他规则
      'react-refresh/only-export-components': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);
