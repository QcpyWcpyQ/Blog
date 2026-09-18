---
title: "Well Ordering and the Induction Principle"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Well Ordering and the Induction Principle

- **Exercise 1**
  Consider $A=\left\{n\in\mathbb Z:n>10\right\}$.

  1. Give $5$ different lower bounds of $A$.
  2. Which of those lower bounds belong to $A$?
  3. Find $\min A$.
  4. Explain why $10$ is not the minimum.

  - **Solution 1.1**
    1. $10, 9, 8, 7, 6$.
    2. None.
    3. As $A$ is bounded below, $\min A$ exists. Since $n \geqslant 10 + 1 = 11$, $11$ is a lower bound of $A$. Since $11\in A$, we have $11=\min A$.
    4. $10\not\in A$.

---

- **Exercise 2**
  Prove that $\forall n\in \mathbb N,1+3+\cdots + (2n-1)=n^2$.

  - **Proof 2.1**
    By induction.

    1. Base step
       If $n=1$ the result is true because $1=1^2$.

    2. Inductive step
       Suppose that the result is true for $n$, that is
       $$
       1+3+\cdots + (2n-1)=n^2.
       $$
       Hence
       $$
       \begin{aligned}
       1+3+\cdots + (2n-1)+(2(n+1)-1)&=(1+3+\cdots+(2n-1))+(2n+1) \\
       &=n^2+2n+1 \\
       &=(n+1)^2.
       \end{aligned}
       $$
       Then the result is true for $n+1$ and therefore
       $$
       1+3+\cdots + (2n-1)=n^2,
       $$
       is true for every $n\in\mathbb N$.

---

- **Exercise 3**
  Prove that $\forall n\in \mathbb N, 2^n\geqslant n+1$.

  - **Proof 3.1**
    By induction.

    1. Base step
       If $n=1$ the result is true because $2^1\geqslant 1+1$.

    2. Inductive step
       Suppose that the result is true for $n$, that is
       $$
       2^n\geqslant n+1.
       $$
       Because $n\geqslant 1$, $2n\geqslant n$, hence
       $$
       2^{n+1}=2\cdot 2^n\geqslant 2\cdot (n+1)=2n+2\geqslant (n+1)+1.
       $$

       Then the result is true for $n+1$ and therefore
       $$
       2^n\geqslant n+1,
       $$
       is true for every $n\in\mathbb N$.

---

- **Exercise 4**
  Prove that $\forall n \in \mathbb N, n \geqslant 4, 2^n \geqslant n^2$.

  - **Proof 4.1**
    By induction.

    1. Base step
       If $n=4$ the result is true since $2^4=16 \geqslant 16=4^2$.

    2. Inductive step
       Suppose that the result is true for $n \geqslant 4$, that is
       $$
       2^n \geqslant n^2.
       $$
       Hence
       $$
       \begin{aligned}
       2^{n+1} &= 2 \cdot 2^n \\
       &\geqslant 2n^2 \\
       &= n^2 + n^2.
       \end{aligned}
       $$
       Since $n \geqslant 4$, we have that $n^2 \geqslant 4n = 2n + 2n > 2n + 1$. Therefore
       $$
       2^{n+1} \geqslant n^2 + 2n + 1 = (n+1)^2.
       $$
       Then the result is true for $n+1$ and therefore
       $$
       2^n \geqslant n^2,
       $$
       is true for every $n \in \mathbb N$ with $n \geqslant 4$.

---

- **Exercise 5**
  Prove that $\forall n\in\mathbb N,3\mid \left(4^n-1\right)$.

  - **Proof 5.1**
    By induction.

    1. Base step
       If $n=1$ the result is true since $3\mid \left(4^1-1\right)$.

    2. Inductive step
       Suppose that the result is true for $n$, that is
       $$
       3\mid \left(4^n-1\right).
       $$
       By definition, $\exists k\in \mathbb Z, 4^n-1=3k\implies 4^n=3k+1$. Then
       $$
       \begin{aligned}
       4^{n+1}-1&=4\cdot 4^n-1 \\
       &=4\cdot(3k+1)-1 \\
       &=12k+3 \\
       &= 3\cdot(4k+1).
       \end{aligned}
       $$
       Since $4k+1\in\mathbb Z$, $3\mid\left(4^{n+1}-1\right)$. Then the result is true for $n+1$ and therefore 
       $$
       3\mid \left(4^n-1\right)
       $$
       is true for every $n\in\mathbb N$.

---

- **Exercise 6 (Fibonacci Inequality)**
  Prove that $\forall n\in\mathbb N,F_n<2^n$ where $F_n$ is defined by $F_1=1,F_2=1,F_{n+2}=F_{n+1}+F_n$.

  - **Proof 6.1**
    By induction.

    1. Base step
       If $n=1,2$ the result is true since $F_1=1<2=2^1,F_2=1<4=2^2$.

    2. Inductive step
       Suppose that the result is true for both $n$ and $n+1$, that is
       $$
       F_n<2^n\land F_{n+1}<2^{n+1}.
       $$
       By definition
       $$
       \begin{aligned}
       F_{n+2}&=F_{n+1}+F_{n} \\
       &<2^{n+1}+2^n \\
       &<2^{n+2}.
       \end{aligned}
       $$
       Then the result is true for $n+2$ and therefore
       $$
       F_n<2^n,
       $$
       is true for every $n \in \mathbb N$.

---

- **Exercise 7 (Intersection of lines)**
  Suppose that $n$ lines are drawn in the plane so that

  1. no two lines are parallel;
  2. no three lines pass through the same point.

  Prove that the number of intersection points is $\dfrac{n(n-1)}{2}$.

  - **Proof 7.1**
    By induction.

    1. Base step
       If $n = 1$ the result is true since the number of intersection points is $0 = \dfrac{1(1-1)}{2}$.

    2. Inductive step
       Suppose that the result is true for $n$, that is, any $n$ lines satisfying the conditions have
       $$
       \dfrac{n(n-1)}{2}
       $$
       intersection points. 
       Now consider the case with $n+1$ lines. When we add the $(n+1)$-th line to the existing $n$ lines:

       * Since no two lines are parallel, the new line must intersect with all of the existing $n$ lines, creating $n$ new intersection points.
       * Since no three lines pass through the same point, all of these $n$ new intersection points are distinct from the previous ones.

       Hence, the total number of intersection points for $n+1$ lines is
       $$
       \begin{aligned}
       \dfrac{n(n-1)}{2} + n &= \dfrac{n(n-1) + 2n}{2} \\
       &= \dfrac{n^2 - n + 2n}{2} \\
       &= \dfrac{n^2 + n}{2} \\
       &= \dfrac{(n+1)n}{2}.
       \end{aligned}
       $$
       Then the result is true for $n+1$ and therefore the number of intersection points is $\dfrac{n(n-1)}{2}$ for every $n \in \mathbb N$.
