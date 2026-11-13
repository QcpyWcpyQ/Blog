---
title: "Week 3"
published: 2026-11-13
description: "Complete solutions on limits, finite geometric sums, and a geometric criterion for Cauchy sequences."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Limits

- **Problem 1**
  Compute the following limits. You do not need to use the definition.

  1. $$
     \lim_{n\to\infty}
     \sqrt[n]{\frac{7^n+3^n}{2^n+4^n}}.
     $$

  2. $$
     \lim_{n\to\infty}\sqrt[n]{n^2+n}.
     $$

  3. $$
     \lim_{n\to\infty}
     \left(\frac{2n+6}{2n}\right)^{3n+2}.
     $$

  4. $$
     \lim_{n\to\infty}
     \left(\frac{n^2+1}{n^2+4}\right)^{6n^2}.
     $$

  5. $$
     \lim_{n\to\infty}
     \sqrt[n]{\frac{2n}{n+1}}.
     $$

  6. $$
     \lim_{n\to\infty}
     \frac{2^n+(-1)^n}{n\left(2^n+(-1)^n\right)}.
     $$

  - **Solution 1.1 (Part a)**
    Factoring out the dominant powers gives
    $$
    \begin{aligned}
    \sqrt[n]{\frac{7^n+3^n}{2^n+4^n}}
    &=\sqrt[n]{
      \frac{7^n\left(1+\left(\frac37\right)^n\right)}
      {4^n\left(1+\left(\frac12\right)^n\right)}
    }\\
    &=\frac74
      \sqrt[n]{
      \frac{1+\left(\frac37\right)^n}
      {1+\left(\frac12\right)^n}
      }.
    \end{aligned}
    $$
    Since
    $$
    \frac{1+\left(\frac37\right)^n}
    {1+\left(\frac12\right)^n}
    \longrightarrow1,
    $$
    its $n$th root tends to $1$. Therefore,
    $$
    \lim_{n\to\infty}
    \sqrt[n]{\frac{7^n+3^n}{2^n+4^n}}
    =\frac74.
    $$

  - **Solution 1.2 (Part b)**
    For every $n\geqslant1$,
    $$
    n^2\leqslant n^2+n\leqslant2n^2.
    $$
    Taking $n$th roots yields
    $$
    n^{2/n}
    \leqslant
    \sqrt[n]{n^2+n}
    \leqslant
    2^{1/n}n^{2/n}.
    $$
    Since $n^{1/n}\to1$ and $2^{1/n}\to1$, the Squeeze Theorem gives
    $$
    \lim_{n\to\infty}\sqrt[n]{n^2+n}=1.
    $$

  - **Solution 1.3 (Part c)**
    We have
    $$
    \begin{aligned}
    \left(\frac{2n+6}{2n}\right)^{3n+2}
    &=\left(1+\frac3n\right)^{3n+2}\\
    &=\left[\left(1+\frac3n\right)^n\right]^3
      \left(1+\frac3n\right)^2.
    \end{aligned}
    $$
    Using
    $$
    \lim_{n\to\infty}\left(1+\frac3n\right)^n=e^3,
    $$
    we obtain
    $$
    \lim_{n\to\infty}
    \left(\frac{2n+6}{2n}\right)^{3n+2}
    =(e^3)^3=e^9.
    $$

  - **Solution 1.4 (Part d)**
    Rewrite the sequence as
    $$
    \begin{aligned}
    \left(\frac{n^2+1}{n^2+4}\right)^{6n^2}
    &=\frac{\left(1+\frac1{n^2}\right)^{6n^2}}
    {\left(1+\frac4{n^2}\right)^{6n^2}}\\
    &=\frac{
      \left[\left(1+\frac1{n^2}\right)^{n^2}\right]^6
    }{
      \left[\left(1+\frac4{n^2}\right)^{n^2}\right]^6
    }.
    \end{aligned}
    $$
    The numerator tends to $e^6$, while the denominator tends to
    $$
    (e^4)^6=e^{24}.
    $$
    Hence
    $$
    \lim_{n\to\infty}
    \left(\frac{n^2+1}{n^2+4}\right)^{6n^2}
    =\frac{e^6}{e^{24}}=e^{-18}.
    $$

  - **Solution 1.5 (Part e)**
    For every $n\geqslant1$,
    $$
    1\leqslant\frac{2n}{n+1}<2.
    $$
    Taking $n$th roots gives
    $$
    1\leqslant
    \sqrt[n]{\frac{2n}{n+1}}
    <2^{1/n}.
    $$
    Since $2^{1/n}\to1$, the Squeeze Theorem implies that
    $$
    \lim_{n\to\infty}
    \sqrt[n]{\frac{2n}{n+1}}=1.
    $$

  - **Solution 1.6 (Part f)**
    Since $2^n+(-1)^n>0$ for every $n\in\mathbb N$, the common factor can be cancelled. Thus
    $$
    \frac{2^n+(-1)^n}{n\left(2^n+(-1)^n\right)}
    =\frac1n.
    $$
    Therefore,
    $$
    \lim_{n\to\infty}
    \frac{2^n+(-1)^n}{n\left(2^n+(-1)^n\right)}=0.
    $$

---

## Finite geometric sums and Cauchy sequences

- **Problem 2**

  1. Show that
     $$
     \sum_{i=0}^{n}r^i=\frac{1-r^{n+1}}{1-r}
     $$
     for every $r\neq1$.

  2. Let $(x_n)$ be a sequence. Prove that if $0\leqslant r<1$, $C>0$, and
     $$
     \lvert x_{n+1}-x_n\rvert<Cr^n,
     $$
     then $(x_n)$ is a Cauchy sequence.

  - **Proof 2.1 (Part a)**
    Let
    $$
    S_n=\sum_{i=0}^{n}r^i=1+r+r^2+\cdots+r^n.
    $$
    Then
    $$
    rS_n=r+r^2+\cdots+r^n+r^{n+1}.
    $$
    Subtracting the second equality from the first gives
    $$
    (1-r)S_n=1-r^{n+1}.
    $$
    Since $r\neq1$, division by $1-r$ yields
    $$
    \sum_{i=0}^{n}r^i=\frac{1-r^{n+1}}{1-r}.
    $$

  - **Proof 2.2 (Part b)**
    If $r=0$, the strict inequality would require
    $$
    \lvert x_{n+1}-x_n\rvert<0
    $$
    for every $n\geqslant1$, which is impossible. Thus no sequence satisfies the hypotheses in this case, and the implication is vacuously true.

    Now suppose that $0<r<1$. Let $\varepsilon>0$. Since $r^n\to0$, there exists $N\in\mathbb N$ such that
    $$
    \frac{Cr^N}{1-r}<\varepsilon.
    $$
    Let $m>n\geqslant N$. By the triangle inequality,
    $$
    \begin{aligned}
    \lvert x_m-x_n\rvert
    &=\left\lvert
      \sum_{k=n}^{m-1}(x_{k+1}-x_k)
      \right\rvert\\
    &\leqslant
      \sum_{k=n}^{m-1}\lvert x_{k+1}-x_k\rvert\\
    &<C\sum_{k=n}^{m-1}r^k\\
    &=Cr^n\frac{1-r^{m-n}}{1-r}\\
    &\leqslant\frac{Cr^n}{1-r}\\
    &\leqslant\frac{Cr^N}{1-r}\\
    &<\varepsilon.
    \end{aligned}
    $$
    The same estimate holds when $n>m$ after interchanging the indices, and the case $m=n$ is immediate. Therefore, for all $m,n\geqslant N$,
    $$
    \lvert x_m-x_n\rvert<\varepsilon.
    $$
    Hence $(x_n)$ is a Cauchy sequence.
