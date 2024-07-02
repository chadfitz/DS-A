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