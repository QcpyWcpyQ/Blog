---
title: "Data Types and Programming"
published: 2026-10-20
description: "C types, conversions, overflow, Boolean expressions, integer division, leap years, real roots, divisibility, and fixed-calendar date conversions."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: the supplied tutorial folders *C_Types_Demo*, *01 - Leap Year*, *02 - Roots*, *03 - Divisible*, and *04 - International Fixed Calendar*. The exercise source headers credit Valentin Cassano and Santiago Figueira, Introduction to Computer Science, GTIIT, Winter 2025. The blog's folder records the term in which these notes are studied.

The type demonstrations and the leap-year and roots functions below come from the supplied code, with formatting adjusted. **Supplementary solutions** are provided for the missing `divisible.c` and `calendar.c`; they are not supplied official solutions. The calendar solution explicitly covers the 364 ordinary days.

## Project structure and compilation

The programs separate the calculation from input and output:

| File | Role |
| --- | --- |
| A header such as `leapyear.h` | Declares the function's name, parameter types, and return type |
| An implementation such as `leapyear.c` | Defines the function's calculation |
| `main.c`, or a named driver | Reads command-line arguments, calls the function, and prints the result |
| `README.md` | Explains the intended task and how to build and run it |

For example:

```c
/* Declaration in leapyear.h */
int leapyear(int year);
```

This declaration makes the function's interface available to other source files. The function body belongs in the implementation file. A header declaration alone does not supply the implementation: the implementation must also be compiled and linked.

**Corrections to the supplied README files.** The supplied drivers are `.c` files, although several README passages refer to `main.o`, `date2days.o`, or `days2date.o`. The calendar README also interchanges its two compilation headings. The commands in these notes use the files actually supplied. The Divisible and Calendar projects need their missing implementation files before they can be built.

| Option | Meaning |
| --- | --- |
| `-I.` | Search the current directory for headers, including the supplied `<leapyear.h>`-style includes |
| `-std=c11` / `-std=c99` | Select the language standard used by the example |
| `-Wall -Wextra` | Enable useful compiler warnings |
| `-O0` | Disable most optimizations for the live type demonstration |
| `-o name` | Name the resulting executable |

Run each command from its corresponding project directory.

## C types: read the operands before predicting the result

The lecture's mathematical integers do not have a fixed range. C integer types do. The type of an expression controls its arithmetic **before** the value is assigned or returned.

The numerical examples below use the classroom's usual model: 32-bit `int` and `unsigned int`, 8-bit `unsigned char`, a wider 64-bit `long long`, ASCII-compatible characters, and the usual binary floating-point representation. C does not require all implementations to use these exact sizes. Use `<limits.h>` for the actual integer limits.

| Type | Typical range or role | Important detail |
| --- | --- | --- |
| `int` | $-2^{31}$ through $2^{31}-1$ | Signed overflow is undefined behavior |
| `unsigned int` | $0$ through $2^{32}-1$ | Arithmetic wraps modulo $2^{32}$ in this model |
| `unsigned char` | $0$ through $255$ | Conversion reduces modulo $256$ in this model |
| `short` | Commonly $-32768$ through $32767$ | An out-of-range signed conversion is implementation-defined in C11, or raises an implementation-defined signal |
| `long long` | A wider signed integer in the classroom model | Useful for intermediate sums |
| `char` | A character code | Plain `char` may be signed or unsigned |
| `float`, `double` | Floating-point approximations | Many decimal fractions cannot be represented exactly |

### Integer addition and intermediate overflow

```c
int add(int a, int b)
{
    return a + b;
}

int average_bad(int a, int b)
{
    return (a + b) / 2;
}

int average_safe(int a, int b)
{
    long long sum = (long long)a + b;
    return (int)(sum / 2);
}
```

For `average_bad(10, 20)`, the sum is `30` and the result is `15`. But consider:

```c
average_bad(2147483647, 2147483647)
```

The mathematical average fits in `int`, but the intermediate sum does not:

$$
2147483647+2147483647=4294967294>2147483647.
$$

The addition overflows **before** division by two. Signed overflow is undefined behavior; a particular printed result is not a portable rule.

In `average_safe`, converting `a` to `long long` makes the addition use `long long`. Under the stated classroom sizes, the sum fits. The integer average lies between the two inputs, so converting that average back to `int` is safe.

**Conversion must happen before the risky operation.**

```c
(long long)a + b       /* Add using the wider type. */
(long long)(a + b)     /* Too late if the int addition already overflowed. */
```

The function still computes an integer average: `average_safe(1, 2)` returns `1`, and `average_safe(-1, -2)` returns `-1`, because signed integer division truncates toward zero.

### Signed and unsigned values

```c
unsigned int to_unsigned(int x)
{
    return (unsigned int)x;
}

unsigned int add_unsigned(unsigned int a, unsigned int b)
{
    return a + b;
}

int signed_less_unsigned(int a, unsigned int b)
{
    return a < b;
}
```

With 32-bit `unsigned int`, conversion and unsigned arithmetic use residues modulo $2^{32}$:

$$
(\texttt{unsigned int})(-1)=2^{32}-1=4294967295,
$$

$$
4294967295+1\equiv0\pmod{2^{32}}.
$$

Consequently:

| Call | Result in the stated model | Reason |
| --- | --- | --- |
| `to_unsigned(42)` | `42` | Already representable |
| `to_unsigned(-1)` | `4294967295` | Conversion modulo $2^{32}$ |
| `add_unsigned(4294967295U, 1U)` | `0` | Defined unsigned wraparound |
| `signed_less_unsigned(-1, 1U)` | `0` | The `int` operand is converted to `unsigned int` before comparison |
| `signed_less_unsigned(1, 2U)` | `1` | The converted value `1U` is less than `2U` |

The surprising comparison is therefore equivalent to `4294967295U < 1U`, which is false. **Mixing signed and unsigned operands can change the meaning of a comparison.**

### Integer casts and characters

```c
unsigned char to_uchar(int x)
{
    return (unsigned char)x;
}

short to_short(int x)
{
    return (short)x;
}

char next_char(char c)
{
    return c + 1;
}

int char_code(char c)
{
    return c;
}
```

For an 8-bit `unsigned char`, `to_uchar(257)` returns `1`, since $257=1\cdot256+1$.

For a 16-bit `short`, `12345` fits, while `100000` does not. Do not assign a universal answer to `to_short(100000)`: the C11 rule for an out-of-range signed conversion differs from the guaranteed modulo rule for unsigned conversion.

Characters have numeric codes. With ASCII-compatible encoding:

| Expression | Result |
| --- | --- |
| `char_code('A')` | `65` |
| `next_char('A')` | `'B'` |
| `char_code('0')` | `48`, not the integer zero |

In `c + 1`, the character first undergoes integer promotion. The returned value is then converted to `char`. The `'A'` example is representable; this is not a general Unicode “next character” operation.

The demo accepts a character or its numeric ASCII code, so `./demo char_code A` and `./demo char_code 65` both produce `65`. A single digit argument such as `5` is parsed as the character `'5'`.

### Boolean expressions represented as integers

```c
int is_positive(int x)
{
    return x > 0;
}

int is_even(int x)
{
    return x % 2 == 0;
}
```

Comparison and logical operators produce an `int` equal to `0` or `1`:

| Operator | Meaning | Example |
| --- | --- | --- |
| `==`, `!=` | Equal, not equal | `year % 100 != 0` |
| `<`, `<=`, `>`, `>=` | Ordering comparisons | `x > 0` |
| `&&` | Logical AND | Both conditions must hold |
| `||` | Logical OR | At least one condition must hold |
| `!` | Logical NOT | `!0` is `1` |
| `%` | Integer remainder | `8 % 2` is `0` |

For conditions, zero is false and any nonzero value is true. This differs from saying every integer used as a condition must already equal `0` or `1`.

`&&` and `||` **short-circuit**: `A && B` skips `B` when `A` is false, and `A || B` skips `B` when `A` is true. This matters when the second expression is valid only under a condition checked by the first.

Examples: `is_positive(-3)` is `0`, `is_positive(3)` is `1`, `is_even(7)` is `0`, and `is_even(-8)` is `1`.

### Floating-point arithmetic and conversion to integers

```c
double add_double(double a, double b)
{
    return a + b;
}

int to_int(double x)
{
    return (int)x;
}
```

The demonstration prints floating-point results with `%.17g`, making small representation errors visible. On the usual binary64 system:

| Call | Typical printed result | Explanation |
| --- | --- | --- |
| `add_double(0.1, 0.2)` | `0.30000000000000004` | The operands are binary approximations |
| `add_double(1e16, 1)` | `10000000000000000` | At this magnitude, the increment can be lost to rounding |
| `to_int(3.9)` | `3` | Fractional part discarded |
| `to_int(-3.9)` | `-3` | Truncation toward zero, not rounding down |

Only use the demonstrated cast when the input is finite and its truncated value is representable as `int`. A cast does not automatically clamp an out-of-range floating-point value to `INT_MIN` or `INT_MAX`.

### Integer division versus floating-point division

```c
double divide_ints(int a, int b)
{
    return a / b;
}

double divide_cast(int a, int b)
{
    return (double)a / b;
}
```

| Call | Calculation | Returned value |
| --- | --- | --- |
| `divide_ints(7, 2)` | Integer `7 / 2` gives `3`, then converts to `double` | `3.0` |
| `divide_cast(7, 2)` | `7.0 / 2.0` | `3.5` |
| `divide_ints(-7, 2)` | Integer division truncates toward zero | `-3.0` |
| `divide_cast(-7, 2)` | Floating-point division | `-3.5` |

The demo may print the integral `double` result as `3` rather than `3.0` because it uses `%g`. The type is still `double`.

**The return type does not change how the return expression is evaluated.** Likewise, `(double)(a / b)` performs integer division first and cannot recover the discarded fraction.

For the integer-division function, require `b != 0` and a representable quotient. On the classroom system, `INT_MIN / -1` is not representable as `int`. The corresponding `%` operation has the same exceptional case. The floating-point version also assumes a nonzero divisor in this exercise.

### Running the supplied type demo

```bash
gcc -std=c11 -O0 -Wall -Wextra -o demo main.c examples.c
./demo help
./demo help divide_cast
./demo add 5 7
./demo average_safe 2147483647 2147483647
./demo char_code A
./demo add_double 0.1 0.2
./demo divide_ints 7 2
./demo divide_cast 7 2
```

Calling a function without arguments runs its prepared examples. `./demo all` runs all prepared calls, including intentional undefined-behavior and implementation-defined demonstrations. Use individual defined calls when checking expected results; the output of the entire demo is not a portable answer sheet.

## Exercise 1: leap years

**Problem.** Determine whether a given year is a leap year, returning `1` for yes and `0` for no.

A year is a leap year if it is divisible by $4$, except that a century year must also be divisible by $400$:

$$
\boxed{
(4\mid y)\land\bigl((100\nmid y)\lor(400\mid y)\bigr).
}
$$

Equivalently:

$$
\bigl((4\mid y)\land(100\nmid y)\bigr)\lor(400\mid y).
$$

The equivalence uses the fact that divisibility by $400$ already implies divisibility by $4$.

**Supplied implementation (`leapyear.c`).**

```c
#include <leapyear.h>

int leapyear(int year)
{
    int result;
    result = (year % 4 == 0)
          && (year % 100 != 0 || year % 400 == 0);
    return result;
}
```

This illustrates the sequence **declaration → assignment → return**. The assignment stores a Boolean result represented as an `int`.

| Year | Divisible by 4? | Divisible by 100? | Divisible by 400? | Result |
| --- | --- | --- | --- | --- |
| 2023 | No | No | No | `0` |
| 2024 | Yes | No | No | `1` |
| 1900 | Yes | Yes | No | `0` |
| 2000 | Yes | Yes | Yes | `1` |
| 2100 | Yes | Yes | No | `0` |
| 2400 | Yes | Yes | Yes | `1` |

For `1900`, the final expression is `1 && (0 || 0)`, hence `0`. For `2000`, it is `1 && (0 || 1)`, hence `1`.

```bash
gcc -I. -std=c99 -Wall -Wextra leapyear.c main.c -o leapyear
./leapyear 1900
./leapyear 2000
```

The two calls print `0` and `1`. For the calendar interpretation, use a positive year. The supplied function applies its arithmetic test to any `int` without validating the historical meaning of the input.

## Exercise 2: does a quadratic have real roots?

**Problem.** For the quadratic equation

$$
ax^2+bx+c=0,\qquad a\ne0,
$$

determine whether there is at least one real root.

The discriminant is

$$
\Delta=b^2-4ac.
$$

| Discriminant | Real roots | Boolean result |
| --- | --- | --- |
| $\Delta>0$ | Two distinct real roots | `1` |
| $\Delta=0$ | One repeated real root | `1` |
| $\Delta<0$ | No real roots | `0` |

Thus the required condition is $\Delta\ge0$, rather than $\Delta>0$. There is no need to compute a square root just to answer whether real roots exist.

**Supplied implementation (`hasroots.c`).**

```c
#include <hasroots.h>

int hasroots(float a, float b, float c)
{
    return b * b - 4 * a * c >= 0;
}
```

`b * b` expresses $b^2$. In C, `^` is bitwise XOR, not exponentiation.

| $(a,b,c)$ | Equation | $\Delta$ | Result |
| --- | --- | --- | --- |
| $(1,-3,2)$ | $x^2-3x+2=0$ | $1$ | `1` |
| $(1,2,1)$ | $(x+1)^2=0$ | $0$ | `1` |
| $(1,0,1)$ | $x^2+1=0$ | $-4$ | `0` |

```bash
gcc -I. -std=c99 -Wall -Wextra hasroots.c main.c -o hasroots
./hasroots 1 -3 2
./hasroots 1 2 1
./hasroots 1 0 1
```

**Precondition and numerical limitation.** The quadratic argument requires `a != 0`. For instance, `(0, 0, 1)` describes the impossible equation $1=0$, but the supplied discriminant-only function returns `1`. Also, the C function tests a computed `float` discriminant; rounding near zero and extreme magnitudes can make that differ from an exact-real calculation.

**Supplementary extension: allowing non-quadratic equations.** If the specification is widened to all equations $ax^2+bx+c=0$, handle `a == 0` separately:

```c
int hasroots_general(float a, float b, float c)
{
    if (a == 0.0f)
        return b != 0.0f || c == 0.0f;
    return b * b - 4 * a * c >= 0;
}
```

When `a == 0` and `b != 0`, the linear equation has a root. When both are zero, every real number is a solution if `c == 0`; otherwise none is. This extension does not eliminate floating-point rounding issues.

## Exercise 3: divisibility

**Problem.** Determine whether `dividend` is divisible by `divisor`.

For a nonzero divisor $d$, divisibility means

$$
d\mid n
\iff
\exists k\in\mathbb Z:\ n=kd
\iff
\text{the remainder is }0.
$$

The supplied folder contains `divisible.h` and `main.c`, but no `divisible.c`.

**Basic solution under a precondition.** If the divisor is nonzero and the integer quotient is representable, the calculation is simply:

```c
return dividend % divisor == 0;
```

Negative inputs do not invalidate the zero-remainder test: `-12` is divisible by `3`, and `12` is divisible by `-3`. Zero is divisible by every nonzero integer.

**Supplementary reference implementation (`divisible.c`).** The driver only expects a yes/no result, so this version defines a zero divisor to return false. It also handles `-1` before evaluating `%`, avoiding the exceptional `INT_MIN % -1` case on the classroom system.

```c
#include <divisible.h>

int divisible(int dividend, int divisor)
{
    if (divisor == 0)
        return 0;
    if (divisor == -1)
        return 1;
    return dividend % divisor == 0;
}
```

The zero-divisor behavior is an explicit convention added by this solution, not a requirement stated in the supplied header.

| Dividend | Divisor | Result |
| --- | --- | --- |
| `12` | `3` | `1` |
| `13` | `3` | `0` |
| `0` | `5` | `1` |
| `-12` | `3` | `1` |
| `12` | `-3` | `1` |
| `INT_MIN` | `-1` | `1` |
| `12` | `0` | `0`, by this implementation's convention |
| `0` | `0` | `0`, by the same convention |

Save the function as `divisible.c` beside the supplied header and driver:

```bash
gcc -I. -std=c99 -Wall -Wextra divisible.c main.c -o divisible
./divisible 12 3
./divisible 13 3
```

Unlike the first two drivers, this driver prints a sentence, such as `Number 12 is divisible by 3`.

## Exercise 4: fixed-calendar date conversions

The supplied material describes 13 months of 28 days each:

$$
13\cdot28=364.
$$

The programming task connects a day number with a month/day pair using integer division and remainder.

**Scope of this solution.** The README also mentions Year Day and Leap Day, but the provided header has no year argument and specifies no special-day encoding. Its special-day description is insufficient to implement a complete calendar. The functions below therefore handle only the 364 ordinary days; they do not claim to implement every rule of the full International Fixed Calendar.

### Input and output conventions

Use **one-based** numbering:

$$
1\le n\le364,\qquad1\le m\le13,\qquad1\le d\le28.
$$

Here $n$ is the ordinal day number, $m$ is the month, and $d$ is the day of that month. Although the README says “days elapsed,” its range table and command description use day 1 for the first day. This solution follows that convention, rather than a zero-based elapsed count.

Encode a date as the integer

$$
\textit{date}=100m+d.
$$

Examples: month 1, day 1 is `101`; month 7, day 5 is `705`; month 13, day 28 is `1328`. Because month 13 has two digits, this is more precisely an `M(M)DD` integer encoding than a fixed-width string.

### Converting a date to a day number

Recover the month and day:

$$
m=\textit{date}\mathbin{\mathrm{div}}100,\qquad
d=\textit{date}\bmod100.
$$

There are $m-1$ complete months before the current one, each contributing 28 days. Therefore:

$$
\boxed{n=28(m-1)+d.}
$$

For `705`, the calculation is

$$
m=7,\quad d=5,\quad n=28\cdot6+5=173.
$$

### Converting a day number to a date

First switch to zero-based numbering by subtracting one:

$$
n-1=28q+r,\qquad0\le r<28.
$$

The quotient counts complete months, and the remainder counts days within the current month, both starting from zero. Convert back:

$$
\boxed{
m=(n-1)\mathbin{\mathrm{div}}28+1,\qquad
d=(n-1)\bmod28+1.
}
$$

Finally return $100m+d$.

**Why subtract one first?** At $n=28$, `n / 28 + 1` would incorrectly say month 2, while `n % 28` would give day 0. With `n - 1`, we obtain quotient 0 and remainder 27, giving month 1, day 28.

| Day number $n$ | $n-1$ | Quotient by 28 | Remainder | $(m,d)$ | Encoded date |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | $(1,1)$ | `101` |
| 28 | 27 | 0 | 27 | $(1,28)$ | `128` |
| 29 | 28 | 1 | 0 | $(2,1)$ | `201` |
| 56 | 55 | 1 | 27 | $(2,28)$ | `228` |
| 57 | 56 | 2 | 0 | $(3,1)$ | `301` |
| 173 | 172 | 6 | 4 | $(7,5)$ | `705` |
| 337 | 336 | 12 | 0 | $(13,1)$ | `1301` |
| 364 | 363 | 12 | 27 | $(13,28)$ | `1328` |

### Supplementary reference implementation

The supplied folder contains `calendar.h`, `days2date.c`, and `date2days.c`, but no `calendar.c`. Both existing `.c` files are drivers containing `main`; neither implements the conversion functions.

Save the following as `calendar.c`. This reference solution returns `-1` for an invalid or unsupported input; that error convention is supplementary.

```c
#include <calendar.h>

int days2date(int days)
{
    if (days < 1 || days > 364)
        return -1;

    int month = (days - 1) / 28 + 1;
    int day = (days - 1) % 28 + 1;
    return 100 * month + day;
}

int date2days(int date)
{
    if (date < 101 || date > 1328)
        return -1;

    int month = date / 100;
    int day = date % 100;
    if (month < 1 || month > 13 || day < 1 || day > 28)
        return -1;

    return 28 * (month - 1) + day;
}
```

The outer range check alone does not validate a date: for example, `129` is numerically between `101` and `1328`, but day 29 does not exist in an ordinary 28-day month.

Build the two drivers **separately**, because each defines its own `main`:

```bash
gcc -I. -std=c99 -Wall -Wextra calendar.c days2date.c -o days2date
gcc -I. -std=c99 -Wall -Wextra calendar.c date2days.c -o date2days
./days2date 173
./date2days 705
```

The outputs are `705` and `173`.

### Why the two conversions are inverses

For a valid date, set $n=28(m-1)+d$. Then

$$
n-1=28(m-1)+(d-1).
$$

Since $0\le d-1<28$, division by 28 returns quotient $m-1$ and remainder $d-1$. Thus `days2date` recovers the original month and day.

Conversely, if $n-1=28q+r$, then `days2date` produces $m=q+1$ and $d=r+1$. Applying `date2days` gives

$$
28(m-1)+d=28q+r+1=n.
$$

This gives two useful testing properties:

```c
date2days(days2date(n)) == n
days2date(date2days(date)) == date
```

The first applies to all 364 valid day numbers; the second applies to all $13\cdot28$ valid month/day pairs. Also test rejection of `0`, `365`, `366`, `100`, `129`, `1300`, and `1401` in their appropriate functions.

## Input handling and testing

The supplied small drivers illustrate calling functions, rather than complete input validation:

- Leap Year, Roots, and both Calendar drivers access `argv` without first checking the argument count. Supply the required arguments.
- Divisible checks that exactly two arguments were supplied.
- These exercise drivers use `atoi` or `atof`; they do not fully validate malformed input or representability. The type demo uses more careful `strtol`, `strtoul`, and `strtod` parsing.
- A successful parse does not guarantee a safe arithmetic operation. For example, two individually valid `int` arguments may still overflow when added.

| Topic | Useful tests | What they distinguish |
| --- | --- | --- |
| Integer average | Small values and two `INT_MAX` inputs | Safe result versus unsafe intermediate sum |
| Division | `7 / 2` and `-7 / 2`, with and without a cast | Operand types and truncation toward zero |
| Leap year | 2023, 2024, 1900, 2000 | Ordinary, divisible-by-4, and century cases |
| Roots | Positive, zero, and negative discriminant | Two, repeated, and absent real roots |
| Divisibility | Exact, non-exact, negative, zero dividend | Correct remainder test |
| Calendar | First/last days of months and all valid round trips | One-based indexing and inverse formulas |

**Review questions.**

1. Why does returning `double` not make `a / b` floating-point division when both operands are `int`?
2. Why must the cast in `average_safe` occur before addition?
3. Why can `-1 < 1U` be false?
4. Why does the roots test use `>= 0` instead of `> 0`?
5. Why does the calendar formula divide `n - 1` rather than `n`?

**Answers.** (1) The operands determine the division before the result is converted. (2) A later cast cannot undo signed overflow. (3) The signed operand is converted to unsigned. (4) A zero discriminant still gives a real repeated root. (5) Subtracting one makes the quotient and remainder align with one-based month/day numbering.

## Source attribution

The supplied exercise files and README notices identify their course code as copyright © 2025 Valentin Cassano and Santiago Figueira, licensed under GNU GPL version 3 or later. Those notices apply to the quoted course code; the blog's general article license does not replace them. The type-demo folder provides no explicit license notice. Explanations, test organization, and sections labelled supplementary were added for these notes.
