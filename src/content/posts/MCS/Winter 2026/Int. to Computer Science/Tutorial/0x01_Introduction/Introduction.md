---
title: "Introduction"
published: 2026-10-14
description: "Tutorial workflow, Euclidean division in C, terminal commands, compilation, and specification-based testing."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: *Introduction to Computer Science · Tutorial 01*, GTIIT, 23 slides. Slide references below refer to the supplied PDF. Supplementary explanations are labelled.

## Purpose and workflow of tutorials

*Slides 3–4.*

Tutorials develop the practical ability to turn a problem into an implemented, tested solution. Students are expected to solve problems, write code, compile, run, debug, and ask questions during the session.

| Aspect | Lecture | Tutorial |
| --- | --- | --- |
| Focus | Concepts and algorithms | Problems, algorithms, and programs |
| Main activity | Listen, understand, and ask questions | Solve, program, compile, run, fix, and ask questions |
| Goal | Understanding | Implementation |
| Tools | Pen, paper, and pseudocode | VSCode, terminal, and GCC |
| Participation | Guided learning | Active work by the student |

The tutorial follows the same development process as the lecture:

```text
Problem statement
    -> Specification
    -> Algorithm
    -> Program
    -> Run and test
```

The **specification determines what counts as a correct result**. Design the algorithm before coding, then translate its steps into the program. When something fails, identify the level that needs revision:

- An implementation mistake requires revisiting the program.
- An incorrect solution method requires revisiting the algorithm.
- A specification that misstates the intended problem requires revisiting the problem statement.

## Euclidean division without division operators

*Slides 5–9.*

- **Problem 1 (Euclidean division)**  
  Given a dividend and a divisor, compute both the **quotient** and the **remainder**. The exercise forbids the use of the C operators `/` and `%` in the implementation.

  - **Specification 1.1**  
    The inputs are natural numbers, with $0$ included in `nat`. Write $D$ for the dividend, $d$ for the divisor, $q$ for the quotient, and $r$ for the remainder.

    **Precondition (`require`):**
    $$
    D\geqslant0,\qquad d>0.
    $$
    **Postcondition (`ensure`):**
    $$
    \boxed{D=qd+r\qquad\text{and}\qquad0\leqslant r<d}.
    $$

    The precondition states which inputs the algorithm promises to handle. The postcondition states what every result for a valid input must satisfy.

    **Why must $d>0$?** With $d=0$, the required interval $0\leqslant r<0$ contains no values. Moreover, subtracting zero would never reduce the remainder. Such an input is outside the contract and must be excluded or rejected by the surrounding program.

    **Clarification.** The slide's statement that behavior is undefined outside `require` means the specification makes no guarantee for those inputs. Whether a particular C execution has undefined behavior in the language's technical sense depends on what that execution does.

  - **Algorithm 1.2 (Repeated subtraction)**

    ```text
    fun division(dividend: nat, divisor: nat)
        -> (quotient: nat, remainder: nat)

        require: divisor > 0

        quotient := 0
        remainder := dividend

        while remainder >= divisor:
            invariant: dividend = quotient * divisor + remainder
            remainder := remainder - divisor
            quotient := quotient + 1

        return (quotient, remainder)

        ensure: dividend = quotient * divisor + remainder
                and 0 <= remainder < divisor
    ```

    Initially no copies of the divisor have been subtracted, so the quotient is zero. Each iteration removes one copy of the divisor from the remainder and counts it in the quotient. The original dividend remains unchanged. The explicit return line identifies the two outputs.

  - **Trace 1.3 (Input $D=17$, $d=5$)**

    | State | Dividend | Divisor | Remainder | Quotient | Is remainder at least divisor? |
    | --- | --- | --- | --- | --- | --- |
    | Start | $17$ | $5$ | $17$ | $0$ | Yes |
    | After iteration 1 | $17$ | $5$ | $12$ | $1$ | Yes |
    | After iteration 2 | $17$ | $5$ | $7$ | $2$ | Yes |
    | After iteration 3 | $17$ | $5$ | $2$ | $3$ | No: stop |

    The result satisfies both required conditions:
    $$
    17=3\cdot5+2,\qquad0\leqslant2<5.
    $$

  - **Supplementary explanation 1.4 (Why the algorithm works)**  
    Initially $D=0\cdot d+D$. If $D=qd+r$ before an iteration, the updates $q'=q+1$ and $r'=r-d$ preserve the equality because
    $$
    q'd+r'=(q+1)d+(r-d)=qd+r=D.
    $$
    The guard $r\geqslant d$ ensures that $r'$ remains nonnegative. When the loop stops, $r<d$, so the invariant gives the full postcondition. Since $d>0$, the nonnegative integer $r$ strictly decreases on every iteration, which also proves termination.

---

- **Implementation 2 (Two outputs from a C function)**  
  The tutorial implements the quotient as the return value and the remainder through a **pointer parameter**:

  ```c
  int divide(int dividend, int divisor, int *remainder)
  {
      int quotient = 0;
      *remainder = dividend;

      while (*remainder >= divisor)
      {
          *remainder -= divisor;
          quotient++;
      }

      return quotient;
  }
  ```

  | Pseudocode feature | C implementation |
  | --- | --- |
  | Assignment `:=` | `=` |
  | Comparison $\geqslant$ | `>=` |
  | `while condition:` | `while (condition) { ... }` |
  | Increase quotient by one | `quotient++` |
  | Natural-number variables | `int`, subject to input restrictions and its representable range |
  | Two outputs | `return quotient` and writing through `int *remainder` |

  - **Supplementary explanation 2.1 (The pointer parameter)**  
    In the declaration, `int *remainder` means that `remainder` is a pointer to an integer. Inside the function, `*remainder` accesses the integer at that address. Assigning to it updates the caller's variable.

    A call can be written as:

    ```c
    int remainder = 0;
    int quotient = divide(17, 5, &remainder);
    ```

    Here `&remainder` supplies the address of the caller's variable. After the call, `quotient` is `3` and `remainder` is `2`.

    This function requires `dividend >= 0`, `divisor > 0`, and a pointer to a valid writable `int`. It does not check these conditions itself. Unlike the lecture's earlier function, which returned only the quotient, this version makes **both** results available to the caller.

## VSCode and the terminal

*Slides 12–15.*

- **Working environment 3**  
  The VSCode screenshot identifies three areas:

  | Area | Purpose |
  | --- | --- |
  | Explorer | View and organize project files |
  | Editor | Write and modify source code |
  | Integrated terminal | Run commands, compile, and execute programs |

  The terminal always has a **current working directory**. Relative paths are interpreted from that directory, so knowing the current location is part of working with files correctly.

  - **Commands 3.1 (Navigation)**

    | Command | Meaning |
    | --- | --- |
    | `pwd` | Print the current working directory |
    | `ls` | List entries in the current directory |
    | `cd tutorials` | Enter the `tutorials` subdirectory |
    | `cd ..` | Move to the parent directory |
    | `cd ~` | Return to the home directory |

    | Symbol | Meaning |
    | --- | --- |
    | `/` | Filesystem root when used as an absolute path |
    | `~` | Home directory |
    | `.` | Current directory |
    | `..` | Parent directory |

    Paths such as `/home/alice` in the slides are examples; the actual home directory depends on the system and account.

  - **Commands 3.2 (Creating, copying, and moving files)**

    | Command | Effect |
    | --- | --- |
    | `touch division.c` | Create an empty file if it does not exist; otherwise update its timestamps |
    | `mkdir tutorial02` | Create a directory |
    | `cp division.c backup.c` | Copy the file to `backup.c` |
    | `cp division.c tutorial02/division.c` | Copy it into another directory |
    | `mv backup.c old_division.c` | Rename the file |
    | `mv old_division.c tutorial02/` | Move the file into another directory |
    | `ls tutorial02/` | List that directory's entries |

    The slides emphasize checking destination names: by default, `cp` and `mv` can overwrite an existing destination file without asking.

  - **Workflow 3.3 (Preparing a tutorial folder)**

    ```sh
    cd ~
    pwd
    mkdir tutorials
    cd tutorials
    touch division.c
    ```

    If `tutorials` already exists, use `cd tutorials` directly. Open `division.c` in VSCode and write the function. Commands shown here omit the shell prompt `$`, which is not part of the command to type.

## Compiling, running, and reading errors

*Slides 16–17.*

- **Workflow 4 (Compile and run)**  
  After saving the source files, confirm that the terminal is in the directory containing them:

  ```sh
  pwd
  gcc -Wall -I. -o division main.c division.c
  ./division 17 5
  ```

  | Part | Meaning |
  | --- | --- |
  | `gcc` | Invoke the compiler driver |
  | `-Wall` | Enable a useful group of compiler warnings |
  | `-I.` | Add the current directory to the header search path |
  | `-o division` | Name the output executable `division` |
  | `main.c division.c` | Source files to compile and link |
  | `./division` | Run the executable in the current directory |
  | `17 5` | Command-line arguments passed to the program |

  The slide shows the output `3`, the quotient. The remainder is also computed by `divide`, but printing it depends on the calling program.

  **Clarification.** This command assumes that `main.c` and any required declarations or headers have already been supplied or written. The slides give the division function but do not include the complete command-line driver. The filename `main. c` on slide 16 is corrected here to `main.c`.

---

- **Example 5 (Reading a compiler diagnostic)**  
  A diagnostic in the slide has the form:

  ```text
  division.c:18:15: error: expected ';' before 'quotient'
  ```

  | Part | Meaning |
  | --- | --- |
  | `division.c` | Source filename |
  | `18` | Line number |
  | `15` | Column number |
  | `error` | Severity: compilation cannot complete successfully |
  | `expected ';' before 'quotient'` | What the compiler expected |

  Read diagnostics from top to bottom and investigate the first error first. A missing semicolon or brace can cause later messages that disappear after the original mistake is fixed. Inspect the indicated location and the surrounding code before editing.

## Validation and testing

*Slides 18–20.*

- **Method 6 (Build tests from the specification)**  
  The `require` clause identifies valid inputs. The `ensure` clause determines which outputs are correct. Passing a typical example provides evidence for that case; it does not establish correctness for every valid input.

  The tutorial's test cases are:

  | Dividend | Divisor | Expected quotient | Expected remainder | Purpose |
  | --- | --- | --- | --- | --- |
  | $17$ | $5$ | $3$ | $2$ | Typical input |
  | $10$ | $2$ | $5$ | $0$ | Exact division |
  | $3$ | $7$ | $0$ | $3$ | Dividend smaller than divisor |
  | $0$ | $5$ | $0$ | $0$ | Zero dividend |

  Check both
  $$
  D=qd+r\qquad\text{and}\qquad0\leqslant r<d.
  $$
  Also consider boundaries and inputs that exercise many loop iterations, such as a large dividend with a small positive divisor.

  - **Supplementary example 6.1 (Why `>=` matters)**  
    If the guard were changed from `remainder >= divisor` to `remainder > divisor`, the input $(10,2)$ would stop at $(q,r)=(4,2)$. The equality $10=4\cdot2+2$ still holds, but $r<d$ is false. Checking the full postcondition exposes the error.

  - **Common mistakes 6.2**

    | Mistake | Possible effect | What to check |
    | --- | --- | --- |
    | Using `=` where equality comparison `==` was intended | The condition assigns a value and may have an unintended truth value | Use `==` for equality tests and investigate warnings |
    | Reading an uninitialized variable | Undefined behavior or unreliable results | Initialize variables before their values are read |
    | Incorrect loop boundary, such as `>` instead of `>=` | Failure on exact-division or boundary cases | Trace the boundary case and check the postcondition |
    | Missing return value in a function such as `divide` | Using the expected return value can lead to undefined behavior | Return the intended result on every applicable path |

    The tutorial expects warning-free code. Treat warnings from `gcc -Wall` as issues to investigate and fix before running. Warnings complement tests; neither substitutes for understanding the algorithm.

## Tutorial habits and completion criteria

*Slides 21–22.*

The tutorial recommends short development cycles: establish the algorithm, implement a small part, compile, read diagnostics, and test. If a test fails, compare the result with the specification before deciding what to change.

A completed tutorial solution should satisfy all of the following:

- The problem is understood and its valid inputs are clear.
- A precise specification states what outputs must satisfy.
- An algorithm describes the solution before implementation details.
- The C program implements that algorithm and compiles without errors or warnings.
- Tests include typical, boundary, and minimal or zero-input cases, and all expected results are checked.
- The reasoning connecting the output to the specification can be explained.
