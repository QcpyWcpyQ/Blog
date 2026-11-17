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
  If
  $$
  a_n=\left(1+\frac1n\right)^n,
  $$
  then $(a_n)$ is monotone increasing and bounded above by $3$. In particular,
  $$
  a_n\leqslant3
  \qquad
  \text{for every }n\in\mathbb N.
  $$

  Let
  $$
  E=\sum_{k=0}^{\infty}\frac1{k!}.
  $$
  We will prove that
  $$
  e=E.
  $$

  More generally, for every $x\in\mathbb R$, the series
  $$
  \sum_{k=0}^{\infty}\frac{x^k}{k!}
  $$
  is absolutely convergent. When $x=0$, this is immediate. Suppose that $x\ne0$ and set
  $$
  u_k=\frac{|x|^k}{k!},
  $$
  we have
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

  Define the exponential function by
  $$
  \exp(x)=\sum_{k=0}^{\infty}\frac{x^k}{k!}.
  $$
  By definition,
  $$
  \exp(1)=E.
  $$

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
    By the binomial theorem,
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
    \leqslant E.
    $$
    Taking $n\to\infty$ gives
    $$
    e\leqslant E.
    $$

    Conversely, fix $m\in\mathbb N$. For every $n\geqslant m$,
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
    e\geqslant\sum_{k=0}^{m}\frac1{k!}.
    $$
    This holds for every $m$. Letting $m\to\infty$ gives
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
  
- **Remark 1.2**  

  1. $$
      \forall n\in\mathbb N,\exp(n)=e^n.
      $$

  2. $$
      \exp(0)=1.
      $$

  3. $$
      \exp(-x)=\dfrac{1}{\exp(x)}\implies\forall n\in\mathbb N,\exp(-n)=e^{-n}.
      $$

      By 3 we get $\forall x\in\mathbb R,\exp(x)\neq 0$.

  4. Combining 1,3 we get  
      $$
      \forall m\in\mathbb Z,\exp(m)=e^m.
      $$

  5. $$
      \forall x\in\mathbb R,\exp(x)=\exp\left(\dfrac x2+\dfrac x2\right)=\exp\left(\dfrac x2\right)\cdot \exp\left(\dfrac x2\right)=\exp\left(\dfrac x2\right)^2>0.
      $$

  6. By induction we have  
      $$
      \forall m\in\mathbb N,\exp(x)=\exp\left(m\cdot\dfrac xm\right)=\exp\left(\dfrac xm\right)^m\implies \exp\left(\dfrac xm\right)^m=\sqrt[m]{\exp(x)}.
      $$

  7. $$
      \exp\left(\dfrac nm\right)=\sqrt[m]{\exp(n)}=\sqrt[m]{e^n}=e^{\frac nm}\implies \forall q\in\mathbb Q,\exp(q)=e^q.
      $$

---

- **Definition 2**  
    We define $e^x:=\exp(x),\forall x\in\mathbb R$.
