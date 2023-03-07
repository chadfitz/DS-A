// 1 what is the output?
const mySet = new Set()
mySet.add(1)
mySet.add(1)
mySet.add('a')
mySet.add('a')
mySet.add(undefined)
mySet.add(undefined)
mySet.add({prop: true})
mySet.add({prop: true})

// console.log('Size:', mySet.size)
// console.log(mySet);
// ------------------------------------------------------


// 2 what is the output?
function* gen1() {
  console.log(yield 1)
  console.log(yield 2)
  console.log(yield 3)
}

const iterator = gen1()

// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)
// --------------------------------------------------


// 3 how to prevent the code with the misspelled variable from running?
function myFunction(y1, y2, ...y3) {
  const [x1, ...[result]] = y3

  console.log(result)
}

const myArray = ['rock', 'paper', 'scissors', 'lizard', 'spock']
// myFunction(...myArray)


// 4 how to throw a JS reference error?
let green;
grnee = false; // misspelled on purpose
// console.log(grnee);


// 1. ** add "use strict" at the top **
// 2. put this code inside of a try-catch statement
// 3. use a linter that disallows use of undeclared variables
// 4. compile this code into ES5 syntax

// To use strict mode, a global script block or a function should start with the statement: "use strict"
// That will prevent the accidental creation of global variables (which can still be created explicitly), 
// and impose a few other restrictions.
// ----------------------------------------------------------


// 5 what is the output?
async function apiCall() {
  return new Promise(resolve => {
    setTimeout(() => {resolve('b')}, 50);
  });
}
async function logger() {
  setTimeout(() => console.log('a'), 10);
  console.log(await apiCall());
  console.log('c');
}
// logger();

// ------------------------------------------------


// 6 which line of code fixes the Reference Error?
// const a = 0;
// const b = '';
// // MISSING LINE HERE
// const outcome = !!(a || b || c || d);

// const c = null;
// const c = '';
// **const c = [false];**

// -------------------------------------------


// 7  Which results in true?
// function Queue() {
//   const backingArray = []

//   return {
//     enqueue: backingArray.pop,
//     dequeue: backingArray.unshift
//   }
// }
// function Queue() {
//   const backingArray = []

//   return {
//     enqueue: backingArray.push,
//     dequeue: backingArray.pop
//   }
// }
function Queue() {
  const backingArray = []

  return {
    enqueue: backingArray.push,
    dequeue: backingArray.shift
  }
}
// function Queue() {
//   const backingArray = []

//   return {
//     enqueue: backingArray.unshift,
//     dequeue: backingArray.shift
//   }
// }

const myQueue = Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)

const r1 = myQueue.dequeue() === 1
const r2 = myQueue.dequeue() === 2

// console.log(r1 && r2)

// ---------------------------------------------



// 8 
const input = [1,2,3,4,5]
const output = []


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function runOneAtATime(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      output.push(num)
      resolve()
    }, getRandomInt(10))
  })
}

// a. 
// async function processInput(input) {
//   input.forEach(async num => {
//     await runOneAtATime(num)
//   })
// }
// b. 
// async function processInput(input) {
//   const work = input.map( num => {
//     return runOneAtATime
//   })
//   return Promise.all(work)
// }
// c. 
// async function processInput(input) {
//   for await (let num of input) {
//     runOneAtATime(num)
//   }
// }
// d. ***
async function processInput(input) {
  for (const num of input) {
    await runOneAtATime(num)
  }
}

// UNCOMMENT TO RUN
// processInput(input).then(() => {
//   const result = input.join() === output.join()

//   console.log(`Result: ${result}`)
// })

// ----------------------------------------------------------------



// which is NOT a valid way to achieve inheritance?

// a. 
// using Object.prototype
const pet = {
  speak: function() { return 'silence' },
  walk: function() {return 'scurry' }
}
// const dog = {
//   speak: function() { return 'woof' }
// }
// dog.prototype = pet

// b. 
// using Object.create()
// const dog = Object.create(pet)
// dog.speak = function() { return 'woof' }

// c. 
// using function.call() in a constructor function
// function Pet () {
//   this.speak = function() { return 'silence' }
//   this.walk = function() { return 'scurry' }
// }
// function Dog() {
//   Pet.call(this)
//   this.speak = function() { return 'woof' }
// }
// const dog = new Dog();

// d. 
// using the extends keyword
// class Pet {
//   speak() { return 'silence' }
//   walk() { return 'scurry' }
// }
// class Dog extends Pet {
//   speak() { return 'woof' }
// }
// const dog = new Dog()

// -----------------------------------------------------------------

// Which of the following does NOT create a valid function?
// a. 
const double = function(x){return x*2};
// b.
const double2 = x => x*2;
// c. ***
// function double3 = () => return x*2; 
// d. 
function double4(x) {return x*2};

// -----------------------------------------------------------------


// which of the two options will successfully log the varieties in the Apple class?
class Apple {
  constructor() {
    this.type = 'apples'
    this.varieties = ['Granny Smith', 'Fuji', 'Pink Lady'];
  };
  logVarieties(callback) {
    // ** Option 1 **
    // this.varieties.forEach(el => console.log(`We have ${el} ${this.type}.`))
    // Option 2
    // this.varieties.forEach(function(el) {
    //   console.log(`We have ${el} ${this.type}.`)
    // });
  }
}

const apple = new Apple();
apple.logVarieties();