---
title: "Exponential Function"
published: 2026-11-17
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Recall that
  $$
  e=\lim_{n\to\infty}\left(1+\frac1n\right)^n.
  $$
  For $n\geqslant1$, set
  $$
  a_n=\left(1+\frac1n\right)^n,
  $$
  so that $e=\lim_{n\to\infty}a_n$. We proved that $(a_n)$ is monotone increasing and bounded above by $3$. In particular,
  $$
  a_n\leqslant3
  \qquad
  \text{for every }n\geqslant1.
  $$

  Set
  $$
  b_k=\frac1{k!}.
  $$
  Since
  $$
  \frac{b_{k+1}}{b_k}
  =\frac1{k+1}
  \longrightarrow0,
  $$
  the Ratio Test shows that the series
  $$
  \sum_{k=0}^{\infty}\frac1{k!}
  $$
  is convergent. Let
  $$
  S_n=\sum_{k=0}^{n}\frac1{k!}
  $$
  and define
  $$
  E=\lim_{n\to\infty}S_n
  =\sum_{k=0}^{\infty}\frac1{k!}.
  $$
  We will prove that $e=E$.

  More generally, for every $x\in\mathbb R$, the series
  $$
  \sum_{k=0}^{\infty}\frac{x^k}{k!}
  $$
  is absolutely convergent. When $x=0$, this is immediate. Suppose that $x\ne0$ and set
  $$
  u_k=\frac{|x|^k}{k!}.
  $$
  Then
  $$
  \frac{u_{k+1}}{u_k}
  =\frac{|x|}{k+1}
  \longrightarrow0.
  $$
  Therefore, the Ratio Test implies that
  $$
  \sum_{k=0}^{\infty}\frac{|x|^k}{k!}
  $$
  is convergent.

  We define the exponential function by
  $$
  \exp(x)=\sum_{k=0}^{\infty}\frac{x^k}{k!},
  \qquad x\in\mathbb R.
  $$
  By definition,
  $$
  \exp(1)=E.
  $$

---

- **Theorem 1.1**

  1. $\exp(1)=e$.
  2. For every $x,y\in\mathbb R$,
     $$
     \exp(x+y)=\exp(x)\exp(y).
     $$

  - **Proof 1.1.1 (Part 1)**
    Write
    $$
    a_n=\left(1+\frac1n\right)^n.
    $$
    By the Binomial Theorem,
    $$
    \begin{aligned}
    a_n
    &=\sum_{k=0}^{n}\binom nk\frac1{n^k}\\
    &=\sum_{k=0}^{n}
      \frac1{k!}
      \prod_{j=0}^{k-1}\left(1-\frac jn\right).
    \end{aligned}
    $$
    For $0\leqslant k\leqslant n$, set
    $$
    c_{n,k}
    =\prod_{j=0}^{k-1}\left(1-\frac jn\right),
    $$
    where the empty product for $k=0$ is $1$. Since
    $$
    0\leqslant c_{n,k}\leqslant1,
    $$
    we obtain
    $$
    a_n
    =\sum_{k=0}^{n}\frac{c_{n,k}}{k!}
    \leqslant
    \sum_{k=0}^{n}\frac1{k!}
    =S_n.
    $$
    Taking $n\to\infty$ gives
    $$
    e\leqslant E.
    $$

    Conversely, fix an integer $m\geqslant0$. For every $n\geqslant\max\{m,1\}$,
    $$
    a_n
    \geqslant
    \sum_{k=0}^{m}\frac{c_{n,k}}{k!}.
    $$
    For each fixed $k$,
    $$
    c_{n,k}
    =\prod_{j=0}^{k-1}\left(1-\frac jn\right)
    \longrightarrow1.
    $$
    Since the sum contains only finitely many terms, letting $n\to\infty$ yields
    $$
    e\geqslant\sum_{k=0}^{m}\frac1{k!}=S_m.
    $$
    This holds for every $m\geqslant0$. Letting $m\to\infty$ gives
    $$
    e\geqslant E.
    $$
    Therefore,
    $$
    \exp(1)=E=e.
    $$

  - **Proof 1.1.2 (Part 2)**
    Let $x,y\in\mathbb R$. The series defining $\exp(x)$ and $\exp(y)$ are absolutely convergent, so the Cauchy Product Theorem applies. Hence
    $$
    \exp(x)\exp(y)
    =\sum_{n=0}^{\infty}c_n,
    $$
    where
    $$
    \begin{aligned}
    c_n
    &=\sum_{k=0}^{n}
      \frac{x^k}{k!}
      \frac{y^{n-k}}{(n-k)!}\\
    &=\frac1{n!}
      \sum_{k=0}^{n}
      \binom nk x^k y^{n-k}\\
    &=\frac{(x+y)^n}{n!}.
    \end{aligned}
    $$
    Therefore,
    $$
    \begin{aligned}
    \exp(x)\exp(y)
    &=\sum_{n=0}^{\infty}\frac{(x+y)^n}{n!}\\
    &=\exp(x+y).
    \end{aligned}
    $$

---

- **Remark 1.2**

  1. For every $n\in\mathbb N$,
     $$
     \exp(n)=\exp(1)^n=e^n.
     $$
     Indeed, the statement holds when $n=1$. If it holds for some $n\in\mathbb N$, then Theorem 1.1 gives
     $$
     \exp(n+1)
     =\exp(n)\exp(1)
     =e^n e
     =e^{n+1}.
     $$
     Therefore, the result follows by induction.

  2. By the definition of the exponential function,
     $$
     \exp(0)
     =1+\sum_{k=1}^{\infty}\frac{0^k}{k!}
     =1.
     $$

  3. For every $x\in\mathbb R$,
     $$
     1=\exp(0)=\exp(x-x)=\exp(x)\exp(-x).
     $$
     Thus $\exp(x)\ne0$ and
     $$
     \exp(-x)=\frac1{\exp(x)}.
     $$
     In particular, for every $n\in\mathbb N$,
     $$
     \exp(-n)=e^{-n}.
     $$

  4. Combining parts 1 and 3 gives
     $$
     \exp(m)=e^m
     \qquad
     \text{for every }m\in\mathbb Z.
     $$

  5. For every $x\in\mathbb R$,
     $$
     \exp(x)
     =\exp\left(\frac x2+\frac x2\right)
     =\exp\left(\frac x2\right)^2
     >0.
     $$
     The final inequality follows because $\exp(x/2)\ne0$.

  6. Let $m\in\mathbb N$ with $m\geqslant1$. Repeatedly applying Theorem 1.1 gives
     $$
     \exp(x)
     =\exp\left(m\cdot\frac xm\right)
     =\exp\left(\frac xm\right)^m.
     $$
     Since the exponential function is positive,
     $$
     \exp\left(\frac xm\right)
     =\sqrt[m]{\exp(x)}.
     $$

  7. Let $q=n/m\in\mathbb Q$, where $n\in\mathbb Z$ and $m\in\mathbb N$ with $m\geqslant1$. Then
     $$
     \exp\left(\frac nm\right)
     =\sqrt[m]{\exp(n)}
     =\sqrt[m]{e^n}
     =e^{n/m}.
     $$
     Therefore,
     $$
     \exp(q)=e^q
     \qquad
     \text{for every }q\in\mathbb Q.
     $$

---

- **Definition 2**
  For every $x\in\mathbb R$, define
  $$
  e^x:=\exp(x).
  $$
