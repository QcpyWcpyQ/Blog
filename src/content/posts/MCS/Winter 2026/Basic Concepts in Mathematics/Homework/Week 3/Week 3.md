---
title: "Week 3"
published: 2026-11-01
description: "Complete solutions on cyclic averages, connected graphs, induction, double counting, and a decreasing invariant for uncrossing segments."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**  
  One hundred numbers are arranged on a circle. Each number is equal to the arithmetic mean of its two neighbours. Prove that all the numbers are equal.

  - **Solution 1.1**  
    Denote the numbers, in cyclic order, by

    $$
    a_1,a_2,\ldots,a_{100},
    $$

    where the indices are read modulo $100$. The condition says that

    $$
    a_i=\frac{a_{i-1}+a_{i+1}}2
    $$

    for every $i$.

    Since there are only finitely many numbers, one of them is maximal. Let

    $$
    a_j=M=\max\{a_1,\ldots,a_{100}\}.
    $$

    Both neighbours of $a_j$ are at most $M$, but

    $$
    M=a_j=\frac{a_{j-1}+a_{j+1}}2.
    $$

    The average of two numbers that are both at most $M$ can equal $M$ only if both numbers equal $M$. Therefore

    $$
    a_{j-1}=a_{j+1}=M.
    $$

    Apply the same argument to $a_{j+1}$. Its other neighbour $a_{j+2}$ must also equal $M$. Repeating this step around the circle gives

    $$
    a_j=a_{j+1}=a_{j+2}=\cdots=a_{j+99}=M.
    $$

    These are all one hundred numbers. Hence

    $$
    \boxed{a_1=a_2=\cdots=a_{100}.}
    $$

---

- **Problem 2**  
  Prove that if a graph with $n$ vertices has only $n-2$ edges, then it is disconnected.

  - **Solution 2.1**  
    We first recall that every connected graph on $n$ vertices has at least $n-1$ edges.

    Indeed, start with any one vertex. As long as not all vertices have been reached, connectedness guarantees an edge from a reached vertex to an unreached vertex. Add such an edge and the new vertex. Each step adds exactly one new vertex and uses a new edge. Starting with one vertex, reaching all $n$ vertices therefore requires at least

    $$
    n-1
    $$

    distinct edges. Equivalently, every connected graph contains a spanning tree, and a spanning tree on $n$ vertices has $n-1$ edges.

    Now suppose that a graph has only $n-2$ edges. Since

    $$
    n-2<n-1,
    $$

    it does not have enough edges to be connected. Therefore

    $$
    \boxed{\text{every graph with }n\text{ vertices and }n-2\text{ edges is disconnected}.}
    $$

---

- **Problem 3**  
  Using the principle of mathematical induction, prove that

  $$
  1\cdot3+3\cdot5+5\cdot7+\cdots+(2n-1)(2n+1)
  =\frac{n(4n^2+6n-1)}3
  $$

  for every integer $n\geqslant1$.

  - **Solution 3.1**  
    Let $P(n)$ be the statement

    $$
    \sum_{k=1}^{n}(2k-1)(2k+1)
    =\frac{n(4n^2+6n-1)}3.
    $$

    **Base case.** For $n=1$, the left-hand side is

    $$
    1\cdot3=3,
    $$

    while the right-hand side is

    $$
    \frac{1(4+6-1)}3=\frac93=3.
    $$

    Thus $P(1)$ is true.

    **Induction hypothesis.** Fix an integer $m\geqslant1$ and suppose that $P(m)$ holds; that is,

    $$
    \sum_{k=1}^{m}(2k-1)(2k+1)
    =\frac{m(4m^2+6m-1)}3.
    $$

    **Induction step.** The next term, corresponding to $k=m+1$, is

    $$
    (2m+1)(2m+3).
    $$

    Therefore, using the induction hypothesis,

    $$
    \begin{aligned}
    \sum_{k=1}^{m+1}(2k-1)(2k+1)
    &=\frac{m(4m^2+6m-1)}3+(2m+1)(2m+3)\\
    &=\frac{m(4m^2+6m-1)+3(4m^2+8m+3)}3\\
    &=\frac{4m^3+18m^2+23m+9}{3}\\
    &=\frac{(m+1)(4m^2+14m+9)}3\\
    &=\frac{(m+1)\bigl(4(m+1)^2+6(m+1)-1\bigr)}3.
    \end{aligned}
    $$

    This is exactly the formula in $P(m+1)$. Thus $P(m)\Rightarrow P(m+1)$.

    By mathematical induction,

    $$
    \boxed{
    1\cdot3+3\cdot5+\cdots+(2n-1)(2n+1)
    =\frac{n(4n^2+6n-1)}3
    }
    $$

    for every integer $n\geqslant1$.

---

- **Problem 4**  
  Each student in a class took part in at least one of two hikes. In each hike, the proportion of boys did not exceed $2/5$. Prove that in the whole class, the proportion of boys does not exceed $4/7$.

  - **Solution 4.1**  
    For $i=1,2$, let $B_i$ and $G_i$ be the numbers of boys and girls, respectively, who participated in hike $i$. The assumption about each hike gives

    $$
    \frac{B_i}{B_i+G_i}\leqslant\frac25.
    $$

    Multiplying by $5(B_i+G_i)$ yields

    $$
    5B_i\leqslant2B_i+2G_i,
    $$

    and hence

    $$
    3B_i\leqslant2G_i.
    $$

    Adding the inequalities for the two hikes, we obtain

    $$
    3(B_1+B_2)\leqslant2(G_1+G_2).
    $$

    Let $B$ and $G$ be the total numbers of boys and girls in the class. Every boy took part in at least one hike, so every boy is counted at least once in $B_1+B_2$. Thus

    $$
    B\leqslant B_1+B_2.
    $$

    Each girl can be counted at most twice, once for each hike. Therefore

    $$
    G_1+G_2\leqslant2G.
    $$

    Combining these inequalities gives

    $$
    3B
    \leqslant3(B_1+B_2)
    \leqslant2(G_1+G_2)
    \leqslant4G.
    $$

    Hence $3B\leqslant4G$, or equivalently,

    $$
    7B\leqslant4(B+G).
    $$

    Dividing by the total number $B+G$ of students, we conclude that

    $$
    \boxed{\frac{B}{B+G}\leqslant\frac47.}
    $$

---

- **Problem 5**  
  On a plane, $N$ points are given. Some pairs of points are connected by segments. If two segments with different endpoints intersect, they may be replaced by two other non-intersecting segments with the same endpoints. Can this process continue indefinitely?

  - **Solution 5.1**  
    No. We prove this using a strictly decreasing quantity.

    For any configuration, let

    $$
    L=\text{the sum of the lengths of all its segments}.
    $$

    Suppose that the intersecting segments are $AB$ and $CD$, where $A,B,C,D$ are distinct endpoints, and let $P$ be their intersection point. Then

    $$
    |AB|+|CD|
    =|AP|+|PB|+|CP|+|PD|.
    $$

    Consider, for example, replacing them by the non-intersecting pair $AC$ and $BD$. By the triangle inequality,

    $$
    |AC|<|AP|+|PC|
    $$

    and

    $$
    |BD|<|BP|+|PD|.
    $$

    The inequalities are strict because the original segments genuinely cross, so the corresponding three points are not collinear. Adding gives

    $$
    |AC|+|BD|<|AB|+|CD|.
    $$

    The same argument applies to whichever of the two alternative pairings is used. Thus every allowed replacement strictly decreases the total length $L$.

    There are only

    $$
    \binom N2
    $$

    possible segments between the given points, and therefore only finitely many possible configurations of segments. If the process were infinite, some configuration would eventually have to repeat. But a repeated configuration would have the same total length as before, whereas $L$ strictly decreases at every step. This is impossible.

    Consequently,

    $$
    \boxed{\text{the process cannot continue indefinitely}.}
    $$
