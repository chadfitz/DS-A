// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 

Array.prototype.quickSort = function (callback = null) {
  callback = callback || function (num1, num2) {
    if (num1 < num2) return -1;
    return 1;
  }

  if (this.length <= 1) return this;

  const pivot = this[0];

  const left = this.slice(1).filter(el => callback(el, pivot) === -1);
  const right = this.slice(1).filter(el => callback(el, pivot) > -1);
  left = left.quickSort(callback);
  right = right.quickSort(callback);

  return left.concat([pivot], right);
}