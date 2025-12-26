const nums = [8, 7, 2, 5, 3, 1];
// const nums = [1, 2, 3];
const target = 10;

function findForPair(nums, target) {
  let found = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        found = true;
        console.log(`Found: ${nums[i]}, ${nums[j]}`);
      }
    }
  }
  if (!found) console.log('Not found');
}

function findHashPair(nums, target) {
  let memory = new Set();
  let found = false;

  for (let num of nums) {
    let needed = target - num;

    if (memory.has(needed)) {
      console.log(`Found: ${needed}, ${num}`);
      found = false;
    }
    memory.add(num);
  }
  if (!found) console.log('Not found');
}

// findForPair(nums, target);
findHashPair(nums, target);
