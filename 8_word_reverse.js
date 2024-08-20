function reverseWords(sentence) {
    // Split the sentence into an array of words
    const wordsArray = sentence.split(" ");
    
    // Reverse the array of words
    const reversedArray = wordsArray.reverse();
    
    // Join the reversed array back into a string
    const reversedSentence = reversedArray.join(" ");
    
    return reversedSentence;
}

// Example usage:
const sentence = "I am a good boy";
const reversedSentence = reverseWords(sentence);

console.log(reversedSentence); // This will print "boy good a am I"
