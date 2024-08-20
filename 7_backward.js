function printAndJoinForwardAndBackward(str) {
    let forwardStr = "";  // To accumulate characters in forward order
    let backwardStr = ""; // To accumulate characters in backward order

    // Print and join characters forward
    console.log("Forward:");
    for (let i = 0; i < str.length; i++) {
        forwardStr += str[i];
        console.log(forwardStr);
    }

    // Print and join characters backward
    console.log("Backward:");
    for (let i = str.length - 1; i >= 0; i--) {
        backwardStr += str[i];
        console.log(backwardStr);
    }
}

// Call the function with the string "I am a good boy"
printAndJoinForwardAndBackward("I am a good boy");
