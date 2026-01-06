# Sort Colors (0s, 1s, and 2s)

## Problem

Sort an array containing only 0s, 1s, and 2s in ascending order.

## Example

- Input: `[2, 0, 2, 1, 1, 0]`
- Output: `[0, 0, 1, 1, 2, 2]`

## Solution 1: Count and Rebuild

**How it works:**

1. Count how many 0s, 1s, and 2s are in the array
2. Create a new array with all 0s first, then 1s, then 2s

**Time Complexity:** O(n)

**Space Complexity:** O(n) - creates a new array

**Code:**

```javascript
function sortColors(nums) {
  let zeros = 0;
  let ones = 0;
  let twos = 0;

  // Count each number
  for (let num of nums) {
    if (num === 0) zeros++;
    else if (num === 1) ones++;
    else twos++;
  }

  // Build sorted array
  const result = [];
  for (let i = 0; i < zeros; i++) result.push(0);
  for (let i = 0; i < ones; i++) result.push(1);
  for (let i = 0; i < twos; i++) result.push(2);

  return result;
}
```

## Solution 2: Dutch National Flag (Three Pointers)

**How it works:**

1. Use three pointers: low (0s region), mid (current), high (2s region)
2. Move 0s to the left by swapping with low pointer
3. Keep 1s in the middle (just move mid forward)
4. Move 2s to the right by swapping with high pointer

**Time Complexity:** O(n) - single pass

**Space Complexity:** O(1) - sorts in place

**Code:**

```javascript
function sortColorsTwo(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // Swap 0 to the left
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      // 1 is in correct place, just move forward
      mid++;
    } else {
      // Swap 2 to the right
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}
```

## Visual Example

**Input:** `[2, 0, 2, 1, 1, 0]`

```
Step 1: [0, 0, 2, 1, 1, 2]  (0s moved to left)
Step 2: [0, 0, 1, 1, 2, 2]  (1s in middle, 2s to right)
```

## Key Takeaway

The Dutch National Flag algorithm is the optimal solution - it sorts in place with a single pass through the array. This technique is useful for partitioning problems.
