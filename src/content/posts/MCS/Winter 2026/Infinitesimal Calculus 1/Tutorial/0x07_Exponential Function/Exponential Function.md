---
title: "Exponential Function"
published: 2026-11-24
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**

  1. Compute
     $$
     \lim_{n\to\infty}\left(1+\frac{1}{2n}\right)^n.
     $$

  2. Compute
     $$
     \lim_{n\to\infty}\left(\frac{n-3}{n+1}\right)^n.
     $$

  3. Compute
     $$
     \lim_{n\to\infty}\left(1+\frac{1}{n^2}\right)^n.
     $$

  - **Solution 1.1**

    **1.** Using the standard limit that defines $e$,
    $$
    \begin{aligned}
    \lim_{n\to\infty}\left(1+\frac{1}{2n}\right)^n
      &=\lim_{n\to\infty}
        \left(\left(1+\frac{1}{2n}\right)^{2n}\right)^{1/2}\\
      &=e^{1/2}.
    \end{aligned}
    $$

    **2.** Using the corresponding standard limit,
    $$
    \begin{aligned}
    \lim_{n\to\infty}\left(\frac{n-3}{n+1}\right)^n
      &=\lim_{n\to\infty}\left(1-\frac{4}{n+1}\right)^n\\
      &=e^{-4}.
    \end{aligned}
    $$

    **3.** Write $n=n^2/n$. Then
    $$
    \begin{aligned}
    \lim_{n\to\infty}\left(1+\frac{1}{n^2}\right)^n
      &=\lim_{n\to\infty}
        \left(\left(1+\frac{1}{n^2}\right)^{n^2}\right)^{1/n}\\
      &=e^0\\
      &=1.
    \end{aligned}
    $$
