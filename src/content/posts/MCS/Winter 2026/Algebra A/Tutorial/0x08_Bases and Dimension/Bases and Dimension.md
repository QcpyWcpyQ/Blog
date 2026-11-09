---
title: "Bases and Dimension"
published: 2026-11-09
description: "Tutorial exercises and complete solutions on sums and intersections of subspaces."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 5**
  Let $U$ and $W$ be the following subspaces of $\mathbb R^3$:
  $$
  U=\operatorname{span}\{(1,0,-1),(0,1,-1)\},
  \qquad
  W=\operatorname{span}\{(1,0,1),(0,1,1)\}.
  $$
  Find a finite spanning set of the subspaces $U+W$ and $U\cap W$.

  - **Solution 5.1 (The sum)**
    By definition,
    $$
    U+W
    =\operatorname{span}\{(1,0,-1),(0,1,-1),(1,0,1),(0,1,1)\}.
    $$
    Moreover,
    $$
    (1,0,-1),
    \qquad
    (0,1,-1),
    \qquad
    (1,0,1)
    $$
    are linearly independent. Indeed, if
    $$
    a(1,0,-1)+b(0,1,-1)+c(1,0,1)=0,
    $$
    then the coordinates give
    $$
    a+c=0,
    \qquad
    b=0,
    \qquad
    -a-b+c=0.
    $$
    Hence $a=b=c=0$. These three vectors therefore span $\mathbb R^3$, so
    $$
    U+W=\mathbb R^3
    =\operatorname{span}\{(1,0,-1),(0,1,-1),(1,0,1)\}.
    $$

  - **Solution 5.2 (The intersection)**
    Every vector in $U$ has the form
    $$
    (a,b,-a-b),
    $$
    while every vector in $W$ has the form
    $$
    (c,d,c+d).
    $$
    If a vector belongs to $U\cap W$, then its coordinates satisfy
    $$
    z=-x-y
    \qquad\text{and}\qquad
    z=x+y.
    $$
    Thus $x+y=0$ and $z=0$. Therefore, every vector in the intersection has the form
    $$
    (t,-t,0)=t(1,-1,0).
    $$
    Conversely, every vector of this form belongs to both $U$ and $W$. Hence
    $$
    U\cap W=\operatorname{span}\{(1,-1,0)\}.
    $$

---

- **Exercise 6**
  Let $U$ and $W$ be the following subspaces of $\mathbb R^4$:
  $$
  U=\{(x_1,x_2,x_3,x_4)\in\mathbb R^4:x_4=x_1+x_2\},
  $$
  $$
  W=\{(x_1,x_2,x_3,x_4)\in\mathbb R^4:x_4=x_2+x_3\}.
  $$
  Find a finite spanning set of the subspaces $U+W$ and $U\cap W$.

  - **Solution 6.1 (The sum)**
    A vector in $U$ has the form
    $$
    (a,b,c,a+b)
    =a(1,0,0,1)+b(0,1,0,1)+c(0,0,1,0),
    $$
    so
    $$
    U=\operatorname{span}\{(1,0,0,1),(0,1,0,1),(0,0,1,0)\}.
    $$
    A vector in $W$ has the form
    $$
    (d,e,f,e+f)
    =d(1,0,0,0)+e(0,1,0,1)+f(0,0,1,1).
    $$
    In particular, $U+W$ contains the four vectors
    $$
    (1,0,0,1),
    \quad
    (0,1,0,1),
    \quad
    (0,0,1,0),
    \quad
    (1,0,0,0).
    $$
    They span $\mathbb R^4$, because
    $$
    \begin{aligned}
    (0,0,0,1)&=(1,0,0,1)-(1,0,0,0),\\
    (0,1,0,0)&=(0,1,0,1)-(0,0,0,1),
    \end{aligned}
    $$
    and $(1,0,0,0)$ and $(0,0,1,0)$ are already present. Therefore,
    $$
    U+W=\mathbb R^4
    $$
    with spanning set
    $$
    \{(1,0,0,1),(0,1,0,1),(0,0,1,0),(1,0,0,0)\}.
    $$

  - **Solution 6.2 (The intersection)**
    If $(x_1,x_2,x_3,x_4)\in U\cap W$, then
    $$
    x_1+x_2=x_4=x_2+x_3,
    $$
    so $x_1=x_3$. Let
    $$
    x_1=x_3=s,
    \qquad
    x_2=t.
    $$
    Then $x_4=s+t$, and hence
    $$
    \begin{aligned}
    (x_1,x_2,x_3,x_4)
    &=(s,t,s,s+t)\\
    &=s(1,0,1,1)+t(0,1,0,1).
    \end{aligned}
    $$
    Conversely, every such vector satisfies both defining equations. Therefore,
    $$
    U\cap W
    =\operatorname{span}\{(1,0,1,1),(0,1,0,1)\}.
    $$
