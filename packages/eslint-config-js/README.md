# Autotelic - Eslint Config JS

*Autotelic's base [Eslint](https://eslint.org/docs/latest/) configuration for any JavaScript application*

### Usage

Thanks to [`@rushstack/eslint-patch`](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch#readme), this package has no peer dependencies other than `eslint`. To use `@autotelic/eslint-config-js` in your project, just run one of the following install commands and add the `.eslintrc.json` suggested below.

#### NPM

```sh
npm i --save-dev eslint @autotelic/eslint-config-js
```

#### Yarn

```sh
yarn add --dev eslint @autotelic/eslint-config-js
```

#### `.eslintrc.json`

```json
{
  "extends": ["@autotelic/eslint-config-js"],
  "settings": {
    "node": {
      "version": "^18.x", // Any Node version >= 16
    }
  }
}
```

### About

`@autotelic/eslint-config-js` is comprised with a combination of:

  - [Eslint's built-in rules](https://eslint.org/docs/latest/rules)
  - [`eslint-config-standard`](https://github.com/standard/eslint-config-standard/tree/master#readme)
  - [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n#readme)
  - [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import#readme)
  - [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise#readme)
