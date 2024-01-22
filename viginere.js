// Function to encrypt a message using Vigenère cipher
function vigenereCipherEncrypt(message, key) {
    // Convert the message and key to uppercase
    message = message.toUpperCase();
    key = key.toUpperCase();
  
    // Initialize an empty string to store the encrypted message
    let encryptedMessage = '';
  
    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (char.match(/[A-Z]/)) {
        // Get the ASCII codes of the character and the corresponding key character
        const charCode = char.charCodeAt(0);
        const keyCode = key.charCodeAt(j % key.length);
  
        // Encrypt the character and append it to the result
        const encryptedCharCode = ((charCode + keyCode - 2 * 65) % 26) + 65;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
  
        // Increment the key index
        j++;
      } else {
        // If the character is not an uppercase letter, leave it unchanged
        encryptedMessage += char;
      }
    }
  
    return encryptedMessage;
  }
  
  // Example usage
  const message = "HELLO";
  const key = "KEY";
  const encryptedMessage = vigenereCipherEncrypt(message, key);
  console.log(encryptedMessage); // Output: "RIJVS"
  