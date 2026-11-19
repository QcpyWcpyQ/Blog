---
title: "Limit of Functions"
published: 2026-11-19
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

We need to study some subsets of $\mathbb R$.

We need to study the basic concepts of topology.

- **Definition 1**
  Let $X\subseteq\mathbb R$ and let $x\in\mathbb R$.

  1. A neighbourhood of $x$ is an open interval $(a,b)$ with $a<x<b$. A typical example is
     $$
     (x-\varepsilon,x+\varepsilon).
     $$

  2. The point $x$ is an interior point of $X$ if there is a neighbourhood of $x$ contained in $X$. If $x$ is an interior point of $X$, then $x\in X$.

  3. The point $x$ is an exterior point of $X$ if it is an interior point of
     $$
     X^\complement=\mathbb R\setminus X.
     $$
     Equivalently, there is a neighbourhood of $x$ contained in $X^\complement$.

  4. The point $x$ is a boundary point of $X$ if it is neither an interior point nor an exterior point of $X$. Equivalently, every neighbourhood of $x$ intersects both $X$ and $X^\complement$. The boundary of $X$ is the same as the boundary of $X^\complement$.

  5. The point $x$ is a limit point of $X$ if every neighbourhood of $x$ intersects $X$ at a point different from $x$. That is,
     $$
     \forall\varepsilon>0,
     \qquad
     \left((x-\varepsilon,x+\varepsilon)\setminus\{x\}\right)\cap X
     \ne\varnothing.
     $$

  6. The point $x$ is an isolated point of $X$ if $x\in X$ and there is a neighbourhood of $x$ that, except for $x$, is contained in $X^\complement$. That is,
     $$
     \exists\varepsilon>0,
     \qquad
     \left((x-\varepsilon,x+\varepsilon)\setminus\{x\}\right)
     \subseteq X^\complement.
     $$

- **Notation 1.1**
  The interior of $X$ is denoted by $\mathring X$.

  The exterior of $X$ is denoted by $\mathring{X^\complement}$.

  The boundary of $X$ is denoted by $\partial X$.

---

- **Definition 2**
  The closure of $X$ is
  $$
  \mathring X\cup\partial X
  =\left(\mathring{X^\complement}\right)^\complement.
  $$

- **Example 2.1**
  Let
  $$
  X
  =[0,1)\cup\{2\}
  \cup\left\{3+\frac1n:n\in\mathbb N\right\}
  \cup\left((5,6)\cap\mathbb Q\right).
  $$
  Find the interior, exterior, boundary, closure, limit points, and isolated points of $X$.

  1. The interior of $X$ is
     $$
     \mathring X=(0,1).
     $$

  2. The exterior of $X$ is
     $$
     \mathring{X^\complement}
     =(-\infty,0)
     \cup\bigl((1,3)\setminus\{2\}\bigr)
     \cup\left((3,5)\setminus
       \left\{3+\frac1n:n\in\mathbb N\right\}\right)
     \cup(6,\infty).
     $$

  3. The boundary of $X$ is
     $$
     \partial X
     =\{0,1,2,3\}
     \cup\left\{3+\frac1n:n\in\mathbb N\right\}
     \cup[5,6].
     $$

  4. The closure of $X$ is
     $$
     [0,1]\cup\{2,3\}
     \cup\left\{3+\frac1n:n\in\mathbb N\right\}
     \cup[5,6].
     $$

  5. The set of limit points of $X$ is
     $$
     [0,1]\cup\{3\}\cup[5,6].
     $$

  6. The set of isolated points of $X$ is
     $$
     \{2\}\cup\left\{3+\frac1n:n\in\mathbb N\right\}.
     $$

---

- **Definition 3**
  Let $f\colon X\to\mathbb R$, let $x_0$ be a limit point of $X$, and let $l\in\mathbb R$. We say that
  $$
  \lim_{x\to x_0}f(x)=l
  $$
  if
  $$
  \forall\varepsilon>0,
  \ \,\exists\delta>0
  \quad\text{such that}\quad
  0<|x-x_0|<\delta
  \implies
  |f(x)-l|<\varepsilon.
  $$

- **Example 3.1**  
    Let $f(x)=3x-2$. Compute  
    $$
    \lim_{x\to 4}f(x).
    $$
    Let $\varepsilon>0$. We need a $\delta$ such that $0<\vert x-4\vert<\delta\implies \vert f(x)-10\vert<\varepsilon$. Let $\delta=\frac \varepsilon 3$. Then $0<\vert x-4\vert<\delta\implies \vert f(x)-10\vert<\varepsilon$. Thus, $\lim_{x\to 4}f(x)=10$.
