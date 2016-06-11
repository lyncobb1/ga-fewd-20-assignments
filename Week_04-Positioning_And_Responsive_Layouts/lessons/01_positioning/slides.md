![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 4
## CSS Positioning
### Brendon Crawford

---

## Objectives

* Define CSS Positioning and identify it's purpose
* Define and implement absolute positioning
* Define and implement relative positioning
* Define and implement fixed positioning
* Describe the appropriate and inappropriate times for using
  floating-based layouts vs absolute positioned layouts
* Define and implement the z-index

---

## What is CSS Positioning?

* CSS Positioning is a method of specifying an HTML layout which allows for
  precise control of the location of an HTML element in the document.
* CSS Positioning is often used for enhanced UIs when animation effects are needed,
  or if the standard layout techniques cannot provide the exact layout that
  you might need.

---

## Common Types of Positioning

- `position: absolute;`
- `position: fixed;`
- `position: relative;`
- `position: static;`

---

## Absolute Positioning

`position: absolute;`

> Do not leave space for the element. Instead, position it at a specified
> position relative to its closest positioned ancestor if any, or otherwise
> relative to the containing block. Absolutely positioned boxes can have
> margins, and they do not collapse with any other margins.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">
        https://developer.mozilla.org/en-US/docs/Web/CSS/position
      </a>
    </li>
  </ul>
</div>

---

## Absolute Positioning

`position: absolute;`

> Elements that are positioned relatively are still considered to be in the normal
> flow of elements in the document. In contrast, an element that is positioned
> absolutely is taken out of the flow and thus takes up no space when placing other
> elements. The absolutely positioned element is positioned relative to nearest
> positioned ancestor (non-static). If a positioned ancestor doesn't exist,
> the initial container is used.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/position">
        https://developer.mozilla.org/en-US/docs/Web/CSS/position
      </a>
    </li>
  </ul>
</div>

---

## Absolute Positioning

`position: absolute;`

* In plain terms, absolute positioning allows you to specify an exact location for an
  element within the document or within a parent element.
* In this lesson, we will be focusing most of our time on absolute positioning.

---

## Absolute Positioning
### Whiteboard Primary Concepts

<style type="text/css">
  ul#abs-pos-prim-con {
    font-size: 2rem;
  }
</style>

<ul id="abs-pos-prim-con">
  <li><code>position: absolute;</code></li>
  <li><code>top: ??px;</code></li>
  <li><code>bottom: ??px;</code></li>
  <li><code>left: ??px;</code></li>
  <li><code>right: ??px;</code></li>
  <li><code>width: ??px;</code></li>
  <li><code>transform: translate(-50%, -50%);</code></li>
  <li><code>transform: translate(50%, 50%);</code></li>
  <li><code>margin-left: -??px;</code></li>
  <li><code>margin-top: -??px;</code></li>
  <li><code>margin-right: -??px;</code></li>
  <li><code>margin-bottom: -??px;</code></li>
</ul>

---

## Absolute Positioning
### Demo, Code Along, and Lab

`labs/basic_absolute_position/`

---

## Absolute Positioning
### Demo, Code Along, and Lab

`labs/boxsteps/starter_code/boxsteps.html`

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  top: 500px;
}
```

<ul style="font-size: 1.8rem;">
  <li>
    Specifies that the top edge of the element should be positioned 500 pixels from the top of
    the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    So, assume that the parent of `div#blah` is `div#test`, and the parent
    of `div#test` is `div#outer`.  If `div#test` has a `position` property set
    on it, then `div#blah` will be positioned 500 pixels from the top of
    `div#test`.  However, if `div#test` does not have a `position` property set,
    but `div#outer` does have a `position` property set, then `div#blah` will
    be positioned 500 pixels from the top of `div#outer`.
  </li>
</ul>

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  bottom: 500px;
}
```

* Specifies that the bottom edge of the element should be positioned 500 pixels from
  the bottom of the first ancestor element to have a `position` property set on it.

---

## Absolute Positioning

```css
#blah {
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  left: 500px;
}
```

* Specifies that the left edge of the element should be positioned 500 pixels from the left
  of the first ancestor element to have a `position` property set on it.

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  right: 500px;
}
```

* Specifies that the right edge of the element should be positioned 500 pixels
  from the right of the first ancestor element to have a `position` property set on it.

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  top: 10%;
}
```

<ul style="font-size: 1.8rem;">
  <li>
    Specifies that the top edge of the element should be positioned 10% from the top of
    the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The percentage value indicates the height of the first ancestor element to have a
    `position` property set on it.  So, if `div#outer` is the first ancestor element
    to have a `position` property set on it, and `div#outer` is 1000 pixels in height,
    then `div#blah` will be positioned 10% of 1000 pixels, which is 100 pixels from the top.
  </li>
</ul>

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  bottom: 10%;
}
```

* Specifies that the bottom edge of the element should be positioned 10% from the bottom of
  the first ancestor element to have a `position` property set on it.

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  left: 10%;
}
```

* Specifies that the left edge of the element should be positioned 10% from the left of
  the first ancestor element to have a `position` property set on it.

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  right: 10%;
}
```

* Specifies that the right edge of the element should be positioned 10% from the right of
  the first ancestor element to have a `position` property set on it.

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  right: 10%;
}
```

* Specifies that the right edge of the element should be positioned 10% from the right of
  the first ancestor element to have a `position` property set on it.

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

<ul style="font-size: 1.6rem;">
  <li>
    The `top` property specifies that the top edge of the element should be positioned
    50% from the top of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `left` property specifies that the left edge of the element should be positioned
    50% from the left of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `transform` property specifies that the left edge of the element should be moved
    to the left by a distance of 50% of the width of the element.
    It also specifies that the top edge of the element
    should be moved up by a distance of 50% of the height of the element.
    So, if the element is 200 pixels
    wide, and 200 pixels tall, it will be moved to the left by 100 pixels, and moved up by 100
    pixels.  Combined with `top` and `left`, this allows the element to be perfectly centered
    both vertically and horizontally.
  </li>
</ul>

---

## Absolute Positioning

```css
#blah {
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
}
```

<ul style="font-size: 1.5rem;">
  <li>
    The `bottom` property specifies that the bottom edge of the element should be positioned
    50% from the bottom of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `right` property specifies that the right edge of the element should be positioned
    50% from the right of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `transform` property specifies that the left edge of the element should be moved
    to the right by a distance of 50% of the width of the element.
    It also specifies that the top edge of the element
    should be moved down by a distance of 50% of the height of the element.
    So, if the element is 200 pixels
    wide, and 200 pixels tall, it will be moved to the right by 100 pixels, and moved down by 100
    pixels.  Combined with `bottom` and `right`, this allows the element to be perfectly centered
    both vertically and horizontally.
  </ali>
  <li>
    This technique can sometimes require both `html` and `body` tags to have `height: 100%`.
  </li>
</ul>

---

## Absolute Positioning

```css
#blah {
  width: 200px; height: 200px;
  background-color: #FF0000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
```
<!-- .element: style="font-size: 1rem;" -->

<ul style="font-size: 1.5rem;">
  <li>
    The `top` property specifies that the top edge of the element should be positioned
    50% from the top of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `left` property specifies that the left edge of the element should be positioned
    50% from the left of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `margin-left` and `margin-top` properties achieve the exact same result as the
    `transform` property in the previous example.  They are forcing the element to move
    up by half of the height of the element, and to move left by half of the width of the element.
    So, if the element is 200 pixels wide, then `margin-left` should be set to half of that,
    which is `-100px`.  If the element is 200 pixels tall, then `margin-top` should be set
    to half of that, which is `-100px`.  As with the previous example, these allow the
    element to be perfectly centered both vertically and horizontally.
  </li>
  <li>
    This technique can sometimes require both `html` and `body` tags to have `height: 100%`.
  </li>
</ul>

---

## Absolute Positioning

```css
#blah {
  width: 200px; height: 200px;
  background-color: #FF0000;
  position: absolute;
  bottom: 50%;
  right: 50%;
  margin-right: -100px;
  margin-bottom: -100px;
}
```
<!-- .element: style="font-size: 1rem;" -->

<ul style="font-size: 1.5rem;">
  <li>
    The `bottom` property specifies that the bottom edge of the element should be positioned
    50% from the bottom of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `right` property specifies that the right edge of the element should be positioned
    50% from the right of the first ancestor element to have a `position` property set on it.
  </li>
  <li>
    The `margin-right` and `margin-bottom` properties achieve the exact same result as the
    `transform` property in the previous example(s).  They are forcing the element to move
    down by half of the height of the element, and to move right by half of the width of the element.
    So, if the element is 200 pixels wide, then `margin-right` should be set to half of that,
    which is `-100px`.  If the element is 200 pixels tall, then `margin-bottom` should be set
    to half of that, which is `-100px`.  As with the previous example, these allow the
    element to be perfectly centered both vertically and horizontally.
  </li>
  <li>
    This technique can sometimes require both `html` and `body` tags to have `height: 100%`.
  </li>
</ul>

---

## Standard Layout Definition and Terms

When we refer to the "Standard Layout", this usually refers to the type of layout methods
that we have used so far.  This mostly has included:

* `float: left;`
* `float: right;`
* `clear: both;`
* `margin-left: auto;`
* `margin-right: auto;`

---

## Standard Layout vs Positioning

<style type="text/css">
  table#std-vs-pos {
    font-size: 1.3rem;
    border-radius: 10px;
  }

  table#std-vs-pos thead tr {
    background-color: #0000FF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  table#std-vs-pos td:first-child {
    width: 14%;
  }

  table#std-vs-pos td:nth-child(2),
  table#std-vs-pos td:last-child {
    width: 43%;
  }

  table#std-vs-pos thead tr td {
    background-color: #0000FF;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  table#std-vs-pos thead tr td:first-child {
    border-top-left-radius: 10px;
  }

  table#std-vs-pos thead tr td:last-child {
    border-top-right-radius: 10px;
  }

  table#std-vs-pos tbody tr td {
    font-weight: normal;
    border: 1px solid #0000FF;
    vertical-align: top;
  }
</style>

<table id="std-vs-pos">
  <thead>
    <tr>
      <td>&nbsp;</td>
      <td>Pros</td>
      <td>Cons</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Standard</td>
      <td>
        <ul>
          <li>
            Floating allows you to easily build fluid/flexible/response layouts.
            Example: 2 elements might be side-by-side on one device, but then could
            be vertically stacked on another device
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            Floating does not always allow for a high level of precision in
            the placement of elements in the document.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Positioned</td>
      <td>
        <ul>
          <li>
            Allows for the exact/precise placement of elements
            in the document.  This is many times needed for animation effects
            and game development.
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            More difficult to build a responsive interface.
          </li>
          <li>
            Can possibly lead to unpredictable layouts when using on multiple devices.
            A common example of this is overlapping elements.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

---


## When to use Standard Layouts and Positioned Layouts

<style type="text/css">
  table#std-vs-pos-2 {
    font-size: 1.3rem;
    border-radius: 10px;
  }

  table#std-vs-pos-2 thead tr {
    background-color: #0000FF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  table#std-vs-pos-2 td:first-child {
    width: 14%;
  }

  table#std-vs-pos-2 td:nth-child(2),
  table#std-vs-pos td:last-child {
    width: 43%;
  }

  table#std-vs-pos-2 thead tr td {
    background-color: #0000FF;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }

  table#std-vs-pos-2 thead tr td:first-child {
    border-top-left-radius: 10px;
  }

  table#std-vs-pos-2 thead tr td:last-child {
    border-top-right-radius: 10px;
  }

  table#std-vs-pos-2 tbody tr td {
    font-weight: normal;
    border: 1px solid #0000FF;
    vertical-align: top;
  }
</style>

<table id="std-vs-pos-2">
  <thead>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Standard</td>
      <td>
        <ul>
          <li>
            Text Content
          </li>
          <li>
            News articles, blogs, social media, etc...
          </li>
          <li>
            Forms
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Positioned</td>
      <td>
        <ul>
          <li>
            Animation Effects
          </li>
          <li>
            Game Development
          </li>
          <li>
            Misc...
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

---

## When Is Floating Preferrable Over Positioning?
### Demo

`demos/floated_vs_positioned/`

---

## When Is Positioning Preferrable Over Floating?
### Demo

`assignments/01-outerspace/solution/index.html`

---

## Fixed Positioning

* Allows for an element to be absolute positioned, however it additionally
  will remain fixed in place, and will not move when scrolled.

---

## Fixed Positioning

```html
<div id="box"></div>
```

```css
#box {
  position: fixed;
  width: 200px;
  height: 200px;
  background-color: #FF0000;
  top: 20px;
  left: 20px;
}
```

---

## Fixed Positioning
### Demo and Practice

`labs/basic_fixed_position/example1.html`

---

### Fixed Positioning

* Can be good for a dedicated top or bottom nav bar.
* Be careful when setting a fixed position element to the left or right
  edge of the document.  Be sure not cause problems for responsive layouts.
* Be careful not to annoy your users with this.  Remember that to an employer,
  an intuitive user experience is more important than your creative expression.

---

## Relative Positioning

* Relative Positioning allows an element to be moved up, down, left, or right
  relative to it's current default location in the layout.
* This is different from Absolute Positioning which allows an element to be set
  from the absolute top, left, right, and bottom of an ancestor element.
* For more information check out
  [https://codemyviews.com/blog/the-lowdown-on-absolute-vs-relative-positioning](https://codemyviews.com/blog/the-lowdown-on-absolute-vs-relative-positioning)

---

## Relative Positioning

* You might notice that in this example the result of this is very similar
  to using `margin-left` and `margin-top`.

```html
<div id="box1"></div>
<div id="box2"></div>
```

```css
#box1, #box2 {
  width: 300px; height: 300px;
}

#box1 {
  background-color: #FF0000;
}

#box2 {
  background-color: #0000FF;
  position: relative;
  top: 40px;
  left: 40px;
}
```

---

## Relative Positioning
### Demo and Practice

`labs/basic_relative_position/example1.html`

---

## Static Positioning

* Setting `position: static;` would be the same as setting no `position` at all.
  It simply refers to the default layout method for an element.

---

## Z-Index

What is a Z-Index?

---

## Z-Index

What is a Z-Index?

* The Z-Index is the stacking order that an element appears on the document.
* If you have used Photoshop or Illustrator, you might be familiar with
  the features "Move Object Forward" and "Move Object Backward".  This is a
  similar concept.
* Z-Index is only relevant and necessary to consider when you have situations
  where elements might be stacking on top of other elements.

---

## Z-Index

What is the problem here? How do we fix this?

```html
<div id="box1"></div>
<div id="box2"></div>
```

```css
#box1, #box2 {
  position: absolute;
  top: 0px; left: 0px;
}
#box1 {
  background-color: #FF0000;
  width: 400px; height: 400px;
}
#box2 {
  background-color: #00FF00;
  width: 600px; height: 600px;
}
```

---

## Z-Index

Fixed!

```html
<div id="box1"></div>
<div id="box2"></div>
```

```css
#box1, #box2 {
  position: absolute;
  top: 0px; left: 0px;
}
#box1 {
  background-color: #FF0000;
  width: 400px; height: 400px;
  z-index: 20;
}
#box2 {
  background-color: #00FF00;
  width: 600px; height: 600px;
  z-index: 10;
}
```

---

## Z-Index
### Lab

`labs/basic_zindex/starter_code/basic_zindex.html`

---

## Z-Index

* The actual number you use does not matter, as long as it is a
  positive integer.

---

## Upcoming Homework
## Assignment Review

* `assignments/01-outerspace/specs/planets.png`
* `assignments/01-outerspace/solution/development_steps/`
* `assignments/01-outerspace/solution/index.html`

---

## Objectives Recap

* Define CSS Positioning and identify it's purpose
* Define and implement absolute positioning
* Define and implement relative positioning
* Define and implement fixed positioning
* Describe the appropriate and inappropriate times for using
  floating-based layouts vs absolute positioned layouts
* Define and implement the z-index

