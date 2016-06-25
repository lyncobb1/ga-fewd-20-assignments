![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 6
## Intro To JavaScript
### Brendon Crawford

---

## Objectives

* Understanding the purpose and significance of JavaScript
* Understand and demonstrate basic JavaScript syntax.
* Understanding and demonstrate ability to use Chrome Dev Tools
  for testing JavaScript.
* Understand and demonstrate how to declare and assign variables.
* Understand basic usage of JavaScript functions.
* Understand scoping in JavaScript.
* Know the basic JavaScript data types.
* Know how to include JavaScript files in HTML documents.
* Know how to reference HTML elements in JavaScript
* Know how to dynamically modify style properties from within
  JavaScript.

---

## What is JavaScript

> JavaScript is a cross-platform object-oriented scripting language.
> It makes up one of the three primary languages which are used for
> building modern web pages to be viewed in web browsers.
> Initially, JavaScript was designed only to run within the web browser,
> but now, it is also used across a wide spectrum of devices and platforms
> including mobile apps, and server-side/backend software applications.

---

## Why is JavaScript Important?

---

## Why is JavaScript Important?

* Provides visual interactivity to otherwise static webpages
* Allows for faster loading and validation of data

---

## Fun Facts About JavaScript

* JavaScript was invented in 1995 by Brendan Eich. [1]
* JavaScript is the most popular language on GitHub, with 323,38 active respositories
  accounting for 15% of the total active repositories as of June 22, 2016. [2]
* It is the 7th most popular programming languages in the world, according to
  the TIOBE index, which is primarily measured by search engine rankings. [3]
* JavaScript is the most popular language on StackOverflow,
  being used by 54.4% of users. [4]

<div class="citations">
  <p>Source</p>
  <ol>
    <li>
      <a href="https://en.wikipedia.org/wiki/JavaScript#History">
        https://en.wikipedia.org/wiki/JavaScript#History
      </a>
    </li>
    <li>
      <a href="http://githut.info/">
        http://githut.info/
      </a>
    </li>
    <li>
      <a href="http://www.tiobe.com/tiobe_index">
        http://www.tiobe.com/tiobe_index
      </a>
    </li>
    <li>
      <a href="https://stackoverflow.com/research/developer-survey-2015#tech-lang">
        https://stackoverflow.com/research/developer-survey-2015#tech-lang
      </a>
    </li>
  </ol>
</div>

---

## Naming Confusions

* JavaScript is many times called "JS".
* JavaScript is an implementation of a standard specification called
  "ECMAScript".
* The current version of JavaScript is usually referred to as "ES5".
  This version dates back to 2009, and is currently the most popular version
  in browsers.  It is the version we will be using in this class.
* The new upcoming version of JavaScript is officially called "ES2015", but is
  commonly referred to as "ES6".  We will not be covering that version
  in this class.

---

## Different JS Implementations

* JavaScript can run in the web browser, but it can also run on a server
  for building server-side (backend) applications.
* The most common implementation for running JS in server-side applications
  is called "NodeJS".  NodeJS does not run in the web browser, and we will
  not be using it in this class.
* In this class we will only be using JS in the web browser.

---

## Pseudo-Code and Javascript

Pseudo-Code

```python
function add (a, b):
  return (a + b)

x = add(10, 6)
```

JavaScript

```javascript
function add (a, b) {
  return (a + b);
}

var x = add(10, 6);
```

---

## Hello World

Let's do a simple example:

1. Open Chrome
2. In the URL bar, type "about:blank", then hit enter.
3. Right click, and select "Inspect". You are now in Chrome Dev Tools
4. Click the "Console" tab in Dev Tools.
5. Type the following code into the console, and hit Enter:

```javascript
console.log("Hello World!");
```

---

## Chrome Dev Tools JS Console

* The Chrome Dev Tools JS Console is a good place to easily practice JavaScript.
* If you are just practicing, and not working on a particular webpage, it is best to
  use the "about:blank" url.
* The JS console will not allow you type multi-line JS code unless you hit SHIFT+Enter,
  so, it is sometimes preferrable to type your JS in a text editor, such as Sublime,
  then copy/paste the text into the JS console.

---

## Another Basic Example

Try this in the Dev Tools console:

```javascript
function add (a, b) {
  return (a + b);
}

var x = add(10, 6);
console.log(x);
```

---

## Logs And Alerts

This will display the given value in the console:

```javascript
console.log(12345);
```

This will pop up an alert box.  This should only be used for your own practice
and debugging.  Users find alerts to be very annoying.

```javascript
window.alert(12345);
```

---

## Enable Strict Mode

This should be at the top of all your JS files.  Strict Mode will help
prevent certain bugs and will allow the browser to notify you when you have
done something non-preferrable in your code.


```javascript
"use strict";
```

---

## Semicolons

* Most statements should end with a semicolon
* Some exceptions include:
    * `if` statements
    * `while` statements
    * `for` statements
    * `function myFunc () { ... }` style declarations
* See: [https://www.codecademy.com/blog/78](https://www.codecademy.com/blog/78)

---

## Comments

There are two types of comments in JS.  Comments are skipped,
and are not evaluated as code.

```javascript
// A single-line comment begins with two foward-slashes.
```

```javascript
/*
  A multi-line comment begins with a forward-slash
  followed by asterisk, and ends with an asterisk
  followed by a forward-slash.
*/
```

---

## Curly Braces

In JS, curly braces are used to enclose various statements within a block

```javascript
if (x < 10) {
  // Use curly braces in "if" statements
}
```

```javascript
function x () {
  // Use curly braces in functions
}
```

```javascript
while (x < 10) {
  // Use curly braces in "while" statements
}
```

```javascript
for (var x = 0; x < 10; x++) {
  // Use curly braces in "for" statements
}
```

---

## Variable Basics

When a variable is defined, it must have a `var` before the variable name.
Both of these are acceptable:

```javascript
var x = 2 + 3;
```

```javascript
var x;
x = 2 + 3;
```

---

## Variable Basics

Variables can also be defined in functions, just like they can be defined
outside of functions:

```javascript
function add (a, b) {
  var x = a + b;
  return x;
}

var z = add(10, 6);
```

---

## Variable Declarations

This is the method that I recommend, when using variables inside of functions.
In this situation, the variable `x` is being _declared_ on line 3,
but is not _assigned_ until line 5.

```javascript
01 function add (a, b) {
02   // This is the variable declaration
03   var x;
04   // This is the variable assignment
05   x = a + b;
06   return x;
07 }
```

---

## Variable Declarations

But, this method is also perfectly valid, and some people like this better.
In this example, the variable `x` is being both _declared_ and _assigned_
on line 4.

```javascript
01 function add (a, b) {
02   // Here, the variable is being both
03   // declared and assigned at the same time.
04   var x = a + b;
05   return x;
06 }
```

---

## Multiple Variable Declarations

Here is my recommended way of declaring multiple variables:

```javascript
function dostuff () {
  var x, y, z;
  x = 1;
  y = 2;
  z = x + y;

  return z;
}
```

---

## Multiple Variable Declarations

Here is another way of using multiple variables that allows you to
both declare and assign variables at the same time.  This is not my preferred
method, but some people do prefer it:

```javascript
function dostuff () {
  var x = 1;
  var y = 2;
  var z = x + z;

  return z;
}
```

---

## Multiple Variable Declarations

Here is another method for declaring and assigning variables
at the same time.  I do not recommend ever using this method,
as it can lead to confusion:

```javascript
function dostuff () {
  var x = 1, y = 2;

  return (x + y);
}
```

---

## Defining Functions

There are different ways of defining functions.

Function Declaration

```javascript
function add (a, b) {
  return (a + b);
}
```

Anonymous Function Expression

```javascript
var add = function (a, b) {
  return (a + b);
}
```

Named Function Expression

```javascript
var add = function add (a, b) {
  return (a + b);
}
```

---

## Function Return Statements

* It is not mandatory, but it is recommended that you always try
  to include one or more `return` statements in your function.
* If your function does not need to return anything, one common
  technique is to use `return true`.
* If a function does not contain a `return` statement, by default
  it will return a value of `undefined`

---

## Nested Functions

Functions can contain other functions

```javascript
function a () {

  function b () {

    function c () {
      return 10;
    }

    return 20;
  }

  return 30;
}
```

---

## Scope

* Scope is an important concept which determines where variables and
  functions can be accessed.
* There are two types of scope:
    * Global Scope
    * Local Scope

---

## Scope

![Scope](classes/Week_06-Intro_To_Javascript/lessons/01-intro_to_javascript/images/scope.png)

---

## Global Scope

* _Global Scope_ refers to the entire application.  Any function or
  variable which exists in the _Global Scope_ is accessible from
  anywhere in the JS application.
* It refers to all variables and functions that exist in the root
  of your JS.  This means that they are not contained within
  other nested functions.

---

## Global Scope

```javascript
"use strict";

// This variable is in global scope. It is accessible from
// anywhere in the JS.
var x = 1;

// This function `y` is in global scope.
// It is accessible from anywhere in the JS.
function y () {
  // This variable `g` is not in the global scope.
  // It is only accessible from from within the `y` function.
  var g = 3;
  // This function `z` is NOT in the global scope.
  // It is only accessible from within the `y` function.
  function z () {
    // This variable `r` is NOT in the global scope.
    // It is only accessible from within the `z` function.
    var r = 10;
    return r;
  }
}

```

---

## Local Scope

* _Local Scope_ is also referred to as _Function Scope_.
* _Local Scope_ refers to anything within a certain function,
  including any nested functions.

---

## Local Scope Examples

```javascript
function a () {

  function b () {
    // From here we can call functions `a`, `b`, and `c`.
  }

  // From here we can call functions `a`, `b`, and `c`.
}

function c () {

  function d () {
    // From here we can call functions `a`, `c`, and `d`
  }

}
```

---

## Local Scope

```javascript
// Here we would say that the current scope of `mystuff` is the
// "global scope".
function mystuff () {
  // Here we would say that the current scope of the variable
  // `x` is the "mystuff scope".
  var x = 1;
}
```

---

## Parent Scope

The term _Parent Scope_ refers to the parent scope that a scope is contained
within.  The _Global Scope_ has no parent scope:

```javascript
// This is the global scope.
// This is the parent scope of function `a`.

function a () {
  // This is the local scope for function `a`.
  // This is the parent scope of function `b`.

  function b () {
    // This is the local scope for function `b`.
    // This is also the local scope for variable `x`.
    var x = 2;
  }
}
```

---

## Scoping Rules

* A variable or function can access any other variable or function
  in it's own local scope.
* A variable of function can access any other variable or function
  which is a direct child of any ancestor scope.

---

## Variable Scope Within Functions

The `a` and `b` values within the `x` and `y` functions are only contained within
their functions.  These values are unable to affect or be aware of each other:

```javascript
function x () {
  // These "a" and "b" values are isolated only to this function
  var a, b;
  a = 1;
  b = 2;
  return (a + b);
}

function y () {
  // These "a" and "b" values are isolated only to this function
  var a, b;
  a = 3;
  b = 4;
  return (a + b);
}

```

---

## Variable Scoping

```javascript
function box1 () {
  var a = 1;

  function box2 () {
    var b = 2;

    function box3 () {
      var c = 1;
      // The variables `a`, `b`, and `c` are all accessible here.
    }

    // The variables `a` and `b` are accessible here.
    // The variable `c` is NOT accessible here.
  }

  // The variable `a` is accessible here.
  // The variables `b` and `c` are NOT accessible here.
}
```

---

## JavaScript Data Types

<p style="font-size: 1.4rem;">
  A _data type_ is a category of a certain type of value.  Some various data types include:
</p>

<table class="les-table">
  <thead>
    <tr>
      <td>Data Type</td>
      <td>Examples</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`number`</td>
      <td>`0`, `1`, `2`, `2.5`, `3.0`</td>
    </tr>
    <tr>
      <td>`string`</td>
      <td>`"hello world"`</td>
    </tr>
    <tr>
      <td>`boolean`</td>
      <td>`true`, `false`</td>
    </tr>
    <tr>
      <td>`undefined`</td>
      <td>`undefined`</td>
    </tr>
    <tr>
      <td>`null`</td>
      <td>`null`</td>
    </tr>
  </tbody>
</table>

---

## Data Types

Remember, that the following values are not the same thing,
although they seem similar:

* `false`
* `0`
* `"0"`
* `undefined`
* `null`

---

## Strings

A string is a type of value that holds text.

```javascript
var x = "Hello World";

console.log(x);
```

---

## Strings Concatenation

Strings can be combined:

Example 1

```javascript
var x = "Hello";
var y = "World";
var z = x + y;
console.log(z);
```

Example 2

```javascript
var x = "Hello" + "World";
console.log(x);
```

Example 3

```javascript
console.log("Hello" + "World");
```

---

## Strings in Functions

```javascript
function mystuff () {
  var x;
  x = "Hello World";
  return x;
}

console.log(mystuff());
```

---

## Getting Portions of String

```javascript
var x = "Hello World";
var y = x.substring(0, 5);
console.log(y);
```

---

## Getting the type of a string value

```javascript
var x = "Hello World";
var t = typeof x;
console.log(t);
```

---

## Numbers

```javascript
var x = 15;
console.log(15);
```

```javascript
var x = 20;
var y = x * 2;
console.log(y);
```

```javascript
function add (a, b) {
   var x;
   x = a + b;
   return x;
}

console.log(add(20, 50));
```

---

## Numbers

You can also use floating point numbers

```javascript
var r = 2.50;
var s = 3.75;
var t = r + s;
console.log(t);
```

You can solve PI!

```javascript
console.log(22.0 / 7.0);
```

---

## Numbers vs String

Remember that a numeric string is not the same as a number.

```javascript
// number
console.log(typeof 5);
// string
console.log(typeof "5");
```

---

## Numbers vs String

```javascript
// Adding a number and a number does addition
console.log(5 + 5);

// Adding a numeric string and a numeric string does concatenation
console.log("5" + "5");

// Adding a number and numeric string does concatenates
console.log(5 + "5");
```

---

## Boolean Values

```javascript
var f = 5 < 6;
console.log(f);
console.log(typeof f);
```

```javascript
var f = 5 > 6;
console.log(f);
console.log(typeof f);
```

---

## Boolean Values

You may have learned to use `a == b` for doing equality comparisons.
You should actually instead use `a === b`.  The reasons for this are somewhat
complicated, but just know that in JavaScript, you should use triple equal
signs for comparisons.

```javascript
var x = 5;
if (x === 5) {
   console.log("YES!");
}
else {
   console.log("NO!");
}
```

---

## Boolean Operators: Or

The pseudo-code `or` becomes `||` in JS

```javascript
// This is an "or" statement
var x = 5;
var y = 7;
if (x < 2 || y > 4) {
  console.log("YES");
}
```

---

## Boolean Operators: And

The pseudo-code `and` becomes `&&` in JS

```javascript
// This is an "and" statement
var x = 5;
var y = 7;
if (x < 2 && y > 4) {
  console.log("YES");
}
```

---

## Conditionals

```javascript
function test (a) {
  if (a === 1) {
    return "a is 1";
  }
  else if (a === 2) {
    return "a is 2";
  }
  else if (a === 3) {
    return "a is 3";
  }
  else {
    return "a is something else!";
  }
}

var x = 2;
console.log(test(x));
```

---

## Fun With Functions

Functions can usually be treated like variables:

```javascript
function add (a, b) {
  return (a + b);
}

var x = add;
var z = x(10, 6);

console.log(z);
```

---

## Fun With Functions

If functions can be treated like variables, then you can pass them
in as arguments into other functions:

```javascript
function test2 (a, b) {
  return (a * b);
}

function test1 (x, a, b) {
  return x(a, b);
}

var z = test1(test2, 10, 6);
console.log(z);
```

---

## Including JS Files

This is the way I recommend including your JavaScript code.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
    <link rel="stylesheet" href="./css/styles.css" />
    <script type="text/javascript" src="./js/application.js"></script>
  </head>
  <body>
    Hello World
  </body>
</html>
```

---

## Including JS Files

<ul style="font-size: 1.5rem;">
  <li>
    In most situations, you should put the `<script>` tags in `<head>`.
  </li>
  <li>
    The `<script>` tags should usually go after the `<link>` stylesheets files.
  </li>
  <li>
    JavaScript filenames should usually end in `.js`.
  </li>
  <li>
    The `<script>` tag will always have a closing `</script>` tag, unlike the `<link>` tag,
    which does not have a closing tag.
  </li>
</ul>

```html
<head>
  <meta charset="utf-8" />
  <title>Hello World</title>
  <link rel="stylesheet" href="./css/styles.css" />
  <script type="text/javascript" src="./js/application.js"></script>
</head>
```

---

## Embedded JS

Instead of including external JS files, you can also embed the JS
directly into your HTML.  Although, sometimes you will have no choice but
to do this, I recommend avoiding this technique when possible.

```html
<head>
  <meta charset="utf-8" />
  <title>Hello World</title>
  <link rel="stylesheet" href="./css/styles.css" />
  <script type="text/javascript">
    "use strict";

    function add (x, y) {
      return (x + y);
    }
  </script>
</head>
```

---

## Lab

* `labs/basic/index.html`
* `labs/userinput/index.html`

---

## Getting HTML Elements In JS

We need a way to reference an HTML element from JS.
This is why we use the `document.getElementById()` function.

```javascript
// The function `document.getElementById` will allow a javascript
// variable to contain a reference to an HTML element
var planetThing = document.getElementById("planet");
console.log(planetThing);
```

Why didn't this work?

---

## Window Load

<p style="font-size: 1.4rem;">
  In the previous example, you might see that the `planetThing`
  did not reference anything, because the HTML was not yet available.
  Usually, your JS will be loaded before the HTMl is loaded.
  So, you need to use a method to make sure that your JS
  does not execute until the HTMl has all been loaded:
</p>

```javascript
"use strict";

function main() {
  var planetThing = document.getElementById("planet");
  console.log(planetThing);
}

// This tells the browser to execute the `main`
// function, after all the HTML has finished loading.
window.addEventListener("load", main);
```

---

## Setting Styles on HTML Elements

```javascript
"use strict";

function main() {
  // Get a reference to the element
  var planetThing = document.getElementById("planet");
  // Once you have the reference to the element, you can access
  // all the style properties of that element.
  planetThing.style.backgroundColor = "#FF0000";
  planetThing.style.border = "5px solid #00FF00";
}

// This tells the browser to execute the `main`
// function, after all the HTML has finished loading.
window.addEventListener("load", main);
```

---

## Event Listeners

This will be covered more in depth next week, but
here is a quick overview:

```javascript
"use strict";

function main() {
  var planetThing = document.getElementById("planet");
  planetThing.addEventListener("click", doClick);
}

function doClick () {
  window.alert("Clicked!");
}

// This tells the browser to execute the `main`
// function, after all the HTML has finished loading.
window.addEventListener("load", main);
```

---

## Event Listeners

This will be covered more in depth next week.
`someHTmlElement.addEventListener` allows you to handle certain events
for an HTML element. Some of these events could be:

* `click`
* `mouseover`
* `etc...`

---

## Lab

* `labs/boxes/index.html`
* `labs/changedom/index.html`

---

## Objectives Recap

* Understanding the purpose and significance of JavaScript
* Understand and demonstrate basic JavaScript syntax.
* Understanding and demonstrate ability to use Chrome Dev Tools
  for testing JavaScript.
* Understand and demonstrate how to declare and assign variables.
* Understand basic usage of JavaScript functions.
* Understand scoping in JavaScript.
* Know the basic JavaScript data types.
* Know how to include JavaScript files in HTML documents.
* Know how to reference HTML elements in JavaScript
* Know how to dynamically modify style properties from within
  JavaScript.

