---
title: "Week 4"
published: 2026-11-06
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let $P_3(\mathbb R)$ denote the vector space of all real polynomials of degree at most $3$, and let
  $$
  W
  =\left\{
    p\in P_3(\mathbb R):p(0)=0
    \text{ and }p(1)=p(-1)
  \right\}.
  $$

  1. Determine whether $W$ is a subspace of $P_3(\mathbb R)$. Justify your answer.
  2. Find a finite set of polynomials that spans $W$.
  3. Determine whether $x^3+x^2-x$ and $x^3+x^2+x$ belong to $W$.

  - **Solution 1.1**
    **1.** The zero polynomial belongs to $W$ because
    $$
    0(0)=0
    \qquad\text{and}\qquad
    0(1)=0(-1).
    $$

    Let $p,q\in W$ and $\lambda\in\mathbb R$. Then
    $$
    (p+q)(0)=p(0)+q(0)=0
    $$
    and
    $$
    \begin{aligned}
    (p+q)(1)
    &=p(1)+q(1)\\
    &=p(-1)+q(-1)\\
    &=(p+q)(-1).
    \end{aligned}
    $$
    Thus $p+q\in W$. Moreover,
    $$
    (\lambda p)(0)=\lambda p(0)=0
    $$
    and
    $$
    (\lambda p)(1)
    =\lambda p(1)
    =\lambda p(-1)
    =(\lambda p)(-1).
    $$
    Hence $\lambda p\in W$. Therefore, $W$ is a subspace of $P_3(\mathbb R)$.

    **2.** Let
    $$
    p(x)=a+bx+cx^2+dx^3\in P_3(\mathbb R).
    $$
    The condition $p(0)=0$ gives
    $$
    a=0.
    $$
    The condition $p(1)=p(-1)$ gives
    $$
    b+c+d=-b+c-d,
    $$
    and therefore
    $$
    b=-d.
    $$
    Hence every $p\in W$ has the form
    $$
    \begin{aligned}
    p(x)
    &=-dx+cx^2+dx^3\\
    &=cx^2+d(x^3-x).
    \end{aligned}
    $$
    Consequently,
    $$
    W=\operatorname{span}\left\{x^2,x^3-x\right\}.
    $$

    **3.** We have
    $$
    x^3+x^2-x=x^2+(x^3-x),
    $$
    so
    $$
    x^3+x^2-x\in W.
    $$

    For
    $$
    q(x)=x^3+x^2+x,
    $$
    we have
    $$
    q(0)=0,
    \qquad
    q(1)=3,
    \qquad
    q(-1)=-1.
    $$
    Since $q(1)\ne q(-1)$,
    $$
    x^3+x^2+x\notin W.
    $$

---

- **Exercise 2**
  In $\mathbb R^4$, consider
  $$
  U
  =\operatorname{span}\left\{
    (1,1,0,1),(0,1,1,-1)
  \right\}
  $$
  and
  $$
  W
  =\left\{
    (x_1,x_2,x_3,x_4)\in\mathbb R^4:
    \begin{aligned}
    x_1-x_2+x_3&=0,\\
    x_4-2x_1+x_2&=0
    \end{aligned}
  \right\}.
  $$

  1. Prove that $U=W$.
  2. Determine whether $u=(2,3,1,1)$ and $v=(1,3,2,0)$ belong to $U$. Justify your answers.

  - **Solution 2.1**
    **1.** We prove both inclusions.

    Let $x\in U$. Then there exist $a,b\in\mathbb R$ such that
    $$
    \begin{aligned}
    x
    &=a(1,1,0,1)+b(0,1,1,-1)\\
    &=(a,a+b,b,a-b).
    \end{aligned}
    $$
    Therefore,
    $$
    a-(a+b)+b=0
    $$
    and
    $$
    (a-b)-2a+(a+b)=0.
    $$
    Thus $x\in W$, and hence
    $$
    U\subseteq W.
    $$

    Conversely, let
    $$
    x=(x_1,x_2,x_3,x_4)\in W.
    $$
    The defining equations of $W$ give
    $$
    x_2=x_1+x_3
    $$
    and
    $$
    x_4=2x_1-x_2=x_1-x_3.
    $$
    Hence
    $$
    \begin{aligned}
    x
    &=(x_1,x_1+x_3,x_3,x_1-x_3)\\
    &=x_1(1,1,0,1)+x_3(0,1,1,-1).
    \end{aligned}
    $$
    Thus $x\in U$, and therefore
    $$
    W\subseteq U.
    $$
    Consequently,
    $$
    U=W.
    $$

    **2.** For $u=(2,3,1,1)$,
    $$
    2-3+1=0
    $$
    and
    $$
    1-2\cdot2+3=0.
    $$
    Hence $u\in W=U$. Indeed,
    $$
    u=2(1,1,0,1)+(0,1,1,-1).
    $$

    For $v=(1,3,2,0)$, the first equation is satisfied because
    $$
    1-3+2=0.
    $$
    However,
    $$
    0-2\cdot1+3=1\ne0.
    $$
    Thus $v\notin W=U$.

---

- **Exercise 3**
  Let
  $$
  V=M_{2\times2}(\mathbb R)
  \qquad\text{and}\qquad
  e=
  \begin{pmatrix}
  1\\-1
  \end{pmatrix}.
  $$
  Define
  $$
  S=\{A\in V:Ae=0\}
  \qquad\text{and}\qquad
  T=\{A\in V:Ae=e\}.
  $$

  1. Determine which of $S$ and $T$ are subspaces of $V$. Justify your answers.
  2. Find two matrices that span $S$.

  - **Solution 3.1**
    **1.** The zero matrix belongs to $S$ because
    $$
    0e=0.
    $$
    Let $A,B\in S$ and $\lambda\in\mathbb R$. Then
    $$
    (A+B)e=Ae+Be=0
    $$
    and
    $$
    (\lambda A)e=\lambda(Ae)=0.
    $$
    Hence $A+B\in S$ and $\lambda A\in S$. Therefore, $S$ is a subspace of $V$.

    The zero matrix does not belong to $T$ because
    $$
    0e=0\ne e.
    $$
    Therefore, $T$ is not a subspace of $V$.

    **2.** Let
    $$
    A=
    \begin{pmatrix}
    a&b\\c&d
    \end{pmatrix}\in V.
    $$
    Then
    $$
    Ae
    =
    \begin{pmatrix}
    a-b\\c-d
    \end{pmatrix}.
    $$
    Thus $A\in S$ if and only if
    $$
    a=b
    \qquad\text{and}\qquad
    c=d.
    $$
    Therefore, every matrix in $S$ has the form
    $$
    \begin{aligned}
    A
    &=
    \begin{pmatrix}
    a&a\\c&c
    \end{pmatrix}\\
    &=a
    \begin{pmatrix}
    1&1\\0&0
    \end{pmatrix}
    +c
    \begin{pmatrix}
    0&0\\1&1
    \end{pmatrix}.
    \end{aligned}
    $$
    Hence
    $$
    S
    =\operatorname{span}\left\{
      \begin{pmatrix}
      1&1\\0&0
      \end{pmatrix},
      \begin{pmatrix}
      0&0\\1&1
      \end{pmatrix}
    \right\}.
    $$
