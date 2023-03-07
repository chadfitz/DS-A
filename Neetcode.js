// Arrays & Hashing
// 1 (217. Contains Duplicate)
var containsDuplicate = function(nums) {
  let count = {}

  for (let i = 0; i < nums.length; i++) {
      if (count[nums[i]] === undefined) count[nums[i]] = 1;
      else return true;
  }
  return false;
};

// 2 (242. Valid Anagram)
var isAnagram = function(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {}
  // iterate through string 1
      // assign a key of the letter with a value of its count
  for (let i = 0; i < str1.length; i++) {
      if (count[str1[i]] === undefined) count[str1[i]] = 1
      else count[str1[i]] += 1
  }

  // iterate through string 2
      // subtract the count of each letter's corresponding value
  for (let i = 0; i < str2.length; i++) {
      // for  early return, return false if any value is negative or undefined
      if (count[str2[i]] < 0 || count[str2[i]] === undefined) return false;
      count[str2[i]] -= 1;
  }

  // boolean if every value is 0
  return Object.values(count).every( num => num === 0);
};

// 3 (1. Two Sum)
var twoSum = function(nums, target) {
  // use difference as the key because you can check hash[key] easily, but not value easily
    // ex: [2,7] target = 9; 
    // 2 becomes hash[9-2] = index
    // hash[7] !== undefined 
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === undefined) hash[target-nums[i]] = i
      else return [hash[nums[i]], i]
  }
}

// ------------------------------------------------------
// Binary Search
// 1 (704. Binary Search)
var search = function(nums, target) {
  const mp = Math.floor(nums.length / 2);
  if (nums[mp] === target) return mp;
  if (!nums.length) return -1;

  if (target < nums[mp]) {
      return search(nums.slice(0, mp), target);
  } else {
      const res = search(nums.slice(mp+1, nums.length), target)
      if (res === -1) return -1;
      return res + mp + 1
  }
};