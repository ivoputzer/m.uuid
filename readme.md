m.uuid
===
**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[uuid](https://github.com/ivoputzer/m.uuid) is a lightweight RFC4122v4 compliant uuid implementation written in es6+**

[![travis](https://img.shields.io/travis/ivoputzer/m.uuid.svg?style=for-the-badge)](https://travis-ci.org/ivoputzer/m.uuid)
[![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=for-the-badge&colorB=44CC11)](package.json)
[![coverage status](https://img.shields.io/coveralls/ivoputzer/m.uuid.svg?style=for-the-badge)](https://coveralls.io/github/ivoputzer/m.uuid?branch=master)
[![linter](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=for-the-badge)](http://standardjs.com/)

[![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=for-the-badge)](https://nodejs.org/docs/v6.0.0/api)
[![version](https://img.shields.io/npm/v/m.uuid.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.uuid)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&colorB=007EC6)](https://spdx.org/licenses/MIT)
[![minzip](https://img.shields.io/bundlephobia/minzip/m.uuid.svg?style=for-the-badge)](https://bundlephobia.com/scan-results?packages=m.uuid)
[![downloads](https://img.shields.io/npm/dt/m.uuid.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.uuid)


## install
```sh
npm install m.uuid
```

## usage
```js
const {uuid} = require('m.uuid') // uses `Math.random()` which is ~25x faster.

uuid() // b4b1f122-3344-4f1b-961a-023ef51e2693
```

```js
const {uuid} = require('m.uuid/crypto') // uses `crypto.randomBytes()` with less chance of collision.

uuid() // afc2a706-3c77-473b-b2df-ebc356d13fd3
```
