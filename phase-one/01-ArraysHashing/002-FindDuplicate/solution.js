const nums = [1, 3, 4, 2, 2, 3, 5];

function findDuplicate(nums) {
  let found = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        found = true;
        console.log('Found', nums[i]);
      }
    }
  }
  if (!found) console.log('No duplicate found');
}

function findDuplicateTwo(nums) {
  let found = false;
  let memory = new Set();

  for (let num of nums) {
    let newNum = num;

    if (memory.has(newNum)) {
      console.log(`Found: ${num}`);
      found = true;
    }
    memory.add(num);
  }
  if (!found) console.log('Not found');
}

findDuplicate(nums);
findDuplicateTwo(nums);
