---
title: "Imperative Programming (Conditionals)"
published: 2026-10-26
description: "Conditional control flow, branching execution traces, nested conditionals, if-elif-else ordering, and branch-wise validation of require and ensure clauses."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: *Imperative Programming (Conditionals)* (18 slides), Introduction to Computer Science, Valentin Cassano and Santiago Figueira, GTIIT. The supplied file is *03 - imperative programming (conditionals).pdf*. References below use PDF page numbers counted from the title page.

These notes use the course's **abstract pseudocode**. In particular, **:=** means assignment and **=** means equality. A **trace** records the successive program points and states reached during one execution.

## Goals

*Slide 2.*

After this lecture, we should be able to:

1. Explain why sequential composition alone cannot represent every computation.
2. Read and write the three conditional forms used in the course.
3. Trace a program containing conditional statements.
4. Explain why different inputs may produce traces of different lengths and shapes.
5. Write **require** and **ensure** clauses for functions containing conditionals.
6. Validate an **ensure** clause separately for every possible branch.

## Review: functions, states, and sequential composition

*Slides 3–4.*

**Definition 1 (Function).** A function receives input values and produces output values. Its specification describes the allowed inputs and the required relationship between the input and output.

~~~text
fun functionName(input variables) -> output variables
require:
  precondition
ensure:
  postcondition
begin
  instructions
end
~~~

The **require** clause is the precondition: it describes what must be true before execution begins. The **ensure** clause is the postcondition: it describes what must be true when execution finishes.

**Definition 1.1 (State).** A program state records the current value of every relevant variable.

**Definition 1.2 (Assignment).** An assignment evaluates an expression in the current state and stores its value in a variable.

~~~text
x := expression
~~~

**Definition 1.3 (Sequential composition).** In a sequential program, statements are executed one after another in their written order.

~~~text
statement 1
statement 2
...
statement n
~~~

Every execution of a purely sequential program passes through the same sequence of program points. Its states may contain different values, but its traces always have the same shape and length. Sequential composition therefore cannot describe a computation that must choose different instructions for different inputs.

## Conditionals

*Slide 5.*

**Definition 2 (Conditional statement).** A conditional statement evaluates one or more Boolean conditions and chooses which block of instructions to execute.

The lecture introduces three forms.

| Form | Purpose |
| --- | --- |
| **if** | Execute a block only when a condition is true. |
| **if–else** | Choose exactly one of two blocks. |
| **if–elif–else** | Choose the first applicable block from several alternatives. |

Because different branches may contain different instructions, two calls to the same function may now produce traces of different lengths and shapes.

## The if statement

*Slides 6–7.*

**Definition 2.1 (if statement).**

~~~text
if (condition) then
  instructions
endif
~~~

Its execution has two cases:

1. If the condition is true, execute the instructions inside the block and then continue after **endif**.
2. If the condition is false, skip the block and continue after **endif**.

**Example 2.2 (Absolute value).**

~~~text
0 fun abs(x:int) -> y:int
1   y := x
2   if (y <= 0) then
3     y := -y
4   endif
~~~

For **x = 1**, the condition at line 2 is false.

| Program point | State |
| --- | --- |
| 0 | $x=1$ |
| 1 | $x=1,\ y=1$ |
| 2 | $x=1,\ y=1$ |
| 4 | $x=1,\ y=1$ |

For **x = -1**, the condition at line 2 is true.

| Program point | State |
| --- | --- |
| 0 | $x=-1$ |
| 1 | $x=-1,\ y=-1$ |
| 2 | $x=-1,\ y=-1$ |
| 3 | $x=-1,\ y=1$ |
| 4 | $x=-1,\ y=1$ |

The two traces do not have the same length: line 3 is reached only when the condition is true.

## The if–else statement

*Slides 8–9.*

**Definition 3 (if–else statement).**

~~~text
if (condition) then
  instructions A
else
  instructions B
endif
~~~

Exactly one block is executed:

- If the condition is true, execute **instructions A**.
- If the condition is false, execute **instructions B**.

After the selected block finishes, execution continues after **endif**.

**Example 3.1 (Maximum of two natural numbers).**

~~~text
0 fun max(a:nat, b:nat) -> result:nat
1   result := 0
2   if (a <= b) then
3     result := b
4   else
5     result := a
6   endif
~~~

For **a = 1** and **b = 2**, the condition is true, so the first branch assigns **result := b**.

| Program point | State |
| --- | --- |
| 0 | $a=1,\ b=2$ |
| 1 | $a=1,\ b=2,\ result=0$ |
| 2 | $a=1,\ b=2,\ result=0$ |
| 3 | $a=1,\ b=2,\ result=2$ |
| 6 | $a=1,\ b=2,\ result=2$ |

For **a = 2** and **b = 1**, the condition is false, so the second branch assigns **result := a**.

| Program point | State |
| --- | --- |
| 0 | $a=2,\ b=1$ |
| 1 | $a=2,\ b=1,\ result=0$ |
| 2 | $a=2,\ b=1,\ result=0$ |
| 5 | $a=2,\ b=1,\ result=2$ |
| 6 | $a=2,\ b=1,\ result=2$ |

## Nested conditionals

*Slide 10.*

A branch may itself contain another conditional statement.

**Example 4 (Dragon encounter).** Suppose **hungry** records whether a dragon is hungry and **hasPizza** records whether we have a pizza. The required action is:

| Condition | Result | Meaning |
| --- | --- | --- |
| **hungry** and **hasPizza** | **F** | Feed the dragon. |
| **hungry** and not **hasPizza** | **R** | Run away. |
| not **hungry** | **S** | Take a selfie. |

This behavior can be written using a nested conditional.

~~~text
fun encounter(hungry:bool, hasPizza:bool) -> result:char
begin
  if (hungry) then
    if (hasPizza) then
      result := 'F'
    else
      result := 'R'
    endif
  else
    result := 'S'
  endif
end
~~~

A postcondition describing all three outcomes is:

~~~text
ensure:
  (hungry and hasPizza and result = 'F')
  or (hungry and not hasPizza and result = 'R')
  or (not hungry and result = 'S')
~~~

To validate this postcondition, consider the three possible paths:

1. If **hungry** and **hasPizza** are both true, the program assigns **F**.
2. If **hungry** is true and **hasPizza** is false, the program assigns **R**.
3. If **hungry** is false, the inner condition is never evaluated and the program assigns **S**.

## Can if–else always be replaced by two if statements?

*Slide 11.*

**Question 5.** Can

~~~text
if (condition) then
  instructions A
else
  instructions B
endif
~~~

always be replaced by

~~~text
if (condition) then
  instructions A
endif

if (not condition) then
  instructions B
endif
~~~

**Answer.** No. The first block may change a variable used by the condition. The condition is then evaluated again in a different state, so both blocks may execute.

For example:

~~~text
x := 1

if (x > 0) then
  x := -x
endif

if (not (x > 0)) then
  y := 1
endif
~~~

Initially, **x > 0** is true, so the first block changes **x** from $1$ to $-1$. The second condition is evaluated afterward; now **not (x > 0)** is also true, so the second block executes as well. An if–else statement would execute exactly one branch.

Even when the two versions happen to produce the same final state, their control-flow structure and traces are different. Therefore, the replacement is not valid in general.

## The if–elif–else statement

*Slide 12.*

**Definition 6 (if–elif–else statement).**

~~~text
if (condition 1) then
  instructions A
elif (condition 2) then
  instructions B
...
elif (condition n) then
  instructions N
else
  instructions Z
endif
~~~

The conditions are evaluated from top to bottom. The program executes the block belonging to the **first true condition**, skips every later condition and block, and continues after **endif**. If none of the conditions is true, it executes the **else** block.

Therefore, the order of the conditions matters whenever more than one condition can be true for the same input.

## Grade conversion

*Slides 13–16.*

**Example 7 (Converting a numerical grade).** Convert a numerical grade to a letter according to:

| Numerical grade | Letter |
| --- | --- |
| $90\leqslant grade\leqslant100$ | A |
| $80\leqslant grade<90$ | B |
| $70\leqslant grade<80$ | C |
| $60\leqslant grade<70$ | D |
| $0\leqslant grade<60$ | F |

**Boundary clarification.** The slide's precondition is printed as **grade in [0:100)**, while its first branch includes $100$. To make the stated grading table and implementation consistent, the specification below uses $0\leqslant grade\leqslant100$.

~~~text
fun letterGrade(grade:nat) -> result:char
require:
  0 <= grade <= 100
ensure:
  (90 <= grade <= 100 and result = 'A')
  or (80 <= grade < 90 and result = 'B')
  or (70 <= grade < 80 and result = 'C')
  or (60 <= grade < 70 and result = 'D')
  or (0 <= grade < 60 and result = 'F')
~~~

### Algorithm 7.1: disjoint intervals

~~~text
if (90 <= grade and grade <= 100) then
  result := 'A'
elif (80 <= grade and grade < 90) then
  result := 'B'
elif (70 <= grade and grade < 80) then
  result := 'C'
elif (60 <= grade and grade < 70) then
  result := 'D'
else
  result := 'F'
endif
~~~

The intervals are disjoint, so at most one condition is true. For example:

| Grade | First true condition | Result |
| --- | --- | --- |
| $93$ | $90\leqslant grade\leqslant100$ | A |
| $89$ | $80\leqslant grade<90$ | B |
| $80$ | $80\leqslant grade<90$ | B |

### Algorithm 7.2: incorrect ascending thresholds

~~~text
if (grade >= 60) then
  result := 'D'
elif (grade >= 70) then
  result := 'C'
elif (grade >= 80) then
  result := 'B'
elif (grade >= 90) then
  result := 'A'
else
  result := 'F'
endif
~~~

This version is incorrect. For **grade = 93**, the first condition **grade >= 60** is already true. The program assigns **D** and skips every later branch, even though the correct result is **A**.

The problem is not the individual thresholds; it is their order under first-true-branch semantics.

### Algorithm 7.3: descending thresholds

~~~text
if (grade >= 90) then
  result := 'A'
elif (grade >= 80) then
  result := 'B'
elif (grade >= 70) then
  result := 'C'
elif (grade >= 60) then
  result := 'D'
else
  result := 'F'
endif
~~~

This version is correct because the strongest threshold is tested first.

| Grade | First true condition | Result |
| --- | --- | --- |
| $40$ | None | F |
| $68$ | $grade\geqslant60$ | D |
| $85$ | $grade\geqslant80$ | B |
| $93$ | $grade\geqslant90$ | A |

**Trace clarification.** The traces printed on slide 15 show intermediate assignments that would occur with independent **if** statements. Under the if–elif–else semantics stated on slide 12, only the first true branch executes: grade $68$ is assigned **D** once, and grade $85$ is assigned **B** once.

### Algorithm 7.4: independent if statements with overwriting

~~~text
result := 'F'

if (grade >= 60) then
  result := 'D'
endif

if (grade >= 70) then
  result := 'C'
endif

if (grade >= 80) then
  result := 'B'
endif

if (grade >= 90) then
  result := 'A'
endif
~~~

This version is also correct, but for a different reason. Every condition is evaluated, and later assignments overwrite earlier ones.

For **grade = 40**, no condition is true, so the initial value **F** remains unchanged.

For **grade = 85**, the assignments are:

$$
\mathrm{F}\longrightarrow\mathrm{D}\longrightarrow\mathrm{C}
\longrightarrow\mathrm{B}.
$$

The condition **grade >= 90** is false, so the final result is **B**.

This algorithm must not be confused with Algorithm 7.2. In an if–elif–else chain, only the first true branch executes; in a sequence of independent if statements, every condition is tested.

## Validating require and ensure clauses

*Slides 10, 13–16.*

**Definition 8 (Branch-wise validation).** To check that a conditional function satisfies its postcondition:

1. Assume the precondition.
2. List every possible branch or execution path.
3. Determine the condition under which each path is taken.
4. Compute the final state produced by that path.
5. Verify that the postcondition is true in that final state.

For the grade-conversion function:

| Path condition | Final assignment | Required part of the postcondition |
| --- | --- | --- |
| $90\leqslant grade\leqslant100$ | **result := A** | $result=\mathrm{A}$ |
| $80\leqslant grade<90$ | **result := B** | $result=\mathrm{B}$ |
| $70\leqslant grade<80$ | **result := C** | $result=\mathrm{C}$ |
| $60\leqslant grade<70$ | **result := D** | $result=\mathrm{D}$ |
| $0\leqslant grade<60$ | **result := F** | $result=\mathrm{F}$ |

The precondition guarantees that these five cases cover every permitted input. Since each branch assigns the letter required by its corresponding case, the complete postcondition holds.

## Summary

*Slide 17.*

- Sequential composition always follows the same sequence of statements; conditionals allow control flow to depend on the current state.
- An **if** statement executes a block only when its condition is true.
- An **if–else** statement executes exactly one of two branches.
- An **if–elif–else** statement executes the first branch whose condition is true.
- The order of overlapping conditions matters.
- Independent **if** statements evaluate every condition and may overwrite earlier results.
- Different branches can produce traces of different lengths and shapes.
- A conditional program's postcondition must be checked for every possible execution path.
