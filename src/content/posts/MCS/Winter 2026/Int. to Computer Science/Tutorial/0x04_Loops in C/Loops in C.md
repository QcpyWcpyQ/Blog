---
title: "Loops in C"
published: 2026-11-03
description: "Translating pseudocode for and while loops into C, handling index intervals, and avoiding off-by-one errors, infinite loops, and assignments in conditions."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: *Tutorial 04: Loops in C*, Introduction to Computer Science, Guangdong Technion Israel Institute of Technology, 15 slides. The supplied file is *slides_T4.pdf*. References below use PDF page numbers counted from the title page.

## Goals

*Slide 2.*

By the end of this tutorial, we should be able to:

1. Translate a pseudocode **for** loop over an index range into a C **for** loop.
2. Explain what each of the three parts of a C **for** header does.
3. Translate a pseudocode **while** loop into C without changing its logic.
4. Identify and fix the three most common loop pitfalls in C: off-by-one errors, infinite loops, and assignment in a condition.

## for in C

*Slides 3–4.*

A **for** loop performs a defined iteration over an index range.

### Translation rules

The pseudocode

~~~text
before

for every i in [a:b] do
  body
endfor

after
~~~

translates to:

~~~c
/* before */

for (int i = a; i <= b; i++)
{
    /* body */
}

/* after */
~~~

The interval $[a:b]$ contains all integers from $a$ to $b$, including both endpoints.

The three parts of the **for** header are separated by semicolons.

| Part | Written as | When it runs |
| --- | --- | --- |
| Initialize | **int i = a** | Once, before the first iteration |
| Condition | **i <= b** | Before every iteration; if false, the loop stops |
| Update | **i++** | After every iteration body finishes |

### Half-open intervals

*Slide 5.*

Index-based loops often use the half-open interval $[0:size)$. Its C translation follows directly.

~~~text
size := len(sentence)

for each index in [0:size) do
  body
endfor
~~~

~~~c
int size = strlen(sentence);

for (int index = 0; index < size; index++)
{
    /* body */
}
~~~

A closed right endpoint uses **<=**, whereas an open right endpoint uses **<**.

| Interval | Initialization | Condition |
| --- | --- | --- |
| $[a:b]$ | **i = a** | **i <= b** |
| $[a:b)$ | **i = a** | **i < b** |
| $(a:b)$ | **i = a + 1** | **i < b** |

### Example: factorial

*Slide 6.*

The pseudocode is:

~~~text
fun factorial(n:nat) -> r:nat
requires: true

  r := 1
  for every i in [1:n] do
    invariant: r = (i - 1)!
    r := r * i
  endfor

ensures: r = n!
~~~

The C implementation is:

~~~c
/*
 * factorial: compute n!
 * require: n >= 0
 * ensure:  return == n!
 */
int factorial(int n)
{
    int r = 1;

    /* invariant: r == (i - 1)! */
    for (int i = 1; i <= n; i++)
    {
        r = r * i;
    }

    return r;
}
~~~

| Call | Expected result | Note |
| --- | ---: | --- |
| **factorial(0)** | $1$ | The loop runs zero times, so $r$ remains $1$. |
| **factorial(1)** | $1$ | One iteration gives $r=1\cdot1$. |
| **factorial(4)** | $24$ | Four iterations give $1\to1\to2\to6\to24$. |

## while in C

*Slides 7–8.*

A **while** loop performs an undefined iteration.

The pseudocode

~~~text
before

while condition do
  body
endwhile

after
~~~

translates to:

~~~c
/* before */

while (condition)
{
    /* body */
}

/* after */
~~~

Only two syntactic changes are required:

| Pseudocode | C |
| --- | --- |
| **while condition do** | **while (condition)**; parentheses are required |
| **endwhile** | **}**; the closing brace ends the loop |

The logic, the condition expression, and the obligation to make progress toward termination remain unchanged.

### Example: integer division

*Slide 9.*

The pseudocode is:

~~~text
fun div(n:nat, d:nat) -> q:nat
requires: d > 0

  q := 0
  r := n
  while r >= d do
    invariant: n = q * d + r and r >= 0
    q := q + 1
    r := r - d
  endwhile

ensures: n = q * d + r and 0 <= r < d
~~~

The corresponding C implementation is:

~~~c
/*
 * div_q: compute the integer quotient of n / d.
 * require: d > 0
 * ensure:  n == q * d + r && 0 <= r && r < d
 */
int div_q(int n, int d)
{
    int q = 0;
    int r = n;

    /* invariant: n == q * d + r && r >= 0 */
    while (r >= d)
    {
        q = q + 1;
        r = r - d;
    }

    return q;
}
~~~

## Common pitfalls

*Slide 10.*

The tutorial identifies three loop mistakes that must be checked in every C program.

### Pitfall 1: off-by-one errors

*Slide 11.*

Confusing **<** with **<=**, or choosing the wrong initial index, makes a loop run one time too many or one time too few.

This loop is intended to cover $[1:n)$, but it includes $n$ and therefore runs once too many:

~~~c
for (int i = 1; i <= n; i++)
{
    r = r * i;
}
~~~

The correct condition is:

~~~c
for (int i = 1; i < n; i++)
{
    r = r * i;
}
~~~

This loop is intended to cover $[0:size)$, but it omits **size - 1** and therefore runs once too few:

~~~c
for (int i = 0; i < size - 1; i++)
{
    /* ... */
}
~~~

The correct loop is:

~~~c
for (int i = 0; i < size; i++)
{
    /* ... */
}
~~~

Always derive the loop condition directly from the interval in the specification.

~~~c
/* [1:n]: both endpoints are closed. */
for (int i = 1; i <= n; i++)
{
    /* ... */
}

/* [0:size): the right endpoint is open. */
for (int i = 0; i < size; i++)
{
    /* ... */
}

/* (0:size): the left and right endpoints are open. */
for (int i = 1; i < size; i++)
{
    /* ... */
}
~~~

Do not adjust the bounds by trial and error.

### Pitfall 2: infinite loops

*Slide 12.*

A **while** loop does not terminate if its body fails to make progress toward making the condition false.

In the following loop, **index** never advances:

~~~c
int index = 0;

while (index < size)
{
    if (s[index] == letter)
    {
        found = 1;
    }

    /* Missing: index = index + 1; */
}
~~~

The corrected loop updates **index** during every iteration:

~~~c
int index = 0;

while (index < size)
{
    if (s[index] == letter)
    {
        found = 1;
    }

    index = index + 1;
}
~~~

The following loop updates **r** in the wrong direction:

~~~c
while (r >= d)
{
    q = q + 1;
    r = r + d;
}
~~~

It must subtract $d$ so that **r >= d** eventually becomes false:

~~~c
while (r >= d)
{
    q = q + 1;
    r = r - d;
}
~~~

Every variable used in the **while** condition must be modified so that the condition eventually becomes false.

### Pitfall 3: assignment in the loop condition

*Slide 13.*

The operator **=** assigns a value, while **==** compares two values.

~~~c
int r = 7;

while (r = 0)
{
    /* The body never runs. */
}
~~~

The expression assigns $0$ to **r**. Its value is therefore false, so the loop body is never executed.

The opposite case is equally dangerous:

~~~c
while (r = 5)
{
    /* Infinite loop: the condition is always true. */
}
~~~

The correct equality test is:

~~~c
while (r == 0)
{
    /* ... */
}
~~~

Compile with **-Wall**. GCC warns about an assignment used as a truth value:

~~~text
warning: suggest parentheses around assignment used as truth value
~~~

Treat every **-Wall** warning as an error. The same rule applies to **if** and **while**: **=** assigns, whereas **==** compares.

## Key takeaways

*Slides 14–15.*

- Use a **for** loop when the number of iterations is determined by a collection or range. Its header contains initialization, condition, and update expressions.
- Derive the loop bounds directly from the interval in the specification: use **<=** for a closed right endpoint and **<** for an open right endpoint.
- Use a **while** loop when the number of iterations depends on runtime values. The pseudocode translates almost unchanged: only **do** and **endwhile** disappear.
- Every variable in a **while** condition must move toward making the condition false.
- In a condition, **=** assigns and **==** compares. Compile with **-Wall** to detect an accidental assignment.
