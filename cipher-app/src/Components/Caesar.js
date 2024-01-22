// import React from 'react'
// import Navbar from './Navbar'

import React, { useState } from 'react';

export default function Caesar() {
    const [inputText, setInputText] = useState('');
    const [key, setKey] = useState('');
    const [result, setResult] = useState('');

    let encryptedMessage = ""
    function caesarCipherEncrypt(message, shift) {
        encryptedMessage = "";
        for (let i = 0; i < message.length; i++) {
            let char = message[i];
            if (/[A-Za-z]/.test(char)) {
                const isUpperCase = char === char.toUpperCase();
                const charCode = char.charCodeAt(0);
                const shiftedCharCode = ((charCode - (isUpperCase ? 65 : 97) + shift) % 26) + (isUpperCase ? 65 : 97);
                char = String.fromCharCode(shiftedCharCode);
            }
            encryptedMessage += char;
        }
        return encryptedMessage;
    }

    function handleEncryptDecrypt() {
        const encryptedMessage = caesarCipherEncrypt(inputText, parseInt(key, 10));
        setResult(encryptedMessage);
    }


    return (
        <div className='caesar common'>
                <marquee>Decryption will be available shortly</marquee>
            <div className="caesarHeading">
                <h1 className='heading'>Caesar cipher</h1>
            </div>
            <div className="caesarContainer">
                <div className="caesarDescription">
                    The Caesar cipher, also known as the Caesar shift or Caesar's code, is one of the simplest and oldest encryption techniques in the history of cryptography. Named after Julius Caesar, who is believed to have used it to protect sensitive messages during his time as a military leader in ancient Rome, the Caesar cipher is a substitution cipher that involves shifting the letters of the alphabet by a fixed number of positions.
                    <br />
                    The Caesar cipher is relatively easy to understand and implement but provides minimal security against modern cryptographic analysis methods. It is often used as an introductory example in cryptography courses and as a building block for more complex encryption algorithms. To enhance security, variants of the Caesar cipher, such as the Vigenère cipher, were developed that use multiple shifting values for different letters in the plaintext.
                </div>
            </div>

            <div className="caesarImplementation">
                <h1>Caesar Cipher Encryption</h1>
                <div className="container">
                    <label htmlFor="inputText">Enter Text:</label>
                    <input type="text" id="inputTxt" placeholder="Enter text to encrypt" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <label htmlFor="key">Enter Key (Shift):</label>
                    <input type="number" id=" key2" placeholder="Enter the Caesar cipher key"  value={key} onChange={(e) => setKey(e.target.value)}/>
                    <button onClick={handleEncryptDecrypt}>Encrypt</button>
                    <div id="result">
                        After encryption: <span>{result}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
