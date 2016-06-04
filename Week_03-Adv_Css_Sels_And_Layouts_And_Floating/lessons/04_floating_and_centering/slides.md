![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 3
## CSS Floating
### Brendon Crawford

---

## Objectives

* Understand the purpose of floating elements
* Understand and demonstrate how to float elements
* Understand the purpose of clearing elements
* Understand and demonstrate how to clear elements

---

## CSS Floating

### What is "floating"?

---

## CSS Floating

### What is "floating"?

> The `float` CSS property specifies that an element should be taken from the normal flow and
> placed along the left or right side of its container, where text and inline elements
> will wrap around it.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">
        https://developer.mozilla.org/en-US/docs/Web/CSS/float
      </a>
    </li>
  </ul>
</div>

---

## CSS Floating

<iframe width="560" height="315" src="https://www.youtube.com/embed/xara4Z1b18I" frameborder="0" allowfullscreen></iframe>

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=xara4Z1b18I">
        https://www.youtube.com/watch?v=xara4Z1b18I
      </a>
    </li>
  </ul>
</div>

---

## CSS Floating

What are some common use cases for floating?

---

## CSS Floating

What are some common use cases for floating?

* Placing text adjacent to an image
* Multi column layouts
* Placing an element to the left of a container and/or an
  element to the right of the container.

---

## CSS Floating

Basic floating example

```html
<section id="mycontent">
  <article id="article1">Column 1</article>
  <article id="article2">Column 2</article>
  <article id="article3">Column 3</article>
</section>
```

```css
section#mycontent > article {
  float: left;
  width: 200px;
  border: 2px solid #0088FF;
}
```

---

## CSS Floating
### Demo and Practice
#### Basic 3 column layout with no clearing

[labs/floating/three_column.html](labs/floating/three_column.html)

---

## CSS Floating

### Clearing

> The `clear` CSS property specifies whether an element can be next to floating elements
> that precede it or must be moved down (cleared) below them. The `clear` property applies
> to both floating and non-floating elements.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/clear">
        https://developer.mozilla.org/en-US/docs/Web/CSS/clear
      </a>
    </li>
  </ul>
</div>

---

## CSS Floating

Basic floating example with clearing

```html
<section id="mycontent1">
  <article id="article1">Column 1</article>
  <article id="article2">Column 2</article>
  <article id="article3">Column 3</article>
  <div class="clearit"></div>
</section>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Pellentesque ut nibh eu neque vehicula molestie in at velit.
</p>
```

```css
section#mycontent1 > article {
  float: left;
  width: 200px;
  border: 2px solid #0088FF;
}

.clearit {
  clear: both;
}
```

---

## CSS Floating

### Where to clear?

* It is usually preferrable to place your clearing element
  within the parent element of the floated elements.
* It is usually not preferrable to place the clearing element
  outside the parent element of the floated elements.

---

## CSS Floating

### Where to clear?

Usually Preferred

```html
<section id="mycontent1">
  <article id="article1">Column 1</article>
  <article id="article2">Column 2</article>
  <div class="clearit"></div>
</section>
```

Usually Not Preferred

```html
<section id="mycontent1">
  <article id="article1">Column 1</article>
  <article id="article2">Column 2</article>
</section>
<div class="clearit"></div>
```

---

## CSS Floating
### Demo and Practice
#### Basic 2 column layout with clearing

[labs/floating/three_column.html](labs/floating/three_column.html)

---

## CSS Floating

Important notes

* Floated elements must be block elements.
* An element cannot be shifted to the center. This is achieved using other tricks.
* A floated element must have have a `width` set.
* The clearing element should usually go immediately after the last floated element.

---

## CSS Element Centering

If an element cannot be floated to the center, how can an
element be placed in the center?

---

## CSS Element Centering

If an element cannot be floated to the center, how can an
element be placed in the center?

```html
<div id="dogbio">
  Charlie is a big grey poodle. Charlie likes to chase balls
  and play with cats. He is a great dog.
</div>
```

```css
div#dogbio {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}
```

---

## CSS Element Centering

If an element cannot be floated to the center, how can an
element be placed in the center?

* The element must be a block element
* The element must have a set `width`
* The element must have `margin-left` and `margin-right` set to `auto`.

---

## CSS Element Centering
### Demo and Practice
#### Auto Margin Technique

1. Lab Exercise 1
2. Lab Exercise 2
3. Lab Exercise 3

[labs/floating//left_right_center.html](labs/floating/left_right_center.html)

---

## CSS Element Centering

The auto-margin trick for centering a block element should not be confused
with the technique for centering inline text. Remember that block elements
and inline elements are treated differently in many ways. If you want to
center inline text, you can simply use the `text-align` property.

---

## CSS Element Centering
### Demo and Practice
#### Block And Inline Elements

1. Lab Exercise 4

[labs/floating//left_right_center.html](labs/floating/left_right_center.html)

---

## CSS Floating And Centering

### Objectives Recap

* Understand the purpose of floating elements
* Understand and demonstrate how to float elements
* Understand the purpose of clearing elements
* Understand and demonstrate how to clear elements
