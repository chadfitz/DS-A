// Arrays and Hashing
// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
var containsDuplicate = function(nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
      if (counts[nums[i]] !== undefined) return true
      else counts[nums[i]] = 1;
  }

  return false;
};