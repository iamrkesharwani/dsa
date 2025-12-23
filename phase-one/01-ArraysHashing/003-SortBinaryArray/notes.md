# Sort Binary Array (0s and 1s)

## Problem

Sort an array containing only 0s and 1s so all 0s come before all 1s.

## Example

- Input: `[1, 0, 1, 0, 1, 0, 0, 1]`
- Output: `[0, 0, 0, 0, 1, 1, 1, 1]`

## Solution 1: Count and Rebuild

**How it works:**

1. Count how many 0s and 1s are in the array
2. Create a new array with all 0s first, then all 1s

**Time Complexity:** O(n)

**Space Complexity:** O(n) - creates a new array

**Code:**

```javascript
function sortBinaryArray(nums) {
  let zeros = 0;
  let ones = 0;

  // Count 0s and 1s
  for (let num of nums) {
    if (num === 0) {
      zeros++;
    } else {
      ones++;
    }
  }

  // Build new sorted array
  let result = [];
  for (let i = 0; i < zeros; i++) {
    result.push(0);
  }
  for (let i = 0; i < ones; i++) {
    result.push(1);
  }

  return result;
}
```

## Solution 2: Two Pointers (In-Place)

**How it works:**

1. Use two pointers: left (start) and right (end)
2. Move left pointer forward when it finds 0
3. Move right pointer backward when it finds 1
4. Swap when left has 1 and right has 0

**Time Complexity:** O(n)

**Space Complexity:** O(1) - sorts in place

**Code:**

```javascript
function sortBinaryArrayTwo(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] === 0) {
      left++;
    } else if (nums[right] === 1) {
      right--;
    } else {
      // Swap
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  return nums;
}
```

## Key Takeaway

Both solutions are O(n) time, but the two-pointer approach is better because it sorts in place without using extra memory.
