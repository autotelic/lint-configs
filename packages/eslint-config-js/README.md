# Autotelic - Eslint Config JS

*Autotelic's base [Eslint](https://eslint.org/docs/latest/) configuration for any JavaScript application*

### Usage

#### NPM

```sh
npm i --save-dev eslint @autotelic/eslint-config-js
```

#### Yarn

```sh
yarn add --dev eslint @autotelic/eslint-config-js
```

#### `eslint.config.js`

```js
const configJs = require('@autotelic/eslint-config-js')

module.exports = [
  configJs,
  {
    // ...Additional config
  }
]

```

#### `eslint.config.mjs`

```js
import configJs from '@autotelic/eslint-config-js'

export default [
  configJs,
  {
    // ...Additional config
  }
]

```

#### Configuring Node Version

By default the Node version is set to `^20.x`, if a different or a more specific version is preferred it can be configured as follows:

```js
// eslint.config.js
const configJs = require('@autotelic/eslint-config-js')

module.exports = [
  configJs,
  {
  settings: {
    node: {
      version: '20.11.1'
    }
  }
}]
```

### About

`@autotelic/eslint-config-js` is comprised with a combination of:

  - [Eslint's built-in rules](https://eslint.org/docs/latest/rules)
  - [`eslint-config-standard`](https://github.com/standard/eslint-config-standard/tree/master#readme)
  - [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n#readme)
  - [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import#readme)
  - [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise#readme)
