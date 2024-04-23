// 1. Two Sum
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        if (nums == null || nums.Length < 2) return new int[2];
        // create a dictionary of size nums.length
        // for every number we encounter, create key = num and value = current index
        // if we encounter dictionary[target - num], return value of [dictionary[target - num], current index]
        Dictionary<int, int> dict = new Dictionary<int, int>(nums.Length - 1);

        for (int i = 0; i < nums.Length; i++)
        {
            if (dict.ContainsKey(target - nums[i])) return new int[2] {dict[target - nums[i]], i};
            dict[nums[i]] = i;
        }
        return new int[2];
    }
}

// 9. Palindrome Number
public class Solution {
    public bool IsPalindrome(int x) {
        string numString = x.ToString();
        
        for (int i = 0; i < numString.Length / 2; i++)
        {
            if (numString[i] != numString[numString.Length - 1 - i]) return false;
        }

        return true;
    }
}

// 13. Roman to Integer
public class Solution {
    public int RomanToInt(string s) {
        Dictionary<char, int> dict = new Dictionary<char, int>();
        dict.Add('I', 1);
        dict.Add('V', 5);
        dict.Add('X', 10);
        dict.Add('L', 50);
        dict.Add('C', 100);
        dict.Add('D', 500);
        dict.Add('M', 1000);

    int res = 0;
    for (int i = 0; i < s.Length; i++)
    {
        if (i < s.Length - 1 && dict[s[i]] < dict[s[i + 1]])
        {
            res -= dict[s[i]];
        }
        else
        {
            res += dict[s[i]];
        }
    }

    return res;
    }
}

// 14. Longest Common Prefix
public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        string res = "";
        for (int charI = 0; charI < strs[0].Length; charI++)
        {
            res += strs[0][charI];
            for (int subArr = 0; subArr < strs.Length; subArr++)
            {
                if (charI >= strs[subArr].Length || strs[subArr][charI] != res[res.Length - 1])
                {
                    res = res.Remove(res.Length - 1);
                    return res;
                }
            }
        }

        return res;
    }
}

// 20. Valid Parentheses
public class Solution {
    public bool IsValid(string s) {
        Dictionary<char, char> parens = new Dictionary<char, char>
        {
            { '(', ')' },
            { '[', ']' },
            { '{', '}' }
        };

        Stack<char> myStack = new Stack<char>();
        foreach (char paren in s)
        {
            if (parens.ContainsKey(paren)) 
            {
                myStack.Push(parens[paren]);
            }
            else
            {
                if (myStack.Count == 0 || myStack.Pop() != paren) return false;
            }
        }
        return myStack.Count == 0;
    }
}

// 21. Merge Two Sorted Lists
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        ListNode merged = new ListNode();
        ListNode current = merged;

        while (list1 != null && list2 != null)
        {
            if (list1.val < list2.val)
            {
                current.next = list1;
                list1 = list1.next;
            }
            else
            {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 != null) current.next = list1;
        else if (list2 != null) current.next = list2;

        return merged.next;
    }
}

// 26. Remove Duplicates from Sorted Array
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length == 0) return 0;
        // 2 pointer:
            // 1. unique element
            // 2. iterator until nums[1] != nums[2]
        int unique = 0;
        // var to keep track of unique element count
        int k = 1;
        for (int i = 1; i < nums.Length; i++) 
        {
            if (nums[i] != nums[unique])
            {
                k++;
                unique++;
                nums[unique] = nums[i];
            }
        }

        return k;
    }
}

// 27. Remove Element
public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int notVal = 0;
        foreach (int num in nums)
        {
            if (num != val)
            {
                nums[notVal] = num;
                notVal++;
            }
        }
        return notVal;
    }
}

