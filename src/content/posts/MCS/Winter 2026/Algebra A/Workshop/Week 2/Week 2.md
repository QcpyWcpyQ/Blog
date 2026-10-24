---
title: "Week 2"
published: 2026-10-23
description: "Workshop solutions on row-reduced echelon form, homogeneous and parameter-dependent systems, elementary matrices, and matrix inverses."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Row reduction and a homogeneous solution space

- **Exercise 1**  
  Let

  $$
  A=
  \begin{bmatrix}
  1&1&2&-1\\
  2&3&5&0\\
  3&4&7&-1
  \end{bmatrix}.
  $$

  1. Find a row-reduced echelon matrix row-equivalent to $A$. Indicate each row operation.
  2. Find all solutions of $AX=0$, expressing the dependent variables in terms of the free variables. Give two nonzero solutions that are not scalar multiples of one another.

  - **Solution 1.1**  
    Starting from $A$, eliminate the entries below the first pivot:

    $$
    \begin{aligned}
    \begin{bmatrix}
    1&1&2&-1\\
    2&3&5&0\\
    3&4&7&-1
    \end{bmatrix}
    &\xrightarrow{R_2\leftarrow R_2-2R_1}
    \begin{bmatrix}
    1&1&2&-1\\
    0&1&1&2\\
    3&4&7&-1
    \end{bmatrix}\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-3R_1}
    \begin{bmatrix}
    1&1&2&-1\\
    0&1&1&2\\
    0&1&1&2
    \end{bmatrix}\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-R_2}
    \begin{bmatrix}
    1&1&2&-1\\
    0&1&1&2\\
    0&0&0&0
    \end{bmatrix}\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1-R_2}
    \boxed{
    \begin{bmatrix}
    1&0&1&-3\\
    0&1&1&2\\
    0&0&0&0
    \end{bmatrix}}.
    \end{aligned}
    $$

    This is the row-reduced echelon form of $A$.

  - **Solution 1.2**  
    Write

    $$
    X=\begin{bmatrix}x_1&x_2&x_3&x_4\end{bmatrix}^{\mathsf T}.
    $$

    The pivot variables are $x_1,x_2$, and the free variables are $x_3,x_4$. The row-reduced system is

    $$
    \begin{cases}
    x_1+x_3-3x_4=0,\\
    x_2+x_3+2x_4=0.
    \end{cases}
    $$

    Set $x_3=s$ and $x_4=t$, where $s,t\in\mathbb R$. Then

    $$
    x_1=-s+3t,\qquad x_2=-s-2t.
    $$

    Hence all solutions are

    $$
    \boxed{
    X=
    \begin{bmatrix}
    -s+3t\\
    -s-2t\\
    s\\
    t
    \end{bmatrix}
    =s\begin{bmatrix}-1\\-1\\1\\0\end{bmatrix}
    +t\begin{bmatrix}3\\-2\\0\\1\end{bmatrix},
    \qquad s,t\in\mathbb R.
    }
    $$

    Taking $(s,t)=(1,0)$ and $(s,t)=(0,1)$ gives the two nonzero solutions

    $$
    \boxed{
    X_1=\begin{bmatrix}-1\\-1\\1\\0\end{bmatrix},
    \qquad
    X_2=\begin{bmatrix}3\\-2\\0\\1\end{bmatrix}.}
    $$

    They are not scalar multiples of one another: the fourth component of $X_1$ is $0$, whereas that of $X_2$ is $1$.

## Row-reduced and row-reduced echelon matrices

- **Exercise 2**  
  Consider

  $$
  P=\begin{bmatrix}0&1&2\\1&0&-1\\0&0&0\end{bmatrix},
  \qquad
  Q=\begin{bmatrix}1&0&2\\0&1&3\\0&0&0\end{bmatrix},
  \qquad
  S=\begin{bmatrix}1&2&0\\0&1&1\\0&0&0\end{bmatrix}.
  $$

  1. Determine whether each matrix is row-reduced and whether it is row-reduced echelon.
  2. For each matrix that is not row-reduced echelon, use elementary row operations to obtain a row-reduced echelon matrix.

  - **Solution 2.1**  
    A matrix is **row-reduced** when the leading entry of every nonzero row is $1$ and each such leading $1$ is the only nonzero entry in its column. It is in **row-reduced echelon form** when, in addition, all zero rows are at the bottom and the leading $1$s move strictly to the right as one moves down the matrix.

    **Matrix $P$.** Its leading entries are the $1$ in column $2$ of the first row and the $1$ in column $1$ of the second row. Each is the only nonzero entry in its column, so $P$ is row-reduced. However, the second leading $1$ lies to the left of the first, so $P$ is not row-reduced echelon. Interchanging the first two rows gives

    $$
    P\xrightarrow{R_1\leftrightarrow R_2}
    \boxed{
    \begin{bmatrix}
    1&0&-1\\
    0&1&2\\
    0&0&0
    \end{bmatrix}}.
    $$

    **Matrix $Q$.** The leading $1$s are in columns $1$ and $2$, they move to the right, their pivot columns contain no other nonzero entries, and the zero row is at the bottom. Thus

    $$
    \boxed{Q\text{ is row-reduced and is already in row-reduced echelon form}.}
    $$

    **Matrix $S$.** It is in row-echelon form, but it is not row-reduced because the pivot in column $2$ has the nonzero entry $2$ above it. Eliminate that entry:

    $$
    S\xrightarrow{R_1\leftarrow R_1-2R_2}
    \boxed{
    \begin{bmatrix}
    1&0&-2\\
    0&1&1\\
    0&0&0
    \end{bmatrix}}.
    $$

    Therefore the classification is

    | Matrix | Row-reduced? | Row-reduced echelon? |
    | --- | --- | --- |
    | $P$ | Yes | No |
    | $Q$ | Yes | Yes |
    | $S$ | No | No |

## A parameter-dependent linear system

- **Exercise 3**  
  For $a,b\in\mathbb R$, consider

  $$
  \begin{cases}
  x+y+z=2,\\
  2x+3y+z=5,\\
  3x+4y+az=b.
  \end{cases}
  $$

  1. Write the augmented matrix and reduce it using elementary row operations. Indicate each row operation.
  2. Determine all values of $a$ and $b$ for which the system has exactly one solution, infinitely many solutions, or no solution.
  3. Find all solutions whenever the system is consistent.

  - **Solution 3.1**  
    The augmented matrix is

    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    2&3&1&5\\
    3&4&a&b
    \end{array}
    \right].
    $$

    Apply the following row operations:

    $$
    \begin{aligned}
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    2&3&1&5\\
    3&4&a&b
    \end{array}
    \right]
    &\xrightarrow{R_2\leftarrow R_2-2R_1}
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-1&1\\
    3&4&a&b
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-3R_1}
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-1&1\\
    0&1&a-3&b-6
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-R_2}
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-1&1\\
    0&0&a-2&b-7
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1-R_2}
    \boxed{
    \left[
    \begin{array}{ccc|c}
    1&0&2&1\\
    0&1&-1&1\\
    0&0&a-2&b-7
    \end{array}
    \right]}.
    \end{aligned}
    $$

    The final row represents

    $$
    (a-2)z=b-7.
    $$

  - **Solution 3.2**  
    **Case 1: $a\neq2$.** The coefficient of $z$ in the last row is nonzero, so there is a pivot in every variable column. The system has exactly one solution for every $b\in\mathbb R$. Let

    $$
    \lambda=\frac{b-7}{a-2}.
    $$

    Then $z=\lambda$. From the first two rows,

    $$
    x+2z=1,\qquad y-z=1,
    $$

    so

    $$
    \boxed{
    (x,y,z)=
    \left(
    1-2\frac{b-7}{a-2},
    1+\frac{b-7}{a-2},
    \frac{b-7}{a-2}
    \right),
    \qquad a\neq2.}
    $$

    **Case 2: $a=2$ and $b=7$.** The final row becomes $0=0$, leaving two independent equations in three variables. Set $z=t$, where $t\in\mathbb R$. Then

    $$
    \boxed{
    (x,y,z)=(1-2t,1+t,t)
    =(1,1,0)+t(-2,1,1),
    \qquad t\in\mathbb R.}
    $$

    Thus there are infinitely many solutions.

    **Case 3: $a=2$ and $b\neq7$.** The final row becomes

    $$
    \begin{bmatrix}0&0&0&\vline&b-7\end{bmatrix},
    $$

    which asserts $0=b-7\neq0$. Hence the system has no solution.

    In summary,

    | Condition | Number of solutions |
    | --- | --- |
    | $a\neq2$; any $b\in\mathbb R$ | Exactly one |
    | $a=2$ and $b=7$ | Infinitely many |
    | $a=2$ and $b\neq7$ | None |

## Elementary matrices and reversing row operations

- **Exercise 4**  
  Let

  $$
  M=
  \begin{bmatrix}
  1&2\\
  2&5\\
  0&1
  \end{bmatrix}.
  $$

  Perform $R_2\longrightarrow R_2-2R_1$, and then interchange rows $1$ and $3$. Call the final matrix $N$.

  1. Find $N$ and the $3\times3$ elementary matrices $E_1$ and $E_2$ corresponding to the first and second operations, respectively. Verify that $N=E_2E_1M$.
  2. Find $E_1^{-1}$ and $E_2^{-1}$ by identifying the reverse row operations. Verify the answers by matrix multiplication.
  3. Find a $3\times3$ matrix $F$ such that $FN=M$ by using the answers to part 2. State the order in which the reverse operations must be performed.

  - **Solution 4.1**  
    The first row operation gives

    $$
    \begin{bmatrix}
    1&2\\2&5\\0&1
    \end{bmatrix}
    \xrightarrow{R_2\leftarrow R_2-2R_1}
    \begin{bmatrix}
    1&2\\0&1\\0&1
    \end{bmatrix}.
    $$

    Interchanging rows $1$ and $3$ then gives

    $$
    \boxed{
    N=
    \begin{bmatrix}
    0&1\\
    0&1\\
    1&2
    \end{bmatrix}.}
    $$

    Apply the same operations to $I_3$. The corresponding elementary matrices are

    $$
    \boxed{
    E_1=
    \begin{bmatrix}
    1&0&0\\
    -2&1&0\\
    0&0&1
    \end{bmatrix},
    \qquad
    E_2=
    \begin{bmatrix}
    0&0&1\\
    0&1&0\\
    1&0&0
    \end{bmatrix}.}
    $$

    To verify the order of multiplication,

    $$
    \begin{aligned}
    E_2E_1M
    &=
    \begin{bmatrix}
    0&0&1\\0&1&0\\1&0&0
    \end{bmatrix}
    \begin{bmatrix}
    1&0&0\\-2&1&0\\0&0&1
    \end{bmatrix}
    \begin{bmatrix}
    1&2\\2&5\\0&1
    \end{bmatrix}\\[1ex]
    &=
    \begin{bmatrix}
    0&0&1\\-2&1&0\\1&0&0
    \end{bmatrix}
    \begin{bmatrix}
    1&2\\2&5\\0&1
    \end{bmatrix}\\[1ex]
    &=
    \begin{bmatrix}
    0&1\\0&1\\1&2
    \end{bmatrix}
    =N.
    \end{aligned}
    $$

  - **Solution 4.2**  
    The inverse of $R_2\leftarrow R_2-2R_1$ is $R_2\leftarrow R_2+2R_1$. The row swap $R_1\leftrightarrow R_3$ is its own inverse. Therefore

    $$
    \boxed{
    E_1^{-1}=
    \begin{bmatrix}
    1&0&0\\
    2&1&0\\
    0&0&1
    \end{bmatrix},
    \qquad
    E_2^{-1}=E_2=
    \begin{bmatrix}
    0&0&1\\
    0&1&0\\
    1&0&0
    \end{bmatrix}.}
    $$

    Direct multiplication verifies that

    $$
    E_1^{-1}E_1=E_1E_1^{-1}=I_3,
    \qquad
    E_2^{-1}E_2=E_2^2=I_3.
    $$

  - **Solution 4.3**  
    Since

    $$
    N=E_2E_1M,
    $$

    the reverse operations must be performed in the reverse order: first undo the row swap by applying $E_2^{-1}$, then undo the row replacement by applying $E_1^{-1}$. Thus

    $$
    M=E_1^{-1}E_2^{-1}N.
    $$

    Hence

    $$
    \begin{aligned}
    F=E_1^{-1}E_2^{-1}
    &=
    \begin{bmatrix}
    1&0&0\\2&1&0\\0&0&1
    \end{bmatrix}
    \begin{bmatrix}
    0&0&1\\0&1&0\\1&0&0
    \end{bmatrix}\\[1ex]
    &=
    \boxed{
    \begin{bmatrix}
    0&0&1\\
    0&1&2\\
    1&0&0
    \end{bmatrix}}.
    \end{aligned}
    $$

    Indeed,

    $$
    FN=
    \begin{bmatrix}
    0&0&1\\0&1&2\\1&0&0
    \end{bmatrix}
    \begin{bmatrix}
    0&1\\0&1\\1&2
    \end{bmatrix}
    =
    \begin{bmatrix}
    1&2\\2&5\\0&1
    \end{bmatrix}
    =M.
    $$

## Matrix inverses and the order of multiplication

- **Exercise 5**  
  Let

  $$
  A=
  \begin{bmatrix}
  1&1&0\\
  0&1&1\\
  1&1&1
  \end{bmatrix},
  \qquad
  B=
  \begin{bmatrix}
  1&0&1\\
  0&2&0\\
  0&0&1
  \end{bmatrix}.
  $$

  1. Find $A^{-1}$ by performing elementary row operations on $[A\mid I_3]$.
  2. Find $B^{-1}$ and verify the result by multiplication.
  3. Compute $A^{-1}B^{-1}$. Is this matrix also the inverse of $AB$? Justify the answer.

  - **Solution 5.1**  
    Start with the augmented matrix $[A\mid I_3]$:

    $$
    \left[
    \begin{array}{ccc|ccc}
    1&1&0&1&0&0\\
    0&1&1&0&1&0\\
    1&1&1&0&0&1
    \end{array}
    \right].
    $$

    Apply the following row operations:

    $$
    \begin{aligned}
    &R_3\leftarrow R_3-R_1,\\
    &R_2\leftarrow R_2-R_3,\\
    &R_1\leftarrow R_1-R_2.
    \end{aligned}
    $$

    Keeping track of both sides gives

    $$
    \begin{aligned}
    \left[
    \begin{array}{ccc|ccc}
    1&1&0&1&0&0\\
    0&1&1&0&1&0\\
    1&1&1&0&0&1
    \end{array}
    \right]
    &\xrightarrow{R_3\leftarrow R_3-R_1}
    \left[
    \begin{array}{ccc|ccc}
    1&1&0&1&0&0\\
    0&1&1&0&1&0\\
    0&0&1&-1&0&1
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_2\leftarrow R_2-R_3}
    \left[
    \begin{array}{ccc|ccc}
    1&1&0&1&0&0\\
    0&1&0&1&1&-1\\
    0&0&1&-1&0&1
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1-R_2}
    \left[
    \begin{array}{ccc|ccc}
    1&0&0&0&-1&1\\
    0&1&0&1&1&-1\\
    0&0&1&-1&0&1
    \end{array}
    \right].
    \end{aligned}
    $$

    Therefore

    $$
    \boxed{
    A^{-1}=
    \begin{bmatrix}
    0&-1&1\\
    1&1&-1\\
    -1&0&1
    \end{bmatrix}.}
    $$

  - **Solution 5.2**  
    Row-reduce $[B\mid I_3]$ using

    $$
    R_1\leftarrow R_1-R_3,
    \qquad
    R_2\leftarrow\frac12R_2.
    $$

    Then

    $$
    \left[
    \begin{array}{ccc|ccc}
    1&0&1&1&0&0\\
    0&2&0&0&1&0\\
    0&0&1&0&0&1
    \end{array}
    \right]
    \longrightarrow
    \left[
    \begin{array}{ccc|ccc}
    1&0&0&1&0&-1\\
    0&1&0&0&\frac12&0\\
    0&0&1&0&0&1
    \end{array}
    \right].
    $$

    Thus

    $$
    \boxed{
    B^{-1}=
    \begin{bmatrix}
    1&0&-1\\
    0&\frac12&0\\
    0&0&1
    \end{bmatrix}.}
    $$

    Direct multiplication gives

    $$
    BB^{-1}=B^{-1}B=
    \begin{bmatrix}
    1&0&0\\
    0&1&0\\
    0&0&1
    \end{bmatrix}=I_3,
    $$

    verifying the inverse.

  - **Solution 5.3**  
    Multiply the two inverses in the stated order:

    $$
    \begin{aligned}
    A^{-1}B^{-1}
    &=
    \begin{bmatrix}
    0&-1&1\\
    1&1&-1\\
    -1&0&1
    \end{bmatrix}
    \begin{bmatrix}
    1&0&-1\\
    0&\frac12&0\\
    0&0&1
    \end{bmatrix}\\[1ex]
    &=
    \boxed{
    \begin{bmatrix}
    0&-\frac12&1\\
    1&\frac12&-2\\
    -1&0&2
    \end{bmatrix}}.
    \end{aligned}
    $$

    This matrix is **not** the inverse of $AB$. For invertible matrices, the order reverses:

    $$
    (AB)^{-1}=B^{-1}A^{-1},
    \qquad
    A^{-1}B^{-1}=(BA)^{-1}.
    $$

    In this example $A$ and $B$ do not commute, since

    $$
    AB=
    \begin{bmatrix}
    1&2&1\\
    0&2&1\\
    1&2&2
    \end{bmatrix},
    \qquad
    BA=
    \begin{bmatrix}
    2&2&1\\
    0&2&2\\
    1&1&1
    \end{bmatrix}.
    $$

    Therefore $AB\neq BA$, so their inverses are also different. The actual inverse of $AB$ is

    $$
    \boxed{
    (AB)^{-1}=B^{-1}A^{-1}
    =
    \begin{bmatrix}
    1&-1&0\\
    \frac12&\frac12&-\frac12\\
    -1&0&1
    \end{bmatrix}.}
    $$

