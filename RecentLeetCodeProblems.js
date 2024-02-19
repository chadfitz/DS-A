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