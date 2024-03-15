const standard = require('eslint-config-standard')
const pluginImport = require('eslint-plugin-import')
const pluginN = require('eslint-plugin-n')
const pluginPromise = require('eslint-plugin-promise')
const globals = require('globals')

// TODO(HW13): Get `languageOptions` and `plugins` directly from eslint-config-standard
// as soon as they publish their flat config
// -> https://github.com/standard/eslint-config-standard/issues/351
module.exports = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: { jsx: true }
    },
    globals: {
      ...globals.es2021,
      ...globals.node,
      document: 'readonly',
      navigator: 'readonly',
      window: 'readonly'
    }
  },
  plugins: {
    n: pluginN,
    promise: pluginPromise,
    import: pluginImport
  },
  rules: standard.rules
}
