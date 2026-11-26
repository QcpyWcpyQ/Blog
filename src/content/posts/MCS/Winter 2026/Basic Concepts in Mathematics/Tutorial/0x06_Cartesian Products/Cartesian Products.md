---
title: "Cartesian Products"
published: 2026-11-23
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**
  Let $f\colon X\to Y$ be a function, and let $B\subset Y$. Compute
  $$
  \pi_X(\Gamma_f\cap(X\times B)).
  $$

  - **Solution 1.1**
    A point $(x,f(x))$ of the graph lies in $X\times B$ exactly when $f(x)\in B$. Projecting onto the first coordinate gives
    $$
    \pi_X(\Gamma_f\cap(X\times B))
    =\{x\in X:f(x)\in B\}
    =f^{-1}(B).
    $$

---

- **Problem 2**
  Let $f\colon X\to Y$ be a function, and let $A\subset X$. Compute
  $$
  \pi_Y(\Gamma_f\cap(A\times Y)).
  $$

  - **Solution 2.1**
    The intersection consists of the points $(x,f(x))$ with $x\in A$. Projecting onto the second coordinate gives
    $$
    \pi_Y(\Gamma_f\cap(A\times Y))
    =\{f(x):x\in A\}
    =f(A).
    $$

---

- **Problem 3**
  Let $A$ and $B$ be finite sets. Show that
  $$
  \left(2^A\right)^B\neq2^{\left(A^B\right)}.
  $$

  - **Solution 3.1**
    Since $2^{(A^B)}$ is the power set of $A^B$, it contains $\varnothing$. If $B\ne\varnothing$, every function from $B$ to $2^A$ has a nonempty graph. Thus $\varnothing\notin(2^A)^B$, which distinguishes the two sets.

    If $B=\varnothing$, the empty function is the unique function from $B$ to either $A$ or $2^A$. Hence
    $$
    (2^A)^B=\{\varnothing\},\qquad
    2^{(A^B)}=\mathcal P(\{\varnothing\})
    =\{\varnothing,\{\varnothing\}\}.
    $$
    The two sets are therefore distinct in this case as well.
