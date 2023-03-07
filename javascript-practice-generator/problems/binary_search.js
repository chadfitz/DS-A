// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

const bsearch = (sortedArray, target) => {
  let mp = Math.floor(sortedArray.length/2);

  if (sortedArray[mp] === target) return mp;
  if (!sortedArray.length) return -1;

  if (target < sortedArray[mp]) {
    return bsearch(sortedArray.slice(0, mp), target);
  } else {
    const res = bsearch(sortedArray.slice(mp+1, sortedArray.length), target)
    return res === -1 ? -1 : res + mp + 1;
  }
}