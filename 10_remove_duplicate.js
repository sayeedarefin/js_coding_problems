const names = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'babul', 'ebul', 'dabul', 'abul']; 
// Array containing names, some of which are duplicates

const unique = []; 
// Empty array to store unique names

function removeDuplicates(names) { 
    // Function to remove duplicates from the array

    for (let i = 0; i < names.length; i++) { 
        // Loop through each name in the names array

        const name = names[i]; 
        // Get the current name in the array

        if (!unique.includes(name)) { 
            // Check if the unique array does NOT already include the current name

            unique.push(name); 
            // If the name is not in unique, add it to the unique array
        }
    }

    return unique; 
    // Return the array of unique names after all duplicates are removed
}

const uniqueNames = removeDuplicates(names); 
// Call the function with the names array and store the result in uniqueNames

console.log(uniqueNames); 
// Print the array of unique names to the console
