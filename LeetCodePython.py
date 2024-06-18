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