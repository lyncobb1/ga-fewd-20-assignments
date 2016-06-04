![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 3
## Advanced CSS Selectors
### Brendon Crawford

---

## Objectives

* Understand and be able to use Pseudo-Class Selectors
* Understand and be able to use Attribute Selectors
* Understand and be able to use Descendant Combinators
* Understand and be able to use Child Combinators

---

## What is a CSS Selector?

### Why is it called a "Selector"?

---

## What types of selectors have we already learned about?

---

## What types of selectors have we already learned about?

* `Tag name selector`
* `ID selector`
* `Class name selector`

---

## More CSS Selectors

---

## Pseudo-Class Selector

> A CSS pseudo-class is a keyword added to selectors that
> specifies a special state of the element to be selected

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
        https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
      </a>
    </li>
  </ul>
</div>

---

## Pseudo-Class Selector
### `:hover`

> The :hover CSS pseudo-class matches when the user designates an element
> with a pointing device, but does not necessarily activate it.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover">
        https://developer.mozilla.org/en-US/docs/Web/CSS/:hover
      </a>
    </li>
  </ul>
</div>

---

## Pseudo-Class Selector
### `:hover`

```html
<a href="./portfolio.html">Hello World</a>
```

```css
a:hover {
  color: #FF9D11;
}
```

---

## Pseudo-Class Selector
### `:hover`

```html
<a id="portfoliolink" href="./portfolio.html">Hello World</a>
```

```css
a#portfoliolink:hover {
  color: #FF9D11;
}
```

---

## Pseudo-Class Selector
### `:hover`

```html
<a
  class="links"
  id="portfoliolink"
  href="./portfolio.html">Hello World</a>
```

```css
a#portfoliolink.links:hover {
  color: #FF9D11;
}
```

---

## Pseudo-Class Selector `:hover`
### Demo and Practice

[labs/selectors/pseudoclass.html](labs/selectors/pseudoclass.html)

---

## Pseudo-Class Selector
### `:first-child`

> The `:first-child` CSS pseudo-class represents any element
> that is the first child element of its parent.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child">
        https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child
      </a>
    </li>
  </ul>
</div>

---

## Pseudo-Class Selector
### `:first-child`

```html
<section>
  <article class="myarticle">Article 1</article>
  <article class="myarticle">Article 2</article>
</section>
```

```css
article.myarticle:first-child {
  background-color: #FF00B8;
}
```

---

## Pseudo-Class Selector
### Demo and Practice
### `:first-child`

[labs/selectors/pseudoclass.html](labs/selectors/pseudoclass.html)

---

## Attribute Selectors

> Attribute selectors select an element using the presence
> of a given attribute or attribute value.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors">
        https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
      </a>
    </li>
  </ul>
</div>

---

## Attribute Selectors

```html
<img id="avatar" src="./avatar.jpg" alt="My Avatar" />
```

```css
img[alt] {
  border: 2px solid #8E00FF;
}

img#avatar[alt] {
  border: 2px solid #8E00FF;
}

#avatar[alt] {
  border: 2px solid #8E00FF;
}

img[alt="My Avatar"] {
  border: 2px solid #8E00FF;
}
```

---

## Attribute Selectors

Will this match?

```html
<img id="dogpic" src="./dog.jpg" alt="Dog Picture" />
```

```css
img[alt="My Avatar"] {
  border: 2px solid #8E00FF;
}
```

---

## Attribute Selectors

* Try not to use attribute selectors as a replacement for IDs and Class names!
  There will be some situations where you must use an attribute selector,
  but that is beyond scope of this class.

```html
<img id="dogpic" src="./dog.jpg" alt="Dog Picture" />
```

Preferred:

```css
img#dogpic {
  border: 2px solid #8E00FF;
}
```

Not Preferred:

```css
img[alt="My Avatar"] {
  border: 2px solid #8E00FF;
}
```

---

## Attribute Selectors
### Demo and Practice

[labs/selectors/attribute.html](labs/selectors/attribute.html)

---

## Descendant Combinator

> A descendant combinator -- typically represented by a single space
> character in the form of ```selector1 selector2``` -- combines two selectors
> such that elements matched by the second selector (```selector2```) are selected
> if they have an ancestor element matching the first selector (```selector1```).
> Selectors that utilize a descendant combinator are called *descendant selectors*.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors">
        https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors
      </a>
    </li>
  </ul>
</div>

---

## Descendant Combinator

You will use this every day, so make sure you learn it!

```html
<section>
  <div>
    <p>
      <a href="./portfolio.html">Portfolio</a>
    </p>
    <div>
      <a href="./about.html">About</a>
    </div>
  </div>
</section>
```

```css
section p a {
  color: #00FF00;
}

section div div a {
  color: #0000FF;
}
```

---

## Descendant Combinator

```html
<section>
  <div>
    <p id="para1">
      <a href="./portfolio.html">Portfolio</a>
    </p>
    <p id="para2">
      <a href="./about.html">About</a>
    <p>
  </div>
</section>
```

```css
section p#para1 a {
  color: #00FF00;
}

section p#para2 a {
  color: #0000FF;
}

section a:hover {
  font-weight: bold;
}
```

---

## Descendant Combinator
### Demo and Practice

[labs/selectors/descendant.html](labs/selectors/descendant.html)

---

## Child Combinator

> The child combinator (`>`)  separates two selectors and matches only those elements matched
> by the second selector that are direct children of elements matched by the first. 

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors">
        https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors
      </a>
    </li>
  </ul>
</div>

---

## Child Combinator

```html
<section>
  <div>
    <p>
      <a class="mylink" href="./portfolio.html">Portfolio</a>
    </p>
    <div>
      <a href="./about.html">About</a>
    </div>
  </div>
</section>
```

```css
section > div > p > a {
  color: #00FF00;
}

section > div a {
  color: #0000FF;
}

section p > a.mylink {
  color: #0000FF;
}
```

---

## Child Combinator

Does this match?

```html
<section>
  <div>
    <p>
      <a class="mylink" href="./portfolio.html">Portfolio</a>
    </p>
  </div>
</section>
```

```css
section > p > a {
  color: #0000FF;
}
```

---

## Descendant Combinator
### Demo and Practice

[labs/selectors/descendant.html](labs/selectors/descendant.html)

---

## Advanced CSS Selectors
### Demo and Practice

[labs/selectors/all.html](labs/selectors/all.html)

---

## Advanced CSS Selectors

### Cheat method for finding CSS selectors???

---

## LESSON END

### Objectives Recap

* Understand and be able to use Pseudo-Class Selectors
* Understand and be able to use Attribute Selectors
* Understand and be able to use Descendant Combinators
* Understand and be able to use Child Combinators


