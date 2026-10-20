---
title: "Data Types and Imperative Programming"
published: 2026-10-19
description: "Basic data types, expression evaluation, indexing and slicing, functions, states, assignments, sequential composition, leap years, and variable swapping."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: *Basic Data Types* (18 slides) and *Imperative Programming* (16 slides), Introduction to Computer Science, Valentin Cassano and Santiago Figueira, GTIIT. The second deck was supplied as *02 - assignments and sequential composition.pdf*. References below use **D** for the data-types deck and **I** for the imperative-programming deck, with PDF page numbers counted from the title page. Supplementary explanations are labelled.

These notes use the course's **abstract pseudocode**, rather than the syntax and representation rules of a particular programming language. In particular, `:=` means assignment, `=` means equality, `/` means ordinary division, and `div` means integer division. Natural numbers include zero.

## Data types, values, and expressions

*D, slides 2–4.*

**Definition 1 (Data type).** A **data type** describes a collection of values together with the operations defined on those values. It answers two questions:

1. What values can this data have?
2. What operations are meaningful for it?

The lecture covers six categories: booleans, numbers, characters, strings, arrays, and matrices.

| Type or family | Examples of values | Examples of operations |
| --- | --- | --- |
| `bool` | `true`, `false` | Negation, conjunction, disjunction |
| Numeric types | `3`, `-2`, `0.5` | Arithmetic and comparison |
| `char` | `'a'`, `'3'`, `'!'` | Equality and order comparisons |
| `string` | `"hello"`, `""` | Indexing, slicing, concatenation, length |
| Array of a type | `[10, 20, 30]` | Indexing and length |
| Matrix of a type | `[[1, 2], [3, 4]]` | Row/column indexing and dimensions |

**Definition 2 (Value, literal, variable, and expression).**

| Concept | Meaning | Example |
| --- | --- | --- |
| **Value** | A piece of data obtained or manipulated during computation | The natural number five |
| **Literal** | A notation that directly represents a value | `5`, `true`, `'a'`, `"hello"` |
| **Variable** | A name associated with a current stored value and a type | `year`, `left`, `result` |
| **Expression** | A combination of literals, variables, and operations that can be evaluated | `3 + 2`, `year % 4 = 0` |

A literal is itself a simple expression. Evaluating a valid expression produces a **value**, and its **type** describes what kind of value it is. For example, `3 + 2` evaluates to `5`, while `3 > 2` evaluates to `true`. Both use numeric operands, but their results have different types.

**Why types matter:**

| Reason | Explanation |
| --- | --- |
| **Abstraction** | We can reason about mathematical integers without immediately considering a machine's finite storage limits. |
| **Clarity** | A type communicates the role of data: a truth value, a number, a character, or a collection. |
| **Correctness** | Type rules reject operations that are not defined for the operands being used. |

**Clarification.** Type correctness is one check on a program, not a proof of its entire behavior. An expression may have compatible operand types and still fail because of an invalid index or a zero divisor.

## Booleans

*D, slides 5–6.*

**Definition 3 (Boolean type).** The type `bool` contains exactly two values:

$$
\mathrm{bool}=\{\mathrm{false},\mathrm{true}\}.
$$

The lecture also uses `1` and `0` as notations for truth and falsehood. This notation does not make every numeric operation a Boolean operation.

| Operation | Mathematical notation | Alternative notation in the slides | Meaning |
| --- | --- | --- | --- |
| Negation | $\neg p$ | `!p` | Reverse the truth value |
| Conjunction | $p\land q$ | `p & q` | True exactly when both operands are true |
| Disjunction | $p\lor q$ | `p \| q` | True when at least one operand is true |

**Supplementary truth table.**

| $p$ | $q$ | $\neg p$ | $p\land q$ | $p\lor q$ |
| --- | --- | --- | --- | --- |
| false | false | true | false | false |
| false | true | true | false | true |
| true | false | false | false | true |
| true | true | false | true | true |

Boolean operators take Boolean inputs and return a Boolean result. Parentheses identify the subexpression to evaluate first:

$$
\neg(\mathrm{true}\land\mathrm{false})
=\neg\mathrm{false}
=\mathrm{true},
$$

$$
(\mathrm{true}\lor\mathrm{false})\land\mathrm{false}
=\mathrm{true}\land\mathrm{false}
=\mathrm{false}.
$$

**Notation clarification.** The alternative operator symbols above belong to the lecture's pseudocode. Their meaning must not be assumed to be identical in another programming language.

## Numbers and result types

*D, slides 7–8.*

**Definition 4 (Numeric families).** The course assumes the inclusion hierarchy

$$
\mathrm{nat}\subseteq\mathrm{int}\subseteq\mathrm{rat}\subseteq\mathrm{real},
$$

corresponding to natural numbers, integers, rational numbers, and real numbers.

| Type | Mathematical values | Examples |
| --- | --- | --- |
| `nat` | $0,1,2,\ldots$ | `0`, `3`, `12` |
| `int` | $\ldots,-2,-1,0,1,2,\ldots$ | `-2`, `0`, `7` |
| `rat` | Fractions $p/q$, where $p,q\in\mathbb Z$ and $q\ne0$ | $1/2$, $7/2$ |
| `real` | Real numbers, including irrational numbers | $\sqrt2$, $\pi$ |

The available operations include addition, subtraction, multiplication, ordinary division, integer division (`div`), remainder (`mod` or `%`), exponentiation (`pow` or `^`), roots, and comparisons.

**Implicit conversion.** When numeric types are mixed, the course allows conversion to a type that supports the operation. For example, combining an integer and a rational can produce a rational. The result is not required to have the same type as either operand.

| Expression | Value | Result type in the lecture |
| --- | --- | --- |
| `3 + 2` | `5` | `nat` |
| `10 - 4` | `6` | `nat` |
| `3 - 5` | `-2` | `int` |
| `3 * 4` | `12` | `nat` |
| `7 div 2` | `3` | `nat` |
| `7 / 2` | `3.5` | `rat` |
| `3 + 0.5` | `3.5` | `rat` |
| `2 ^ 3` | `8` | `nat` |
| `5 > 3` | `true` | `bool` |
| `3 - 5 = -2` | `true` | `bool` |
| `4 mod 2 = 0` | `true` | `bool` |
| `(3 + 2) * (10 - 4)` | `30` | `nat` |

**Key distinctions:**

- Subtraction can leave the natural numbers: `3 - 5` needs an integer result.
- Ordinary division and integer division are different operations: `7 / 2 = 3.5`, but `7 div 2 = 3`.
- Comparisons return truth values, even when their operands are numbers.
- Type labels here follow the lecture's mathematical examples, not a compiler's complete type-inference rules. The slides do not specify how every possible numeric expression is typed.

**Supplementary connection to Euclidean division.** For natural numbers $a$ and $b>0$,

$$
a=(a\mathbin{\mathrm{div}}b)b+(a\bmod b),
\qquad 0\leqslant a\bmod b<b.
$$

Thus `a mod b = 0` tests whether $b$ divides $a$. This is the operation used later in the leap-year example. Division and remainder by zero are excluded; conventions for negative operands are not needed for that example.

## Characters

*D, slides 9–10.*

**Definition 5 (Character).** A `char` represents one symbol, such as a letter, digit, or punctuation mark. A character literal is written with single quotes, for example `'a'`.

Characters support equality, inequality, and order comparisons. Every valid comparison returns `bool`.

| Expression | Value | Type |
| --- | --- | --- |
| `'a'` | `'a'` | `char` |
| `'a' = 'a'` | `true` | `bool` |
| `'a' = 'b'` | `false` | `bool` |
| `'a' ≠ 'b'` | `true` | `bool` |
| `'a' < 'b'` | `true` | `bool` |
| `'b' < 'a'` | `false` | `bool` |
| `'Z' < 'a'` | `true` | `bool` |
| `'a' ≥ 'a'` | `true` | `bool` |
| `('a' ≥ 'a') ∧ ('a' ≤ 'z')` | `true` | `bool` |
| `'3' ≠ 3` | Type error in the course model | No valid result |

The character `'3'` and the number `3` are different kinds of data. In the course model, a comparison between them is not defined. It is therefore a type error, rather than a Boolean expression that happens to be true.

**Ordering clarification.** Character comparisons require an agreed character order. The table follows the order assumed by the slides, including `'Z' < 'a'`; this is not a claim about every language's text-sorting rules.

## Strings: indexing, slicing, and concatenation

*D, slides 11–12.*

**Definition 6 (String).** A string is a finite, ordered sequence of characters. Its length can vary. The empty string `""` contains no characters and has length zero.

These notes consistently use double quotes for strings and single quotes for individual characters, although the slides use both quote styles for string examples.

| Operation | Meaning | Result type |
| --- | --- | --- |
| `s[i]` | Character at index `i` | `char` |
| `s[i:]` | Substring from index `i` to the end | `string` |
| `s[:j]` | Substring from the start through index `j` | `string` |
| `s[i:j]` | Substring from index `i` through index `j` | `string` |
| `s + t` | Concatenate two strings | `string` |
| `len(s)` | Number of characters | `nat` |

For `s = "hello"`, the indices are:

| Index | `0` | `1` | `2` | `3` | `4` |
| --- | --- | --- | --- | --- | --- |
| Character | `'h'` | `'e'` | `'l'` | `'l'` | `'o'` |

| Expression | Value | Type |
| --- | --- | --- |
| `"hello"` | `"hello"` | `string` |
| `"hello"[0]` | `'h'` | `char` |
| `"hello"[4]` | `'o'` | `char` |
| `"hello"[1:]` | `"ello"` | `string` |
| `"hello"[:3]` | `"hell"` | `string` |
| `"hello"[1:3]` | `"ell"` | `string` |
| `len("hello")` | `5` | `nat` |
| `"hello" + " world"` | `"hello world"` | `string` |
| `len("")` | `0` | `nat` |
| `"hi" + ""` | `"hi"` | `string` |

**Important course convention.** Slide 12 includes the right endpoint of a slice: `s[1:3]` contains positions $1,2,3$. These notes preserve that convention. Do not silently replace it with the end-exclusive convention used in Python. For valid indices $0\leqslant i\leqslant j<\operatorname{len}(s)$, the lecture's `s[i:j]` has length $j-i+1$.

**Indexing versus slicing.** An index selects one character; a slice selects a string. Even a one-character string and a character have different types in this model.

Concatenation preserves order and has the empty string as an identity:

$$
s+\texttt{""}=\texttt{""}+s=s.
$$

## Arrays and nested arrays

*D, slides 13–14.*

**Definition 7 (Array).** An array is an ordered sequence whose elements all have the same type. The element type may itself be an array type.

| Notation | Meaning |
| --- | --- |
| `[x0, ..., x(n-1)]` | An array literal containing $n$ elements |
| `new(n)` | Create an array with $n$ elements |
| `a[i]` | Access the element at index `i` |
| `len(a)` | Number of elements |

For an array of length $n$, valid indices satisfy

$$
\boxed{0\leqslant i<n}.
$$

The last valid index is $n-1$, not $n$. An empty array has no valid element index. The slides do not specify initial element values for `new(n)`; do not assume that it fills the array with zeroes.

Let

```text
a = [10, 20, 30, 40, 50]
b = [[1, 2], [3]]
```

| Expression | Value | Type or status |
| --- | --- | --- |
| `a` | `[10, 20, 30, 40, 50]` | Array of `nat` |
| `a[0]` | `10` | `nat` |
| `a[2]` | `30` | `nat` |
| `a[4]` | `50` | `nat` |
| `len(a)` | `5` | `nat` |
| `[true, false, true][1]` | `false` | `bool` |
| `['h', 'i'][0]` | `'h'` | `char` |
| `a[1] + a[2]` | `50` | `nat` |
| `b[0]` | `[1, 2]` | Array of `nat` |
| `a[5]` | No element exists | Out-of-range access |

**Type error versus bounds error.** `a[5]` uses an array and a numeric index, but the index lies outside the array. It is a bounds error, not the mismatched-type error illustrated by `'3' ≠ 3`. The slide labels the result “undefined”; that is not an extra element or an ordinary result type.

An array of arrays need not be rectangular. In `b`, both elements are arrays of natural numbers, but their lengths are $2$ and $1$. By the course's convention, arrays of characters are referred to as strings.

## Matrices

*D, slides 15–16.*

**Definition 8 (Matrix).** A matrix is a rectangular array of arrays: its rows have the same element type and the same length.

| Notation | Meaning |
| --- | --- |
| `[[1, 2, 3], [4, 5, 6]]` | Matrix represented by its rows |
| `[1, 2, 3; 4, 5, 6]` | Alternative literal notation, with rows separated by a semicolon |
| `new(r, c)` | Create a matrix with $r$ rows and $c$ columns |
| `m[i][j]` | Element in row `i`, column `j` |
| `rows(m)`, `cols(m)` | Number of rows and columns |

For an $r\times c$ matrix, the bounds are checked separately:

$$
0\leqslant i<r,\qquad 0\leqslant j<c.
$$

For `m = [[1, 2, 3], [4, 5, 6]]`:

| Expression | Value | Type or status |
| --- | --- | --- |
| `m` | `[[1, 2, 3], [4, 5, 6]]` | Matrix of `nat` |
| `m[0][2]` | `3` | `nat` |
| `m[1][0]` | `4` | `nat` |
| `m[0][0]` | `1` | `nat` |
| `m[0][3]` | No such column | Out-of-range access |
| `rows(m)` | `2` | `nat` |
| `cols(m)` | `3` | `nat` |
| `m[0][1] + m[1][1]` | `2 + 5 = 7` | `nat` |

**Supplementary indexing explanation.** `m[0]` selects the first row, an array. Applying the second index selects an element of that row. Always read `m[i][j]` as **row first, column second**.

The nested array `[[1, 2], [3]]` is not a matrix under this definition because its rows have different lengths.

## Imperative programming and functions

*I, slides 2–6.*

**Definition 9 (Imperative programming).** An imperative algorithm is a sequence of commands that changes the program's state. It specifies how to reach a result through individual computation steps.

The fundamental building blocks are variables, expressions, assignments, and control structures. Sequential composition determines a simple execution order; conditionals and loops provide more general control over that order.

**Definition 10 (Functional abstraction).** A function packages a computation into a named unit with inputs, a body, and outputs:

```text
fun name(inputs) -> outputs
    body
```

| Part | Purpose |
| --- | --- |
| Name | Identifies the computation so it can be referred to and reused |
| Inputs | Values needed by the computation, optionally named and typed |
| Body | Commands that transform the inputs into results |
| Outputs | Results produced, optionally named and typed |

Input and output lists may be empty. Breaking a problem into functions helps make its parts understandable, reusable, and maintainable.

**Clarification.** “Functional abstraction” here means organizing imperative computations into functions. It does not change the lecture's programming paradigm into functional programming.

The division example from the previous lecture has the signature

```text
fun division(dividend: nat, divisor: nat)
    -> (quotient: nat, remainder: nat)
```

It has two named inputs and two named outputs, all of type `nat`. A signature describes the interface; the body describes the computation. As established in Lecture 01, this algorithm also requires `divisor > 0`: a type alone does not express every valid-input restriction.

## States and execution traces

*I, slide 7.*

**Definition 11 (State).** A state records the current values of the variables at a particular moment. We may view it as a mapping from variable names to values.

**Definition 12 (Execution trace).** An execution trace is the sequence of states produced as commands run:

$$
\sigma_0\longrightarrow\sigma_1\longrightarrow\cdots\longrightarrow\sigma_k.
$$

Here $\sigma_0$ is the **initial state**, and $\sigma_k$ is the **final state** of a terminating execution. The commands determine how the state changes and which command runs next. Different inputs generally produce different traces.

A trace table should record the current values after each command. In the lecture's tables, `-` marks a value that has not yet been assigned, while `.` means a value is unchanged from the previous state. These notes repeat unchanged values explicitly to make each state readable on its own.

**Supplementary example.** If the initial state is `{x: 2, y: 5}`, then executing `x := x + y` produces `{x: 7, y: 5}`. Only `x` changes.

## Assignment

*I, slides 8–9.*

**Definition 13 (Assignment).** An assignment has the form

```text
variable := expression
```

Its execution has two steps:

1. Evaluate the right-hand expression in the **current state**.
2. Store that value in the left-hand variable, replacing its previous value.

The assigned value must be compatible with the variable's type. Variables read on the right must already have usable values.

**Supplementary formal description.** For an assignment `x := E`,

$$
\sigma'=\sigma[x\mapsto\llbracket E\rrbracket_{\sigma}],
$$

where $\llbracket E\rrbracket_{\sigma}$ means the value of expression $E$ in the old state $\sigma$. All variables other than `x` retain their values.

**Assignment is different from equality.**

| Notation | Role | Effect |
| --- | --- | --- |
| `x := x + 1` | Command | Increases the current value of `x` by one |
| `x = x + 1` | Boolean expression | Compares two values; does not update `x` |

For example, if `x` is initially `4`, the assignment first evaluates `4 + 1`, then stores `5` in `x`. There is no requirement for old and new values to be equal.

## Worked example: leap years

*I, slides 10–11.*

**Problem 14.** Determine whether a year satisfies the Gregorian leap-year rule: divisible by $4$, except that a multiple of $100$ must also be a multiple of $400$.

```text
fun leapyear(year: nat) -> result: bool
    result := (year % 4 = 0) ∧ (year % 100 ≠ 0 ∨ year % 400 = 0)
```

Define the Boolean subexpressions

$$
A=(\mathrm{year}\bmod4=0),\quad
B=(\mathrm{year}\bmod100\ne0),\quad
C=(\mathrm{year}\bmod400=0).
$$

The result is $A\land(B\lor C)$.

| Year | $A$: divisible by $4$ | $B$: not divisible by $100$ | $C$: divisible by $400$ | Result |
| --- | --- | --- | --- | --- |
| `1900` | true | false | false | false |
| `2000` | true | false | true | true |
| `2100` | true | false | false | false |
| `2025` | false | true | false | false |

**Execution traces.** Each call has only one assignment. The input `year` remains unchanged, while `result` becomes the Boolean value computed from it.

| Input | Initial state `(year, result)` | Final state `(year, result)` |
| --- | --- | --- |
| `1900` | `(1900, -)` | `(1900, false)` |
| `2000` | `(2000, -)` | `(2000, true)` |
| `2100` | `(2100, -)` | `(2100, false)` |
| `2025` | `(2025, -)` | `(2025, false)` |

**Supplementary type check.** Each remainder operation produces a numeric value. Each comparison with zero produces `bool`. The conjunction and disjunction combine Boolean values, so the final value has the declared output type `bool`.

## Sequential composition

*I, slide 12.*

**Definition 15 (Sequential composition).** Commands run one after another in the written order. Each command receives the state left by the previous command.

For commands $C_1$ and $C_2$,

$$
\sigma_0\xrightarrow{C_1}\sigma_1\xrightarrow{C_2}\sigma_2.
$$

The second command uses $\sigma_1$, not the original $\sigma_0$. Assignments in a sequence are therefore **not simultaneous**.

**Supplementary order example.** Starting from `(x, y) = (2, 5)`:

| Commands | State after first command | Final state |
| --- | --- | --- |
| `x := y`, then `y := x + 1` | `(5, 5)` | `(5, 6)` |
| `y := x + 1`, then `x := y` | `(2, 3)` | `(3, 3)` |

Changing the order changes which values are read, so it can change the result.

## Swapping values with a temporary variable

*I, slide 13.*

**Algorithm 16.** Exchange `left` and `right` by saving one original value before overwriting it.

```text
fun swap(left: nat, right: nat) -> (left: nat, right: nat)
    temp  := right
    right := left
    left  := temp
```

For input `(1, 2)`:

| State | Executed command | `left` | `right` | `temp` |
| --- | --- | --- | --- | --- |
| Initial | None | `1` | `2` | `-` |
| After step 1 | `temp := right` | `1` | `2` | `2` |
| After step 2 | `right := left` | `1` | `1` | `2` |
| Final | `left := temp` | `2` | `1` | `2` |

For input `(3, 4)`:

| State | `left` | `right` | `temp` |
| --- | --- | --- | --- |
| Initial | `3` | `4` | `-` |
| After step 1 | `3` | `4` | `4` |
| After step 2 | `3` | `3` | `4` |
| Final | `4` | `3` | `4` |

**Supplementary correctness argument.** Let the initial values be `left = a` and `right = b`. The successive states are

$$
(a,b,-)\longrightarrow(a,b,b)\longrightarrow(a,a,b)\longrightarrow(b,a,b).
$$

The outputs are therefore `(b, a)`, as required. `temp` is an internal working variable, not an extra output.

**Why two assignments are insufficient in the obvious attempt:**

```text
left := right
right := left
```

Starting from `(a, b)`, the first command produces `(b, b)`. The second reads the already-updated `left`, so the result is still `(b, b)`. The original `a` has been lost. The temporary variable preserves information needed by a later command.

## Swapping values using arithmetic

*I, slide 14.*

**Algorithm 17.** The lecture gives another implementation that avoids a temporary variable:

```text
fun swap(left: nat, right: nat) -> (left: nat, right: nat)
    left  := left + right
    right := left - right
    left  := left - right
```

| State | `left` for input `(1, 2)` | `right` for input `(1, 2)` | `left` for input `(3, 4)` | `right` for input `(3, 4)` |
| --- | --- | --- | --- | --- |
| Initial | `1` | `2` | `3` | `4` |
| After step 1 | `3` | `2` | `7` | `4` |
| After step 2 | `3` | `1` | `7` | `3` |
| Final | `2` | `1` | `4` | `3` |

**Supplementary correctness argument.** With initial values `(a, b)`:

1. `left := left + right` gives `(a + b, b)`.
2. `right := left - right` uses the new `left`, giving `(a + b, (a + b) - b) = (a + b, a)`.
3. `left := left - right` uses the new `right`, giving `((a + b) - a, a) = (b, a)`.

For $a,b\geqslant0$, both subtraction results are nonnegative, so all intermediate values belong to `nat` in the abstract model.

**Implementation clarification.** The argument assumes exact arithmetic. A bounded machine representation may not hold `a + b`, so the abstract proof alone does not establish correctness of every concrete implementation. The temporary-variable method avoids this extra arithmetic requirement and also works for compatible nonnumeric values.

**Same outputs, different traces.** The two swap algorithms return the same outputs for every pair of natural-number inputs under the lecture's model, but their intermediate states differ. Their equivalence concerns the input/output behavior, not an identical sequence of internal states.

## Review checklist

- Identify both the **value** and the **type** of an expression's result.
- Distinguish ordinary division `/` from integer division `div`.
- Distinguish a character from a string and from a numeric value.
- Check index bounds: an array of length $n$ ends at index $n-1$.
- Preserve the lecture's **inclusive right endpoint** for string slices.
- Distinguish a nested array from a rectangular matrix.
- Read an assignment's right-hand side in the current state before changing the left-hand variable.
- Trace commands in order; the next command sees every preceding update.
- Use types to check meaningful operations, and specifications to check the intended result.
- When translating pseudocode into a programming language, check that its operators, number representations, and collection conventions match the assumptions used in the reasoning.
