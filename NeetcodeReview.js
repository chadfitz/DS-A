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

// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
var isAnagram = function(str1, str2) {
  let counts = {};

  for (let i = 0; i < str1.length; i++) {
      if (counts[str1[i]] === undefined) counts[str1[i]] = 1
      else counts[str1[i]] += 1;
  }

  for (let i = 0; i < str2.length; i++) {
      if (counts[str2[i]] === undefined) return false
      else counts[str2[i]] -= 1;
  }

  return Object.values(counts).every( num => num === 0)
};

// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
var twoSum = function(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] === undefined) hash[target - nums[i]] = i;
      else return [hash[nums[i]], i]
  }
}

// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
var isPalindrome = function(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

  let i = 0;
  let j = str.length - 1
  while (i <= j) {
      if (str[i] !== str[j]) return false;
      i++
      j--
  }

  return true
};


