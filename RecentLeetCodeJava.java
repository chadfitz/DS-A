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