---
title: "Series"
published: 2026-11-10
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Show that the following series are convergent and compute their sums.

  1. $$
     \sum_{n=1}^{\infty}\frac{10^n+5^{2n}}{6^{2n}}.
     $$

  2. $$
     \sum_{n=2}^{\infty}
     \left(
     \frac{(-5)^n}{8^{n+2}}
     +\sqrt[n+1]{n+1}
     -\sqrt[n]{n}
     \right).
     $$

  - **Solution 1.1**

    **1.** We have
    $$
    \frac{10^n+5^{2n}}{6^{2n}}
    =
    \left(\frac{5}{18}\right)^n
    +
    \left(\frac{25}{36}\right)^n.
    $$
    Both terms form geometric series with ratios of absolute value less than $1$. Therefore,
    $$
    \begin{aligned}
    \sum_{n=1}^{\infty}\frac{10^n+5^{2n}}{6^{2n}}
    &=
    \sum_{n=1}^{\infty}\left(\frac{5}{18}\right)^n
    +
    \sum_{n=1}^{\infty}\left(\frac{25}{36}\right)^n\\
    &=
    \frac{\frac{5}{18}}{1-\frac{5}{18}}
    +
    \frac{\frac{25}{36}}{1-\frac{25}{36}}\\
    &=
    \frac{5}{13}+\frac{25}{11}\\
    &=
    \frac{380}{143}.
    \end{aligned}
    $$

    **2.** First,
    $$
    \begin{aligned}
    \sum_{n=2}^{\infty}\frac{(-5)^n}{8^{n+2}}
    &=
    \frac1{64}\sum_{n=2}^{\infty}\left(-\frac58\right)^n\\
    &=
    \frac1{64}
    \frac{\left(-\frac58\right)^2}{1+\frac58}\\
    &=
    \frac{25}{6656}.
    \end{aligned}
    $$
    For the remaining terms, the partial sums telescope:
    $$
    \begin{aligned}
    \sum_{n=2}^{N}
    \left(\sqrt[n+1]{n+1}-\sqrt[n]{n}\right)
    &=
    \sqrt[N+1]{N+1}-\sqrt2.
    \end{aligned}
    $$
    Since
    $$
    \lim_{N\to\infty}\sqrt[N+1]{N+1}=1,
    $$
    it follows that
    $$
    \sum_{n=2}^{\infty}
    \left(\sqrt[n+1]{n+1}-\sqrt[n]{n}\right)
    =
    1-\sqrt2.
    $$
    Hence,
    $$
    \sum_{n=2}^{\infty}
    \left(
    \frac{(-5)^n}{8^{n+2}}
    +\sqrt[n+1]{n+1}
    -\sqrt[n]{n}
    \right)
    =
    1-\sqrt2+\frac{25}{6656}.
    $$

---

- **Exercise 2**
  Determine whether the series
  $$
  \sum_{n=1}^{\infty}\frac{(-1)^n}{n^3}
  $$
  is convergent.

  - **Solution 2.1**
    For every $n\in\mathbb{N}$,
    $$
    0\leqslant
    \left\lvert\frac{(-1)^n}{n^3}\right\rvert
    =
    \frac1{n^3}
    \leqslant
    \frac1{n^2}.
    $$
    Since
    $$
    \sum_{n=1}^{\infty}\frac1{n^2}
    $$
    is convergent, the Comparison Theorem implies that
    $$
    \sum_{n=1}^{\infty}\frac1{n^3}
    $$
    is convergent. Thus the given series is absolutely convergent and hence convergent.

---

- **Exercise 3**
  Let $b\in\mathbb{R}$. Determine whether the series
  $$
  \sum_{n=1}^{\infty}\frac{\sin(bn)}{n^2}
  $$
  is convergent.

  - **Solution 3.1**
    For every $n\in\mathbb{N}$,
    $$
    0\leqslant
    \left\lvert\frac{\sin(bn)}{n^2}\right\rvert
    \leqslant
    \frac1{n^2}.
    $$
    Since $\sum_{n=1}^{\infty}1/n^2$ is convergent, the given series is absolutely convergent for every $b\in\mathbb{R}$ and is therefore convergent.

---

- **Exercise 4**
  Determine whether the series
  $$
  \sum_{n=1}^{\infty}\frac{\sqrt{2n^2+4n+1}}{n^3+9}
  $$
  is convergent.

  - **Solution 4.1**
    For every $n\geqslant1$,
    $$
    2n^2+4n+1\leqslant9n^2,
    $$
    so
    $$
    \sqrt{2n^2+4n+1}\leqslant3n.
    $$
    Since $n^3+9\geqslant n^3$, we obtain
    $$
    0\leqslant
    \frac{\sqrt{2n^2+4n+1}}{n^3+9}
    \leqslant
    \frac{3n}{n^3}
    =
    \frac3{n^2}.
    $$
    The series $\sum_{n=1}^{\infty}3/n^2$ is convergent. Therefore, the given series is convergent by the Comparison Theorem.

---

- **Exercise 5**
  Determine whether the series
  $$
  \sum_{n=1}^{\infty}
  \left(\frac{5-3n^3}{7n^3+2}\right)^n
  $$
  is convergent.

  - **Solution 5.1**
    For $n=1$,
    $$
    \left\lvert\frac{5-3n^3}{7n^3+2}\right\rvert
    =
    \frac29
    <
    \frac12.
    $$
    For every $n\geqslant2$,
    $$
    \left\lvert\frac{5-3n^3}{7n^3+2}\right\rvert
    =
    \frac{3n^3-5}{7n^3+2}
    <
    \frac{3n^3}{7n^3}
    =
    \frac37
    <
    \frac12.
    $$
    Hence, for every $n\in\mathbb{N}$,
    $$
    0\leqslant
    \left\lvert
    \left(\frac{5-3n^3}{7n^3+2}\right)^n
    \right\rvert
    \leqslant
    \left(\frac12\right)^n.
    $$
    Since $\sum_{n=1}^{\infty}(1/2)^n$ is convergent, the given series is absolutely convergent and hence convergent.

---

- **Exercise 6**
  Determine whether the series
  $$
  \sum_{n=1}^{\infty}\frac{n!}{(-100)^n}
  $$
  is convergent.

  - **Solution 6.1**
    Let
    $$
    a_n=\frac{n!}{(-100)^n}.
    $$
    For every $n\geqslant100$,
    $$
    \frac{\lvert a_{n+1}\rvert}{\lvert a_n\rvert}
    =
    \frac{n+1}{100}
    >
    1.
    $$
    Therefore, $\lvert a_n\rvert\geqslant\lvert a_{100}\rvert>0$ for every $n\geqslant100$, so $a_n$ does not converge to $0$. Since convergence of a series requires its terms to converge to $0$, the given series is divergent.

---

- **Exercise 7**  
    Prove that the alternating harmonic series converges.  
    $$
    \sum_{n=1}^\infty\dfrac{(-1)^n}{n}.
    $$

---

- **Exercise 8**  
    Decide the convergence of the following series for each $t\in \mathbb R$.  
    $$
    \sum_{n=1}^\infty \dfrac{nt^n}{2^n}.
    $$
    
