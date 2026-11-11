---
title: "Coordinates"
published: 2026-11-11
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $V$ be a finite-dimensional vector space over $\mathbb F$, with
  $$
  \dim V=n.
  $$
  A basis whose elements are arranged in a fixed order is called an ordered basis. We write
  $$
  \mathcal B=(v_1,\ldots,v_n),
  $$
  where $v_1$ is the first basis vector, $v_2$ is the second, and so on.

  For every $v\in V$, there exist unique scalars
  $$
  \lambda_1,\ldots,\lambda_n\in\mathbb F
  $$
  such that
  $$
  v=\lambda_1v_1+\cdots+\lambda_nv_n.
  $$
  We define the coordinate map
  $$
  [\,\cdot\,]_{\mathcal B}\colon V\longrightarrow\mathbb F^n
  $$
  by
  $$
  [v]_{\mathcal B}
  =
  \begin{pmatrix}
    \lambda_1\\
    \vdots\\
    \lambda_n
  \end{pmatrix}.
  $$
  The scalars $\lambda_1,\ldots,\lambda_n$ are called the coordinates of $v$ with respect to $\mathcal B$.

  The coordinate map is bijective. For every $(\mu_1,\ldots,\mu_n)\in\mathbb F^n$, the vector
  $$
  \mu_1v_1+\cdots+\mu_nv_n
  $$
  has coordinate vector $(\mu_1,\ldots,\mu_n)^{\mathsf T}$, so the map is surjective. Uniqueness of coordinates gives injectivity. In particular,
  $$
  [v]_{\mathcal B}=0
  \iff
  v=0.
  $$

- **Example 1.1**
  Let
  $$
  V=M_{2\times2}(\mathbb C)
  $$
  and let
  $$
  \mathcal B
  =
  \left(
    \begin{pmatrix}1&1\\0&0\end{pmatrix},
    \begin{pmatrix}i&0\\0&-i\end{pmatrix},
    \begin{pmatrix}0&-1\\-1&0\end{pmatrix},
    \begin{pmatrix}0&0\\i&i\end{pmatrix}
  \right).
  $$
  For
  $$
  A=\begin{pmatrix}1&i\\-i&-1\end{pmatrix},
  $$
  we have
  $$
  A
  =
  i\begin{pmatrix}1&1\\0&0\end{pmatrix}
  -(1+i)\begin{pmatrix}i&0\\0&-i\end{pmatrix}
  +0\begin{pmatrix}0&-1\\-1&0\end{pmatrix}
  -\begin{pmatrix}0&0\\i&i\end{pmatrix}.
  $$
  Therefore,
  $$
  [A]_{\mathcal B}
  =
  \begin{pmatrix}
    i\\
    -(1+i)\\
    0\\
    -1
  \end{pmatrix}.
  $$

- **Example 1.2**
  Let
  $$
  V=\mathbb R_3[x]
  $$
  and let
  $$
  \mathcal B
  =
  (1-x,1-x^2,1-x^3,x+x^2+x^3)
  $$
  be an ordered basis of $V$. Suppose that
  $$
  [p(x)]_{\mathcal B}
  =
  \begin{pmatrix}
    1\\
    1\\
    1\\
    2
  \end{pmatrix}.
  $$
  Then
  $$
  \begin{aligned}
  p(x)
  &=(1-x)+(1-x^2)+(1-x^3)+2(x+x^2+x^3)\\
  &=3+x+x^2+x^3.
  \end{aligned}
  $$

- **Question 1.3**
  Let
  $$
  \mathcal B=(v_1,\ldots,v_n)
  \qquad\text{and}\qquad
  \mathcal B'=(w_1,\ldots,w_n)
  $$
  be two ordered bases of $V$. How are $[v]_{\mathcal B}$ and $[v]_{\mathcal B'}$ related?

  For each $j\in\{1,\ldots,n\}$, write
  $$
  w_j=\sum_{i=1}^n p_{ij}v_i.
  $$
  Let
  $$
  [v]_{\mathcal B'}
  =
  \begin{pmatrix}
    \mu_1\\
    \vdots\\
    \mu_n
  \end{pmatrix}
  \qquad\text{and}\qquad
  [v]_{\mathcal B}
  =
  \begin{pmatrix}
    \lambda_1\\
    \vdots\\
    \lambda_n
  \end{pmatrix}.
  $$
  Then
  $$
  \begin{aligned}
  v
  &=\sum_{j=1}^n\mu_jw_j\\
  &=\sum_{j=1}^n\mu_j\left(\sum_{i=1}^np_{ij}v_i\right)\\
  &=\sum_{i=1}^n\left(\sum_{j=1}^np_{ij}\mu_j\right)v_i.
  \end{aligned}
  $$
  By uniqueness of coordinates,
  $$
  \lambda_i=\sum_{j=1}^np_{ij}\mu_j
  \qquad
  \text{for every }i\in\{1,\ldots,n\}.
  $$
  Therefore, if
  $$
  P=(p_{ij})\in M_{n\times n}(\mathbb F),
  $$
  then
  $$
  [v]_{\mathcal B}
  =
  P[v]_{\mathcal B'}.
  $$

  The matrix $P$ is invertible. Indeed, suppose that
  $$
  PX=0,
  \qquad
  X=
  \begin{pmatrix}
    x_1\\
    \vdots\\
    x_n
  \end{pmatrix}.
  $$
  Since the $j$-th column of $P$ is $[w_j]_{\mathcal B}$,
  $$
  PX
  =
  \left[\sum_{j=1}^nx_jw_j\right]_{\mathcal B}.
  $$
  Hence
  $$
  \sum_{j=1}^nx_jw_j=0.
  $$
  The vectors $w_1,\ldots,w_n$ are linearly independent, so
  $$
  x_1=\cdots=x_n=0.
  $$
  Thus $\ker P=\{0\}$, and since $P$ is square, it is invertible. Consequently,
  $$
  [v]_{\mathcal B'}
  =
  P^{-1}[v]_{\mathcal B}.
  $$

- **Notation 1.4**
  The matrix $P$ is called the change-of-basis matrix from $\mathcal B'$ to $\mathcal B$. We may write
  $$
  P=P_{\mathcal B\leftarrow\mathcal B'}.
  $$
  Its inverse
  $$
  P^{-1}=P_{\mathcal B'\leftarrow\mathcal B}
  $$
  is the change-of-basis matrix from $\mathcal B$ to $\mathcal B'$.

- **Observation 1.5**
  The $j$-th column of $P_{\mathcal B\leftarrow\mathcal B'}$ is
  $$
  [w_j]_{\mathcal B}.
  $$

---

- **Theorem 2**
  Let
  $$
  \mathcal B=(v_1,\ldots,v_n)
  \qquad\text{and}\qquad
  \mathcal B'=(w_1,\ldots,w_n)
  $$
  be two ordered bases of $V$. Let $P\in M_{n\times n}(\mathbb F)$ be the matrix whose $j$-th column is $[w_j]_{\mathcal B}$. Then $P$ is invertible and, for every $v\in V$,
  $$
  [v]_{\mathcal B}
  =
  P[v]_{\mathcal B'}
  $$
  and
  $$
  [v]_{\mathcal B'}
  =
  P^{-1}[v]_{\mathcal B}.
  $$

  These identities and the invertibility of $P$ follow from the computation in Question 1.3.

- **Example 2.1**
  Let
  $$
  V=\mathbb R^3,
  $$
  with ordered bases
  $$
  \mathcal B
  =
  \bigl((1,0,0),(1,1,0),(1,1,1)\bigr)
  $$
  and
  $$
  \mathcal B'
  =
  \bigl((1,1,0),(0,1,1),(1,0,1)\bigr).
  $$
  Write
  $$
  w_1=(1,1,0),
  \qquad
  w_2=(0,1,1),
  \qquad
  w_3=(1,0,1).
  $$
  Their coordinates with respect to $\mathcal B$ are
  $$
  [w_1]_{\mathcal B}
  =
  \begin{pmatrix}0\\1\\0\end{pmatrix},
  \qquad
  [w_2]_{\mathcal B}
  =
  \begin{pmatrix}-1\\0\\1\end{pmatrix},
  \qquad
  [w_3]_{\mathcal B}
  =
  \begin{pmatrix}1\\-1\\1\end{pmatrix}.
  $$
  Therefore, the change-of-basis matrix from $\mathcal B'$ to $\mathcal B$ is
  $$
  P_{\mathcal B\leftarrow\mathcal B'}
  =
  \begin{pmatrix}
    0&-1&1\\
    1&0&-1\\
    0&1&1
  \end{pmatrix}.
  $$
  Since
  $$
  \det P_{\mathcal B\leftarrow\mathcal B'}=2\ne0,
  $$
  the matrix is invertible, with
  $$
  P_{\mathcal B'\leftarrow\mathcal B}
  =
  P_{\mathcal B\leftarrow\mathcal B'}^{-1}
  =
  \begin{pmatrix}
    \frac12&1&\frac12\\
    -\frac12&0&\frac12\\
    \frac12&0&\frac12
  \end{pmatrix}.
  $$
  Hence, for every $v\in\mathbb R^3$,
  $$
  [v]_{\mathcal B}
  =
  P_{\mathcal B\leftarrow\mathcal B'}[v]_{\mathcal B'}
  $$
  and
  $$
  [v]_{\mathcal B'}
  =
  P_{\mathcal B'\leftarrow\mathcal B}[v]_{\mathcal B}.
  $$
