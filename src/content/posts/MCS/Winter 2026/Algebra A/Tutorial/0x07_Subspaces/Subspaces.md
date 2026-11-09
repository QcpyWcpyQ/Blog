---
title: "Subspaces"
published: 2026-11-09
description: "Tutorial exercises and complete solutions on subspaces and spanning sets."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let $V$ be the real vector space of all functions from $\mathbb R$ to $\mathbb R$. Determine which of the following subsets are subspaces of $V$. Justify your answers.

  1. All functions $f$ such that $f(0)=f(2)$.
  2. All functions $f$ such that $f(1)=3$.
  3. All functions $f$ such that $f(-x)=f(x)$ for every $x\in\mathbb R$.
  4. All functions $f$ such that $f(2x)=2f(x)$ for every $x\in\mathbb R$.

  - **Solution 1.1**
    Let
    $$
    W_1=\{f\in V:f(0)=f(2)\}.
    $$
    The zero function belongs to $W_1$. If $f,g\in W_1$, then
    $$
    (f+g)(0)=f(0)+g(0)=f(2)+g(2)=(f+g)(2).
    $$
    If $\lambda\in\mathbb R$, then
    $$
    (\lambda f)(0)=\lambda f(0)=\lambda f(2)=(\lambda f)(2).
    $$
    Thus $W_1$ is a subspace of $V$.

  - **Solution 1.2**
    Let
    $$
    W_2=\{f\in V:f(1)=3\}.
    $$
    The zero function does not belong to $W_2$, because its value at $1$ is $0$, not $3$. Therefore, $W_2$ is not a subspace of $V$.

  - **Solution 1.3**
    Let
    $$
    W_3=\{f\in V:f(-x)=f(x)\text{ for every }x\in\mathbb R\}.
    $$
    The zero function belongs to $W_3$. If $f,g\in W_3$, then, for every $x\in\mathbb R$,
    $$
    (f+g)(-x)=f(-x)+g(-x)=f(x)+g(x)=(f+g)(x).
    $$
    If $\lambda\in\mathbb R$, then
    $$
    (\lambda f)(-x)=\lambda f(-x)=\lambda f(x)=(\lambda f)(x).
    $$
    Thus $W_3$ is a subspace of $V$.

  - **Solution 1.4**
    Let
    $$
    W_4=\{f\in V:f(2x)=2f(x)\text{ for every }x\in\mathbb R\}.
    $$
    The zero function belongs to $W_4$. If $f,g\in W_4$, then, for every $x\in\mathbb R$,
    $$
    (f+g)(2x)=f(2x)+g(2x)=2f(x)+2g(x)=2(f+g)(x).
    $$
    If $\lambda\in\mathbb R$, then
    $$
    (\lambda f)(2x)=\lambda f(2x)=2\lambda f(x)=2(\lambda f)(x).
    $$
    Thus $W_4$ is a subspace of $V$.

---

- **Exercise 2**
  Let
  $$
  v_1=(1,0,2,-1),
  \qquad
  v_2=(0,1,-1,2),
  \qquad
  v_3=(1,1,0,1).
  $$
  Determine whether each of the vectors
  $$
  u=(2,1,3,0),
  \qquad
  w=(2,1,3,1)
  $$
  belongs to $\operatorname{span}\{v_1,v_2,v_3\}$.

  - **Solution 2.1**
    For $a,b,c\in\mathbb R$,
    $$
    av_1+bv_2+cv_3
    =(a+c,b+c,2a-b,-a+2b+c).
    $$
    To represent $u$, we solve
    $$
    \begin{cases}
    a+c=2,\\
    b+c=1,\\
    2a-b=3,\\
    -a+2b+c=0.
    \end{cases}
    $$
    The solution is
    $$
    a=2,
    \qquad
    b=1,
    \qquad
    c=0.
    $$
    Hence
    $$
    u=2v_1+v_2,
    $$
    so $u\in\operatorname{span}\{v_1,v_2,v_3\}$.

  - **Solution 2.2**
    If $w=av_1+bv_2+cv_3$, then its first three coordinates require
    $$
    \begin{cases}
    a+c=2,\\
    b+c=1,\\
    2a-b=3.
    \end{cases}
    $$
    These equations give $a=2$, $b=1$, and $c=0$. However, the fourth coordinate of the resulting linear combination is
    $$
    -a+2b+c=-2+2=0,
    $$
    whereas the fourth coordinate of $w$ is $1$. Therefore,
    $$
    w\notin\operatorname{span}\{v_1,v_2,v_3\}.
    $$

---

- **Exercise 3**
  Let $W$ be the subset of $\mathbb R^4$ consisting of all vectors $(x_1,x_2,x_3,x_4)$ satisfying
  $$
  \begin{cases}
  2x_1-x_2+x_3=0,\\
  x_2+x_4=0.
  \end{cases}
  $$
  Prove that $W$ is a subspace of $\mathbb R^4$ and find a finite set of vectors that spans $W$.

  - **Solution 3.1**
    The zero vector satisfies both equations, so $0\in W$.

    Let $x=(x_1,x_2,x_3,x_4)$ and $y=(y_1,y_2,y_3,y_4)$ belong to $W$. Then
    $$
    \begin{aligned}
    2(x_1+y_1)-(x_2+y_2)+(x_3+y_3)
    &=(2x_1-x_2+x_3)+(2y_1-y_2+y_3)=0,\\
    (x_2+y_2)+(x_4+y_4)
    &=(x_2+x_4)+(y_2+y_4)=0.
    \end{aligned}
    $$
    Hence $x+y\in W$.

    If $\lambda\in\mathbb R$, then
    $$
    \begin{aligned}
    2(\lambda x_1)-\lambda x_2+\lambda x_3
    &=\lambda(2x_1-x_2+x_3)=0,\\
    \lambda x_2+\lambda x_4
    &=\lambda(x_2+x_4)=0.
    \end{aligned}
    $$
    Thus $\lambda x\in W$, and $W$ is a subspace of $\mathbb R^4$.

    To find a spanning set, let
    $$
    x_1=s,
    \qquad
    x_2=t.
    $$
    The equations give
    $$
    x_3=-2s+t,
    \qquad
    x_4=-t.
    $$
    Therefore,
    $$
    \begin{aligned}
    (x_1,x_2,x_3,x_4)
    &=(s,t,-2s+t,-t)\\
    &=s(1,0,-2,0)+t(0,1,1,-1).
    \end{aligned}
    $$
    Hence
    $$
    W=\operatorname{span}\{(1,0,-2,0),(0,1,1,-1)\}.
    $$

---

- **Exercise 4**
  Let $W_1$ and $W_2$ be subspaces of a vector space $V$ over a field $\mathbb F$. Determine whether each of the following statements is true or false. Justify your answers by providing a proof or a counterexample.

  1. The union $W_1\cup W_2$ is always a subspace of $V$.
  2. If $W_1\cap W_2=\{0\}$, then $W_1\cup W_2$ is a subspace of $V$.
  3. If $W_1\subseteq W_2$, then $W_1\cup W_2$ is a subspace of $V$.
  4. If $W_1\cup W_2$ is a subspace of $V$, then either $W_1\subseteq W_2$ or $W_2\subseteq W_1$.

  - **Solution 4.1**
    The statement is false. In $\mathbb R^2$, let
    $$
    W_1=\{(x,0):x\in\mathbb R\},
    \qquad
    W_2=\{(0,y):y\in\mathbb R\}.
    $$
    Then $(1,0)\in W_1$ and $(0,1)\in W_2$, but
    $$
    (1,0)+(0,1)=(1,1)\notin W_1\cup W_2.
    $$
    Thus $W_1\cup W_2$ is not closed under addition.

  - **Solution 4.2**
    The statement is false. The same two coordinate axes satisfy
    $$
    W_1\cap W_2=\{0\},
    $$
    but their union is not a subspace of $\mathbb R^2$.

  - **Solution 4.3**
    The statement is true. If $W_1\subseteq W_2$, then
    $$
    W_1\cup W_2=W_2.
    $$
    Since $W_2$ is a subspace of $V$, so is $W_1\cup W_2$.

  - **Solution 4.4**
    The statement is true. Suppose that $W_1\cup W_2$ is a subspace of $V$. Assume, for a contradiction, that neither subspace is contained in the other. Then there exist
    $$
    u\in W_1\setminus W_2
    \qquad\text{and}\qquad
    w\in W_2\setminus W_1.
    $$
    Since $W_1\cup W_2$ is a subspace, $u+w\in W_1\cup W_2$.

    If $u+w\in W_1$, then
    $$
    w=(u+w)-u\in W_1,
    $$
    a contradiction. If $u+w\in W_2$, then
    $$
    u=(u+w)-w\in W_2,
    $$
    also a contradiction. Therefore, either $W_1\subseteq W_2$ or $W_2\subseteq W_1$.
