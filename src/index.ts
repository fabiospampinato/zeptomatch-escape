
/* MAIN */

const escape = (() => {

  const re = /(\\.)|([*?!^{}[\]])|(.)/gs;
  const replacer = ( _: string, $1: string, $2: string, $3: string ) => $1 || $3 || `\\${$2}`;

  return ( value: string ): string => {

    return value.replace ( re, replacer );

  };

})();

/* EXPORT */

export default escape;
