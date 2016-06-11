![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 4
## Responsive Layouts
### Brendon Crawford

---

## Objectives

* Define and understand the purpose of Responsive Web Design
* Define and understand the purpose and important of fluid layouts
* Define and implement device targeting via media queries

---

## What is Responsive Web Design?

---

## What is Responsive Web Design?

> Responsive web design (RWD) is an approach to web design aimed at
> crafting sites to provide an optimal viewing and interaction experience-easy
> reading and navigation with a minimum of resizing, panning, and scrolling-across a
> wide range of devices (from desktop computer monitors to mobile phones).
>
> A site designed with RWD adapts the layout to the viewing environment by using
> fluid, proportion-based grids, flexible images, and CSS3 media queries, an
> extension of the @media rule, in the following ways:
>
> * The fluid grid concept calls for page element sizing to be in relative units
>   like percentages, rather than absolute units like pixels or points.
> * Flexible images are also sized in relative units, so as to prevent them from
>   displaying outside their containing element.
> * Media queries allow the page to use different CSS style rules based on
>   characteristics of the device the site is being displayed on, most commonly
>   the width of the browser.

<div class="citations">
  <p>Source</p>
  <ul>
    <li>
      <a href="https://en.wikipedia.org/wiki/Responsive_web_design">
        https://en.wikipedia.org/wiki/Responsive_web_design
      </a>
    </li>
  </ul>
</div>

---

## Main Components of RWD

These are the 2 main components of RWD that we will be focusing on
in this lesson:

1. Fluid layout/grid
2. Media queries for targeting specific devices

---

## Fluid Layout/Grid

* When you hear people talk about a fluid layout, this usually refers to
  the ability to resize the browser window and the page will still render
  correctly.
* In this class, we have already learned about using `float`, `clear`,
  `width`, `margin-left`, and `margin-right` for building fluid layouts.
* If you have been following along so far, you already have the knowledge
  for building fluid layouts.

---

## Media Queries
## And Device Targeting

CSS provides Media Queries for conditionally specifying CSS rules
only for certain devices or scenarios.  The 2 scenarios that we will
be focusing on in this lesson are:

* Browser width
* Screen width
* Device Type

---

## Media Queries
### Browser Width

* `min-width` specifies that the "Browser window is greater than or equal to ..."
* For example `min-width: 801px` means "Browser window is greater than or equal to 801 pixels"
* `max-width` specifies that the "Browser window is less than or equal to ..."
* For example `max-width: 800` means "Browser window is less than or equal to 800 pixels"

---

## Media Queries
### Browser Width

```css
/* Browser window greater than or equal to 801px */
@media (min-width: 801px)
{
  div#box {
    background-color: #0000FF;
  }
}

/* Browser window less than or equal to 800px */
@media (max-width: 801px)
{
  div#box {
    background-color: #FF0000;
  }
}
```

---

## Media Queries
### Device Screen Width

* `min-device-width` specifies that the "Device screen is greater than or equal to ..."
* For example `min-device-width: 801px` means "Device screen is greater than or equal to 801 pixels"
* `max-device-width` specifies that the "Device screen is less than or equal to ..."
* For example `max-device-width: 800` means "Device screen is less than or equal to 800 pixels"

---

## Media Queries
### Device Screen Width

```css
/* Device screen greater than or equal to 801px */
@media (min-device-width: 801px)
{
  div#box {
    background-color: #0000FF;
  }
}

/* Device screen less than or equal to 800px */
@media (max-device-width: 801px)
{
  div#box {
    background-color: #FF0000;
  }
}
```

---

## Media Queries
### Device Type

<style type="text/css">
  pre.media-query-basic-ex-2 {
    font-size: 1rem;
  }

  pre.media-query-basic-ex-2 code {
    max-height: 500px;
  }
</style>

```css
/* Device is a screen */
@media screen
{
  div#box {
    background-color: #0000FF;
  }
}

/* Device is a screen */
@media only screen
{
  div#box {
    background-color: #0000FF;
  }
}

/* Device is a printer */
@media print
{
  div#box {
    background-color: #FF0000;
  }
}
```
<!-- .element: class="media-query-basic-ex-2" -->

---

## Media Queries

<style type="text/css">
  pre.media-query-basic-ex-1 {
    font-size: 1rem;
  }

  pre.media-query-basic-ex-1 code {
    max-height: 500px;
  }
</style>

```html
<div id="box">Hello World</div>
```
<!-- .element: class="media-query-basic-ex-1" -->

```css
div#box {
  margin-left: auto; margin-right: auto;
  height: 400px;
}

/* Most laptops/desktops and window not small */
@media (min-device-width: 1201px) and (min-width: 641px)
{
  div#box {
    width: 50%;
    background-color: #0000FF;
  }
}

/* Most Handhelds or window is small. */
@media
  only screen and (max-device-width: 1200px),
  only screen and (max-width: 640px)
{
  div#box {
    width: 90%;
    background-color: #FF0000;
  }
}
```
<!-- .element: class="media-query-basic-ex-1" -->

---

## Media Queries
### Demo and Practice

`labs/basic_mediaqueries/starter_code/basic_mediaqueries.html`
<!-- .element: style="font-size: 1.6rem;" -->

---

## Media Queries
### Misc

* Try not to over-use media queries
* It is perfectly fine to only support two devices if you wish:
    * Laptop/Desktop
    * Mobile/Handheld/Tablet
* Be sure to have a catchall that will work correctly if none of you
  media queries apply.

---

## Media Queries
### References

* http://annikalidne.com/code/the-insanely-ocd-mobile-media-queries-css-file
* https://css-tricks.com/snippets/css/media-queries-for-standard-devices/
* http://viewportsizes.com/

---

## Objectives Recap

* Define and understand the purpose of Responsive Web Design
* Define and understand the purpose and important of fluid layouts
* Define and implement device targeting via media queries
