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