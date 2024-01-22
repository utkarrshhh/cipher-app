import React, { useState } from 'react';

function OneTimePad() {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [result, setResult] = useState('');
 
  
  function oneTimePadEncrypt(message, key) {
    if (message.length !== key.length) {
      throw new Error("Message and key must have the same length.");
    }
  
    let encryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      const messageChar = message.charCodeAt(i);
      const keyChar = key.charCodeAt(i);
      const encryptedChar = messageChar ^ keyChar;
      encryptedMessage += String.fromCharCode(encryptedChar);
    }
  
    return encryptedMessage;
  }
  



  function handleEncryptDecrypt() {
    const encryptedMessage =  oneTimePadEncrypt(inputText, key);
    
    setResult(btoa(encryptedMessage));
  }
  return (
    <div className='contact common'>
      <marquee>Decryption will be available shortly</marquee>
      <div className="caesarHeading">
        <h1 className='heading'>One Time Pad cipher</h1>
      </div>
      <div className="caesarContainer oneTimePadContainer">
        <div className="caesarDescription oneTimePadDescription">
          A one-time pad (OTP) cipher, also known as a Vernam cipher or the perfect cipher, is an encryption algorithm that provides the highest level of security achievable in cryptography, under the condition that certain requirements are met. It is a symmetric-key encryption technique where the same key is used for both encryption and decryption.
          <br />
          In the one-time pad cipher, the key is a random sequence of bits that is as long as the plaintext message. Each bit in the key is used to encrypt or decrypt a corresponding bit in the plaintext or ciphertext.
          The key should be generated completely randomly and must be kept secret between the sender and the receiver.
          <br />
          To encrypt a plaintext message, the sender combines each bit of the plaintext with the corresponding bit of the key using a bitwise XOR (exclusive OR) operation.
          The result of the XOR operation becomes the ciphertext
          <br />
          When implemented correctly with a truly random and secret key, the one-time pad is unbreakable by any known cryptographic attack.
          It provides perfect secrecy, meaning that the ciphertext reveals no information about the plaintext, making it immune to cryptanalysis.
          The security of the one-time pad relies on the key being truly random, used only once (hence the name "one-time pad"), and kept secret.
          <br />
          The Caesar cipher is relatively easy to understand and implement but provides minimal security against modern cryptographic analysis methods. It is often used as an introductory example in cryptography courses and as a building block for more complex encryption algorithms. To enhance security, variants of the Caesar cipher, such as the Vigenère cipher, were developed that use multiple shifting values for different letters in the plaintext.
        </div>
      </div>
      <div className="caesarImplementation">
        <h1>OneTime Pad Cipher Encryption</h1>
        <div className="container">
          <label htmlFor="inputText">Enter Text:</label>
          <input type="text" id="inputTxt" placeholder="Enter text to encrypt" value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <label htmlFor="key">Enter Key (Text only):</label>
          <input type="text" id=" key2" placeholder="Enter the oneTimePad cipher key" value={key} onChange={(e) => setKey(e.target.value)} />
          <button onClick={handleEncryptDecrypt}>Encrypt</button>
          <div id="result">
            After encryption: <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OneTimePad
