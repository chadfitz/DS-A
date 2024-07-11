// 20. Valid Parentheses
class Solution {
    public boolean isValid(String s) {
        Map<Character, Character> parens = new HashMap<>();
        parens.put('(', ')');
        parens.put('[', ']');
        parens.put('{', '}');

        char[] charArr = s.toCharArray();
        Stack<Character> stack = new Stack<>();
        for (char paren : charArr) {
            if (parens.containsKey(paren)) {
                stack.push(parens.get(paren));
            } else {
                if (stack.empty()) return false;
                if (stack.pop() != paren) return false;
            }
        }

        return stack.empty();
    }
}

// 9. Palindrome Number
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) return false;
        char[] nums = String.valueOf(x).toCharArray();

        for(int i = 0; i < nums.length/2; i++) {
            if (nums[i] != nums[nums.length - 1 - i]) return false;
        }
        return true;
    }
}

// 14. Longest Common Prefix
class Solution {
    public String longestCommonPrefix(String[] strs) {
        StringBuilder res = new StringBuilder();

        Arrays.sort(strs);
        for(int i = 0; i < strs[0].length(); i++) {
            if (strs[0].charAt(i) == strs[strs.length - 1].charAt(i)) {
                res.append(strs[0].charAt(i));
            } else {
                return res.toString();
            }
        }
        return res.toString();
    }
}

// 26. Remove Duplicates from Sorted Array
class Solution {
    public int removeDuplicates(int[] nums) {
        int first = 1;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[first - 1]) {
                nums[first] = nums[i];
                first++;
            }
        }
        return first;
    }
}

// 11. Container With Most Water
class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int area = Math.min(height[left], height[right]) * (right - left);

        while(left < right) {
            if (height[left] <= height[right]) {
                left++;
            } else {
                right--;
            }
            if (Math.min(height[left], height[right]) * (right - left) > area) {
                area = Math.min(height[left], height[right]) * (right - left);
            }
        }
        return area;
    }
}

// 28. Find the Index of the First Occurrence in a String
class Solution {
    public int strStr(String haystack, String needle) {
        // 2 pointer:
            // left is when haystack[i] == needle[0]
            // right iterates until right-left = needle.length-1
        // 2 cases:
            // 1. right-left = needle.length-1 && haystack[right] == needle[length-1]
                // return left
            // 2. right == haystack.length && case 1 is false
                // return -1
        int left = 0;
        int right = left;
        while (right < haystack.length()) {
            if (needle.charAt(0) == haystack.charAt(left)) {
                if (right - left == needle.length() - 1 && haystack.charAt(right) == needle.charAt(needle.length() - 1)) return left;
                if (haystack.charAt(right) == needle.charAt(right - left)) {
                    right++;
                } else {
                    left++;
                    right = left;
                }
            } else {
                left++;
                right = left;
            }
        }
        return -1;
    }
}