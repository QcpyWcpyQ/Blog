---
title: "The Real Number System(2)"
published: 2026-10-20
description: "The epsilon characterization of the supremum, suprema of unions, and extrema of sets (Exercises 7–9)."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 7**
  Let $A\subseteq\mathbb{R}$ be nonempty and bounded above. Prove that $\sup A=a$ if and only if both of the following conditions hold.

  1. $x\leqslant a$ for every $x\in A$.
  2. For every $\varepsilon>0$, there exists $x_{\varepsilon}\in A$ such that
     $$
     a-\varepsilon<x_{\varepsilon}\leqslant a.
     $$

  - **Solution 7.1 (The epsilon characterization of the supremum)**
    **Forward direction.** Suppose $a=\sup A$. Because $a$ is an upper bound of $A$, we have
    $$
    x\leqslant a\qquad\text{for every }x\in A.
    $$
    Let $\varepsilon>0$. Since $a-\varepsilon<a$ and $a$ is the least upper bound, $a-\varepsilon$ cannot be an upper bound of $A$. Therefore there exists $x_{\varepsilon}\in A$ such that
    $$
    a-\varepsilon<x_{\varepsilon}.
    $$
    The upper-bound property also gives $x_{\varepsilon}\leqslant a$, and hence
    $$
    a-\varepsilon<x_{\varepsilon}\leqslant a.
    $$

    **Reverse direction.** Suppose the two stated conditions hold. The first condition says that $a$ is an upper bound of $A$. Let $u$ be any upper bound of $A$. If $u<a$, then
    $$
    \varepsilon:=a-u>0.
    $$
    By the second condition, there exists $x_{\varepsilon}\in A$ such that
    $$
    u=a-\varepsilon<x_{\varepsilon}\leqslant a.
    $$
    This contradicts the assumption that $u$ is an upper bound of $A$. Thus every upper bound $u$ satisfies $a\leqslant u$. Therefore $a$ is the least upper bound of $A$, so
    $$
    \sup A=a.
    $$

---

- **Exercise 8**
  Let $A,B\subseteq\mathbb{R}$ be nonempty and bounded above. Prove that
  $$
  \sup(A\cup B)=\max\{\sup A,\sup B\}.
  $$

  - **Solution 8.1 (The supremum of a union)**
    Set
    $$
    a:=\sup A,\qquad b:=\sup B,\qquad m:=\max\{a,b\}.
    $$
    We first show that $m$ is an upper bound of $A\cup B$. Let $x\in A\cup B$. If $x\in A$, then
    $$
    x\leqslant a\leqslant m.
    $$
    If $x\in B$, then
    $$
    x\leqslant b\leqslant m.
    $$
    Hence $x\leqslant m$ for every $x\in A\cup B$.

    It remains to prove that $m$ is the least upper bound. Let $u$ be any upper bound of $A\cup B$. Since $A\subseteq A\cup B$ and $B\subseteq A\cup B$, the number $u$ is an upper bound of both $A$ and $B$. Therefore
    $$
    a\leqslant u\qquad\text{and}\qquad b\leqslant u,
    $$
    which implies
    $$
    m=\max\{a,b\}\leqslant u.
    $$
    Thus $m$ is the least upper bound of $A\cup B$, and consequently
    $$
    \sup(A\cup B)=\max\{\sup A,\sup B\}.
    $$

---

- **Exercise 9**
  Compute the supremum, infimum, maximum, and minimum of
  $$
  A=\left\{\frac{(-1)^n}{n}:n\in\mathbb{N}\right\},
  \qquad
  B=\left\{k^2-6k-1:k\in\mathbb{Z}\right\}.
  $$

  - **Solution 9.1 (The alternating reciprocal set $A$)**
    Separate the terms with odd and even indices:
    $$
    A=A_1\cup A_2,
    $$
    where
    $$
    A_1=\left\{-\frac{1}{2n-1}:n\in\mathbb{N}\right\},
    \qquad
    A_2=\left\{\frac{1}{2n}:n\in\mathbb{N}\right\}.
    $$

    Every element of $A_1$ is negative. For every $n\in\mathbb{N}$,
    $$
    0<\frac{1}{2n}\leqslant\frac12,
    $$
    with equality when $n=1$. Hence every element of $A$ is at most $1/2$, and $1/2\in A$. Therefore
    $$
    \sup A=\max A=\frac12.
    $$

    Every element of $A_2$ is positive. Since $2n-1\geqslant1$, we have
    $$
    0<\frac{1}{2n-1}\leqslant1,
    $$
    and therefore
    $$
    -1\leqslant-\frac{1}{2n-1}<0.
    $$
    Equality on the left occurs when $n=1$. Thus every element of $A$ is at least $-1$, and $-1\in A$. Consequently,
    $$
    \inf A=\min A=-1.
    $$

  - **Solution 9.2 (The quadratic set $B$)**
    Completing the square gives
    $$
    k^2-6k-1=(k-3)^2-10.
    $$
    Since $(k-3)^2\geqslant0$ for every $k\in\mathbb{Z}$,
    $$
    k^2-6k-1\geqslant-10.
    $$
    Equality holds at $k=3$, so
    $$
    \inf B=\min B=-10.
    $$

    The set $B$ is not bounded above. Indeed, let $M\in\mathbb{R}$. By the Archimedean property, there exists $n\in\mathbb{N}$ such that
    $$
    n>M+10.
    $$
    Taking $k=n+3\in\mathbb{Z}$ and using $n^2\geqslant n$ gives
    $$
    k^2-6k-1=(k-3)^2-10=n^2-10\geqslant n-10>M.
    $$
    Hence no real number is an upper bound of $B$. It follows that $B$ has neither a supremum in $\mathbb{R}$ nor a maximum. In the extended real number system, one may write $\sup B=+\infty$.

  - **Results 9.3**

    | Set | Infimum | Supremum | Minimum | Maximum |
    | --- | --- | --- | --- | --- |
    | $A$ | $-1$ | $1/2$ | $-1$ | $1/2$ |
    | $B$ | $-10$ | Does not exist in $\mathbb{R}$ | $-10$ | Does not exist |
