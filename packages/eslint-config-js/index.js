const standard = require('./standard')

module.exports = {
  ...standard,
  settings: {
    node: {
      version: '^20.x'
    }
  },
  rules: {
    ...standard.rules,
    'array-bracket-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'as-needed'],
    complexity: ['error', {
      max: 15
    }],
    'default-param-last': ['error'],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true
    }],
    'function-call-argument-newline': ['error', 'consistent'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'max-len': ['error', {
      code: 110,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
      ignoreRegExpLiterals: true
    }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'no-bitwise': 'error',
    'no-confusing-arrow': 'error',
    'no-else-return': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-return-await': 'error',
    'object-shorthand': ['error', 'always'],
    'require-atomic-updates': ['error', {
      allowProperties: true
    }],
    'import/default': 'error',
    'import/named': 'error',
    'import/no-cycle': ['error', {
      ignoreExternal: true
    }],
    'import/no-self-import': 'error',
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      },
      'newlines-between': 'always'
    }],
    'import/no-unresolved': ['error', {
      commonjs: true
    }],
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'error',
    'n/no-unsupported-features/node-builtins': 'error',
    'n/prefer-global/buffer': ['error', 'always'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'always'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error'
  }
}
