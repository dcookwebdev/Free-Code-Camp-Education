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

## Side Study: Type Coercion in Javascript (2018-05-23)

Reading this article: [https://dorey.github.io/JavaScript-Equality-Table/](https://dorey.github.io/JavaScript-Equality-Table/)

### A table of coercions
[This site](https://dorey.github.io/JavaScript-Equality-Table/) has a table of coercions. At the bottom of the site it says:

> Moral of the story: Always use 3 equals (===) unless you have a good reason to use 2 (==).

It seems the main reason is that you may not understand how a type is being coerced and you may have a bug that is hard to identify. But I see `==` being used everywhere and taught everywhere.

### Points from the article
- Type coercion can be explicit and implicit.
- One operator that does not trigger implicit type coercion is ===, which is called the strict equality operator. 
- The loose equality operator == on the other hand does both comparison and type coercion if needed.
- **Implicit type coercion is a double edge sword: it’s a great source of frustration and defects, but also a useful mechanism that allows us to write less code without losing the readability.**

### Three types of conversion
There are only three types of conversion in JavaScript:
- to string
- to boolean
- to number


#### String Conversion:
```js
String(123) // explicit
123 + ''    // implicit
```

#### Boolean Conversion:
```js
Boolean(2)          // explicit
if (2) { ... }      // implicit due to logical context
!!2                 // implicit due to logical operator
2 || 'hello'        // implicit due to logical operator
```

Remember this list of falsy things:
```js
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
```

Any value that is not in the list is converted to true, including object, function, Array, Date, user-defined type, and so on. Symbols are truthy values. Empty object and arrays are truthy values as well:

```js
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
!!Symbol()              // true
Boolean(function() {})  // true
```

#### Number Conversion: 
Use the Number() function for explicit conversion.

Implicit conversion is tricky, because it’s triggered in more cases:
- comparison operators (>, <, <=,>=)
- bitwise operators ( | & ^ ~)
- arithmetic operators (- + * / % ). Note, that binary+ does not trigger numeric conversion, when any operand is a string.
- unary + operator
- loose equality operator == (incl. !=).  *Note that == does not trigger numeric conversion when both operands are strings.)*

```js
Number('123')   // explicit
+'123'          // implicit
123 != '456'    // implicit
4 > '5'         // implicit
5/null          // implicit
true | 0        // implicit
```

Here is how primitive values are converted to numbers:
```js
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
```

The article continues with more about objects etc.

I think the main thing I learned here is that type coercion can be useful but has to be used carefully to avoid issues.

More examples:

```js
true + false             // 1
12 / "6"                 // 2
"number" + 15 + 3        // 'number153'
15 + 3 + "number"        // '18number'
[1] > null               // true
"foo" + + "bar"          // 'fooNaN'
'true' == true           // false
false == 'false'         // false
null == ''               // false
!!"false" == !!"true"    // true
['x'] == 'x'             // true 
[] + null + 1            // 'null1'
[1,2,3] == [1,2,3]       // false
{}+[]+{}+[1]             // '0[object Object]1'
!+[]+[]+![]              // 'truefalse'
new Date(0) - 0          // 0
new Date(0) + 0          // 'Thu Jan 01 1970 02:00:00(EET)0'
```


## Basic JavaScript: Comparison with the Strict Equality Operator

Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

Examples

```
3 === 3 // true
3 === '3' // false
```
In the second example, 3 is a Number type and '3' is a String type.

Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7

```js
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
 
// Change this value to test
testStrict(10);
 
/**
* Your test output will go here.
*/
 
```

## Basic JavaScript: Practice comparing different values

In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.

If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equalty operator will compare both the data type and value as-is, without converting one type to the other.

Examples

```
3 == '3' // returns true because JavaScript performs type converstion from string to number
3 === '3' // returns false because the types are different and type conversion is not performed
```
Note
In JavaScript, you can determine the type of a variable or a value with the typeof operator, as follows:

```
typeof 3 // returns 'number'
typeof '3' // returns 'string'
```


The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns "Equal" only when the values are strictly equal.



```js
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
 
// Change this value to test
compareEquality(10, "10");
 
/**
* Your test output will go here.
*/
 
```


## Basic JavaScript: Comparison with the Inequality Operator

The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

Examples

```
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false
```


Add the inequality operator != in the if statement so that the function will return "Not Equal" when val is not equivalent to 99



```js
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
 
// Change this value to test
testNotEqual(10);
 
/**
* Your test output will go here.
*/
 
```


## Basic JavaScript: Comparison with the Strict Inequality Operator

The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.

Examples

```
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true
```


Add the strict inequality operator to the if statement so the function will return "Not Equal" when val is not strictly equal to 17



```js
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {
 
  // Only Change Code Above this Line
 
    return "Not Equal";
  }
  return "Equal";
}
 
// Change this value to test
testStrictNotEqual(10);
 
/**
* Your test output will go here.
*/
 
```


## Basic JavaScript: Comparison with the Greater Than Operator

The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than operator will convert data types of values while comparing.

Examples

```
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false
```


Add the greater than operator to the indicated lines so that the return statements make sense.



```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10) {  // Change this line
    return "Over 10";
  }
 
  return "10 or Under";
}
 
// Change this value to test
testGreaterThan(10);
 
/**
* Your test output will go here.
*/
 
```

## Basic JavaScript: Comparison with the Greater Than Or Equal To Operator

The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

Like the equality operator, greater than or equal to operator will convert data types while comparing.

Examples

```
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false
```


Add the greater than or equal to operator to the indicated lines so that the return statements make sense.



```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
 
  return "Less than 10";
}
 
// Change this value to test
testGreaterOrEqual(10);
 
/**
* Your test output will go here.
*/
 
```


## Basic JavaScript: Comparison with the Less Than Operator

The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

Examples

```
2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false
```


Add the less than operator to the indicated lines so that the return statements make sense.



```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  
  if (val < 55) {  // Change this line
    return "Under 55";
  }
 
  return "55 or Over";
}
 
// Change this value to test
testLessThan(10);
 
/**
* Your test output will go here.
*/
 
```

## Basic JavaScript: Comparison with the Less Than Or Equal To Operator

The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

Examples

```
4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false
```


Add the less than or equal to operator to the indicated lines so that the return statements make sense.



```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
 
  return "More Than 24";
}
 
// Change this value to test
testLessOrEqual(10);
 
 
/**
* Your test output will go here.
*/
 
```


## Basic JavaScript: Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

```
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
```
will only return "Yes" if num is greater than 5 and less than 10. The same logic can be written as:

```
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```


Combine the two if statements into one statement which will return "Yes" if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return "No".



```js
function testLogicalAnd(val) {
  // Only change code below this line
 
  if (val <= 50 && val >= 25) {
      return "Yes";
  }
 
  // Only change code above this line
  return "No";
}
 
// Change this value to test
testLogicalAnd(10);
 
/**
* Your test output will go here.
*/
 
```