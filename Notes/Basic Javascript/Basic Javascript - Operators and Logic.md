# Basic Javascript - Operators and Logic

## Basic JavaScript - Understanding Boolean Values (2018-05-23)

- Booleans may only be one of two values: true or false. 

**Note:**  
Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

```js
function welcomeToBooleans() {
 
// Only change code below this line.
 
return true; // Change this line
 
// Only change code above this line.
}

```

## Basic JavaScript - Use Conditional Logic with If Statements (2018-05-23)

- conditions of `if` statements are known as Boolean conditions and they may only be true or false.
- conditions are true? evaluate what is inside the curly brackets
- conditions are false? don't evaluate


Example

```
function test (myCondition) {
if (myCondition) {
    return "It was true";
}
    return "It was false";
}
test(true); // returns "It was true"
test(false); // returns "It was false"
```

Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.

```js
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}
 
// Setup
function trueOrFalse(wasThatTrue) {
 
  // Only change code below this line.
  if (wasThatTrue) {
    return "Yes, that was true";
} 
return "No, that was false";

  // Only change code above this line.
 
}
 
// Change this value to test
trueOrFalse(true);
```

## Basic JavaScript - Comparison with the Equality Operator (2018-05-23)


There are many Comparison Operators in JavaScript. All of these operators return a boolean true or false value.

- the equality operator is == 
- compares two values and returns true if they're equivalent or false if they are not. 
- equality is different from assignment (=)

```
function equalityTest(myVal) {
    if (myVal == 10) {
    return "Equal";
}
    return "Not Equal";
}
```

In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

```
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true
```

TODO: read more about "Type Coercion in Javascript. Main question: how should I use this? Should I avoid this or be mindful of it?

Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12



```js
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
 
// Change this value to test
testEqual(10);
```
