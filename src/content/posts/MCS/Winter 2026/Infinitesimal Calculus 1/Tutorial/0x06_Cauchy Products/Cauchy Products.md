---
title: "Cauchy Products"
published: 2026-11-13
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let $\lvert r\rvert<1$ and $\lvert s\rvert<1$. Compute the Cauchy product of the series
  $$
  \sum_{n=0}^{\infty}r^n
  \qquad\text{and}\qquad
  \sum_{n=0}^{\infty}s^n,
  $$
  and compute the sum of their Cauchy product.

  - **Solution 1.1**
    Let
    $$
    a_n=r^n
    \qquad\text{and}\qquad
    b_n=s^n.
    $$
    The $n$th term of their Cauchy product is
    $$
    c_n
    =\sum_{k=0}^{n}a_kb_{n-k}
    =\sum_{k=0}^{n}r^ks^{n-k}.
    $$

    If $r\neq s$, then
    $$
    c_n=\frac{r^{n+1}-s^{n+1}}{r-s}.
    $$
    If $r=s$, then
    $$
    c_n=(n+1)r^n.
    $$
    Therefore, the Cauchy product is
    $$
    \sum_{n=0}^{\infty}c_n
    =
    \begin{cases}
    \displaystyle
    \sum_{n=0}^{\infty}
    \frac{r^{n+1}-s^{n+1}}{r-s},
    &r\neq s,\\[1.2em]
    \displaystyle
    \sum_{n=0}^{\infty}(n+1)r^n,
    &r=s.
    \end{cases}
    $$

    Since $\lvert r\rvert<1$ and $\lvert s\rvert<1$, both original geometric series are absolutely convergent. By the Cauchy Product Theorem,
    $$
    \begin{aligned}
    \sum_{n=0}^{\infty}c_n
    &=
    \left(\sum_{n=0}^{\infty}r^n\right)
    \left(\sum_{n=0}^{\infty}s^n\right)\\
    &=\frac1{1-r}\frac1{1-s}\\
    &=\frac1{(1-r)(1-s)}.
    \end{aligned}
    $$
