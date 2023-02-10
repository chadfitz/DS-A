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


// Length of Last Word -- EASY
// var lengthOfLastWord = function(s) {
//   let arr = s.split(" ");

//   for (let i = arr.length-1; i >= 0; i--){
//     if (arr[i].length > 0) {
//       return arr[i].length;
//     }
//   }
// };
// console.log(lengthOfLastWord("   fly me   to   the moon  "));


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


// 168. Excel Sheet Column Title
var convertToTitle = function(columnNumber) {
    // 1-26 = A - B
    // 27-52 = AA - AZ
};


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

