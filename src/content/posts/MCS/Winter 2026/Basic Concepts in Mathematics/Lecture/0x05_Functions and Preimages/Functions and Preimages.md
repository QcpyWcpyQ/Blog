---
title: "Functions and Preimages"
published: 2026-11-09
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**  
  Let $f\colon A\to B$ and $Y\subset B$.

  1. Show that $f^{-1}(Y)=f^{-1}(Y\cap f(A))$.
  2. Prove that $Y=f(f^{-1}(Y))$ if and only if $Y\subset f(A)$.

  - **Proof 1.1**
    Let $x\in A$. Then
    $$
    \begin{aligned}
    x\in f^{-1}(Y)
    &\iff f(x)\in Y\\
    &\iff f(x)\in Y\cap f(A)\\
    &\iff x\in f^{-1}(Y\cap f(A)).
    \end{aligned}
    $$
    The second equivalence holds because $f(x)\in f(A)$ for every $x\in A$. Therefore,
    $$
    f^{-1}(Y)=f^{-1}(Y\cap f(A)).
    $$

  - **Proof 1.2**
    Suppose first that
    $$
    Y=f\bigl(f^{-1}(Y)\bigr).
    $$
    Every element of $f(f^{-1}(Y))$ is a value of $f$, so
    $$
    f\bigl(f^{-1}(Y)\bigr)\subset f(A).
    $$
    Hence $Y\subset f(A)$.

    Conversely, suppose that $Y\subset f(A)$. For every $y\in Y$, there exists $x\in A$ such that
    $$
    f(x)=y.
    $$
    Since $y\in Y$, we have $x\in f^{-1}(Y)$, and therefore
    $$
    y=f(x)\in f\bigl(f^{-1}(Y)\bigr).
    $$
    Thus
    $$
    Y\subset f\bigl(f^{-1}(Y)\bigr).
    $$
    The reverse inclusion always holds, because
    $$
    y\in f\bigl(f^{-1}(Y)\bigr)
    $$
    implies that $y=f(x)$ for some $x\in f^{-1}(Y)$, and hence $y\in Y$. Therefore,
    $$
    Y=f\bigl(f^{-1}(Y)\bigr).
    $$
