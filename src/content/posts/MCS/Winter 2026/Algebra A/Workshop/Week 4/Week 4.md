---
title: "Week 4"
published: 2026-11-09
description: "Workshop exercises and complete solutions on subspaces, spanning sets, sums, and intersections."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Determine which of the following subsets of $\mathbb R^3$ are subspaces. Justify your answers.

  1. $A=\{(x,y,z)\in\mathbb R^3:x-2y+z=0\}$.
  2. $B=\{(x,y,z)\in\mathbb R^3:x+y+z=1\}$.
  3. $C=\{(x,y,z)\in\mathbb R^3:xy=0\}$.
  4. $D=\{(x,y,z)\in\mathbb R^3:x=z\text{ and }y=0\}$.

  - **Solution 1.1**
    The zero vector belongs to $A$. If $u=(x_1,y_1,z_1)$ and $v=(x_2,y_2,z_2)$ belong to $A$, then
    $$
    (x_1+x_2)-2(y_1+y_2)+(z_1+z_2)
    =(x_1-2y_1+z_1)+(x_2-2y_2+z_2)=0.
    $$
    Hence $u+v\in A$. If $\lambda\in\mathbb R$, then
    $$
    \lambda x_1-2\lambda y_1+\lambda z_1
    =\lambda(x_1-2y_1+z_1)=0,
    $$
    so $\lambda u\in A$. Therefore, $A$ is a subspace of $\mathbb R^3$.

  - **Solution 1.2**
    The zero vector does not belong to $B$, because
    $$
    0+0+0\ne1.
    $$
    Therefore, $B$ is not a subspace of $\mathbb R^3$.

  - **Solution 1.3**
    The vectors
    $$
    (1,0,0)
    \qquad\text{and}\qquad
    (0,1,0)
    $$
    belong to $C$, but their sum $(1,1,0)$ does not, because $1\cdot1\ne0$. Thus $C$ is not closed under addition and is not a subspace of $\mathbb R^3$.

  - **Solution 1.4**
    Every vector in $D$ has the form
    $$
    (t,0,t)=t(1,0,1).
    $$
    Hence
    $$
    D=\operatorname{span}\{(1,0,1)\},
    $$
    so $D$ is a subspace of $\mathbb R^3$.

---

- **Exercise 2**
  Let $P_3(\mathbb R)$ be the vector space of real polynomials of degree at most $3$, and let
  $$
  W=\{p\in P_3(\mathbb R):p(1)=p(0)\text{ and }p(-1)=p(0)\}.
  $$

  1. Prove that $W$ is a subspace of $P_3(\mathbb R)$.
  2. Find a finite set of polynomials that spans $W$.
  3. Determine whether $x^3-x+2$ and $x^2-1$ belong to $W$.

  - **Solution 2.1**
    The zero polynomial belongs to $W$. Let $p,q\in W$. Then
    $$
    \begin{aligned}
    (p+q)(1)&=p(1)+q(1)=p(0)+q(0)=(p+q)(0),\\
    (p+q)(-1)&=p(-1)+q(-1)=p(0)+q(0)=(p+q)(0).
    \end{aligned}
    $$
    Hence $p+q\in W$.

    If $\lambda\in\mathbb R$, then
    $$
    \begin{aligned}
    (\lambda p)(1)&=\lambda p(1)=\lambda p(0)=(\lambda p)(0),\\
    (\lambda p)(-1)&=\lambda p(-1)=\lambda p(0)=(\lambda p)(0).
    \end{aligned}
    $$
    Thus $\lambda p\in W$, and $W$ is a subspace of $P_3(\mathbb R)$.

  - **Solution 2.2**
    Let
    $$
    p(x)=a+bx+cx^2+dx^3.
    $$
    The conditions $p(1)=p(0)$ and $p(-1)=p(0)$ give
    $$
    \begin{cases}
    b+c+d=0,\\
    -b+c-d=0.
    \end{cases}
    $$
    Adding the two equations gives $c=0$, and then $d=-b$. Therefore,
    $$
    p(x)=a+b(x-x^3).
    $$
    Hence
    $$
    W=\operatorname{span}\{1,x-x^3\}.
    $$

  - **Solution 2.3**
    Since
    $$
    x^3-x+2=2-(x-x^3),
    $$
    we have
    $$
    x^3-x+2\in W.
    $$
    On the other hand, if $q(x)=x^2-1$, then
    $$
    q(1)=0
    \qquad\text{and}\qquad
    q(0)=-1.
    $$
    Thus $q(1)\ne q(0)$, so
    $$
    x^2-1\notin W.
    $$

---

- **Exercise 3**
  Let $V=M_{2\times2}(\mathbb R)$ and
  $$
  W=\{A=(a_{ij})\in V:A^T=A\text{ and }a_{11}+a_{22}=0\}.
  $$
  Prove that $W$ is a subspace of $V$ and find a finite spanning set for $W$.

  - **Solution 3.1**
    The zero matrix is symmetric and has trace zero, so it belongs to $W$.

    Let $A,B\in W$. Then
    $$
    (A+B)^T=A^T+B^T=A+B,
    $$
    and
    $$
    \operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)=0.
    $$
    Hence $A+B\in W$.

    If $\lambda\in\mathbb R$, then
    $$
    (\lambda A)^T=\lambda A^T=\lambda A,
    $$
    and
    $$
    \operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A)=0.
    $$
    Thus $\lambda A\in W$, and $W$ is a subspace of $V$.

    Every matrix in $W$ has the form
    $$
    \begin{pmatrix}
    a&b\\
    b&-a
    \end{pmatrix}
    =a\begin{pmatrix}1&0\\0&-1\end{pmatrix}
    +b\begin{pmatrix}0&1\\1&0\end{pmatrix}.
    $$
    Therefore,
    $$
    W=\operatorname{span}\left\{
    \begin{pmatrix}1&0\\0&-1\end{pmatrix},
    \begin{pmatrix}0&1\\1&0\end{pmatrix}
    \right\}.
    $$

---

- **Exercise 4**
  In $\mathbb R^4$, let
  $$
  v_1=(1,0,1,2),
  \qquad
  v_2=(0,1,-1,1),
  \qquad
  v_3=(1,1,0,3),
  $$
  $$
  u=(2,3,-1,7),
  \qquad
  w=(2,3,0,7).
  $$

  1. Show that $v_3\in\operatorname{span}\{v_1,v_2\}$.
  2. Find a spanning set for $\operatorname{span}\{v_1,v_2,v_3\}$ containing only two vectors.
  3. Determine whether $u$ and $w$ belong to $\operatorname{span}\{v_1,v_2,v_3\}$.

  - **Solution 4.1**
    We have
    $$
    v_1+v_2=(1,1,0,3)=v_3.
    $$
    Therefore, $v_3\in\operatorname{span}\{v_1,v_2\}$.

  - **Solution 4.2**
    Since $v_3=v_1+v_2$,
    $$
    \operatorname{span}\{v_1,v_2,v_3\}
    =\operatorname{span}\{v_1,v_2\}.
    $$
    Thus $\{v_1,v_2\}$ is the required spanning set.

  - **Solution 4.3**
    A linear combination of $v_1$ and $v_2$ has the form
    $$
    av_1+bv_2=(a,b,a-b,2a+b).
    $$
    Taking $a=2$ and $b=3$ gives
    $$
    2v_1+3v_2=(2,3,-1,7)=u.
    $$
    Hence $u\in\operatorname{span}\{v_1,v_2,v_3\}$.

    If $w=av_1+bv_2$, then the first two coordinates require $a=2$ and $b=3$. The third coordinate would then be
    $$
    a-b=-1,
    $$
    but the third coordinate of $w$ is $0$. Therefore,
    $$
    w\notin\operatorname{span}\{v_1,v_2,v_3\}.
    $$

---

- **Exercise 5**
  Consider the following subspaces of $\mathbb R^3$:
  $$
  U=\operatorname{span}\{(1,1,0),(0,1,1)\},
  $$
  $$
  W=\operatorname{span}\{(1,0,-1),(1,2,1)\}.
  $$
  Prove that $U=W$ by expressing each of the given generators of one subspace as a linear combination of the generators of the other.

  - **Solution 5.1**
    Set
    $$
    u_1=(1,1,0),
    \qquad
    u_2=(0,1,1),
    $$
    $$
    w_1=(1,0,-1),
    \qquad
    w_2=(1,2,1).
    $$
    We have
    $$
    w_1=u_1-u_2
    \qquad\text{and}\qquad
    w_2=u_1+u_2.
    $$
    Hence $w_1,w_2\in U$, so $W\subseteq U$.

    Conversely,
    $$
    u_1=\frac12(w_1+w_2)
    \qquad\text{and}\qquad
    u_2=\frac12(w_2-w_1).
    $$
    Thus $u_1,u_2\in W$, so $U\subseteq W$. Therefore,
    $$
    U=W.
    $$

---

- **Exercise 6**
  Let $U$ and $W$ be the following subspaces of $\mathbb R^4$:
  $$
  U=\{(x,y,z,w)\in\mathbb R^4:x+y=0,\ z-y=0\},
  $$
  $$
  W=\operatorname{span}\{(1,1,1,1),(0,0,1,0)\}.
  $$
  Find a finite spanning set for each of the subspaces $U+W$ and $U\cap W$. Justify your answers.

  - **Solution 6.1 (The sum)**
    The equations defining $U$ give
    $$
    x=-y
    \qquad\text{and}\qquad
    z=y.
    $$
    Hence
    $$
    U=\operatorname{span}\{(-1,1,1,0),(0,0,0,1)\}.
    $$
    Therefore,
    $$
    U+W
    =\operatorname{span}\{(-1,1,1,0),(0,0,0,1),(1,1,1,1),(0,0,1,0)\}.
    $$
    These four vectors are linearly independent. Indeed, if
    $$
    a(-1,1,1,0)+b(0,0,0,1)+c(1,1,1,1)+d(0,0,1,0)=0,
    $$
    then the first two coordinates give
    $$
    -a+c=0
    \qquad\text{and}\qquad
    a+c=0,
    $$
    so $a=c=0$. The third and fourth coordinates then give $d=0$ and $b=0$. Thus the four vectors span $\mathbb R^4$, and
    $$
    U+W=\mathbb R^4.
    $$

  - **Solution 6.2 (The intersection)**
    Every vector in $W$ has the form
    $$
    \alpha(1,1,1,1)+\beta(0,0,1,0)
    =(\alpha,\alpha,\alpha+\beta,\alpha).
    $$
    For this vector to belong to $U$, it must satisfy
    $$
    \alpha+\alpha=0
    \qquad\text{and}\qquad
    (\alpha+\beta)-\alpha=0.
    $$
    Hence $\alpha=0$ and $\beta=0$. Therefore,
    $$
    U\cap W=\{0\}
    =\operatorname{span}\{(0,0,0,0)\}.
    $$
