# npm hello example

# ts test 
    npm install --save-dev jest ts-jest @types/jest

in `jestconfig.json`

    {
      "transform": {
        "^.+\\.(t|j)sx?$": "ts-jest"
      },
      "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      "moduleFileExtensions": ["ts", "tsx", "js", "jsx", "json", "node"]
    }

## write test

   src/__tests__/*.test.ts

then run:

    npm test

# publish package
## package.json
package.json 

    {
        "name": "hello",
        "description": "prototype hello", // description
        "main": "lib/index.js",  // main
        "types": "lib/index.d.ts",   //main types
        "scripts": {
            ...
        },
        "keywords": ["prototype", "hello"],
        "author": "ahui",
        ....
    }
### include files
Set files in `package.json`,only the files will be publish to npm package, 

     "files": ["lib/**/*"],

If you do not set files abolve. You can set exclude files in `.npmignore`:

    src
    tsconfig.json
    tslint.json
    .prettierrc



## Use the magic scripts in NPM

    npm test && npm run build

## login & publish
add user:
1.  https://www.npmjs.com/signup or get it from artifactory if you use artifactory as npm mirror
2. or run the command: npm adduser

then login + publish 

    npm login
    # $ npm version patch
    npm publish


## search package
    https://npmjs.com/package/{your-pacakge-name}

## use package
change mirrors

    yrm ls

    npm i package-name

import package

    import { hello } from <your-pacakge-name>;
