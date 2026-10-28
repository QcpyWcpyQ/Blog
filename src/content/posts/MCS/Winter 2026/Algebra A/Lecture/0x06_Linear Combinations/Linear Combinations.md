---
title: "Linear Combinations"
published: 2026-10-28
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $V$ be a vector space over $\mathbb F$, and let $v_1,v_2,\ldots,v_k\in V$. A linear combination of these vectors is a vector $v\in V$ of the form
  $$
  v=\lambda_1v_1+\cdots+\lambda_kv_k
  $$
  for some scalars $\lambda_1,\ldots,\lambda_k\in\mathbb F$.

  - **Observation 1.1**
    1. The zero vector is always a linear combination of $v_1,\ldots,v_k$.
    2. If $v$ is a linear combination of $v_1,\ldots,v_k$, then $\lambda v$ is also a linear combination of them for every $\lambda\in\mathbb F$.
    3. If $v$ and $w$ are linear combinations of $v_1,\ldots,v_k$, then $v+w$ is also a linear combination of them.

    - **Proof 1.1.1**
      The zero vector has the representation
      $$
      0=0v_1+\cdots+0v_k.
      $$
      If
      $$
      v=\lambda_1v_1+\cdots+\lambda_kv_k,
      $$
      then, for every $\lambda\in\mathbb F$,
      $$
      \lambda v
      =(\lambda\lambda_1)v_1+\cdots+(\lambda\lambda_k)v_k.
      $$
      Finally, if
      $$
      v=\lambda_1v_1+\cdots+\lambda_kv_k
      \qquad\text{and}\qquad
      w=\mu_1v_1+\cdots+\mu_kv_k,
      $$
      then
      $$
      v+w
      =(\lambda_1+\mu_1)v_1+\cdots+(\lambda_k+\mu_k)v_k.
      $$

- **Example 1.2**
  Let
  $$
  V=\mathbb R^2,\qquad
  v_1=(1,1),\qquad
  v_2=(2,1).
  $$
  Which vectors are linear combinations of $v_1$ and $v_2$?

  - **Solution 1.2.1**
    A vector $(a,b)\in\mathbb R^2$ is a linear combination of $v_1$ and $v_2$ if and only if there exist $\lambda_1,\lambda_2\in\mathbb R$ such that
    $$
    \begin{aligned}
    (a,b)
      &=\lambda_1(1,1)+\lambda_2(2,1)\\
      &=(\lambda_1+2\lambda_2,\lambda_1+\lambda_2).
    \end{aligned}
    $$
    Thus, we must solve
    $$
    \begin{cases}
    \lambda_1+2\lambda_2=a,\\
    \lambda_1+\lambda_2=b.
    \end{cases}
    $$
    Subtracting the second equation from the first gives
    $$
    \lambda_2=a-b,
    $$
    and then
    $$
    \lambda_1=2b-a.
    $$
    Therefore, every $(a,b)\in\mathbb R^2$ is a linear combination of $v_1$ and $v_2$, and the coefficients are unique.

- **Example 1.3**
  Let
  $$
  V=\mathbb R^3,\qquad
  v_1=(1,1,1),\qquad
  v_2=(1,0,2).
  $$
  Both vectors are orthogonal to
  $$
  u=(2,-1,-1),
  $$
  because
  $$
  v_1\cdot u=2-1-1=0
  \qquad\text{and}\qquad
  v_2\cdot u=2-2=0.
  $$
  Hence every linear combination of $v_1$ and $v_2$ is contained in the plane perpendicular to $u$.

  1. Is every point in that plane a linear combination of $v_1$ and $v_2$?
  2. How can the plane be described implicitly?

  - **Solution 1.3.1**
    A vector $(a,b,c)\in\mathbb R^3$ is a linear combination of $v_1$ and $v_2$ if and only if there exist $\lambda_1,\lambda_2\in\mathbb R$ such that
    $$
    \begin{aligned}
    (a,b,c)
      &=\lambda_1(1,1,1)+\lambda_2(1,0,2)\\
      &=(\lambda_1+\lambda_2,\lambda_1,\lambda_1+2\lambda_2).
    \end{aligned}
    $$
    The first two coordinates give
    $$
    \lambda_1=b
    \qquad\text{and}\qquad
    \lambda_2=a-b.
    $$
    The third coordinate can then be satisfied if and only if
    $$
    c=b+2(a-b)=2a-b,
    $$
    or equivalently,
    $$
    -2a+b+c=0.
    $$
    Thus every point in the plane perpendicular to $u$ is a linear combination of $v_1$ and $v_2$, and the implicit description of the plane is
    $$
    P=\{(a,b,c)\in\mathbb R^3:-2a+b+c=0\}.
    $$

- **Example 1.4**
  Let
  $$
  V=\mathbb C_3[x],
  \qquad
  p_1(x)=x-1,
  \qquad
  p_2(x)=x^2-1,
  \qquad
  p_3(x)=x^3-1.
  $$
  Since $p_i(1)=0$ for $i=1,2,3$, every linear combination of $p_1,p_2,p_3$ vanishes at $1$.

  Is every polynomial $p(x)\in\mathbb C_3[x]$ satisfying $p(1)=0$ a linear combination of $p_1,p_2,p_3$?

  - **Solution 1.4.1**
    Let $p(x)\in\mathbb C_3[x]$ satisfy $p(1)=0$. By the factor theorem,
    $$
    p(x)=(x-1)q(x),
    $$
    where $\deg q\leqslant2$. Write
    $$
    q(x)=a+bx+cx^2.
    $$
    Since
    $$
    x(x-1)=p_2(x)-p_1(x)
    $$
    and
    $$
    x^2(x-1)=p_3(x)-p_2(x),
    $$
    we obtain
    $$
    \begin{aligned}
    p(x)
      &=(x-1)(a+bx+cx^2)\\
      &=ap_1(x)+b\bigl(p_2(x)-p_1(x)\bigr)
        +c\bigl(p_3(x)-p_2(x)\bigr)\\
      &=(a-b)p_1(x)+(b-c)p_2(x)+cp_3(x).
    \end{aligned}
    $$
    Therefore, every polynomial in $\mathbb C_3[x]$ that vanishes at $1$ is a linear combination of $p_1,p_2,p_3$.

---

- **Definition 2**
  A list of vectors $v_1,\ldots,v_k\in V$ is linearly independent if the zero vector is a linear combination of them in a unique and trivial way.

- **Remark 2.1**
  Equivalently, the list $v_1,\ldots,v_k$ is linearly independent if and only if
  $$
  0=\lambda_1v_1+\cdots+\lambda_kv_k
  \implies
  \lambda_1=\cdots=\lambda_k=0.
  $$
  The list is linearly dependent if and only if there exist scalars $\lambda_1,\ldots,\lambda_k$, not all zero, such that
  $$
  0=\lambda_1v_1+\cdots+\lambda_kv_k.
  $$

- **Observation 2.2**
  Let $v_1,\ldots,v_k\in V$.

  1. If $v_i=0$ for some $i$, then the list is linearly dependent.
  2. If $v_i=v$ and $v_j=\lambda v$ for some $i\neq j$ and $\lambda\in\mathbb F$, then the list is linearly dependent.
  3. If the list is linearly dependent and
     $$
     0=\lambda_1v_1+\cdots+\lambda_kv_k
     $$
     with $\lambda_i\neq0$, then
     $$
     v_i
     =-\sum_{\substack{1\leqslant j\leqslant k\\j\neq i}}
       \frac{\lambda_j}{\lambda_i}v_j.
     $$

  - **Proof 2.2.1**
    1. Set the coefficient of $v_i=0$ equal to $1$ and all other coefficients equal to $0$. This gives a nontrivial linear combination equal to zero.
    2. Since $v_i=v$ and $v_j=\lambda v$, we have
       $$
       \lambda v_i-v_j=0.
       $$
       The two displayed coefficients are not both zero, so the list is linearly dependent.
    3. Starting from the given relation, move every term except $\lambda_iv_i$ to the other side:
       $$
       \lambda_iv_i
       =-\sum_{\substack{1\leqslant j\leqslant k\\j\neq i}}\lambda_jv_j.
       $$
       Since $\lambda_i\neq0$, division by $\lambda_i$ gives the stated formula.

- **Lemma 2.3**
  Let $v_1,\ldots,v_k\in V$ be a linearly independent list. Every vector $v$ that is a linear combination of $v_1,\ldots,v_k$ has a unique representation
  $$
  v=\lambda_1v_1+\cdots+\lambda_kv_k.
  $$

  - **Proof 2.3.1**
    Suppose that
    $$
    v=\lambda_1v_1+\cdots+\lambda_kv_k
    $$
    and
    $$
    v=\mu_1v_1+\cdots+\mu_kv_k.
    $$
    Subtracting the two representations gives
    $$
    0
    =(\lambda_1-\mu_1)v_1+\cdots+(\lambda_k-\mu_k)v_k.
    $$
    Since $v_1,\ldots,v_k$ are linearly independent,
    $$
    \lambda_i-\mu_i=0
    \qquad\text{for every }i.
    $$
    Therefore, $\lambda_i=\mu_i$ for every $i$, so the representation is unique.
