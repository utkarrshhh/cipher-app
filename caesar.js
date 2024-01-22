// Function to encrypt a message using Caesar cipher
function caesarCipherEncrypt(message, shift) {
    // Create an empty string to store the encrypted message
    let encryptedMessage = "";
  
    // Loop through each character in the message
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
  
      // Check if the character is a letter (A-Z or a-z)
      if (/[A-Za-z]/.test(char)) {
        // Determine whether the character is uppercase or lowercase
        const isUpperCase = char === char.toUpperCase();
  
        // Convert the character to its ASCII code
        const charCode = char.charCodeAt(0);
  
        // Calculate the new ASCII code after applying the shift
        const shiftedCharCode = ((charCode - (isUpperCase ? 65 : 97) + shift) % 26) + (isUpperCase ? 65 : 97);
  
        // Convert the new ASCII code back to a character
        char = String.fromCharCode(shiftedCharCode);
      }
  
      // Append the character to the encrypted message
      encryptedMessage += char;
    }
  
    return encryptedMessage;
  }
  
  // Example usage
  const message = "Hello, World!";
  const shift = 3;
  const encryptedMessage = caesarCipherEncrypt(message, shift);
  console.log(encryptedMessage); 
  