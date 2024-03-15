# Autotelic - Eslint Config React

*Autotelic's base [Eslint](https://eslint.org/docs/latest/) configuration for any React application*

### Usage

#### NPM

```sh
npm i --save-dev eslint @autotelic/eslint-config-react
```

#### Yarn

```sh
yarn add --dev eslint @autotelic/eslint-config-react
```

#### `eslint.config.js`

```js
const configReact = require('@autotelic/eslint-config-react')

module.exports = [
  configReact,
  {
    // ...Additional config
  }
]

```

#### `eslint.config.mjs`

```js
import configReact from '@autotelic/eslint-config-react'

export default [
  configReact,
  {
    // ...Additional config
  }
]

```

#### Configuring Node Version

By default the Node version is set to `^20.x`, if a different or a more specific version is preferred it can be configured as follows:

```js
// eslint.config.js
const configReact = require('@autotelic/eslint-config-react')

module.exports = [
  configReact,
  {
  settings: {
    node: {
      version: '20.11.1'
    }
  }
}]
```

### About

`@autotelic/eslint-config-react` is comprised with a combination of:

  - [`@autotelic/eslint-config-js`](https://github.com/autotelic/lint-configs/tree/main/packages/eslint-config-js#readme)
  - [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react#readme)
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme)
