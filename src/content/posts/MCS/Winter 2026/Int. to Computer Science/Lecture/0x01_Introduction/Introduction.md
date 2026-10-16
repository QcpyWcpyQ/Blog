---
title: "Introduction"
published: 2026-10-12
description: "Computer organization, algorithms and C programs, correctness, efficiency, testing, and debugging."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## A brief history of computing

Computing developed through successive attempts to automate calculation and information processing:

1. **Mechanical calculators** automated arithmetic operations.
2. **Machines controlled by punched cards** introduced ways to encode and control tasks.
3. **Electronic computers**, developed in the mid-twentieth century, made automated processing much faster.

The recurring goal is to make calculations and information processing faster and more reliable. Understanding the structure of these machines helps explain how programs execute and why they fail.

## Basics of computer organization

- **Definition 1 (The von Neumann model)**  
  The **von Neumann model** describes a computer in which memory stores both **data and instructions**. Its main functional components are:

  | Component | Role |
  | --- | --- |
  | Memory | Stores instructions and the data they operate on. |
  | Arithmetic and logic unit (ALU) | Performs arithmetic operations, logical operations, and comparisons. |
  | Control unit | Fetches and decodes instructions, then directs their execution. |
  | Input and output devices | Bring information into the computer and deliver results. |

  The processor (**CPU**) includes the control unit and ALU. It exchanges instructions and data with main memory and communicates with input and output devices.

  - **Comparison 1.1 (Main and secondary memory)**

    | Property | Main memory | Secondary memory |
    | --- | --- | --- |
    | Typical examples | RAM | SSD or disk |
    | Main purpose | Holds active programs and working data | Stores files between sessions |
    | Relative speed | Faster | Slower |
    | Persistence | Volatile: contents are lost when power is removed | Persistent: retains stored contents without power |

    When a program runs, the operating system loads its executable code from secondary storage into main memory. In the lecture's introductory model, a variable names a storage location whose value the processor can read and update.

    **Clarification.** This is a simplified model of execution. Actual processors also use registers and caches, and an optimizing compiler need not give every source variable a separate RAM location.

  - **Process 1.2 (From source code to execution)**  
    Combining the overview on slide 7 with the compilation diagram on slide 19 gives:

    ```text
    Edit source.c
        -> Compile to object code
        -> Link with libraries and other object files
        -> Executable stored on disk
        -> Load into main memory
        -> Execute
    ```

    **Editing** produces a source file containing C text. **Compilation** translates the source into machine code, typically in an object file. **Linking** combines object files and required library code into an executable. **Loading** prepares the executable in memory so that it can run.

    Compilation errors lead back to editing. Incorrect results found during execution also lead back to revising the source and rebuilding. Successful compilation alone does not establish that the program solves the intended problem.

  - **Process 1.3 (The fetch–decode–execute cycle)**  
    The **program counter (PC)** records the address of the next instruction to execute. In the sequential model used in the lecture, the processor repeatedly performs:

    1. **Fetch:** read the instruction at the address in the program counter.
    2. **Decode:** determine the required operation, such as adding, storing, comparing, or jumping.
    3. **Execute:** perform the operation and update the program counter for the next instruction. A jump can change which instruction comes next.

    This model connects source-level actions, such as assignments and comparisons, to concrete changes in the machine's state.

## Problems, algorithms, and programs

- **Method 2 (The five-step course methodology)**

  | Step | Main question | Result |
  | --- | --- | --- |
  | 1. Problem description | What do we want to solve? | An informal statement of the problem |
  | 2. Problem specification | What inputs are allowed, and what must the output satisfy? | Input/output types, constraints, and required relationships |
  | 3. Algorithm | What steps solve the specified problem? | A solution expressed in pseudocode |
  | 4. C program | How do we implement those steps? | C source code |
  | 5. Validation | Does the implementation satisfy the specification? | Results checked against suitable test cases |

  The same process will be used for progressively more complex problems and data structures throughout the course.

---

- **Definition 3 (Algorithms, pseudocode, and programs)**

  | Concept | Meaning |
  | --- | --- |
  | **Algorithm** | A precise, step-by-step method for solving a problem, independent of a particular programming language or machine. |
  | **Pseudocode** | A structured way to describe an algorithm using variables, assignments, loops, and conditions without committing to a language's exact syntax. |
  | **Program** | A concrete implementation written in a programming language and made executable on a computer. |

  The same algorithm can have implementations in different languages. Pseudocode helps develop and communicate the solution before dealing with implementation details.

---

- **Example 4 (Euclidean division by repeated subtraction)**  
  
  **Problem description.** Given a dividend and divisor, find their quotient and remainder. Division with remainder is used in modular arithmetic and greatest common divisor (GCD) calculations.
  
  **Specification.** Let $D$ be the dividend and $d$ the divisor. We require
  $$
  D\in\mathbb{Z}_{\geqslant0},\qquad d\in\mathbb{Z}_{>0}.
  $$
  The output consists of nonnegative integers $q$ and $r$ such that
  $$
  \boxed{D=qd+r\qquad\text{and}\qquad0\leqslant r<d}.
  $$
  Here $q$ is the **quotient**, $r$ is the **remainder**, and `nat` in the pseudocode includes $0$.
  
  - **Algorithm 4.1 (Repeated subtraction)**  
    Initialize the quotient to $0$ and the remainder to the original dividend. As long as the remainder is at least the divisor, subtract the divisor and increase the quotient by $1$.
  
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
  
    The input `dividend` stays unchanged. The variable `remainder` records the amount still left to divide. The explicit return line makes the two outputs clear.
  
  - **Worked example 4.2 (Dividing $17$ by $5$)**  
    *Supplementary trace of the lecture's test case.*
  
    | State | Quotient $q$ | Remainder $r$ | Check $17=5q+r$ |
    | --- | --- | --- | --- |
    | Initialization | $0$ | $17$ | $17=5\cdot0+17$ |
    | After iteration 1 | $1$ | $12$ | $17=5\cdot1+12$ |
    | After iteration 2 | $2$ | $7$ | $17=5\cdot2+7$ |
    | After iteration 3 | $3$ | $2$ | $17=5\cdot3+2$ |
  
    Since $2<5$, the loop stops and returns $(q,r)=(3,2)$.

---

- **Programming language 5 (C)**  
  
  C is a general-purpose language created by **Dennis Ritchie** in the 1970s. The lecture introduces these characteristics:
  
  | Characteristic | Meaning |
  | --- | --- |
  | Imperative | Programs describe commands that change the program's state. |
  | Procedural and structured | Functions, loops, and conditionals organize the computation. |
  | Lexical scope | The position of a declaration in the source determines where its name is available. |
  | Static type system | Types constrain operations and are checked during compilation. |
  | Recursion | Functions can call themselves. |
  | Close connection to the machine | C supports low-level memory access and efficient compilation with limited runtime support. |
  
  - **Implementation 5.1 (The lecture's C function)**
  
    ```c
    int divide(int dividend, int divisor)
    {
        int quotient = 0;
        int remainder = dividend;
    
        while (remainder >= divisor)
        {
            remainder -= divisor;
            quotient++;
        }
    
        return quotient;
    }
    ```
  
    The function assumes `dividend >= 0` and `divisor > 0`.
  
    | C expression | Meaning |
    | --- | --- |
    | `int quotient = 0;` | Declare an integer variable and initialize it to zero. |
    | `remainder >= divisor` | Test whether another subtraction is possible. |
    | `remainder -= divisor;` | Replace `remainder` with `remainder - divisor`. |
    | `quotient++;` | Increase `quotient` by one. |
    | `return quotient;` | Return the quotient to the caller. |
  
    **Interface clarification.** The pseudocode specifies two outputs, but this C function returns **only the quotient**. It computes the remainder internally without returning it. For example, `divide(17, 5)` returns `3`. The excerpt is a function, so a complete standalone C program also needs an entry point that calls it.
  
    **Input clarification.** The pseudocode uses natural numbers, while C's `int` is a bounded signed integer type. The input restrictions must be respected by the caller or checked before the function is called. The displayed function does not perform that validation.

## Analysis of algorithms

Algorithm analysis considers two different questions: **correctness**, whether the algorithm solves the specified problem for every valid input, and **efficiency**, how its resource requirements grow.

- **Definition 6 (Preconditions, postconditions, and loop invariants)**

  | Concept | When it applies | Division example |
  | --- | --- | --- |
  | **Precondition** | Must hold before execution begins | $D\geqslant0$ and $d>0$ |
  | **Postcondition** | Must hold when execution finishes | $D=qd+r$ and $0\leqslant r<d$ |
  | **Loop invariant** | Holds before and after every complete loop iteration | $D=qd+r$, with $q,r\geqslant0$ |

  The slide emphasizes the equality $D=qd+r$. Tracking nonnegativity as well makes the remainder bound explicit. An invariant concerns the loop boundaries; it need not hold between the two assignments inside the body.

  - **Supplementary proof 6.1 (Correctness of repeated subtraction)**  
    **Initialization.** Before the first iteration, $q=0$ and $r=D$, so
    $$
    qd+r=0\cdot d+D=D,
    $$
    and both $q$ and $r$ are nonnegative.

    **Preservation.** Suppose $D=qd+r$ and the guard $r\geqslant d$ is true. After one complete iteration,
    $$
    q'=q+1,\qquad r'=r-d.
    $$
    Therefore
    $$
    q'd+r'=(q+1)d+(r-d)=qd+r=D.
    $$
    Also, $q'\geqslant0$ and $r'\geqslant0$. Thus the invariant is preserved.

    **Postcondition on exit.** When the loop stops, the guard is false, so $r<d$. Combining this with the invariant gives
    $$
    D=qd+r,\qquad0\leqslant r<d.
    $$

    **Termination.** During every iteration, $r$ decreases by the positive integer $d$ and remains nonnegative. A nonnegative integer cannot decrease strictly forever, so the loop eventually terminates.

    Preservation and the exit condition establish that a terminating execution has the required result. The termination argument completes the correctness proof.

---

- **Definition 7 (Efficiency and Big O notation)**  
  **Time complexity** describes how the number of computational steps grows. **Space complexity** describes how memory requirements grow. **Big O notation** expresses an asymptotic upper bound on that growth, under a stated model of computation.

  This lets us compare algorithms by their behavior as inputs grow, rather than by the speed of one particular computer.

  - **Supplementary analysis 7.1 (Cost of repeated subtraction)**  
    Each iteration increases $q$ by one. The loop therefore executes exactly
    $$
    q=\left\lfloor\frac{D}{d}\right\rfloor
    $$
    times. Counting each integer comparison, subtraction, and increment as constant cost gives
    $$
    T(D,d)=O\left(1+\left\lfloor\frac{D}{d}\right\rfloor\right).
    $$
    The added $1$ accounts for initialization and checking the condition even when the loop runs zero times. The algorithm uses a fixed number of variables, so its auxiliary storage is $O(1)$ machine words under this model.

    For a fixed dividend, a smaller positive divisor generally requires more iterations. For a fixed divisor, a larger dividend generally requires more iterations. Thus the running time depends on **both** values. When $d=1$, the loop runs $D$ times; when $D<d$, it runs zero times.

    These bounds count operations on fixed-size integers. The number of bits needed to encode a large integer is different from its numerical value, and arbitrary-precision arithmetic needs a more detailed cost model.

## Testing and debugging

- **Definition 8 (Testing and debugging)**  
  **Testing** checks observed program behavior against the specification for selected inputs. **Debugging** locates and corrects the causes of incorrect behavior.

  A test suite should include typical inputs, boundary cases, and inputs that violate the precondition. Invalid inputs check how the surrounding program enforces its contract; they are outside the division algorithm's valid input domain.

  - **Example 8.1 (The lecture's division test suite)**

    | Dividend $D$ | Divisor $d$ | Expected quotient $q$ | Expected remainder $r$ | Purpose |
    | --- | --- | --- | --- | --- |
    | $17$ | $5$ | $3$ | $2$ | Typical case |
    | $10$ | $2$ | $5$ | $0$ | Exact division |
    | $0$ | $5$ | $0$ | $0$ | Zero dividend |
    | $3$ | $7$ | $0$ | $3$ | Dividend smaller than divisor |
    | $5$ | $0$ | Not defined | Not defined | Precondition violation |

    For each valid case, check **both** parts of the postcondition:
    $$
    D=qd+r\qquad\text{and}\qquad0\leqslant r<d.
    $$
    With a zero divisor, subtraction would not decrease the remainder. The input must be excluded or rejected before running this algorithm. The C function shown earlier checks neither input validity nor returns the remainder, so its direct return-value tests can verify only the expected quotient.

  - **Remark 8.2 (Testing and proof)**  
    Passing selected tests provides evidence about those executions. A correctness proof explains why the result holds for every input satisfying the precondition. Both are useful: an algorithm can be correct while its implementation still contains mistakes.

## Course practices and next steps

The course combines algorithmic problem solving with basic software engineering practices:

- Write precise specifications before implementing a solution.
- Use pseudocode to make the algorithm's logic explicit.
- Write clear, maintainable C code.
- Reason about correctness and resource usage.
- Validate against the specification and investigate unexpected results.

Later lectures will apply the same sequence, **describe, specify, design, implement, validate**, to increasingly complex algorithms and data structures.
