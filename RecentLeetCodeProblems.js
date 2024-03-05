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

// 347. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    const map = new Map();
    const bucket = [];
    const res = [];

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map) {
        bucket[count] = (bucket[count] || new Set()).add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) res.push(...bucket[i]);
        if (res.length === k) break;
    }

    return res;
};

// 206. Reverse Linked List
var reverseList = function(head) {
    let current = head;
    let prev = null;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let start = 0;
    let i = 0;
    const subStrSet = new Set();
    let longest = 0;

    while (i < s.length) {
        if (!subStrSet.has(s[i])) {
            subStrSet.add(s[i]);
            if (i === s.length - 1 && subStrSet.size > longest) longest = subStrSet.size;
            i++;
        } else {
            if (subStrSet.size > longest) longest = subStrSet.size;
            subStrSet.clear();
            start++;
            i = start;
        }

    }

    return longest;
}

// 3. Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;

    let start = 0;
    let i = start;
    const set = new Set();
    let longest = 0;

    while (i < s.length) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            i++;
            if (i === s.length && set.size > longest) longest = set.size;
        } else {
            if (set.size > longest) longest = set.size;
            set.clear();
            start++;
            i = start;
        }
    }

    return longest;
}

// 347. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    const counts = new Map();
 
    for (let num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
 
    const sorted = [...counts].sort((a, b) => b[1] - a[1]);
    let result = [];
    for (let pair of sorted) {
        if (k > 0) {
            result.push(pair[0]);
            k--;
        } else {
            break;
        }
    }
 
    return result;
 };

// 347. Top K Frequent Elements
var topKFrequent = function(nums, k) {
    let map = new Map();
    let bucket = [];
    let res = [];
 
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
 
    for (let [num, count] of map) {
        bucket[count] = (bucket[count] || new Set()).add(num);
    }
 
    for (let i = bucket.length; i > 0; i--) {
        if (bucket[i]) res.push(...bucket[i]);
        if (k === res.length) break;
    }
 
    return res;
 };