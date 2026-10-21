---
title: "Data Types and Programming"
published: 2026-10-14
description: "C workshop exercises on leap years, quadratic roots, divisibility, fixed-calendar conversion, and polynomial evaluation."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: the supplied folders *01 - Leap Year*, *02 - Roots*, *03 - Divisible*, *04 - International Fixed Calendar*, and *05 - Polynomial Evaluation*. The source headers credit Valentin Cassano and Santiago Figueira, Introduction to Computer Science, GTIIT, Winter 2025.

The workshop practices Boolean expressions, arithmetic operators, function declarations, separate compilation, integer division, remainder, and basic command-line input. Code labelled **supplied implementation** was present in the downloaded folders. Code labelled **completed implementation** fills in a file requested by the task but absent from the corresponding folder.

## Workshop tasks

The worksheet asks for the following work.

1. Download and extract the five project folders.
2. Implement `leapyear` in `leapyear.c`.
3. Implement `divisible` in `divisible.c`.
4. Implement `days2date` and `date2days` in `calendar.c`.
5. Implement `evaluation` in `evaluation.c`.
6. Implement `hasroots` in `hasroots.c`.

The downloaded folders are numbered by project rather than by the order in which the worksheet lists the tasks. These notes follow folder order from `01` through `05`.

| Folder | Function | Required implementation file | State of the downloaded material |
| --- | --- | --- | --- |
| `01 - Leap Year` | `leapyear` | `leapyear.c` | Implementation supplied |
| `02 - Roots` | `hasroots` | `hasroots.c` | Implementation supplied |
| `03 - Divisible` | `divisible` | `divisible.c` | Implementation missing |
| `04 - International Fixed Calendar` | `days2date`, `date2days` | `calendar.c` | Implementation missing |
| `05 - Polynomial Evaluation` | `evaluation` | `evaluation.c` | Implementation missing; supplied driver also contains errors |

Each project separates the function declaration from its implementation and driver.

| File | Purpose |
| --- | --- |
| A `.h` file | Declares the function interface |
| The requested implementation `.c` file | Defines the calculation |
| `main.c` or another driver | Reads arguments, calls the function, and prints the result |

The compiler must receive both the implementation and the driver. The `-I.` option lets angle-bracket includes such as `<leapyear.h>` find headers in the current directory.

## 1. Leap Year

The function returns `1` when `year` is a leap year and `0` otherwise. A year is a leap year precisely when it is divisible by $4$, except that a century year must also be divisible by $400$.

$$
\boxed{
(4\mid y)\land\bigl((100\nmid y)\lor(400\mid y)\bigr)
}
$$

### Supplied implementation

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

The remainder test `year % d == 0` expresses divisibility by `d`. The comparison and logical operators produce an `int` equal to `0` or `1`.

| Year | Divisible by 4 | Divisible by 100 | Divisible by 400 | Result |
| --- | --- | --- | --- | --- |
| 2023 | No | No | No | `0` |
| 2024 | Yes | No | No | `1` |
| 1900 | Yes | Yes | No | `0` |
| 2000 | Yes | Yes | Yes | `1` |
| 2100 | Yes | Yes | No | `0` |

```bash
gcc -I. -std=c99 -Wall -Wextra leapyear.c main.c -o leapyear
./leapyear 1900
./leapyear 2000
```

The calls print `0` and `1`, respectively. The arithmetic rule works for any `int`; interpreting the input as a historical year requires an additional positive-year precondition.

## 2. Roots

For the quadratic equation

$$
ax^2+bx+c=0,qquad a\ne0,
$$

the discriminant is

$$
\Delta=b^2-4ac.
$$

There is at least one real root exactly when $\Delta\ge0$.

| Discriminant | Number of distinct real roots | Result |
| --- | --- | --- |
| $\Delta>0$ | Two | `1` |
| $\Delta=0$ | One | `1` |
| $\Delta<0$ | Zero | `0` |

### Supplied implementation

```c
#include <hasroots.h>

int hasroots(float a, float b, float c)
{
    return b * b - 4 * a * c >= 0;
}
```

Multiplication expresses $b^2$ as `b * b`. In C, `^` is bitwise XOR and is not an exponentiation operator.

```bash
gcc -I. -std=c99 -Wall -Wextra hasroots.c main.c -o hasroots
./hasroots 1 -3 2
./hasroots 1 2 1
./hasroots 1 0 1
```

These examples have positive, zero, and negative discriminants and print `1`, `1`, and `0`.

The specification is for a quadratic, so it assumes `a != 0`. The function performs `float` arithmetic; rounding near zero and overflow at extreme magnitudes can make the computed comparison differ from exact real arithmetic.

## 3. Divisible

For a nonzero divisor $d$, an integer $n$ is divisible by $d$ exactly when the remainder is zero.

$$
d\mid n
\iff
\exists k\in\mathbb{Z}:n=kd
\iff
n\bmod d=0
$$

The folder supplies `divisible.h` and `main.c`, but not `divisible.c`.

### Completed implementation

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

The mathematical relation “divisible by zero” is undefined, so this implementation returns false when `divisor == 0`. The `divisor == -1` case is handled before `%`; this avoids evaluating `INT_MIN % -1`, whose corresponding quotient is not representable as an `int` on the usual two's-complement system.

Negative values do not otherwise change the zero-remainder test. Zero is divisible by every nonzero integer.

| Dividend | Divisor | Result |
| --- | --- | --- |
| `12` | `3` | `1` |
| `13` | `3` | `0` |
| `0` | `5` | `1` |
| `-12` | `3` | `1` |
| `12` | `-3` | `1` |
| `12` | `0` | `0` under the stated convention |

```bash
gcc -I. -std=c99 -Wall -Wextra divisible.c main.c -o divisible
./divisible 12 3
./divisible 13 3
```

The supplied driver prints a sentence instead of a bare Boolean value.

## 4. International Fixed Calendar

The supplied material describes 13 ordinary months with 28 days each.

$$
13\cdot28=364
$$

The task connects a one-based day number $n$ with an encoded month/day pair. The README also discusses Year Day and Leap Day, but the supplied interface has no year argument and gives no encoding for these special days. The implementation below therefore handles the 364 ordinary days only.

### Representation

Use

$$
1\le n\le364,qquad1\le m\le13,qquad1\le d\le28.
$$

Encode month $m$ and day $d$ as

$$
\textit{date}=100m+d.
$$

Thus month 1, day 1 is `101`, month 7, day 5 is `705`, and month 13, day 28 is `1328`.

For a valid encoded date,

$$
\boxed{n=28(m-1)+d.}
$$

For a valid day number, first subtract one and apply integer quotient and remainder.

$$
\boxed{
m=(n-1)\mathbin{\mathrm{div}}28+1,qquad
d=(n-1)\bmod28+1
}
$$

Subtracting one is essential. Without it, day 28 would be interpreted as month 2, day 0 rather than month 1, day 28.

| Day number | Month and day | Encoded date |
| --- | --- | --- |
| 1 | $(1,1)$ | `101` |
| 28 | $(1,28)$ | `128` |
| 29 | $(2,1)$ | `201` |
| 173 | $(7,5)$ | `705` |
| 337 | $(13,1)$ | `1301` |
| 364 | $(13,28)$ | `1328` |

### Completed implementation

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
    int month = date / 100;
    int day = date % 100;

    if (month < 1 || month > 13 || day < 1 || day > 28)
        return -1;

    return 28 * (month - 1) + day;
}
```

Returning `-1` for an invalid or unsupported value is an added error convention; the supplied header does not specify one.

Compile the two drivers separately because both define `main`.

```bash
gcc -I. -std=c99 -Wall -Wextra calendar.c days2date.c -o days2date
gcc -I. -std=c99 -Wall -Wextra calendar.c date2days.c -o date2days
./days2date 173
./date2days 705
```

The outputs are `705` and `173`.

### Why the conversions are inverses

For a valid date, let $n=28(m-1)+d$. Then

$$
n-1=28(m-1)+(d-1).
$$

Because $0\le d-1<28$, division by 28 returns quotient $m-1$ and remainder $d-1$. Therefore `days2date` recovers the original month and day.

Conversely, write $n-1=28q+r$ with $0\le r<28$. The first function produces $m=q+1$ and $d=r+1$. Substitution into the second formula gives

$$
28(m-1)+d=28q+r+1=n.
$$

Useful round-trip tests are

```c
date2days(days2date(n)) == n
days2date(date2days(date)) == date
```

The first identity applies to all $1\le n\le364$; the second applies to every valid encoded month/day pair.

## 5. Polynomial Evaluation

The requested function evaluates

$$
P(x,y,z,x_1,y_1)=(xx_1)^2+yy_1+z.
$$

The supplied declaration is

```c
int evaluation(float x, float y, float z, float x1, float y1);
```

Although the parameters are `float`, the return type is `int`. Consequently, the final floating-point value is converted to `int` and its fractional part is discarded toward zero. The conversion is only valid when the finite result is representable as `int`.

### Completed implementation

```c
#include <evaluation.h>

int evaluation(float x, float y, float z, float x1, float y1)
{
    float product = x * x1;
    float result = product * product + y * y1 + z;
    return (int)result;
}
```

The square is written as `product * product`; `^ 2` would perform bitwise XOR rather than exponentiation.

For example,

$$
P(1,2,3,4,5)=4^2+10+3=29.
$$

Therefore `./evaluation 1 2 3 4 5` should print `29`.

### Corrections to the supplied driver

The downloaded `main.c` contains several independent errors.

1. It stores the results of `atof` in `int` variables instead of `float` variables.
2. It reads `y1` from `argv[25]` instead of `argv[5]`.
3. It calls `evaluate`, while the header declares `evaluation`.
4. It prints an `int` result using `%lf` instead of `%d`.

A corrected driver is

```c
#include <stdio.h>
#include <stdlib.h>
#include <evaluation.h>

int main(int argc, char **argv)
{
    if (argc != 6) {
        printf("Usage: ./evaluation <x> <y> <z> <x1> <y1>\n");
        return 1;
    }

    float x = strtof(argv[1], NULL);
    float y = strtof(argv[2], NULL);
    float z = strtof(argv[3], NULL);
    float x1 = strtof(argv[4], NULL);
    float y1 = strtof(argv[5], NULL);

    printf("Result: %d\n", evaluation(x, y, z, x1, y1));
    return 0;
}
```

This version fixes the supplied indexing, types, function name, and format specifier. It still assumes that every argument is a valid floating-point string; production code should validate the full result of `strtof`.

```bash
gcc -I. -std=c99 -Wall -Wextra evaluation.c main.c -o evaluation
./evaluation 1 2 3 4 5
```

## Testing checklist

| Project | Essential cases | Purpose |
| --- | --- | --- |
| Leap Year | 2023, 2024, 1900, 2000 | Ordinary, divisible-by-4, and century rules |
| Roots | Positive, zero, and negative discriminant | Two, repeated, and absent real roots |
| Divisible | Exact, non-exact, negative, zero dividend, zero divisor | Remainder rule and domain convention |
| Calendar | First and last day of each month; all round trips | One-based indexing and inverse formulas |
| Polynomial | Integer result, fractional result, negative result | Arithmetic grouping and conversion to `int` |

The supplied drivers are small teaching programs rather than complete command-line parsers. Except where explicitly checked, they assume the correct number and form of arguments.

## Source corrections and attribution

The supplied README files contain several mismatches with their folders. Some refer to a driver as `main.o` although the supplied file is `main.c`; the calendar compilation headings are interchanged; and the Polynomial Evaluation README is largely copied from the Divisible project. The commands in these notes use the actual filenames and declared interfaces.

The source headers identify the exercise code as copyright © 2025 Valentin Cassano and Santiago Figueira and licensed under GNU GPL version 3 or later. Those notices continue to apply to the quoted and adapted course code. The missing implementations, corrections, explanations, and tests were added while organizing these notes.

