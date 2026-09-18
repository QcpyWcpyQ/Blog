---
title: "Week 3"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Week 3

- **Problem 1**
  We say that two integers have *different parity* if one of them is odd and the other one is even.
  Prove that two integers have different parity if and only if their sum is odd.

  - **Proof 1.1**
    ($\Longrightarrow$) Suppose two integers have different parity. Without loss of generality, let one of them be $2k_1$ for some $k_1 \in \mathbb Z$ and the other one be $2k_2 + 1$ for some $k_2 \in \mathbb Z$. Then their sum
    $$
    2k_1 + (2k_2 + 1) = 2(k_1 + k_2) + 1
    $$
    is odd because $k_1 + k_2 \in \mathbb Z$.

    ($\Longleftarrow$) Let the two integers be $a$ and $b$, and suppose that their sum is odd, that is, $a + b = 2s + 1$ for some $s \in \mathbb Z$. By definition, the integer $a$ must be either even or odd. We consider these two cases:

    1. **Case 1**: Suppose $a$ is even, so $a = 2k_1$ for some $k_1 \in \mathbb Z$. 
       Then we can express $b$ as:
       $$
       b = (a + b) - a = (2s + 1) - 2k_1 = 2(s - k_1) + 1.
       $$
       Since $s - k_1 \in \mathbb Z$, $b$ is an odd integer. Thus, $a$ is even and $b$ is odd, meaning they have different parity.

    2. **Case 2**: Suppose $a$ is odd, so $a = 2k_1 + 1$ for some $k_1 \in \mathbb Z$. 
       Then we can express $b$ as:
       $$
       b = (a + b) - a = (2s + 1) - (2k_1 + 1) = 2(s - k_1).
       $$
       Since $s - k_1 \in \mathbb Z$, $b$ is an even integer. Thus, $a$ is odd and $b$ is even, meaning they have different parity.

    Therefore, in either case, the two integers must have different parity.

---

- **Problem 2**
  Suppose that $n$ lines are drawn in the plane so that
  
  1. no two lines are parallel;
  2. no three lines pass through the same point.
  
  Prove by induction that the lines divide the plane into
  $$
  1 + \dfrac{n(n+1)}{2}
  $$
  regions.

  - **Proof 2.1**
    By induction.

    1. Base step
       If $n = 1$ the result is true since the number of regions is $1 + \dfrac{1 \cdot (1 + 1)}{2} = 2$.

    2. Inductive step
       Suppose that the result is true for $n$, that is, any $n$ lines satisfying the conditions divide the plane into
       $$
       1 + \dfrac{n(n+1)}{2}
       $$
       regions. 
       Now consider the case with $n + 1$ lines. When we add the $(n+1)$-th line to the existing $n$ lines:
       
       * Since no two lines are parallel and no three lines pass through the same point, the new line must intersect all $n$ existing lines at exactly $n$ distinct, non-overlapping intersection points.
       * These $n$ distinct intersection points divide the new $(n+1)$-th line into exactly $n+1$ line segments or rays at the ends.
       * Each of these $n+1$ segments cuts through an existing region and splits it into two, thereby creating exactly $n+1$ new regions.
       
       Hence, the total number of regions for $n+1$ lines is
       $$
       \begin{aligned}
       \left(1 + \dfrac{n(n+1)}{2}\right) + (n+1) &= 1 + \dfrac{n(n+1) + 2(n+1)}{2} \\
       &= 1 + \dfrac{(n+1)(n+2)}{2} \\
       &= 1 + \dfrac{(n+1)((n+1)+1)}{2}.
       \end{aligned}
       $$
       Then the result is true for $n+1$ and therefore the lines divide the plane into $1 + \dfrac{n(n+1)}{2}$ regions for every $n \in \mathbb N$.

---

- **Problem 3**
  Prove by induction that for every $n \in \mathbb N_0$,
  $$
  4 \mid \left(5^{n+1} + 3 \cdot 9^n - 4\right).
  $$

  - **Proof 3.1**
    By induction.

    1. Base step
       If $n = 0$ then the result is true because $5^{0+1} + 3 \cdot 9^0 - 4 = 4$ and $4 \mid 4$.

    2. Inductive step
       Suppose that the result is true for $n$, that is,
       $$
       4 \mid \left(5^{n+1} + 3 \cdot 9^n - 4\right).
       $$
       By definition, $\exists k \in \mathbb Z, 5^{n+1} + 3 \cdot 9^n - 4 = 4k \implies 5^{n+1} + 3 \cdot 9^n = 4(k + 1)$. Then
       $$
       \begin{aligned}
       5^{(n+1)+1} + 3 \cdot 9^{n+1} - 4 &= 5 \cdot 5^{n+1} + 9 \cdot 3 \cdot 9^n - 4 \\
       &= 5 \cdot \left(5^{n+1} + 3 \cdot 9^n\right) + 4 \cdot 3 \cdot 9^n - 4 \\
       &= 5 \cdot 4(k + 1) + 4 \cdot 3 \cdot 9^n - 4 \\
       &= 4 \cdot \left(5k + 4 + 3 \cdot 9^n\right).
       \end{aligned}
       $$
       Since $5k + 4 + 3 \cdot 9^n \in \mathbb Z$, we have $4 \mid \left(5^{(n+1)+1} + 3 \cdot 9^{n+1} - 4\right)$. Then the result is true for $n + 1$ and therefore
       $$
       4 \mid \left(5^{n+1} + 3 \cdot 9^n - 4\right)
       $$
       is true for every $n \in \mathbb N_0$.

---

- **Problem 4**
  Suppose $a, c \in \mathbb N$ with
  $$
  a < c \quad \text{and} \quad a \mid c.
  $$
  Suppose also that
  $$
  c - a \mid c + a.
  $$
  Determine all possible values of $c$ in terms of $a$. Justify your answer.  
  Your proof should use only the definition and basic properties of divisibility.

  - **Solution 4.1**
    Suppose $a,c\in\mathbb N$ with $a<c,a\mid c,c-a\mid c+a$. The only possible values of $c$ in terms of $a$ are $c = 2a$ and $c = 3a$.
    By the basic properties of divisibility, since $c - a \mid c + a$ and $c - a \mid c - a$, it must divide their difference:
    $$
    c - a \mid (c + a) - (c - a) \implies c - a \mid 2a.
    $$
    Since $a \mid c$ and $a < c$, by the definition of divisibility, there exists an integer $k \in \mathbb N$ with $k > 1$ such that
    $$
    c = ka.
    $$
    Substituting $c = ka$ into the relation $c - a \mid 2a$, we get
    $$
    ka - a \mid 2a \implies a(k - 1) \mid 2a.
    $$
    Since $a \in \mathbb N$, by the basic properties of divisibility
    $$
    k - 1 \mid 2.
    $$
    Since $k > 1$, the term $k - 1$ is a positive integer. The only positive divisors of $2$ are $1$ and $2$. This gives two possible cases: $k=2$ or $k=3$, that is, $c=2a$ or $c=3a$.

---

- **Problem 5**
  Suppose $x,y\in\mathbb N$ with
  $$
  x^6 = 81 y^{10}.
  $$
  Prove that every prime that divides $y$ also divides $x$.

  - **Proof 5.1**
    Suppose $x,y\in\mathbb N$ with $x^6 = 81 y^{10}$. Let $p$ be a prime number such that $p \mid y$. Since $y \in \mathbb N$, by definition, we have $\nu_p(y) \geqslant 1$.  
    
    By Proposition, we have
    $$
    \begin{aligned}
    
    \nu_p\left(x^6\right) &= \nu_p\left(81 y^{10}\right) \\
    6\nu_p(x) &= \nu_p(81) + 10\nu_p(y).
    
    \end{aligned}
    $$
    We know that $\nu_p(81) \geqslant 0$ for any prime $p$. Together with $\nu_p(y) \geqslant 1$, we obtain that 
    $$
    6\nu_p(x) = \nu_p(81) + 10\nu_p(y) \geqslant 0 + 10(1) = 10.
    $$
    This implies $6\nu_p(x) \geqslant 10$, which means $\nu_p(x) \geqslant \dfrac{10}{6} > 0$.  
    Since $\nu_p(x) \in \mathbb N_0$, it must be that $\nu_p(x) \geqslant 1$. By definition, this means $p \mid x$.  
    
    Therefore, every prime that divides $y$ also divides $x$.
