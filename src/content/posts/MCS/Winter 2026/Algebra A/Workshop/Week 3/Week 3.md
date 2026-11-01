---
title: "Week 3"
published: 2026-10-30
description: "Workshop solutions on parameter-dependent systems, elementary matrices, vector subspaces, and linear combinations."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## A parameter-dependent system

- **Exercise 1**
  Consider the system
  $$
  \begin{cases}
  x+y+z=1,\\
  x+2y+2z=2,\\
  2x+3y+(3+t)z=c,
  \end{cases}
  $$
  where $t,c\in\mathbb R$.

  1. Determine the values of $t$ and $c$ for which the system has a unique solution, infinitely many solutions, or no solutions.
  2. Find the complete solution set in each consistent case.
  3. For the values of $t$ for which the associated homogeneous system has nonzero solutions, describe all such solutions.

  - **Solution 1.1 (Classification)**
    The augmented matrix is
    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&1\\
    1&2&2&2\\
    2&3&3+t&c
    \end{array}
    \right].
    $$
    Apply
    $$
    R_2\leftarrow R_2-R_1,
    \qquad
    R_3\leftarrow R_3-2R_1,
    \qquad
    R_3\leftarrow R_3-R_2.
    $$
    This gives
    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&1\\
    0&1&1&1\\
    0&0&t&c-3
    \end{array}
    \right].
    $$
    Hence the final equation is
    $$
    tz=c-3.
    $$

    Therefore:

    | Condition | Number of solutions |
    | --- | --- |
    | $t\neq0$; any $c\in\mathbb R$ | Exactly one |
    | $t=0$ and $c=3$ | Infinitely many |
    | $t=0$ and $c\neq3$ | None |

  - **Solution 1.2 (Complete solution sets)**
    The first two reduced equations give
    $$
    y+z=1,
    \qquad
    x=0.
    $$

    If $t\neq0$, then
    $$
    z=\frac{c-3}{t},
    \qquad
    y=1-\frac{c-3}{t}.
    $$
    Thus the unique solution is
    $$
    \boxed{
    (x,y,z)=left(0,1-\frac{c-3}{t},\frac{c-3}{t}\right),
    \qquad t\neq0.}
    $$

    If $t=0$ and $c=3$, let $z=s$, where $s\in\mathbb R$. Then
    $$
    \boxed{
    (x,y,z)=(0,1-s,s),
    \qquad s\in\mathbb R.}
    $$

    If $t=0$ and $c\neq3$, the solution set is empty.

  - **Solution 1.3 (The associated homogeneous system)**
    For the associated homogeneous system, the reduced equations are
    $$
    y+z=0,
    \qquad
    x=0,
    \qquad
    tz=0.
    $$
    If $t\neq0$, then $z=0$, so the only solution is the zero vector.

    If $t=0$, let $z=s$. Then $y=-s$ and $x=0$, so all homogeneous solutions are
    $$
    \boxed{
    (x,y,z)=s(0,-1,1),
    \qquad s\in\mathbb R.}
    $$
    The solutions are nonzero exactly when $s\neq0$.

---

## Elementary matrices

- **Exercise 2**
  Starting with the identity matrix $I_3$, perform the following elementary row operations in the indicated order:
  $$
  R_1\leftrightarrow R_3,
  \qquad
  R_2\leftarrow R_2+2R_1,
  \qquad
  R_3\leftarrow R_3-R_2.
  $$
  Let $A$ be the resulting matrix.

  1. Find $A$ and the elementary matrices $E_1,E_2,E_3$ corresponding to these operations. Express $A$ as a product of elementary matrices.
  2. Find $A^{-1}$ using the inverses of $E_1,E_2,E_3$, without performing row reduction on $A$.
  3. Use the result of part 2 to solve
     $$
     Ax=\begin{bmatrix}1\\0\\2\end{bmatrix}.
     $$

  - **Solution 2.1 (The matrix and elementary matrices)**
    Apply the operations to $I_3$:
    $$
    \begin{aligned}
    I_3
    &\xrightarrow{R_1\leftrightarrow R_3}
    \begin{bmatrix}
    0&0&1\\0&1&0\\1&0&0
    \end{bmatrix}\\[1ex]
    &\xrightarrow{R_2\leftarrow R_2+2R_1}
    \begin{bmatrix}
    0&0&1\\0&1&2\\1&0&0
    \end{bmatrix}\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3-R_2}
    \boxed{
    \begin{bmatrix}
    0&0&1\\0&1&2\\1&-1&-2
    \end{bmatrix}}.
    \end{aligned}
    $$
    Therefore,
    $$
    A=egin{bmatrix}0&0&1\\0&1&2\\1&-1&-2\end{bmatrix}.
    $$

    The elementary matrices are
    $$
    E_1=egin{bmatrix}0&0&1\\0&1&0\\1&0&0\end{bmatrix},
    \qquad
    E_2=egin{bmatrix}1&0&0\\2&1&0\\0&0&1\end{bmatrix},
    \qquad
    E_3=egin{bmatrix}1&0&0\\0&1&0\\0&-1&1\end{bmatrix}.
    $$
    Since the operations are performed in the order $E_1,E_2,E_3$,
    $$
    \boxed{A=E_3E_2E_1}.
    $$

  - **Solution 2.2 (The inverse)**
    The inverse elementary matrices reverse the corresponding row operations:
    $$
    E_1^{-1}=E_1,
    $$
    $$
    E_2^{-1}=egin{bmatrix}1&0&0\\-2&1&0\\0&0&1\end{bmatrix},
    \qquad
    E_3^{-1}=egin{bmatrix}1&0&0\\0&1&0\\0&1&1\end{bmatrix}.
    $$
    Since $A=E_3E_2E_1$,
    $$
    A^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}.
    $$
    Thus
    $$
    \boxed{
    A^{-1}=
    \begin{bmatrix}
    0&1&1\\
    -2&1&0\\
    1&0&0
    \end{bmatrix}.}
    $$

  - **Solution 2.3 (Solving the system)**
    Multiply both sides by $A^{-1}$:
    $$
    \begin{aligned}
    x
    &=A^{-1}\begin{bmatrix}1\\0\\2\end{bmatrix}\\[1ex]
    &=egin{bmatrix}0&1&1\\-2&1&0\\1&0&0\end{bmatrix}
      \begin{bmatrix}1\\0\\2\end{bmatrix}\\[1ex]
    &=\boxed{\begin{bmatrix}2\\-2\\1\end{bmatrix}}.
    \end{aligned}
    $$

---

## Subspaces of $\mathbb R[x]$

- **Exercise 3**
  Consider the subsets
  $$
  U=\{p(x)\in\mathbb R[x]:p(0)=p(2)\},
  \qquad
  W=\{a+bx:a,b\in\mathbb R\}.
  $$

  1. Prove that both $U$ and $W$ are vector spaces over $\mathbb R$ with the usual operations.
  2. Determine all polynomials belonging to $U\cap W$. Is $U\cap W$ a vector space?
  3. Determine whether $U\cup W$ is a vector space. Justify the answer.

  - **Solution 3.1 (The subspaces $U$ and $W$)**
    The zero polynomial belongs to $U$ because $0(0)=0(2)$. Let $p,q\in U$ and $\lambda\in\mathbb R$. Then
    $$
    (p+q)(0)=p(0)+q(0)=p(2)+q(2)=(p+q)(2),
    $$
    and
    $$
    (\lambda p)(0)=\lambda p(0)=\lambda p(2)=(\lambda p)(2).
    $$
    Hence $p+q\in U$ and $\lambda p\in U$, so $U$ is a vector subspace of $\mathbb R[x]$.

    Also,
    $$
    W=\operatorname{span}\{1,x\},
    $$
    so $W$ is a vector subspace of $\mathbb R[x]$.

  - **Solution 3.2 (The intersection)**
    Let $p\in U\cap W$. Since $p\in W$, write
    $$
    p(x)=a+bx.
    $$
    The condition $p(0)=p(2)$ gives
    $$
    a=a+2b,
    $$
    so $b=0$. Therefore,
    $$
    \boxed{U\cap W=\{a:a\in\mathbb R\}=\operatorname{span}\{1\}.}
    $$
    In particular, $U\cap W$ is a vector space.

  - **Solution 3.3 (The union)**
    The polynomial $p(x)=x$ belongs to $W$ but not to $U$, because
    $$
    p(0)=0\neq2=p(2).
    $$
    The polynomial
    $$
    q(x)=x^2-2x
    $$
    belongs to $U$ because $q(0)=q(2)=0$, but $q\notin W$ because it has degree $2$.

    Their sum is
    $$
    p(x)+q(x)=x^2-x.
    $$
    It is not in $W$ because it has degree $2$, and it is not in $U$ because
    $$
    (p+q)(0)=0\neq2=(p+q)(2).
    $$
    Thus $U\cup W$ is not closed under addition, so
    $$
    \boxed{U\cup W\text{ is not a vector space}.}
    $$

---

## Linear combinations of matrices

- **Exercise 4**
  Consider the matrices
  $$
  A_1=\begin{bmatrix}1&0\\0&1\end{bmatrix},
  \qquad
  A_2=\begin{bmatrix}0&1\\1&0\end{bmatrix},
  \qquad
  A_3=\begin{bmatrix}1&1\\0&0\end{bmatrix}
  $$
  in $M_{2\times2}(\mathbb R)$.

  1. Find necessary and sufficient conditions on $a,b,c,d\in\mathbb R$ for
     $$
     B=\begin{bmatrix}a&b\\c&d\end{bmatrix}
     $$
     to be a linear combination of $A_1,A_2,A_3$.
  2. Whenever such a linear combination exists, find its coefficients in terms of $a,b,c,d$.
  3. Determine whether
     $$
     B_1=\begin{bmatrix}2&1\\0&1\end{bmatrix},
     \qquad
     B_2=\begin{bmatrix}1&0\\0&2\end{bmatrix}
     $$
     can be expressed as linear combinations of $A_1,A_2,A_3$.

  - **Solution 4.1 (Necessary and sufficient condition)**
    Let $\alpha,\beta,\gamma\in\mathbb R$. Then
    $$
    \alpha A_1+\beta A_2+\gamma A_3
    =
    \begin{bmatrix}
    \alpha+\gamma&\beta+\gamma\\
    \beta&\alpha
    \end{bmatrix}.
    $$
    Equating this with $B$ gives
    $$
    \alpha+\gamma=a,
    \qquad
    \beta+\gamma=b,
    \qquad
    \beta=c,
    \qquad
    \alpha=d.
    $$
    Thus
    $$
    \alpha=d,
    \qquad
    \beta=c,
    \qquad
    \gamma=a-d.
    $$
    The remaining equation is satisfied exactly when
    $$
    b=c+a-d.
    $$
    Therefore,
    $$
    \boxed{B\in\operatorname{span}\{A_1,A_2,A_3\}
    \iff a+c=b+d.}
    $$

  - **Solution 4.2 (The coefficients)**
    Whenever $a+c=b+d$, the coefficients are
    $$
    \boxed{\alpha=d,
    \qquad\beta=c,
    \qquad\gamma=a-d.}
    $$
    Hence
    $$
    B=dA_1+cA_2+(a-d)A_3.
    $$

  - **Solution 4.3 (The two matrices)**
    For $B_1$, the condition is satisfied because
    $$
    a+c=2+0=2=1+1=b+d.
    $$
    Its coefficients are $\alpha=1$, $\beta=0$, and $\gamma=1$. Therefore,
    $$
    \boxed{B_1=A_1+A_3.}
    $$

    For $B_2$,
    $$
    a+c=1+0=1,
    \qquad
    b+d=0+2=2.
    $$
    The condition fails, so
    $$
    \boxed{B_2\notin\operatorname{span}\{A_1,A_2,A_3\}.}
    $$

---

## A nontrivial linear combination

- **Exercise 5**
  Consider the vectors
  $$
  v_1=(1,2,1),
  \qquad
  v_2=(0,1,2),
  \qquad
  v_3=(2,5,4)
  $$
  in $\mathbb R^3$.

  Determine whether the zero vector can be expressed as a nontrivial linear combination of $v_1,v_2,v_3$. Recall that
  $$
  a_1v_1+a_2v_2+a_3v_3
  $$
  is nontrivial if at least one coefficient is nonzero. Justify the answer by solving an appropriate homogeneous linear system.

  - **Solution 5.1**
    The equation
    $$
    a_1v_1+a_2v_2+a_3v_3=0
    $$
    gives the homogeneous system
    $$
    \begin{cases}
    a_1+2a_3=0,\\
    2a_1+a_2+5a_3=0,\\
    a_1+2a_2+4a_3=0.
    \end{cases}
    $$
    The first equation gives
    $$
    a_1=-2a_3.
    $$
    Substituting into the second equation gives
    $$
    a_2=-a_3.
    $$
    With these values, the third equation is automatically satisfied. Let $a_3=t$. Then all solutions are
    $$
    (a_1,a_2,a_3)=t(-2,-1,1),
    \qquad t\in\mathbb R.
    $$
    Taking $t=1$ gives
    $$
    \boxed{-2v_1-v_2+v_3=0,}
    $$
    which is nontrivial. Therefore, the vectors $v_1,v_2,v_3$ are linearly dependent.
