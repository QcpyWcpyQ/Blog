---
title: "Subsequences"
published: 2026-11-03
description: "Cauchy sequences and their algebraic properties."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let $(a_n)$ and $(b_n)$ be Cauchy sequences. Using the definition, prove that $(a_n+b_n)$ and $(a_nb_n)$ are Cauchy sequences.

  - **Solution 1.1**
    First, we show that every Cauchy sequence is bounded. Since $(a_n)$ is Cauchy, there exists $N_a\in\mathbb{N}$ such that
    $$
    m,n>N_a
    \implies
    \left\lvert a_m-a_n\right\rvert<1.
    $$
    Fix $n=N_a+1$. For every $m>N_a$,
    $$
    \lvert a_m\rvert
      \leqslant\left\lvert a_m-a_{N_a+1}\right\rvert
        +\left\lvert a_{N_a+1}\right\rvert
      <1+\left\lvert a_{N_a+1}\right\rvert.
    $$
    The remaining terms $a_1,\ldots,a_{N_a}$ form a finite set, so $(a_n)$ is bounded. The same argument shows that $(b_n)$ is bounded. Hence, there exists $M\geqslant1$ such that
    $$
    \lvert a_n\rvert\leqslant M
    \qquad\text{and}\qquad
    \lvert b_n\rvert\leqslant M
    $$
    for every $n\in\mathbb{N}$.

    Let $\varepsilon>0$. Since $(a_n)$ and $(b_n)$ are Cauchy sequences, there exist $N_1,N_2\in\mathbb{N}$ such that
    $$
    m,n>N_1
    \implies
    \left\lvert a_m-a_n\right\rvert<\frac{\varepsilon}{2}
    $$
    and
    $$
    m,n>N_2
    \implies
    \left\lvert b_m-b_n\right\rvert<\frac{\varepsilon}{2}.
    $$
    Set $N=\max\{N_1,N_2\}$. If $m,n>N$, then
    $$
    \begin{aligned}
    \left\lvert(a_m+b_m)-(a_n+b_n)\right\rvert
      &\leqslant\left\lvert a_m-a_n\right\rvert
        +\left\lvert b_m-b_n\right\rvert\\
      &<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}\\
      &=\varepsilon.
    \end{aligned}
    $$
    Therefore, $(a_n+b_n)$ is a Cauchy sequence.

    For the product, choose $N_3,N_4\in\mathbb{N}$ such that
    $$
    m,n>N_3
    \implies
    \left\lvert a_m-a_n\right\rvert<\frac{\varepsilon}{2M}
    $$
    and
    $$
    m,n>N_4
    \implies
    \left\lvert b_m-b_n\right\rvert<\frac{\varepsilon}{2M}.
    $$
    Set $N'=\max\{N_3,N_4\}$. If $m,n>N'$, then
    $$
    \begin{aligned}
    \left\lvert a_mb_m-a_nb_n\right\rvert
      &=\left\lvert a_m(b_m-b_n)+b_n(a_m-a_n)\right\rvert\\
      &\leqslant\lvert a_m\rvert\left\lvert b_m-b_n\right\rvert
        +\lvert b_n\rvert\left\lvert a_m-a_n\right\rvert\\
      &\leqslant M\left\lvert b_m-b_n\right\rvert
        +M\left\lvert a_m-a_n\right\rvert\\
      &<M\frac{\varepsilon}{2M}+M\frac{\varepsilon}{2M}\\
      &=\varepsilon.
    \end{aligned}
    $$
    Therefore, $(a_nb_n)$ is a Cauchy sequence.
