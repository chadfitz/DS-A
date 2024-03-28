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

// 438. Find All anagrams in a String
var findAnagrams = function(s, p) {
    let counts = {};
    let res = [];

    for (let char of p) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let start = 0;
    let end = 0;

    while (end < s.length) {
        if (counts[s[end]] > 0) {
            counts[s[end]]--;
            if ((end - start + 1) === p.length) res.push(start);
            end++;
        } else {
            if (counts[s[start]] !== undefined) counts[s[start]]++;
            start++;
            if (start > end) end = start;
        }
    }

    return res;
};

// 66. Plus One
var plusOne = function(digits) {
    digits[digits.length - 1]++;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i !== 0 && digits[i] >= 10) {
            digits[i] = 0;
            digits[i - 1]++;
        } else if (i === 0 && digits[i] >= 10) {
            digits[i] = 0;
            digits.unshift(1);
        }
    }

    return digits;
};

// 438. Find All anagrams in a String
var findAnagrams = function(s, p) {
    let counts = {};
    let res = [];

    for (let char of p) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let start = 0;
    let end = 0;

    while (end < s.length) {
        if (counts[s[end]] > 0) {
            counts[s[end]]--;
            if ((end - start + 1) === p.length) res.push(start);
            end++;
        } else {
            if (counts[s[start]] !== undefined) counts[s[start]]++;
            start++;
            if (start > end) end = start;
        }
    }

    return res;
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

// 56. Merge intervals
var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    const res = [sortedIntervals[0]];
    let resIndex = 0;
    let i = 1;
    while (i < sortedIntervals.length) {
        if (res[resIndex][1] >= sortedIntervals[i][0]) {
            res[resIndex] = [res[resIndex][0], Math.max(res[resIndex][1], sortedIntervals[i][1])];
            i++;
        } else {
            res.push(sortedIntervals[i]);
            resIndex++;
            i++;
        } 
    }

    return res;
};

// 56. Merge intervals
var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
    const res = [sortedIntervals[0]];
    let resIndex = 0;
    for (let i = 1; i < sortedIntervals.length; i++) {
        if (res[resIndex][1] >= sortedIntervals[i][0]) {
            res[resIndex] = [res[resIndex][0], Math.max(res[resIndex][1], sortedIntervals[i][1])];
        } else {
            res.push(sortedIntervals[i]);
            resIndex++;
        } 
    }

    return res;
};

// 56. Merge Intervals
var merge = function(intervals) {
    let sortedIntervals = intervals.sort((a, b) => a[0] - b[0])
    const res = [intervals[0]];

    for (let i = 1; i < sortedIntervals.length; i++) {
        if (res[res.length - 1][1] >= sortedIntervals[i][0]) {
            res[res.length - 1] = [res[res.length - 1][0], Math.max(res[res.length - 1][1], sortedIntervals[i][1])]
        } else {
            res.push(sortedIntervals[i]);
        }
    }

    return res;
};

// 438. Find All anagrams in a String
var findAnagrams = function(s, p) {
    const pCount = {};

    for (let char of p) {
        pCount[char] = (pCount[char] || 0) +1;
    }

    let start = 0;
    let end = 0;
    const res = [];
    while (end < s.length) {
        if (pCount[s[end]] > 0) {
            pCount[s[end]]--;
            if (pCount[s[end]] === 0 && end - start + 1 === p.length) res.push(start);
            end++;
        } else {
            if (pCount[s[start]] !== undefined) pCount[s[start]]++;
            start++;
            if (start > end) end++;
        }
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

// 567. Permutation in String
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const counts = {};
    for (let char of s1) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let start = 0;
    let end = 0;
    while (end < s2.length) {
        if (counts[s2[end]] > 0) {
            counts[s2[end]]--;
            if (end - start + 1 === s1.length) return true; 
            end++;
        } else {
            if (counts[s2[start]] !== undefined) counts[s2[start]]++;
            start++;
            if (start > end) end = start;
        }
    }

    return false;
};

// 217. contains Duplicate
var containsDuplicate = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
};

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
            list2 = list2.next;
        }
        console.log("current:")
        console.log(JSON.stringify(current));
        console.log("current.next:")
        console.log(JSON.stringify(current.next));
        console.log("res:")
        console.log(JSON.stringify(res));
        console.log("-----------------------")  
        current = current.next;
    }

    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return res.next;
};

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
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return res.next;
};

// 143. Reorder List
var reorderList = function(head) {
    // find the middle node
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half
    let current = slow.next;
    let prev = null;
    while (current) {
        let nextPlaceholder = current.next;
        current.next = prev;
        prev = current;
        current = nextPlaceholder;
    }

    // merge
    slow.next = null;    
    let front = head;
    let back = prev;
    while (front && back) {
        let frontNext = front.next;
        let backNext = back.next;
        front.next = back;
        back.next = frontNext;
        front = frontNext;
        back = backNext;
    }
};

// 143. Reorder List
var reorderList = function(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let current = slow.next;
    while (current) {
        let nextPlaceholder = current.next;
        current.next = prev;
        prev = current;
        current = nextPlaceholder;
    }

    slow.next = null;
    let forward = head;
    let backward = prev;
    while (forward && backward) {
        let forwardNext = forward.next;
        let backwardNext = backward.next;
        forward.next = backward;
        backward.next = forwardNext;
        forward = forwardNext;
        backward = backwardNext;
    }
};

// 143. Reorder List
var reorderList = function(head) {
    // find the mid node
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse the second half
    let prev = null;
    let current = slow.next;
    while (current) {
        let nextPlaceholder = current.next;
        current.next = prev;
        prev = current;
        current = nextPlaceholder;
    }

    // finalize the separation of the two lists by cutting the first off at the midpoint
    slow.next = null;

    // merge the two lists
    let front = head;
    let back = prev;
    while (front && back) {
        let frontNext = front.next;
        let backNext = back.next;
        front.next = back;
        back.next = frontNext;
        back = backNext;
        front = frontNext;
    }
};