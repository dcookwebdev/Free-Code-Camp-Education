# Basic Javascript - Functions

## Basic JavaScript: Write Reusable JavaScript with Functions 2018-05-18

Here's an example of a function:

```js
function functionName() {
  console.log("Hello World");
}
```

You can call or invoke this function by using its name followed by parentheses, like this:

```js
functionName();
```

Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called.

Create a function called reusableFunction which prints "Hi World" to the dev console.
Call the function.

```js
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
```

## Basic JavaScript: Passing Values to Functions with Arguments 2018-05-18

Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. 
When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.
Here is a function with two parameters, param1 and param2:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```
Then we can call testFun:

`testFun("Hello", "World");`

We have passed two arguments, "Hello" and "World". Inside the function, param1 will equal "Hello" and param2 will equal "World". Note that you could call testFun again with different arguments and the parameters would take on the value of the new arguments.

Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.

```js
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(x, y) {
  console.log(x + y);
}

functionWithArgs(10,15);
```

This actually seems like a good place to check about default parameters. I doubt it's in basic javascript.

## Default Parameters (from MDN) 2018-05-18

[Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

Here's an example:

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5
```

Notes:
- a default parameter can be set. 
- a default parameter can be overridden if the argument is provided
- the order matters in provision

Question:
- can I call the function with arguments defined by name? ie. `multiply(b=1, 3)`
- Answer: Yes, it's possible. 

A few special notes:
- The default argument gets evaluated at call time, so unlike e.g. in Python, a new object is created each time the function is called.
- Parameters already encountered are available to later default parameters: `function thing(a, b = a + 1){}`
- better to use destructuring for defaults. I read about that before. 

#### There's more!
Read more here:

[http://2ality.com/2015/01/es6-destructuring.html](http://2ality.com/2015/01/es6-destructuring.html) This has a very detailed write up (down the page) about how to use destructuring to set default named parameters that are optional.

**Example:**
```js
function selectEntries({ start=0, end=-1, step=1 } = {}) {
    ···
};
```

[Another site](https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6/) with some explanation.


## Basic JavaScript: Global Scope and Functions 2018-05-19

`Scope` refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.

Using var, declare a global variable myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

```js
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
  
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

You should always declare your variables with var. >> **Better: use `let` and `const` as of ES6.**

[Extra reading](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75) about `let` vs. `const` vs. `var`:
>I favor `const` over `let` in ES6. In JavaScript, `const` means that the identifier can’t be reassigned. (Not to be confused with immutable values. Unlike true immutable datatypes such as those produced by Immutable.js and Mori, a `const` object can have properties mutated.)  

> If I don’t need to reassign, `const` is my default choice over `let` because I want the usage to be as clear as possible in the code.  

> I use `let` when I need to reassign a variable. Because I use one variable to represent one thing, the use case for `let` tends to be for loops or mathematical algorithms.

> I don’t use `var` in ES6. There is value in block scope for loops, but I can’t think of a situation where I’d prefer `var` over `let`.

> `const` is a signal that the identifier won’t be reassigned.

> `let`, is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.

> **`var` is now the weakest signal available when you define a variable in JavaScript.** The variable may or may not be reassigned, and the variable may or may not be used for an entire function, or just for the purpose of a block or loop.

Warning:
With `let` and `const` in ES6, it’s no longer safe to check for an identifier’s existence using `typeof`:

```js
function foo () {
  typeof bar;
  let bar = ‘baz’;
}
foo(); // ReferenceError: can't access lexical declaration
       // `bar' before initialization
```

*(My thought - I feel as though this doesn't matter - if you write good code that is clear, with identifier names in the beginning of blocks etc, it should be okay! It seems similar to Python - you can't reference before assignment. Doesn't seem like a bad thing to me.)*


## Basic JavaScript: Local Scope and Functions

Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.


```js
function myTest() {
var loc = "foo";
console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined

```

`loc` is not defined outside of the function.

Here is the solution:
```js
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "hello";
  
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
var myVar; // was console.log(myVar);

// Now remove the console log line to pass the test

```

## Basic JavaScript - Global vs. Local Scope in Functions

It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

```js
var someVar = "Hat";
function myFun() {
var someVar = "Head";
return someVar;
}
```

The function myFun will return "Head" because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with "sweater".

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();
```

## Basic JavaScript - Return a Value from a Function with Return

We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.

Example
```js
function plusThree(num) {
return num + 3;
}
var answer = plusThree(5); // 8
```
plusThree takes an argument for num and returns a value equal to num + 3.


Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. See the last line in the editor for an example of how you can test your timesFive function.

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(num) {
  return num * 5;
}

console.log(minusSeven(10));
console.log(timesFive(2));
```

## Basic JavaScript - Understanding Undefined Value returned from a Function

A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.

Example
```js
var sum = 0;
function addSum(num) {
sum = sum + num;
}
var returnedValue = addSum(3); // sum will be modified but returned value is undefined
```

`addSum` is a function without a return statement. The function will change the global sum variable but the returned value of the function is undefined

Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line
var returnedValue = addFive();
```


## Basic JavaScript - Assignment with a Returned Value

If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:

`ourSum = sum(5, 12);`

will call `sum` function, which returns a value of 17 and assigns it to `ourSum` variable.


Call the processArg function with an argument of 7 and assign its return value to the variable processed.

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
```

## Basic JavaScript - Stand in Line

In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

### My Solution:
[Link to file.](../../Scripts%20and%20Tests/003%20Stand%20In%20Line/script)

```js
function nextInLine(arr, item) {
  // Your code here
  if (arr.length > 0) {
    arr.push(item);
    return arr.shift(); 
  } else {
    return item;
  }
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
```

### My Unit Test:
Using Jasmine. [Here is the file.](../../Scripts%20and%20Tests/003%20Stand%20In%20Line/test)

```js
describe('nextInLine', () => {
  it('should return a number', () => {
    let result = nextInLine([], 5);
    expect(typeof result).toBe("number");
  });
  it('should return 1 when given ([], 1)', () => {
    expect(nextInLine([],1)).toBe(1);
  });
  it('should return 2 when given ([2], 1)', () => {
    expect(nextInLine([2], 1)).toBe(2);
  });
  it('should return 5 when given ([5,6,7,8,9], 1)', () => {
    expect(nextInLine([5,6,7,8,9], 1)).toBe(5);
  });
  it('should have 10 as the value for testArr[4] after given (testArr, 10)', () => {
    var testArr = [1,2,3,4,5];
    nextInLine(testArr, 10);
    expect(testArr[4]).toBe(10);
  });
});
```