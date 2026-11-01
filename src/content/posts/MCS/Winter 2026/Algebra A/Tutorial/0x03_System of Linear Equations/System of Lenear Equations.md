---
title: "Linear Systems and Vector Spaces"
published: 2026-10-30
description: "Tutorial solutions on affine solution sets, parameter-dependent systems, elementary matrices, subspaces, and linear combinations."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let $A\in M_{m\times n}(\mathbb F)$ and $b\in\mathbb F^m$. Assume that $Ax=b$ is consistent, and let $x_0$ be one of its solutions. Prove that
  $$
  S_b=x_0+S_0,
  $$
  where $S_b$ and $S_0$ are the solution sets of $Ax=b$ and $Ax=0$, respectively, and
  $$
  x_0+S_0=\{x_0+v:v\in S_0\}.
  $$

  - **Proof 1.1**
    We prove both inclusions.

    Let $x\in S_b$. Then $Ax=b$, while $Ax_0=b$. Hence
    $$
    A(x-x_0)=Ax-Ax_0=b-b=0.
    $$
    Therefore $x-x_0\in S_0$. Writing $v=x-x_0$, we obtain
    $$
    x=x_0+v\in x_0+S_0.
    $$
    Thus
    $$
    S_b\subseteq x_0+S_0.
    $$

    Conversely, let $x\in x_0+S_0$. Then $x=x_0+v$ for some $v\in S_0$. Since $Ax_0=b$ and $Av=0$,
    $$
    Ax=A(x_0+v)=Ax_0+Av=b+0=b.
    $$
    Hence $x\in S_b$, so
    $$
    x_0+S_0\subseteq S_b.
    $$
    Therefore,
    $$
    \boxed{S_b=x_0+S_0}.
    $$

---

- **Exercise 2**
  Consider the system $Ax=b$, where
  $$
  A=
  \begin{bmatrix}
  1&2&-1&1\\
  2&5&0&3\\
  3&7&-1&4
  \end{bmatrix},
  \qquad
  b=
  \begin{bmatrix}
  p\\q\\r
  \end{bmatrix}
  \in\mathbb R^3.
  $$

  1. Determine for which values of $p,q,r$ the system $Ax=b$ is consistent, and find one solution whenever it is consistent.
  2. Solve the associated homogeneous system $Ax=0$. Use Exercise 1 to describe the complete solution set of $Ax=b$.

  - **Solution 2.1 (Consistency and one solution)**
    Row reduction of the augmented matrix gives
    $$
    \begin{aligned}
    \left[
    \begin{array}{cccc|c}
    1&2&-1&1&p\\
    2&5&0&3&q\\
    3&7&-1&4&r
    \end{array}
    \right]
    &\xrightarrow{\substack{R_2\leftarrow R_2-2R_1\\R_3\leftarrow R_3-3R_1}}
    \left[
    \begin{array}{cccc|c}
    1&2&-1&1&p\\
    0&1&2&1&q-2p\\
    0&1&2&1&r-3p
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-R_2}
    \left[
    \begin{array}{cccc|c}
    1&2&-1&1&p\\
    0&1&2&1&q-2p\\
    0&0&0&0&r-p-q
    \end{array}
    \right].
    \end{aligned}
    $$
    The system is consistent exactly when
    $$
    r-p-q=0.
    $$
    Thus
    $$
    \boxed{Ax=b\text{ is consistent if and only if }r=p+q.}
    $$

    Suppose that $r=p+q$. Setting the free variables $x_3=x_4=0$ gives
    $$
    x_2=q-2p,
    $$
    and then
    $$
    x_1=p-2x_2=5p-2q.
    $$
    Therefore, one solution is
    $$
    \boxed{
    x_0=
    \begin{bmatrix}
    5p-2q\\q-2p\\0\\0
    \end{bmatrix}}.
    $$

  - **Solution 2.2 (The homogeneous and complete solution sets)**
    For the homogeneous system, continue the row reduction with
    $$
    R_1\leftarrow R_1-2R_2.
    $$
    This gives
    $$
    \begin{bmatrix}
    1&0&-5&-1\\
    0&1&2&1\\
    0&0&0&0
    \end{bmatrix}.
    $$
    Hence
    $$
    x_1=5x_3+x_4,
    \qquad
    x_2=-2x_3-x_4.
    $$
    Set $x_3=s$ and $x_4=t$. Then
    $$
    \boxed{
    S_0=left\{
    s\begin{bmatrix}5\\-2\\1\\0\end{bmatrix}
    +t\begin{bmatrix}1\\-1\\0\\1\end{bmatrix}
    :s,t\in\mathbb R
    \right\}.}
    $$

    When $r=p+q$, Exercise 1 gives $S_b=x_0+S_0$. Therefore,
    $$
    \boxed{
    S_b=left\{
    \begin{bmatrix}
    5p-2q+5s+t\\
    q-2p-2s-t\\
    s\\t
    \end{bmatrix}
    :s,t\in\mathbb R
    \right\}.}
    $$
    When $r\neq p+q$, the solution set is empty.

---

- **Exercise 3**
  Let
  $$
  A=
  \begin{bmatrix}
  0&1&1\\
  1&2&0\\
  0&1&3
  \end{bmatrix}.
  $$

  1. Reduce $A$ to $I_3$ using elementary row operations. Find the corresponding elementary matrices $E_1,\ldots,E_k$ and use them to find $A^{-1}$.
  2. Find $A^{-1}$ by reducing the augmented matrix $[A\mid I_3]$ to $[I_3\mid A^{-1}]$. Compare the answer with part 1.

  - **Solution 3.1 (Elementary matrices)**
    Use the row operations
    $$
    \begin{aligned}
    R_1&\leftrightarrow R_2,\\
    R_3&\leftarrow R_3-R_2,\\
    R_3&\leftarrow\frac12R_3,\\
    R_2&\leftarrow R_2-R_3,\\
    R_1&\leftarrow R_1-2R_2.
    \end{aligned}
    $$
    They reduce $A$ as follows:
    $$
    \begin{aligned}
    \begin{bmatrix}0&1&1\\1&2&0\\0&1&3\end{bmatrix}
    &\sim
    \begin{bmatrix}1&2&0\\0&1&1\\0&1&3\end{bmatrix}
    \sim
    \begin{bmatrix}1&2&0\\0&1&1\\0&0&2\end{bmatrix}
    \sim
    \begin{bmatrix}1&2&0\\0&1&1\\0&0&1\end{bmatrix}\\[1ex]
    &\sim
    \begin{bmatrix}1&2&0\\0&1&0\\0&0&1\end{bmatrix}
    \sim
    \begin{bmatrix}1&0&0\\0&1&0\\0&0&1\end{bmatrix}.
    \end{aligned}
    $$

    The corresponding elementary matrices are
    $$
    \begin{aligned}
    E_1&=\begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix},
    &E_2&=\begin{bmatrix}1&0&0\\0&1&0\\0&-1&1\end{bmatrix},\\[1ex]
    E_3&=\begin{bmatrix}1&0&0\\0&1&0\\0&0&\frac12\end{bmatrix},
    &E_4&=\begin{bmatrix}1&0&0\\0&1&-1\\0&0&1\end{bmatrix},\\[1ex]
    E_5&=\begin{bmatrix}1&-2&0\\0&1&0\\0&0&1\end{bmatrix}.
    \end{aligned}
    $$
    Since
    $$
    E_5E_4E_3E_2E_1A=I_3,
    $$
    we obtain
    $$
    \begin{aligned}
    A^{-1}=E_5E_4E_3E_2E_1
    =\boxed{
    \begin{bmatrix}
    -3&1&1\\
    \frac32&0&-\frac12\\
    -\frac12&0&\frac12
    \end{bmatrix}}.
    \end{aligned}
    $$

  - **Solution 3.2 (The augmented matrix)**
    Apply the same row operations to $[A\mid I_3]$:
    $$
    \left[
    \begin{array}{ccc|ccc}
    0&1&1&1&0&0\\
    1&2&0&0&1&0\\
    0&1&3&0&0&1
    \end{array}
    \right]
    \longrightarrow
    \left[
    \begin{array}{ccc|ccc}
    1&0&0&-3&1&1\\
    0&1&0&\frac32&0&-\frac12\\
    0&0&1&-\frac12&0&\frac12
    \end{array}
    \right].
    $$
    Therefore,
    $$
    \boxed{
    A^{-1}=
    \begin{bmatrix}
    -3&1&1\\
    \frac32&0&-\frac12\\
    -\frac12&0&\frac12
    \end{bmatrix},}
    $$
    which agrees with the result from the elementary matrices.

---

- **Exercise 4**
  Using the subspace criterion, determine which of the following subsets are vector spaces with the inherited operations. Justify each answer using the subspace criterion or a counterexample.

  In $\mathbb R^3$:
  $$
  \begin{aligned}
  W_1&=\{(x,y,z):x+y-z=0\},\\
  W_2&=\{(x,y,z):x+y-z=1\},\\
  W_3&=\{(x,y,z):x\geqslant0\},\\
  W_4&=\{(x,y,z):xy=0\},\\
  W_5&=\{(t,2t,-t):t\in\mathbb R\}.
  \end{aligned}
  $$

  In $M_{2\times2}(\mathbb R)$:
  $$
  \begin{aligned}
  U_1&=\{A:A^{\mathsf T}=A\},\\
  U_2&=\{A:\det A=0\},\\
  U_3&=\{A:\operatorname{tr}(A)=1\}.
  \end{aligned}
  $$

  In $\mathbb R[x]$:
  $$
  \begin{aligned}
  P_1&=\{p:p(1)=0\},\\
  P_2&=\{a+bx+cx^2:a,b,c\in\mathbb R\},\\
  P_3&=\{p:p(0)\geqslant0\}.
  \end{aligned}
  $$

  Relate the conclusions about subsets of $\mathbb R^3$ to the solution sets of the homogeneous and nonhomogeneous systems in Exercise 2.

  - **Solution 4.1 (Subsets of $\mathbb R^3$)**
    **The set $W_1$ is a vector subspace.** It is the solution set of the homogeneous linear equation
    $$
    x+y-z=0.
    $$
    If $u,v\in W_1$ and $\lambda\in\mathbb R$, linearity of the left-hand side shows that $u+v\in W_1$ and $\lambda u\in W_1$.

    **The set $W_2$ is not a vector subspace.** The zero vector does not belong to $W_2$ because
    $$
    0+0-0\neq1.
    $$

    **The set $W_3$ is not a vector subspace.** We have $(1,0,0)\in W_3$, but
    $$
    -(1,0,0)=(-1,0,0)\notin W_3.
    $$
    Thus $W_3$ is not closed under scalar multiplication.

    **The set $W_4$ is not a vector subspace.** Both $(1,0,0)$ and $(0,1,0)$ belong to $W_4$, but
    $$
    (1,0,0)+(0,1,0)=(1,1,0)\notin W_4.
    $$

    **The set $W_5$ is a vector subspace.** Indeed,
    $$
    W_5=\operatorname{span}\{(1,2,-1)\}.
    $$

  - **Solution 4.2 (Subsets of $M_{2\times2}(\mathbb R)$)**
    **The set $U_1$ is a vector subspace.** The zero matrix is symmetric. If $A^{\mathsf T}=A$ and $B^{\mathsf T}=B$, then
    $$
    (A+B)^{\mathsf T}=A^{\mathsf T}+B^{\mathsf T}=A+B,
    $$
    and, for every $\lambda\in\mathbb R$,
    $$
    (\lambda A)^{\mathsf T}=\lambda A^{\mathsf T}=\lambda A.
    $$

    **The set $U_2$ is not a vector subspace.** Let
    $$
    A=\begin{bmatrix}1&0\\0&0\end{bmatrix},
    \qquad
    B=\begin{bmatrix}0&0\\0&1\end{bmatrix}.
    $$
    Then $\det A=\det B=0$, but $A+B=I_2$ has determinant $1$.

    **The set $U_3$ is not a vector subspace.** The zero matrix does not belong to $U_3$ because its trace is $0$, not $1$.

  - **Solution 4.3 (Subsets of $\mathbb R[x]$)**
    **The set $P_1$ is a vector subspace.** The zero polynomial belongs to $P_1$. If $p(1)=q(1)=0$, then
    $$
    (p+q)(1)=0,
    \qquad
    (\lambda p)(1)=0
    $$
    for every $\lambda\in\mathbb R$.

    **The set $P_2$ is a vector subspace.** In fact,
    $$
    P_2=\operatorname{span}\{1,x,x^2\}.
    $$

    **The set $P_3$ is not a vector subspace.** The constant polynomial $p(x)=1$ belongs to $P_3$, but $-p(x)=-1$ does not.

  - **Conclusion 4.4**
    The homogeneous solution set $S_0$ in Exercise 2 is a vector subspace. Whenever $Ax=b$ is consistent, its solution set is the affine translate
    $$
    S_b=x_0+S_0.
    $$
    If $b\neq0$, then $0\notin S_b$, so $S_b$ is not a vector subspace. This is analogous to the distinction between the homogeneous set $W_1$ and the nonhomogeneous set $W_2$.

---

- **Exercise 5**
  In each case, determine whether the given vector can be expressed as a linear combination of the other vectors.

  1. In $\mathbb R^3$, determine whether
     $$
     v=(2,3,1)
     $$
     is a linear combination of
     $$
     v_1=(1,1,0),
     \qquad
     v_2=(0,1,1),
     \qquad
     v_3=(1,0,1).
     $$
  2. In $\mathbb R[x]$, determine whether
     $$
     p(x)=1+2x+3x^2
     $$
     is a linear combination of
     $$
     p_1(x)=1+x,
     \qquad
     p_2(x)=x+x^2,
     \qquad
     p_3(x)=1-x^2.
     $$
  3. In $M_{2\times2}(\mathbb R)$, determine whether
     $$
     A=\begin{bmatrix}1&2\\3&4\end{bmatrix}
     $$
     is a linear combination of
     $$
     A_1=\begin{bmatrix}1&0\\0&1\end{bmatrix},
     \qquad
     A_2=\begin{bmatrix}0&1\\1&0\end{bmatrix},
     \qquad
     A_3=\begin{bmatrix}1&1\\0&0\end{bmatrix}.
     $$

  - **Solution 5.1 (Part a)**
    Suppose
    $$
    av_1+bv_2+cv_3=v.
    $$
    Comparing coordinates gives
    $$
    \begin{cases}
    a+c=2,\\
    a+b=3,\\
    b+c=1.
    \end{cases}
    $$
    Adding the three equations gives $a+b+c=3$. Since $a+b=3$, we obtain $c=0$, and then $a=2$ and $b=1$. Therefore,
    $$
    \boxed{v=2v_1+v_2}.
    $$

  - **Solution 5.2 (Part b)**
    Suppose
    $$
    ap_1(x)+bp_2(x)+cp_3(x)=p(x).
    $$
    Comparing the coefficients of $1,x,x^2$ gives
    $$
    a+c=1,
    \qquad
    a+b=2,
    \qquad
    b-c=3.
    $$
    The first two equations imply
    $$
    b=2-a,
    \qquad
    c=1-a.
    $$
    Hence $b-c=1$, contradicting the required equation $b-c=3$. Therefore,
    $$
    \boxed{p\notin\operatorname{span}\{p_1,p_2,p_3\}}.
    $$

  - **Solution 5.3 (Part c)**
    Suppose
    $$
    \alpha A_1+\beta A_2+\gamma A_3=A.
    $$
    The left-hand side is
    $$
    \begin{bmatrix}
    \alpha+\gamma&\beta+\gamma\\
    \beta&\alpha
    \end{bmatrix}.
    $$
    Comparing the bottom row with $A$ gives $\beta=3$ and $\alpha=4$. The top-left entry then gives $\gamma=-3$, but the top-right entry becomes
    $$
    \beta+\gamma=3-3=0\neq2.
    $$
    Thus the system is inconsistent, and
    $$
    \boxed{A\notin\operatorname{span}\{A_1,A_2,A_3\}}.
    $$
