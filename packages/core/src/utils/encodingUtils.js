class EncodingUtils {
  hexStringToBytes(hex) {
    let strippedHex = hex;
    if(strippedHex.substring(0, 2).toLowerCase() === '0x') {
      strippedHex = strippedHex.substring(2, strippedHex.length);
    }
    const bytes = Buffer.from(strippedHex, 'hex');
    return Buffer.from(bytes);
  }

  utfStringToBytes(string) {
    const bytes = Buffer.from(string, 'UTF-8');
    return Buffer.from(bytes);
  }
}

export default EncodingUtils;
