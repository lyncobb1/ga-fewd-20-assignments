# Pseudo Code Problems

## Problem 1

```
x = (!true and !false or !(false and true))
```

* Question: What is the final value of `x`?


## Problem 2

```
x = 7 - 2 - 3 + 2
y = !(x != 4)
z = !!!!y
if (((z != false) != true) == true):
    d = 1
else:
    d = 2
```

* Question: What is the final value of `d`?


## Problem 3

```
function n (a, b, c):
    d = c
    e = d
    f = e
    return (a * b * f)

s = 4
t = 5
u = 6
r = n(s, t, u)
```

* Question: What is the final value of `r`?


## Problem 4

```
function n (a, b):
    return (m(a, b) + m(a + b, a * b))

function m (x, y):
    return ((x + y) * 2)

z = n(8, 9)
```

* Question: What is the final value of `z`?


## Problem 5

```
function f (b):
    a = 1
    while (a != (a - 1)) and (a <= (b - 1)):
        a = 1 + a
    z = a
    return z

x = f(4)
```

* Question: What is the final value of `x`?


## Problem 6

```
a = 0
while false:
    a = 1
```

* Question: What is the final value of `a`?


## Problem 7

```
a = 0
while true:
    a = 1
```

* Question: What is the final value of `a`?

## Problem 8

```
a = (!false and !false)
```


## Problem 9

```
function na (a, b):
    return !(a and b)

function r (a, b):
    x = na(na(a, a), na(b, b))
    return x

s = r(True, False)
t = r(True, True)
u = r(False, False)
```

* Question: What is the final value of `s`?
* Question: What is the final value of `t`?
* Question: What is the final value of `u`?
* Question: Can you guess what common logic operation the `r`
  function is emulating?
* Hint: The `!` and `and` operators together form what is called
  a `nand` operation.  The `nand` operation is actually the building block
  of all computing, and can be use to construct all other computing operations
  down to the lowest level.  Every piece of digital technology that you use
  could actually be built using trillions of `!` and `and` operators, and nothing
  else!


## Problem 10

```
function a (t):
    return b(b(c(t), d(t)), b(d(t), c(t)))

function b (r, s):
    if (r > s):
        return s
    else if (r < s):
        return r
    else:
        return 0

function c (u):
    return (u * 2)

function d (v):
    return (v * 3)

y = 9
x = a(y)
```

* Question: What is the final value of `x`?


## Problem 11

```
function m (s, t):
    return (s > t)


function n (f, a, b):
    return f(a + 2, b + 2)


x = n(m, 6, 4)
```

* Question: What is the final value of `x`?
* Hint: This one is slightly harder.  This deals with a
  concept called "higher order functions", which is actually a fairly
  advanced topic.


## Problem 12

```
function a (b, c):
    return (b / c)

function b (t, f, g)
    return t(g, f)

r = b(a, 6, 3)
```

* Question: What is the final value of `r`?
* Hint: This one also deals with "higher order functions".


## Problem 13

```
function p (n, x, e):
    if e > 0:
        return p(n, n * x, e - 1)
    else:
        return x

function m (b, c):
    return p(b, 1, c)


v = m(10, 3)
```

* Question: What is the final value of `v`?
* Bonus Question: What common mathematical operation is this performing?
* Hint: This one is approaching expert level.  This deals with a concept
  called "recursion", which is very advanced.  This happens to also
  be the exact same logic for a very common mathematical operation
  that people use every day, and that exists on most calculators.
  If you want to know what that mathematical operation is, slack me
  for more hints.


## Problem 14

```
function m (b, c):
    x = b
    y = 0
    while (y < (c - 1)):
        x = x * b
        y = y + 1
    return x

v = m(7, 2)
```

* Question: What is final value of `v`?
* Bonus Question: What common mathematical operation is this performing?
* Hint: This actually does the exact same thing as the previous problem.
  Only the number values have changed!


## Problem 15

```
function m (f, g):
    t = 0
    r = 0
    while r < f:
        s = 0
        while s < g:
            s = s + 1
            t = t + 1
        r = r + 1
    return t

v = m(9, 4)
```

* Question: What is the final value of `v`?
* Hint: This deals with nested loop, which is a loop inside of a
  loop.  If you practice this enough, you should be able to instantly
  know the answer to this question without actually working through
  every step.  Pay attention to the small hints in the code.


## Problem 16

```
function y (r, s, d):
    if d > 0:
        return x(s, r, d - 1)
    else:
        return (r * s)

function x (a, b, c):
    if c > 0:
        return y(b, a, c - 1)
    else:
        return (a * b)

z = y(4, 5, 3)
```

* Question: What is the final value of `z`?
* Hint: This also deals with "recursion".

