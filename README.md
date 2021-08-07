# @react-hookbox/enhanced-callback

> The enhanced version of useCallback. Enhanced callback doesn't need deps
> array and keeps reference the same.

[![NPM][npm-image]][npm-link]
[![Minzipped Bundle Size][bundlephobia-image]][bundlephobia-link]

## Install

```bash
npm install --save @react-hookbox/enhanced-callback
```
or
```bash
yarn add @react-hookbox/enhanced-callback
```

## Usage

both for JavaScript and Typescript:
```typescript
import { useEnhancedCallback } from '@react-hookbox/enhanced-callback';
// OR
// import useEnhancedCallback from '@react-hookbox/enhanced-callback';

// then
const myCallback = useEnhancedCallback((num, str) => {
  return str.repeat(Math.min(num, 2));
});

// this will work everywherre in you code
myCallback(8, 'hello');
```

`useEnhancedCallback` updates the callback immediately so you can use it
anytime you want. Just keep in mind that you should not rely on it to trigger
update in any deps list as it returns the same function-reference
and never changes it.

## Params

* `fn`. This is a required function parameter.
  The returned value will have the same type.

## License

MIT © [hakobpogh][github-hakobpogh]

[npm-image]: https://img.shields.io/npm/v/@react-hookbox/enhanced-callback.svg
[npm-link]: https://www.npmjs.com/package/@react-hookbox/enhanced-callback
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/@react-hookbox/enhanced-callback
[bundlephobia-link]: https://bundlephobia.com/result?p=@react-hookbox/enhanced-callback
[github-hakobpogh]: https://github.com/hakobpogh
