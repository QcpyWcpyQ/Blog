---
title: "Imperative Programming (Loops)"
published: 2026-11-03
description: "Defined and undefined iteration, loop traces and invariants, and the full-traversal, early-exit, accumulator, and two-pointer patterns."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: *Imperative Programming (Loops)* (17 slides), Introduction to Computer Science, Valentin Cassano and Santiago Figueira, GTIIT. The supplied file is *04 - imperative programming (loops).pdf*. References below use PDF page numbers counted from the title page.

These notes use the course's **abstract pseudocode**. In particular, **:=** means assignment, **=** means equality, and an interval such as $[a:b)$ contains $a$ but does not contain $b$.

## Goals

*Slide 2.*

After this lecture, we should be able to:

1. Explain the difference between defined and undefined iterations.
2. Read and write **for** and **while** loops in pseudocode.
3. Trace the execution of a loop for a given input, step by step.
4. Understand the purpose of a loop invariant and verify that it holds at every iteration.
5. Recognize four standard loop patterns: full traversal, early exit, accumulator, and two-pointer.

## Loops

*Slide 3.*

Conditionals allow us to make decisions in our algorithms. Loops allow us to express **repetition** by executing commands multiple times.

A loop repeatedly executes its **body** as long as a **condition** is true. Each execution of the body may modify variables and move the program toward a state in which the condition is false. At that point, the loop stops.

There are two kinds of loops:

- **Defined iteration (for):** repeat the body a known number of times, once for each element of a fixed collection.
- **Undefined iteration (while):** continue until a condition becomes false; the number of repetitions cannot be determined in advance.

Loops describe iterative processes in which a computation progresses step by step until the desired result is reached.

## Defined iteration

*Slide 4.*

The general form of a defined iteration is:

~~~text
before

for every element in collection do
  body of the loop
endfor

after
~~~

The **for** loop visits every element of the collection in a predetermined order. The collection is assumed to be finite and unchanging: neither its elements nor its size change during execution. Therefore, every element is processed exactly once, and the iteration progresses predictably from start to finish.

### Example: factorial

*Slide 5.*

The following function computes the factorial of a natural number.

~~~text
fun factorial(n:nat) -> r:nat
requires: true

  r := 1
  for every i in [1:n] do
    r := r * i
  endfor

ensures: r = n!
~~~

The interval $[1:n]$ contains all integers from $1$ to $n$, including both endpoints. It remains unchanged throughout the execution of the loop. The variable **i** is the control variable.

For $n=4$, the execution trace is:

| State | $n$ | $r$ | $i$ |
| --- | ---: | ---: | ---: |
| Initial | $4$ | — | — |
| After **r := 1** | $4$ | $1$ | — |
| After iteration $i=1$ | $4$ | $1$ | $1$ |
| After iteration $i=2$ | $4$ | $2$ | $2$ |
| After iteration $i=3$ | $4$ | $6$ | $3$ |
| After iteration $i=4$ | $4$ | $24$ | $4$ |
| Final | $4$ | $24$ | — |

Thus, the function returns $4!=24$.

## Undefined iteration

*Slide 6.*

The general form of an undefined iteration is:

~~~text
before

while condition do
  body of the loop
endwhile

after
~~~

Before every iteration, the condition is checked. If it is true, the body is executed; if it is false, the loop stops. If the condition is initially false, the body is not executed at all.

We must ensure that the loop eventually stops.

### Example: Euclidean division

*Slide 7.*

The following version of Euclid's division algorithm computes the quotient of $n$ divided by $d$.

~~~text
fun div(n:nat, d:nat) -> q:nat
requires: d != 0

  q := 0
  r := n
  while r >= d do
    invariant: n = d * q + r and r >= 0
    q := q + 1
    r := r - d
  endwhile

ensures: n = d * q + r and r in [0:d)
~~~

For $n=7$ and $d=2$, the execution trace is:

| State | $n$ | $d$ | $q$ | $r$ |
| --- | ---: | ---: | ---: | ---: |
| Initial | $7$ | $2$ | — | — |
| After initialization | $7$ | $2$ | $0$ | $7$ |
| After iteration 1 | $7$ | $2$ | $1$ | $5$ |
| After iteration 2 | $7$ | $2$ | $2$ | $3$ |
| After iteration 3 | $7$ | $2$ | $3$ | $1$ |
| Final | $7$ | $2$ | $3$ | $1$ |

The invariant is initially true because $7=2\cdot0+7$ and $7\geqslant0$. If it is true before an iteration, then after increasing $q$ by $1$ and decreasing $r$ by $d$,

$$
d(q+1)+(r-d)=dq+r=n,
$$

and $r-d\geqslant0$ because the loop condition gives $r\geqslant d$. Thus, the invariant is preserved. When the loop exits, $r\geqslant d$ is false, so $r<d$. Together with the invariant, this gives

$$
n=dq+r,
\qquad
0\leqslant r<d,
$$

which is exactly the postcondition.

## Standard loop patterns

*Slide 8.*

The lecture introduces four common loop patterns:

| Pattern | Purpose |
| --- | --- |
| **Full traversal** | Visit every element of a collection exactly once. |
| **Early exit** | Stop as soon as a condition is satisfied. |
| **Accumulator** | Build a result incrementally across iterations. |
| **Two-pointer** | Compare two elements of a collection at once. |

These standard forms help us recognize recurring computational patterns and write clearer algorithms.

## Full traversal

*Slides 9–10.*

The function **search** determines whether a particular letter occurs in a sentence. We treat the sentence as a collection whose elements are ordered by their positions.

### Traversal by element

~~~text
fun search(sentence:string, letter:char) -> found:bool
requires: true

  found := false
  for each symbol in sentence do
    invariant: found iff letter is in the treated part of sentence
    found := found or (symbol = letter)
  endfor

ensures: found iff letter is in sentence
~~~

### Traversal by index

~~~text
fun search(sentence:string, letter:char) -> found:bool
requires: true

  found := false
  size := len(sentence)
  for each index in [0:size) do
    invariant: found iff letter is in sentence[0:index)
    found := found or (sentence[index] = letter)
  endfor

ensures: found iff letter is in sentence
~~~

The half-open interval $[0:size)$ contains exactly the valid indices $0,1,\ldots,size-1$.

## Early exit

*Slide 11.*

The following version stops as soon as the letter is found.

~~~text
fun search(sentence:string, letter:char) -> found:bool
requires: true

  found := false
  index := 0
  size := len(sentence)

  while index < size and not found do
    invariant: found iff letter is in sentence[0:index)
    if sentence[index] = letter then
      found := true
    endif
    index := index + 1
  endwhile

ensures: found iff letter is in sentence
~~~

Whenever **found** becomes true, the loop condition becomes false. If the letter does not occur, **index** eventually reaches **size**, and the loop also stops.

### Exercise: first occurrence

*Slide 12.*

The function **indexof** returns the position of the first occurrence of a letter, or $-1$ if the letter does not occur.

~~~text
fun indexof(sentence:string, letter:char) -> index:int
requires: true

  index := -1
  current := 0
  size := len(sentence)

  while current < size and index = -1 do
    invariant:
      (index = -1 and letter is not in sentence[0:current))
      or
      (0 <= index < current
       and sentence[index] = letter
       and letter is not in sentence[0:index))

    if sentence[current] = letter then
      index := current
    endif
    current := current + 1
  endwhile

ensures:
  (index = -1 iff letter is not in sentence)
  and
  (index != -1 implies
    sentence[index] = letter
    and letter is not in sentence[0:index))
~~~

The loop stops immediately after the first match. Therefore, a nonnegative result is the first occurrence, not merely an arbitrary occurrence.

## Accumulator

*Slide 13.*

The function **count** counts all occurrences of a letter in a sentence.

~~~text
fun count(sentence:string, letter:char) -> result:nat
requires: true

  result := 0
  for each symbol in sentence do
    invariant:
      result = number of occurrences of letter in the treated part

    if letter = symbol then
      result := result + 1
    endif
  endfor

ensures:
  result = number of occurrences of letter in sentence
~~~

The variable **result** is an accumulator: it stores the number of matches seen so far.

### Exercise: equal letters

*Slide 14.*

The function **equals** determines whether all letters in a sentence are equal to one another.

~~~text
fun equals(sentence:string) -> result:bool
requires: true

  result := true
  size := len(sentence)

  for each index in (0:size) do
    invariant:
      result iff all letters in sentence[0:index) are equal

    result := result and (sentence[index - 1] = sentence[index])
  endfor

ensures: result iff all letters in sentence are equal
~~~

The interval $(0:size)$ starts at index $1$, so every element compared by the loop has a predecessor. Empty and one-letter sentences satisfy the postcondition because there is no unequal pair.

## Two-pointer pattern

### Abecedarian words

*Slide 15.*

A word is **abecedarian** if every letter is strictly greater than all letters that precede it.

~~~text
fun abecedarian(sentence:string) -> result:bool
requires: true

  result := true
  size := len(sentence)

  for each index in (0:size) do
    invariant: result iff sentence[0:index) is abecedarian
    result := result and (sentence[index - 1] < sentence[index])
  endfor

ensures: result iff sentence is abecedarian
~~~

The interval $(0:size)$ guarantees that **sentence[index - 1]** is always valid. Comparing adjacent letters is sufficient because the strict order is transitive.

| Abecedarian | Comparison | Not abecedarian | Failed comparison |
| --- | --- | --- | --- |
| almost | $A<L<M<O<S<T$ | completely | $P\not<L$ |
| begin | $B<E<G<I<N$ | end | $N\not<D$ |
| deft | $D<E<F<T$ | clumsy | $U\not<M$ |
| ghost | $G<H<O<S<T$ | angel | $N\not<G$ |

### Palindromes

*Slide 16.*

A word is a **palindrome** if it reads the same forward and backward.

~~~text
fun palindrome(sentence:string) -> result:bool
requires: true

  result := true
  size := len(sentence)

  for each index in [0:(size div 2)) do
    invariant:
      result iff
      sentence[0:index) + sentence[size - index:size) is a palindrome

    result := result and
      (sentence[index] = sentence[size - (index + 1)])
  endfor

ensures: result iff sentence is a palindrome
~~~

The loop compares each letter in the first half with the corresponding letter in the second half.

| Palindrome | Reverse comparison | Not a palindrome | Reverse comparison |
| --- | --- | --- | --- |
| level | $L=E=V=E=L$ | drawer | $drawer\neq reward$ |
| radar | $R=A=D=A=R$ | repaid | $repaid\neq diaper$ |
| civic | $C=I=V=I=C$ | live | $live\neq evil$ |
| rotor | $R=O=T=O=R$ | star | $star\neq rats$ |

## Summary

*Slide 17.*

- A **for** loop performs a defined iteration over a fixed, finite collection.
- A **while** loop performs an undefined iteration controlled by a condition.
- A loop invariant describes a property that is true before and after every iteration.
- A loop must make progress toward termination.
- Full traversal, early exit, accumulation, and two-pointer comparison are common loop patterns.
