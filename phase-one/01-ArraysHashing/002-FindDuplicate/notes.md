# Find Duplicate Numbers

## Problem

Find duplicate numbers in an array.

## Example

- Array: `[1, 3, 4, 2, 2, 3, 5]`
- Duplicates: `2` and `3` (both appear twice)

## Solution 1: Nested Loop (Brute Force)

**How it works:** Compare each number with every number after it.

**Time Complexity:** O(n²) - slow for large arrays

**Code:**

```javascript
function findDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log('Found', nums[i]);
      }
    }
  }
}
```

**Key detail:** `j = i + 1` avoids comparing a number with itself.

## Solution 2: Hash Set (Optimized)

**How it works:**

1. Start with an empty Set
2. For each number, check if it's already in the Set
3. If yes, it's a duplicate
4. If no, add it to the Set and continue

**Time Complexity:** O(n) - much faster!

**Code:**

```javascript
function findDuplicateTwo(nums) {
  let memory = new Set();

  for (let num of nums) {
    if (memory.has(num)) {
      console.log('Number found:', num);
    }

    memory.add(num);
  }
}
```

## Key Takeaway

The Set approach checks each number only once, making it much more efficient than comparing every pair.
