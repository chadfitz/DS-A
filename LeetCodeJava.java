// 1. Two Sum
class Solution {
  public int[] twoSum(int[] nums, int target) {
      HashMap<Integer, Integer> myHashMap = new HashMap<Integer, Integer>();

      for (int i = 0; i < nums.length; i++) {
          if (myHashMap.containsKey(target - nums[i])) {
              return new int[]{myHashMap.get(target - nums[i]), i};
          } else {
              myHashMap.put(nums[i], i);
          }
      } 
      return new int[]{};
  }
}

// 9. Palindrome Number
class Solution {
  public boolean isPalindrome(int x) {
      String str = Integer.toString(x);
      char[] charArr = str.toCharArray();

      for (int i = 0; i < charArr.length; i++) {
          if (charArr[i] != charArr[charArr.length-1-i]) return false;
      }

      return true;
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

// 13. Roman to Integer
class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> symbols = new HashMap<Character, Integer>();
        symbols.put('I', 1);
        symbols.put('V', 5);
        symbols.put('X', 10);
        symbols.put('L', 50);
        symbols.put('C', 100);
        symbols.put('D', 500);
        symbols.put('M', 1000);

        System.out.println(symbols);

        int result = 0;
        int i = 0;
        while (i < s.length()) {
            if (i < s.length() - 1 && symbols.get(s.charAt(i)) < symbols.get(s.charAt(i + 1))) {
                result += symbols.get(s.charAt(i + 1)) - symbols.get(s.charAt(i));
                i += 2;
            } else {
                result += symbols.get(s.charAt(i));
                i++;
            }
        }

        return result;
    }
}

// 14. Longest Common Prefix
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length <= 1) return strs[0];
        Arrays.sort(strs);

        String res = "";
        for (int i = 0; i < strs[0].length(); i++) {
            if (strs[0].charAt(i) != strs[strs.length - 1].charAt(i)) return res;
            res += strs[0].charAt(i);
        }

        return res;
    }
}

// 20. Valid Parentheses
class Solution {
    public boolean isValid(String s) {
        if (s.length() == 1) return false;

        Map<Character, Character> hashMap = new HashMap<Character, Character>();
        hashMap.put(')', '(');
        hashMap.put(']', '[');
        hashMap.put('}', '{');

        Stack stack = new Stack();
        for (char ch : s.toCharArray()) {
            if (hashMap.get(ch) == null) {
                stack.push(ch);
            } else {
                if (stack.empty()) return false;
                if (stack.pop() != c) return false; 
            }
        }

        return stack.empty();
    }
}

// 21. Merge Two Sorted Lists
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode preHead = new ListNode();
        ListNode current = preHead;

        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 == null) {
            current.next = list2;
        } else {
            current.next = list1;
        }

        return preHead.next;
    }
}

// 26. Remove Duplicates from Sorted Array
class Solution {
    public int removeDuplicates(int[] nums) {
        int j = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[j] = nums[i];
                j++;
            }
        }

        return j;
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

// 121. Best Time to Buy and Sell Stock
class Solution {
    public int maxProfit(int[] prices) {
        int lowPrice = prices[0];
        int maxProfit = 0;

        for (int price : prices) {
            if (price < lowPrice) lowPrice = price;
            if ((price - lowPrice) > maxProfit) maxProfit = price - lowPrice;
        }

        return maxProfit;
    }
}

// 125. Valid Palindrome
class Solution {
    public boolean isPalindrome(String s) {
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != s.charAt(s.length()-1-i)) return false;
        }
        return true;
    }
}

// 206. Reverse Linked List
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}

// 217. Contains Duplicate
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) return true;
        }

        return false;
    }
}

// 242. Valid Anagram
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        HashMap<Character, Integer> myHashMap = new HashMap<Character, Integer>();

        for (int i = 0; i < s.length(); i++) {
            if (myHashMap.get(s.charAt(i)) == null) {
                myHashMap.put(s.charAt(i), 1);
            } else {
                myHashMap.put(s.charAt(i), myHashMap.get(s.charAt(i)) + 1);
            }

            if (myHashMap.get(t.charAt(i)) == null) {
                myHashMap.put(t.charAt(i), -1);
            } else {
                myHashMap.put(t.charAt(i), myHashMap.get(t.charAt(i)) - 1);
            }
        }

        for (int value : myHashMap.values()) {
            if (value != 0) return false;
        }

        return true;
    }
}

// 704. Binary Search
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int midpoint = left + (right - left)/2;

            if (target == nums[midpoint]) {
                return midpoint;
            } else if (target < nums[midpoint]) {
                right = midpoint - 1;
            } else {
                left = midpoint + 1;
            }
        }

        return -1;
    }
}
