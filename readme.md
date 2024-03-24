# Zeptomatch Escape

A little utility for escaping globs before passing them to [`zeptomatch`](https://github.com/fabiospampinato/zeptomatch).

## Install

```sh
npm install --save zeptomatch-escape
```

## Usage

```ts
import zeptomatch from 'zeptomatch';
import escape from 'zeptomatch-escape';

// Escape special characters from a string

escape ( '*.js' ); // => '\\*.js'

// Example usage

zeptomatch ( '*.js', 'a.js' ) ); // => true
zeptomatch ( '*.js', '*.js' ) ); // => true

zeptomatch ( escape ( '*.js' ), 'a.js' ) ); // => false
zeptomatch ( escape ( '*.js' ), '*.js' ) ); // => true
```

## License

MIT © Fabio Spampinato
