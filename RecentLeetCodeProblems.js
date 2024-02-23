// 209. Minimum Size Subarray Sum
var minSubArrayLen = function(target, nums) {
  let subArr = Infinity;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
      if (nums[right] >= target) return 1;

      sum += nums[right];
      console.log("sum: ", sum);
      while (sum >= target) {
          subArr = Math.min(subArr, right - left + 1);
          sum -= nums[left];
          left++
      }
  }

  return subArr === Infinity ? 0 : subArr;
};

// 73. Set Matrix Zeroes
var setZeroes = function(matrix) {
  let rows = new Set();
  let columns = new Set();

  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
          if (matrix[r][c] === 0) {
              rows.add(r);
              columns.add(c);
          }
      }
  }

  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
          if (rows.has(r) || columns.has(c)) matrix[r][c] = 0;
      }
  }
};

// 219. Contains Duplicate II
var containsNearbyDuplicate = function(nums, k) {
    if (nums.length <= 1) return false;

    let left = 0;
    let right = 1;
    while (left < nums.length - 1) {
        if (right - left > k || right == nums.length) {
            left++;
            right = left + 1;
        } else if (nums[left] == nums[right]) {
            return true;
        } else {
            right++;
        }
    }

    return false;
};

// 438. Find All Anagrams in a String
var findAnagrams = function(s, p) {
    let res = [];
    let hash = {};
  
    for (let char of p) {
        hash[char] = (hash[char] || 0) + 1;
    }
  
    let start = 0;
    let end = 0;
  
    while (end < s.length) {
        if (hash[s[end]] > 0) {
            hash[s[end]]--;
            if (end - start + 1 === p.length) res.push(start);
            end++;
        } else {
            if (hash[s[start]] !== undefined) hash[s[start]]++;
            start++;
            if (start > end) end = start;
        }
    }
  
    return res;
  };