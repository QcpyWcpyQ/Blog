---
title: "Vector Spaces"
published: 2026-11-01
description: "Tutorial exercises and complete solutions on solution sets, homogeneous systems, inverses, and the subspace criterion."
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

  - **Solution 1.1**  
    We prove the equality by showing both inclusions.

    First, let $x\in S_b$. Since both $x$ and $x_0$ solve $Ax=b$,

    $$
    A(x-x_0)=Ax-Ax_0=b-b=0.
    $$

    Thus $x-x_0\in S_0$. Writing $v=x-x_0$, we obtain $x=x_0+v$ with $v\in S_0$, so

    $$
    S_b\subseteq x_0+S_0.
    $$

    Conversely, let $x\in x_0+S_0$. Then $x=x_0+v$ for some $v\in S_0$. Hence

    $$
    Ax=A(x_0+v)=Ax_0+Av=b+0=b.
    $$

    Therefore $x\in S_b$, and so

    $$
    x_0+S_0\subseteq S_b.
    $$

    The two inclusions prove

    $$
    \boxed{S_b=x_0+S_0}.
    $$

    In words, every solution of a consistent nonhomogeneous system is one particular solution plus a solution of the associated homogeneous system.

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
  b=\begin{bmatrix}p\\q\\r\end{bmatrix}\in\mathbb R^3.
  $$

  1. Determine for which values of $p,q,r$ the system $Ax=b$ is consistent, and find one solution whenever it is consistent.
  2. Solve the associated homogeneous system $Ax=0$. Use Exercise 1 to describe the complete solution set of $Ax=b$.

  - **Solution 2.1**  
    Row-reduce the augmented matrix:

    $$
    \begin{aligned}
    \left[
    \begin{array}{cccc|c}
    1&2&-1&1&p\\
    2&5&0&3&q\\
    3&7&-1&4&r
    \end{array}
    \right]
    &\xrightarrow{R_2\leftarrow R_2-2R_1}
    \left[
    \begin{array}{cccc|c}
    1&2&-1&1&p\\
    0&1&2&1&q-2p\\
    3&7&-1&4&r
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-3R_1}
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

    The last row is consistent exactly when

    $$
    r-p-q=0.
    $$

    Therefore

    $$
    \boxed{Ax=b\text{ is consistent if and only if }r=p+q.}
    $$

    Assume $r=p+q$. Continue with

    $$
    R_1\leftarrow R_1-2R_2,
    $$

    which gives

    $$
    \left[
    \begin{array}{cccc|c}
    1&0&-5&-1&5p-2q\\
    0&1&2&1&q-2p\\
    0&0&0&0&0
    \end{array}
    \right].
    $$

    Setting the free variables $x_3=x_4=0$ gives one particular solution

    $$
    \boxed{
    x_0=
    \begin{bmatrix}
    5p-2q\\
    q-2p\\
    0\\
    0
    \end{bmatrix}.}
    $$

  - **Solution 2.2**  
    For the homogeneous system, the row-reduced equations are

    $$
    x_1-5x_3-x_4=0,
    \qquad
    x_2+2x_3+x_4=0.
    $$

    Let $x_3=s$ and $x_4=t$, where $s,t\in\mathbb R$. Then

    $$
    x_1=5s+t,
    \qquad
    x_2=-2s-t.
    $$

    Hence

    $$
    \boxed{
    S_0=
    \left\{
    s\begin{bmatrix}5\\-2\\1\\0\end{bmatrix}
    +t\begin{bmatrix}1\\-1\\0\\1\end{bmatrix}
    :s,t\in\mathbb R
    \right\}.}
    $$

    If $r=p+q$, Exercise 1 gives $S_b=x_0+S_0$. Thus the complete solution set is

    $$
    \boxed{
    x=
    \begin{bmatrix}
    5p-2q\\
    q-2p\\
    0\\
    0
    \end{bmatrix}
    +s\begin{bmatrix}5\\-2\\1\\0\end{bmatrix}
    +t\begin{bmatrix}1\\-1\\0\\1\end{bmatrix},
    \qquad s,t\in\mathbb R.}
    $$

    If $r\ne p+q$, the solution set is empty.

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
  2. Find $A^{-1}$ by reducing the augmented matrix $[A\mid I_3]$ to $[I_3\mid A^{-1}]$. Compare your answer with part 1.

  - **Solution 3.1**  
    Use the following row operations:

    $$
    \begin{aligned}
    A
    &\xrightarrow{R_1\leftrightarrow R_2}
    \begin{bmatrix}1&2&0\\0&1&1\\0&1&3\end{bmatrix}
    \xrightarrow{R_1\leftarrow R_1-2R_2}
    \begin{bmatrix}1&0&-2\\0&1&1\\0&1&3\end{bmatrix}\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-R_2}
    \begin{bmatrix}1&0&-2\\0&1&1\\0&0&2\end{bmatrix}
    \xrightarrow{R_3\leftarrow \frac12R_3}
    \begin{bmatrix}1&0&-2\\0&1&1\\0&0&1\end{bmatrix}\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1+2R_3}
    \begin{bmatrix}1&0&0\\0&1&1\\0&0&1\end{bmatrix}
    \xrightarrow{R_2\leftarrow R_2-R_3}
    I_3.
    \end{aligned}
    $$

    The corresponding elementary matrices are

    $$
    E_1=
    \begin{bmatrix}0&1&0\\1&0&0\\0&0&1\end{bmatrix},
    \qquad
    E_2=
    \begin{bmatrix}1&-2&0\\0&1&0\\0&0&1\end{bmatrix},
    \qquad
    E_3=
    \begin{bmatrix}1&0&0\\0&1&0\\0&-1&1\end{bmatrix},
    $$

    $$
    E_4=
    \begin{bmatrix}1&0&0\\0&1&0\\0&0&\frac12\end{bmatrix},
    \qquad
    E_5=
    \begin{bmatrix}1&0&2\\0&1&0\\0&0&1\end{bmatrix},
    \qquad
    E_6=
    \begin{bmatrix}1&0&0\\0&1&-1\\0&0&1\end{bmatrix}.
    $$

    Since

    $$
    E_6E_5E_4E_3E_2E_1A=I_3,
    $$

    it follows that

    $$
    \boxed{
    A^{-1}=E_6E_5E_4E_3E_2E_1
    =\begin{bmatrix}
    -3&1&1\\[2pt]
    \frac32&0&-\frac12\\[2pt]
    -\frac12&0&\frac12
    \end{bmatrix}.}
    $$

  - **Solution 3.2**  
    Apply the same operations to the augmented matrix. To make the action on the right-hand block visible, we record every stage:

    $$
    \begin{aligned}
    \left[
    \begin{array}{ccc|ccc}
    0&1&1&1&0&0\\
    1&2&0&0&1&0\\
    0&1&3&0&0&1
    \end{array}
    \right]
    &\xrightarrow{R_1\leftrightarrow R_2}
    \left[
    \begin{array}{ccc|ccc}
    1&2&0&0&1&0\\
    0&1&1&1&0&0\\
    0&1&3&0&0&1
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1-2R_2}
    \left[
    \begin{array}{ccc|ccc}
    1&0&-2&-2&1&0\\
    0&1&1&1&0&0\\
    0&1&3&0&0&1
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-R_2}
    \left[
    \begin{array}{ccc|ccc}
    1&0&-2&-2&1&0\\
    0&1&1&1&0&0\\
    0&0&2&-1&0&1
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_3\leftarrow\frac12R_3}
    \left[
    \begin{array}{ccc|ccc}
    1&0&-2&-2&1&0\\
    0&1&1&1&0&0\\
    0&0&1&-\frac12&0&\frac12
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1+2R_3}
    \left[
    \begin{array}{ccc|ccc}
    1&0&0&-3&1&1\\
    0&1&1&1&0&0\\
    0&0&1&-\frac12&0&\frac12
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_2\leftarrow R_2-R_3}
    \left[
    \begin{array}{ccc|ccc}
    1&0&0&-3&1&1\\
    0&1&0&\frac32&0&-\frac12\\
    0&0&1&-\frac12&0&\frac12
    \end{array}
    \right].
    \end{aligned}
    $$

    Therefore

    $$
    \boxed{
    A^{-1}=
    \begin{bmatrix}
    -3&1&1\\[2pt]
    \frac32&0&-\frac12\\[2pt]
    -\frac12&0&\frac12
    \end{bmatrix},}
    $$

    exactly as in part 1.

---

- **Exercise 4**  
  Using the subspace criterion, determine which of the following subsets are vector spaces with the inherited operations. Justify each answer using the subspace criterion or a counterexample.

  In $\mathbb R^3$:

  $$
  \begin{aligned}
  W_1&=\{(x,y,z):x+y-z=0\},\\
  W_2&=\{(x,y,z):x+y-z=1\},\\
  W_3&=\{(x,y,z):x\geq 0\},\\
  W_4&=\{(x,y,z):xy=0\},\\
  W_5&=\{(t,2t,-t):t\in\mathbb R\}.
  \end{aligned}
  $$

  In $M_{2\times2}(\mathbb R)$:

  $$
  U_1=\{A:A^{\mathsf T}=A\},
  \qquad
  U_2=\{A:\det A=0\},
  \qquad
  U_3=\{A:\operatorname{tr}(A)=1\}.
  $$

  In $\mathbb R[x]$:

  $$
  \begin{aligned}
  P_1&=\{p:p(1)=0\},\\
  P_2&=\{a+bx+cx^2:a,b,c\in\mathbb R\},\\
  P_3&=\{p:p(0)\geq 0\}.
  \end{aligned}
  $$

  Relate your conclusions about subsets of $\mathbb R^3$ to the solution sets of the homogeneous and nonhomogeneous systems in Exercise 2.

  - **Solution 4.1**  
    We use the subspace criterion: a nonempty subset $W$ is a subspace when $u+v\in W$ and $\lambda u\in W$ for all $u,v\in W$ and all scalars $\lambda$.

    **Subsets of $\mathbb R^3$.**

    1. $W_1$ **is a vector space**. It is nonempty because $0\in W_1$. If $u=(x_1,y_1,z_1)$ and $v=(x_2,y_2,z_2)$ lie in $W_1$, then

       $$
       (x_1+x_2)+(y_1+y_2)-(z_1+z_2)=0+0=0.
       $$

       Moreover, for every $\lambda\in\mathbb R$,

       $$
       \lambda x_1+\lambda y_1-\lambda z_1
       =\lambda(x_1+y_1-z_1)=0.
       $$

       Thus $W_1$ is closed under addition and scalar multiplication. Equivalently, it is the solution set of the homogeneous equation $x+y-z=0$.

    2. $W_2$ **is not a vector space**, because $(0,0,0)\notin W_2$. It is an affine plane, not a subspace.

    3. $W_3$ **is not a vector space**. For example, $(1,0,0)\in W_3$, but

       $$
       -1(1,0,0)=(-1,0,0)\notin W_3.
       $$

    4. $W_4$ **is not a vector space**. Both $(1,0,0)$ and $(0,1,0)$ lie in $W_4$, but

       $$
       (1,0,0)+(0,1,0)=(1,1,0)\notin W_4
       $$

       because $1\cdot1\ne0$.

    5. $W_5$ **is a vector space**, since

       $$
       W_5=\{t(1,2,-1):t\in\mathbb R\}
       =\operatorname{span}\{(1,2,-1)\}.
       $$

       A span is closed under addition and scalar multiplication.

    Therefore

    $$
    \boxed{W_1\text{ and }W_5\text{ are vector spaces; }W_2,W_3,W_4\text{ are not}.}
    $$

  - **Solution 4.2**  
    **Subsets of $M_{2\times2}(\mathbb R)$.**

    1. $U_1$ **is a vector space**. The zero matrix is symmetric, and if $A^{\mathsf T}=A$ and $B^{\mathsf T}=B$, then

       $$
       (A+B)^{\mathsf T}=A^{\mathsf T}+B^{\mathsf T}=A+B,
       $$

       while

       $$
       (\lambda A)^{\mathsf T}=\lambda A^{\mathsf T}=\lambda A.
       $$

    2. $U_2$ **is not a vector space**. The matrices

       $$
       A=\begin{bmatrix}1&0\\0&0\end{bmatrix},
       \qquad
       B=\begin{bmatrix}0&0\\0&1\end{bmatrix}
       $$

       are singular, but $A+B=I_2$ is invertible. Thus $U_2$ is not closed under addition.

    3. $U_3$ **is not a vector space**, since the zero matrix has trace $0$, not $1$. It also fails closure under scalar multiplication.

    Hence

    $$
    \boxed{U_1\text{ is a vector space; }U_2\text{ and }U_3\text{ are not}.}
    $$

  - **Solution 4.3**  
    **Subsets of $\mathbb R[x]$.**

    1. $P_1$ **is a vector space**. The zero polynomial belongs to $P_1$. If $p(1)=q(1)=0$, then

       $$
       (p+q)(1)=p(1)+q(1)=0,
       \qquad
       (\lambda p)(1)=\lambda p(1)=0.
       $$

    2. $P_2$ **is a vector space**. It is exactly the set of polynomials of degree at most $2$,

       $$
       P_2=\operatorname{span}\{1,x,x^2\},
       $$

       including the zero polynomial.

    3. $P_3$ **is not a vector space**. For example, the constant polynomial $p(x)=1$ belongs to $P_3$, but $-p(x)=-1$ does not because $(-p)(0)=-1<0$.

    Therefore

    $$
    \boxed{P_1\text{ and }P_2\text{ are vector spaces; }P_3\text{ is not}.}
    $$

  - **Solution 4.4**  
    In Exercise 2, the homogeneous solution set

    $$
    S_0=\ker A
    $$

    is a vector space: it contains $0$, and linearity of $A$ gives closure under addition and scalar multiplication.

    When $r=p+q$, the nonhomogeneous solution set is

    $$
    S_b=x_0+S_0.
    $$

    This is an affine translate of the subspace $S_0$, just as $W_2$ is an affine translate of $W_1$. It is a vector space only when it contains the zero vector. For the system $Ax=b$, this happens exactly when $b=0$, that is,

    $$
    \boxed{p=q=r=0.}
    $$

    For every other consistent right-hand side, $S_b$ is an affine plane but not a vector subspace.
