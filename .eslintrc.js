module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'editorconfig',
    'import',
    'promise',
    'simple-import-sort',
    'sonarjs',
    'unused-imports'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', {
      'ArrayExpression': {
        'multiline': true,
        'minItems': 3
      },
      'ArrayPattern': { 'minItems': 3 },
    }],
    'arrow-parens': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'brace-style': 'off',
    'camelcase': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
    }],
    'consistent-return': 'error',
    'curly': ['error'],
    'default-case': 'error',
    'eqeqeq': 'error',
    'function-call-argument-newline': ['error', 'consistent'],
    'func-call-spacing': 'off',
    'import/no-commonjs': 'error',
    'import/no-default-export': 'error',
    'indent': ['error', 2],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': 'off',
    'linebreak-style': 0,
    'max-depth': ['error', 4],
    'max-len': ['error', { 'code': 160, ignoreStrings: true, ignoreUrls: true, ignoreComments: true }],
    'max-lines': ['error', {
      max: 500,
      skipBlankLines: true,
      skipComments: true
    }],
    'max-lines-per-function': ['error', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'no-console': 'error',
    'no-extra-parens': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-multi-spaces': 'error',
    'no-param-reassign': ['error', { 'props': true }],
    'no-return-await': 'error',
    'no-shadow': 'off',
    'no-spaced-func': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'error',
    'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'after' } }],
    'promise/avoid-new': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sonarjs/cognitive-complexity': ['error', 9],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'off',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'unused-imports/no-unused-imports': 'error',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:editorconfig/noconflict',
  ],
  overrides: [
    {
      'files': ['**.it.ts', '**.test.ts'],
      'rules': {
        'max-lines-per-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    }
  ]
}
