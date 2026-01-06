// Moves all zeros to the end while maintaining relative order
// Time: O(n), Space: O(1)
function moveZeroes(nums) {
  // Write your logic here
}

// Test Case 1: Standard case
let arr1 = [0, 1, 0, 3, 12];
console.log('Original:', arr1);
moveZeroes(arr1);
console.log('Result:  ', arr1);
// Expected: [1, 3, 12, 0, 0]

// Test Case 2: No zeros
let arr2 = [1, 2, 3];
moveZeroes(arr2);
console.log('Result:  ', arr2);
// Expected: [1, 2, 3]

// Test Case 3: All zeros
let arr3 = [0, 0, 0];
moveZeroes(arr3);
console.log('Result:  ', arr3);
// Expected: [0, 0, 0]
