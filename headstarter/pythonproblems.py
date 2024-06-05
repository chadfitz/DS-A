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