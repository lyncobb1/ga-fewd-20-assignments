![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

# FEWD
## Image and CSS Basics
### Brendon Crawford

---

## Objectives

* Define and describe CSS and CSS rules
* Write CSS rules for adding presentation to HTML data
* Understand and demonstrate various types of CSS color methods
* Integrate external stylesheets

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

```
font-weight: bold;
```

* What part is the declaration?
* What part is the property?
* What part is the value?

---

## Anatomy of CSS

```
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

## CSS Colors

![](../../img/unit_1/color.png)

* Colors can be specified in CSS in a variety of ways:
    * named color
    * hexadecimal code
    * RGB
    * RGBA
    * HSL
    * HSLA

---

## CSS Colors

### Named Colors

```
background-color: red;
```

* These are used less frequently, but are handy for basic colors like `black`
  and `white`.
* See [http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx](http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx) for more.

---

## CSS Colors

### Hexadecimal Code

```
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

```
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

What are these colors?

1. ```#FF00FF```
2. ```#FFFF00```
3. ```#999999```

---

## CSS Colors

### Hexadecimal Code

What are these colors?

1. ```#FF00FF``` -- _Purple_
2. ```#FFFF00``` -- _Yellow_
3. ```#999999``` -- _Grey_

_Anytime Red, Green, and Blue are all the same value, the final color will be on the greyscale!_

---

## Code Along: CSS Hexadecimal Colors

```
background-color: #FF0000;
```

* [http://codepen.io/brencraw/pen/LNveWE?editors=1100](http://codepen.io/brencraw/pen/LNveWE?editors=1100)

---

## CSS Color

### RGB Color Values

```
background-color: RGB(255, 0, 0);
```

* The first value is red, the second green, the third blue.
* Each value can range from 0 to 255, which expresses the same number of color
  steps as `00` to `FF` in base-16.
* FF in base-16 is equivalent to 255 in base-10.

---

## CSS Color

### RGB Color Values

* ```RGB(255, 0, 0)``` -- _Red_
* ```RGB(0, 255, 0)``` -- _Green_
* ```RGB(0, 0, 255)``` -- _Blue_

---

## CSS Colors

### RGB Color Values

What are these colors?

1. ```RGB(255, 0, 255)```
2. ```RGB(255, 255, 0)```
3. ```RGB(153, 153, 153)```

---

## CSS Colors

### RGB Color Values

What are these colors?

1. ```RGB(255, 0, 255)``` -- _Purple_
2. ```RGB(255, 255, 0)``` -- _Yellow_
3. ```RGB(153, 153, 153)``` -- _Grey_

---

## Code Along: CSS RGB Colors

```
background-color: RGB(255, 0, 0);
```

* [http://codepen.io/brencraw/pen/LNveWE?editors=1100](http://codepen.io/brencraw/pen/LNveWE?editors=1100)

---

## CSS Colors

### RGBA Color Values

```
background-color: RGBA(255, 0, 0, .5);
```

![](../../img/unit_1/rgba_color.png)

---

## CSS Colors

### RGBA Color Values

```
background-color: RGBA(255, 0, 0, .5);
```

* RGBa works identically to RGB, expect that it takes a 4th value called the "alpha".
* This is a value between 0 and 1 which will be used to determine a color's opacity on the page,
* 0 is completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.

---

## CSS Colors

### RGBA Color Values

* ```RGB(255, 0, 0, .5)``` -- _Red at 50% opacity_
* ```RGB(0, 255, 0, 1)``` -- _Green at 100% opacity_
* ```RGB(0, 0, 255, .1)``` -- _Blue at 10% opacity_

---

## CSS Colors

### RGBA Color Values

* ```RGB(255, 0, 255, .3)```
* ```RGB(255, 255, 0, 0)```
* ```RGB(100, 100, 100, 1)```

---

## CSS Colors

### RGBA Color Values

* ```RGB(255, 0, 255, .3)``` -- _Purple at 30% opacity_
* ```RGB(255, 255, 0, 0)``` -- _Yellow at 0% opacity_
* ```RGB(100, 100, 100, 1)``` -- _Grey at 100% opacity_

---

## Code Along: CSS RGBA Colors

```
background-color: RGBA(255, 0, 0, .5);
```

* [http://codepen.io/brencraw/pen/LNveWE?editors=1100](http://codepen.io/brencraw/pen/LNveWE?editors=1100)

---

## CSS Colors

### HSL Color Values

```
background-color: HSL(360, 100%, 50%);
```

* **Hue** is expressed as a degree angle measure, with red being at 0, green at 120,
  and blue at 240. Note that the degree unit is implied, and that the angle wraps around, so 360
  also refers to red, and -120 is the same as 240 (blue).

---

## CSS Colors

### HSL Color Values

```
background-color: HSL(360, 100%, 50%);
```

* **Saturation** is expressed as a percentage, with 100% being a fully saturated color,
  and 0% being a shade of gray (no hue).

---

## CSS Colors

### HSL Color Values

```
background-color: HSL(360, 100%, 50%);
```

* **Lightness** is also expressed as a percentage, 0% being black, and 100% being white. 50%
  lightness is the "normal" color range: anything above 50% gives a white tint, anything below 50% gives a black shade.

---

## CSS Colors

### HSL Color Values

```
background-color: HSL(360, 100%, 50%);
```

* HSL is not as commonly used as the other types of CSS color definitions

---

## Code Along: CSS HSL Colors

```
background-color: HSL(360, 100%, 50%);
```

* http://hslpicker.com/
* [http://codepen.io/brencraw/pen/LNveWE?editors=1100](http://codepen.io/brencraw/pen/LNveWE?editors=1100)

---

## CSS Colors

### HSLA Color Values

```
background-color: HSLA(360, 100%, 50%, 1);
```

* As with RGBa, HSLa is exactly like HSL for the first 3 values, but takes a 4th alpha-channel value.
* Note that changing the opacity allows whatever colors are "behind" an element to shine through, which
  can alter the visible color significantly, especially at lower opacities.

---

## Code Along: CSS HSLA Colors

```
background-color: HSLA(360, 100%, 50%, 1);
```

* http://hslpicker.com/
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

```
<p style="background-color: red; font-weight: bold;">Hello World</p>
```

* You should avoid this method
* Why should you avoid this method?

---

## Integrating CSS

### Inline

```
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

```
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

```
<head>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  <p>Hello World</p>
</body>
```

```
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

```
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

## Lab Exercise

Add styling to our cookie recipe HTML web page

See [labs/cookie_recipe/README.md](labs/cookie_recipe/README.md)
