![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 7
## HTML Forms
### Brendon Crawford

---

## Objectives

* Understand the purpose of HTML forms
* Understand and know how to implement the various HTML form inputs

---

## What are HTML Forms?

> HTML Forms are one of the main points of interaction between a user and a web
> site or application. They allow users to send data to the web site. Most of the
> time that data is sent to the web server, but the web page can also intercept it
> to use it on its own.  An HTML Form is made of one or more widgets. Those widgets
> can be text fields (single line or multiline), select boxes, buttons, checkboxes,
> or radio buttons. Most of the time, those widgets are paired with a label that
> describes their purpose.

<div class="citations">
  <p>Source</p>
  <ol>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form">
        https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/My_first_HTML_form
      </a>
    </li>
  </ol>
</div>

---

## Why are Forms Important?

---

## Why are Forms Important?

They are one of the primary methods for receiving data from a user.

---

## Examples of when to use forms

* Mortgage calculator
* Zip Code lookup
* Name and email in signup
* Username and password for logging in

---

## First Forms Code

`labs/01-first_form`

---

## Basic Elements Lab

`labs/02-basic_elements`

---

## Basic Structure of a Form

```html
<form>
  <!-- Form Elements Go Here -->
</form>
```

---

## Basic Examplee of a Form

```html
<form>
  <input id="username" name="username" type="text" />
  <input type="submit" value="Submit" />
</form>
```

---

## Text Input

* Text input is a basic input box for any kind of text.  It is usually
  used for names, addresses, etc.
* You should always specify an `id` attribute and a `name` attribute.
* In many cases, you may want to make the `id` and the `name` the same.

```html
<input type="text" id="username" name="username" />
```

---

## Multi Line Textarea Input

* A textarea is used for when you want the user to be able to enter
  a larger block of text.

```html
<textarea id="bio" name="bio"></textarea>
```

---

## Password Input

* Password input is used for passwords.  The text will be
  obfuscated with stars or dots.

```html
<input type="password" id="pass" name="pass" />
```

---

## Dropdown Select Input

* A select input allows for a user to select from a pre-determined
  set of options.

```html
<select id="animal" name="animal">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="bird">Bird</option>
</select>
```

Fun examples of advances styling for select fields:
[https://codepen.io/ericrasch/pen/zjDBx](https://codepen.io/ericrasch/pen/zjDBx)

---

## Dropdown Select Input With Option Groups

* Options can be grouped

```html
<select id="animal" name="animal">
  <optgroup label="Dogs">
    <option value="pitbull">Pit Bull</option>
    <option value="yorkshire_terrier">Yorkshire Terrier</option>
  </optgroup>
  <optgroup label="Birds">
    <option value="parrot">Parrot</option>
    <option value="pidgeon">Pidgeon</option>
  </optgroup>
</select>
```

---

## Dropdown Select Input With Default Selection

* You can specify a default selected option

```html
<select id="animal" name="animal">
  <optgroup label="Dogs">
    <option value="pitbull">Pit Bull</option>
    <option value="yorkshire_terrier">Yorkshire Terrier</option>
  </optgroup>
  <optgroup label="Birds">
    <option value="parrot" selected>Parrot</option>
    <option value="pidgeon">Pidgeon</option>
  </optgroup>
</select>
```

---

## Dropdown Select Input With Size

* You can specify a size for a select input

```html
<select id="animal" name="animal" size="3">
  <optgroup label="Dogs">
    <option value="pitbull">Pit Bull</option>
    <option value="yorkshire_terrier">Yorkshire Terrier</option>
  </optgroup>
  <optgroup label="Birds">
    <option value="parrot" selected>Parrot</option>
    <option value="pidgeon">Pidgeon</option>
  </optgroup>
</select>
```

---

## Dropdown Multiple Select Input With Multi Select

* You can specify that multiple options can be selected

```html
<select id="animal" name="animal" size="3" multiple>
  <optgroup label="Dogs">
    <option value="pitbull">Pit Bull</option>
    <option value="yorkshire_terrier">Yorkshire Terrier</option>
  </optgroup>
  <optgroup label="Birds">
    <option value="parrot" selected>Parrot</option>
    <option value="pidgeon">Pidgeon</option>
  </optgroup>
</select>
```

---

## Submit Button Input

* A submit button submits the form.
* You do not usually need to set an `id` and/or `name` attribute
  for a submit button, but sometimes you will need to.

```html
<input type="submit" value="Button Text Is Here!" />
```

---

## Checkbox Input

* A checkbox is for a simple yes/no (on/off) type of input
  or question.

```html
<input type="checkbox" id="newsletter" name="newsletter" />
```

For some fun examples of advanced checkbox styling, see:
[https://codepen.io/bbodine1/pen/novBm](https://codepen.io/bbodine1/pen/novBm)

---

## Radio Button Input

* A radio button allows for one choice between multiple options.  It can
  be similar to a `<select>`.
* Since there will be multiple `<input>` elements, and since `id` attributes
  must be globally unique, you will not usually assign an `id` to the radio elements.
  Instead, you will need to specify an id to a parent element.  You will still
  want to specify a name to the radio elements.

```html
<input type="radio" id="food_pizza" name="food" value="pizza" />
<input type="radio" id="food_burritos" name="food" value="burritos" />
<input type="radio" id="food_tofu" name="food" value="tofu" />
```

---

## Radio Button Input

For some interesting examples of advanced radio button styling, see:
[https://codepen.io/AngelaVelasquez/pen/Eypnq](https://codepen.io/AngelaVelasquez/pen/Eypnq)

---

## Number Input

* A number input can be used to get a number from the user
* You can use `min` and `max` attributes to specify the minimum
  and maximum values for the number.

```html
<input type="number" min="5" max="20" id="age" name="age" />
```

---

## Date Input

* This can be used by a user to select a date

```html
<input type="date" />
```

---

## DateTime Input

* This can be used by a user to select a date and time

```html
<input type="datetime-local" />
```

---

## Color Picker Input

* This can be used by a user to select a color.
* You will probably use this far less often then you think you will.

```html
<input type="color" />
```

---

## Required

A form element can be specified to be required:

```html
<input type="email" required />

<select id="animal" required>
  <option value="dog">Dog</option>
</select>

<input type="password" required />
```

---

## Readonly

* An element specified as readonly cannot have it's value
  changed by the user

```html
<input type="text" value="Hello World" readonly />
```

---

## Placeholders

* A placeholder is the descriptive text inside the form element.
* It does not work on all types of form elements

```html
<input type="password" placeholder="Enter Your Password" />
```

---

## Default Values

* You can specify a default value for a form element.
* This is the exact same thing as if you had typed the text in the field.
* This is not the same as a placeholder.  A placeholder is just
  descriptive text, but it is not the actual form value text.

```html
<input type="text" value="John Doe" placeholder="Enter your name" />
```

---

## Min and Max Lengths

* This will allow you to enforce minimum and maximum lengths on
  certain types of inputs

```html
<input type="text" minlength="2" maxlength="5" id="city" name="city" />
```

---

## Labels

* Labels allow you to associate text labels with an input
* The `for` attribute of the label points to the `id` attribute
  of the form element.

```html
<label for="username">Username</label>
<input type="text" id="username" name="username" />
```

---

## Labels With Checkboxes

* You can also use labels with checkboxes

```html
<label for="newsletter">Sign Up For Newsletter?</label>
<input type="checkbox" id="newsletter" name="newsletter" />
```

---

## Labels With Radios

```html
<label for="animal_dog">Dog</label>
<input type="radio" id="animal_dog" name="animal" value="dog" />

<label for="animal_cat">Cat</label>
<input type="radio" id="animal_cat" name="animal" value="cat" />

<label for="animal_bird">Bird</label>
<input type="radio" id="animal_bird" name="animal" value="bird" />
```

---

## Fieldsets

* Fieldsets are useful for grouping together labels and inputs

```html
<fieldset>
  <label for="newsletter">Sign Up For Newsletter?</label>
  <input type="checkbox" id="newsletter" name="newsletter" />
</fieldset>
<fieldset>
  <label for="username">Username</label>
  <input type="text" id="username" name="username" />
</fieldset>
```

---

## Signup Form Lab

`labs/03-signup_form`

---

## Objectives Recap

* Understand the purpose of HTML forms
* Understand and know how to implement the various HTML form inputs
