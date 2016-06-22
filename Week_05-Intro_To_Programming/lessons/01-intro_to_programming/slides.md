![GeneralAssemb.ly](img/icons/FEWD_Logo.png)

# FEWD
## Week 5
## Intro To Programming
### Brendon Crawford

---

## Objectives

* Define and understand the purpose of Computer Programming
* Define and demonstrate working knowledge of pseudo-code
* Read and write pseudo-code using variable assignments
* Read and write pseudo-code for conditional/if statements
* Read and write pseudo-code for loops/while statements
* Read and write pseudo-code for functions
* Understand how to combine the multiple parts of computer programming to
  build basic abstract applications, such as a thermostat.

---

## What is programming?

---

## What is programming?

Telling the computer how to perform a certain task using a set of specific instructions.

---

## Why is programming important?

---

## Why is programming important?

* Users expect their technology products to provide a dynamic, interactive experience
* Programming can enable that experience

---

## How is programming different from what you have already learned?

---

## How is programming different from what you have already learned?

* HTML describes and provides structure to your data
* CSS defines the presentation of your data
* Programming provides dynamic behaviors for your data and your user interface

---

## What are real world examples where we see programming?

---

## What are real world examples where we see programming?

* Web pages
* Digital watches
* Bread toasters
* Ovens
* Televisions
* Thermostats

---

## Pseudo-Code
### What is pseudo-code?

* Pseudo-code is an informal language used by humans to represent computer programs.
* Pseudo-code allows us to easily convey ideas about programming using plain English
  (or any other spoken/written language)

---

## Plain Errands List

* Pickup the kids from school
    * If kids are not waiting outside, drive around the block and try again.
* Pickup socks from the dry cleaner
    * If dry cleaner does not have the socks, go buy new socks from Walmart.
    * If dry cleaner does have the socks, put them in the purple bag.
* Put gas in the car
    * If cost of gas is more than $50, use the credit card
    * If cost of gas is less than $50, use cash

---

## Errands List in Pseudo-Code

```python
drive_to_school;
while kids_are_not_waiting_outside:
    drive_around_the_block;
pickup_kids;
pickup_socks_from_the_dry_cleaner;
    if dry_cleaner_does_not_have_socks:
        buy_new_socks_from_walmart;
    else:
        put_socks_in_purple_bag;
put_gas_in_car;
    if cost_of_gas > 50:
        pay_with_credit_card;
    else:
        pay_with_cash;
```

---

## Main Concepts

In this lesson, we will be learning about 4 major components of programming.

* Variable Assignment
* Conditionals
* Loops
* Functions

---

## Statements
### Pop Quiz!

```python
x = 2 + 3
```

* Question: What will be the value of `x`?

---

## Statements

```python
x = 2 + 3
```

* Question: What will be the value of `x`?
* Answer: `x` is `5`

---

## Statements

```python
x = 2 + 3
```

* In programming, we call this a _statement_.
* A _statement_ is similar to a _sentence_ in English. It should be a complete idea.

---

## Statements

```python
x = 2 + 3
```

* There are different types of _statements_.
* This type is called a _variable assignment statement_.

---

## Variables
### What is a variable?

---

## Variables
### What is a variable?

A variable is a placeholder or reference to some other value.

---

## Variable Assignment Statements

![Variable Assignment Statement](classes/Week_05-Intro_To_Programming/lessons/01-intro_to_programming/images/variable_assignment.png)

---

## Variables

A variable can be thought of as being like a raffle ticket with a person's name on it.
The ticket is a reference to a person, but it is not the actual person.

---

## Variable Assignment Statements
### Pop Quiz!

```python
x = 2 + 3
y = x + 1
```

* Question: What will be the value of `y`?

---

## Variable Assignment Statements

```python
x = 2 + 3
y = x + 1
```

* Question: What will be the value of `y`?
* Answer: The value of `y` is `6`.

---

## Variables

```python
x = 2 + 3
y = x + 1
```

* Question: What are the variables in this code?

---

## Variables

```python
x = 2 + 3
y = x + 1
```

* Question: What are the variables in this code?
* Answer: The variables in this code are `x` and `y`.
  Both `x` and `y` are references to numeric values.

---

## Statements
### Pop Quiz!

```python
x = 2 + 3
y = x + 1
```

* Question: How many statements are in this code?

---

## Statements

```python
x = 2 + 3
y = x + 1
```

* Question: How many statements are in this code?
* Answer: There are 2 statements here.  A statement is many times, but not always,
  contained on a single line.  It should represent a complete idea.

---

## Variable Assignment Statements
### Pop Quiz!

```python
x = 2 + 3
x = x + 4
```

* Question: What is the final value of `x`?

---

## Variable Assignment Statements

```python
x = 2 + 3
x = x + 4
```

* Question: What is the final value of `x`?
* Answer: The final value of `x` is `9`.

---

## Variable Assignment Statements
### Pop Quiz!

```python
x = 3 * 2
y = x - 1
x = x + 3
z = y + x
z = z / 2
```

* Question: What is the final value of `z`?

---

## Variable Assignment Statements

```python
x = 3 * 2
y = x - 1
x = x + 3
z = y + x
z = z / 2
```

* Question: What is the final value of `z`?
* Answer: The final value of `z` is `7`.

---

## Variable Assignment Statements
### Pop Quiz!

```python
x = (((2 * 5) + (4 - 1)) - 2)
```

* Question: What is the final value of `x`?

---

## Variable Assignment Statements

```python
x = (((2 * 5) + (4 - 1)) - 2)
```

* Question: What is the final value of `x`?
* Answer: The value of `x` is `11`

---

## Variable Assignment Statements
### Recap

* What is a _statement_?
* What are some examples of _statements_?
* What is a _variable assignment statement_?
* What are some examples of _variable assignment statements_?
* What is a _variable_?
* What is an example of a _variable_?
* What is an _assignment operator_?

---

## Conditional Statements: IF
### Pop Quiz!

```python
x = 8 / 2
if x < 5:
    z = 1
else if x >= 5:
    z = 2
```

* Question: What is the value of `z`?

---

## Conditional Statements: IF

```python
x = 8 / 2
if x < 5:
    z = 1
else if x >= 5:
    z = 2
```

* Question: What is the value of `z`?
* Answer: The value of `z` is `1`

---

## Conditional Statements: IF

* The `if` statement is a type of _conditional statement_
* The `if` statement is used to conditionally execute statement(s) if a
  certain criteria is true.

---

## Relational/Comparison Operators
### Definitions

* `<` _Less Than_
* `>` _Greater Than_
* `<=` _Less Than Or Equal To_
* `>=` _Greater Than Or Equal To_
* `==` _Equal To_
* `!=` _Not Equal To_

---

## Relational/Comparison Operators
### Examples

* `if x < z` _If x is less than z_
* `if x > z` _If x is greater than z_
* `if x <= z` _If x is less than or equal to z_
* `if x >= z` _If x is greater than or equal to z_
* `if x == z` _If x is equal to z_
* `if x != z` _If x is not equal to z_ 

---

## Conditional Statements: IF

This is the basic structure of a simple `if` statement.

```python
if SOMETHING_IS_TRUE:
    THEN_DO_THIS
```

Example

```python
if x == 4:
    z = 1
```

---

## Conditional Statements: IF

This is a slightly more advanced `if` statement, which uses a new concept
called `else if`.

```python
if THIS_SOMETHING_IS_TRUE:
    THEN_DO_THIS
else if THIS_STATEMENT_IS_TRUE:
    THEN_DO_THIS
```

Example

```python
if x == 5:
   z = 1
else if x > 5:
   z = 2
```

---

## Conditional Statements: IF

This is an even more advanced `if` statement, which uses a new concept
called `else`.

```python
if THIS_SOMETHING_IS_TRUE:
    THEN_DO_THIS
else if THIS_STATEMENT_IS_TRUE:
    THEN_DO_THIS
else:
    THEN_DO_THIS
```

Example

```python
if x == 5:
    z = 1
else if x > 5:
    z = 2
else
    z = 3
```

---

## Conditional Statements: IF
### Pop Quiz!

```python
x = 8 / 2
if x < 4:
    z = 1
else if x == 5:
    z = 2
else
    z = 3
```

* Question: What is the value of `z`?

---

## Conditional Statements: IF

```python
x = 8 / 2
if x < 5:
    z = 1
else if x == 5:
    z = 2
else
    z = 3
```

* Question: What is the value of `z`?
* Answer: The value of `z` is `3`.

---

## Conditionals
### Group Exercise: Write on desk

How would you translate this to English?

```python
x = 8 / 2
if x < 5:
    z = 1
else if x == 5:
    z = 2
else
    z = 3
```

---

## Conditionals

### Pseudo-Code

```python
x = 8 / 2
if x < 5:
    z = 1
else if x == 5:
    z = 2
else
    z = 3
```

### English

```plain
- x is 8 divided by 2.
- 8 divided by 2 is 4.
- Therefore x is 4.

- If x is less than 5, then z is 1.
- Otherwise, if x is equal to 5, then z is 2.
- Otherwise, in all other scenarios, then z is 3.
```

---

## Conditionals
### Pop Quiz!

```python
x = 4 * 2
if == 4:
    z = 1
else if x == 2:
    z = 2
else if x == 6:
    z = 3
else if x == 8:
    z = 4
else:
    z = 5
```

* Question: What is the value of `z`?

---

## Conditionals

```python
x = 4 * 2
if == 4:
    z = 1
else if x == 2:
    z = 2
else if x == 6:
    z = 3
else if x == 8:
    z = 4
else:
    z = 5
```

* Question: What is the value of `z`?
* Answer: The value of `z` is `4`.

---

## Conditionals
### Group Exercise

Translate this pseudo-code to English on your desk.

```python
x = 4 * 2
if == 4:
    z = 1
else if x == 2:
    z = 2
else if x == 6:
    z = 3
else if x == 8:
    z = 4
else:
    z = 5
```

---

## Conditionals: IF
### Recap

* What is an `if` statement?
* What type of statement is an `if` statement?
* Why is the `if` statement important?
* What is an example of an `if` statement?
* What are the basic comparison operators?
* What is an example of each comparison operator?

---

## Conditionals: Booleans
### Pop Quiz!

```python
x = 3 <= 4
```

* Question: What is the value of `x`?

---

## Conditionals: Booleans

```python
x = 3 <= 4
```

* Question: What is the value of `x`?
* Answer: The value of `x` is `true`.

---

## Conditionals: Booleans

* A boolean value is simply a value that is `true`
  or `false`.
* A conditional statement evaluates boolean values.

---

## Conditionals: Booleans
### Pop Quiz!

For each of these, write on your desk whether it is `true` or `false`:

1. `3 == 4`
2. `4 >= 2`
3. `5 > 5`
4. `1 <= 10`
5. `9 = 8`

---

## Conditionals: Booleans

For each of these, write on your desk whether it is `true` or `false`:

1. `3 == 4` _false_
2. `4 >= 2` _true_
3. `5 > 5` _false_
4. `1 <= 10` _true_
5. `9 = 8` _Trick question! This is neither true or false!_

---

## Conditionals: Booleans
### Pop Quiz!

```python
x = 3 <= 4
if x:
    z = 1
else:
    z = 2
```

* Question: What is the value of `z`?

---

## Conditionals: Booleans

```python
x = 3 <= 4
if x:
    z = 1
else:
    z = 2
```

* Question: What is the value of `z`?
* Answer: The value of `z` is `1`.

---

## Conditionals: Booleans
### Pop Quiz!

```python
x = 4
y = 3
z = y > 4
if z:
    a = 1
else:
    a = 2
```

* Question: What is the value of `a`?

---

## Conditionals: Booleans
### Pop Quiz!

```python
x = 4
y = 3
z = y > 4
if z:
    a = 1
else:
    a = 2
```

* Question: What is the value of `a`?
* Answer: The value of `a` is `2`.

---

## Logical Operators: And
### Pop Quiz!

```python
a = 4 == 4
b = 5 > 2
if a and b:
    c = 1
else:
    c = 2
```

* Question: What is the value of `c`?

---

## Logical Operators: And

```python
a = 4 == 4
b = 5 > 2
if a and b:
    c = 1
else:
    c = 2
```

* Question: What is the value of `c`?
* Answer: The value of `c` is 1.

---

## Logical Operators: And

* `and` is called a _logical conjunction operator_.
* A _conjunction_ is true when _both_ facts are true.
* `a and b` will be `true` if both `a` and `b` are both true.

---

## Logical Operators: And

Both criteria must be true, in order for
the entire statement to be true.

English

```plain
If the day of month is 25, and the month is December,
then it must be Christmas.
```

Pseudo-Code

```python
if (day_of_month == 25) and (month == "december"):
    is_christmas = true
else:
    is_christmas = false
```

---

## Logical Operators: And

These four blocks of code are the same:

```python
if (day_of_month == 25) and (month == "december"):
    is_christmas = true
else:
    is_christmas = false
```

```python
a = (day_of_month == 25)
b = (month == "december")
if a and b:
    is_christmas = true
else:
    is_christmas = false
```

```python
a = (day_of_month == 25)
b = (month == "december")
is_christmas = (a and b)
```

```python
is_christmas = ((day_of_month == 25) and (month == "december"))
```

---

## Logical Operators: Or
### Pop Quiz!

```python
a = 1 >= 9
b = 6 < 7
if a or b:
    c = 1
else:
    c = 2
```

* Question: What is the value of `c`?

---

## Logical Operators: Or

```python
a = 1 >= 9
b = 6 < 7
if a or b:
    c = 1
else:
    c = 2
```

* Question: What is the value of `c`?
* Answer: The value of `c` is `1`.

---

## Logical Operators: Or

* `or` is called a _logical disjunction operator_.
* A _disjunction_ is true when _either_ or _both_ facts are true.
* `a or b` will be `true` if both `a` and `b` are true or if `a` or `b` are true.

---

## Logical Operators: Or

Either or both of the criteria must be true, in order for
the entire statement to be true.

English

```plain
If the day of month is 1, or the day of month is 15,
then it is payday!
```

Pseudo-Code

```python
if (day_of_month == 1) or (day_of_month == 15):
    is_payday = true
else:
    is_payday = false
```

---

## Logical Operators: Or

These four blocks of code are the same:

```python
if (day_of_month == 1) or (day_of_month == 15):
    is_payday = true
else:
    is_payday = false
```

```python
a = (day_of_month == 1)
b = (day_of_month == 15)
if a or b:
    is_payday = true
else:
    is_payday = false
```

```python
a = (day_of_month == 1)
b = (day_of_month == 15)
is_payday = (a or b)
```

```python
is_payday = ((day_of_month == 1) or (day_of_month == 15))
```

---

## Logical Operators: Not
### Pop Quiz!

```python
a = true
b = !a
```

* Question: What is the value of `b`?

---

## Logical Operators: Not

```python
a = true
b = !a
```

* Question: What is the value of `b`?
* Answer: The value of `b` is `false`.

---

## Logical Operators: Not

* `!` is called a _logical negation operator_.
* The negation of `true` is always `false`.
* The negation of `false` is always `true`.

---


## Logical Operators: Not
### Pop Quiz!

```python
a = !false
```

* Question: What is the value of `a`?

---

## Logical Operators: Not

```python
a = !false
```

* Question: What is the value of `a`?
* Answer: The value of `a` is `true`.

---

## Logical Operators: Not
### Pop Quiz!

```python
a = 5
b = 8
c = !(a < b)
```

* Question: What is the value of `c`?

---

## Logical Operators: Not

```python
a = 5
b = 8
c = !(a < b)
```

* Question: What is the value of `c`?
* Answer: The value of `c` is `false`.

---

## Logical Operators: Not
### Pop Quiz!

```python
a = 5
b = 8
c = (a < b)
c = !c
```

* Question: What is the value of `c`?

---

## Logical Operators: Not

```python
a = 5
b = 8
c = (a < b)
c = !c
```

* Question: What is the value of `c`?
* Answer: The value of `c` is `false`.

---

## Logical Operators: Not
### Pop Quiz!

```python
a = 5
b = 8
c = (a == b)
d = !!c
```

* Question: What is the value of `d`?

---

## Logical Operators: Not

```python
a = 5
b = 8
c = (a == b)
d = !!c
```

* Question: What is the value of `d`?
* Answer: The value of `d` is `false`.

---

## Logical Operators: Not
### Pop Quiz!

```python
a = 11 - 2
b = 3 * 3
c = (a == b)
if !c:
    d = 1
else:
    d = 2
```

* Question: What is the value of `d`?

---

## Logical Operators: Not
### Pop Quiz!

```python
a = 11 - 2
b = 3 * 3
c = (a == b)
if !c:
    d = 1
else:
    d = 2
```

* Question: What is the value of `d`?
* Answer: The value of `d` is `2`.

---

## Comparison Operators: Not Equal To
### Pop Quiz!

```python
a = 8
b = 4 * 2
if a != b:
    d = 1
else:
    d = 2
```

* Question: What is the value of `d`?

---

## Comparison Operators: Not Equal To

```python
a = 8
b = 4 * 2
if a != b:
    d = 1
else:
    d = 2
```

* Question: What is the value of `d`?
* Answer: The value of `d` is `2`.

---

## Comparison Operators: Not Equal To

* `!=` means `is not equal to`
* `a != b` means `is a not equal to b?`
* `!=` will always provide the negation of `==`

---

## Comparison Operators: Not Equal To
### Pop Quiz!

```python
a = 8
b = 4 * 2
c = a != b
if c:
    d = 1
else:
    d = 2
```

* Question: What is the value of `d`?

---

## Comparison Operators: Not Equal To

```python
a = 8
b = 4 * 2
c = a != b
if c:
    d = 1
else:
    d = 2
```

* Question: What is the value of `d`?
* Answer: The value of `d` is `2`.

---

## Logical Operators: Not
### Pop Quiz!

```python
a = 0
b = false
while !b:
    a = a + 1
    b = (a == 4)
c = a
```

* Question: What is the value of `c`?

---

## Logical Operators: Not
### Pop Quiz!

```python
a = 0
b = false
while !b:
    a = a + 1
    b = (a == 4)
c = a
```

* Question: What is the value of `c`?
* Answer: The value of `c` is `4`.

---

## Conditionals
### Pop Quiz!

```python
a = ((4 / 2) * 3)
b = 9 - 2
c = ((5 + 4 ) - 2)
d = c + c
e = (((a > b) and (c == b)) or (d < 15))
if e:
    f = 1
else:
    f = 2
g = f * 2
f = ((f * 3) + a)
```

* Question: What is the final value of `f`?

---

## Conditionals
### Pop Quiz!

```python
a = 1 + 1 + 1 + 1 + 1
b = 2 * 3 * 4
c = ((a * a) == (b + 1))
if c == false:
    d = a - 1
else if c == true:
    d = a + 1
e = d
f = e
```

* Question: What is the final value of `f`?

---

## Conditionals
### Pop Quiz!

```python
a = 1 + 1 + 1 + 1 + 1
b = 2 * 3 * 4
c = ((a * a) == (b + 1))
if c == false:
    d = a - 1
else if c == true:
    d = a + 1
e = d
f = e
```

* Question: What is the final value of `f`?
* Answer: The final value of `f` is `6`.

---

## Conditionals
### Pop Quiz!

```python
a = (((3 * 4) == (14 - 2)) == (4 > (2 + 1)))
```

* Question: What is the final value of `a`?

---

## Conditionals
### Pop Quiz!

```python
a = (((3 * 4) == (14 - 2)) == (4 > (2 + 1)))
```

* Question: What is the final value of `a`?
* Answer: The final value of `a` is `true`.

---

## Conditionals
### Pop Quiz!

```python
a = (true or false or true or false or true or false or true or false)
```

* Question: What is the final value of `a`?

---

## Conditionals
### Pop Quiz!

```python
a = (true or false or true or false or true or false or true or false)
```

* Question: What is the final value of `a`?
* Answer: The final value of `a` is `true`.

---

## Conditionals
### Pop Quiz!

```python
a = (true and true and false and false and false and true)
```

* Question: What is the final value of `a`?
* Answer: The final value of `a` is `false`.

---

## Looping

```python
x = 0
while x < 4:
    x = x + 1
z = x
```

* Question: What is the final value of `z`?

---

## Looping

```python
x = 0
while x < 4:
    x = x + 1
z = x
```

* Question: What is the final value of `z`?
* Answer: The final value of `z` is `4`.

---

## Looping

* _Looping_ provides a mechanism for repeating a group of statements
  for as long as a certain criteria is true.
* The `while` statement is a type of _looping_ statement.

---

## Looping: While

Structure of a `while` statement:

```python
while THIS_IS_TRUE:
    THEN_DO_THIS
```

Example

```python
while kids_are_not_waiting_outside:
    drive_around_the_block
```

---

## Looping: While
### Pop Quiz!

```python
x = 0
while x < 3:
    x = x + 2
z = x
```

* Question: What is the final value of `z`?

---


## Looping: While

```python
x = 0
while x < 3:
    x = x + 2
z = x
```

* Question: What is the final value of `z`?
* Answer: The final value of `z` is `4`.

---

## Looping: While
### Pop Quiz!

```python
x = 4
while x <= 7:
    x = x + 1
z = x
```

* Question: What is the final value of `z`?

---

## Looping: While

```python
x = 4
while x <= 7:
    x = x + 1
z = x
```

* Question: What is the final value of `z`?
* Answer: The final value of `z` is `8`.

---

## Looping: While
### Pop Quiz!

```python
a = 0
b = true
c = 2 * 2
while b:
    b = (a < c)
    a = a + 1
```

* Question: What is the final value of `a`?

---

## Looping: While

```python
a = 0
b = true
c = 2 * 2
while b:
    b = (a < c)
    a = a + 1
```

* Question: What is the final value of `a`?
* Answer: The final value of `a` is `5`.

---

## Looping: While
### Pop Quiz!

```python
a = 0
while true:
    a = a + 1
```

* Question: What is the final value of `a`?

---

## Looping: While

```python
a = 0
while true:
    a = a + 1
```

* Question: What is the final value of `a`?
* Answer: `a` will have no final value.  It will increment forever!

---

## Looping: While
### Pop Quiz!

```python
a = 0
while false:
    a = a + 1
```

* Question: What is the final value of `a`?

---

## Looping: While

```python
a = 0
while false:
    a = a + 1
```

* Question: What is the final value of `a`?
* Answer: The final value of `a` will be `0`, because the `while` block will
  never execute!

---

## Looping
### Recap

* What is _looping_?
* Why is _looping_ important?
* What is a `while` statement?
* What is an example of a `while` statement?

---

## Functions
### Pop Quiz!

```python
function get_current_year():
    return 2016

a = get_current_year() + 1
```

* Question: What is the final value of `a`?

---

## Functions

* What is a _function_?
* A _function_ groups one or more statements into a reusable task.

---

## Functions

Examples

```python
function get_current_year ():
    return 2016

function get_ten_years_ago ():
    a = 2016
    b = a - 10
    return b
```

---

## Functions

There are two steps to using functions:

First, you must define the function:

```python
function get_current_year ():
    return 2016
```

Then, you can call the function:

```python
this_year = get_current_year()
next_year = this_year + 1
```

---

## Functions
### Pop Quiz!

```python
function get_current_year ():
    return 2016

a = get_current_year() + get_current_year()
```

* Question: What is the final value of `a`?

---

## Functions

```python
function get_current_year ():
    return 2016

a = get_current_year() + get_current_year()
```

* Question: What is the final value of `a`?
* Answer: The final value of `a` is `2032`.

---

## Functions

Functions can call other functions:

```python
function get_current_year ():
    return 2016

function get_next_year ():
    this_year = get_current_year()
    next_year = this_year + 1
    return next_year

a = get_next_year ()
```

---

## Functions: Parameters
### Pop Quiz!

```python
function add_values (a, b):
    c = a + b
    return c

x = add_values(2, 3)
```

* Question: What is the final value of `x`?

---

## Functions: Parameters

```python
function add_values (a, b):
    c = a + b
    return c

x = add_values(2, 3)
```

* Question: What is the final value of `x`?
* Answer: The final value of `x` is `5`.

---

## Functions

![Structure of a Function](classes/Week_05-Intro_To_Programming/lessons/01-intro_to_programming/images/function.png)

---

## Functions
### Pop Quiz!

```python
function m (a, b):
    x = a * b
    y = x + 5
    return y

function n (f, g):
    r = f + 1
    s = g + 2
    x = m(r, s)
    return x

t = n(6, 2)
u = t + 4
```

* Question: What is the final value of `u`?

---

## Functions

```python
function m (a, b):
    x = a * b
    y = x + 5
    return y

function n (f, g):
    r = f + 1
    s = g + 2
    x = m(r, s)
    return x

t = n(6, 2)
u = t + 4
```

* Question: What is the final value of `u`?
* Answer: The final value of `u` is `37`.

---

## Functions
### Pop Quiz!

```python
function m (a, b):
    return (a + b)

function n (a, b):
    return (a + b)

x = ((m(5, 4) + n(1, 2)) * 2)
y = (x == (3 * 8))
```

* Question: What is the final value of `y`?

---

## Functions

```python
function m (a, b):
    return (a + b)

if (m(3, 4) == (10 - 3)):
    y = true
else:
    y = false
```

* Question: What is the final value of `y`?
* Answer: The final value of `y` is `true`.

---

## Functions
### Pop Quiz!

```python
function a (x):
    if (x > 5):
        return true
    else:
        return false

c = a(3)
```

* Question: What is the final value of `c`?

---

## Functions

```python
function a (x):
    if (x > 5):
        return true
    else:
        return false

c = a(3)
```

* Question: What is the final value of `c`?
* Answer: The final value of `c` is `false`.

---

## Functions
### Recap

* What is a _function_?
* What are _function parameters_?
* Why are _functions_ important?
* What is an example of a _function_?

---

## Putting it all together
### Pop Quiz!

```python
function compare (u, v):
    return (u < v)

function a (x):
    b = 0
    while compare(b, x):
        b = b + 1
    return b

t = a(3)
```

* Question: What is the final value of `t`?

---

## Putting it all together

```python
function compare (u, v):
    return (u < v)

function a (x):
    b = 0
    while compare(b, x):
        b = b + 1
    return b
```

* Question: What is the final value of `t`?
* Answer: The final value of `t` is `3`.

---

## Thermostat

![Thermostat](classes/Week_05-Intro_To_Programming/lessons/01-intro_to_programming/images/thermostat.jpg)

---

## Thermostat

### What is the purpose of a thermostat?

---

## Thermostat
### Group exercise

If you were building a thermostat, how would it work?

---

## Thermostat
### Group exercise

See if you can write the pseudo-code for a thermostat

---

## Thermostat Pseudo-Code

```python
target_temperature = 72
repeat_forever:
    current_temperature = get_temperature_from_sensor()
    if current_temperature < (target_temperature - 5):
        enable_heater()
    if current_temperature >= target_temperature:
        disable_heater()
```

---

## Objectives Recap

* Define and understand the purpose of Computer Programming
* Define and demonstrate working knowledge of pseudo-code
* Read and write pseudo-code using variable assignments
* Read and write pseudo-code for conditional/if statements
* Read and write pseudo-code for loops/while statements
* Read and write pseudo-code for functions
* Understand how to combine the multiple parts of computer programming to
  build basic abstract applications, such as a thermostat.
