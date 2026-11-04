---
title: "Subspaces"
published: 2026-11-02
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $V$ be a vector space over $\mathbb F$. A nonempty subset $W\subseteq V$ is a subspace of $V$ if it is closed under the addition and scalar multiplication of $V$. That is,
  $$
  w_1,w_2\in W
  \implies
  w_1+w_2\in W,
  $$
  and
  $$
  \lambda\in\mathbb F, w\in W
  \implies
  \lambda w\in W.
  $$

- **Remark 1.1**
  The set $W$ is itself a vector space over $\mathbb F$ with the restricted operations
  $$
  +_W
  =\left.+_V\right|_{W\times W}
  \colon W\times W\to W
  $$
  and
  $$
  \cdot_W
  =\left.\cdot_V\right|_{\mathbb F\times W}
  \colon\mathbb F\times W\to W.
  $$

- **Example 1.2**
  1. The sets
     $$
     \{0\}
     \qquad\text{and}\qquad
     V
     $$
     are the trivial subspaces of $V$.

  2. Let $V=\mathbb F^n$. For a fixed $i\in\{1,\ldots,n\}$, let
     $$
     W_i
     =\left\{(x_1,x_2,\ldots,x_n)\in\mathbb F^n:x_i=0\right\}.
     $$
     Another example is
     $$
     W
     =\left\{(x_1,x_2,y,\ldots,y):x_1,x_2,y\in\mathbb F\right\}
     \subseteq V.
     $$

  3. Let $V=\mathbb F[x]$. For every $n\geqslant0$, the set $\mathbb F_n[x]$ is a subspace of $\mathbb F[x]$, and
     $$
     \mathbb F
     =\mathbb F_0[x]
     \subsetneq\mathbb F_1[x]
     \subsetneq\cdots
     \subsetneq\mathbb F_n[x]
     \subsetneq\mathbb F_{n+1}[x]
     \subsetneq\cdots
     \subsetneq\mathbb F[x].
     $$
     Two further examples are
     $$
     W
     =\left\{
       p(x)=\sum_{i=0}^m a_ix^i\in\mathbb F[x]:
       \sum_{i=0}^m a_i=0
     \right\}
     $$
     and
     $$
     W^1
     =\left\{p(x)\in\mathbb F[x]:p(0)=p(1)=0\right\}.
     $$

  4. Let $V=M_{n\times n}(\mathbb F)$. The symmetric and anti-symmetric matrices form the sets
     $$
     S
     =\left\{A\in V:A^{\mathsf T}=A\right\}
     $$
     and
     $$
     K
     =\left\{A\in V:A^{\mathsf T}=-A\right\},
     $$
     respectively. The trace-zero matrices form the set
     $$
     W
     =\left\{B\in V:\operatorname{tr}(B)=0\right\}.
     $$
     For a fixed matrix $A\in V$, the matrices that commute with $A$ form the set
     $$
     W_A
     =\left\{X\in V:AX-XA=0\right\}.
     $$
     For complex matrices, the Hermitian matrices form the set
     $$
     H
     =\left\{A\in M_{n\times n}(\mathbb C):
       A^{\mathsf T}=\overline A
     \right\}.
     $$

  5. Let $X$ be a set, and let
     $$
     V=\mathscr F(X,\mathbb F)
     $$
     be the vector space of functions from $X$ to $\mathbb F$. For fixed elements $x_1,\ldots,x_k\in X$, let
     $$
     W_1
     =\left\{f\in V:f(x_1)=\cdots=f(x_k)=0\right\}.
     $$
     Another example is
     $$
     W_2
     =\left\{f\in V:f(x_1)-f(x_2)=0\right\}.
     $$

  - **Proof 1.2.1**
    **1. Trivial subspaces.** For the zero subspace,
    $$
    0+0=0
    $$
    and, for every $\lambda\in\mathbb F$,
    $$
    \lambda0=0.
    $$
    Hence $\{0\}$ is closed under addition and scalar multiplication. The set $V$ is closed under both operations by the vector-space axioms.

    **2. Subspaces of $\mathbb F^n$.** Let $u,v\in W_i$. Then $u_i=v_i=0$, so
    $$
    (u+v)_i=u_i+v_i=0.
    $$
    Therefore, $u+v\in W_i$. For every $\lambda\in\mathbb F$,
    $$
    (\lambda u)_i=\lambda u_i=0,
    $$
    so $\lambda u\in W_i$.

    Now let
    $$
    u=(x_1,x_2,y,\ldots,y)
    \qquad\text{and}\qquad
    v=(x_1',x_2',y',\ldots,y')
    $$
    belong to $W$. Their sum is
    $$
    u+v
    =(x_1+x_1',x_2+x_2',y+y',\ldots,y+y')\in W.
    $$
    For every $\lambda\in\mathbb F$,
    $$
    \lambda u
    =(\lambda x_1,\lambda x_2,\lambda y,\ldots,\lambda y)\in W.
    $$
    Thus $W$ is also closed under addition and scalar multiplication.

    **3. Subspaces of $\mathbb F[x]$.** Let $p,q\in\mathbb F_n[x]$ and $\lambda\in\mathbb F$. Then
    $$
    \deg(p+q)\leqslant n
    $$
    and
    $$
    \deg(\lambda p)\leqslant n
    $$
    whenever the corresponding polynomial is nonzero. Hence
    $$
    p+q\in\mathbb F_n[x]
    \qquad\text{and}\qquad
    \lambda p\in\mathbb F_n[x].
    $$
    Thus $\mathbb F_n[x]$ is a subspace of $\mathbb F[x]$. Each inclusion in the displayed chain is strict because
    $$
    x^{n+1}\in\mathbb F_{n+1}[x]
    \setminus\mathbb F_n[x].
    $$

    Let
    $$
    p(x)=\sum_{i=0}^m a_ix^i
    \qquad\text{and}\qquad
    q(x)=\sum_{i=0}^k b_ix^i
    $$
    belong to $W$. Adding missing coefficients equal to zero when necessary, the sum of the coefficients of $p+q$ is
    $$
    \sum_i(a_i+b_i)
    =\sum_i a_i+\sum_i b_i
    =0.
    $$
    Therefore, $p+q\in W$. For every $\lambda\in\mathbb F$, the sum of the coefficients of $\lambda p$ is
    $$
    \sum_i\lambda a_i
    =\lambda\sum_i a_i
    =0,
    $$
    so $\lambda p\in W$.

    Finally, let $p,q\in W^1$ and $\lambda\in\mathbb F$. Then
    $$
    (p+q)(0)=p(0)+q(0)=0
    $$
    and
    $$
    (p+q)(1)=p(1)+q(1)=0,
    $$
    so $p+q\in W^1$. Moreover,
    $$
    (\lambda p)(0)=\lambda p(0)=0
    $$
    and
    $$
    (\lambda p)(1)=\lambda p(1)=0,
    $$
    so $\lambda p\in W^1$.

    **4. Subspaces of matrix spaces.** Let $A,B\in S$ and $\lambda\in\mathbb F$. Then
    $$
    (A+B)^{\mathsf T}
    =A^{\mathsf T}+B^{\mathsf T}
    =A+B,
    $$
    and
    $$
    (\lambda A)^{\mathsf T}
    =\lambda A^{\mathsf T}
    =\lambda A.
    $$
    Thus $S$ is closed under addition and scalar multiplication.

    Let $A,B\in K$ and $\lambda\in\mathbb F$. Then
    $$
    (A+B)^{\mathsf T}
    =A^{\mathsf T}+B^{\mathsf T}
    =-A-B
    =-(A+B),
    $$
    and
    $$
    (\lambda A)^{\mathsf T}
    =\lambda A^{\mathsf T}
    =-\lambda A.
    $$
    Hence $K$ is also closed under addition and scalar multiplication.

    Let $B,C\in W$ and $\lambda\in\mathbb F$. Since the trace is linear,
    $$
    \operatorname{tr}(B+C)
    =\operatorname{tr}(B)+\operatorname{tr}(C)
    =0,
    $$
    so $B+C\in W$. Moreover,
    $$
    \operatorname{tr}(\lambda B)
    =\lambda\operatorname{tr}(B)
    =0,
    $$
    so $\lambda B\in W$. Thus $W$ is closed under addition and scalar multiplication.

    For a fixed $A\in V$, let $X,Y\in W_A$ and $\lambda\in\mathbb F$. Then
    $$
    \begin{aligned}
    A(X+Y)-(X+Y)A
      &=(AX-XA)+(AY-YA)\\
      &=0,
    \end{aligned}
    $$
    so $X+Y\in W_A$. Also,
    $$
    \begin{aligned}
    A(\lambda X)-(\lambda X)A
      &=\lambda(AX-XA)\\
      &=0,
    \end{aligned}
    $$
    so $\lambda X\in W_A$. Hence $W_A$ is closed under addition and scalar multiplication.

    Let $A,B\in H$. For addition,
    $$
    (A+B)^{\mathsf T}
    =A^{\mathsf T}+B^{\mathsf T}
    =\overline A+\overline B
    =\overline{A+B},
    $$
    so $A+B\in H$.

    For scalar multiplication, let $\lambda\in\mathbb R$. Since $\overline\lambda=\lambda$,
    $$
    (\lambda A)^{\mathsf T}
    =\lambda A^{\mathsf T}
    =\lambda\overline A
    =\overline\lambda\,\overline A
    =\overline{\lambda A}.
    $$
    Therefore, $\lambda A\in H$ for every $\lambda\in\mathbb R$. Thus $H$ is a real vector subspace of $M_{n\times n}(\mathbb C)$ when the latter is regarded as a vector space over $\mathbb R$.

    However, $H$ is not closed under multiplication by complex scalars. Indeed, $I_n\in H$, but for $\lambda=i\in\mathbb C$,
    $$
    (iI_n)^{\mathsf T}=iI_n
    \qquad\text{while}\qquad
    \overline{iI_n}=-iI_n.
    $$
    Hence $iI_n\notin H$, so $H$ is not a complex vector subspace of $M_{n\times n}(\mathbb C)$.

    **5. Subspaces of function spaces.** Let $f,g\in W_1$ and $\lambda\in\mathbb F$. For every $j\in\{1,\ldots,k\}$,
    $$
    (f+g)(x_j)
    =f(x_j)+g(x_j)
    =0.
    $$
    Therefore, $f+g\in W_1$. Moreover,
    $$
    (\lambda f)(x_j)
    =\lambda f(x_j)
    =0
    $$
    for every $j\in\{1,\ldots,k\}$, so $\lambda f\in W_1$. Thus $W_1$ is closed under addition and scalar multiplication.

    Now let $f,g\in W_2$ and $\lambda\in\mathbb F$. Then
    $$
    \begin{aligned}
    (f+g)(x_1)-(f+g)(x_2)
      &=\bigl(f(x_1)-f(x_2)\bigr)
        +\bigl(g(x_1)-g(x_2)\bigr)\\
      &=0,
    \end{aligned}
    $$
    so $f+g\in W_2$. Moreover,
    $$
    \begin{aligned}
    (\lambda f)(x_1)-(\lambda f)(x_2)
      &=\lambda\bigl(f(x_1)-f(x_2)\bigr)\\
      &=0,
    \end{aligned}
    $$
    so $\lambda f\in W_2$. Hence $W_2$ is closed under addition and scalar multiplication.

- **Example 1.3**
  1. Let $v_1,\ldots,v_k\in V$, and let
     $$
     W
     =\left\{
       \lambda_1v_1+\cdots+\lambda_kv_k:
       \lambda_1,\ldots,\lambda_k\in\mathbb F
     \right\}
     \subseteq V.
     $$
     Thus $W$ is the set of all linear combinations of $v_1,\ldots,v_k$.

  2. Let $A\in M_{m\times n}(\mathbb F)$ and $V=\mathbb F^n$. The solution set of the homogeneous system $AX=0$ is
     $$
     S
     =\left\{X\in\mathbb F^n:AX=0\right\}
     \subseteq V.
     $$
     In particular, the zero solution is
     $$
     X=0\in M_{n\times1}(\mathbb F).
     $$

  - **Proof 1.3.1**
    Let
    $$
    x=\lambda_1v_1+\cdots+\lambda_kv_k
    \qquad\text{and}\qquad
    y=\mu_1v_1+\cdots+\mu_kv_k
    $$
    belong to $W$. Then
    $$
    x+y
    =(\lambda_1+\mu_1)v_1+\cdots
      +(\lambda_k+\mu_k)v_k
    \in W.
    $$
    For every $c\in\mathbb F$,
    $$
    cx
    =(c\lambda_1)v_1+\cdots+(c\lambda_k)v_k
    \in W.
    $$
    Hence $W$ is closed under addition and scalar multiplication.

    Now let $X,Y\in S$ and $\lambda\in\mathbb F$. Since $AX=AY=0$,
    $$
    A(X+Y)=AX+AY=0,
    $$
    so $X+Y\in S$. Moreover,
    $$
    A(\lambda X)=\lambda AX=0,
    $$
    so $\lambda X\in S$. Thus $S$ is closed under addition and scalar multiplication.

    Neither $W$ nor $S$ must be a proper subspace: either one may equal $V$.

- **Proposition 1.4**
  The intersection of a family of subspaces of a vector space $V$ is a subspace. In contrast, the union of subspaces need not be a subspace.

  - **Proof 1.4.1**
    Let $W_i$ be a subspace of $V$ for every $i\in I$, and let
    $$
    W=\bigcap_{i\in I}W_i.
    $$
    Since $0\in W_i$ for every $i\in I$, we have $0\in W$.

    Let $x,y\in W$. Then $x,y\in W_i$ for every $i\in I$. Since each $W_i$ is closed under addition,
    $$
    x+y\in W_i
    \qquad\text{for every }i\in I.
    $$
    Hence $x+y\in W$.

    Let $\lambda\in\mathbb F$. Since each $W_i$ is closed under scalar multiplication,
    $$
    \lambda x\in W_i
    \qquad\text{for every }i\in I.
    $$
    Therefore, $\lambda x\in W$, so $W$ is a subspace of $V$.

    The corresponding statement for unions is false in general. For example, in $\mathbb R^2$, let
    $$
    W_1=\{(x,0):x\in\mathbb R\}
    \qquad\text{and}\qquad
    W_2=\{(0,y):y\in\mathbb R\}.
    $$
    Both are subspaces, but
    $$
    (1,0)\in W_1,
    \qquad
    (0,1)\in W_2,
    $$
    while
    $$
    (1,0)+(0,1)=(1,1)\notin W_1\cup W_2.
    $$
    Thus $W_1\cup W_2$ is not closed under addition.

---

- **Definition 2**
  Let $v_1,\ldots,v_k\in V$. The subspace generated by $v_1,\ldots,v_k$ is the smallest subspace of $V$ containing all of these vectors. Equivalently, it is the intersection of all subspaces of $V$ that contain $v_1,\ldots,v_k$.

- **Notation 2.1**
  The subspace generated by $v_1,\ldots,v_k$ is denoted by
  $$
  \operatorname{span}(v_1,\ldots,v_k)
  =\langle v_1,\ldots,v_k\rangle.
  $$

- **Theorem 2.2**
  Let $v_1,\ldots,v_k\in V$. Then
  $$
  \operatorname{span}(v_1,\ldots,v_k)
  =\left\{
    \lambda_1v_1+\cdots+\lambda_kv_k:
    \lambda_1,\ldots,\lambda_k\in\mathbb F
  \right\}.
  $$

  - **Proof 2.2.1**
    Let
    $$
    W_1=\operatorname{span}(v_1,\ldots,v_k)
    $$
    and
    $$
    W_2
    =\left\{
      \lambda_1v_1+\cdots+\lambda_kv_k:
      \lambda_1,\ldots,\lambda_k\in\mathbb F
    \right\}.
    $$

    First, $W_2$ is a subspace. Indeed, if
    $$
    x=\lambda_1v_1+\cdots+\lambda_kv_k
    \qquad\text{and}\qquad
    y=\mu_1v_1+\cdots+\mu_kv_k,
    $$
    then
    $$
    x+y
    =(\lambda_1+\mu_1)v_1+\cdots
      +(\lambda_k+\mu_k)v_k
    \in W_2.
    $$
    For every $c\in\mathbb F$,
    $$
    cx
    =(c\lambda_1)v_1+\cdots+(c\lambda_k)v_k
    \in W_2.
    $$
    Furthermore, $v_1,\ldots,v_k\in W_2$. Since $W_1$ is the smallest subspace containing these vectors,
    $$
    W_1\subseteq W_2.
    $$

    Conversely, $W_1$ is a subspace containing $v_1,\ldots,v_k$. Hence it contains every linear combination of these vectors, so
    $$
    W_2\subseteq W_1.
    $$
    Therefore, $W_1=W_2$.

- **Example 2.3**
  Let
  $$
  V=\mathbb R^3,
  \qquad
  v_1=(1,1,1),
  \qquad
  v_2=(-2,0,1),
  \qquad
  v_3=(-1,1,2).
  $$
  Find $\operatorname{span}(v_1,v_2,v_3)$.

  - **Solution 2.3.1**
    Since
    $$
    v_3=v_1+v_2,
    $$
    we have
    $$
    \operatorname{span}(v_1,v_2,v_3)
    =\operatorname{span}(v_1,v_2).
    $$
    A general linear combination is
    $$
    av_1+bv_2
    =(a-2b,a,a+b),
    \qquad a,b\in\mathbb R.
    $$
    Every such vector $(x,y,z)$ satisfies
    $$
    x-3y+2z=0.
    $$
    Conversely, if $(x,y,z)$ satisfies this equation, take
    $$
    a=y,
    \qquad
    b=\frac{y-x}{2}.
    $$
    Then $(x,y,z)=av_1+bv_2$. Therefore,
    $$
    \operatorname{span}(v_1,v_2,v_3)
    =\left\{(x,y,z)\in\mathbb R^3:x-3y+2z=0\right\}.
    $$

---

- **Definition 3**
  Let $W_1,\ldots,W_k$ be subsets of an $\mathbb F$-vector space $V$. Their sum is
  $$
  W_1+\cdots+W_k
  =\left\{w_1+\cdots+w_k:w_i\in W_i\right\}.
  $$

- **Remark 3.1**
  If $W_1,\ldots,W_k$ are subspaces, then $W_1+\cdots+W_k$ is a subspace. Moreover,
  $$
  W_1+\cdots+W_k
  =\left\langle W_1\cup\cdots\cup W_k\right\rangle.
  $$

  - **Proof 3.1.1**
    Since $0\in W_i$ for every $i$, we have $0\in W_1+\cdots+W_k$.

    Let
    $$
    x=x_1+\cdots+x_k
    \qquad\text{and}\qquad
    y=y_1+\cdots+y_k
    $$
    belong to $W_1+\cdots+W_k$, where $x_i,y_i\in W_i$. Then
    $$
    x+y=(x_1+y_1)+\cdots+(x_k+y_k)
    \in W_1+\cdots+W_k.
    $$
    For every $\lambda\in\mathbb F$,
    $$
    \lambda x=\lambda x_1+\cdots+\lambda x_k
    \in W_1+\cdots+W_k.
    $$
    Hence $W_1+\cdots+W_k$ is a subspace.

    This subspace contains every $W_i$, so
    $$
    \left\langle W_1\cup\cdots\cup W_k\right\rangle
    \subseteq W_1+\cdots+W_k.
    $$
    Conversely, every element of $W_1+\cdots+W_k$ is a linear combination of elements of $W_1\cup\cdots\cup W_k$. Therefore,
    $$
    W_1+\cdots+W_k
    \subseteq\left\langle W_1\cup\cdots\cup W_k\right\rangle.
    $$
    Thus the two subspaces are equal.

- **Example 3.2**
  Let
  $$
  V=\mathbb R^2,
  \qquad
  v_1=(1,1),
  \qquad
  v_2=(-1,1).
  $$
  Then

  1. $\{v_1\}\cup\{v_2\}=\{v_1,v_2\}$.
  2. $\{v_1\}+\{v_2\}=\{v_1+v_2\}$.
  3. $\langle v_1\rangle\cup\langle v_2\rangle$ is the union of two lines.
  4. $\langle v_1\rangle+\langle v_2\rangle=\mathbb R^2$.

- **Example 3.3**
  Let
  $$
  W_1=\langle(1,1)\rangle,
  \qquad
  W_2=\langle(-1,1)\rangle,
  \qquad
  W_3=\langle(1,2)\rangle.
  $$
  Then

  1. $W_1+W_2+W_3=\mathbb R^2$.
  2. $W_i+W_j=\mathbb R^2$ whenever $i\ne j$.

  - **Proof 3.3.1**
    The determinants formed by the three pairs of generating vectors are
    $$
    \begin{vmatrix}1&-1\\1&1\end{vmatrix}=2,
    \qquad
    \begin{vmatrix}1&1\\1&2\end{vmatrix}=1,
    \qquad
    \begin{vmatrix}-1&1\\1&2\end{vmatrix}=-3.
    $$
    Since all three determinants are nonzero, every pair of generating vectors spans $\mathbb R^2$. Hence $W_i+W_j=\mathbb R^2$ for $i\ne j$, and consequently $W_1+W_2+W_3=\mathbb R^2$.

- **Example 3.4**
  Let $\mathbb F$ be a field of characteristic different from $2$, and let
  $$
  V=M_{n\times n}(\mathbb F),
  \qquad
  V^+=\left\{A\in V:A^{\mathsf T}=A\right\},
  \qquad
  V^-=\left\{A\in V:A^{\mathsf T}=-A\right\}.
  $$
  Thus $V^+$ is the subspace of symmetric matrices and $V^-$ is the subspace of anti-symmetric matrices. Then
  $$
  V^++V^-=V.
  $$

  - **Proof 3.4.1**
    Let $A\in V$. Then
    $$
    A
    =\frac{A+A^{\mathsf T}}{2}
     +\frac{A-A^{\mathsf T}}{2},
    $$
    where
    $$
    \frac{A+A^{\mathsf T}}{2}\in V^+
    \qquad\text{and}\qquad
    \frac{A-A^{\mathsf T}}{2}\in V^-.
    $$
    Therefore, $V^++V^-=V$.

    Moreover, this decomposition is unique. Suppose
    $$
    A=A^++A^-=B^++B^-,
    $$
    where $A^+,B^+\in V^+$ and $A^-,B^-\in V^-$. Then
    $$
    B^--A^-=A^+-B^+.
    $$
    The left-hand side belongs to $V^-$, while the right-hand side belongs to $V^+$. If $C\in V^+\cap V^-$, then
    $$
    C^{\mathsf T}=C
    \qquad\text{and}\qquad
    C^{\mathsf T}=-C,
    $$
    so $2C=0$. Since the characteristic of $\mathbb F$ is not $2$, we obtain $C=0$. Hence
    $$
    B^--A^-=A^+-B^+=0,
    $$
    and the decomposition is unique.

- **Example 3.5**
  Let
  $$
  V=\mathbb C^4,
  $$
  $$
  W_1
  =\left\langle(0,1,0,i),(1,1,0,0)\right\rangle,
  \qquad
  W_2
  =\left\langle(-1,i,1,\lambda),(0,0,1,1)\right\rangle.
  $$
  Find $W_1+W_2$ and $W_1\cap W_2$.

  - **Solution 3.5.1**
    Set
    $$
    u_1=(0,1,0,i),
    \quad
    u_2=(1,1,0,0),
    \quad
    v_1=(-1,i,1,\lambda),
    \quad
    v_2=(0,0,1,1).
    $$
    Consider a linear relation
    $$
    au_1+bu_2+cv_1+dv_2=0.
    $$
    Comparing coordinates gives
    $$
    b-c=0,
    \qquad
    a+b+ic=0,
    \qquad
    c+d=0,
    \qquad
    ia+\lambda c+d=0.
    $$
    Hence
    $$
    b=c,
    \qquad
    a=-(1+i)c,
    \qquad
    d=-c,
    \qquad
    (\lambda-i)c=0.
    $$

    If $\lambda\ne i$, then $c=0$, and consequently $a=b=d=0$. Thus $u_1,u_2,v_1,v_2$ are linearly independent, so
    $$
    W_1+W_2=\mathbb C^4
    \qquad\text{and}\qquad
    W_1\cap W_2=\{0\}.
    $$

    If $\lambda=i$, then
    $$
    -(1+i)u_1+u_2+v_1-v_2=0.
    $$
    The vectors $u_1,u_2,v_1$ are linearly independent, so $W_1+W_2$ is three-dimensional. More precisely,
    $$
    \begin{aligned}
    W_1+W_2
    &=\langle u_1,u_2,v_1\rangle\\
    &=\left\{(x_1,x_2,x_3,x_4)\in\mathbb C^4:
      ix_1-ix_2-x_3+x_4=0\right\}.
    \end{aligned}
    $$
    Furthermore,
    $$
    u_2-(1+i)u_1
    =v_2-v_1
    =(1,-i,0,1-i),
    $$
    so
    $$
    W_1\cap W_2
    =\left\langle(1,-i,0,1-i)\right\rangle.
    $$
