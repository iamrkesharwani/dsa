// Sorts an array of 0s, 1s, and 2s in-place
// Time: O(n), Space: O(1)
function sortColors(nums) {
  // Write your logic here
}

// Test Case 1: Mixed values
let arr1 = [2, 0, 2, 1, 1, 0];
console.log('Original:', arr1);
sortColors(arr1);
console.log('Sorted:  ', arr1);
// Expected: [0, 0, 1, 1, 2, 2]

// Test Case 2: Already sorted
let arr2 = [0, 0, 1, 2, 2];
sortColors(arr2);
console.log('Sorted:  ', arr2);
// Expected: [0, 0, 1, 2, 2]

// Test Case 3: Reverse sorted
let arr3 = [2, 2, 1, 0];
sortColors(arr3);
console.log('Sorted:  ', arr3);
// Expected: [0, 1, 2, 2]
