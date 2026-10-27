---
title: "Conditionals in C"
published: 2026-10-27
description: "Translating conditional pseudocode into C, tracing branches, implementing abs, max, sign, and grade conversion, testing boundaries, and avoiding common conditional mistakes."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: *Tutorial 03: Conditionals in C*, Introduction to Computer Science, Guangdong Technion Israel Institute of Technology, 21 slides. Slide references below use PDF page numbers counted from the title page.

## Goals

*Slide 2.*

By the end of this tutorial, we should be able to:

1. Translate each pseudocode conditional form - **if**, **if-else**, and **if-elif-else** - into correct C syntax.
2. Identify the key syntactic differences between pseudocode conditionals and their C equivalents.
3. Read and trace a C function that uses **if**, **if-else**, or an **else if** chain.
4. Implement **abs**, **max**, **sign**, and **pgs2lgs** in C with correct conditional logic.
5. Recognize and avoid common mistakes involving conditionals in C.

## From pseudocode to C

*Slide 3.*

The three main translation rules are:

1. Remove **then** and **endif**.
2. Enclose every branch body in braces.
3. Write **else if** in C instead of **elif**.

### Translating if

| Pseudocode | C |
| --- | --- |
| **if (condition) then** | **if (condition)** |
| Branch body | Branch body enclosed in braces |
| **endif** | Nothing |

~~~text
if (condition) then
    commands
endif
~~~

~~~c
if (condition)
{
    commands
}
~~~

### Translating if-else

~~~text
if (condition) then
    commands1
else
    commands2
endif
~~~

~~~c
if (condition)
{
    commands1
}
else
{
    commands2
}
~~~

### Translating operators

*Slide 5.*

| Pseudocode | C | Meaning |
| --- | --- | --- |
| $\neg p$ | **!p** | Logical negation |
| $p\land q$ | **p && q** | Logical AND |
| $p\lor q$ | **p \|\| q** | Logical OR |
| $x\leqslant y$ | **x <= y** | Less than or equal |
| $x\geqslant y$ | **x >= y** | Greater than or equal |
| $x\neq y$ | **x != y** | Not equal |

In C, a condition is evaluated as an integer expression:

- A nonzero result is true.
- Zero is false.

## if in C

*Slides 4-6.*

The one-branch conditional has the following general form.

~~~c
/* before */

if (condition)
{
    /* body */
}

/* after */
~~~

If the condition is nonzero, the body is executed. If it is zero, the body is skipped. Execution then continues after the closing brace.

### Example: abs

The pseudocode specification is:

~~~text
fun abs(x:int) -> y:nat

require: true

    y := x
    if (y <= 0) then
        y := -y
    endif

ensure: y >= 0 and (y = x or y = -x)
~~~

The corresponding C implementation is:

~~~c
// abs_val: compute the absolute value of x.
// require: true
// ensure:  return >= 0
//          && (return == x || return == -x)
int abs_val(int x)
{
    int y = x;

    if (y <= 0)
    {
        y = -y;
    }

    return y;
}
~~~

| Call | Expected result | Branch behavior |
| --- | --- | --- |
| **abs_val(1)** | $1$ | The condition is false, so the body is skipped. |
| **abs_val(-1)** | $1$ | The condition is true, so the body is executed. |
| **abs_val(0)** | $0$ | The condition $0\leqslant0$ is true; negating zero still gives zero. |

C already defines a function named **abs**. The tutorial uses **abs_val** to avoid a name collision. Function names should always be checked against library functions.

## if-else in C

*Slides 7-9.*

The two-branch conditional has the following general form.

~~~c
/* before */

if (condition)
{
    /* then body */
}
else
{
    /* else body */
}

/* after */
~~~

Its execution follows three rules:

1. If the condition is nonzero, the **then** body is executed.
2. If the condition is zero, the **else** body is executed.
3. Exactly one branch is executed.

Unlike two separate **if** statements, an **if-else** statement evaluates its condition exactly once and commits to one branch. This matters when the first branch changes a variable used by the condition; the condition is not evaluated again before the **else** branch.

### Example: max

The pseudocode specification is:

~~~text
fun max(a:nat, b:nat) -> result:nat

require: true

    if (a <= b) then
        result := b
    else
        result := a
    endif

ensure: result >= a and result >= b
        and (result = a or result = b)
~~~

The corresponding C implementation is:

~~~c
// max: return the larger of a and b.
// require: true
// ensure:  return >= a && return >= b
//          && (return == a || return == b)
int max(int a, int b)
{
    int result;

    if (a <= b)
    {
        result = b;
    }
    else
    {
        result = a;
    }

    return result;
}
~~~

| Call | Expected result | Branch |
| --- | --- | --- |
| **max(1, 2)** | $2$ | $a\leqslant b$ is true, so the then branch is executed. |
| **max(2, 1)** | $2$ | $a\leqslant b$ is false, so the else branch is executed. |
| **max(3, 3)** | $3$ | $a\leqslant b$ is true, so the then branch is executed. |

## else if in C

*Slides 10-12.*

C has no **elif** keyword. An **else if** is an **else** branch that immediately contains another **if**.

~~~c
if (c1)
{
    commands1
}
else if (c2)
{
    commands2
}
else if (c3)
{
    commands3
}
else
{
    commandsN
}
~~~

The chain follows three rules:

1. At most one branch is executed; the first true condition wins.
2. Conditions are evaluated from top to bottom, so their order matters.
3. The final **else** is the fallback and runs only when every earlier condition is false.

### Example: sign

The pseudocode specification is:

~~~text
fun sign(x:int) -> s:int

require: true

    s := 0
    if (x > 0) then
        s := 1
    elif (x < 0) then
        s := -1
    endif

ensure: (x > 0 implies s = 1)
        and (x < 0 implies s = -1)
        and (x = 0 implies s = 0)
~~~

The corresponding C implementation is:

~~~c
/*
 * sign: return 1, -1, or 0.
 * require: true
 * ensure:  (x > 0 implies return == 1)
 *          (x < 0 implies return == -1)
 *          (x = 0 implies return == 0)
 */
int sign(int x)
{
    int s = 0;

    if (x > 0)
    {
        s = 1;
    }
    else if (x < 0)
    {
        s = -1;
    }

    return s;
}
~~~

| Call | Expected result | Branch |
| --- | --- | --- |
| **sign(5)** | $1$ | $x>0$ is true. |
| **sign(-3)** | $-1$ | $x<0$ is true. |
| **sign(0)** | $0$ | Neither condition is true, so the initial value remains unchanged. |

## Putting the forms together: pgs2lgs

*Slides 13-14.*

The function **pgs2lgs** converts a percentage grade into a letter grade.

~~~text
fun pgs2lgs(grade:nat) -> result:char

    if grade in [90:100] then
        result := 'A'
    elif grade in [80:90) then
        result := 'B'
    elif grade in [70:80) then
        result := 'C'
    elif grade in [60:70) then
        result := 'D'
    else
        result := 'F'
    endif
~~~

The interval

$$
grade\in[80,90)
$$

has a closed left endpoint and an open right endpoint. In C, it becomes:

~~~c
grade >= 80 && grade < 90
~~~

The complete implementation is:

~~~c
char pgs2lgs(int grade)
{
    char result;

    if (grade >= 90 && grade <= 100)
    {
        result = 'A';
    }
    else if (grade >= 80 && grade < 90)
    {
        result = 'B';
    }
    else if (grade >= 70 && grade < 80)
    {
        result = 'C';
    }
    else if (grade >= 60 && grade < 70)
    {
        result = 'D';
    }
    else
    {
        result = 'F';
    }

    return result;
}
~~~

### Typical test cases

| Call | Expected result | Branch |
| --- | --- | --- |
| **pgs2lgs(93)** | **A** | First condition |
| **pgs2lgs(85)** | **B** | Second condition |
| **pgs2lgs(75)** | **C** | Third condition |
| **pgs2lgs(65)** | **D** | Fourth condition |
| **pgs2lgs(50)** | **F** | Final else |

### Boundary test cases

For valid grades in the interval $[0,100]$, every interval boundary should be tested exactly on the boundary, immediately below it, and immediately above it when applicable.

| Call | Expected result | Reason |
| --- | --- | --- |
| **pgs2lgs(100)** | **A** | Right endpoint of $[90,100]$ |
| **pgs2lgs(90)** | **A** | Left endpoint of $[90,100]$ |
| **pgs2lgs(89)** | **B** | Immediately below $90$ |
| **pgs2lgs(80)** | **B** | Left endpoint of $[80,90)$ |
| **pgs2lgs(79)** | **C** | Immediately below $80$ |
| **pgs2lgs(60)** | **D** | Left endpoint of $[60,70)$ |
| **pgs2lgs(59)** | **F** | Immediately below $60$ |
| **pgs2lgs(0)** | **F** | Minimum valid input |

## Common pitfalls

*Slides 15-19.*

### Pitfall 1: assignment instead of comparison

In C, **=** assigns a value, while **==** compares two values.

The following condition is incorrect:

~~~c
if (x = 0)
{
    /* never runs */
}
~~~

The expression assigns zero to **x**, then evaluates to zero, which is false. The branch is skipped, and **x** has also been changed as a side effect.

The correct comparison is:

~~~c
if (x == 0)
{
    /* runs when x is zero */
}
~~~

The compiler accepts an assignment as a condition because it is a valid C expression. Compile with **-Wall** so GCC warns about an assignment used as a truth value, and resolve every warning before running the program.

### Pitfall 2: the dangling else

Without braces, an **else** is associated with the nearest preceding **if** that does not already have an **else**.

~~~c
if (x > 0)
    if (x > 10)
        result = 2;
else
    result = -1;
~~~

Although the indentation suggests otherwise, C parses this as:

~~~c
if (x > 0)
{
    if (x > 10)
        result = 2;
    else
        result = -1;
}
~~~

If the **else** is intended to belong to the outer condition, braces must make that structure explicit:

~~~c
if (x > 0)
{
    if (x > 10)
    {
        result = 2;
    }
}
else
{
    result = -1;
}
~~~

Always place braces around every branch body. Braces are the reliable way to show and control which **if** an **else** belongs to.

### Pitfall 3: conditions are integers

Any integer expression can be used as a condition.

~~~c
int n = 5;

if (n)       /* true because n is nonzero */
if (n - 5)   /* false because the expression is zero */
if (n = 3)   /* assigns 3, then tests a nonzero value */
~~~

A common mistake is:

~~~c
if (x == 1 || 2)
{
    /* always runs */
}
~~~

The value **2** is nonzero, so the right operand of **||** is always true. Each operand must be a complete Boolean expression:

~~~c
if (x == 1 || x == 2)
{
    /* correct */
}
~~~

### Pitfall 4: operator precedence

The operators **&** and **|** are bitwise operators. Logical conditions should use **&&** and **||**.

Incorrect:

~~~c
if (x > 0 & x < 10)
{
    /* & is bitwise AND */
}
~~~

Correct:

~~~c
if (x > 0 && x < 10)
{
    /* logical AND */
}
~~~

The operator **&&** has higher precedence than **||**. Therefore,

~~~c
if (x > 0 && y > 0 || z > 0)
~~~

is parsed as:

~~~c
if ((x > 0 && y > 0) || (z > 0))
~~~

When both operators appear in one condition, add parentheses to make the intended grouping explicit.

## Key takeaways

*Slide 20.*

- Remove **then** and **endif**, place braces around every branch body, and replace **elif** with **else if**.
- An **if-else** statement evaluates its condition exactly once. Two independent **if** statements are not equivalent when the first branch changes a variable used by the condition.
- Translate an interval such as $grade\in[80,90)$ into two comparisons joined by **&&**.
- In C, **=** assigns and **==** compares. An assignment inside a condition is usually a bug.
- Use braces around every branch to prevent a dangling **else** from attaching to the wrong **if**.
- Use **&&** and **||** for logical conditions, not **&** and **|**.
- Add parentheses when mixing **&&** and **||** so the precedence is explicit.
