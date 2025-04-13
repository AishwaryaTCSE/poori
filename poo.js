
// flatten.js

let result = []; // External array to hold the flattened result

function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (Array.isArray(item)) {
      flattenArray(item); // Recursive call
    } else if (typeof item !== 'undefined') {
      result.push(item);
    } else {
      // Ignore undefined or null
    }
  }
}

// Input array
const input = [1, [2, [3, 4], 5], 6, [7, 8]];

// Call the flatten function
flattenArray(input);

// Print result
console.log("Flattened Array:", result);

