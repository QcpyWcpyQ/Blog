---
title: "Cartesian Products"
published: 2026-11-23
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  The Cartesian product of sets $A$ and $B$ is the set of ordered pairs whose first element belongs to $A$ and whose second element belongs to $B$.
  $$
  A\times B:=\{(a,b):a\in A,\ b\in B\}.
  $$

---

- **Definition 2**
  For a function $f\colon A\to B$, its graph is defined by
  $$
  \Gamma_f:=\{(a,f(a)):a\in A\}.
  $$

---

- **Definition 3**
  A function $f\colon A\to B$ is a subset $\Gamma\subset A\times B$ such that for each $a\in A$ there is exactly one $b\in B$ with $(a,b)\in\Gamma$. We then write $f(a)=b$.

  Given $f\colon A\to B$ and $X\subset A$, how do we define the restriction $f|_X$? Its graph is
  $$
  \Gamma_{f|_X}=\Gamma_f\cap(X\times B).
  $$

---

- **Definition 4**
  $A\times B$ comes with two projections
  $$
  \begin{aligned}
  \pi_A&\colon A\times B\to A,\\
  \pi_B&\colon A\times B\to B.
  \end{aligned}
  $$

- **Remark 4.1**
  There are bijections
  $$
  \begin{aligned}
  A\times B&\to B\times A,\\
  (A\times B)\times C&\to A\times(B\times C).
  \end{aligned}
  $$

---

- **Definition 5**
  A finite sequence $(a_1,\ldots,a_{100})$ of integers is an element of $\mathbb Z^{100}$. What is an infinite sequence? We want to define the product of infinitely many sets. We can also define the Cartesian product of two sets by
  $$
  A_1\times A_2
  =\bigl\{f\colon\{1,2\}\to A_1\cup A_2:f(1)\in A_1,\ f(2)\in A_2\bigr\}.
  $$
  Indeed, the pair $(a_1,a_2)\in A_1\times A_2$ corresponds to the function with $f(1)=a_1$ and $f(2)=a_2$. We can do this for any family of sets. Let $\{A_i\}_{i\in I}$ be such a family. Then
  $$
  \prod_{i\in I}A_i
  :=\left\{f\colon I\to\bigcup_{i\in I}A_i:
  f(i)\in A_i\text{ for every }i\in I\right\}.
  $$

  For sets $A$ and $B$, $A^B$ denotes the set of all functions from $B$ to $A$.
  $$
  A^B:=\bigl\{\Gamma\subseteq B\times A \bigm|
  \forall b\in B,\ \exists!\,a\in A\;\; (b,a)\in\Gamma\bigr\}.
  $$

- **Theorem 5.1**
  There is a bijection $2^A\times 2^B\to 2^{A\cup B}$ whenever $A\cap B=\varnothing$. Recall that $2^A=\mathcal P(A)$ is the set of all subsets of $A$. For finite sets $A$ and $B$, we have $|2^A|=2^{|A|}$ and $|A\times B|=|A|\cdot|B|$. If $A\cap B=\varnothing$, then $|A\cup B|=|A|+|B|$.

  - **Proof 5.1.1**
    Define $f\colon 2^A\times 2^B\to 2^{A\cup B}$ by $f(X,Y)=X\cup Y$. Since $A$ and $B$ are disjoint, for $X\subset A$ and $Y\subset B$ we have
    $$
    (X\cup Y)\cap A=X,\qquad (X\cup Y)\cap B=Y.
    $$
    Conversely, for every $S\subset A\cup B$,
    $$
    (S\cap A)\cup(S\cap B)=S\cap(A\cup B)=S.
    $$
    Thus $S\mapsto(S\cap A,S\cap B)$ is the inverse of $f$, so $f$ is a bijection.

- **Theorem 5.2**
  There is a bijective map $\left(2^A\right)^B\to 2^{A\times B}$.

  - **Proof 5.2.1**
    An element of $(2^A)^B$ is a function $f\colon B\to 2^A$. Define
    $$
    \Phi(f)=\{(a,b)\in A\times B:a\in f(b)\}.
    $$
    Conversely, given $S\subset A\times B$, define $g_S\colon B\to 2^A$ by
    $$
    g_S(b)=\{a\in A:(a,b)\in S\}.
    $$
    For every $b\in B$, we have $g_{\Phi(f)}(b)=f(b)$. Also, for every $(a,b)\in A\times B$,
    $$
    (a,b)\in\Phi(g_S)\iff a\in g_S(b)\iff(a,b)\in S.
    $$
    Thus $\Phi(g_S)=S$, so $S\mapsto g_S$ is the inverse of $\Phi$. Hence $\Phi$ is a bijection.
