module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'next/core-web-vitals',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 1,
    complexity: [2, { max: 18 }],
    'consistent-return': 0,
    'import/order': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx'],
      },
    ],
    'import/prefer-default-export': 0,
    'no-console': [2, { allow: ['error', 'info', 'warn'] }],
    'no-extra-boolean-cast': 0,
    'no-html-link-for-pages': 0,
    'no-nested-ternary': 2,
    'no-param-reassign': [2, { props: true, ignorePropertyModificationsForRegex: ['Ref$'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prefer-const': 2,
    'react/function-component-definition': 0,
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'never' }],
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'spaced-comment': [2, 'always', { markers: ['/'] }],
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['a'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'arrow-body-style': 0,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` & 'next' related packages come first.
              ['^react', 'next', '^@?\\w'],
              // Internal packages.
              ['^~?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ],
          },
        ],
      },
    },
  ],
}
