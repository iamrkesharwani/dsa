let arr1 = [2, 0, 2, 1, 1, 0];
let arr2 = [0, 0, 1, 2, 2];
let arr3 = [2, 2, 1, 0];

function sortColors(nums) {
  let zeros = 0;
  let ones = 0;
  let twos = 0;

  for (let num of nums) {
    if (num === 0) zeros++;
    else if (num === 1) ones++;
    else twos++;
  }

  const result = [];
  for (let i = 0; i < zeros; i++) result.push(0);
  for (let i = 0; i < ones; i++) result.push(1);
  for (let i = 0; i < twos; i++) result.push(2);

  return result;
}

console.log(sortColors(arr1));
console.log(sortColors(arr2));
console.log(sortColors(arr3));

function sortColorsTwo(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}

console.log(sortColorsTwo(arr1));
console.log(sortColorsTwo(arr2));
console.log(sortColorsTwo(arr3));
