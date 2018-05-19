# Basic Javascript - Functions

# Basic Javascript

## Basic JavaScript: Write Reusable JavaScript with Functions

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

## Basic JavaScript: Passing Values to Functions with Arguments

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

## Default Parameters (from MDN)

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