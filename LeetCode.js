// Roman to Integer
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


// Longest Common Prefix
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
// console.log(longestCommonPrefix(["",""]));
// console.log(longestCommonPrefix(["ab", "a"]));


// '' = true
// make an object
// if ([{, put a key of )]} into the object with value of their count
// if )]}, then object[ closing ] -= 1
// check if all object values = 0
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
// console.log(validParentheses('()')) //true
// console.log(validParentheses('()[]{}')) //true
// console.log(validParentheses('(]')) //false
// console.log(validParentheses('([)]')) //true
// console.log(validParentheses('()[}')) // false


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
// console.log(isPalindrome("ab_a"));


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
// console.log(titleToNumber("FXSHRXW")); // 2147483647


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


