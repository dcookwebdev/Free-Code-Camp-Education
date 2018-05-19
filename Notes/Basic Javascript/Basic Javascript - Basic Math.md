# Basic Javascript - Basic Math

## Add Two Numbers with JavaScript

`myVar = 5 + 10; // assigned 15`

## Subtract One Number from Another with JavaScript

`myVar = 12 - 6; // assigned 6`

## Multiply Two Numbers with JavaScript

`myVar = 13 * 13; // assigned 169`

## Divide One Number by Another with JavaScript

`myVar = 16 / 2; // assigned 8`

## Increment a Number with JavaScript

`i++;`

is the equivalent of

`i = i + 1;`

Remember this from [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators):
```js
// Postfix 
var x = 3;
y = x++; // y = 3, x = 4

// Prefix
var a = 2;
b = ++a; // a = 3, b = 3
```

## Decrement a Number with JavaScript

`i--;`

is the equivalent of

`i = i - 1;`

Also from [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators);
```js
// Postfix 
var x = 3;
y = x--; // y = 3, x = 2

// Prefix
var a = 2;
b = --a; // a = 1, b = 1
```

## Create Decimal Numbers with JavaScript

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.

FCC links to [this article](https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems) to explain issues related to computers dealing with floats.

## Multiply Two Decimals with JavaScript

`var product = 2.0 * 2.5; // 5`

## Divide one Decimal by Another with JavaScript

`var quotient = 4.4 / 2.0; // 2.2`

## Finding a Remainder in JavaScript

The remainder operator % gives the remainder of the division of two numbers.

### Example
```
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

### Usage
In mathematics, a number can be checked even or odd by checking the remainder of the division of the number by 2.

```
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
```

### Note
!! The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

## Compound Assignment With Augmented Addition

`myVar = myVar + 5;` or `myVar += 5;`

## Compound Assignment With Augmented Subtraction

`myVar = myVar - 5;` or `myVar -= 5;`

## Compound Assignment With Augmented Multiplication

`myVar = myVar * 5;` = `myVar *= 5;`

## Compound Assignment With Augmented Division

`myVar = myVar / 5;` = `myVar /= 5;`

## Convert Celsius to Fahrenheit

### Code for the exercise
Had to add some simple math.

```js
function convertToF(celsius) {
    var fahrenheit;
    // Only change code below this line
    fahrenheit = celsius * 1.8 + 32
    
    // Only change code above this line
    return fahrenheit;
  }
  
  // Change the inputs below to test your code
  convertToF(30);
```

### Unit Test
*using Jasmine*

```js
describe("Convert Celcius to Farheinheit", () => {
    it("should return a number", () => {
        let n = convertToF(0);
        expect(typeof n).toBe("number");
    }),
    it("should return -22 when given -30", () => {
        expect(convertToF(-30)).toEqual(-22);
    }),
    it("should return 14 when given -10", () => {
        expect(convertToF(-10)).toEqual(14);
    }),
    it("should return 32 when given 0", () => {
        expect(convertToF(0)).toEqual(32);
    }),
    it("should return 68 when given 20", () => {
        expect(convertToF(20)).toEqual(68);
    }),
    it("should return 86 when given 30", () => {
        expect(convertToF(30)).toEqual(86);
    })
})
```