# Two Sum Problem

## Problem

Find two numbers in an array that add up to a target value.

## Example

- Array: `[8, 7, 2, 5, 3, 1]`
- Target: `10`
- Result: `7 + 3 = 10` or `8 + 2 = 10`

## Solution 1: Nested Loop (Brute Force)

**How it works:** Check every possible pair of numbers.

**Time Complexity:** O(n²) - slow for large arrays

**Code:**

```javascript
function findForPair(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log('Found:', nums[i], nums[j]);
      }
    }
  }
}
```

## Solution 2: Hash Set (Optimized)

**How it works:**

1. For each number, calculate what value is needed to reach the target
2. Check if that needed value was seen before (stored in Set)
3. If yes, we found a pair
4. If no, store current number and continue

**Time Complexity:** O(n) - much faster!

**Code:**

```javascript
function findHashPair(nums, target) {
  let memory = new Set();

  for (let num of nums) {
    let needed = target - num;

    if (memory.has(needed)) {
      console.log('Found:', needed, num);
    }

    memory.add(num);
  }
}
```

## Key Takeaway

The hash set approach is better because it only needs one pass through the array instead of checking every combination.
