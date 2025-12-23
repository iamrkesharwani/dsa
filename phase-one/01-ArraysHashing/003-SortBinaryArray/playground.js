// Sorts a binary array in linear time
// Modifies the input array directly
function sortBinaryArray(nums) {
  // Write your logic here
}

// Test Case 1
let arr1 = [1, 0, 1, 0, 1, 0, 0, 1];
console.log('Original:', arr1);
sortBinaryArray(arr1);
console.log('Sorted:  ', arr1);
// Expected: [0, 0, 0, 0, 1, 1, 1, 1]

// Test Case 2
let arr2 = [1, 1, 0, 0, 1, 0];
sortBinaryArray(arr2);
console.log('Sorted:  ', arr2);
// Expected: [0, 0, 0, 1, 1, 1]

// Test Case 3 (Edge case)
let arr3 = [1, 0];
sortBinaryArray(arr3);
console.log('Sorted:  ', arr3);
// Expected: [0, 1]
