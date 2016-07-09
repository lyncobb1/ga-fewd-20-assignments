![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 7
## Intro To jQuery
### Brendon Crawford

---

## Objectives

* Understand the definition and purpose of "Objects" in the context of programming
* Understand the purpose of a "Libary" in the context of programming
* Understand the purpose of jQuery for web development
* Know how to include jQuery in your application
* Know how to get references to HTML elements using jQuery
* Know how to perform basic actions on HTML elements with jQuery
* Know how to get and set form input values with jQuery

---

## Objects

Before you can learn about jQuery, you will need to know about "Objects".

---

## Real Life Objects

* Question: In real life, what is an "Object"?

---

## Real Life Objects

* Objects have both actions and attributes
* Humans are objects.  Human have both actions and attributes.

---

## Humans As Objects

* Question: What are examples of actions that a human can perform?
* Question: What are examples of attributes of a human?

---

## Humans As Objects

```plain
Human
  - Attributes
    - Eye Color: Green
    - Hair Color: Black
    - Height: 6'5"
  - Actions
    - Walk: Move forward with legs
    - Talk: Make noise with mouth
    - Sleep: Close eyes and stop thinking
```

---

## Group Exercise

* On your desk, write an example of a real life object.
* Include both the actions and the attributes for that object.

---

## Objects In Programming

* Question: In computer programming, what is an "Object"?

---

## Objects In Programming

* In programming, an object is a representation of something.
* It can also have actions and attributes.  However, we call them
  "methods" and "properties".

---

## Objects In JavaScript

* Question: In JavaScript, what is an "Object"?

* Answer: In JavaScript, an object is a special type of variable that can contain
  methods (which are functions) and properties (which are also variables).

---

## Object Example In JavaScript

Modeling our Human object in JavaScript:

```javascript
var human = {
  // Properties
  eyeColor: "#008000",
  hairColor: "#000000",
  height: 77,

  // Methods
  walk: function () {
    moveForwardWithLegs();
  },
  talk: function () {
    makeNoiseWithmouth();
  },
  sleep: function () {
    closeEyes();
    stopThinking();
  }
};
```

---

## JavaScript Object Syntax

Try this in chrome dev tools:

```javascript
// Define object
var something = {
  somePropertyName: "Some Property Value",

  someMethodName: function (a, b) {
    // This is just a normal function
    return (a + b);
  }
};

// Access a property
console.log(something.somePropertyName);

// Access a method
console.log(something.someMethodName(2, 2));
```

---

## What is jQuery?

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things
> like HTML document traversal and manipulation, event handling, animation, and
> Ajax much simpler with an easy-to-use API that works across a multitude of
> browsers. With a combination of versatility and extensibility, jQuery has
> changed the way that millions of people write JavaScript.

<div class="citations">
  <p>Source</p>
  <ol>
    <li>
      <a href="https://jquery.com/">
        https://jquery.com/
      </a>
    </li>
  </ol>
</div>

---

## What Is jQuery In plain(er) English?

jQuery is a JavaScript library intended to take the hard work
out of many common tasks that JavaScript developers face.

---

## What is a "Library"

A library is a common term in programming.  It describes code which was written
by another developer that you can include with your own code to add certain
conveniences and helpers in your own development.

---

## Including jQuery

* jQuery goes in the `<head>` before your other JS files.
* You can either download the jQuery files to your computer, or you can
  just include the full URL.  For now it is recommended that you just use
  the full URL.

---

## Including jQuery

* This may be the first time you are seeing the `integrity` and `crossorigin`
  attibutes.  You probably do not need to know exactly why they are here.  Just know
  that you need to include them.

```html
<head>
  <script
      src="https://code.jquery.com/jquery-3.1.0.min.js"
      integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="
      crossorigin="anonymous"></script>
  <script type="text/javascript" src="./js/index.js"></script>
</head>
```

---

## The $ Object

You hopefully remember a few minutes ago we learned about objects.  jQuery makes use
of an object called `$`.  The `$` is the primary way of accessing jQuery functionality.

---

## A Basic jQuery Example

```javascript
$("#someHtmlId").hide();
$("#someHtmlId").show();

$("p.mytext").hide();
$("p.mytext").show();
```

---

## First jQuery Integration

`labs/04-jquery_basics`

---

## Waiting For HTML To Load

* You may remember that you will need to wait for all
  the HTML to load before you can access it from JavaScript
* In jQuery, this is done slightly differently from how we did it before:

```javascript
var main = function () {
  // Call this function once the HTML has loaded
};

$(document).ready(main);
```

---

## Getting an HTML Element With jQuery

```javascript
var someElement = $(someCssSelector);
```

```javascript
var someElement = $("#someBox");
```

```javascript
var someElement = $("p.someText");
```

```javascript
var someElement = $("section#box > article.myStuff a:hover");
```

---

## Doing Things With Elements

```javascript
var someElement = $("section#box > article.myStuff a:hover");
someElement.css("background-color", "#FF0000");
someElement.hide();
someElement.show();
```

---

## Real Life Events

* Question: In the real world, what are events?

---

## Events In Programming

* Question: In computer programming, what are events?

---

## Events In JavaScript

* Question: In JavaScript, what are events?
* Answer: In JavaScript, events are things that happen
  which can trigger actions determined your code.

---

## Example Event Types in JavaScript

* "click"
* "mouseover"
* "mouseout"
* "submit"

---

## Handling Events In jQuery

* Use the `on` method of an HTML reference
* The `on` method takes two arguments: The event type name, and the function
  to be called once the event has been triggered.

```javascript
$("p#box").on("click", function () {
  // Call this function once the `p#box` element
  // has been clicked.
})
```

---

## Handling Events In jQuery

Using event handlers to perform an action once a form
has been submitted:

```javascript
$("form#myForm").on("submit", function () {
  // Call this function once the `form#myForm`
  // has been submitted.
});
```

---

## Revisiting Functions

These are the same thing:

```javascript
$("#something").on("click", function () {
  // Do stuff here
});

```

```javascript
var somethingHandler = function () {
  // Do stuff here
};

$("#something").on("click", somethingHandler);
```

```javascript
function functionHandler () {
  // Do stuff here
};

$("#something").on("click", somethingHandler);
```

---

## jQuery Forms Integration

`labs/05-jquery_form_basics`

---

## Getting Form Values

* jQuery allows you to easily get the value of a form input

```html
<input type="text" id="username" name="username" placeholder="Enter Username" />
```

```javascript
var usernameElement = $("input#username");
var usernameVal = usernameElement.val();
console.log(usernameVal);
```

---

## Setting Form Values

* jQuery allows you to easily set the value of a form input

```html
<input type="text" id="result" name="result" readonly />
```

```javascript
$("input#result").val("New Result Value");
```

---

## For Submit Events

Keep in mind that when you are handling a form `submit` event,
your event handler function will need to `return false`.  If you
do not do this, the page will reload:

```javascript
$("form#myForm").on("submit", function () {
  doStuff();
  return false;
});
```

---

## Objectives Recap

* Understand the definition and purpose of "Objects" in the context of programming
* Understand the purpose of a "Libary" in the context of programming
* Understand the purpose of jQuery for web development
* Know how to include jQuery in your application
* Know how to get references to HTML elements using jQuery
* Know how to perform basic actions on HTML elements with jQuery
* Know how to get and set form input values with jQuery
