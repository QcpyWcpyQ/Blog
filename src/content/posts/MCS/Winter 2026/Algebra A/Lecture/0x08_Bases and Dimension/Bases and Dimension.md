---
title: "Bases and Dimension"
published: 2026-11-04
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $V$ be a vector space over $\mathbb F$, and let $S\subseteq V$. The set $S$ is linearly dependent if there exist $k\geqslant1$, distinct vectors
  $$
  v_1,\ldots,v_k\in S,
  $$
  and scalars
  $$
  \lambda_1,\ldots,\lambda_k\in\mathbb F,
  $$
  not all equal to zero, such that
  $$
  \lambda_1v_1+\cdots+\lambda_kv_k=0.
  $$
  The set $S$ is linearly independent if it is not linearly dependent.

- **Observation 1.1**
  The set $S$ is linearly dependent if and only if it contains a finite linearly dependent subset.

  If $S'\subseteq S$ and $S'$ is linearly dependent, then $S$ is linearly dependent. Equivalently, if $S$ is linearly independent, then every subset $S'\subseteq S$ is linearly independent. Thus $S$ is linearly independent if and only if every subset of $S$ is linearly independent.

---

- **Definition 2**
  Let $V$ be a vector space over $\mathbb F$. A basis of $V$ is a linearly independent subset of $V$ that generates $V$. If $V$ has a finite basis, then $V$ is said to be finite-dimensional.

- **Example 2.1**
  1. The vector space $\mathbb F^n$ has the canonical basis
     $$
     e_1=(1,0,\ldots,0),
     \quad
     e_2=(0,1,\ldots,0),
     \quad\ldots\quad,
     e_n=(0,0,\ldots,1).
     $$
     Therefore, $\mathbb F^n$ is finite-dimensional.

  2. Another basis of $\mathbb F^n$ is
     $$
     f_1=(1,0,\ldots,0),
     \quad
     f_2=(1,1,0,\ldots,0),
     \quad\ldots\quad,
     f_n=(1,1,\ldots,1).
     $$

  - **Proof 2.1.1**
    For the canonical basis, every vector $(x_1,\ldots,x_n)\in\mathbb F^n$ can be written as
    $$
    (x_1,\ldots,x_n)
    =x_1e_1+\cdots+x_ne_n.
    $$
    Hence $e_1,\ldots,e_n$ generate $\mathbb F^n$.

    If
    $$
    \lambda_1e_1+\cdots+\lambda_ne_n=0,
    $$
    then comparison of the $j$-th coordinate gives $\lambda_j=0$ for every $j\in\{1,\ldots,n\}$. Thus $e_1,\ldots,e_n$ are linearly independent and therefore form a basis of $\mathbb F^n$.

    For the second family, place the vectors $f_1,\ldots,f_n$ as the columns of a matrix
    $$
    A
    =\begin{pmatrix}
      1&1&1&\cdots&1\\
      0&1&1&\cdots&1\\
      0&0&1&\cdots&1\\
      \vdots&\vdots&\vdots&\ddots&\vdots\\
      0&0&0&\cdots&1
    \end{pmatrix}.
    $$
    Applying the row operations
    $$
    R_i\longleftarrow R_i-R_{i+1}
    \qquad
    \text{for }i=1,\ldots,n-1
    $$
    gives
    $$
    A\sim I_n.
    $$
    Therefore, $A$ has rank $n$. Its columns are linearly independent and generate $\mathbb F^n$, so $f_1,\ldots,f_n$ form a basis of $\mathbb F^n$.

- **Remark 2.2**
  Let $A\in M_{n\times n}(\mathbb F)$. If
  $$
  A\sim I_n,
  $$
  then $A$ has rank $n$. Consequently, the columns of $A$ are linearly independent and generate $\mathbb F^n$, so they form a basis of $\mathbb F^n$.

- **Example 2.3**
  Does $\mathbb F[x]$ have a basis? Does it have a finite basis?

  - **Solution 2.3.1**
    Let
    $$
    S=\left\{1,x,x^2,\ldots,x^n,x^{n+1},\ldots\right\}.
    $$
    Every polynomial $p(x)\in\mathbb F[x]$ has the form
    $$
    p(x)=a_0+a_1x+\cdots+a_nx^n
    $$
    for some $n\geqslant0$ and $a_0,\ldots,a_n\in\mathbb F$. Hence $S$ generates $\mathbb F[x]$.

    If
    $$
    a_0+a_1x+\cdots+a_nx^n=0,
    $$
    then equality of polynomials gives
    $$
    a_0=a_1=\cdots=a_n=0.
    $$
    Thus $S$ is linearly independent and therefore is a basis of $\mathbb F[x]$.

    Suppose, for contradiction, that $\mathbb F[x]$ has a finite basis
    $$
    p_1(x),\ldots,p_k(x).
    $$
    Let
    $$
    d=\max\left\{\deg p_1,\ldots,\deg p_k\right\}.
    $$
    Every nonzero linear combination of $p_1,\ldots,p_k$ has degree at most $d$. However,
    $$
    \deg x^{d+1}=d+1,
    $$
    so $x^{d+1}$ cannot belong to $\operatorname{span}(p_1,\ldots,p_k)$. This contradicts the assumption that $p_1,\ldots,p_k$ generate $\mathbb F[x]$. Therefore, $\mathbb F[x]$ has a basis, but it does not have a finite basis.
  
- **Example 2.4**
  Let
  $$
  V=\mathcal F(\{0,1\},\mathbb F).
  $$
  Does $V$ have a basis?

  - **Solution 2.4.1**
    Define $\delta_0,\delta_1\in V$ by
    $$
    \delta_0(0)=1,
    \qquad
    \delta_0(1)=0,
    $$
    and
    $$
    \delta_1(0)=0,
    \qquad
    \delta_1(1)=1.
    $$
    For every $f\in V$,
    $$
    f=f(0)\delta_0+f(1)\delta_1,
    $$
    so $\delta_0$ and $\delta_1$ generate $V$.

    Suppose
    $$
    \lambda_0\delta_0+\lambda_1\delta_1=0.
    $$
    Evaluating at $0$ gives $\lambda_0=0$, and evaluating at $1$ gives $\lambda_1=0$. Hence $\delta_0$ and $\delta_1$ are linearly independent. Therefore,
    $$
    \{\delta_0,\delta_1\}
    $$
    is a basis of $V$.

- **Example 2.5**
  Let
  $$
  V=\mathcal F(\mathbb N,\mathbb F).
  $$
  Does the analogous family form a basis of $V$?

  - **Solution 2.5.1**
    For every $n\in\mathbb N$, define $\delta_n\in V$ by
    $$
    \delta_n(m)
    =\begin{cases}
      1,&m=n,\\
      0,&m\ne n.
    \end{cases}
    $$
    Let
    $$
    D=\{\delta_n:n\in\mathbb N\}.
    $$
    The set $D$ is linearly independent. Indeed, if
    $$
    \lambda_1\delta_{n_1}+\cdots+\lambda_k\delta_{n_k}=0,
    $$
    where $n_1,\ldots,n_k$ are distinct, then evaluation at $n_j$ gives
    $$
    \lambda_j=0
    $$
    for every $j\in\{1,\ldots,k\}$.

    However, every function in $\operatorname{span}(D)$ has finite support. The constant function
    $$
    \mathbf 1(n)=1
    \qquad
    \text{for every }n\in\mathbb N
    $$
    has infinite support, so
    $$
    \mathbf 1\notin\operatorname{span}(D).
    $$
    Therefore, $D$ does not generate $V$ and is not a basis of $V$. It is a basis of the subspace of finitely supported functions in $V$.
