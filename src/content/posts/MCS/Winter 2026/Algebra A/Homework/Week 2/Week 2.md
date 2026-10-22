---
title: "Week 2"
published: 2026-10-22
description: "Complete solutions on equivalent homogeneous systems, row-reduced echelon form, parameter-dependent systems, elementary matrices, and matrix inverses."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**  
  Consider the following two systems of homogeneous linear equations:

  $$
  S:\begin{cases}
  x+2y-z=0,\\
  2x-y+z=0,
  \end{cases}
  \qquad
  T:\begin{cases}
  3x+y=0,\\
  x-3y+2z=0.
  \end{cases}
  $$

  1. Determine whether the systems are equivalent by expressing the equations of each system as linear combinations of the equations of the other.
  2. Find all solutions of the systems.

  - **Solution 1.1**  
    Write the left-hand sides of the equations of $S$ as

    $$
    s_1=x+2y-z,\qquad s_2=2x-y+z,
    $$

    and those of $T$ as

    $$
    t_1=3x+y,\qquad t_2=x-3y+2z.
    $$

    Adding the two equations of $S$ gives

    $$
    s_1+s_2=(x+2y-z)+(2x-y+z)=3x+y=t_1.
    $$

    Subtracting the first equation of $S$ from the second gives

    $$
    -s_1+s_2=-(x+2y-z)+(2x-y+z)=x-3y+2z=t_2.
    $$

    Therefore every solution of $S$ satisfies both equations of $T$. In matrix form,

    $$
    \begin{bmatrix}t_1\\t_2\end{bmatrix}
    =
    \begin{bmatrix}1&1\\-1&1\end{bmatrix}
    \begin{bmatrix}s_1\\s_2\end{bmatrix}.
    $$

    To prove equivalence, the converse implication is also required. The coefficient matrix above has determinant

    $$
    1\cdot1-(-1)\cdot1=2\neq0,
    $$

    so the relations can be inverted. Directly,

    $$
    s_1=\frac{t_1-t_2}{2},\qquad
    s_2=\frac{t_1+t_2}{2}.
    $$

    Thus every equation of either system is a linear combination of the equations of the other. Hence

    $$
    \boxed{S\text{ and }T\text{ are equivalent}.}
    $$

    To find their common solution set, use $T$. From $3x+y=0$,

    $$
    y=-3x.
    $$

    Substitution into the second equation gives

    $$
    x-3(-3x)+2z=0
    \quad\Longrightarrow\quad
    10x+2z=0
    \quad\Longrightarrow\quad
    z=-5x.
    $$

    Let $x=t$, where $t\in\mathbb R$. Then

    $$
    \boxed{
    (x,y,z)=(t,-3t,-5t)
    =t(1,-3,-5),\qquad t\in\mathbb R.
    }
    $$

---

- **Problem 2**  
  Let

  $$
  A=
  \begin{bmatrix}
  1&2&0&1\\
  0&1&1&-1\\
  2&5&1&1
  \end{bmatrix}.
  $$

  1. Use elementary row operations to obtain a row-reduced echelon matrix row-equivalent to $A$. Indicate each row operation.
  2. Identify the leading variables and the free variables in the homogeneous system $AX=0$.
  3. Find all solutions of $AX=0$.

  - **Solution 2.1**  
    Begin with $A$ and eliminate the first entry of the third row:

    $$
    \begin{aligned}
    \begin{bmatrix}
    1&2&0&1\\
    0&1&1&-1\\
    2&5&1&1
    \end{bmatrix}
    &\xrightarrow{R_3\leftarrow R_3-2R_1}
    \begin{bmatrix}
    1&2&0&1\\
    0&1&1&-1\\
    0&1&1&-1
    \end{bmatrix}\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-R_2}
    \begin{bmatrix}
    1&2&0&1\\
    0&1&1&-1\\
    0&0&0&0
    \end{bmatrix}\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1-2R_2}
    \begin{bmatrix}
    1&0&-2&3\\
    0&1&1&-1\\
    0&0&0&0
    \end{bmatrix}.
    \end{aligned}
    $$

    The last matrix is in row-reduced echelon form. Its pivot columns are columns $1$ and $2$. Therefore, for

    $$
    X=\begin{bmatrix}x_1&x_2&x_3&x_4\end{bmatrix}^{\mathsf T},
    $$

    the leading variables are $x_1,x_2$, while the free variables are $x_3,x_4$.

    The row-reduced system is

    $$
    \begin{cases}
    x_1-2x_3+3x_4=0,\\
    x_2+x_3-x_4=0.
    \end{cases}
    $$

    Set

    $$
    x_3=s,\qquad x_4=t,
    \qquad s,t\in\mathbb R.
    $$

    Then

    $$
    x_1=2s-3t,\qquad x_2=-s+t.
    $$

    Hence all solutions are

    $$
    \boxed{
    X=
    \begin{bmatrix}
    2s-3t\\-s+t\\s\\t
    \end{bmatrix}
    =s\begin{bmatrix}2\\-1\\1\\0\end{bmatrix}
    +t\begin{bmatrix}-3\\1\\0\\1\end{bmatrix},
    \qquad s,t\in\mathbb R.
    }
    $$

---

- **Problem 3**  
  Let $p,q\in\mathbb R$. Consider the system

  $$
  \begin{cases}
  x+y+z=2,\\
  2x+3y+z=5,\\
  x+y+pz=q,\\
  4x+5y+3z=9.
  \end{cases}
  $$

  1. Write the augmented matrix of the system and reduce it using elementary row operations.
  2. Determine for which values of $p$ and $q$ the system has exactly one solution, infinitely many solutions, or no solution.
  3. Find all solutions in each case where the system is consistent.

  - **Solution 3.1**  
    The augmented matrix is

    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    2&3&1&5\\
    1&1&p&q\\
    4&5&3&9
    \end{array}
    \right].
    $$

    Apply the row operations

    $$
    R_2\leftarrow R_2-2R_1,\qquad
    R_3\leftarrow R_3-R_1,\qquad
    R_4\leftarrow R_4-4R_1.
    $$

    This gives

    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-1&1\\
    0&0&p-1&q-2\\
    0&1&-1&1
    \end{array}
    \right].
    $$

    Next use

    $$
    R_4\leftarrow R_4-R_2,
    \qquad
    R_1\leftarrow R_1-R_2,
    $$

    to obtain the echelon form

    $$
    \boxed{
    \left[
    \begin{array}{ccc|c}
    1&0&2&1\\
    0&1&-1&1\\
    0&0&p-1&q-2\\
    0&0&0&0
    \end{array}
    \right].
    }
    $$

    The third row represents

    $$
    (p-1)z=q-2.
    $$

    We now distinguish the possible cases.

    **Case 1: $p\neq1$.**  
    There is a pivot in every variable column, so the system has exactly one solution for every $q\in\mathbb R$. Put

    $$
    \alpha=\frac{q-2}{p-1}.
    $$

    Dividing the third row by $p-1$, then applying

    $$
    R_1\leftarrow R_1-2R_3,
    \qquad
    R_2\leftarrow R_2+R_3,
    $$

    gives the reduced matrix

    $$
    \left[
    \begin{array}{ccc|c}
    1&0&0&1-2\alpha\\
    0&1&0&1+\alpha\\
    0&0&1&\alpha\\
    0&0&0&0
    \end{array}
    \right].
    $$

    Therefore

    $$
    \boxed{
    (x,y,z)=
    \left(
    1-2\frac{q-2}{p-1},
    1+\frac{q-2}{p-1},
    \frac{q-2}{p-1}
    \right),
    \quad p\neq1.
    }
    $$

    **Case 2: $p=1$ and $q=2$.**  
    The third row becomes $0=0$, so there are only two independent equations in three variables. Let $z=t$, where $t\in\mathbb R$. The first two rows give

    $$
    x+2z=1,\qquad y-z=1,
    $$

    and hence

    $$
    \boxed{
    (x,y,z)=(1-2t,1+t,t)
    =(1,1,0)+t(-2,1,1),
    \qquad t\in\mathbb R.
    }
    $$

    Thus the system has infinitely many solutions.

    **Case 3: $p=1$ and $q\neq2$.**  
    The third row becomes

    $$
    \begin{bmatrix}0&0&0&\vline&q-2\end{bmatrix},
    $$

    which asserts $0=q-2\neq0$. This is impossible, so the system has no solution.

    In summary,

    | Condition | Number of solutions |
    | --- | --- |
    | $p\neq1$; any $q\in\mathbb R$ | Exactly one |
    | $p=1$ and $q=2$ | Infinitely many |
    | $p=1$ and $q\neq2$ | None |

---

- **Problem 4**  
  Let

  $$
  A=
  \begin{bmatrix}
  1&0&2\\
  -1&3&1
  \end{bmatrix}.
  $$

  1. Find the $2\times2$ elementary matrix $E$ such that left multiplication by $E$ performs the row operation $R_2\longrightarrow R_2+2R_1$ on $A$.
  2. Compute $EA$ and check that the result agrees with the indicated row operation.

  - **Solution 4.1**  
    An elementary matrix is obtained by applying the desired row operation to the identity matrix of the appropriate size. Starting from

    $$
    I_2=\begin{bmatrix}1&0\\0&1\end{bmatrix},
    $$

    apply $R_2\leftarrow R_2+2R_1$:

    $$
    \begin{bmatrix}1&0\\0&1\end{bmatrix}
    \xrightarrow{R_2\leftarrow R_2+2R_1}
    \begin{bmatrix}1&0\\2&1\end{bmatrix}.
    $$

    Hence

    $$
    \boxed{E=\begin{bmatrix}1&0\\2&1\end{bmatrix}.}
    $$

    Now multiply:

    $$
    \begin{aligned}
    EA
    &=
    \begin{bmatrix}1&0\\2&1\end{bmatrix}
    \begin{bmatrix}1&0&2\\-1&3&1\end{bmatrix}\\[1ex]
    &=
    \begin{bmatrix}
    1&0&2\\
    2(1)+(-1)&2(0)+3&2(2)+1
    \end{bmatrix}\\[1ex]
    &=
    \boxed{
    \begin{bmatrix}
    1&0&2\\
    1&3&5
    \end{bmatrix}}.
    \end{aligned}
    $$

    The first row is unchanged, and the second row is

    $$
    (-1,3,1)+2(1,0,2)=(1,3,5),
    $$

    exactly as required.

---

- **Problem 5**  
  Let

  $$
  C=
  \begin{bmatrix}
  1&2&0\\
  0&1&1\\
  0&0&1
  \end{bmatrix},
  \qquad
  Y=
  \begin{bmatrix}2\\3\\1\end{bmatrix}.
  $$

  1. Find $C^{-1}$ by applying elementary row operations to the augmented matrix $[C\mid I_3]$.
  2. Verify the answer by computing $CC^{-1}$ and $C^{-1}C$.
  3. Use $C^{-1}$ to solve the system $CX=Y$.

  - **Solution 5.1**  
    Start with the augmented matrix

    $$
    \left[
    \begin{array}{ccc|ccc}
    1&2&0&1&0&0\\
    0&1&1&0&1&0\\
    0&0&1&0&0&1
    \end{array}
    \right].
    $$

    Eliminate the entry above the second pivot:

    $$
    R_1\leftarrow R_1-2R_2,
    $$

    which gives

    $$
    \left[
    \begin{array}{ccc|ccc}
    1&0&-2&1&-2&0\\
    0&1&1&0&1&0\\
    0&0&1&0&0&1
    \end{array}
    \right].
    $$

    Next eliminate the entries above the third pivot:

    $$
    R_2\leftarrow R_2-R_3,
    \qquad
    R_1\leftarrow R_1+2R_3.
    $$

    Thus

    $$
    \left[
    \begin{array}{ccc|ccc}
    1&0&0&1&-2&2\\
    0&1&0&0&1&-1\\
    0&0&1&0&0&1
    \end{array}
    \right]
    =
    \left[I_3\mid C^{-1}\right].
    $$

    Therefore

    $$
    \boxed{
    C^{-1}=
    \begin{bmatrix}
    1&-2&2\\
    0&1&-1\\
    0&0&1
    \end{bmatrix}.
    }
    $$

    For verification,

    $$
    \begin{aligned}
    CC^{-1}
    &=
    \begin{bmatrix}
    1&2&0\\0&1&1\\0&0&1
    \end{bmatrix}
    \begin{bmatrix}
    1&-2&2\\0&1&-1\\0&0&1
    \end{bmatrix}
    =
    \begin{bmatrix}
    1&0&0\\0&1&0\\0&0&1
    \end{bmatrix},\\[1ex]
    C^{-1}C
    &=
    \begin{bmatrix}
    1&-2&2\\0&1&-1\\0&0&1
    \end{bmatrix}
    \begin{bmatrix}
    1&2&0\\0&1&1\\0&0&1
    \end{bmatrix}
    =
    \begin{bmatrix}
    1&0&0\\0&1&0\\0&0&1
    \end{bmatrix}.
    \end{aligned}
    $$

    Both products equal $I_3$, confirming the inverse.

    Finally,

    $$
    \begin{aligned}
    X=C^{-1}Y
    &=
    \begin{bmatrix}
    1&-2&2\\
    0&1&-1\\
    0&0&1
    \end{bmatrix}
    \begin{bmatrix}2\\3\\1\end{bmatrix}\\[1ex]
    &=
    \begin{bmatrix}
    2-6+2\\
    3-1\\
    1
    \end{bmatrix}
    =
    \boxed{
    \begin{bmatrix}-2\\2\\1\end{bmatrix}}.
    \end{aligned}
    $$

    Indeed,

    $$
    C\begin{bmatrix}-2\\2\\1\end{bmatrix}
    =
    \begin{bmatrix}
    -2+2(2)\\2+1\\1
    \end{bmatrix}
    =
    \begin{bmatrix}2\\3\\1\end{bmatrix}
    =Y.
    $$
