![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD
## CSS Basics
### Brendon Crawford

---

## Objectives

* Define and describe CSS and CSS rules
* Integrate external stylesheets
* Write CSS rules for adding presentation to HTML data
* Define and describe the role of classes and IDs
* Be able to use Chrome Dev Tools and undrstand it's purpose
* Understand and demonstrate various types of CSS color methods


---

HTML is interesting and fun, but what is missing?

---

HTML is interesting and fun, but what is missing?

* The ability to style our data
* "CSS" allows us to add styles to our data

---

## What is CSS?

* "CSS" means "Cascading Style Sheets"

---

## First CSS Code Demo

* [http://codepen.io/brencraw/pen/LNveWE?editors=1100](http://codepen.io/brencraw/pen/LNveWE?editors=1100)

---

## Anatomy of CSS: Rules

![](../../img/unit_1/css_syntax.png)

* Together this entire piece of text is referred to as a "rule".

---

## Anatomy of CSS: Selectors

![](../../img/unit_1/css_syntax.png)

* The component before the curly braces is a "selector".
* A selector maps a rule to corresponding HTML elements.
* The simplest example of a selector is the HTML tag name

---

## Anatomy of CSS: Declaration Block

![](../../img/unit_1/css_syntax.png)

* The "Declaration Block" is a set of "Declarations".
* It consists of everything between the curly braces.

---

## Anatomy of CSS: Declaration

![](../../img/unit_1/css_syntax.png)

* Every declaration is a property followed by a value, separated by a colon, ending in a semicolon.
* In this declaration, we are setting the color property to the value black.

---

## Anatomy of CSS

```css
font-weight: bold;
```

* What part is the declaration?
* What part is the property?
* What part is the value?

---

## Anatomy of CSS

```css
li {
  color: blue;
  background-color: red;
}
```

* What part is the rule?
* What part is the declaration block?
* How many declarations are there?

---

## Group Exercise: Playing With CSS Rules

* Have some fun adding CSS rules to our HTML from the To-Do List in the last lesson
* [http://codepen.io/brencraw/pen/LNveWE?editors=1100](http://codepen.io/brencraw/pen/LNveWE?editors=1100)

---

## Integrating CSS

_Where do we actually put our CSS??!!_

---

## Integrating CSS

_Where do we actually put our CSS??!!_

* Inline
* Style Tag
* External Stylesheet

---

## Integrating CSS

### Inline

```html
<p style="background-color: red; font-weight: bold;">Hello World</p>
```

* You should avoid this method
* Why should you avoid this method?

---

## Integrating CSS

### Inline

```html
<p style="background-color: red; font-weight: bold;">Hello World</p>
```

* You should avoid this method
* Why should you avoid this method?
    * HTML describes data
    * CSS describes presentation of data
    * It is best to avoid mixing the two

---

## Integrating CSS

### Style Tags

```html
<head>
  <style type="text/css">
    p {
      background-color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p>Hello World</p>
</body>
```

* You should also avoid this method when possible

---

## Integrating CSS

### External Stylesheet

```html
<head>
  <link rel="stylesheet" type="text/css" href="./styles.css" />
</head>
<body>
  <p>Hello World</p>
</body>
```

```css
/* styles.css */
p {
  background-color: red;
  font-weight: bold;
}
```

* You should try to always use this method when possible
* What are some advantages of using this method?

---

## Integrating CSS

### External Stylesheet

```html
<head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  <p>Hello World</p>
</body>
```

* What are some advantages of using this method?
   * Separation of data and presentation
   * Reusability of CSS rules
   * Caching

---

## Classes and IDs

Assume you have this HTML:

```html
<p>John Doe</p>
<p>Hello my name is John Doe.  I am a graphic designer.</p>
```

How would you define a different style for each `<p>`?

---

## IDs

```html
<p id="myname">John Doe</p>
<p id="bio">Hello my name is John Doe.  I am a graphic designer.</p>
```

```css
p#myname {
  color: #FF0000;
}

p#bio {
  color: #0000FF;
}
```

---

## IDs

An ID should describe the semantic purpose or meaning of an element.
It should not describe the visual presentation.

Which is a better example of an ID?

```html
<p id="bigandflashy">California</p>
```

```html
<p id="region">California</p>
```

---

## IDs

IDs are unique.  There can only be one!

* What does "ID" stand for?
* What is a real life example of an ID?

---

## Classes

```html
<p class="verse">
  Should old acquaintance be forgot, and never brought to mind?
  Should old acquaintance be forgot, and old lang syne?
</p>
<p class="chorus">
  For auld lang syne, my dear, for auld lang syne,
  we'll take a cup of kindness yet, for auld lang syne.
</p>
<p class="verse">
  And surely you'll buy your pint cup! and surely I'll buy mine!
  And we'll take a cup o' kindness yet, for auld lang syne.
</p>
<p class="chorus">
  For auld lang syne, my dear, for auld lang syne, we'll
  take a cup of kindness yet, for auld lang syne.
</p>
```

---

## Classes

Like an ID, a class should describe the semantic purpose of meaning of an element.

Which is the better class name?

```html
<p class="centeredtext">John Doe</p>
```

```html
<p class="person">John Doe</p>
```

---

## Classes

Classes describe a semantic group.  Think of the word _classification_.

Two examples of real-life classes are:

* Class of Animal species
    * Dog
    * Cat
* Class of Dog Breeds
    * German Shepard
    * Poodle

---

## Classes

```html
<p class="verse">
  Should old acquaintance be forgot, and never brought to mind?
  Should old acquaintance be forgot, and old lang syne?
</p>
<p class="chorus">
  For auld lang syne, my dear, for auld lang syne,
  we'll take a cup of kindness yet, for auld lang syne.
</p>
<p class="verse">
  And surely you'll buy your pint cup! and surely I'll buy mine!
  And we'll take a cup o' kindness yet, for auld lang syne.
</p>
```

```
p.verse {
  color: #004400;
}

p.chorus {
  color: #FF00FF;
}
```

---

## Classes

```html
<p class="verse quiet">
  Should old acquaintance be forgot, and never brought to mind?
  Should old acquaintance be forgot, and old lang syne?
</p>
<p class="chorus loud">
  For auld lang syne, my dear, for auld lang syne,
  we'll take a cup of kindness yet, for auld lang syne.
</p>
<p class="verse loud">
  And surely you'll buy your pint cup! and surely I'll buy mine!
  And we'll take a cup o' kindness yet, for auld lang syne.
</p>
```

```
p.verse {
  color: #004400;
}
p.chorus {
  color: #FF00FF;
}
p.quiet {
  font-style: italic;
}
p.loud {
  font-weight: bold;
}
```

---

## Classes

```html
<p class="verse quiet">
  Should old acquaintance be forgot, and never brought to mind?
  Should old acquaintance be forgot, and old lang syne?
</p>
<p class="chorus loud">
  For auld lang syne, my dear, for auld lang syne,
  we'll take a cup of kindness yet, for auld lang syne.
</p>
<p class="verse loud">
  And surely you'll buy your pint cup! and surely I'll buy mine!
  And we'll take a cup o' kindness yet, for auld lang syne.
</p>
```

```
p.verse { color: #004400; }
p.chorus { color: #FF00FF; }
p.quiet { font-style: italic; }
p.loud { font-weight: bold; }
p.chorus.loud { background-color: #FF8888; }
```

---

## Classes

```html
<p id="verse1" class="verse quiet">
  Should old acquaintance be forgot, and never brought to mind?
  Should old acquaintance be forgot, and old lang syne?
</p>
<p id="chorus1" class="chorus loud">
  For auld lang syne, my dear, for auld lang syne,
  we'll take a cup of kindness yet, for auld lang syne.
</p>
<p id="verse2" class="verse loud">
  And surely you'll buy your pint cup! and surely I'll buy mine!
  And we'll take a cup o' kindness yet, for auld lang syne.
</p>
```

```
p#verse1 { background-color: #00FF00; }
p#verse2.loud { background-color: #FF0000; }
p#verse2.quiet { background-color: #0000FF; }
```

---

## Classes and IDs

### Group Exercise: Part 1

1. Write down a real life thing which can belong to 3 different classes
2. Write down each of those classes
3. Convert this to HTML!

Example:

```text
1. Chevy Suburban
2. Chevrolets; SUVs; Transportation Devices;
3.
   <p class="chevrolets suvs transportationdevices">Chevy Suburban</p>
```

---

## Classes and IDs

### Group Exercise: Part 2

1. For each class that you listed in step #2 from the previous exercise,
   write down another real life thing that belongs to each of those classes.
2. Convert this to HTML!

Example from Step 2 in Previous Exercise

```text
Chevrolets; SUVs; Transportation Devices;
```

Example:

```text
1. Chevy Malibu; Cadillac Escalade; Boeing 747;
2.
   <p class="chevrolets sedans transportationdevices">Chevy Malibu</p>
   <p class="cadillacs suvs transportationdevices">Cadillac Escalade</p>
   <p class="boeings jets transportationdevices">Boeing 747</p>
```

---

## Classes and IDs

### Group Exercise: Part 3

1. For each of the things in the previous exercise, write down a
   unique identifier.
2. Take your HTML from the previous example and add those IDs

Example from Step 1 in Previous Exercise:

```text
Chevy Malibu; Cadillac Escalade; Boeing 747;
```

Example:

```text
1.
   Chevy Malibu = "License Plate 123456";
   Cadillac Escalade = "License Plate 789012"
   Boeing 747 = "Serial Number 676767"
2.
   <p id="licenseplate123456" class="chevrolets sedans transportationdevices">Chevy Malibu</p>
   <p id="licenseplate789012" class="cadillacs suvs transportationdevices">Cadillac Escalade</p>
   <p id="serialnumber676767" class="boeings jets transportationdevices">Boeing 747</p>
```

---

## Lab Exercise

Find the lab exercise

[/Week_01-Basics/02_css_basics/labs/cookie_recipe/README.md](/Week_01-Basics/02_css_basics/labs/cookie_recipe/README.md)

---

## Chrome Dev Tools

### Demonstration

---

## CSS Colors

![](../../img/unit_1/color.png)

* Colors can be specified in CSS in a variety of ways:
    * named color
    * hexadecimal code
    * RGB
    * RGBA
    * HSL _(Covered in Extras)_
    * HSLA _(Covered in Extras)_

---

## CSS Colors

### Named Colors

```css
background-color: red;
```

* These are used less frequently, but are handy for basic colors like `black`
  and `white`.
* See [http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx](http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx) for more.

---

## CSS Colors

### Hexadecimal Code

```css
background-color: #FF0000;
```

* "Hexadecimal" (or "Hex") means base-16,
* In Base-16, possible values are: `0123456789ABCDEF`
* The beginning of the hex code always is `#`
* The 6 values of the Hex code represent 3 sections of 2
* The 3 sections represent Red, Green and Blue
* Each section is expressed by two hexedecimal digits from `00` (no color) to `FF` (full color)

---

## CSS Colors

### Hexadecimal Code

```css
background-color: #F00;
```

* Hex values can be abbreviated to only 3 digits if each digits is doubled. So `#FFFFFF` (white) can
  be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`
  however, cannot be abbreviated without altering the color.

---

## CSS Colors

### Hexadecimal Code

![Hexadecimal Code explanation](../../img/unit_1/hex_colors.png)

---

## CSS Colors

### Hexadecimal Code

What are these colors? (Graphic designers are not allowed to answer!)

```css
#FF00FF
```

```css
#FFFF00
```

```css
#999999
```

---

## CSS Colors

### Hexadecimal Code

What are these colors? (Graphic designers are not allowed to answer!)

#### Purple

```css
#FF00FF
```

#### Yellow

```css
#FFFF00
```

#### Grey

```css
#999999
```

* Anytime Red, Green, and Blue are all the same value, the final color will be on the greyscale!

---

## Mini Lab: CSS Hexadecimal Colors

```css
background-color: #FF0000;
```

In Chrome Dev Tools:

[/Week_01-Basics/02_css_basics/labs/cookie_recipe/cookierecipe.html](/Week_01-Basics/02_css_basics/labs/cookie_recipe/cookierecipe.html)

---

## CSS Color

### RGB Color Values

```css
background-color: RGB(255, 0, 0);
```

* The first value is red, the second green, the third blue.
* Each value can range from 0 to 255, which expresses the same number of color
  steps as `00` to `FF` in base-16.
* FF in base-16 is equivalent to 255 in base-10.

---

## CSS Color

### RGB Color Values

#### Red

```css
RGB(255, 0, 0)
```

#### Green (Lime)

```css
RGB(0, 255, 0)
```

#### Blue

```css
RGB(0, 0, 255)
```

---

## CSS Colors

### RGB Color Values

What are these colors? (Graphic designers are not allowed to answer!)

```css
RGB(255, 0, 255)
```

```css
RGB(255, 255, 0)
```

```css
RGB(153, 153, 153)
```

---

## CSS Colors

### RGB Color Values

What are these colors? (Graphic designers are not allowed to answer!)

#### Purple

```css
RGB(255, 0, 255)
```

#### Yellow

```css
RGB(255, 255, 0)
```

#### Grey

```css
RGB(153, 153, 153)
```

---

## Mini Lab: CSS RGB Colors

```css
background-color: RGB(255, 0, 0);
```

In Chrome Dev Tools:

[/Week_01-Basics/02_css_basics/labs/cookie_recipe/cookierecipe.html](/Week_01-Basics/02_css_basics/labs/cookie_recipe/cookierecipe.html)

---

## CSS Colors

### RGBA Color Values

```css
background-color: RGBA(255, 0, 0, .5);
```

![](../../img/unit_1/rgba_color.png)

---

## CSS Colors

### RGBA Color Values

```css
background-color: RGBA(255, 0, 0, .5);
```

* RGBa works identically to RGB, expect that it takes a 4th value called the "alpha".
* This is a value between 0 and 1 which will be used to determine a color's opacity on the page,
* 0 is completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.

---

## CSS Colors

### RGBA Color Values

#### Red at 50% opacity

```css
RGB(255, 0, 0, .5)
```

Green at 100% opacity

```css
RGB(0, 255, 0, 1)
```

Blue at 10% opacity

```css
RGB(0, 0, 255, .1)
```

---

## Mini Lab: CSS RGBA Colors

```css
background-color: RGBA(255, 0, 0, .5);
```

In Chrome Dev Tools:

[/Week_01-Basics/02_css_basics/labs/cookie_recipe/cookierecipe.html](/Week_01-Basics/02_css_basics/labs/cookie_recipe/cookierecipe.html)

---

## Lab Exercise

[/Week_01-Basics/02_css_basics/labs/chrome_dev_tools/README.md](/Week_01-Basics/02_css_basics/labs/chrome_dev_tools/README.md)

---