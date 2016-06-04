![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 3
## Layout Basics
### Brendon Crawford

---

## Objectives

* Know the 4 edges of an HTML box within the box model
* Understand the purpose of the box model
* Understand how to reset the box model
* Understand and be able to describe an HTML block element
* Understand and be able to describe an HTML inline element

---

## CSS Box Model

* In an HTML document, each element is represented as a rectangular box.
* Each box has 4 edges:
    * Margin Edge
    * Border Edge
    * Padding Edge
    * Content Edge

---

## CSS Box Model

![Box Model Diagram](img/diagrams/boxmodel.png)

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
      </a>
    </li>
  </ul>
</div>

---

## CSS Box Model
### Padding Edge

The Padding Edge is is the edge of the Padding Area.  The Padding Area is the area which sits between the
Border Edge and the Content Edge.

---

## CSS Box Model

![Box Model Diagram](img/diagrams/boxmodel.png)

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
      </a>
    </li>
  </ul>
</div>

---

## CSS Box Model
### Border Edge

The Border Edge is the edge of the Border Area.  The Border Area is the area that sits between the
Padding Edge and the Margin Edge.

---

## CSS Box Model

![Box Model Diagram](img/diagrams/boxmodel.png)

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
      </a>
    </li>
  </ul>
</div>

---

## CSS Box Model
### Margin Edge

The Margin Edge is the edge of the Margin Area.  The Margin Area sits on the outside of the Border Edge.  The Margin Area
is not within the element itself, and represents the area outside of the element.

---

## CSS Box Model

![Box Model Diagram](img/diagrams/boxmodel.png)

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
      </a>
    </li>
  </ul>
</div>

---

## CSS Box Model

Why is any of this important?

---

## CSS Box Model?

Why is any of this important?

* It is important, because by default, the modern web browsers will measure width and height
  according to the `Content Edge`, not the `Border Edge`.
* Most web developers agree that this is a bad idea, so we need to tell the browser to
  measure width and height according to the `Border Edge` instead of the `Content Edge`.

---

## CSS Box Model

![Box Model Diagram](img/diagrams/boxmodel.png)

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
      </a>
    </li>
  </ul>
</div>

---

## CSS Box Model
### Resetting the Box Model?

Always put this at the very beginning of your CSS!

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://www.paulirish.com/2012/box-sizing-border-box-ftw/">
        https://www.paulirish.com/2012/box-sizing-border-box-ftw/
      </a>
    </li>
  </ul>
</div>

---

## CSS Box MOdel
### Demo

[demos/boxmodel/boxmodel.html]([demos/boxmodel/boxmodel.html)

---

## CSS Display Types

### What is CSS `display`?

---

## CSS Display Types

### What is CSS `display`?

* The CSS `display` property determines the type of rendering box used for an element
  in an HTML document.
* The two most common types of `display` which you will encounter are `block` and `inline`.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
        https://developer.mozilla.org/en-US/docs/Web/CSS/display
      </a>
    </li>
  </ul>
</div>

---

## CSS Display Types
### `block`

A `block` level element...

* Takes the shape of a rectangular box.
* By default will extend to it's fullest possible width.
* By default does not share a horizontal plane with other elements.
  In other words, by default it will not render side-by-side with another element.
* Can have properties such as `width`, `height`, and `margin`.

---

## CSS Display Types

### block

Examples of block elements...

```html
<div>Hello World</div>

<p>Hello World</p>

<h1>Hello World</h1>
```

---

## CSS Display Types

### block

Changing a non block element to a block element:

```html
<a id="portfolio" href="./portfolio.html">Portfolio</a>
```

```css
a#portfolio {
  display: block;
}
```

---

## CSS Display Types
### block
#### Demo And Practice

[labs/display/block.html](labs/display/block.html)

---

## CSS Display Types
### `inline`

An inline element...

* Flows inline like the way that standard text will flow.
* By default will only be as wide as it's content.
* Cannot have properties such as `width`, `height`, and `margin`.

---

## CSS Display Types

### inline

Examples of inline elements...

```html
<span>Hello World</span>

<a href="./">Hello World</a>

<strong>Hello World</strong>
```

---

## CSS Display Types

Inline element can be contained inside block elements, but block elements
should not be contained inside inline elements!

Unacceptable!

```html
<a href="./">
  <p>Hello World</p>
</a>
```

Acceptable!

```html
<p>
  <a href="./">Hello World</a>
</p>
```

---

## CSS Display Types

Common example of mixing inline elements with block elements

```html
<p>
  Here is the daily weather report for
  <a href="la.html">Los Angeles, CA</a>. It is going to be
  <span class="temp">115 degrees</span> for most of the
  <span class="time">morning</span>, then we expect some rain in
  the <span class="time">afternoon</span>, and snow in the
  <span class="time">evening</span>.
</p>
<p>
  Here is the daily weather report for
  <a href="la.html">San Diego, CA</a>. It is going to be
  <span class="temp">90 degrees</span> for most of the
  <span class="time">morning</span>, then we expect some rain in
  the <span class="time">early evening</span>,
  and hail in the <span class="time">late evening</span>.
</p>

```

---

## CSS Display Types
### Demo And Practice
#### Inline and Block Elements

[labs/display/inline_and_block.html](labs/display/inline_and_block.html)

---

## CSS Layout Basics

### Objectives Recap

* Know the 4 edges of an HTML box within the box model
* Understand the purpose of the box model
* Understand how to reset the box model
* Understand and be able to describe an HTML block element
* Understand and be able to describe an HTML inline element
