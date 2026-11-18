---
title: "Functions and Preimages"
published: 2026-11-11
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let $f\colon X\to Y$ be a function. Show that, for any subsets $A\subseteq X$ and $B\subseteq Y$, we have

  1. $f\bigl(f^{-1}(B)\bigr)\subseteq B$.
  2. $A\subseteq f^{-1}\bigl(f(A)\bigr)$.

  - **Solution 1.1**
    **(a)** Let
    $$
    y\in f\bigl(f^{-1}(B)\bigr).
    $$
    By the definition of an image, there exists
    $$
    x\in f^{-1}(B)
    $$
    such that $y=f(x)$. By the definition of a preimage, $x\in f^{-1}(B)$ implies that $f(x)\in B$. Hence $y\in B$. Therefore,
    $$
    f\bigl(f^{-1}(B)\bigr)\subseteq B.
    $$

    **(b)** Let $x\in A$. By the definition of an image,
    $$
    f(x)\in f(A).
    $$
    By the definition of a preimage, this implies that
    $$
    x\in f^{-1}\bigl(f(A)\bigr).
    $$
    Therefore,
    $$
    A\subseteq f^{-1}\bigl(f(A)\bigr).
    $$

---

- **Exercise 2**
  Show that if $f\colon\mathbb R_{>0}\to\mathbb R_{>0}$ is invertible with inverse
  $$
  g(x)=\frac{1}{f(x)},
  $$
  then
  $$
  (f\circ f)(x)=\frac{1}{x}
  $$
  and
  $$
  (f\circ f\circ f\circ f)(x)=x.
  $$

  - **Solution 2.1**
    We have
    $$
    x=(g\circ f)(x)
    =\frac{1}{(f\circ f)(x)},
    $$
    and hence
    $$
    (f\circ f)(x)=\frac{1}{x}.
    $$
    Therefore,
    $$
    \begin{aligned}
    (f\circ f\circ f\circ f)(x)
    &=(f\circ f)\left(\frac{1}{x}\right)\\
    &=\frac{1}{1/x}\\
    &=x.
    \end{aligned}
    $$

---

- **Exercise 3**
  Let $f\colon X\to Y$ be a function. Show that, for every $C\subseteq Y$,
  $$
  \mathbf 1_{f^{-1}(C)}=\mathbf 1_C\circ f.
  $$
  Use this identity to show that
  $$
  f^{-1}(Y\setminus C)=X\setminus f^{-1}(C).
  $$

  - **Solution 3.1**
    Recall that the characteristic function of $C\subseteq Y$ is
    $$
    \mathbf 1_C\colon Y\to\{0,1\},
    \qquad
    \mathbf 1_C(y)=
    \begin{cases}
    1,&y\in C,\\
    0,&y\notin C.
    \end{cases}
    $$
    Moreover,
    $$
    f^{-1}(C)=\{x\in X:f(x)\in C\},
    $$
    so
    $$
    x\in f^{-1}(C)\iff f(x)\in C.
    $$

    Let $x\in X$. If $x\in f^{-1}(C)$, then $f(x)\in C$, and hence
    $$
    \mathbf 1_{f^{-1}(C)}(x)=1
    =\mathbf 1_C(f(x))
    =(\mathbf 1_C\circ f)(x).
    $$
    If $x\notin f^{-1}(C)$, then $f(x)\notin C$, and hence
    $$
    \mathbf 1_{f^{-1}(C)}(x)=0
    =\mathbf 1_C(f(x))
    =(\mathbf 1_C\circ f)(x).
    $$
    Therefore,
    $$
    \mathbf 1_{f^{-1}(C)}=\mathbf 1_C\circ f.
    $$

  - **Solution 3.2**
    For subsets $A,B\subseteq X$,
    $$
    A=B\iff \mathbf 1_A=\mathbf 1_B,
    $$
    and
    $$
    \mathbf 1_{X\setminus A}=\mathbf 1_X-\mathbf 1_A.
    $$
    Since $f^{-1}(Y)=X$, the identity from Solution 3.1 gives
    $$
    \begin{aligned}
    \mathbf 1_{f^{-1}(Y\setminus C)}
    &=\mathbf 1_{Y\setminus C}\circ f\\
    &=(\mathbf 1_Y-\mathbf 1_C)\circ f\\
    &=\mathbf 1_Y\circ f-\mathbf 1_C\circ f\\
    &=\mathbf 1_{f^{-1}(Y)}-\mathbf 1_{f^{-1}(C)}\\
    &=\mathbf 1_X-\mathbf 1_{f^{-1}(C)}\\
    &=\mathbf 1_{X\setminus f^{-1}(C)}.
    \end{aligned}
    $$
    Therefore,
    $$
    f^{-1}(Y\setminus C)=X\setminus f^{-1}(C).
    $$

---

- **Exercise 4**
  Let $f\colon X\to Y$ be a function, and define
  $$
  \Phi\colon\mathcal P(Y)\to\mathcal P(X),
  \qquad
  \Phi(B)=f^{-1}(B).
  $$
  Show that

  1. $\Phi$ is injective if and only if $f$ is surjective.
  2. $\Phi$ is surjective if and only if $f$ is injective.

  - **Solution 4.1**
    Suppose first that $\Phi$ is injective. Let $b\in Y$. If
    $$
    f^{-1}(\{b\})=\varnothing,
    $$
    then
    $$
    \Phi(\{b\})=f^{-1}(\{b\})
    =\varnothing=f^{-1}(\varnothing)=\Phi(\varnothing).
    $$
    Since $\Phi$ is injective, this would imply that $\{b\}=\varnothing$, which is a contradiction. Thus
    $$
    f^{-1}(\{b\})\neq\varnothing.
    $$
    Hence there exists $x\in X$ such that $f(x)=b$. Since $b\in Y$ was arbitrary, $f$ is surjective.

    Conversely, suppose that $f$ is surjective. Let $A,B\subseteq Y$ and suppose that
    $$
    \Phi(A)=\Phi(B).
    $$
    Then
    $$
    f^{-1}(A)=f^{-1}(B).
    $$
    Let $a\in A$. Since $f$ is surjective, there exists $x\in X$ such that $f(x)=a$. Thus
    $$
    x\in f^{-1}(A)=f^{-1}(B),
    $$
    so $a=f(x)\in B$. Hence $A\subseteq B$. By the same argument, $B\subseteq A$. Therefore, $A=B$, and $\Phi$ is injective.

  - **Solution 4.2**
    Suppose first that $f$ is injective. Let $A\subseteq X$, and take
    $$
    B=f(A)\subseteq Y.
    $$
    Since $f$ is injective,
    $$
    f^{-1}(\{f(a)\})=\{a\}
    \qquad
    \text{for every }a\in A.
    $$
    Therefore,
    $$
    \begin{aligned}
    \Phi(B)
    &=f^{-1}(f(A))\\
    &=\bigcup_{b\in f(A)}f^{-1}(\{b\})\\
    &=\bigcup_{a\in A}f^{-1}(\{f(a)\})\\
    &=\bigcup_{a\in A}\{a\}\\
    &=A.
    \end{aligned}
    $$
    Thus every subset of $X$ has a preimage under $\Phi$, so $\Phi$ is surjective.

    Conversely, suppose that $\Phi$ is surjective. Let $a,b\in X$ satisfy
    $$
    f(a)=f(b).
    $$
    Since $\Phi$ is surjective, there exists $C\subseteq Y$ such that
    $$
    f^{-1}(C)=\Phi(C)=\{a\}.
    $$
    Since $a\in f^{-1}(C)$, we have $f(a)\in C$. As $f(a)=f(b)$, it follows that $f(b)\in C$, so
    $$
    b\in f^{-1}(C)=\{a\}.
    $$
    Hence $b=a$. Therefore, $f$ is injective.
