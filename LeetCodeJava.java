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
