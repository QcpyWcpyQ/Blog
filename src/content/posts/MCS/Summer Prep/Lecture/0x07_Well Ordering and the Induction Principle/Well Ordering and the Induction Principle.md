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

- **Definition 1**
  Let $A\subseteq \mathbb Z$. We say that $A$ is **bounded below** if there exists $l\in\mathbb Z$ such that $l\leqslant a$ for all $a\in A$ and $l$ is called a **lower bound** of $A$. If $l$ is a lower bound of $A$ and $l\in A$, we say that $l$ is the **first element** of $A$ (minimum).
- **Remark 1**
  The first element of $A$, if it exists, is unique.
  If $l$ and $l^\prime$ are both first elements of $A$, then $l\leqslant l^\prime$ and $l^\prime \leqslant l$, therefore $l=l^\prime$.

---

- **Definition 2**
  Let $A\subseteq \mathbb Z$. We say that $A$ is **bounded above** if there exists $u\in\mathbb Z$ such that $a\leqslant u$ for all $a\in A$ and $u$ is called an **upper bound** of $A$. If $u$ is an upper bound of $A$ and $u\in A$, we say that $u$ is the **last element** of $A$ (maximum).

- **Remark 2**
  The last element of $A$, if it exists, is unique.
  If $u$ and $u^\prime$ are both last elements of $A$, then $u^\prime\leqslant u$ and $u \leqslant u^\prime$, therefore $u=u^\prime$.

  - **Example 2.1**

    1. The set $A=\left\{a\in\mathbb Z:a\geqslant -2\right\}$ is bounded below but is not bounded above.
       $$
       A=\left\{-2,-1,0,1,2,\cdots\right\}.
       $$
       Its first element is $-2$. Note that $-3$ is also a lower bound of $A$ but $-3\not\in A$.

    2. The set $B=\left\{a\in\mathbb Z:a\leqslant 1\right\}$ is bounded above but is not bounded below.
       $$
       B=\left\{\cdots,-3,-2,-1,0,1\right\}.
       $$
       Its last element is $1$. Note that $2$ is also an upper bound of $B$ but $2\not\in B$.

    3. The set $C=\left\{a\in\mathbb Z: a>10\right\}$ is bounded below but is not bounded above.
       $$
       C=\left\{11,12,13,14,15,\cdots\right\}.
       $$
       Its first element is $11$. Note that $10$ is also a lower bound of $C$ but $10\not\in C$.

    4. The set $\mathbb N$ is bounded below but is not bounded above.
       $$
       \mathbb N=\left\{1,2,3,4,5,\cdots\right\}.
       $$
       Its first element is $1$. Note that $0$ is also a lower bound of $\mathbb N$ but $0\not\in \mathbb N$. $\mathbb N$ is not bounded above since if $n\in \mathbb N$ then $n+1\in\mathbb N$ with $n<n+1$. Therefore it is not possible to find $k\in\mathbb N$ such that $n\leqslant k$ for all $n\in\mathbb N$.

  Every subset of $\mathbb N$ is bounded below at least by $1$.

  **Well ordering axiom**: Every nonempty subset of $\mathbb N$ has a first element.

  - **Theorem 2.2**
    Every nonempty subset $A\subseteq\mathbb N$ which is bounded above in \(\mathbb N\) has a last element.

    - **Proof 2.2.1**
      Since $A$ is bounded above in $\mathbb N$, let $y\in\mathbb N$ be such an upper bound of $A$.
      $$
      U=\left\{u\in\mathbb N:u\text{ is an upper bound of }A\right\}.
      $$
      Then $U\subseteq \mathbb N$ and $U\neq \varnothing$ because $y\in U$, so by the well ordering axiom $U$ has a first element $n$. Note that $n-1\not\in U$ since if $n-1\in U$ then $n\leqslant n-1$ because $n$ is a lower bound of $U$, which is not possible.

      Therefore there exists $a\in A$ such that $n-1<a$ and $a\leqslant n$ because $n$ is an upper bound of $A$. Then $a=n$ because there is no natural number between $n-1$ and $n$. Therefore $n$ is the last element of $A$.

  - **Proposition 2.3**
    Every nonempty subset $A\subseteq\mathbb Z$ that is bounded below has a first element.

    - **Proof 2.3.1**
      Let $A\subseteq \mathbb Z$ be bounded below with $A\neq\varnothing$, $y$ be a lower bound of $A$ and consider the set
      $$
      B=\left\{a-y+1:a\in A\right\}.
      $$
      Then $B\subseteq\mathbb N$ and $B\neq \varnothing$ because $y\leqslant a$ for all $a\in A$, that is, $a-y\geqslant 0$ for all $a\in A$ and thus $a-y+1\geqslant 1$ for all $a\in A$, therefore $B\subseteq \mathbb N$ and $B\neq\varnothing$ because $A\neq \varnothing$. Then by the well ordering axiom $B$ has a first element $b_0$, that is, $b_0=a_0-y+1$ for some $a_0\in A$, hence
      $$
      \begin{aligned}
      b_0 &\leqslant a-y+1\quad &(\forall a\in A) \\
      a_0-y+1 &\leqslant a-y+1 &(\forall a\in A) \\
      a_0 &\leqslant a. &(\forall a\in A)
      \end{aligned}
      $$
      Therefore $a_0$ is the first element of $A$.

---

- **Theorem 3 (The principle of induction)**
  Let $S\subseteq\mathbb N$ that satisfies the following conditions:

  1. $1\in S$.
  2. If $n\in S$ then $n+1\in S$.

  Then $S=\mathbb N$.

  - **Proof 3.1**
    Let $S^\prime =\mathbb N\setminus S$ and suppose that $S\neq \mathbb N$. Then $S^\prime \neq \varnothing$ and by the well ordering axiom $S^\prime$ has a first element $m$. Since $1\in S$, then $m>1$ and thus $m-1\in \mathbb N$. Since $m$ is the first element of $S^\prime$ then $m-1\in S$. And by $\text{condition (2)}$, we have that $m=(m-1)+1\in S$ which is a contradiction because $m\in S^\prime$. Therefore $S^\prime=\varnothing$ and $S=\mathbb N$.

- **Corollary 3 (The principle of induction, alternative form)**
  Let $P(n)$ be a statement defined for every $n\in \mathbb N$. Suppose that:

  1. $P(1)$ is true.
  2. If $P(n)$ is true then $P(n+1)$ is true.

  Then $P(n)$ is true for every $n\in\mathbb N$.

  The $\text{condition (1)}$ is called the **base step**, the assumption that $P(n)$ is true is called the **inductive hypothesis** and the passage from $P(n)$ to $P(n+1)$ is called the **inductive step**.

  - **Example 3.1**
    Prove that $1+2+\cdots+n=\dfrac{n(n+1)}{2}$ for every $n\in\mathbb N$.

    - **Proof 3.1.1**

      1. Base step
         If $n=1$ the result is true since $1=\dfrac{1(1+1)}{2}$.

      2. Inductive step
         Suppose that the result is true for $n$, that is
         $$
         1+2+\cdots+n=\dfrac{n(n+1)}{2}.
         $$
         Hence
         $$
         \begin{aligned}
         1+2+\cdots+n+(n+1)&=(1+2+\cdots+n)+(n+1) \\
         &=\dfrac{n(n+1)}{2} + (n+1) \\
         &=\dfrac{n(n+1)+2(n+1)}{2} \\
         &=\dfrac{(n+2)(n+1)}{2}.
         \end{aligned}
         $$
         Then the result is true for $n+1$ and therefore
         $$
         1+2+\cdots+n=\dfrac{n(n+1)}{2},
         $$
         is true for every $n\in\mathbb N$.

  - **Example 3.2**
    Prove that $n!\geqslant 2^{n-1}$ for every $n\in\mathbb N$.

    - **Proof 3.2.1**

      1. Base step
         If $n=1$ the result is true since $1!=1\geqslant 1=2^{1-1}$.

      2. Inductive step
         Suppose that the result is true for $n$, that is
         $$
         n!\geqslant 2^{n-1}.
         $$
         Because $n\geqslant 1$, then $n+1\geqslant 2$, hence
         $$
         (n+1)!=n!\cdot (n+1)\geqslant 2^{n-1}\cdot 2=2^n.
         $$
         Then the result is true for $n+1$ and therefore
         $$
         n!\geqslant 2^{n-1},
         $$
         is true for every $n\in\mathbb N$.
