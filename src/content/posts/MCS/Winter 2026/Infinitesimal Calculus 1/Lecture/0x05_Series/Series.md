---
title: "Series"
published: 2026-11-05
description: "Infinite series, sequences of partial sums, geometric series, and tails of convergent series."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $k_0\in\mathbb Z$, and let $(a_k)_{k\geqslant k_0}$ be a sequence. The associated sequence of partial sums is defined by
  $$
  S_n=\sum_{k=k_0}^{n}a_k,
  \qquad n\geqslant k_0.
  $$
  The formal expression
  $$
  \sum_{k=k_0}^{\infty}a_k
  $$
  is called the series associated with $(a_k)$.

- **Example 1.1**
  In the following examples, the series starts at $k=1$.

  1. If $a_k=c$, then
     $$
     S_n=\sum_{k=1}^{n}c=nc.
     $$

  2. If
     $$
     a_k=\frac1k,
     $$
     then
     $$
     S_n=\sum_{k=1}^{n}\frac1k.
     $$

  3. If $a_k=r^k$, then
     $$
     S_n=\sum_{k=1}^{n}r^k
     =
     \begin{cases}
     \dfrac{r-r^{n+1}}{1-r},&r\ne1,\\[1ex]
     n,&r=1.
     \end{cases}
     $$
     Indeed, when $r\ne1$,
     $$
     (1-r)S_n=r-r^{n+1}.
     $$

---

- **Definition 2**
  A series is called convergent if its sequence of partial sums $(S_n)$ is convergent. Otherwise, the series is called divergent.

- **Example 2.1**
  Consider the series in Example 1.1.

  1. If $a_k=c$, then $S_n=nc$. Therefore, $(S_n)$ converges only when $c=0$, in which case
     $$
     S_n\to0.
     $$

  2. If $a_k=1/k$, then $(S_n)$ is not convergent. The divergence of this series will be proved later.

  3. If $a_k=r^k$ and $\lvert r\rvert<1$, then $r^{n+1}\to0$, so
     $$
     S_n=\frac{r-r^{n+1}}{1-r}
     \longrightarrow
     \frac{r}{1-r}.
     $$
     If $\lvert r\rvert\geqslant1$, the sequence of partial sums does not converge. Hence the geometric series converges exactly when $\lvert r\rvert<1$.

---

- **Definition 3**
  Suppose that
  $$
  S_n=\sum_{k=k_0}^{n}a_k
  $$
  and
  $$
  \lim_{n\to\infty}S_n=l.
  $$
  We then write
  $$
  \sum_{k=k_0}^{\infty}a_k=l
  $$
  and say that the series converges to $l$.

- **Example 3.1**
  1. The constant series
     $$
     \sum_{k=1}^{\infty}c
     $$
     converges only when $c=0$. In the extended sense,
     $$
     \sum_{k=1}^{\infty}c
     =
     \begin{cases}
     +\infty,&c>0,\\
     0,&c=0,\\
     -\infty,&c<0.
     \end{cases}
     $$

  2. The harmonic series satisfies
     $$
     \sum_{k=1}^{\infty}\frac1k=+\infty.
     $$
     Its divergence will be proved later.

  3. For $\lvert r\rvert<1$,
     $$
     \sum_{k=1}^{\infty}r^k=\frac{r}{1-r}.
     $$

- **Example 3.2**
  Let
  $$
  a_k=\left(\frac12\right)^k,
  \qquad k\geqslant-3.
  $$
  For example,
  $$
  a_{-3}=8,
  \quad
  a_{-2}=4,
  \quad
  a_{-1}=2,
  \quad
  a_0=1,
  \quad
  a_1=\frac12,
  \quad
  a_2=\frac14.
  $$
  The starting index of a series need not be $1$. For every integer $p\geqslant-3$,
  $$
  \sum_{k=p}^{\infty}\left(\frac12\right)^k
  =\frac{(1/2)^p}{1-1/2}
  =2^{1-p}.
  $$
  In particular,
  $$
  \sum_{k=-3}^{\infty}\left(\frac12\right)^k=16,
  \qquad
  \sum_{k=0}^{\infty}\left(\frac12\right)^k=2,
  \qquad
  \sum_{k=12}^{\infty}\left(\frac12\right)^k=\frac1{2048}.
  $$

---

- **Proposition 4 (Tails of a convergent series)**
  Suppose that
  $$
  \sum_{k=k_0}^{\infty}a_k=l.
  $$
  For every integer $p>k_0$, the tail series
  $$
  \sum_{k=p}^{\infty}a_k
  $$
  is convergent, and
  $$
  \sum_{k=k_0}^{\infty}a_k
  =
  \sum_{k=k_0}^{p-1}a_k
  +\sum_{k=p}^{\infty}a_k.
  $$

  - **Proof 4.1**
    Let
    $$
    S_n=\sum_{k=k_0}^{n}a_k
    $$
    and define
    $$
    A=\sum_{k=k_0}^{p-1}a_k,
    \qquad
    \widetilde S_n=\sum_{k=p}^{n}a_k
    $$
    for $n\geqslant p$. Then
    $$
    S_n=A+\widetilde S_n,
    $$
    so
    $$
    \widetilde S_n=S_n-A.
    $$
    Since $S_n\to l$, it follows that
    $$
    \widetilde S_n\to l-A.
    $$
    Therefore,
    $$
    \sum_{k=p}^{\infty}a_k
    =l-\sum_{k=k_0}^{p-1}a_k,
    $$
    which proves the stated identity.

- **Example 4.1**
  If
  $$
  \sum_{k=1}^{\infty}a_k=l,
  $$
  then, taking $p=11$,
  $$
  \sum_{k=11}^{\infty}a_k
  =
  l-\sum_{k=1}^{10}a_k
  =
  l-a_1-a_2-\cdots-a_{10}.
  $$

- **Example 4.2**
  Let
  $$
  a_k=\frac{k-3}{4k}.
  $$
  Since
  $$
  a_k\to\frac14\ne0,
  $$
  Proposition 5 implies that
  $$
  \sum_{k=1}^{\infty}a_k
  $$
  is divergent.

---

- **Proposition 5**
  If
  $$
  \sum_{k=1}^{\infty}a_k
  $$
  is convergent, then
  $$
  a_k\to0.
  $$
  The converse is false.

  - **Proof 5.1**
    Let
    $$
    S_n=\sum_{k=1}^{n}a_k.
    $$
    Since the series is convergent, there exists $l\in\mathbb{R}$ such that
    $$
    S_n\to l.
    $$
    We also have $S_{n+1}\to l$. Since
    $$
    a_{n+1}=S_{n+1}-S_n,
    $$
    it follows that
    $$
    a_{n+1}\to l-l=0.
    $$
    Therefore, $a_n\to0$.

    The converse is false. Indeed,
    $$
    \frac1k\to0,
    $$
    but the harmonic series
    $$
    \sum_{k=1}^{\infty}\frac1k
    $$
    is divergent. Its partial sums are
    $$
    S_n=1+\frac12+\frac13+\cdots+\frac1n.
    $$
    For every $n\in\mathbb{N}$, grouping the terms of $S_{2^n}$ gives
    $$
    \begin{aligned}
    S_{2^n}
    &=1+\sum_{j=0}^{n-1}
      \left(\frac1{2^j+1}+\frac1{2^j+2}+\cdots+\frac1{2^{j+1}}\right)\\
    &\geqslant1+\sum_{j=0}^{n-1}2^j\cdot\frac1{2^{j+1}}\\
    &=1+\frac n2.
    \end{aligned}
    $$
    Hence $S_{2^n}\to+\infty$. Thus the sequence of partial sums is not convergent, so the harmonic series is divergent.

- **Remark 5.2**
  Suppose that $a_k\geqslant0$ for every $k\in\mathbb{N}$. Since
  $$
  S_n=S_{n-1}+a_n\geqslant S_{n-1},
  $$
  the sequence of partial sums $(S_n)$ is monotone increasing. Therefore, either $(S_n)$ is bounded above and hence convergent, or $(S_n)$ is not bounded above and
  $$
  S_n\to+\infty.
  $$

  In the case $a_k=1/k$, the sequence of partial sums is not convergent. Since all its terms are nonnegative, it follows that
  $$
  S_n\to+\infty.
  $$
  Thus,
  $$
  \sum_{k=1}^{\infty}\frac1k=+\infty.
  $$

---

- **Definition 6**
  Let $(a_k)$ be a sequence. We say that
  $$
  \sum_{k=1}^{\infty}a_k
  $$
  converges absolutely if
  $$
  \sum_{k=1}^{\infty}\lvert a_k\rvert
  $$
  is convergent.

  If $a_k\geqslant0$ for every $k\in\mathbb{N}$, then
  $$
  \lvert a_k\rvert=a_k.
  $$
  Hence
  $$
  \sum_{k=1}^{\infty}a_k
  $$
  converges absolutely if and only if it converges.

- **Theorem 6.1**
  If
  $$
  \sum_{k=1}^{\infty}a_k
  $$
  converges absolutely, then it converges. The converse is false.

  - **Proof 6.1.1**
    Suppose that
    $$
    \sum_{k=1}^{\infty}\lvert a_k\rvert=l.
    $$
    Define
    $$
    S_n=\sum_{k=1}^{n}a_k
    \qquad\text{and}\qquad
    t_n=\sum_{k=1}^{n}\lvert a_k\rvert.
    $$
    Since $t_n\to l$, the sequence $(t_n)$ is a Cauchy sequence. Let $\varepsilon>0$. There exists $n_0\in\mathbb{N}$ such that
    $$
    m,n>n_0
    \implies
    \lvert t_n-t_m\rvert<\varepsilon.
    $$
    Let $m,n>n_0$. Without loss of generality, assume that $n\geqslant m$. Then
    $$
    \begin{aligned}
    \lvert S_n-S_m\rvert
    &=\left\lvert\sum_{k=m+1}^{n}a_k\right\rvert\\
    &\leqslant\sum_{k=m+1}^{n}\lvert a_k\rvert\\
    &=t_n-t_m\\
    &=\lvert t_n-t_m\rvert\\
    &<\varepsilon.
    \end{aligned}
    $$
    Therefore, $(S_n)$ is a Cauchy sequence and is thus convergent. Hence
    $$
    \sum_{k=1}^{\infty}a_k
    $$
    is convergent.

  - **Counterexample 6.1.2**
    Let
    $$
    a_k=\frac{(-1)^k}{k}.
    $$
    We first prove that
    $$
    \sum_{k=1}^{\infty}\frac{(-1)^k}{k}
    $$
    is convergent. Let
    $$
    S_n=\sum_{k=1}^{n}\frac{(-1)^k}{k}.
    $$
    The sequence of even partial sums $(S_{2n})$ is decreasing because
    $$
    S_{2n+2}-S_{2n}
    =-\frac1{2n+1}+\frac1{2n+2}<0.
    $$
    Moreover, for $n\geqslant2$,
    $$
    S_{2n}
    =-1+\left(\frac12-\frac13\right)
      +\cdots
      +\left(\frac1{2n-2}-\frac1{2n-1}\right)
      +\frac1{2n}
    >-1.
    $$
    We also have $S_2=-1/2>-1$.
    Thus $(S_{2n})$ is decreasing and bounded below, so it converges to some $l\in\mathbb{R}$. Since
    $$
    S_{2n-1}=S_{2n}-\frac1{2n},
    $$
    we also have
    $$
    S_{2n-1}\to l.
    $$
    Therefore, $S_n\to l$, and the series is convergent.

    However,
    $$
    \sum_{k=1}^{\infty}\lvert a_k\rvert
    =
    \sum_{k=1}^{\infty}\frac1k,
    $$
    which is the divergent harmonic series. Hence
    $$
    \sum_{k=1}^{\infty}\frac{(-1)^k}{k}
    $$
    is convergent but not absolutely convergent, so the converse is false.

---

- **Theorem 7 (Algebra of convergent series)**
  Let $(a_k)$ and $(b_k)$ be sequences such that
  $$
  \sum_{k=1}^{\infty}a_k=A
  \qquad\text{and}\qquad
  \sum_{k=1}^{\infty}b_k=B.
  $$
  Then, for every $\alpha,\beta\in\mathbb{R}$,
  $$
  \sum_{k=1}^{\infty}\left(\alpha a_k+\beta b_k\right)
  =
  \alpha A+\beta B.
  $$

  - **Proof 7.1**
    Define
    $$
    S_n=\sum_{k=1}^{n}a_k
    \qquad\text{and}\qquad
    T_n=\sum_{k=1}^{n}b_k.
    $$
    By assumption,
    $$
    S_n\to A
    \qquad\text{and}\qquad
    T_n\to B.
    $$
    The partial sums of the series
    $$
    \sum_{k=1}^{\infty}\left(\alpha a_k+\beta b_k\right)
    $$
    are
    $$
    \begin{aligned}
    U_n
    &=\sum_{k=1}^{n}\left(\alpha a_k+\beta b_k\right)\\
    &=\alpha\sum_{k=1}^{n}a_k+\beta\sum_{k=1}^{n}b_k\\
    &=\alpha S_n+\beta T_n.
    \end{aligned}
    $$
    By the algebra of limits,
    $$
    U_n\to\alpha A+\beta B.
    $$
    Therefore,
    $$
    \sum_{k=1}^{\infty}\left(\alpha a_k+\beta b_k\right)
    =
    \alpha A+\beta B.
    $$

- **Example 7.2**
  Compute
  $$
  \sum_{n=0}^{\infty}\frac{6-5\cdot2^n}{6^n}.
  $$
  By Theorem 7,
  $$
  \begin{aligned}
  \sum_{n=0}^{\infty}\frac{6-5\cdot2^n}{6^n}
  &=6\sum_{n=0}^{\infty}\left(\frac16\right)^n
    -5\sum_{n=0}^{\infty}\left(\frac13\right)^n\\
  &=6\cdot\frac1{1-\frac16}
    -5\cdot\frac1{1-\frac13}\\
  &=\frac{36}{5}-\frac{15}{2}\\
  &=-\frac3{10}.
  \end{aligned}
  $$

---

- **Theorem 8 (Comparison theorem)**
  Let $(a_k)$ and $(b_k)$ be sequences such that
  $$
  0\leqslant a_k\leqslant b_k
  $$
  for every $k\in\mathbb{N}$.

  1. If
     $$
     \sum_{k=1}^{\infty}b_k=B,
     $$
     then $\sum_{k=1}^{\infty}a_k$ is convergent and
     $$
     \sum_{k=1}^{\infty}a_k\leqslant B.
     $$

  2. If
     $$
     \sum_{k=1}^{\infty}a_k=+\infty,
     $$
     then
     $$
     \sum_{k=1}^{\infty}b_k=+\infty.
     $$

  - **Proof 8.1**
    Define
    $$
    A_n=\sum_{k=1}^{n}a_k
    \qquad\text{and}\qquad
    B_n=\sum_{k=1}^{n}b_k.
    $$
    Since $0\leqslant a_k\leqslant b_k$ for every $k$,
    $$
    0\leqslant A_n\leqslant B_n.
    $$

    Suppose first that $B_n\to B$. Since all the terms $b_k$ are nonnegative, $(B_n)$ is monotone increasing, and hence
    $$
    B_n\leqslant B
    $$
    for every $n\in\mathbb{N}$. Therefore,
    $$
    0\leqslant A_n\leqslant B.
    $$
    The sequence $(A_n)$ is also monotone increasing, so it is convergent by the Monotone Convergence Theorem. If $A_n\to A$, then
    $$
    A\leqslant B.
    $$
    Thus,
    $$
    \sum_{k=1}^{\infty}a_k=A\leqslant B.
    $$

    Now suppose that $A_n\to+\infty$. Since $B_n\geqslant A_n$ for every $n$, it follows that
    $$
    B_n\to+\infty.
    $$
    Hence
    $$
    \sum_{k=1}^{\infty}b_k=+\infty.
    $$

- **Example 8.2 (Telescoping series)**
  Suppose that
  $$
  a_k=b_k-b_{k+1}.
  $$
  Then the partial sums of $\sum_{k=1}^{\infty}a_k$ satisfy
  $$
  \begin{aligned}
  S_n
  &=\sum_{k=1}^{n}a_k\\
  &=(b_1-b_2)+(b_2-b_3)+\cdots+(b_n-b_{n+1})\\
  &=b_1-b_{n+1}.
  \end{aligned}
  $$
  Therefore, if $(b_k)$ is convergent, then
  $$
  \sum_{k=1}^{\infty}a_k
  =
  b_1-\lim_{n\to\infty}b_{n+1}.
  $$

  Consider
  $$
  \sum_{k=1}^{\infty}\frac1{k(k+1)}.
  $$
  Since
  $$
  \frac1{k(k+1)}
  =
  \frac1k-\frac1{k+1},
  $$
  we take $b_k=1/k$. Hence
  $$
  \begin{aligned}
  \sum_{k=1}^{\infty}\frac1{k(k+1)}
  &=b_1-\lim_{k\to\infty}b_{k+1}\\
  &=1-0\\
  &=1.
  \end{aligned}
  $$

- **Example 8.3**
  Determine whether
  $$
  \sum_{k=1}^{\infty}\frac1{k^2}
  $$
  is convergent.

  For every $k\in\mathbb{N}$, we have $k+1\leqslant2k$, so
  $$
  0\leqslant\frac1{2k^2}
  =\frac1{k\cdot2k}
  \leqslant\frac1{k(k+1)}.
  $$
  Since
  $$
  \sum_{k=1}^{\infty}\frac1{k(k+1)}=1,
  $$
  the Comparison Theorem implies that
  $$
  \sum_{k=1}^{\infty}\frac1{2k^2}
  $$
  converges to some $l\leqslant1$. By the algebra of convergent series,
  $$
  \sum_{k=1}^{\infty}\frac1{k^2}
  =
  2\sum_{k=1}^{\infty}\frac1{2k^2}
  =
  2l
  \leqslant2.
  $$
  Therefore, the series is convergent. In fact,
  $$
  \sum_{k=1}^{\infty}\frac1{k^2}
  =
  \frac{\pi^2}{6}.
  $$

- **Example 8.4**
  Determine whether
  $$
  \sum_{k=1}^{\infty}\frac1{\sqrt{k}}
  $$
  is convergent.

  For every $k\in\mathbb{N}$,
  $$
  0\leqslant\frac1k\leqslant\frac1{\sqrt{k}}.
  $$
  Since the harmonic series satisfies
  $$
  \sum_{k=1}^{\infty}\frac1k=+\infty,
  $$
  the Comparison Theorem implies that
  $$
  \sum_{k=1}^{\infty}\frac1{\sqrt{k}}=+\infty.
  $$
  Therefore, the series is divergent.
