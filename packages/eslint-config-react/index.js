const configJs = require('@autotelic/eslint-config-js')
const pluginReact = require('eslint-plugin-react')
const pluginReactHooks = require('eslint-plugin-react-hooks')

module.exports = {
  ...configJs,
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: {
    ...configJs.plugins,
    react: pluginReact,
    'react-hooks': pluginReactHooks
  },
  rules: {
    ...configJs.rules,
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      },
      groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      pathGroups: [{
        group: 'builtin',
        pattern: 'react',
        position: 'before'
      }],
      pathGroupsExcludedImportTypes: ['builtin']
    }],
    'react/function-component-definition': ['error', {
      namedComponents: ['function-declaration', 'arrow-function']
    }],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never',
      propElementValues: 'always'
    }],
    'react/jsx-curly-newline': ['error', 'consistent'],
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: { single: 5, multi: 1 } }],
    'react/jsx-newline': ['error', { prevent: true }],
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      allowBind: false,
      ignoreRefs: true
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandLast: true,
      multiline: 'last',
      ignoreCase: true,
      reservedFirst: true
    }],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/no-deprecated': 'warn',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    'react/sort-comp': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
}
