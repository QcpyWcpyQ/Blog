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

- **Theorem 2.6**
  Let $V$ be an $\mathbb F$-vector space generated by $m$ vectors $v_1,\ldots,v_m$. Then every linearly independent set in $V$ is finite and has at most $m$ elements.

  - **Proof 2.6.1**
    Let $w_1,\ldots,w_n\in V$, where $n>m$. Since $v_1,\ldots,v_m$ generate $V$, for every $j\in\{1,\ldots,n\}$ there exist scalars $a_{1j},\ldots,a_{mj}\in\mathbb F$ such that
    $$
    w_j=\sum_{i=1}^m a_{ij}v_i.
    $$
    Let
    $$
    A=(a_{ij})\in M_{m\times n}(\mathbb F)
    \qquad\text{and}\qquad
    \lambda=
    \begin{pmatrix}
    \lambda_1\\
    \vdots\\
    \lambda_n
    \end{pmatrix}.
    $$
    Since $n>m$, the homogeneous system
    $$
    A\lambda=0
    $$
    has a nonzero solution. For this solution,
    $$
    \begin{aligned}
    \lambda_1w_1+\cdots+\lambda_nw_n
    &=\sum_{j=1}^n\lambda_j
      \left(\sum_{i=1}^m a_{ij}v_i\right)\\
    &=\sum_{i=1}^m
      \left(\sum_{j=1}^n a_{ij}\lambda_j\right)v_i\\
    &=0.
    \end{aligned}
    $$
    The coefficients $\lambda_1,\ldots,\lambda_n$ are not all zero, so $w_1,\ldots,w_n$ are linearly dependent.

    Thus a linearly independent set in $V$ cannot contain more than $m$ vectors. In particular, it must be finite.

- **Corollary 2.7**
  If $V$ is a finite-dimensional vector space, then any two bases of $V$ have the same number of vectors. In particular, $V$ has no infinite basis.

  - **Proof 2.7.1**
    Let
    $$
    v_1,\ldots,v_n
    $$
    be a basis of $V$, and let $S$ be another basis. Since $v_1,\ldots,v_n$ generate $V$ and $S$ is linearly independent, Theorem 2.6 implies that $S$ is finite. Write
    $$
    S=\{w_1,\ldots,w_m\}.
    $$
    Applying Theorem 2.6 to the generating set $v_1,\ldots,v_n$ and the linearly independent set $w_1,\ldots,w_m$ gives
    $$
    m\leqslant n.
    $$
    Reversing the roles of the two bases gives
    $$
    n\leqslant m.
    $$
    Hence $m=n$.

- **Notation 2.8**
  The dimension $\dim V$ of a finite-dimensional vector space $V$ is the number of vectors in any basis of $V$. By convention,
  $$
  \dim\{0\}=0.
  $$

- **Corollary 2.9**
  Let $V$ be a vector space such that $\dim V=n$.

  1. Any subset of $V$ with more than $n$ elements is linearly dependent.
  2. No subset of $V$ with fewer than $n$ elements generates $V$.

  - **Proof 2.9.1**
    Let $v_1,\ldots,v_n$ be a basis of $V$.

    1. Since $v_1,\ldots,v_n$ generate $V$, Theorem 2.6 implies that every linearly independent subset of $V$ has at most $n$ elements. Therefore, every subset with more than $n$ elements is linearly dependent.

    2. Suppose that $w_1,\ldots,w_m$ generate $V$, where $m<n$. Since $v_1,\ldots,v_n$ are linearly independent, Theorem 2.6 applied to the generating set $w_1,\ldots,w_m$ gives
       $$
       n\leqslant m,
       $$
       a contradiction. Hence no set with fewer than $n$ elements generates $V$.

- **Lemma 2.10**
  Let $S$ be a linearly independent subset of $V$. If
  $$
  w\notin\langle S\rangle,
  $$
  then $S\cup\{w\}$ is linearly independent.

  - **Proof 2.10.1**
    Choose distinct vectors $v_1,\ldots,v_m\in S$ and suppose that
    $$
    \lambda_1v_1+\cdots+\lambda_mv_m+\lambda w=0.
    $$
    If $\lambda=0$, then the linear independence of $S$ implies that
    $$
    \lambda_1=\cdots=\lambda_m=0.
    $$
    If $\lambda\ne0$, then
    $$
    w=-\frac{\lambda_1}{\lambda}v_1-\cdots-\frac{\lambda_m}{\lambda}v_m
    \in\langle S\rangle,
    $$
    which is a contradiction. Thus every finite linear relation among vectors in $S\cup\{w\}$ is trivial, so $S\cup\{w\}$ is linearly independent.

- **Theorem 2.11**
  Let $V$ be a finite-dimensional vector space and let $W$ be a subspace of $V$. Then every linearly independent subset of $W$ can be extended to a basis of $W$.

  - **Proof 2.11.1**
    Let $S\subseteq W$ be linearly independent. Since $S$ is also a linearly independent subset of the finite-dimensional vector space $V$, Theorem 2.6 implies that $S$ is finite.

    If $\langle S\rangle=W$, then $S$ is already a basis of $W$. Otherwise, choose
    $$
    w_1\in W\setminus\langle S\rangle.
    $$
    By Lemma 2.10, the set
    $$
    S\cup\{w_1\}
    $$
    is linearly independent. If it does not generate $W$, choose
    $$
    w_2\in W\setminus\langle S\cup\{w_1\}\rangle
    $$
    and apply Lemma 2.10 again.

    Continuing in this way produces larger linearly independent subsets of $V$. By Corollary 2.9, none can have more than $\dim V$ elements. Therefore, the process terminates after finitely many steps with a linearly independent set that generates $W$. This set is a basis of $W$ containing $S$.

- **Corollary 2.12**
  If $0\ne W$ is a proper subspace of $V$ and $\dim V=n$, then $W$ is finite-dimensional and
  $$
  \dim W<n.
  $$

  - **Proof 2.12.1**
    Choose a nonzero vector $w_1\in W$. The set $\{w_1\}$ is linearly independent, so Theorem 2.11 extends it to a basis
    $$
    w_1,\ldots,w_m
    $$
    of $W$. Since this basis is also linearly independent in $V$, Corollary 2.9 gives
    $$
    m\leqslant n.
    $$
    If $m=n$, choose $v\in V\setminus W$, which is possible because $W$ is proper. Since
    $$
    v\notin\langle w_1,\ldots,w_n\rangle=W,
    $$
    Lemma 2.10 implies that
    $$
    \{w_1,\ldots,w_n,v\}
    $$
    is linearly independent. This contradicts Corollary 2.9. Hence $m<n$, so $W$ is finite-dimensional and $\dim W<n$.

- **Corollary 2.13**
  If $V$ is finite-dimensional, every linearly independent subset of $V$ can be extended to a basis of $V$.

  - **Proof 2.13.1**
    Apply Theorem 2.11 with $W=V$.

- **Corollary 2.14**
  Let $A\in M_{n\times n}(\mathbb F)$. If the rows of $A$ form a linearly independent subset of $\mathbb F^n$, then $A$ is invertible.

  - **Proof 2.14.1**
    Let the rows of $A$ be
    $$
    \alpha_1,\ldots,\alpha_n.
    $$
    Since they are $n$ linearly independent vectors in the $n$-dimensional vector space $\mathbb F^n$, they form a basis. Hence, for every $i\in\{1,\ldots,n\}$, there exist unique scalars $b_{i1},\ldots,b_{in}\in\mathbb F$ such that
    $$
    e_i=\sum_{j=1}^n b_{ij}\alpha_j.
    $$
    Let
    $$
    B=(b_{ij})\in M_{n\times n}(\mathbb F).
    $$
    The $i$-th row of $BA$ is $e_i$, so
    $$
    BA=I_n.
    $$
    Therefore, $A$ is invertible.

- **Observation 2.15**
  The same conclusion holds if the columns of $A$ are linearly independent. Indeed, the rows of $A^\top$ are then linearly independent, so Corollary 2.14 implies that $A^\top$, and hence $A$, is invertible. Equivalently, if
  $$
  A^\top B=I_n,
  $$
  then transposing gives
  $$
  B^\top A=I_n.
  $$
