![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## HTML Basics
### Brendon Crawford

---

## Objectives

* Describe the basic conceptual idea of The Internet
* Describe the basic conceptual idea of the World Wide Web
* Identify the difference between structured and unstructured data
* Add structure to unstructured data
* Define the basic components of HTML such as tags and attributes
* Create basic HTML web pages

---

## What is the Internet?

---

## What is the Internet?

* The internet is a vast network of connected devices whch communicate via TCP/IP
* Early Internet precursors were first created around 1962
* The modern Internet was created in 1982 by Vint Cerf and Bob Kahn

---

## Internet Whiteboard Overview

---

## What is the World Wide Web?

* The Web is an information system of documents and other resources (including videos and images) which
  are identified by URLS and are accesed via the Internet
  using a protocol called HTTP.
* The Web was created by Tim Berners Lee in 1989
* The "Web" operates on top of the Internet
* URLS are "Uniform Resource Locators" or "Address"
* Documents usually refers to "Web Pages"
* Web Pages are usually created with HTML

---

## World Wide Web Whiteboard Overview

---

## What is HTML?

---

## What is HTML?

* HTML is a __markup language__ that forms the foundation of all web pages.
* In this course when we will be using "HTML" and "HTML5" interchangeably.

---

## What is a Markup Language?

* A markup language provides structure to data.
* HTML is a type of markup language that allows us to structure our data.

---

## What is data?

---

## Types of Data

* Unstructured Data
* Structured Data

---

## Unstructured Data

---

## Structuring Data Whiteboard Example

Adding basic structure to a To-Do List

---

## Group Exercise

### Structuring Data

Add structure to a chocolate chip cookie recipe.

* First write down the recipe
* Then, describe each component or section of the recipe

---

## Unstructered Data

### To-Do List

[https://codepen.io/brencraw/pen/vGMJbZ?editors=1000](https://codepen.io/brencraw/pen/vGMJbZ?editors=1000)

---

## Structured HTML Data

### To-Do List

[https://codepen.io/brencraw/pen/mPgMNp?editors=1000](https://codepen.io/brencraw/pen/mPgMNp?editors=1000)

---

## HTML Syntax

![HTML Syntax](img/unit_1/tags.png)

---

## HTML Syntax

![HTML Syntax](img/unit_1/tags_attributes.png)

---

## HTML Basics

### Lab Exercise

#### Playing With HTML

* [https://codepen.io/brencraw/pen/EKJbbR?editors=1000](https://codepen.io/brencraw/pen/EKJbbR?editors=1000)

---

## HTML Basics

### Full Web Page

See [examples/todo_list/index.html](examples/todo_list/index.html)

---

## HTML Basics

### Lab Exercise

Convert cookie recipe to html.

See [labs/cookie_recipe/README.md](labs/cookie_recipe/README.md)

---

## HTML Basics

### Lab Exercise

Convert GA Press Release to html.

See [labs/ga_press_release/README.md](labs/ga_press_release/README.md)

---

## Images

* Images are placed using the ```<img>``` tag.

```
<img src="./images/imageName.jpg" alt="alternative text" />
```

---

## Images

The `img` tag requires a `src` attribute, which tells the browser where to find the image.

---

## Images

### Paths

How would you write the src?

* Relative child paths
* Relative parent paths
* Absolute paths
* Full URLs

---

## Images

### Paths

#### Relative child paths

```
<img src="./images/happyface.jpg" />
<img src="./images/large/happyface.jpg" />
```

* Relative child paths begin searching in current directory, then will
  traverse into sub-directories.

---

## Images

### Paths

#### Relative parent paths

```
<img src="../images/happyface.jpg" />
<img src="../../images/large/happyface.jpg" />
<img src="../../../images/large/happyface.jpg" />
```

* Relative parenht paths begin searching in parent directories, then will
  traverse into sub-directories.
* Each instance of `../` means to go up by one parent directory.

---

## Images

### Paths

#### Absolute paths

```
<img src="/files/websites/images/happyface.jpg" />
```

* Absolute URLs start with a `/`

---

## Images

### Paths

#### Full URLs

```
<img src="https://i.imgur.com/Q3XIijR.jpg" />
```

---

## Images

### `alt` attribute

```
<img src="puppy.jpg" alt="My cute puppy" />
```

* A piece of text to be used in lieu of the image when the image is unavailable

Note:

* Using `alt` attributes has the added benefit of giving search engines more linguistic
  context about the image as it is used on your page.  Reasons an image may not load:
    * There was a connection error, the browser didn't download the image.
    * The file was not found, perhaps because the image got moved elsewhere and the page wasn't updated
      yet to reflect the change.
    * The user is running a text-based browser such as an older phone with a WAP-style browser,
      or a non-graphical browser like lynx.
    * The user is using a screen reader because she has low vision, which will read the `alt` text aloud
      or present it through a braille reader.

---

## Images

There are three main image file formats:

* `.png`
* `.gif`
* `.jpg`

---

## Image File Formats

#### .png

* Supports transparency and semi-transparency, great for logos, icons, and repeating background tiles.
* Almost always preferable to a `gif`, unless semi-transparency is not needed, and the `gif` format is significantly smaller.

---

## Image File Formats

#### .gif

* Can have basic transparency, typically a `png` is used instead.

---

## Image File Formats

#### .jpg

* No transparency, can be stored at different compression levels with varying amounts of "lossy-ness",
  typically the best format for photos. (Try to balance between photo quality and file size.)

---

## Images

### Lab Exercise

Add some images to your Cookie Recipe Web Page

See [labs/cookie_recipe/README.md](labs/cookie_recipe/README.md)
