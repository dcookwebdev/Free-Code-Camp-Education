# 2018-05-16 Free Code Camp

## Declare String Variables

`var myName = "your name";`

## Escaping Literal Quotes in Strings

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

## Quoting Strings with Single Quotes

Good to use single quotes if there are many double quotes:

`'This string has "double quotes" in it. And "probably" lots of them.'`

## Escape Sequences in Strings

### Common escape sequences:

```
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
```

Note that the backslash itself must be escaped in order to display as a backslash.


## Concatenating Strings with Plus Operator

In JavaScript, when the + operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

`'My name is Alan,' + ' I concatenate.'`

Note
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

## Concatenating Strings with the Plus Equals Operator

```js
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```

## Constructing Strings with Variables

```js
var myName = "Dan";
var myStr = "My name is " + myName + " and I am swell!";
```

## Appending Variables to Strings

Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

```js
var someAdjective = "awesome";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

## Find the Length of a String

`"Alan Peter".length; // 10`

```js
var lastNameLength = 0;
var lastName = "Lovelace";.
lastNameLength = lastName.length;
```

## Basic JavaScript: Use Bracket Notation to Find the First Character in a String

```js
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```

## Basic JavaScript: Understand String Immutability

In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code:

```js
var myStr = "Bob";
myStr[0] = "J";
```

cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. 


## Basic JavaScript: Use Bracket Notation to Find the Nth Character in a String

Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

```js
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];
```

## Basic JavaScript: Use Bracket Notation to Find the Last Character in a String

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

```js

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length-1];

```

## Basic JavaScript: Use Bracket Notation to Find the Nth-to-Last Character in a String

```js
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```


## Basic JavaScript: Word Blanks (exercise)

Objective: make a function operate like the game Mad Libs. 

### My code answer:

```js
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " because he loves chinese food.";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
```

### Accompanying Unit Test:
I was able to utilize a few javascript features to minimize this code:
- Arrays
- The spread operator
- Regular Expressions for matching


```js
describe('Mad Lib Game', () => {
    it('should return a string', () => {
        let a = wordBlanks("", "", "", "");
        expect(typeof a).toBe("string");
    });

    it('should contain all of the passed in words separated by non-word characters', () => {
        let words = ["dog", "big", "ran", "quickly"];
        let result = wordBlanks(...words);
        expect(result).toMatch(new RegExp(`( ${words.join(" | ")} )`));
    });

    it('should contain all of the passed in words separated by non-word characters', () => {
        let words = ["cat", "little", "hit", "slowly"];
        let result = wordBlanks(...words);
        expect(result).toMatch(new RegExp(`( ${words.join(" | ")} )`));
    });
});


```

