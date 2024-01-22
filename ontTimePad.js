// Function to encrypt a message using a one-time pad
function oneTimePadEncrypt(message, key) {
    if (message.length !== key.length) {
      throw new Error("Message and key must have the same length.");
    }
  
    let encryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      const messageChar = message.charCodeAt(i);
      const keyChar = key.charCodeAt(i);
  
      // XOR operation between the message and key characters
      const encryptedChar = messageChar ^ keyChar;
  
      // Convert the result back to a character and append it to the encrypted message
      encryptedMessage += String.fromCharCode(encryptedChar);
    }
  
    return encryptedMessage;
  }
  
  // Example usage
  const message = "HELLO";
  const key = "XJAKG";
  const encryptedMessage = oneTimePadEncrypt(message, key);
  console.log("encrypted is : "+btoa(encryptedMessage)); // Output: ""
  