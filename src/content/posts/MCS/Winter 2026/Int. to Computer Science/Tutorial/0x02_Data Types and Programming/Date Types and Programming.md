---
title: "Data Types and Programming"
published: 2026-10-20
description: "C types, conversions, overflow, Boolean expressions, characters, floating-point arithmetic, and integer division."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: the supplied *C_Types_Demo* folder. The teaching functions are in `examples.c`; `main.c` parses command-line arguments, dispatches calls, and prints their results.

The goal is to observe how operand types determine arithmetic, conversions, comparisons, and return values in C. Some prepared calls intentionally demonstrate undefined or implementation-defined behavior, so their output is not a portable answer.

## Project structure and compilation

The project separates function declarations, implementations, and input/output:

| File | Role |
| --- | --- |
| `examples.h` | Declares each function's name, parameter types, and return type |
| `examples.c` | Defines the small teaching functions |
| `main.c` | Parses arguments, selects a function, and prints its result |
| `README.md` | Explains the intended task and how to build and run it |

For example:

```c
/* Declarations in examples.h */
int add(int a, int b);
double divide_cast(int a, int b);
```

These declarations make the interfaces available to `main.c`. The function bodies remain in `examples.c`; both source files must be compiled and linked.

| Option | Meaning |
| --- | --- |
| `-std=c11` | Compile according to the C11 language standard |
| `-Wall -Wextra` | Enable useful compiler warnings |
| `-O0` | Disable most optimizations for the live type demonstration |
| `-o name` | Name the resulting executable |

Run the build command from the `C_Types_Demo` directory.

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

## Suggested experiments

Run the functions individually before using `./demo all`. This keeps each observation tied to one language rule and avoids treating undefined behavior as a predictable result.

| Topic | Commands | What to observe |
| --- | --- | --- |
| Integer arithmetic | `./demo add 5 7` | Ordinary `int` addition |
| Intermediate overflow | `./demo average_bad`, `./demo average_safe` | Widening must occur before addition |
| Signed and unsigned | `./demo to_unsigned -1`, `./demo signed_less_unsigned -1 1` | Conversion can change the represented value and comparison |
| Narrow integer casts | `./demo to_uchar 257`, `./demo to_short 100000` | Unsigned reduction is defined; an out-of-range signed conversion is implementation-defined |
| Characters | `./demo char_code A`, `./demo next_char A` | A `char` participates in arithmetic through its numeric code |
| Boolean expressions | `./demo is_positive -3`, `./demo is_even 8` | Comparisons return `0` or `1` |
| Floating point | `./demo add_double 0.1 0.2`, `./demo add_double 1e16 1` | Binary representation and rounding affect results |
| Conversion to `int` | `./demo to_int 3.9`, `./demo to_int -3.9` | The fractional part is discarded toward zero |
| Division | `./demo divide_ints 7 2`, `./demo divide_cast 7 2` | Operand types determine whether division is integral or floating-point |

Useful review questions follow.

1. Why does returning `double` not make `a / b` floating-point division when both operands are `int`?
2. Why must the cast in `average_safe` occur before addition?
3. Why can `-1 < 1U` be false?
4. Which conversions have a guaranteed modulo rule, and which depend on the implementation?
5. Why can `0.1 + 0.2` differ from the exact decimal value `0.3`?

**Answers.** (1) The operand types determine the division before the result is converted. (2) A later cast cannot undo signed overflow. (3) The signed operand is converted to `unsigned int`. (4) Conversion to an unsigned integer uses modular reduction, while an out-of-range conversion to a signed integer is implementation-defined. (5) Most decimal fractions do not have finite binary floating-point representations.

## Key conclusions

- The type of an expression is determined before assignment or return-value conversion.
- Signed integer overflow is undefined behavior; unsigned arithmetic is modular.
- Integer division truncates toward zero.
- Cast before an operation when the operation itself must use the new type.
- Comparisons and logical operators produce `int` values `0` or `1`.
- Floating-point values are approximations with finite precision.

## Source attribution

The functions, dispatcher, and README material summarized here come from the supplied `C_Types_Demo` folder. That folder contains no explicit license notice. Explanations, tables, and experiment organization were added for these notes.
