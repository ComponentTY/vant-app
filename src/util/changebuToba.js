
// buffer 转 base64
export const arrayBufferToBase64 = (buffer) => {
  var binary = ''
  var bytes = new Uint8Array( buffer )
  var len = bytes.byteLength
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode( bytes[ i ] )
  }
  return window.btoa( binary )
}