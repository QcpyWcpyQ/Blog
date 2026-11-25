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

  1. A neighbourhood of $x$ is an open interval $(a,b)$ with $a<x<b$. For $\varepsilon>0$, a typical example is
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
  \quad\forall x\in X,\qquad
  0<|x-x_0|<\delta
  \implies
  |f(x)-l|<\varepsilon.
  $$

- **Example 3.1**
  Let $f(x)=3x-2$. Compute
  $$
  \lim_{x\to4}f(x).
  $$
  Given $\varepsilon>0$, take $\delta=\varepsilon/3$. If $0<|x-4|<\delta$, then
  $$
  |f(x)-10|=|3x-12|=3|x-4|<3\delta=\varepsilon.
  $$
  Thus $\lim_{x\to4}f(x)=10$.

- **Example 3.2**
  Let $X=\{1,2,\tfrac52\}$, and let $f\colon X\to\mathbb R$ satisfy
  $$
  f(1)=2,\qquad f(2)=4,\qquad f\bigl(\tfrac52\bigr)=0.
  $$
  The finite set $X$ has no limit points. In particular, $(\tfrac12,\tfrac32)$ meets $X$ only at $1$, so
  $$
  \lim_{x\to1}f(x)
  $$
  is undefined under Definition 3.

- **Example 3.3**
  Let
  $$
  X=\bigl\{1,2,\tfrac52\bigr\}
  \cup\left\{1+\frac1n:n\in\mathbb N,\ n\geqslant1\right\},
  $$
  and let $f\colon X\to\mathbb R$ satisfy
  $$
  f(1)=0,\qquad f(2)=3,\qquad f\bigl(\tfrac52\bigr)=2,
  \qquad f\left(1+\frac1n\right)=n\quad(n\geqslant2).
  $$
  The only limit point of $X$ is $1$. We have
  $$
  \lim_{x\to1}f(x)=+\infty.
  $$
  Indeed, given $M>0$, take $\delta=\min\{\tfrac12,1/(M+1)\}$. If $x\in X$ and $0<|x-1|<\delta$, then $x=1+1/n$ for some $n\geqslant2$. Since $1/n<1/(M+1)$, we have $f(x)=n>M$.

---

- **Definition 4**
  Let $f\colon X\to\mathbb R$, and let $x_0$ be a limit point of $X$. We write
  $$
  \lim_{x\to x_0}f(x)=+\infty
  $$
  if, for every $M>0$, there exists $\delta>0$ such that, for every $x\in X$,
  $$
  0<|x-x_0|<\delta\implies f(x)>M.
  $$
  Similarly, we can define
  $$
  \lim_{x\to x_0}f(x)=-\infty,\qquad
  \lim_{x\to+\infty}f(x)=+\infty,\qquad
  \lim_{x\to+\infty}f(x)=l\in\mathbb R,
  $$
  as well as the corresponding limits as $x\to-\infty$.

- **Example 4.1**
  We have already proved that if $f(x)=ax$, then $\lim_{x\to x_0}f(x)=ax_0$ for every $x_0\in\mathbb R$.

- **Example 4.2**
  Let $X=\mathbb R$. Write each rational number in lowest terms as $p/q$, with $p\in\mathbb Z$ and $q$ a positive integer. Define
  $$
  f(x)=
  \begin{cases}
  1/q & \text{if }x=p/q\in\mathbb Q,\ x\ne1,\\
  1   & \text{if }x=1,\\
  0   & \text{if }x\notin\mathbb Q.
  \end{cases}
  $$
  Compute
  $$
  \lim_{x\to1}f(x)
  \qquad\text{and}\qquad
  \lim_{x\to\sqrt2}f(x).
  $$

  - **Solution 4.2.1**
    In fact, $\lim_{x\to x_0}f(x)=0$ for every $x_0\in\mathbb R$. Fix $x_0$ and let $\varepsilon>0$. The set
    $$
    A=\{q\in\mathbb N:1\leqslant q\leqslant1/\varepsilon\}
    $$
    is finite. For each $q\in A$, only finitely many integers $p$ satisfy $|p/q-x_0|<1$, since $q(x_0-1)<p<q(x_0+1)$. Thus the set
    $$
    B=\left\{\frac pq:q\in A,\ p\in\mathbb Z,\ 0<\left|\frac pq-x_0\right|<1\right\}
    $$
    is finite. If $B$ is nonempty, let $S=\min_{r\in B}|r-x_0|$. Otherwise, set $S=1$. In either case $0<S\leqslant1$. Take $\delta=S/2$.

    Suppose that $0<|x-x_0|<\delta$. If $x$ is irrational, then $|f(x)|=0<\varepsilon$. If $x=p/q$ is rational and written in lowest terms, then $q\in A$ would imply $x\in B$, contradicting $|x-x_0|<S$. Hence $q>1/\varepsilon$, so $|f(x)|=1/q<\varepsilon$. In particular,
    $$
    \lim_{x\to1}f(x)=\lim_{x\to\sqrt2}f(x)=0.
    $$

---

- **Theorem 5 (Algebra of limits)**
  Let $f,g\colon X\to\mathbb R$, let $x_0$ be a limit point of $X$, and suppose that
  $$
  \lim_{x\to x_0}f(x)=l_1
  \qquad\text{and}\qquad
  \lim_{x\to x_0}g(x)=l_2.
  $$
  Then the following statements hold.

  1. $$
     \lim_{x\to x_0}\bigl(f(x)+g(x)\bigr)=l_1+l_2.
     $$

  2. $$
     \lim_{x\to x_0}f(x)g(x)=l_1l_2.
     $$

  3. If $l_1\ne0$, there is an open interval $(a,b)$ containing $x_0$ such that $f(x)\ne0$ for every $x\in(a,b)\cap X$ with $x\ne x_0$. Moreover,
     $$
     \lim_{x\to x_0}\frac1{f(x)}=\frac1{l_1}
     \qquad\text{and}\qquad
     \lim_{x\to x_0}\frac{g(x)}{f(x)}=\frac{l_2}{l_1}.
     $$

  - **Proof 5.1**
    The proof follows the same estimates as for sequences. Let $\varepsilon>0$. In each part, $x$ ranges over $X$.

    1. Choose $\delta>0$ small enough that $0<|x-x_0|<\delta$ implies both $|f(x)-l_1|<\varepsilon/2$ and $|g(x)-l_2|<\varepsilon/2$. Then
       $$
       |f(x)+g(x)-(l_1+l_2)|
       \leqslant |f(x)-l_1|+|g(x)-l_2|
       <\varepsilon.
       $$

    2. Set $C=1+|l_1|+|l_2|$. Choose $\delta>0$ so that whenever $0<|x-x_0|<\delta$, both $|f(x)-l_1|$ and $|g(x)-l_2|$ are less than $\min\{1,\varepsilon/C\}$. Then $|f(x)|<1+|l_1|$, and
       $$
       \begin{aligned}
       |f(x)g(x)-l_1l_2|
       &=|f(x)(g(x)-l_2)+l_2(f(x)-l_1)|\\
       &\leqslant (1+|l_1|)|g(x)-l_2|+|l_2||f(x)-l_1|\\
       &<C\cdot\frac{\varepsilon}{C}=\varepsilon.
       \end{aligned}
       $$

    3. Suppose $l_1\ne0$. Choose $r>0$ so that $0<|x-x_0|<r$ implies $|f(x)-l_1|<|l_1|/2$. Then
       $$
       |f(x)|\geqslant |l_1|-|f(x)-l_1|>|l_1|/2.
       $$
       This gives the required interval $(x_0-r,x_0+r)$. Choose $0<\delta\leqslant r$ so that $0<|x-x_0|<\delta$ also implies $|f(x)-l_1|<\varepsilon |l_1|^2/2$. For such $x$,
       $$
       \left|\frac1{f(x)}-\frac1{l_1}\right|
       =\frac{|f(x)-l_1|}{|f(x)|\,|l_1|}
       \leqslant\frac{2|f(x)-l_1|}{|l_1|^2}
       <\varepsilon.
       $$
       Applying part 2 to $g$ and $1/f$ on this punctured interval gives $\lim_{x\to x_0}g(x)/f(x)=l_2/l_1$.

- **Theorem 5.1**
  Let $g\colon X\to\mathbb R$ be bounded, and let $x_0$ be a limit point of $X$. Then
  $$
  \lim_{x\to x_0}(x-x_0)g(x)=0.
  $$

  - **Proof 5.1.1**
    Choose $M>0$ such that $|g(x)|\leqslant M$ for every $x\in X$. Given $\varepsilon>0$, take $\delta=\varepsilon/M$. If $x\in X$ and $0<|x-x_0|<\delta$, then
    $$
    |(x-x_0)g(x)|\leqslant M|x-x_0|<M\delta=\varepsilon.
    $$

- **Exercise 5.2**
  Compute
  $$
  \lim_{x\to0}x\sin(1/x)
  \qquad\text{and}\qquad
  \lim_{x\to0}\frac1x\sin x.
  $$

  - **Solution 5.2.1**

    1. For every $x\ne0$, we have $|x\sin(1/x)|\leqslant|x|$. Since $|x|\to0$ as $x\to0$, the sandwich theorem gives
       $$
       \lim_{x\to0}x\sin(1/x)=0.
       $$

    2. For $0<t<\pi/2$, comparing the areas of the inscribed triangle, the sector, and the tangent triangle in the unit circle gives $\sin t\leqslant t\leqslant\tan t$. Hence
       $$
       \cos t\leqslant\frac{\sin t}{t}\leqslant1.
       $$
       Since $\sin x/x$ is even, the same bounds hold with $t=|x|$ on either side of $0$. As $\cos|x|\to1$, the sandwich theorem gives
       $$
       \lim_{x\to0}\frac{\sin x}{x}=1.
       $$
