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