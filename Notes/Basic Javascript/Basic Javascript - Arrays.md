# Basic Javascript - Arrays


## Basic JavaScript: Store Multiple Values in one Variable using JavaScript Arrays

`var sandwich = ["peanut butter", "jelly", "bread"];`

Modify the new array myArray so that it contains both a string and a number (in that order).

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Dan", 32];
```

## Basic JavaScript: Nest one Array within Another Array

`[["Bulls", 23], ["White Sox", 45]]`

This is also called a `Multi-dimensional Array`.

```js

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["this thing", 42],["that thing", 54]];
```


## Basic JavaScript: Access Array Data with Indexes

We can access the data inside arrays using indexes.

**Example:**
```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1];  // equals 60
```
**Note:**  
There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Create a variable called myData and set it to equal the first value of myArray using bracket notation.

```js

// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];
```


## Basic JavaScript: Modify Array Data With Indexes

Unlike strings, the entries of arrays are mutable and can be changed freely.

**Example**  
```js
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
```

**My Question:**  
Are strings that are within an array mutable? Answer: No!! See below.

```js
let a = ["this", 34, 23];
a[0][0] = "i";
console.log(a); //​​​​​[ 'this', 34, 23 ]​​​​​
```

Modify the data stored at index 0 of myArray to a value of 45.

```js
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.
myArray[0] = 45;
```

## Basic JavaScript: Access Multi-Dimensional Arrays With Indexes

**Example**  
```js
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```

Using bracket notation select an element from myArray such that myData is equal to 8.

```js
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];
```


## Basic JavaScript: Manipulate Arrays With push()

`.push()` takes one or more parameters and "pushes" them onto the end of the array.

```js
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
```

Push `["dog", 3]` onto the end of the myArray variable:
```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);
```

## Basic JavaScript: Manipulate Arrays With pop()

.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

```js
var threeArr = [1, 4, 6];
 var oneDown = threeArr.pop();
 console.log(oneDown); // Returns 6
 console.log(threeArr); // Returns [1, 4]
```

Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.

```js

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code be ow this line.
var removedFromMyArray = myArray.pop();
```

## Basic JavaScript: Manipulate Arrays With shift()

It works just like `.pop()`, except it removes the first element instead of the last.

Use the `.shift()` function to remove the first item from myArray, assigning the "shifted off" value to removedFromMyArray.

```js
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
```

## Basic JavaScript: Manipulate Arrays With unshift()

Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

Add ["Paul",35] to the beginning of the myArray variable using unshift().

```js
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35]);
```

## Basic JavaScript: Shopping List

Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e. `["Chocolate Bar", 15]`

There should be at least 5 sub-arrays in the list.

```js
var myList = [["cheese", 5],["beans", 15],["corn", 3],["beef", 8],["yogurt", 2]];
```