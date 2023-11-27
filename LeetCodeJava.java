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
            } else if (stack.empty() || stack.pop() != hashMap.get(ch)) {
                return false;
            }
        }

        return stack.size() == 0;
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

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) return true;
        }

        return false;
    }
}