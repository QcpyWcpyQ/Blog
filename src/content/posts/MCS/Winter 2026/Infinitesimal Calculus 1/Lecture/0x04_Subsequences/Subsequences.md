---
title: "Subsequences"
published: 2026-11-03
description: "Subsequences, limits of subsequences, the monotone subsequence theorem, and the Bolzano-Weierstrass theorem."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $(a_n)$ be a sequence, viewed as a function
  $$
  a\colon\mathbb{N}\to\mathbb{R}.
  $$
  A sequence $(b_k)$ is called a subsequence of $(a_n)$ if there exists a strictly increasing function
  $$
  f\colon\mathbb{N}\to\mathbb{N}
  $$
  such that
  $$
  b_k=(a\circ f)(k)=a_{f(k)}.
  $$
  We usually write $n_k=f(k)$. Then
  $$
  n_1<n_2<n_3<\cdots
  $$
  and
  $$
  b_k=a_{n_k}.
  $$


- **Example 1.1**
  Let
  $$
  a_n=(-1)^n.
  $$
  The sequence $(a_n)$ is bounded; for example, it is bounded above by $10$ and bounded below by $-8$. However, it is not convergent.

  Choose
  $$
  n_k=2k.
  $$
  Then
  $$
  b_k=a_{n_k}=a_{2k}=(-1)^{2k}=1
  $$
  for every $k\in\mathbb{N}$. Therefore, $(b_k)$ is a convergent subsequence of $(a_n)$ and
  $$
  \lim_{k\to\infty}b_k=1.
  $$

- **Example 1.2**
  Let
  $$
  a_n=\frac{1}{n}
  $$
  and choose
  $$
  n_k=2^k.
  $$
  Then
  $$
  b_k=a_{n_k}=a_{2^k}=\frac{1}{2^k}=\left(\frac{1}{2}\right)^k.
  $$
  We have
  $$
  \lim_{n\to\infty}a_n=0
  $$
  and
  $$
  \lim_{k\to\infty}b_k
    =\lim_{k\to\infty}\left(\frac{1}{2}\right)^k
    =0.
  $$

---

- **Theorem 2**
  Let $(a_n)$ be a sequence such that
  $$
  \lim_{n\to\infty}a_n=l.
  $$
  If $(b_k)$ is a subsequence of $(a_n)$, then
  $$
  \lim_{k\to\infty}b_k=l.
  $$

  - **Proof 2.1**
    Write
    $$
    b_k=a_{n_k},
    $$
    where $n_1<n_2<n_3<\cdots$. Since $(n_k)$ is a strictly increasing sequence of natural numbers,
    $$
    n_k\geqslant k
    $$
    for every $k\in\mathbb{N}$.

    Let $\varepsilon>0$. Since $a_n\to l$, there exists $n_0\in\mathbb{N}$ such that
    $$
    n>n_0
    \implies
    \left\lvert a_n-l\right\rvert<\varepsilon.
    $$
    Take $k_0=n_0$. If $k>k_0$, then
    $$
    n_k\geqslant k>k_0=n_0.
    $$
    Therefore,
    $$
    \left\lvert b_k-l\right\rvert
      =\left\lvert a_{n_k}-l\right\rvert
      <\varepsilon.
    $$
    Hence
    $$
    \lim_{k\to\infty}b_k=l.
    $$

---

- **Theorem 3 (Monotone Subsequence Theorem)**
  Every sequence $(a_n)$ has a subsequence $(b_k)$ that is either increasing or decreasing.

  - **Proof 3.1**
    Call $n\in\mathbb{N}$ a peak if
    $$
    a_n\geqslant a_m
    $$
    for every $m>n$.

    First, suppose that there are infinitely many peaks. List them in increasing order as
    $$
    n_1<n_2<n_3<\cdots.
    $$
    Since $n_k$ is a peak and $n_{k+1}>n_k$, we have
    $$
    a_{n_k}\geqslant a_{n_{k+1}}.
    $$
    Thus the subsequence
    $$
    b_k=a_{n_k}
    $$
    is decreasing.

    Now suppose that there are only finitely many peaks. Choose $n_1$ after the last peak. Since $n_1$ is not a peak, there exists $n_2>n_1$ such that
    $$
    a_{n_2}>a_{n_1}.
    $$
    Similarly, since $n_2$ is not a peak, there exists $n_3>n_2$ such that
    $$
    a_{n_3}>a_{n_2}.
    $$
    Continuing in this way, we obtain
    $$
    n_1<n_2<n_3<\cdots
    $$
    and
    $$
    a_{n_1}<a_{n_2}<a_{n_3}<\cdots.
    $$
    Therefore, the subsequence
    $$
    b_k=a_{n_k}
    $$
    is increasing.

    Hence every sequence has either an increasing subsequence or a decreasing subsequence.

- **Corollary 3.2 (Bolzano-Weierstrass Theorem)**
  Every bounded sequence has a convergent subsequence.

  - **Proof 3.2.1**
    Let $(a_n)$ be a bounded sequence. By the Monotone Subsequence Theorem, $(a_n)$ has a subsequence $(b_k)$ that is either increasing or decreasing.

    Since $(a_n)$ is bounded, every subsequence of $(a_n)$ is also bounded. Therefore, if $(b_k)$ is increasing, it is bounded above, and if $(b_k)$ is decreasing, it is bounded below. In either case, the Monotone Convergence Theorem implies that $(b_k)$ is convergent.

---

- **Definition 4**
  A sequence $(a_n)$ is called a Cauchy sequence if, for every $\varepsilon>0$, there exists $n_0\in\mathbb{N}$ such that
  $$
  m,n>n_0
  \implies
  \left\lvert a_n-a_m\right\rvert<\varepsilon.
  $$

- **Proposition 4.1**
  Every convergent sequence is a Cauchy sequence.

  - **Proof 4.1.1**
    Suppose
    $$
    \lim_{n\to\infty}a_n=l.
    $$
    Let $\varepsilon>0$. By the definition of convergence, there exists $n_0\in\mathbb{N}$ such that
    $$
    k>n_0
    \implies
    \left\lvert a_k-l\right\rvert<\frac{\varepsilon}{2}.
    $$
    If $m,n>n_0$, then
    $$
    \left\lvert a_n-l\right\rvert<\frac{\varepsilon}{2}
    \qquad\text{and}\qquad
    \left\lvert a_m-l\right\rvert<\frac{\varepsilon}{2}.
    $$
    Therefore, by the triangle inequality,
    $$
    \begin{aligned}
    \left\lvert a_n-a_m\right\rvert
    &=\left\lvert(a_n-l)+(l-a_m)\right\rvert\\
    &\leqslant\left\lvert a_n-l\right\rvert
      +\left\lvert a_m-l\right\rvert\\
    &<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}\\
    &=\varepsilon.
    \end{aligned}
    $$
    Hence $(a_n)$ is a Cauchy sequence.

- **Lemma 4.2**
  Every Cauchy sequence is bounded.

  - **Proof 4.2.1**
    Let $(a_n)$ be a Cauchy sequence. Taking $\varepsilon=1$, there exists $n_0\in\mathbb{N}$ such that
    $$
    p,q>n_0
    \implies
    \left\lvert a_p-a_q\right\rvert<1.
    $$
    Fix $q=n_0+1$. Then, for every $n>n_0$,
    $$
    \left\lvert a_n-a_{n_0+1}\right\rvert<1,
    $$
    and hence
    $$
    a_{n_0+1}-1<a_n<a_{n_0+1}+1.
    $$
    Define
    $$
    \begin{aligned}
    m
    &=\min\left\{
      a_1,\ldots,a_{n_0},a_{n_0+1}-1
    \right\},\\
    M
    &=\max\left\{
      a_1,\ldots,a_{n_0},a_{n_0+1}+1
    \right\}.
    \end{aligned}
    $$
    Then
    $$
    m\leqslant a_n\leqslant M
    $$
    for every $n\in\mathbb{N}$. Hence $(a_n)$ is bounded.

- **Theorem 4.3**
  Every Cauchy sequence is convergent.

  - **Proof 4.3.1**
    Let $(a_n)$ be a Cauchy sequence. By Lemma 4.2, $(a_n)$ is bounded. Therefore, by the Bolzano-Weierstrass Theorem, $(a_n)$ has a convergent subsequence $(a_{n_k})$. Write
    $$
    \lim_{k\to\infty}a_{n_k}=l.
    $$

    Let $\varepsilon>0$. Since $(a_n)$ is Cauchy, there exists $n_0\in\mathbb{N}$ such that
    $$
    m,n>n_0
    \implies
    \left\lvert a_n-a_m\right\rvert<\frac{\varepsilon}{2}.
    $$
    Since $a_{n_k}\to l$, there exists $k_0\in\mathbb{N}$ such that
    $$
    k>k_0
    \implies
    \left\lvert a_{n_k}-l\right\rvert<\frac{\varepsilon}{2}.
    $$

    Choose $k>\max\{k_0,n_0\}$. Since $n_k\geqslant k$, we have $n_k>n_0$. Thus, for every $n>n_0$,
    $$
    \begin{aligned}
    \left\lvert a_n-l\right\rvert
    &\leqslant\left\lvert a_n-a_{n_k}\right\rvert
      +\left\lvert a_{n_k}-l\right\rvert\\
    &<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}\\
    &=\varepsilon.
    \end{aligned}
    $$
    Therefore,
    $$
    \lim_{n\to\infty}a_n=l.
    $$
