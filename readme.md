# Useful functions for js/ts
Featured functions
- debounce
- throttle
- b64Encode
- b64Decode

## Install
    yarn add js-zfuncs
    npm i js-zfuncs

## Usage
Add new type: module in package.json

    // cat package.json
    {
      "name": "app",
      "type": "module",
      ....
    }

Import it in your code:

    // app.js
    import * as funcs from 'js-zfuncs'

    function add(a,b){
        console.log(a+b)
        return a+b
    }
    const addWrap=funcs.debounce(add, 100)
    addWrap(1,2).then(v=>console.log({v:v}))
    addWrap(2,2).then(v=>console.log({v:v}))

execute it:

    node app.js
