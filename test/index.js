
/* IMPORT */

import {describe} from 'fava';
import zeptomatch from 'zeptomatch';
import escape from '../dist/index.js';

/* MAIN */

describe ( 'Zeptomatch Escape', it => {

  it ( 'escapes special characters', t => {

    t.is ( escape ( '*' ), '\\*' );
    t.is ( escape ( '?' ), '\\?' );
    t.is ( escape ( '^' ), '\\^' );
    t.is ( escape ( '!' ), '\\!' );
    t.is ( escape ( '[' ), '\\[' );
    t.is ( escape ( ']' ), '\\]' );
    t.is ( escape ( '{' ), '\\{' );
    t.is ( escape ( '}' ), '\\}' );

  });

  it ( 'does not escape other characters, even if semi-special', t => {

    t.is ( escape ( '+' ), '+' );
    t.is ( escape ( '.' ), '.' );
    t.is ( escape ( '$' ), '$' );
    t.is ( escape ( '|' ), '|' );
    t.is ( escape ( '\\' ), '\\' );
    t.is ( escape ( 'a' ), 'a' );
    t.is ( escape ( ' ' ), ' ' );

  });

  it ( 'does not escape already escaped characters', t => {

    t.is ( escape ( '\\a' ), '\\a' );
    t.is ( escape ( '\\*' ), '\\*' );

  });

  it ( 'escapes a string', t => {

    t.is ( escape ( '*.js' ), '\\*.js' );
    t.is ( escape ( '!*.{js,md}' ), '\\!\\*.\\{js,md\\}' );
    t.is ( escape ( 'a?.js' ), 'a\\?.js' );

    t.true ( zeptomatch ( escape ( '*.js' ), '*.js' ) );
    t.true ( zeptomatch ( escape ( '!*.{js,md}' ), '!*.{js,md}' ) );
    t.true ( zeptomatch ( escape ( 'a?.js' ), 'a?.js' ) );

    t.false ( zeptomatch ( escape ( '*.js' ), 'a.js' ) );
    t.false ( zeptomatch ( escape ( '!*.{js,md}' ), 'a.js' ) );
    t.false ( zeptomatch ( escape ( 'a?.js' ), 'a.js' ) );

  });

});
