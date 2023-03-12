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














// What will the following JavaScript code output?
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { alert(i); }, 1000 + i);
// }

// What will the following JavaScript code output?
async function getData() {
  return await Promise.resolve('Hello!');
}

const data = getData();
console.log(data);

// How can Async Hooks be used to monitor the lifetime of asynchronous resources?
// By tracking every phase of each resource.
// By tracking the "before" and "after" phases of each resource.
// By tracking the "init" and "after" phases of each resource.

// What does the following code do?
// function myMod(array, s) {
//   var na = [];
//   for (var i = 0; i < array.length; i++) {
//     na.push(s + array[i]);
//   }
//   return na;
// }
// Modifies each element in an array by appending a suffix and returns the new array.
// Modifies each element in an array by adding the letter s and returns the new aray.
// Modifies each element in an array by prepending a prefix and returns the new array.

// What does the following SQL code do?
// SELECT name, MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM employees)

// What data structure is used to implement a MySQL indexes?












// SQL Challenge
// Your table: maintable_QP4AZ

// MySQL version: 8.0.23

// In this MySQL challenge, your query should return the vendor information along with the values from the table cb_vendorinformation. You should combine the values of the two tables based on the GroupID column. The final query should only print out the GroupID, CompanyName, and final count of all rows that are grouped into each company name under a column titled Count. The output table should be then sorted by the Count column and then sorted by GroupID so that a higher number appears first.

// Your output should look like the following table:
// GroupID |     CompanyName     | Count |
//      27 | Machinx             |     1 |
//      5  | WaterBus Enterprise |     2 |
//      40 | FireConsulting      |     5 |
// ---

/* write your SQL query below */

// SELECT * FROM maintable_QP4AZ










// Front-end Challenge
// We provided some simple React template code. Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered. This way the application can function as a simple phone book. When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:

// First name = Coder
// Last name = Byte
// Phone = 8885559999

function PhoneBookForm({ addEntryToPhoneBook }) {

  return (
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text' 
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone' 
        type='text'
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead> 
    </table>
  );
}

function Application(props) {
  return (
    <section>
      <PhoneBookForm />
      <InformationTable />
    </section>
  );
}

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Application />);











// Back-end Challenge
// In the JavaScript file, write a program to perform a GET request on the route https://coderbyte.com/api/challenges/json/age-counting which contains a data key and the value is a string which contains items in the format: key=STRING, age=INTEGER. Your goal is to count how many items exist that have an age equal to or greater than 50, and print this final value.

// Example Input
// {"data":"key=IAfpK, age=58, key=WNVdi, age=64, key=jp9zt, age=47"}

// Example Output
// 2
// Example Output with ChallengeToken
// 2:731tlmvh0fz
// Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

// Your ChallengeToken: zf0hvmlt137


// --- code here: ---
// const https = require('https');

// https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
//   let data = '';

//   // parse json data here...
  
//   console.log(resp);

// });