function generateRandomBinaryKey(length) {
    let key = '';
    for (let i = 0; i < length; i++) {
      const bit = Math.random() < 0.5 ? '0' : '1';
      key += bit;
    }
    return key;
  }
  
  function textToBinary(text) {
    let binary = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const binaryChar = charCode.toString(2).padStart(8, '0'); // Convert to 8-bit binary
      binary += binaryChar;
    }
    return binary;
  }
  
  function binaryToText(binary) {
    let text = '';
    for (let i = 0; i < binary.length; i += 8) {
      const binaryChar = binary.substr(i, 8);
      const charCode = parseInt(binaryChar, 2);
      text += String.fromCharCode(charCode);
    }
    return text;
  }
  
  function oneTimePadEncrypt(plaintext, key) {
    if (plaintext.length !== key.length) {
      throw new Error('Plaintext and key must have the same length');
    }
  
    let ciphertext = '';
    for (let i = 0; i < plaintext.length; i++) {
      const plaintextBit = plaintext[i];
      const keyBit = key[i];
      const encryptedBit = plaintextBit ^ keyBit;
      ciphertext += encryptedBit;
    }
    return ciphertext;
  }
  
  function oneTimePadDecrypt(ciphertext, key) {
    if (ciphertext.length !== key.length) {
      throw new Error('Ciphertext and key must have the same length');
    }
  
    let plaintext = '';
    for (let i = 0; i < ciphertext.length; i++) {
      const ciphertextBit = ciphertext[i];
      const keyBit = key[i];
      const decryptedBit = ciphertextBit ^ keyBit;
      plaintext += decryptedBit;
    }
    return plaintext;
  }
  
  // Example usage:
  const plaintext = 'Hello, World!';
  const binaryPlaintext = textToBinary(plaintext);
  const key = generateRandomBinaryKey(binaryPlaintext.length);
  
  const binaryCiphertext = oneTimePadEncrypt(binaryPlaintext, key);
  const ciphertext = binaryToText(binaryCiphertext);
  console.log('Ciphertext:', ciphertext);
  
  const decryptedBinary = oneTimePadDecrypt(binaryCiphertext, key);
  const decryptedText = binaryToText(decryptedBinary);
  console.log('Decrypted Text:', decryptedText);
  