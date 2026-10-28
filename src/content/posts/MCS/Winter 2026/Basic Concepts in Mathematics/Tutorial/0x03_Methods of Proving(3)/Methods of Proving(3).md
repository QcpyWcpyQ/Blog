---
title: "Methods of Proving(3)"
published: 2026-10-28
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Can a $5\times5$ table be filled with real numbers so that every row has a positive sum and every column has a negative sum?

  - **Solution 1.1**
    Let $T$ be the sum of all the numbers in the table. Let $R_i$ be the sum of row $i$, and let $C_j$ be the sum of column $j$. Summing first by rows and then by columns gives
    $$
    0<\sum_{i=1}^{5}R_i
    =T
    =\sum_{j=1}^{5}C_j<0.
    $$
    Thus $0<T<0$, which is a contradiction. Therefore, such a table cannot exist.

---

- **Exercise 2**
  A class has $27$ pupils. Each boy is friends with exactly four girls, and each girl is friends with exactly five boys. Friendship is mutual. How many boys and how many girls are in the class?

  - **Solution 2.1**
    Let $B$ be the number of boys, and let $G$ be the number of girls. Then
    $$
    B+G=27.
    $$
    Let $P$ be the set of pairs consisting of a boy and a girl who are friends. Counting these pairs by boys gives
    $$
    |P|=4B.
    $$
    Counting the same pairs by girls gives
    $$
    |P|=5G.
    $$
    Hence,
    $$
    4B=5G.
    $$
    Therefore, $B=5k$ and $G=4k$ for some positive integer $k$. Since
    $$
    B+G=9k=27,
    $$
    we have $k=3$. Consequently,
    $$
    B=15
    \qquad\text{and}\qquad
    G=12.
    $$

---

- **Exercise 3**
  For a nonnegative integer $n$, find a formula in terms of $n$ for the sum
  $$
  S_n=1+3+9+\cdots+3^n.
  $$

  - **Solution 3.1**
    We have
    $$
    S_{n+1}=S_n+3^{n+1}=1+3S_n.
    $$
    Moreover,
    $$
    3S_n=3+9+\cdots+3^{n+1}.
    $$
    Subtracting $S_n$ from $3S_n$ gives
    $$
    2S_n=3^{n+1}-1.
    $$
    Therefore,
    $$
    S_n=\frac{3^{n+1}-1}{2}.
    $$

---

- **Exercise 4**
  Is there a convex polyhedron in which every face has at least six sides?

  - **Solution 4.1**
    No. Suppose, for contradiction, that such a convex polyhedron exists. Let $V$, $E$, and $F$ denote its numbers of vertices, edges, and faces, respectively.

    Every vertex of a convex polyhedron is incident with at least three edges. Counting edge endpoints gives
    $$
    2E\geqslant3V,
    $$
    and hence
    $$
    V\leqslant\frac{2E}{3}.
    $$

    Every face has at least six sides, and every edge belongs to exactly two faces. Counting incidences between faces and edges gives
    $$
    2E\geqslant6F,
    $$
    and hence
    $$
    F\leqslant\frac{E}{3}.
    $$

    Euler's formula for convex polyhedra states that
    $$
    V-E+F=2.
    $$
    However, the two inequalities above imply
    $$
    V-E+F
    \leqslant
    \frac{2E}{3}-E+\frac{E}{3}
    =0,
    $$
    contradicting Euler's formula. Therefore, no such convex polyhedron exists.
