// 1. Two Sum
var twoSum = function(nums, target) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === undefined) hash[target-nums[i]] = i
      else return [hash[nums[i]], i]
  }
}

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

// 11. Container With Most Water
var maxArea = function(height) {
  let left = 0;
  let right = height.length -1;
  let area = 0;

  while (left < right) {
      let newArea = (right - left) * (Math.min(height[left], height[right]));
      if (newArea > area) area = newArea;
      if (height[left] > height[right]) {
          right--
      } else {
          left++
      }
  }

  return area;
};

// 13. Roman to Integer
var romanToInt = function(s) {
  let numerals = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let sum = 0;
  for (let i = 0; i < s.length-1; i++){
    if (numerals[s[i]] < numerals[s[i+1]]) {
      sum -= numerals[s[i]]
    } else {
      sum += numerals[s[i]]
    }
  }
  return sum + numerals[s[s.length-1]];
};

// 14. Longest Common Prefix
var longestCommonPrefix = function(strs) {
  // Input: strs = ["flower","flow","flight"]
  // strs[x[1]] strs[x,2]
  // if strs[0[0]] === strs[1[0]] === strs[2[0]]
  if (strs.length < 1) return "";
  let prefix = '';
  let maxLength = Math.min(...strs.map(str => str.length));

  for (let i = 0; i < maxLength; i++){
    let char = strs[0][i];
    if (strs.every(str => str[i] === char)) {
      prefix += char;
    } else {
      break
    }
  }
  return prefix;
};

// 20. Valid Parentheses
const validParentheses = (string) => {
  if (string === '') return true;
  let testObj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let resObj = {}
  // let resObj = new Map();
  // O(1) => insertion
  // O(1) => retrieval
  // res.set(key, value)
  // res.get(key)
  for (let i=0; i<string.length; i++){
    if (string[i] === '(' || string[i] === '[' || string[i] === '{'){
      if (!resObj[testObj[string[i]]]) {
      // if (!resObj.get(testObj[string[i]])) {
        resObj[testObj[string[i]]] = 1;
        // resObj.set(testObj[string[i]], 1);
      } else {
        resObj[testObj[string[i]]] += 1;
      }
    } else if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
      if (!resObj[string[i]]) return false;
      resObj[string[i]] -= 1;
    }
  }

  return Object.values(resObj).every(val => val === 0);
}

// 21. Merge Two Sorted Lists
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode();
    let current = res;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next
        }
        current = current.next;
    }

    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    // console.log(JSON.stringify(res));
    return res.next;
};

// 26. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i+1]) {
          nums.splice(i, 1);
          i--
      }
  }
  return nums.length;
};

// 27. Remove Element
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1)
          i--
      }
  }
  return nums.length;
};

// 35. Search Insert Position
var searchInsert = function(nums, target) {
  if (nums[0] > target) return 0;
  if (nums.includes(target)) return nums.indexOf(target);
  if (nums[nums.length-1] < target) return nums.length;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > target && nums[i-1] < target) return i;
  }
};

// 53. Maximum Subarray
var maxSubArray = function(nums) {
  // start with nums[0] instead of 0 in the case of all negatives
  let maxSum = currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
      // add new num to get new current sum
          // if current sum > max sum, update max sum
          // if negative, set current sum to 0
      
      // this line goes first in the case of nums of length 2, such as [-2,1]
      if (currentSum < 0) currentSum = 0;
      
      currentSum += nums[i];
      if (currentSum > maxSum) maxSum = currentSum;
  }

  return maxSum;
};

// 56. Merge Intervals
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  // takes care of intervals.length <= 1 &&
  // compare to this end subarr instead of intervals[i+1] in cases like: [[1,4],[0,2],[3,5]]
  let res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
      if (res[res.length - 1][1] >= intervals[i][0]) {
          res[res.length - 1] = [Math.min(res[res.length - 1][0], intervals[i][0]), 
                                 Math.max(res[res.length - 1][1], intervals[i][1])];
      } else {
          res.push(intervals[i]);
      }
  }

  return res;
};

// 66. Plus One
var plusOne = function(digits) {
  digits[digits.length - 1] += 1;
  for (let i = digits.length-1; i >= 0; i--) {
      if (i === 0 && digits[i] >= 10) {
          digits[i] = 0;
          digits.unshift(1);
      }
      if (digits[i] >= 10) {
          digits[i] = 0;
          digits[i-1] += 1;
      }
  }

  return digits;
};

// 69. Sqrt(x)
var mySqrt = function(x) {
  if (x === 0) return 0;
  if (x < 4) return 1;
  
  let low = 1;
  let high = Math.ceil(x/2);
  let mid;

  while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if ((mid * mid) < x) {
          low = mid + 1;
      } else if ((mid * mid) > x) {
          high = mid - 1;
      } else {
          return mid;
      }
  }
  return high;
};

// 73. Set Matrix Zeroes
var setZeroes = function(matrix) {
  let row = new Set();
  let column = new Set();

  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
          if (matrix[r][c] === 0) {
              row.add(r);
              column.add(c);
          }
      }
  }

  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
          if (row.has(r) || column.has(c)) matrix[r][c] = 0;
      }
  }
};

// 118. Pascal's Triangle
var generate = function(numRows) {
    let res = [];
  
    for (let i = 0; i < numRows; i++) {
        let subArr = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                subArr.push([1])
            } else {
                subArr.push(parseInt(res[i-1][j-1]) + parseInt(res[i-1][j]))
            }
        }
        res.push(subArr);
    }
  
    return res;
};

// 121. Best Time to Buy and Sell Stock
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) min = prices[i];
      if (prices[i] - min > profit) profit = prices[i] - min;
  }
  return profit;
};

// 125. Valid Palindrome
var isPalindrome = function(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  console.log(str);
  if (str.length <= 1) return true;
  for (let i = 0; i < str.length/2; i++) {
      if (str[i] !== str[str.length-1-i]) return false;
  }
  return true;
};

// 167. Two Sum II - Input Array is Sorted
var twoSum = function(numbers, target) {
    let pojo = {};

    for (let i = 0; i < numbers.length; i++) {
        if (pojo[numbers[i]] === undefined) {
            pojo[target - numbers[i]] = i + 1;
        } else {
            return [pojo[numbers[i]], i + 1];
        }
    }

    return [];
};

// 171. Excel Sheet Column Number
var titleToNumber = function(columnTitle) {
  const numValues = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 10,
      K: 11,
      L: 12,
      M: 13,
      N: 14,
      O: 15,
      P: 16,
      Q: 17,
      R: 18,
      S: 19,
      T: 20,
      U: 21,
      V: 22,
      W: 23,
      X: 24,
      Y: 25,
      Z: 26
  }
  let length = columnTitle.length
  if (length === 1) return numValues[columnTitle[0]];

  let num = numValues[columnTitle[length - 1]];
  console.log("initial num:", num)
  for (let i = 2; i <= length; i++) {
      num += ((26^(i-1)) * numValues[columnTitle[length - i]]);
      console.log("num:", num)
  }

  return num;
};

// 205. Isomorphic Strings
var isIsomorphic = function(s, t) {
  if (s.length != t.length) return false;

  let hashPairs = {};

  for (let i = 0; i < s.length; i++) {
      if (hashPairs["s" + s[i]] === undefined && hashPairs["t" + t[i]] === undefined) {
          hashPairs["s" + s[i]] = t[i];
          hashPairs["t" + t[i]] = s[i];
      } else if (hashPairs["s" + s[i]] != t[i] || hashPairs["t" + t[i] != s[i]]) {
          return false;
      }
  }

  return true;
};

// 206. Reverse Linked List
var reverseList = function(head) {
  let prev = null;
  let current = head;

  while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }
  return prev;
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

// 217. Contains Duplicate
var containsDuplicate = function(nums) {
  let count = {}

  for (let i = 0; i < nums.length; i++) {
      if (count[nums[i]] === undefined) count[nums[i]] = 1;
      else return true;
  }
  return false;
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

// 242. Valid Anagram
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

// 392. Is Subsequence
var isSubsequence = function(s, t) {
  let sIndex = 0;

  for (let i = 0; i < s.length; i++) {
      if (!t.includes(s[i])) return false;
      // if (t.indexOf(s[i]) <= sIndex) return false;
      sIndex = t.indexOf(s[i])
      t = t.slice(sIndex+1)
  }

  return true;
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

// 540. Single Element in a Sorted Array
var singleNonDuplicate = function(nums) {
  // binary sort way (good)
  // to-do: look into bsort
  
  // worse way
  if (nums.length === 1) return nums[0];
  for (let i = 0; i < nums.length; i += 2) {
      if (nums[i] !== nums[i+1] || i === nums.length - 1) return nums[i]
  }
  
  // WORST way (didn't see it's a sorted array)
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
      if (counts[nums[i]] === undefined) {
          counts[nums[i]] = 1;
      } else {
          counts[nums[i]] += 1;
      }
  }

  for (const [num, count] of Object.entries(counts)) if (count === 1) return num;
};

// 567. Permutation in String
var checkInclusion = function(s1, s2) {
    let counts = {};
    for (let char of s1) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let start = 0;
    let end = 0;
    let goalLength = s1.length;
    while (end < s2.length) {
        if (counts[s2[end]] > 0) {
            goalLength--;
            counts[s2[end]]--;
            if (counts[s2[end]] === 0 && goalLength === 0) return true;
            end++;
        } else {
            if (counts[s2[start]] !== undefined) {
                counts[s2[start]]++;
                goalLength++;
            }
            start++;
            if (start > end) end = start;
        }
    }

    return false;
};

// 704. Binary Search
var search = function(nums, target) {
  // recursion
    // const mp = Math.floor(nums.length / 2);
    // if (nums[mp] === target) return mp;
    // if (!nums.length) return -1;
  
    // if (target < nums[mp]) {
    //     return search(nums.slice(0, mp), target);
    // } else {
    //     const res = search(nums.slice(mp+1, nums.length), target)
    //     if (res === -1) return -1;
    //     return res + mp + 1
    // }
  
  // 2 pointer
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
        const mp = Math.floor((left + right) / 2);
        if (target < nums[mp]) {
            right = mp - 1
        } else if (target > nums[mp]) {
            left = mp + 1
        } else {
            return mp
        }
    }
    return -1;
};

// 739. Daily Temperatures
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let answer = [];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        if (!stack.length) {
            answer[i] = 0;
        } else if (temperatures[i] < stack[stack.length - 1][0]) {
            answer[i] = stack[stack.length - 1][1] - i;
        }
        while (stack.length && temperatures[i] >= stack[stack.length - 1][0]) {
            stack.pop();
            if (!stack.length) answer[i] = 0;
            if (stack.length && temperatures[i] < stack[stack.length - 1][0]) answer[i] = stack[stack.length - 1][1] - i;
        }
        stack.push([temperatures[i], i])
    }

    return answer;
};

// 807. Max Increase to Keep City Skyline
var maxIncreaseKeepingSkyline = function(grid) {
  let maxRow = {};
  let maxColumn = {};
  let res = 0;

  for (let r = 0; r < grid.length; r++) {
      maxRow[r] = Math.max(...grid[r]);
      tempMaxColumn = 0;
      for (let c = 0; c < grid[0].length; c++) {
          if (grid[c][r] > tempMaxColumn) tempMaxColumn = grid[c][r];
          if (c == grid[0].length - 1) maxColumn[r] = tempMaxColumn;
      }
  }

  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
          if (maxColumn[c] < maxRow[r]) {
              res += maxColumn[c] - grid[r][c]
          } else {
              res += maxRow[r] - grid[r][c]
          }
      }
  }

  return res;
};

// 1010. Pairs of Songs With Total Durations Divisible by 60
var numPairsDivisibleBy60 = function(time) {
  let count = 0;

  let hash = {0: 0};
  for (i = 0; i < time.length; i++) {
      let complement = time[i] % 60;
      if (time[i] % 60 === 0) {
          hash[0] += 1;
      } else {
          if (hash[60 - complement] !== undefined) {
              count += 1;
          } else {
              hash[complement] = i;
          }
      }
  }

  if (hash[0] > 1) {
      return count + hash[0];
  } else {
      return count;
  }
};

// 1047. Remove All Adjacent Duplicates In String
var removeDuplicates = function(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === stack[stack.length - 1]) {
          stack.pop()
      } else {
          stack.push(s[i])
      }
  }

  return stack.join("");
};

// 1122. Relative Sort Array
var relativeSortArray = function(arr1, arr2) {
  let hashMap = {};

  for (let i = 0; i < arr1.length; i++) {
      if (!hashMap[arr1[i]]) {
          hashMap[arr1[i]] = 1
      } else {
          hashMap[arr1[i]] += 1
      }
  }

  let newArr = [];

  for (let i = 0; i < arr2.length; i++) {
      while (hashMap[arr2[i]] > 0) {
          newArr.push(arr2[i])
          hashMap[arr2[i]] -= 1
      }
  }

  for (let key in hashMap) {
      while (hashMap[key] > 0) {
          newArr.push(key)
          hashMap[key] -= 1
      } 
  }

  return newArr;
};

//1706. Where Will the Ball Fall
var findBall = function(grid) {
  let res = [];
  let col;
  let ball

  for (let col = 0; col < grid.length+1; col++) {

      if (col < grid.length - 2 && grid[col][col] === 1 && grid[col][col+1] === -1) {
          res.push(-1);
          break;
      }
      if (col === 0 && grid[col][col] === -1 || col === grid.length-1 && grid[col][col] === 1) {
          res.push(-1);
          break;
      }
      if (grid[col][col] === 1 && col !== grid[0].length -1) {
          col += 1;
      } else if (grid[col][col] === -1 && col !== 0) {
          col -= 1;
      }

      if (col === grid.length) {
          res.push(col);
          col += 1;
      }
  }
  return res;
};

// 2161.Partition Array According to Given Pivot
var pivotArray = function(nums, pivot) {
  let lessThan = [];
  let equal = []
  let greaterThan = [];

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] < pivot) {
          lessThan.push(nums[i]);
      } else if (nums[i] === pivot) {
          equal.push(nums[i])
      } else if (nums[i] > pivot) {
          greaterThan.push(nums[i])
      }
  }
  return lessThan.concat(equal, greaterThan)
};