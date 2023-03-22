# Autotelic - Eslint Config React

*Autotelic's base [Eslint](https://eslint.org/docs/latest/) configuration for any React application*

### Usage

Thanks to [`@rushstack/eslint-patch`](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch#readme), this package has no peer dependencies other than `eslint`. To use `@autotelic/eslint-config-react` in your project, just run one of the following install commands and add the `.eslintrc.json` suggested below.

#### NPM

```sh
npm i --save-dev eslint @autotelic/eslint-config-react
```

#### Yarn

```sh
yarn add --dev eslint @autotelic/eslint-config-react
```

#### `.eslintrc.json`

```json
{
  "extends": ["@autotelic/eslint-config-react"],
  "settings": {
    "node": {
      "version": "^18.x", // Any Node version >= 16
    }
  }
}
```

### About

`@autotelic/eslint-config-react` is comprised with a combination of:

  - [`@autotelic/eslint-config-js`](https://github.com/autotelic/lint-configs/tree/main/packages/eslint-config-js#readme)
  - [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react#readme)
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme)
