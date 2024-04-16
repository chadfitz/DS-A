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
