---
title: "Methods of proving"
published: 2026-10-12
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Parity

- **Problem 1 (Domino tiling)**  
  Consider a $4\times 4$ board with two diagonally opposite corner squares removed. Is it possible to cut the remaining board into $1\times 2$ dominoes?

  Each domino must cover exactly two squares sharing an edge. Dominoes may be placed horizontally or vertically, and must cover the board without gaps or overlaps.

  Orient the board so that the top-right and bottom-left squares are missing. Number the rows from top to bottom and the columns from left to right. Here $\square$ denotes a remaining square and $\cdot$ a removed square:

  ```text
  □ □ □ ·
  □ □ □ □
  □ □ □ □
  · □ □ □
  ```

  - **Proof 1.1 (Contradiction and symmetry)**  
    Assume that such a tiling exists.

    The top-left square $(1,1)$ must be covered by a domino. There are only two possibilities: the domino covers $(1,1)$ and $(1,2)$, or it covers $(1,1)$ and $(2,1)$.

    These choices are symmetric under reflection across the main diagonal, which also preserves the board. Thus, **without loss of generality**, assume that the first domino is horizontal and covers $(1,1)$ and $(1,2)$.

    The remaining domino placements below are then forced:

    1. Square $(1,3)$ must be paired with $(2,3)$: its left neighbour is already covered, and its right neighbour is missing.
    2. Square $(2,4)$ must be paired with $(3,4)$: its upper neighbour is missing, and its left neighbour is already covered.
    3. Square $(4,4)$ must be paired with $(4,3)$: its upper neighbour is already covered.
    4. Square $(4,2)$ must be paired with $(3,2)$: its left neighbour is missing, and its right neighbour is already covered.

    Now $(3,3)$ remains uncovered, but all four of its neighbours, $(2,3)$, $(3,2)$, $(3,4)$ and $(4,3)$, are already covered. No domino can cover it, a contradiction.

    Therefore, **the board cannot be tiled by dominoes**.

---

- **Problem 2 (An $8\times 8$ board with two opposite corners removed)**  
  Remove the top-right and bottom-left corner squares from an $8\times 8$ board. Is it possible to cut the remaining figure into $1\times 2$ dominoes?

  - **Observation 2.1 (Counting squares)**  
    Every domino covers exactly two squares. Thus, if a figure can be tiled by dominoes, its total number of squares must be **even**. A figure with an odd number of squares cannot be tiled by dominoes.

    Here the number of remaining squares is
    $$
    8\cdot 8-2=62.
    $$
    This is even, so counting the total number of squares alone does not rule out a tiling. Having an even number of squares is a **necessary condition**, but it is not sufficient.

  - **Proof 2.2 (Chessboard colouring)**  
    Colour the board black and white in the usual chessboard pattern, so that any two squares sharing an edge have opposite colours. Choose the colouring so that the two removed corner squares are black.

    Each domino, whether horizontal or vertical, covers **exactly one black square and one white square**. Therefore, $k$ non-overlapping dominoes cover exactly $k$ black squares and $k$ white squares. Any region tiled by dominoes must have equal numbers of black and white squares.

    The complete $8\times 8$ board has $32$ black squares and $32$ white squares. The two diagonally opposite corners have the same colour, so removing them leaves
    $$
    \begin{aligned}
    \text{Black squares} &=32-2=30,\\
    \text{White squares} &=32.
    \end{aligned}
    $$
    These numbers are unequal, so **the remaining board cannot be tiled by dominoes**.

    Equivalently, covering all $62$ squares would require $31$ dominoes, which would have to cover $31$ squares of each colour. The board has only $30$ black squares, giving a contradiction.

  - **Remark 2.3**  
    Counting squares of each colour gives a stronger obstruction than counting the total number of squares. Every domino contributes equally to the two colours, so an imbalance between black and white squares makes a tiling impossible.

---

- **Problem 3 (A grasshopper returning to its starting point)**  
  A grasshopper makes jumps of length $1$ metre along a straight line and eventually returns to its starting point. Show that it made an **even number of jumps**.

  - **Proof 3.1 (Colouring even and odd positions)**  
    Set the starting point to coordinate $0$ and measure distances in metres. Each jump changes the grasshopper's coordinate by either $+1$ or $-1$, so every position it visits has an integer coordinate.

    Colour the even integer positions **blue** and the odd integer positions **red**. Every jump changes the colour of the grasshopper's position, since adding or subtracting $1$ changes parity.

    The grasshopper starts at the blue position $0$. After an odd number of jumps it is at a red position; after an even number of jumps it is at a blue position. Returning to its starting point therefore requires an **even number of jumps**.

  - **Proof 3.2 (Counting left and right jumps)**  
    Suppose the grasshopper makes $k$ jumps to the left and $m$ jumps to the right. Since every jump has length $1$ metre, its displacement from its starting point is
    $$
    m-k.
    $$
    It returns to its starting point, so
    $$
    m-k=0\quad\Longrightarrow\quad m=k.
    $$
    Thus the total number of jumps is
    $$
    k+m=2k,
    $$
    which is **even**.

---

- **Problem 4 (A closed polygonal line with seven segments)**  
  Does there exist a closed polygonal line consisting of $7$ segments such that each segment crosses exactly one other segment, once?

  Here a crossing is an intersection in the interiors of two segments. The shared endpoints of consecutive segments are not counted as crossings.

  - **Proof 4.1 (Pairing the crossing segments)**  
    Suppose that such a closed polygonal line exists.

    Choose a crossing between two segments $s$ and $t$. Since each segment crosses exactly one other segment, $s$ and $t$ cannot cross any further segments. They therefore form a pair.

    Repeating this for every crossing partitions all the segments into **disjoint pairs**: every segment belongs to a pair, and no segment can belong to two different pairs.

    If there are $m$ pairs, then the number of segments must be $2m$, which is even. But there are $7$ segments, and $7$ cannot be divided into pairs. This is a contradiction.

    Therefore, **no such closed polygonal line exists**.

---

- **Problem 5 (Martians joining hands)**  
  Martians may have any number of arms. One day, all the Martians join hands so that no arms remain free. Prove that the number of Martians with an **odd number of arms** is even.

  - **Idea 5.1 (Parity)**  
    Look for a quantity whose parity is determined by the way the arms are paired. Each joined pair of hands accounts for two arms, so the total number of arms is even.

  - **Proof 5.2**  
    Call a Martian **even** if it has an even number of arms, and **odd** if it has an odd number of arms.

    Since every arm is paired with another arm, the total number of arms is even. If there are $h$ joined pairs of hands, this total is $2h$.

    Let $A_{\mathrm{even}}$ be the total number of arms belonging to even Martians, and let $A_{\mathrm{odd}}$ be the total number belonging to odd Martians. Then
    $$
    A_{\mathrm{even}}+A_{\mathrm{odd}}=2h.
    $$
    The number $A_{\mathrm{even}}$ is a sum of even numbers, so it is even. Consequently,
    $$
    A_{\mathrm{odd}}=2h-A_{\mathrm{even}}
    $$
    is also even.

    But a sum of an odd number of odd numbers is odd. For example,
    $$
    1+7+5+11+3=27.
    $$
    Since $A_{\mathrm{odd}}$ is even, it must be a sum of an **even number of odd numbers**. Each term counts the arms of one odd Martian, so **the number of odd Martians is even**.

## Induction

- **Problem 1 (Sum of the first $n$ positive integers)**  
  Find a formula for
  $$
  S_n=1+2+\cdots+n,\qquad n\geq 1.
  $$

  - **Proof 1.1 (A geometric argument)**  
    Arrange $S_n$ unit squares in a staircase with rows of lengths $1,2,\ldots,n$. Take a second copy, rotate it by $180^\circ$, and fit the two staircases together. They form an $n\times(n+1)$ rectangle.

    Therefore,
    $$
    S_n+S_n=n(n+1),
    $$
    and hence
    $$
    \boxed{S_n=\frac{n(n+1)}{2}}.
    $$

    For example, when $n=5$, the two staircases form a $5\times6$ rectangle, so
    $$
    2S_5=5\cdot6\quad\Longrightarrow\quad S_5=15.
    $$

---

- **Problem 2 (Sum of cubes)**  
  Find a formula for
  $$
  R_n=1^3+2^3+\cdots+n^3,\qquad n\geq1.
  $$

  - **Observation 2.1 (From examples to a conjecture)**  
    Compute the first few values and compare them with $S_n^2$:

    | $n$ | $S_n$ | $R_n$ | $S_n^2$ |
    | --- | --- | --- | --- |
    | $1$ | $1$ | $1$ | $1$ |
    | $2$ | $3$ | $9$ | $9$ |
    | $3$ | $6$ | $36$ | $36$ |
    | $4$ | $10$ | $100$ | $100$ |

    These examples suggest the conjecture
    $$
    R_n=S_n^2=\left(\frac{n(n+1)}{2}\right)^2.
    $$
    To establish it for every $n\geq1$, use **mathematical induction**.

  - **Proof 2.2 (Induction)**  
    **Base case ($n=1$).** We have
    $$
    R_1=1^3=1=S_1^2.
    $$

    **Induction step ($k\to k+1$).** Assume that, for some integer $k\geq1$,
    $$
    R_k=S_k^2=\left(\frac{k(k+1)}{2}\right)^2.
    $$
    Then
    $$
    \begin{aligned}
    R_{k+1}
      &=R_k+(k+1)^3\\
      &=\left(\frac{k(k+1)}{2}\right)^2+(k+1)^3\\
      &=(k+1)^2\left(\frac{k^2}{4}+k+1\right)\\
      &=(k+1)^2\frac{(k+2)^2}{4}\\
      &=\left(\frac{(k+1)(k+2)}{2}\right)^2\\
      &=S_{k+1}^2.
    \end{aligned}
    $$
    Thus the statement for $k$ implies the statement for $k+1$. By mathematical induction,
    $$
    \boxed{1^3+2^3+\cdots+n^3=\left(1+2+\cdots+n\right)^2
    =\left(\frac{n(n+1)}{2}\right)^2}
    $$
    for every integer $n\geq1$.

---

- **Problem 3 (A number consisting of $243$ ones)**  
  Prove that the decimal number consisting of $243$ ones is divisible by $243$.

  Write
  $$
  N_m=\underbrace{11\cdots1}_{m\text{ ones}}.
  $$
  Since $243=3^5$, it is enough to prove the more general statement
  $$
  3^k\mid N_{3^k}\qquad\text{for every integer }k\geq1.
  $$

  - **Observation 3.1 (Divisibility by $3$ and $9$)**  
    A decimal integer is congruent to the sum of its digits modulo $3$ and modulo $9$, because $10^j\equiv1$ modulo either divisor. Thus, it is divisible by $3$ or $9$ exactly when its digit sum is divisible by that divisor.

    For example, the digit sum of $35781232$ is
    $$
    3+5+7+8+1+2+3+2=31.
    $$
    Since $31$ is not divisible by $9$, neither is $35781232$.

    For $N_{243}$, the digit sum is $243$, which establishes divisibility by $3$ and $9$. To prove divisibility by $243=3^5$, use induction.

  - **Idea 3.2 (Three identical blocks)**  
    A number with $3m$ ones consists of three consecutive blocks of $m$ ones. Consequently,
    $$
    N_{3m}=N_m\left(10^{2m}+10^m+1\right).
    $$
    For example,
    $$
    111111111=111\cdot1001001.
    $$
    The second factor also contributes a factor of $3$: its decimal representation has exactly three digits equal to $1$ and all other digits equal to $0$.

  - **Proof 3.3 (Induction)**  
    **Base case ($k=1$).** We have
    $$
    N_3=111=3\cdot37,
    $$
    so $3\mid N_3$.

    **Induction step ($k\to k+1$).** Assume that
    $$
    3^k\mid N_{3^k}.
    $$
    Set $m=3^k$. By grouping the $3^{k+1}=3m$ ones into three blocks,
    $$
    N_{3^{k+1}}=N_{3^k}\left(10^{2m}+10^m+1\right).
    $$
    Since $10\equiv1\pmod3$,
    $$
    10^{2m}+10^m+1\equiv1+1+1=0\pmod3.
    $$
    Equivalently,
    $$
    10^{2m}+10^m+1=(10^{2m}-1)+(10^m-1)+3,
    $$
    where each of the first two terms is a number consisting entirely of nines, and hence is divisible by $3$.

    Thus the first factor is divisible by $3^k$ by the induction hypothesis, and the second factor is divisible by $3$. Their product is therefore divisible by $3^{k+1}$.

    By mathematical induction, $3^k\mid N_{3^k}$ for every $k\geq1$. Taking $k=5$ gives
    $$
    \boxed{243\mid\underbrace{11\cdots1}_{243\text{ ones}}}.
    $$

---

- **Problem 4 (Integer sums of reciprocal powers)**  
  Suppose that $x\neq0$ and
  $$
  x+\frac{1}{x}\in\mathbb{Z}.
  $$
  Show that, for every positive integer $n$,
  $$
  x^n+\frac{1}{x^n}\in\mathbb{Z}.
  $$

  - **Observation 4.1 (The first few powers)**  
    Write $k=x+\frac{1}{x}\in\mathbb{Z}$. Then
    $$
    \begin{aligned}
    x+\frac{1}{x}&=k,\\
    x^2+\frac{1}{x^2}&=\left(x+\frac{1}{x}\right)^2-2=k^2-2,\\
    x^3+\frac{1}{x^3}&=\left(x+\frac{1}{x}\right)^3-3\left(x+\frac{1}{x}\right)=k^3-3k.
    \end{aligned}
    $$
    Each expression is an integer.

    One could solve $x^2-kx+1=0$ to obtain
    $$
    x=\frac{k\pm\sqrt{k^2-4}}{2},
    $$
    but substituting this into higher powers makes the calculation complicated. A recurrence gives a simpler proof.

  - **Idea 4.2 (A recurrence relation)**  
    Denote
    $$
    T_n=x^n+\frac{1}{x^n}.
    $$
    For $n\geq2$, expanding the product gives
    $$
    \begin{aligned}
    T_nT_1
      &=\left(x^n+\frac{1}{x^n}\right)\left(x+\frac{1}{x}\right)\\
      &=x^{n+1}+\frac{1}{x^{n+1}}+x^{n-1}+\frac{1}{x^{n-1}}\\
      &=T_{n+1}+T_{n-1}.
    \end{aligned}
    $$
    Hence
    $$
    \boxed{T_{n+1}=T_nT_1-T_{n-1}=kT_n-T_{n-1}}.
    $$
    Thus, if two consecutive terms $T_{n-1}$ and $T_n$ are integers, the next term $T_{n+1}$ is also an integer.

  - **Proof 4.3 (Induction using two consecutive terms)**  
    **Base cases ($n=1,2$).** By assumption, $T_1=k\in\mathbb{Z}$, and
    $$
    T_2=T_1^2-2=k^2-2\in\mathbb{Z}.
    $$

    **Induction step.** Assume that $T_{n-1}$ and $T_n$ are integers for some $n\geq2$. Since $k$ is an integer, the recurrence implies
    $$
    T_{n+1}=kT_n-T_{n-1}\in\mathbb{Z}.
    $$
    Therefore the pair $(T_{n-1},T_n)$ being integral implies that $(T_n,T_{n+1})$ is integral. Starting from $(T_1,T_2)$, mathematical induction yields
    $$
    \boxed{x^n+\frac{1}{x^n}\in\mathbb{Z}\qquad\text{for every integer }n\geq1}.
    $$

  - **Remark 4.4 (Why two base cases are needed)**  
    The recurrence depends on the previous **two** terms. Accordingly, the induction hypothesis must include both of them, and the proof starts with $T_1$ and $T_2$.
