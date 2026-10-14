---
title: "Methods of Proving"
published: 2026-10-14
description: "Induction proofs for coin representations, exponential inequalities, and tiling a deficient chessboard with L-trominoes."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Mathematical induction

An induction proof specifies a statement $P(n)$, proves the first case, and proves that $P(n)$ implies $P(n+1)$ for every index in the required range. The induction hypothesis must be strong enough to apply to the smaller objects appearing in the proof.

- **Exercise 1 (Coins of denominations $3$ and $5$)**  
  Prove that every integer amount greater than $7$ dollars can be formed using coins of denominations $3$ and $5$ dollars.

  - **Solution 1.1 (Induction with two cases)**  
    For each integer $m\geq8$, let $P(m)$ be the statement
    $$
    \exists a,b\in\mathbb{Z}_{\geq0}\quad m=3a+5b.
    $$
    The numbers $a$ and $b$ count the coins of the two denominations, so they must be nonnegative integers.

    **Base case ($m=8$).** Since $8=3+5$, take $a=b=1$.

    **Induction step ($m\to m+1$).** Let $m\geq8$ and assume $P(m)$. Choose nonnegative integers $a,b$ such that $m=3a+5b$. We construct a representation of $m+1$.

    **Case 1: $b\geq1$.** Replace one $5$-dollar coin with two $3$-dollar coins. Set
    $$
    c=a+2\geq0,\qquad d=b-1\geq0.
    $$
    Both are integers, and
    $$
    \begin{aligned}
    3c+5d
    &=3(a+2)+5(b-1)\\
    &=3a+5b+1\\
    &=m+1.
    \end{aligned}
    $$

    **Case 2: $b=0$.** Then $3a=m\geq8$, so $a\geq3$ because $a$ is an integer. Replace three $3$-dollar coins with two $5$-dollar coins. Set
    $$
    c=a-3\geq0,\qquad d=2\geq0.
    $$
    Again both are integers, and
    $$
    \begin{aligned}
    3c+5d
    &=3(a-3)+5\cdot2\\
    &=3a+1\\
    &=m+1.
    \end{aligned}
    $$

    These cases exhaust all possible values of $b$. Thus $P(m+1)$ holds whenever $P(m)$ holds. By induction, **every integer amount $m\geq8$ has a representation** $m=3a+5b$ with $a,b\in\mathbb{Z}_{\geq0}$.

    **Key idea.** Increase the total value by $1$ while keeping every coin count nonnegative. The two replacements work because $2\cdot3-5=1$ and $2\cdot5-3\cdot3=1$.

---

- **Exercise 2 (An exponential inequality)**  
  Prove that
  $$
  2^n>n\qquad\text{for every }n\in\mathbb{N}.
  $$

  - **Solution 2.1 (Induction)**  
    We first prove the statement for every positive integer $n$.

    **Base case ($n=1$).** We have $2^1=2>1$.

    **Induction step ($n\to n+1$).** Let $n\geq1$ and assume $2^n>n$. Multiplying by $2>0$ gives
    $$
    2^{n+1}=2\cdot2^n>2n.
    $$
    Since $n\geq1$, we also have $2n\geq n+1$. Therefore
    $$
    2^{n+1}>2n\geq n+1.
    $$
    This proves the next case, so induction establishes the inequality for every positive integer $n$.

    If the convention is $0\in\mathbb{N}$, check the remaining case separately:
    $$
    2^0=1>0.
    $$
    Thus the result holds under either convention for $\mathbb{N}$.

---

- **Exercise 3 (A square board with one square removed)**  
  One unit square is removed from a $128\times128$ square grid. Prove that the remaining region can be tiled with **L-trominoes**, each made of three unit squares forming a $2\times2$ square with one corner missing. Tiles may be rotated and must cover the region without gaps or overlaps.

  - **Solution 3.1 (Induction on the board size)**  
    Since $128=2^7$, prove the stronger statement $P(n)$ for every integer $n\geq1$:

    **Every $2^n\times2^n$ board with any one unit square removed can be tiled with L-trominoes.**

    The missing square may be **anywhere** on the board. This is part of the induction hypothesis.

    **Base case ($n=1$).** Removing any square from a $2\times2$ board leaves exactly one L-tromino, possibly rotated. Thus $P(1)$ holds.

    **Induction step ($n\to n+1$).** Assume $P(n)$. Consider an arbitrary $2^{n+1}\times2^{n+1}$ board with one square removed.

    1. Divide the board into four disjoint $2^n\times2^n$ quadrants.
    2. Exactly one quadrant contains the missing square; call it $Q_1$.
    3. The four squares meeting at the centre form a $2\times2$ block, one square in each quadrant. Place one L-tromino on the three central squares belonging to the quadrants other than $Q_1$.
    4. The uncovered part of $Q_1$ is a $2^n\times2^n$ board with its original square missing. In each other quadrant, the central square is already occupied by the new tromino, so the region still to be tiled is also a $2^n\times2^n$ board with one square excluded.
    5. Apply the induction hypothesis to each of these four regions. Their tilings are disjoint from one another and from the central tromino, and together they cover every remaining square of the large board.

    Thus $P(n+1)$ follows from $P(n)$. By induction, $P(n)$ holds for every integer $n\geq1$. Taking $n=7$ proves the claim for the $128\times128$ board.

    **Illustration of the construction on a $4\times4$ board.** Here `×` is the original missing square, the three `T` squares form the central L-tromino, and `·` marks a square still to be tiled. The lines separate the quadrants.

    ```text
    × · | · ·
    · · | T ·
    ----+----
    · T | T ·
    · · | · ·
    ```

    **Why the stronger hypothesis matters.** The missing square of $Q_1$ is arbitrary, while the excluded squares in the other quadrants lie at their inner corners. A hypothesis limited to only one fixed missing-square position would not cover all four subproblems.

    **Counting check.** The completed tiling uses
    $$
    \frac{128^2-1}{3}=5461
    $$
    trominoes. Divisibility of the area by $3$ is necessary; the induction construction establishes that a tiling actually exists.

## Proof checklist

| Exercise | Induction statement | What makes the step work? |
| --- | --- | --- |
| $3$- and $5$-dollar coins | Every integer amount $m\geq8$ has a representation | Split according to whether a $5$-dollar coin is available; preserve nonnegative integer counts |
| $2^n>n$ | The inequality holds at the current index | Use the hypothesis and the bound $2n\geq n+1$ for $n\geq1$ |
| L-tromino tiling | Every board of the given size works for every missing-square position | A central tromino creates four smaller boards to which the hypothesis applies |
