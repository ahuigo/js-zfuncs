// refer to : https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings

export function b64Encode(str:string) {
  // return window.btoa(unescape(encodeURIComponent( str )));
  return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode(parseInt(p1, 16))
  }))
}

// Decoding base64 ⇢ UTF8

export function b64Decode(str:string) {
  // return decodeURIComponent(escape(window.atob( str )));
  return decodeURIComponent(Array.prototype.map.call(window.atob(str), function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
}