---
title: "Linear Combinations"
published: 2026-11-01
description: "Tutorial exercises and complete solutions on linear combinations of vectors, polynomials, and matrices."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 5**  
  In each of the following cases, determine whether the given vector can be expressed as a linear combination of the other vectors.

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
     A=\begin{pmatrix}1&2\\3&4\end{pmatrix}
     $$

     is a linear combination of

     $$
     A_1=\begin{pmatrix}1&0\\0&1\end{pmatrix},
     \qquad
     A_2=\begin{pmatrix}0&1\\1&0\end{pmatrix},
     \qquad
     A_3=\begin{pmatrix}1&1\\0&0\end{pmatrix}.
     $$

  - **Solution 5.1**  
    We seek scalars $a,b,c\in\mathbb R$ such that

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

    Subtracting the third equation from the sum of the first two gives $2a=4$, so $a=2$. Then $b=1$ and $c=0$. Therefore

    $$
    \boxed{v=2v_1+v_2.}
    $$

    Thus $v$ is a linear combination of $v_1,v_2,v_3$.

  - **Solution 5.2**  
    Suppose that there exist $a,b,c\in\mathbb R$ such that

    $$
    ap_1(x)+bp_2(x)+cp_3(x)=p(x).
    $$

    Expanding the left-hand side gives

    $$
    a(1+x)+b(x+x^2)+c(1-x^2)
    =(a+c)+(a+b)x+(b-c)x^2.
    $$

    Comparing coefficients with $1+2x+3x^2$ yields

    $$
    \begin{cases}
    a+c=1,\\
    a+b=2,\\
    b-c=3.
    \end{cases}
    $$

    However, subtracting the first equation from the second gives

    $$
    b-c=1,
    $$

    which contradicts $b-c=3$. Hence the system is inconsistent, and

    $$
    \boxed{p(x)\notin\operatorname{span}\{p_1(x),p_2(x),p_3(x)\}.}
    $$

    Therefore $p(x)$ is not a linear combination of the three given polynomials.

  - **Solution 5.3**  
    Suppose that

    $$
    aA_1+bA_2+cA_3=A
    $$

    for some $a,b,c\in\mathbb R$. Then

    $$
    aA_1+bA_2+cA_3
    =
    \begin{pmatrix}
    a+c&b+c\\
    b&a
    \end{pmatrix}.
    $$

    Comparing entries with $A$ gives

    $$
    \begin{cases}
    a+c=1,\\
    b+c=2,\\
    b=3,\\
    a=4.
    \end{cases}
    $$

    From $a=4$ and $a+c=1$, we obtain $c=-3$. But then

    $$
    b+c=3-3=0\ne2,
    $$

    a contradiction. Therefore

    $$
    \boxed{A\notin\operatorname{span}\{A_1,A_2,A_3\}.}
    $$

    Thus $A$ is not a linear combination of the three given matrices.
