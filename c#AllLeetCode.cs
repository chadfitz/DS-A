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