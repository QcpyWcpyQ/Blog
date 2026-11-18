---
title: "Week 5"
published: 2026-11-18
description: "A sliding-window argument for consecutive boots and complete solutions on counting multiples and unions of finite sets."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Read

- **Problem**  
  Thirty boots stand in a row, with $15$ left boots and $15$ right boots. Prove that some ten consecutive boots contain equally many left and right boots.

  - **Solution**  
    Let $L_i$ denote the number of left boots among the ten boots occupying positions $i,i+1,\ldots,i+9$. Then

    $$
    L_1+L_{11}+L_{21}=15,
    $$

    because these three disjoint blocks of ten boots together contain all $15$ left boots.

    If one of the numbers $L_1,L_{11},L_{21}$ equals $5$, then we have already found the required block of ten boots with five left boots and five right boots.

    Otherwise, one of these numbers is greater than $5$ and another is smaller than $5$. When we shift the window $i,i+1,\ldots,i+9$ by one position, the number of left boots in it can change by at most $1$. Thus,

    $$
    |L_{i+1}-L_i|\leqslant1.
    $$

    Therefore, when we move from the block whose value is greater than $5$ to the block whose value is smaller than $5$, we must pass through a block with value exactly $5$. Hence, for some $k$,

    $$
    L_k=5,
    $$

    and the corresponding ten consecutive boots contain an equal number of left and right boots.

---

## Solve

- **Problem 1**  
  Find $|A|$, the number of elements in $A$, where $A$ is the set of natural numbers in each of the following ranges that are divisible by at least one number in $\{3,5,7,9\}$.

  **(a)** From $1$ to $30$.

  **(b)** From $1$ to $100$.

  - **Solution 1.1**  
    Every multiple of $9$ is also a multiple of $3$, so it is enough to count the numbers divisible by at least one of $3,5,7$.

    For an upper bound $N$, let

    $$
    D_d=\{n\in\mathbb N:1\leqslant n\leqslant N,\ d\mid n\}.
    $$

    Then

    $$
    A=D_3\cup D_5\cup D_7,
    \qquad
    |D_d|=\left\lfloor\frac Nd\right\rfloor.
    $$

    Since $3,5,7$ are pairwise coprime,

    $$
    \begin{aligned}
    D_3\cap D_5&=D_{15},\\
    D_3\cap D_7&=D_{21},\\
    D_5\cap D_7&=D_{35},\\
    D_3\cap D_5\cap D_7&=D_{105}.
    \end{aligned}
    $$

    Add the three individual counts and subtract the three pairwise intersection counts. A number divisible by all three divisors is then counted $3-3=0$ times, so we add the triple intersection count once. Therefore,

    $$
    \begin{aligned}
    |A|
    & =\left\lfloor\frac N3\right\rfloor
      +\left\lfloor\frac N5\right\rfloor
      +\left\lfloor\frac N7\right\rfloor\\
    &\quad-\left\lfloor\frac N{15}\right\rfloor
      -\left\lfloor\frac N{21}\right\rfloor
      -\left\lfloor\frac N{35}\right\rfloor
      +\left\lfloor\frac N{105}\right\rfloor.
    \end{aligned}
    $$

    **(a)** For $N=30$,

    $$
    |A|=10+6+4-2-1-0+0=17.
    $$

    **(b)** For $N=100$,

    $$
    |A|=33+20+14-6-4-2+0=55.
    $$

---

- **Problem 2**  
  Let $A,B,C,D$ be four finite sets such that

  $$
  A\cap B=C\cap D=\varnothing.
  $$

  How can we compute $|A\cup B\cup C\cup D|$ using the numbers

  $$
  |A|,|B|,|C|,|D|,
  |A\cap C|,|A\cap D|,|B\cap C|,|B\cap D|?
  $$

  **Hint.** Draw the Euler–Venn diagram, and assign a variable to each region to represent the number of elements in it. This allows you to express $|X|$ for every set $X$ mentioned above.

  - **Solution 2.1**  
    Since $A\cap B=C\cap D=\varnothing$, an element belongs to at most one of $A,B$ and at most one of $C,D$. Hence no element belongs to three or four of the sets.

    Following the hint, denote the numbers of elements in the four regions belonging to exactly one set by

    $$
    \begin{aligned}
    a&=|A\setminus(C\cup D)|,\\
    b&=|B\setminus(C\cup D)|,\\
    c&=|C\setminus(A\cup B)|,\\
    d&=|D\setminus(A\cup B)|.
    \end{aligned}
    $$

    Denote the numbers of elements in the four possible intersection regions by

    $$
    \begin{aligned}
    p&=|A\cap C|, & q&=|A\cap D|,\\
    r&=|B\cap C|, & s&=|B\cap D|.
    \end{aligned}
    $$

    These eight regions are pairwise disjoint and together form $A\cup B\cup C\cup D$. Thus,

    $$
    |A\cup B\cup C\cup D|=a+b+c+d+p+q+r+s.
    $$

    Moreover,

    $$
    \begin{aligned}
    |A|&=a+p+q,\\
    |B|&=b+r+s,\\
    |C|&=c+p+r,\\
    |D|&=d+q+s.
    \end{aligned}
    $$

    Adding these four equalities gives

    $$
    |A|+|B|+|C|+|D|
    =a+b+c+d+2(p+q+r+s).
    $$

    Subtracting each intersection count once, we obtain

    $$
    \begin{aligned}
    |A\cup B\cup C\cup D|
    ={}&|A|+|B|+|C|+|D|\\
       &-|A\cap C|-|A\cap D|\\
       &-|B\cap C|-|B\cap D|.
    \end{aligned}
    $$
