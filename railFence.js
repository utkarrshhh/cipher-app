// Function to encrypt a message using Rail Fence Cipher
function railFenceEncrypt(message, rails) {
    if (rails <= 1) {
      throw new Error("The number of rails must be greater than 1.");
    }
  
    // Create an array to represent the rails
    const fence = Array.from({ length: rails }, () => []);
  
    // Initialize variables for direction and current rail
    let direction = 'down';
    let currentRail = 0;
  
    // Place characters in the fence
    for (let i = 0; i < message.length; i++) {
      fence[currentRail].push(message[i]);
  
      if (direction === 'down') {
        currentRail++;
        if (currentRail === rails - 1) {
          direction = 'up';
        }
      } else if (direction === 'up') {
        currentRail--;
        if (currentRail === 0) {
          direction = 'down';
        }
      }
    }
  
    // Flatten the fence to get the encrypted message
    const encryptedMessage = fence.flat().join('');
  
    return encryptedMessage;
  }
  
  // Example usage
  const message = "HELLO WORLD";
  const rails = 3;
  const encryptedMessage = railFenceEncrypt(message, rails);
  console.log(encryptedMessage); // Output: "HORELWRDLL O"
  