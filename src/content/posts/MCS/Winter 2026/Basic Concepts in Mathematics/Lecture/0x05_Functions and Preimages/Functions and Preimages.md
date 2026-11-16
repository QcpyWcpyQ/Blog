---
title: "Functions and Preimages"
published: 2026-11-09
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**  
  Let $f\colon A\to B$ and $Y\subset B$.

  1. Show that $f^{-1}(Y)=f^{-1}(Y\cap f(A))$.
  2. Prove that $Y=f(f^{-1}(Y))$ if and only if $Y\subset f(A)$.

  - **Proof 1.1**
    Let $x\in A$. Then
    $$
    \begin{aligned}
    x\in f^{-1}(Y)
    &\iff f(x)\in Y\\
    &\iff f(x)\in Y\cap f(A)\\
    &\iff x\in f^{-1}(Y\cap f(A)).
    \end{aligned}
    $$
    The second equivalence holds because $f(x)\in f(A)$ for every $x\in A$. Therefore,
    $$
    f^{-1}(Y)=f^{-1}(Y\cap f(A)).
    $$

  - **Proof 1.2**
    Suppose first that
    $$
    Y=f\bigl(f^{-1}(Y)\bigr).
    $$
    Every element of $f(f^{-1}(Y))$ is a value of $f$, so
    $$
    f\bigl(f^{-1}(Y)\bigr)\subset f(A).
    $$
    Hence $Y\subset f(A)$.

    Conversely, suppose that $Y\subset f(A)$. For every $y\in Y$, there exists $x\in A$ such that
    $$
    f(x)=y.
    $$
    Since $y\in Y$, we have $x\in f^{-1}(Y)$, and therefore
    $$
    y=f(x)\in f\bigl(f^{-1}(Y)\bigr).
    $$
    Thus
    $$
    Y\subset f\bigl(f^{-1}(Y)\bigr).
    $$
    The reverse inclusion always holds, because
    $$
    y\in f\bigl(f^{-1}(Y)\bigr)
    $$
    implies that $y=f(x)$ for some $x\in f^{-1}(Y)$, and hence $y\in Y$. Therefore,
    $$
    Y=f\bigl(f^{-1}(Y)\bigr).
    $$

---

- **Problem 2**
  Let $f\colon X\to Y$, and let $A,B\subset X$ be arbitrary.

  1. Prove that $f(A\cap B)\subset f(A)\cap f(B)$.
  2. Find a necessary and sufficient condition such that
     $$
     f(A\cap B)=f(A)\cap f(B)
     $$
     for every pair $A,B\subset X$.

  - **Proof 2.1**
    Let $y\in f(A\cap B)$. Then there exists $x\in A\cap B$ such that
    $$
    f(x)=y.
    $$
    Since $x\in A$ and $x\in B$, we have
    $$
    y=f(x)\in f(A)
    \qquad\text{and}\qquad
    y=f(x)\in f(B).
    $$
    Therefore,
    $$
    y\in f(A)\cap f(B),
    $$
    and hence
    $$
    f(A\cap B)\subset f(A)\cap f(B).
    $$

  - **Proof 2.2**
    The necessary and sufficient condition is that $f$ is injective.

    First, suppose that
    $$
    f(A\cap B)=f(A)\cap f(B)
    $$
    for every pair $A,B\subset X$. Assume, for contradiction, that $f$ is not injective. Then there exist distinct elements $a,b\in X$ such that
    $$
    f(a)=f(b).
    $$
    Choose
    $$
    A=\{a\}
    \qquad\text{and}\qquad
    B=\{b\}.
    $$
    Since $a\neq b$, we have
    $$
    A\cap B=\varnothing
    \qquad\text{and hence}\qquad
    f(A\cap B)=\varnothing.
    $$
    On the other hand,
    $$
    f(A)\cap f(B)=\{f(a)\}\neq\varnothing,
    $$
    contradicting the assumed equality. Therefore, $f$ must be injective.

    Conversely, suppose that $f$ is injective. By Part 1, we already have
    $$
    f(A\cap B)\subset f(A)\cap f(B).
    $$
    Let $y\in f(A)\cap f(B)$. Then there exist $a\in A$ and $b\in B$ such that
    $$
    f(a)=y=f(b).
    $$
    Since $f$ is injective, $a=b$. Thus $a\in A\cap B$, and therefore
    $$
    y=f(a)\in f(A\cap B).
    $$
    Hence,
    $$
    f(A)\cap f(B)\subset f(A\cap B).
    $$
    Combining the two inclusions gives
    $$
    f(A\cap B)=f(A)\cap f(B).
    $$

---

- **Problem 3**
  Let $f\colon X\to Y$, $A\subset X$, and $C\subset Y$. Prove that
  $$
  f\bigl(A\cap f^{-1}(C)\bigr)=f(A)\cap C.
  $$

  - **Proof 3.1**
    We prove both inclusions.

    First, let
    $$
    y\in f\bigl(A\cap f^{-1}(C)\bigr).
    $$
    Then there exists $x\in A\cap f^{-1}(C)$ such that $f(x)=y$. Since $x\in A$, we have
    $$
    y=f(x)\in f(A).
    $$
    Since $x\in f^{-1}(C)$, we also have
    $$
    y=f(x)\in C.
    $$
    Therefore,
    $$
    y\in f(A)\cap C,
    $$
    and hence
    $$
    f\bigl(A\cap f^{-1}(C)\bigr)\subset f(A)\cap C.
    $$

    Conversely, let $y\in f(A)\cap C$. Since $y\in f(A)$, there exists $x\in A$ such that
    $$
    f(x)=y.
    $$
    Since $y\in C$, it follows that $x\in f^{-1}(C)$. Thus
    $$
    x\in A\cap f^{-1}(C),
    $$
    so
    $$
    y=f(x)\in f\bigl(A\cap f^{-1}(C)\bigr).
    $$
    Hence,
    $$
    f(A)\cap C\subset f\bigl(A\cap f^{-1}(C)\bigr).
    $$
    Combining the two inclusions gives
    $$
    f\bigl(A\cap f^{-1}(C)\bigr)=f(A)\cap C.
    $$

---

- **Problem 4 (Inverse maps and bijections)**
  Let $f\colon X\to Y$.

  Recall that $f$ is bijective if it is both injective and surjective.

  1. Suppose that there exists a map $g\colon Y\to X$ such that
     $$
     g\circ f=\operatorname{id}_X
     \qquad\text{and}\qquad
     f\circ g=\operatorname{id}_Y.
     $$
     Prove that $f$ is bijective.
  2. Conversely, suppose that $f$ is bijective. For every $y\in Y$, define $g(y)$ to be the unique $x\in X$ satisfying $f(x)=y$. Prove that $g$ is well-defined and is the inverse of $f$.

  - **Proof 4.1**
    First, we prove that $f$ is injective. Let $a,b\in X$ and suppose that
    $$
    f(a)=f(b).
    $$
    Applying $g$ to both sides gives
    $$
    g\bigl(f(a)\bigr)=g\bigl(f(b)\bigr).
    $$
    Since $g\circ f=\operatorname{id}_X$, we obtain $a=b$. Therefore, $f$ is injective.

    Next, we prove that $f$ is surjective. Let $y\in Y$ and set
    $$
    x=g(y).
    $$
    Since $f\circ g=\operatorname{id}_Y$, we have
    $$
    f(x)=f\bigl(g(y)\bigr)=y.
    $$
    Thus every $y\in Y$ has a preimage under $f$, so $f$ is surjective. Hence, $f$ is bijective.

  - **Proof 4.2**
    Suppose that $f$ is bijective. Since $f$ is surjective, for every $y\in Y$, there exists $x\in X$ such that
    $$
    f(x)=y.
    $$
    Since $f$ is injective, this element $x$ is unique. Therefore, the assignment
    $$
    g(y)=x
    $$
    defines a well-defined map $g\colon Y\to X$.

    Let $x\in X$. By the definition of $g$, the element $g(f(x))$ is the unique element of $X$ whose image under $f$ is $f(x)$. Since $x$ itself has this property,
    $$
    g\bigl(f(x)\bigr)=x.
    $$
    Hence,
    $$
    g\circ f=\operatorname{id}_X.
    $$

    Let $y\in Y$. By the definition of $g$, we have
    $$
    f\bigl(g(y)\bigr)=y.
    $$
    Hence,
    $$
    f\circ g=\operatorname{id}_Y.
    $$
    Therefore, $g$ is the inverse of $f$.

---

- **Problem 5 (A finite iterate equal to the identity)**
  Let $f\colon X\to X$, and suppose that, for some positive integer $n$,
  $$
  f^{\circ n}=\operatorname{id}_X,
  $$
  where
  $$
  f^{\circ n}
  =\underbrace{f\circ f\circ\cdots\circ f}_{n\text{ times}}.
  $$
  Prove that $f$ is bijective.

  - **Solution 5.1**
    Let
    $$
    g=f^{\circ(n-1)}.
    $$
    Then
    $$
    f\circ g
    =f^{\circ n}
    =\operatorname{id}_X
    $$
    and
    $$
    g\circ f
    =f^{\circ n}
    =\operatorname{id}_X.
    $$
    By Problem 4, $f$ is bijective.

---

- **Lemma 6 (Injections and surjections)**
  Let $A$ and $B$ be nonempty sets. The following statements are equivalent.

  1. There exists an injection $f\colon A\to B$.
  2. There exists a surjection $g\colon B\to A$.

  In particular, if no injection $A\to B$ exists, then no surjection $B\to A$ exists. Similarly, if no surjection $B\to A$ exists, then no injection $A\to B$ exists.

  - **Proof 6.1**
    Suppose that there exists an injection
    $$
    f\colon A\to B.
    $$
    Fix an element $a_0\in A$. Define $g\colon B\to A$ as follows. If $y\in f(A)$, then $y=f(x)$ for a unique $x\in A$, and we set
    $$
    g(y)=x.
    $$
    If $y\notin f(A)$, set
    $$
    g(y)=a_0.
    $$
    For every $x\in A$,
    $$
    g\bigl(f(x)\bigr)=x.
    $$
    Thus every element of $A$ has a preimage under $g$, so $g$ is surjective.

  - **Proof 6.2**
    Conversely, suppose that there exists a surjection
    $$
    g\colon B\to A.
    $$
    For every $x\in A$, the set
    $$
    g^{-1}(\{x\})
    $$
    is nonempty. Choose an element $f(x)\in g^{-1}(\{x\})$. This defines a map
    $$
    f\colon A\to B
    $$
    satisfying
    $$
    g\bigl(f(x)\bigr)=x
    $$
    for every $x\in A$.

    Let $a,b\in A$ and suppose that
    $$
    f(a)=f(b).
    $$
    Applying $g$ to both sides gives
    $$
    g\bigl(f(a)\bigr)=g\bigl(f(b)\bigr),
    $$
    and hence $a=b$. Therefore, $f$ is injective.

- **Remark 6.3 (Finite sets)**
  For finite sets, the result is easy to see. Let
  $$
  A=\{1,\ldots,n\}
  \qquad\text{and}\qquad
  B=\{1,\ldots,m\}.
  $$
  If $n\leqslant m$, then
  $$
  f\colon A\to B,
  \qquad
  f(x)=x,
  $$
  is injective, while
  $$
  g\colon B\to A,
  \qquad
  g(x)=\min\{x,n\},
  $$
  is surjective. Hence, for finite sets, an injection $A\to B$ exists exactly when the number of elements of $A$ is less than or equal to the number of elements of $B$.

---

- **Definition 7 (Power set)**
  Let $A$ be a set. The power set of $A$ is the set of all subsets of $A$. It is denoted by
  $$
  \mathcal P(A)
  \qquad\text{or}\qquad
  2^A.
  $$

- **Example 7.1**
  Let
  $$
  A=\{1,2,3\}.
  $$
  Then
  $$
  2^A
  =\bigl\{
  \varnothing,
  \{1\},
  \{2\},
  \{3\},
  \{1,2\},
  \{1,3\},
  \{2,3\},
  \{1,2,3\}
  \bigr\}.
  $$
  Thus
  $$
  |A|=3
  \qquad\text{and}\qquad
  |2^A|=2^3=8.
  $$

- **Remark 7.2 (Subsets as functions)**
  Consider all functions
  $$
  f\colon A\to\{0,1\}.
  $$
  Each such function determines the subset
  $$
  f^{-1}(\{1\})\subset A.
  $$
  Conversely, every subset $S\subset A$ determines a function $f_S\colon A\to\{0,1\}$ given by
  $$
  f_S(x)=
  \begin{cases}
  1,&x\in S,\\
  0,&x\notin S.
  \end{cases}
  $$
  Therefore, the subsets of $A$ are parametrised by the functions from $A$ to $\{0,1\}$. Writing
  $$
  2=\{0,1\}
  $$
  explains the notation $2^A$ for the power set of $A$.
