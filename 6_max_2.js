const numbers = [125, 129, 135, 168, 178, 195, 200];

const largestNumber = Math.max(...numbers);

console.log(largestNumber); // This will print 200


function findLargestNumber(arr) {
    return Math.max(...arr);
}

// Example usage:
const nums = [125, 129, 135, 168, 178, 195, 200];
const largestNum = findLargestNumber(numbers);

console.log(largestNumber); // This will print 200
