# In this part of the session, you will be solving the following problem:
# Return the sum of the numbers in the array, except ignore sections of numbers starting with a 7 and extending to the next 8 (every 7 will be followed by at least one 8). Return 0 for no numbers.

# sum78([1, 2, 2]) → 5
# sum78([1, 2, 2, 7, 99, 99, 8]) → 5
# sum78([1, 1, 7, 8, 2]) → 4

def sum78(nums):
  result = 0
  adding = True

  for num in nums:
    if num == 7:
      adding = False
    elif adding == True:
      result += num
    elif adding == False:
      if num == 8: adding = True
  
  return result

  # In this part of the session, you will be solving the following problem:
# Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. 

# biggest_diff([10, 3, 5, 6]) → 7
# biggest_diff([7, 2, 10, 9]) → 8
# biggest_diff([2, 10, 7, 2]) → 8

def biggest_diff(nums):
  if nums:
  # in python, an empty list is considered False, so it is redundant to say if len(nums)
    max_val = max(nums)
    min_val = min(nums)

    return max_val - min_val
  else:
    return 0
  
print(biggest_diff([1,2,10]))
print(biggest_diff([]))


# In this part of the session, you will be solving the following problem:

# Return True if the string "cat" and "dog" appear the same number of times in the given string.

# cat_dog('catdog') → True
# cat_dog('catcat') → False
# cat_dog('1cat1cadodog') → True

def cat_dog(s):
    cat_count = 0
    dog_count = 0

    for i in range (0, len(s) - 2):
        if s[i : i + 3] == 'cat':
            cat_count += 1
        elif s[i : i + 3] == 'dog':
            dog_count += 1
    
    return cat_count == dog_count