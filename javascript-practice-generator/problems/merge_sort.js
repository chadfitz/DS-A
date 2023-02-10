// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. 
//
// **IMPORTANT: Make sure to use a function declaration (`function merge`) as
// opposed to a function expression (`const merge = function`) for `merge`. Do
// NOT use the built-in `Array.prototype.sort` method in your implementation.**
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

Array.prototype.mergeSort = function(callback) {
  if (this.length <= 1) return this;

  callback = callback || function (num1, num2) {
    if (num1 < num2) return -1;
    return 1;
  }

  const left = this.slice(0, this.length/2).mergeSort(callback);
  const right = this.slice(this.length/2, this.length).mergeSort(callback);

  return merge(left, right, callback);
}
function merge (left, right, comparator) {
  let merged = [];

  while (left.length && right.length) {
    if (comparator(left[0], right[0]) === -1) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return merged.concat(left, right);
}