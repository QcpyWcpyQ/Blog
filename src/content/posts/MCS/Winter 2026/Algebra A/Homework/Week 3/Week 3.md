---
title: "Week 3"
published: 2026-10-29
description: "Complete solutions on matrix inverses, vector subspaces, linear combinations, and linear dependence."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**
  Let

  $$
  A=
  \begin{bmatrix}
  1&2&1\\
  0&1&1\\
  1&1&1
  \end{bmatrix}
  \in M_{3\times3}(\mathbb{R}).
  $$

  1. Find $A^{-1}$ by applying elementary row operations to the augmented matrix $[A\mid I]$.
  2. Use $A^{-1}$ to solve the system $AX=b$, where
     $$
     b=
     \begin{bmatrix}
     1\\1\\2
     \end{bmatrix}.
     $$

  - **Solution 1.1**
    Start with the augmented matrix $[A\mid I_3]$:

    $$
    \left[
    \begin{array}{ccc|ccc}
    1&2&1&1&0&0\\
    0&1&1&0&1&0\\
    1&1&1&0&0&1
    \end{array}
    \right].
    $$

    Apply $R_3\leftarrow R_3-R_1$ and then $R_3\leftarrow R_3+R_2$:

    $$
    \begin{aligned}
    \left[
    \begin{array}{ccc|ccc}
    1&2&1&1&0&0\\
    0&1&1&0&1&0\\
    1&1&1&0&0&1
    \end{array}
    \right]
    &\xrightarrow{R_3\leftarrow R_3-R_1}
    \left[
    \begin{array}{ccc|ccc}
    1&2&1&1&0&0\\
    0&1&1&0&1&0\\
    0&-1&0&-1&0&1
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_3\leftarrow R_3+R_2}
    \left[
    \begin{array}{ccc|ccc}
    1&2&1&1&0&0\\
    0&1&1&0&1&0\\
    0&0&1&-1&1&1
    \end{array}
    \right].
    \end{aligned}
    $$

    Eliminate the entries above the third pivot:

    $$
    \begin{aligned}
    \left[
    \begin{array}{ccc|ccc}
    1&2&1&1&0&0\\
    0&1&1&0&1&0\\
    0&0&1&-1&1&1
    \end{array}
    \right]
    &\xrightarrow{R_2\leftarrow R_2-R_3}
    \left[
    \begin{array}{ccc|ccc}
    1&2&1&1&0&0\\
    0&1&0&1&0&-1\\
    0&0&1&-1&1&1
    \end{array}
    \right]\\[1ex]
    &\xrightarrow{R_1\leftarrow R_1-R_3}
    \left[
    \begin{array}{ccc|ccc}
    1&2&0&2&-1&-1\\
    0&1&0&1&0&-1\\
    0&0&1&-1&1&1
    \end{array}
    \right].
    \end{aligned}
    $$

    Finally, apply $R_1\leftarrow R_1-2R_2$:

    $$
    \left[
    \begin{array}{ccc|ccc}
    1&0&0&0&-1&1\\
    0&1&0&1&0&-1\\
    0&0&1&-1&1&1
    \end{array}
    \right]
    =\left[I_3\mid A^{-1}\right].
    $$

    Therefore,

    $$
    \boxed{
    A^{-1}=
    \begin{bmatrix}
    0&-1&1\\
    1&0&-1\\
    -1&1&1
    \end{bmatrix}.
    }
    $$

    To solve $AX=b$, multiply both sides by $A^{-1}$:

    $$
    \begin{aligned}
    X=A^{-1}b
    &=
    \begin{bmatrix}
    0&-1&1\\
    1&0&-1\\
    -1&1&1
    \end{bmatrix}
    \begin{bmatrix}
    1\\1\\2
    \end{bmatrix}\\[1ex]
    &=
    \begin{bmatrix}
    -1+2\\
    1-2\\
    -1+1+2
    \end{bmatrix}
    =
    \boxed{
    \begin{bmatrix}
    1\\-1\\2
    \end{bmatrix}}.
    \end{aligned}
    $$

    Indeed,

    $$
    A
    \begin{bmatrix}
    1\\-1\\2
    \end{bmatrix}
    =
    \begin{bmatrix}
    1\\1\\2
    \end{bmatrix}
    =b.
    $$

---

- **Problem 2**
  Determine whether each of the following subsets is a vector space under the addition and scalar multiplication inherited from the corresponding vector space. Justify your answers.

  1. Let $V$ be the vector space of all functions $f\colon\mathbb{R}\to\mathbb{R}$. Consider
     $$
     W=\{f\in V:f(0)=0\}.
     $$
  2. Let $V=M_{2\times2}(\mathbb{R})$. Consider
     $$
     W=\{A\in V:\det(A)=0\}.
     $$

  - **Solution 2.1**

    **1.** The set $W$ is a vector space. The zero function belongs to $W$ because
    $$
    0(0)=0.
    $$
    Let $f,g\in W$ and let $\lambda\in\mathbb{R}$. Since $f(0)=g(0)=0$, we have
    $$
    (f+g)(0)=f(0)+g(0)=0
    $$
    and
    $$
    (\lambda f)(0)=\lambda f(0)=0.
    $$
    Thus $f+g\in W$ and $\lambda f\in W$. Therefore $W$ contains the zero vector and is closed under addition and scalar multiplication, so
    $$
    \boxed{W\text{ is a vector subspace of }V.}
    $$

    **2.** The set $W$ is not a vector space because it is not closed under addition. Consider
    $$
    A=
    \begin{bmatrix}
    1&0\\0&0
    \end{bmatrix},
    \qquad
    B=
    \begin{bmatrix}
    0&0\\0&1
    \end{bmatrix}.
    $$
    Both matrices belong to $W$ because
    $$
    \det(A)=\det(B)=0.
    $$
    However,
    $$
    A+B=
    \begin{bmatrix}
    1&0\\0&1
    \end{bmatrix}
    =I_2,
    $$
    and
    $$
    \det(A+B)=1\neq0.
    $$
    Hence $A+B\notin W$, so
    $$
    \boxed{W\text{ is not a vector subspace of }V.}
    $$

---

- **Problem 3**
  Consider the vectors in $\mathbb{R}^3$:

  $$
  v_1=
  \begin{bmatrix}
  1\\1\\0
  \end{bmatrix},
  \qquad
  v_2=
  \begin{bmatrix}
  0\\1\\1
  \end{bmatrix},
  \qquad
  v_3=
  \begin{bmatrix}
  1\\0\\1
  \end{bmatrix}.
  $$

  Determine whether the vector

  $$
  w=
  \begin{bmatrix}
  4\\3\\5
  \end{bmatrix}
  $$

  can be expressed as a linear combination of $v_1,v_2,v_3$. If possible, find scalars $a,b,c\in\mathbb{R}$ such that

  $$
  w=av_1+bv_2+cv_3.
  $$

  - **Solution 3.1**
    The equation
    $$
    av_1+bv_2+cv_3=w
    $$
    is equivalent to
    $$
    a
    \begin{bmatrix}
    1\\1\\0
    \end{bmatrix}
    +b
    \begin{bmatrix}
    0\\1\\1
    \end{bmatrix}
    +c
    \begin{bmatrix}
    1\\0\\1
    \end{bmatrix}
    =
    \begin{bmatrix}
    4\\3\\5
    \end{bmatrix}.
    $$
    Comparing coordinates gives
    $$
    \begin{cases}
    a+c=4,\\
    a+b=3,\\
    b+c=5.
    \end{cases}
    $$
    Adding the three equations yields
    $$
    2(a+b+c)=12,
    $$
    so $a+b+c=6$. Since $a+b=3$, it follows that $c=3$. The first and second equations then give
    $$
    a=1,
    \qquad
    b=2.
    $$
    Therefore,
    $$
    \boxed{w=v_1+2v_2+3v_3.}
    $$
    Hence $w$ can be expressed as a linear combination of $v_1,v_2,v_3$, with
    $$
    \boxed{(a,b,c)=(1,2,3).}
    $$

---

- **Problem 4**
  Consider the following vectors in $\mathbb{R}^3$:

  $$
  v_1=
  \begin{bmatrix}
  1\\0\\1
  \end{bmatrix},
  \qquad
  v_2=
  \begin{bmatrix}
  0\\1\\1
  \end{bmatrix},
  \qquad
  v_3=
  \begin{bmatrix}
  1\\1\\0
  \end{bmatrix},
  \qquad
  v_4=
  \begin{bmatrix}
  2\\1\\3
  \end{bmatrix}.
  $$

  Determine whether there exist scalars $a_1,a_2,a_3,a_4\in\mathbb{R}$, not all zero, such that

  $$
  a_1v_1+a_2v_2+a_3v_3+a_4v_4=0.
  $$

  If such scalars exist, find one possible choice.

  - **Solution 4.1**
    Comparing the three coordinates in
    $$
    a_1v_1+a_2v_2+a_3v_3+a_4v_4=0
    $$
    gives
    $$
    \begin{cases}
    a_1+a_3+2a_4=0,\\
    a_2+a_3+a_4=0,\\
    a_1+a_2+3a_4=0.
    \end{cases}
    $$
    The first two equations give
    $$
    a_1=-a_3-2a_4,
    \qquad
    a_2=-a_3-a_4.
    $$
    Substituting these expressions into the third equation yields
    $$
    (-a_3-2a_4)+(-a_3-a_4)+3a_4=0,
    $$
    so
    $$
    -2a_3=0
    \quad\Longrightarrow\quad
    a_3=0.
    $$
    Let $a_4=t$. Then
    $$
    a_1=-2t,
    \qquad
    a_2=-t,
    \qquad
    a_3=0,
    \qquad
    a_4=t.
    $$
    Choosing $t=1$ gives the nonzero solution
    $$
    \boxed{(a_1,a_2,a_3,a_4)=(-2,-1,0,1).}
    $$
    Indeed,
    $$
    -2v_1-v_2+v_4
    =
    -2
    \begin{bmatrix}
    1\\0\\1
    \end{bmatrix}
    -
    \begin{bmatrix}
    0\\1\\1
    \end{bmatrix}
    +
    \begin{bmatrix}
    2\\1\\3
    \end{bmatrix}
    =
    \begin{bmatrix}
    0\\0\\0
    \end{bmatrix}.
    $$
    Therefore, the vectors $v_1,v_2,v_3,v_4$ are linearly dependent.
