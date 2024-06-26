// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

const twoSum = (list, k) => {
  const pairs = {};

  for (let num of list) {
    if (pairs[num] === undefined) {
      pairs[k - num] = "hi";
    } else {
      return true;
    }
  }

  return false;
}
// console.log(twoSum([10, 15, 3, 7], 17));
// console.log(twoSum([10, 12, 15, 17, 21], 5));

// -------------------------------------------------------------------------------------------------------
// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?
const productExceptI = (nums) => {
  const res = [];

  let leftTotal = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = leftTotal;
    leftTotal *= nums[i];
  }

  let rightTotal = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = rightTotal;
    rightTotal *= nums[i];
  }

  return res;
}
// console.log(productExceptI([1, 2, 3, 4, 5]));
// console.log(productExceptI([3, 2, 1]));

// -------------------------------------------------------------------------------------------------------
// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

// **** not solved
const numDecode = (message) => {
  const letters = {};
  let res = 0;

  for (let i = 0; i < message.length; i++) {
    // console.log("parseInt(message[i]): ", parseInt(message[i]));
    let num = parseInt(message[i]);
    if (num > 2) {
      if (letters[num] === undefined) {
        res++;
        letters[num] = 'true';
      }
    } else if (num === 2) {
      if (letters[num] === undefined) {
        res++;
        letters[num] = 'true';
      }
      if (i < message.length - 1 && parseInt(message[i + 1]) <= 6) {
        if (letters[parseInt(message[i] + message[i + 1])] === undefined) {
          letters[parseInt(message[i] + message[i + 1])] = 'true'
          res++;
        }
      }

    } else if (num === 1) {
      if (letters[num] === undefined) {
        letters[num] = 'true';
        res++;
      }
      if (i < message.length - 1) {
        if (letters[parseInt(message[i] + message[i + 1])] === undefined) {
          letters[parseInt(message[i] + message[i + 1])] = true;
          res++;
        }
      }
    }
    console.log("letters: ", letters);
  }

  return res;
}

// console.log(numDecode('111'));

// -------------------------------------------------------------------------------------------------------
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist
//  in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.
const firstMissingPositive = (nums) => {
  // we are finding the lowest positive integer, so the range of possible outcomes is 1 to nums.length
  
  // make all ints positive 
  // (if they were negative set = nums.length since highest possible value is nums.length)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) nums[i] = nums.length;
  }
  
  // set the int at index num - 1 to negative
  // (num - 1 because lowest value is 1, not 0)
  // use absolute value because we are changing the array in place
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    if (num < nums.length) nums[num - 1] = -Math.abs(nums[num - 1]);
  }

  // if any index is positive, that index is the answer
  // (that index + 1 because possible values start at 1, not 0, and we shoved in num - 1 before)
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }

  // If all indexes are positive, the lowest is nums.length
  return nums.length;
}

// Example usage:
// console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
// console.log(firstMissingPositive([1, 2, 0])); // Output: 3
// console.log(firstMissingPositive([4, 1, 3, 2, 6])); // Output: 5

// -------------------------------------------------------------------------------------------------------
// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

// keep track of values and indices
// edge cases:
  // every value is negative

  // [8, 1, 1, 6, 1, 5, 6] 20
  // [2, 4, 3, 6] 10
  // [2, 4, 6, 3] 8
const largestNonAdjacentSum = (nums) => {
  let incl = 0; // Stores the maximum sum including the previous non-adjacent element
  let excl = 0; // Stores the maximum sum excluding the previous non-adjacent element
  let highest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    console.log("nums[i]: ", nums[i]);
    // Calculate the new inclusive sum by adding the current number and the exclusive sum of the previous element
    let newIncl = excl + nums[i];
    // Update the exclusive sum to be the maximum of previous inclusive and exclusive sums
    excl = Math.max(incl, excl);
    // Update the inclusive sum for the next iteration
    incl = newIncl;

    if (nums[i] > highest) highest = nums[i];
    console.log("incl: ", incl);
    console.log("excl: ", excl);
    console.log("---------------");
  }

  // Return the maximum of inclusive and exclusive sums
  if (highest < 0) return highest;
  return Math.max(incl, excl);
}

// console.log(largestNonAdjacentSum([2,4,6,2,5])); // 13
// console.log(largestNonAdjacentSum([8, 1, 2, 6, 1, 5, 6])); // 20
// console.log(largestNonAdjacentSum([-1, -3, -5, -2])); // -1
// console.log(largestNonAdjacentSum([2, 4, 3, 6])); // 10
// console.log(largestNonAdjacentSum([2, 4, 6, 3])); // 8
// console.log(largestNonAdjacentSum([5,1,1,5]));
// console.log(largestNonAdjacentSum([2,6,3,2,5]));

// -------------------------------------------------------------------------------------------------------
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
const jobScheduler = (f, n) => {
  setTimeout(f, n);
}
const functionF = () => {console.log("fart")}
// jobScheduler(functionF, 1000);

// -------------------------------------------------------------------------------------------------------
// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

// trie data structure

// -------------------------------------------------------------------------------------------------------
// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways 
// you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? 
// For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

// -------------------------------------------------------------------------------------------------------
// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
const distinctSubstrings = (k, s) => {
  const map = new Map();
  let longest = 0;

  let start = 0;
  let end = 0;
  while (end < s.length) {
    if (map.size > k) {
      map.set(s[start], map.get(s[start]) - 1);
      if (map.get(s[start]) === 0) map.delete(s[start]);
      start++;
    } else {
      map.set(s[end], (map.get(s[end]) || 0) + 1);
      if (map.size <= k && end - start + 1 > longest) longest = end - start + 1;
      end++;
    }
  }

  return longest;
}
// console.log(distinctSubstrings(2, "abcba")); // 3
// console.log(distinctSubstrings(2, "abcbbab")); // 4

// -------------------------------------------------------------------------------------------------------
// The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

// Hint: The basic equation of a circle is x2 + y2 = r2.



// -------------------------------------------------------------------------------------------------------
// A builder is looking to build a row of N houses that can be of K different colors. 
// He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

// Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.


// -------------------------------------------------------------------------------------------------------
// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space
const commonListNode = (m, n) => {
  let set = new Set();
  while (m) {
    set.add(m.val);
    m = m.next;
  }
  while (n) {
    if (set.has(n.val)) return n.val;
    n = n.next;
  }
}

// -------------------------------------------------------------------------------------------------------
// You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. 
// Each False boolean represents a tile you can walk on.

// Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required 
// to reach the end coordinate from the start. If there is no possible path, then return null. 
// You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

// For example, given the following board:

// [[f, f, f, f],
// [t, t, f, t],
// [f, f, f, f],
// [f, f, f, f]]
// and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required 
// to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.



// -------------------------------------------------------------------------------------------------------
// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

// For example, given the string "([])[]({})", you should return true.

// Given the string "([)]" or "((()", you should return false.

const isBalanced = (brackets) => {
  const pojo = {
    "(": ")",
    "[": "]",
    "{": "}"
  }

  let stack = [];

  for (let bracket of brackets) {
    if (pojo[bracket]) {
      stack.push(pojo[bracket]);
    } else {
      if (stack.pop() !== bracket) return false;
    }
  }

  return stack.length === 0;
}

// -------------------------------------------------------------------------------------------------------
// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters 
// as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of 
// alphabetic characters. You can assume the string to be decoded is valid.

// 2 pointer
  // first is the first occurrence of the letter
  // second is the iterator
// if string[i - 1] !== string[i], push in i - first then first = i
// or if i = string.length - 1, push in i - first + 1;
const encode = (string) => {
  let encodedStr = "";

  let first = 0;
  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[first]) {
      encodedStr = encodedStr.concat(i - first, string[first]);
      first = i;
    }
    if (i === string.length - 1) encodedStr = encodedStr.concat(i - first + 1, string[i]);
  }

  return encodedStr;
}
// console.log(encode("AAAABBBCCDAA")); // "4A3B2C1D2A"

const decode = (encodedString) => {
  let decodedStr = "";
  
  let i = 0;
  while (i < encodedString.length) {
    let counter = parseInt(encodedString[i]);
    while (counter > 0) {
      decodedStr += encodedString[i + 1];
      counter--;
    }
    i += 2;
  }

  return decodedStr;
}
// console.log(decode("4A3B2C1D2A")); // "AAAABBBCCDAA"

// -------------------------------------------------------------------------------------------------------
// The edit distance between two strings refers to the minimum number of character insertions, deletions, and 
// substitutions required to change one string to the other. For example, the edit distance between 
// “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

// Given two strings, compute the edit distance between them.
