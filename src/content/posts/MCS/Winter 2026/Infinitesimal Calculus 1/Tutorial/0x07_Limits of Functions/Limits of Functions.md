---
title: "Limits of Functions"
published: 2026-11-18
description: "Boundary points, epsilon-delta proofs, and the algebra of limits"
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let
  $$
  A=\left\{\frac1n:n\in\mathbb N,\ n\geqslant1\right\}\cup\{0\}.
  $$
  Determine the interior, boundary, and exterior of $A$.

  - **Solution 1.1**
    We first prove that every point $1/n$ is a boundary point of $A$. Fix $n\geqslant1$ and let $\varepsilon>0$. The interval
    $$
    \left(\frac1n-\varepsilon,\frac1n+\varepsilon\right)
    $$
    intersects $A$ because it contains $1/n$.

    Set
    $$
    d_n=\frac1n-\frac1{n+1}>0.
    $$
    If $\varepsilon<d_n$, let
    $$
    y=\frac1n-\frac\varepsilon2.
    $$
    Then
    $$
    \frac1{n+1}<y<\frac1n,
    $$
    so $y\notin A$, while
    $$
    \left|y-\frac1n\right|=\frac\varepsilon2<\varepsilon.
    $$
    If $\varepsilon\geqslant d_n$, let
    $$
    y=\frac12\left(\frac1n+\frac1{n+1}\right).
    $$
    Again,
    $$
    \frac1{n+1}<y<\frac1n,
    $$
    and hence $y\notin A$. Moreover,
    $$
    \left|y-\frac1n\right|
    =\frac{d_n}{2}
    \leqslant\frac\varepsilon2
    <\varepsilon.
    $$
    Thus every neighbourhood of $1/n$ intersects both $A$ and $A^{\mathsf c}$, so $1/n\in\partial A$.

    We next prove that $0$ is a boundary point. Let $\varepsilon>0$. Since
    $$
    \lim_{n\to\infty}\frac1n=0,
    $$
    there exists $N\in\mathbb N$ such that
    $$
    \frac1{N+1}<\varepsilon.
    $$
    Therefore,
    $$
    \frac1{N+1}\in(-\varepsilon,\varepsilon)\cap A.
    $$
    On the other hand,
    $$
    -\frac\varepsilon2\in(-\varepsilon,\varepsilon)\cap A^{\mathsf c}.
    $$
    Hence $0\in\partial A$.

    It remains to classify the points outside $A$. Let $x\in A^{\mathsf c}$.

    1. If $x<0$, choose $\varepsilon=-x/2$. Then
       $$
       (x-\varepsilon,x+\varepsilon)\subseteq(-\infty,0)\subseteq A^{\mathsf c}.
       $$

    2. If $x>1$, choose $\varepsilon=(x-1)/2$. Then
       $$
       (x-\varepsilon,x+\varepsilon)\subseteq(1,\infty)\subseteq A^{\mathsf c}.
       $$

    3. Suppose that $0<x<1$ and $x\ne1/n$ for every $n\geqslant1$. There exists $n\geqslant1$ such that
       $$
       \frac1{n+1}<x<\frac1n.
       $$
       Choose
       $$
       \varepsilon
       =\frac12\min\left\{x-\frac1{n+1},\frac1n-x\right\}.
       $$
       Then
       $$
       (x-\varepsilon,x+\varepsilon)
       \subseteq
       \left(\frac1{n+1},\frac1n\right)
       \subseteq A^{\mathsf c}.
       $$

    Hence every point of $A^{\mathsf c}$ is an exterior point of $A$. Since every point of $A$ is a boundary point, $A$ has no interior points. Therefore,
    $$
    A^\circ=\varnothing,
    \qquad
    \partial A=A,
    \qquad
    \operatorname{ext}(A)=A^{\mathsf c}.
    $$

---

- **Exercise 2**
  Prove the following statements using the $\varepsilon$-$\delta$ definition.

  1. $\displaystyle\lim_{x\to1}\frac1x=1$.
  2. $\displaystyle\lim_{x\to a}x^2=a^2$ for every $a\in\mathbb R$.

  - **Solution 2.1**
    Let $\varepsilon>0$ and choose
    $$
    \delta=\min\left\{\frac12,\frac\varepsilon2\right\}.
    $$
    If $0<|x-1|<\delta$, then
    $$
    |x|>\frac12.
    $$
    Consequently,
    $$
    \left|\frac1x-1\right|
    =\frac{|x-1|}{|x|}
    <2|x-1|
    <2\delta
    \leqslant\varepsilon.
    $$
    Therefore,
    $$
    \lim_{x\to1}\frac1x=1.
    $$

  - **Solution 2.2**
    Fix $a\in\mathbb R$. Let $\varepsilon>0$ and choose
    $$
    \delta
    =\min\left\{1,\frac\varepsilon{2|a|+1}\right\}.
    $$
    If $0<|x-a|<\delta$, then $|x-a|<1$ and
    $$
    |x+a|
    =|(x-a)+2a|
    \leqslant|x-a|+2|a|
    <2|a|+1.
    $$
    Hence
    $$
    \begin{aligned}
    |x^2-a^2|
    &=|x-a||x+a|\\
    &<(2|a|+1)|x-a|\\
    &<(2|a|+1)\delta\\
    &\leqslant\varepsilon.
    \end{aligned}
    $$
    Therefore,
    $$
    \lim_{x\to a}x^2=a^2.
    $$

---

- **Theorem 3 (Algebra of Limits)**
  Suppose that
  $$
  \lim_{x\to a}f(x)=L
  \qquad\text{and}\qquad
  \lim_{x\to a}g(x)=M.
  $$
  Then

  1. $\displaystyle\lim_{x\to a}\bigl(f(x)+g(x)\bigr)=L+M$.
  2. $\displaystyle\lim_{x\to a}f(x)g(x)=LM$.
  3. If $M\ne0$, then
     $$
     \lim_{x\to a}\frac{f(x)}{g(x)}=\frac LM.
     $$

  - **Proof 3.1 (Sum)**
    Let $\varepsilon>0$. There exist $\delta_1,\delta_2>0$ such that
    $$
    0<|x-a|<\delta_1
    \implies
    |f(x)-L|<\frac\varepsilon2
    $$
    and
    $$
    0<|x-a|<\delta_2
    \implies
    |g(x)-M|<\frac\varepsilon2.
    $$
    Set $\delta=\min\{\delta_1,\delta_2\}$. If $0<|x-a|<\delta$, then
    $$
    \begin{aligned}
    |f(x)+g(x)-(L+M)|
    &\leqslant|f(x)-L|+|g(x)-M|\\
    &<\frac\varepsilon2+\frac\varepsilon2\\
    &=\varepsilon.
    \end{aligned}
    $$

  - **Proof 3.2 (Product)**
    Since $g(x)\to M$, there exists $\delta_0>0$ such that
    $$
    0<|x-a|<\delta_0
    \implies
    |g(x)-M|<1.
    $$
    Therefore,
    $$
    |g(x)|<|M|+1.
    $$
    Let $\varepsilon>0$. Choose $\delta_1,\delta_2>0$ such that
    $$
    0<|x-a|<\delta_1
    \implies
    |f(x)-L|<\frac\varepsilon{2(|M|+1)}
    $$
    and
    $$
    0<|x-a|<\delta_2
    \implies
    |g(x)-M|<\frac\varepsilon{2(|L|+1)}.
    $$
    Set $\delta=\min\{\delta_0,\delta_1,\delta_2\}$. If $0<|x-a|<\delta$, then
    $$
    \begin{aligned}
    |f(x)g(x)-LM|
    &=|g(x)(f(x)-L)+L(g(x)-M)|\\
    &\leqslant|g(x)||f(x)-L|+|L||g(x)-M|\\
    &<(|M|+1)\frac\varepsilon{2(|M|+1)}
      +|L|\frac\varepsilon{2(|L|+1)}\\
    &<\varepsilon.
    \end{aligned}
    $$

  - **Proof 3.3 (Quotient)**
    Assume that $M\ne0$. We first prove that
    $$
    \lim_{x\to a}\frac1{g(x)}=\frac1M.
    $$
    Let $\varepsilon>0$. Since $g(x)\to M$, there exist $\delta_1,\delta_2>0$ such that
    $$
    0<|x-a|<\delta_1
    \implies
    |g(x)-M|<\frac{|M|}{2}
    $$
    and
    $$
    0<|x-a|<\delta_2
    \implies
    |g(x)-M|<\frac{\varepsilon|M|^2}{2}.
    $$
    Set $\delta=\min\{\delta_1,\delta_2\}$. If $0<|x-a|<\delta$, then
    $$
    |g(x)|
    \geqslant|M|-|g(x)-M|
    >\frac{|M|}{2}>0.
    $$
    Thus
    $$
    \begin{aligned}
    \left|\frac1{g(x)}-\frac1M\right|
    &=\frac{|g(x)-M|}{|g(x)||M|}\\
    &<\frac{2}{|M|^2}|g(x)-M|\\
    &<\varepsilon.
    \end{aligned}
    $$
    Hence $1/g(x)\to1/M$. By the product rule,
    $$
    \lim_{x\to a}\frac{f(x)}{g(x)}
    =\lim_{x\to a}\left(f(x)\frac1{g(x)}\right)
    =\frac LM.
    $$

---

- **Exercise 3**
  Let $P$ be a polynomial. Prove that
  $$
  \lim_{x\to a}P(x)=P(a).
  $$

  - **Solution 3.1**
    Write
    $$
    P(x)=\sum_{n=0}^{N}a_nx^n,
    \qquad a_n\in\mathbb R.
    $$
    By the Algebra of Limits and the fact that $\lim_{x\to a}x=a$,
    $$
    \begin{aligned}
    \lim_{x\to a}P(x)
    &=\lim_{x\to a}\sum_{n=0}^{N}a_nx^n\\
    &=\sum_{n=0}^{N}a_n\lim_{x\to a}x^n\\
    &=\sum_{n=0}^{N}a_na^n\\
    &=P(a).
    \end{aligned}
    $$

---

- **Exercise 4**
  Compute the following limits.

  1. $\displaystyle\lim_{x\to2}\frac{x^3-8}{x-2}$.
  2. $\displaystyle\lim_{x\to1}\frac{x^3-13x+12}{x^2-1}$.

  - **Solution 4.1**
    Directly applying the quotient rule would produce the indeterminate expression $0/0$. Instead, for $x\ne2$,
    $$
    \frac{x^3-8}{x-2}
    =\frac{(x-2)(x^2+2x+4)}{x-2}
    =x^2+2x+4.
    $$
    Therefore,
    $$
    \lim_{x\to2}\frac{x^3-8}{x-2}
    =\lim_{x\to2}(x^2+2x+4)
    =12.
    $$

  - **Solution 4.2**
    We factor the numerator and denominator as
    $$
    x^3-13x+12=(x-1)(x-3)(x+4)
    $$
    and
    $$
    x^2-1=(x-1)(x+1).
    $$
    Hence, for $x\ne1$,
    $$
    \frac{x^3-13x+12}{x^2-1}
    =\frac{(x-3)(x+4)}{x+1}.
    $$
    Therefore,
    $$
    \begin{aligned}
    \lim_{x\to1}\frac{x^3-13x+12}{x^2-1}
    &=\frac{(1-3)(1+4)}{1+1}\\
    &=-5.
    \end{aligned}
    $$
