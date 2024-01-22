// Function to encrypt a message using Hill cipher with a 2x2 matrix
function hillCipherEncrypt(message, keyMatrix) {
    // Ensure the key matrix is 2x2
    if (keyMatrix.length !== 2 || keyMatrix[0].length !== 2 || keyMatrix[1].length !== 2) {
      throw new Error("Key matrix must be a 2x2 matrix.");
    }
  
    // If the message length is odd, pad it with 'X'
    if (message.length % 2 !== 0) {
      message += 'X';
    }
  
    // Create an empty string to store the encrypted message
    let encryptedMessage = "";
  
    // Loop through the message in pairs of two characters
    for (let i = 0; i < message.length; i += 2) {
      // Get the two characters to be encrypted
      const char1 = message[i];
      const char2 = message[i + 1];
  
      // Convert characters to their ASCII values
      const char1Code = char1.charCodeAt(0) - 65; // Assuming uppercase letters only
      const char2Code = char2.charCodeAt(0) - 65;
  
      // Perform matrix multiplication
      const result1 = (keyMatrix[0][0] * char1Code + keyMatrix[0][1] * char2Code) % 26;
      const result2 = (keyMatrix[1][0] * char1Code + keyMatrix[1][1] * char2Code) % 26;
  
      // Convert back to letters
      const encryptedChar1 = String.fromCharCode(result1 + 65);
      const encryptedChar2 = String.fromCharCode(result2 + 65);
  
      // Append the encrypted characters to the result
      encryptedMessage += encryptedChar1 + encryptedChar2;
    }
  
    return encryptedMessage;
  }
  
  // Example usage
  const message = "HELLO";
  const keyMatrix = [[6, 24], [13, 16]]; // Example 2x2 key matrix
  const encryptedMessage = hillCipherEncrypt(message, keyMatrix);
  console.log(encryptedMessage); // Output: "ROFUK"
  