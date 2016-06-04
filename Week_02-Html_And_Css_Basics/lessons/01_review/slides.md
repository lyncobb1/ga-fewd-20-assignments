![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 1 Homework Review
### Brendon Crawford

---

## Objectives

* Define, identify, and understand the importance HTML syntax
* Know how and when to validate HTML
* Know and demonstrate the difference between void elements, and non-void elements
* Know how to properly use HTML indentation.
* Know that the `<center>` tag should never be used.
* Know and understand the basic HTML document structure
* Understand how to use relative paths

---

## Syntax

What is syntax, and what are syntax errors?

---

## Syntax

What is syntax, and what are syntax errors?

* _syntax_ refers to the rules regarding proper words, symbols, and commands
* _syntax errors_ refer to the improper use of words, symbols, and commands

---

## Syntax

What is an example of an HTML syntax error?

---

## Syntax

What is an example of an HTML syntax error?

```
<<img src="./avatar.png" />
```

```
<img src="./avatar.png" //>
```

```
<img src="./avatar.png"
```

```
<body>
  <p>Hello World</p>
</body>
</body>
```

```
<body>
<body>
  <p>Hello World</p>
</body>
```

---

## Syntax

* Examples of syntax errors?
* Examples of non-syntax errors?

---

## Validating Your HTML

Always validate your HTML!

[https://validator.w3.org/#validate_by_upload](https://validator.w3.org/#validate_by_upload)

---

## HTML Tag Types

Most HTML elements have a start tag and an end tag, with
contents between the tags:

```
<p>These are text contents</p>
```

```
<p><a href="http://example.com/">This is a link in a paragraph</a></p>
```

---

## HTML Tag Types

Some HTML elements do not contain any contents.
These are called _void elements_.
Sometimes, these are also called a _self-closing tag_.

```
<img src="./avatar.png" />
```

```
<link rel="stylesheet" href="./styles.css" />
```

---

## HTML Tag Types

A _void element_ can be written in two different ways:

### Preferred:

```
<img src="./avatar.png" />
```

### Acceptable:

```
<img src="./avatar.png">
```

---

## HTML Tag Types

Be careful to remember the difference between a _end tag_,
and a _void element_ (_self-closing tag_)

### End Tag

```
</body>
```

### Void Element (Self-Closing Tag)

```
<hr />
```

---

## HTML Tag Types

* Examples of start tags
* Examples of end tags
* Examples of void elements (self-closing tags)

---

## Indentation

* Indentation is optional, but you should consider it mandatory.
* You may uses tabs or spaces, but I recommend spaces.
* You may use as many spaces as you want, but I recommend 2.

---

## Indentation

Is this good or bad indentation?

```
<body>
<div>
<p>Hello World</p>
</div>
</body>
```

---

## Indentation

### Good

```
<body>
  <div>
    <p>
      Hello World
    </p>
  </div>
</body>
```

### Bad

```
<body>
<div>
<p>Hello World</p>
</div>
</body>
```

### Horrible

```
<body><div><p>Hello World</p></div></body>
```

---

## `<center>` Tag

The `<center>` tag is not valid HTML5

Why is it not valid HTML5?

---

## `<center>` Tag

What is the proper way to horizontally center text and elements?

---

## `<center>` Tag

What is the proper way to horizontally center text and elements?

```
<p>Helllo World</p>
```

```
p {
  text-align: center;
}
```

---

## HTML Document Structure

Your HTML5 code *MUST ALWAYS* look like this:

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>TITLE HERE</title>
    <!-- OTHER HEAD ELEMENTS GO HERE -->
  </head>
  <body>
    <!-- BODY ELEMENTS GO HERE -->
  </body>
</html>
```

---

## Paths

Paths apply to many situations

```
<img src="./avatar.png" />
```

```
<link rel="stylesheet" href="./styles.css" />
```

```
<a href="./portfolio.html">My Portfolio</a>
```

---

## Paths

* relative paths
* absolute paths
* URL paths

---

## Paths

### Relative Paths

#### Preferred

```
<img src="./images/avatar.png" />
```

#### Acceptable

```
<img src="images/avatar.png" />
```

---

## Paths

### Relative Parent Paths

#### Go up 1 directory

```
<img src="../images/avatar.png" />
```

#### Go up 2 directories

```
<img src="../../images/avatar.png" />
```

#### Go up 3 directories

```
<img src="../../../images/avatar.png" />
```

---

## Objectives Recap

