# Basic Javascript - Variables

## Declare JavaScript Variables

> JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.

- Any of the seven data types may be stored in a variable.
- Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

For now I know about ES6 `let` and `const` and more information about scope. Probably it will come later.

### Instructions
```js
// Example
var ourName;

// Define myName below this line
var myName;
```

## Storing Values with the Assignment Operator

`myVariable = 5;` Assigns the Number value 5 to myVariable.

### Instructions
- Assign the value `7` to variable `a`.
- Assign the contents of `a` to variable `b`.

```js
// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;
```

## Initializing Variables with the Assignment Operator

It is common to initialize a variable to an initial value in the same line as it is declared.

`var myVar = 0;` Creates a new variable called myVar and assigns it an initial value of 0.

### Instructions
Define a variable a with var and initialize it to a value of 9.

```js
// Example
var ourVar = 19;

// Only change code below this line
var a = 9;
```

## Understanding Uninitialized Variables

Points:

- When JavaScript variables are declared, they have an initial value of undefined. 
- If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". 
- If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

Question: is it good practice to declare a variable and leave it uninitialized?  
According to [this](https://www.w3schools.com/js/js_best_practices.asp) it is good practice to initialize variables for the following reasons:

- Give cleaner code
- Provide a single place to initialize variables
- Avoid undefined values
- **Initializing variables provides an idea of the intended use (and intended data type).**

Here's an example:

```js
// Declare and initiate at the beginning
var firstName = "",
    lastName = "",
    price = 0,
    discount = 0,
    fullPrice = 0,
    myArray = [],
    myObject = {};
```

### Instructions
Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

Answer:
```js
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";
```


## Understanding Case Sensitivity in Variables

`MYVAR` is not the same as `MyVar` nor `myvar`. 

Javascript variables use camelcase.

### Instructions
Modify the existing declarations and assignments so their names use camelCase.
Do not create any new variables.

```js
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```



