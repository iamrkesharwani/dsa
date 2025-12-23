let arr1 = [1, 0, 1, 0, 1, 0, 0, 1];
let arr2 = [1, 1, 0, 0, 1, 0];
let arr3 = [1, 0];

function sortBinaryArray(nums) {
  let zeros = 0;
  let ones = 0;

  for (let num of nums) {
    if (num === 0) {
      zeros++;
    } else {
      ones++;
    }
  }

  let result = [];

  for (let i = 0; i < zeros; i++) {
    result.push(0);
  }

  for (let i = 0; i < ones; i++) {
    result.push(1);
  }

  return result;
}

console.log(sortBinaryArray(arr1));
console.log(sortBinaryArray(arr2));
console.log(sortBinaryArray(arr3));

function sortBinaryArrayTwo(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] === 0) {
      left++;
    } else if (nums[right] === 1) {
      right--;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  return nums;
}

console.log('DSA:', sortBinaryArrayTwo(arr1));
console.log('DSA:', sortBinaryArrayTwo(arr2));
console.log('DSA:', sortBinaryArrayTwo(arr3));
