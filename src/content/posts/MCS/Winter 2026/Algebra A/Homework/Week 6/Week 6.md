---
title: "Week 6"
published: 2026-11-20
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Determine whether each of the following maps is a linear transformation.

  1. $T\colon\mathbb R^3\to\mathbb R^2$, defined by
     $$
     T(x,y,z)=(x-2y,y+3z).
     $$

  2. $S\colon\mathbb R^2\to\mathbb R^2$, defined by
     $$
     S(x,y)=(x+y,y+1).
     $$

  3. $F\colon\mathbb R^2\to\mathbb R$, defined by
     $$
     F(x,y)=x^2+y.
     $$

  4. $L\colon M_{2\times2}(\mathbb R)\to M_{2\times2}(\mathbb R)$, defined by
     $$
     L(A)=A+A^{\mathsf T}.
     $$

  - **Solution 1.1**
    **1.** $T$ is linear because it is given by the matrix product
    $$
    \begin{pmatrix}x-2y\\y+3z\end{pmatrix}
    =
    \begin{pmatrix}1&-2&0\\0&1&3\end{pmatrix}
    \begin{pmatrix}x\\y\\z\end{pmatrix}.
    $$

    **2.** $S$ is not linear because $S(0,0)=(0,1)$, whereas a linear map sends the zero vector to the zero vector.

    **3.** $F$ is not linear. For $u=(1,0)$, we have $F(2u)=4$ but $2F(u)=2$.

    **4.** $L$ is linear. For any matrices $A,B$ in the domain and any $\alpha,\beta\in\mathbb R$,
    $$
    \begin{aligned}
    L(\alpha A+\beta B)
    &=\alpha A+\beta B+(\alpha A+\beta B)^{\mathsf T}\\
    &=\alpha(A+A^{\mathsf T})+\beta(B+B^{\mathsf T})\\
    &=\alpha L(A)+\beta L(B).
    \end{aligned}
    $$

---

- **Exercise 2**
  For each of the following sets of conditions, determine whether there exists a linear transformation $T\colon\mathbb R^3\to\mathbb R^2$ satisfying them.

  1. $T(1,0,1)=(1,1)$, $T(0,1,1)=(2,0)$, and $T(0,0,1)=(-1,1)$.
  2. $T(1,0,1)=(1,1)$, $T(0,1,1)=(2,0)$, and $T(1,1,2)=(3,1)$.
  3. $T(1,0,1)=(1,1)$, $T(0,1,1)=(2,0)$, and $T(1,1,2)=(3,2)$.

  - **Solution 2.1**
    **1.** Yes. Let $u=(1,0,1)$, $v=(0,1,1)$, and $w=(0,0,1)$. Every vector has the unique representation
    $$
    (x,y,z)=xu+yv+(z-x-y)w.
    $$
    Thus $u,v,w$ form a basis, and their prescribed images define the linear map
    $$
    T(x,y,z)=x(1,1)+y(2,0)+(z-x-y)(-1,1)
    =(2x+3y-z,z-y).
    $$

    **2.** Yes. Since $(1,1,2)=u+v$, its prescribed image must be $(1,1)+(2,0)=(3,1)$. The linear map
    $$
    T(x,y,z)=(x+2y,x)
    $$
    satisfies all three conditions.

    **3.** No. Linearity would force
    $$
    T(1,1,2)=T(u)+T(v)=(1,1)+(2,0)=(3,1),
    $$
    which contradicts the prescribed value $(3,2)$.

---

- **Exercise 3**
  Let $T\colon M_{2\times2}(\mathbb R)\to\mathbb R^2$ be defined by
  $$
  T\!\left(\begin{pmatrix}a&b\\c&d\end{pmatrix}\right)=(a+d,b-c).
  $$

  1. Prove that $T$ is a linear transformation.
  2. Describe all matrices in $\ker T$ and find a basis for this subspace.
  3. Determine $\operatorname{Im}T$ and find a basis for it.
  4. Verify the dimension theorem.
  5. Find a matrix $A_0$ such that $T(A_0)=(2,1)$. Prove that
     $$
     \{A\in M_{2\times2}(\mathbb R):T(A)=(2,1)\}
     =\{A_0+K:K\in\ker T\}.
     $$

  - **Solution 3.1**
    **1.** Let $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $B=\begin{pmatrix}e&f\\g&h\end{pmatrix}$. For any $\alpha,\beta\in\mathbb R$,
    $$
    \begin{aligned}
    T(\alpha A+\beta B)
    &=\bigl(\alpha(a+d)+\beta(e+h),\,\alpha(b-c)+\beta(f-g)\bigr)\\
    &=\alpha T(A)+\beta T(B).
    \end{aligned}
    $$
    Hence $T$ is linear.

    **2.** The equations $a+d=0$ and $b-c=0$ give $d=-a$ and $c=b$. Thus each matrix in the kernel has the unique form
    $$
    \begin{pmatrix}a&b\\b&-a\end{pmatrix}
    =a\begin{pmatrix}1&0\\0&-1\end{pmatrix}
    +b\begin{pmatrix}0&1\\1&0\end{pmatrix},
    \qquad a,b\in\mathbb R.
    $$
    The two coefficient matrices therefore form a basis of $\ker T$.

    **3.** For every $(s,t)\in\mathbb R^2$,
    $$
    T\!\left(\begin{pmatrix}s&t\\0&0\end{pmatrix}\right)=(s,t).
    $$
    Hence $\operatorname{Im}T=\mathbb R^2$, with basis $\{(1,0),(0,1)\}$.

    **4.** The bases above give
    $$
    \dim\ker T+\dim\operatorname{Im}T=2+2=4=\dim M_{2\times2}(\mathbb R).
    $$

    **5.** Take $A_0=\begin{pmatrix}2&1\\0&0\end{pmatrix}$. Then $T(A_0)=(2,1)$. By linearity,
    $$
    T(A)=(2,1)
    \iff T(A-A_0)=0
    \iff A-A_0\in\ker T.
    $$
    Thus $T(A)=(2,1)$ holds exactly for the matrices $A=A_0+K$ with $K\in\ker T$, proving the set equality.

---

- **Exercise 4**
  Let $\mathbb R_3[x]$ denote the vector space of real polynomials of degree at most $3$. Define
  $$
  E\colon\mathbb R_3[x]\to\mathbb R^2,
  \qquad E(p)=(p(0),p(1)).
  $$

  1. Prove that $E$ is a linear transformation.
  2. Compute $E(1)$, $E(x)$, $E(x^2)$, and $E(x^3)$. Use these images to find a basis for $\operatorname{Im}E$.
  3. Use the dimension theorem to determine $\dim\ker E$.
  4. Find a basis for $\ker E$.
  5. Does there exist a unique polynomial $p\in\mathbb R_3[x]$ satisfying $p(0)=2$ and $p(1)=-1$? Find all such polynomials.

  - **Solution 4.1**
    **1.** For $p,q\in\mathbb R_3[x]$ and $\alpha,\beta\in\mathbb R$,
    $$
    \begin{aligned}
    E(\alpha p+\beta q)
    &=\bigl(\alpha p(0)+\beta q(0),\,\alpha p(1)+\beta q(1)\bigr)\\
    &=\alpha E(p)+\beta E(q).
    \end{aligned}
    $$
    Hence $E$ is linear.

    **2.** Evaluation gives
    $$
    E(1)=(1,1),
    \qquad E(x)=E(x^2)=E(x^3)=(0,1).
    $$
    The vectors $(1,1)$ and $(0,1)$ are linearly independent in $\mathbb R^2$, so they form a basis of $\operatorname{Im}E=\mathbb R^2$.

    **3.** By the dimension theorem,
    $$
    \dim\ker E=\dim\mathbb R_3[x]-\dim\operatorname{Im}E=4-2=2.
    $$

    **4.** A polynomial lies in $\ker E$ exactly when it vanishes at both $0$ and $1$. By the factor theorem, each such polynomial has the unique form
    $$
    p(x)=x(x-1)(a+bx),\qquad a,b\in\mathbb R.
    $$
    Hence $\{x(x-1),x^2(x-1)\}$ is a basis for $\ker E$.

    **5.** The polynomial $p_0(x)=2-3x$ has $p_0(0)=2$ and $p_0(1)=-1$. A polynomial $p$ has these same values exactly when $p-p_0\in\ker E$. Thus there are infinitely many solutions, given by
    $$
    p(x)=2-3x+x(x-1)(a+bx),\qquad a,b\in\mathbb R.
    $$
