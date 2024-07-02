# 1. Two Sum
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dic = {}
        for i in range(len(nums)):
            if not dic.has_key(target - nums[i]):
                dic[nums[i]] = i
            else:
                return [dic[target - nums[i]], i]

# 9. Palindrome Number
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        intStr = str(x)
        for i in range(0, len(intStr)/2):
            if intStr[i] != intStr[len(intStr) - 1 - i]: return False

        return True
    
# 14. Lonest Common Prefix
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        result = ""

        strs.sort()
        for i in range(0, len(strs[0])):
            if strs[0][i] != strs[-1][i]: return result
            result += strs[0][i]

        return result
    
#20. Valid Parentheses
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        parens = {
            "(": ")",
            "[": "]",
            "{": "}",
        }

        stack = []
        for char in s:
            if parens.has_key(char):
                stack.append(parens[char])
            else:
                if not stack or char != stack.pop(): return False
        
        # return len(stack) == 0
        return not stack