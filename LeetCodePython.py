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