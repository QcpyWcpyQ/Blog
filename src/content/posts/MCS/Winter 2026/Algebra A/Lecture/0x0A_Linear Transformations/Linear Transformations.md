---
title: "Linear Transformations"
published: 2026-11-16
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**  
  Let $V$ and $W$ be $\mathbb F$-vector spaces. A map (or transformation)
  $$
  T\colon V\longrightarrow W
  $$
  is called linear if

  1. $T(u+v)=T(u)+T(v)$ for all $u,v\in V$.
  2. $T(\lambda v)=\lambda T(v)$ for all $v\in V$ and all $\lambda\in\mathbb F$.

- **Example 1.1**  
  1. The zero map
     $$
     T\colon V\longrightarrow W,
     \qquad
     T(v)=0
     $$
     for every $v\in V$ is linear.

  2. The identity map
     $$
     \operatorname{id}_V\colon V\longrightarrow V,
     \qquad
     \operatorname{id}_V(v)=v
     $$
     for every $v\in V$ is linear.

  3. The map
     $$
     T\colon\mathbb R^2\longrightarrow\mathbb R^3,
     \qquad
     T(x,y)=(x+y,0,x-y)
     $$
     is linear.

  4. The map
     $$
     T\colon\mathbb R^2\longrightarrow\mathbb R^3,
     \qquad
     T(x,y)=(x+y+1,0,x-y-1)
     $$
     is not linear because
     $$
     T(0,0)=(1,0,-1)\ne(0,0,0).
     $$

- **Example 1.2**  
  The following maps are linear.

  1. Given $A\in M_{m\times n}(\mathbb F)$, define
     $$
     T_A\colon\mathbb F^n\longrightarrow\mathbb F^m,
     \qquad
     T_A(v)=Av.
     $$

  2. The transpose map
     $$
     T\colon M_{n\times n}(\mathbb F)\longrightarrow M_{n\times n}(\mathbb F),
     \qquad
     T(A)=A^{\mathsf T}.
     $$

  3. The map
     $$
     T\colon M_{n\times n}(\mathbb F)\longrightarrow M_{n\times n}(\mathbb F),
     \qquad
     T(A)=A+A^{\mathsf T}.
     $$

  4. For $a\in\mathbb F$, the evaluation map
     $$
     E_a\colon\mathbb F[x]\longrightarrow\mathbb F,
     \qquad
     E_a(p(x))=p(a).
     $$

  5. The map
     $$
     T\colon\mathbb C_3[x]\longrightarrow\mathbb C_4[x],
     \qquad
     T(p(x))=(x+i)p(x).
     $$

---

- **Theorem 2 (Fundamental theorem of linear algebra)**  
  Let $V$ be a finite-dimensional $\mathbb F$-vector space, and let
  $$
  \mathcal B=(v_1,\ldots,v_n)
  $$
  be an ordered basis of $V$. Let $W$ be an $\mathbb F$-vector space. For any vectors
  $$
  w_1,\ldots,w_n\in W,
  $$
  there exists a unique linear map
  $$
  T\colon V\longrightarrow W
  $$
  such that
  $$
  T(v_i)=w_i
  \qquad
  \text{for every }i\in\{1,\ldots,n\}.
  $$

  - **Proof 2.1**  
    We first construct $T$. Given $v\in V$, there exist unique scalars
    $$
    \lambda_1,\ldots,\lambda_n\in\mathbb F
    $$
    such that
    $$
    v=\lambda_1v_1+\cdots+\lambda_nv_n.
    $$
    Since $T$ must be linear and satisfy $T(v_i)=w_i$, its value at $v$ must be
    $$
    \begin{aligned}
    T(v)
    &=\lambda_1T(v_1)+\cdots+\lambda_nT(v_n)\\
    &=\lambda_1w_1+\cdots+\lambda_nw_n.
    \end{aligned}
    $$
    Therefore, define
    $$
    T(v)=\lambda_1w_1+\cdots+\lambda_nw_n.
    $$
    This is well-defined because the coordinates $\lambda_1,\ldots,\lambda_n$ are unique.

    We verify the required properties.

    1. The map $T$ is linear. Let
       $$
       u=\mu_1v_1+\cdots+\mu_nv_n
       $$
       and
       $$
       v=\lambda_1v_1+\cdots+\lambda_nv_n.
       $$
       Then
       $$
       u+v=(\mu_1+\lambda_1)v_1+\cdots+(\mu_n+\lambda_n)v_n,
       $$
       so
       $$
       \begin{aligned}
       T(u+v)
       &=(\mu_1+\lambda_1)w_1+\cdots+(\mu_n+\lambda_n)w_n\\
       &=(\mu_1w_1+\cdots+\mu_nw_n)
         +(\lambda_1w_1+\cdots+\lambda_nw_n)\\
       &=T(u)+T(v).
       \end{aligned}
       $$
       Moreover, for every $\alpha\in\mathbb F$,
       $$
       \begin{aligned}
       T(\alpha u)
       &=T\bigl((\alpha\mu_1)v_1+\cdots+(\alpha\mu_n)v_n\bigr)\\
       &=(\alpha\mu_1)w_1+\cdots+(\alpha\mu_n)w_n\\
       &=\alpha T(u).
       \end{aligned}
       $$

    2. For every $i\in\{1,\ldots,n\}$,
       $$
       v_i=0v_1+\cdots+1v_i+\cdots+0v_n.
       $$
       Hence
       $$
       T(v_i)=0w_1+\cdots+1w_i+\cdots+0w_n=w_i.
       $$

    3. The map $T$ is unique. Suppose that
       $$
       S\colon V\longrightarrow W
       $$
       is linear and satisfies
       $$
       S(v_i)=w_i
       \qquad
       \text{for every }i\in\{1,\ldots,n\}.
       $$
       For every
       $$
       v=\lambda_1v_1+\cdots+\lambda_nv_n\in V,
       $$
       linearity gives
       $$
       \begin{aligned}
       S(v)
       &=S(\lambda_1v_1+\cdots+\lambda_nv_n)\\
       &=\lambda_1S(v_1)+\cdots+\lambda_nS(v_n)\\
       &=\lambda_1w_1+\cdots+\lambda_nw_n\\
       &=T(v).
       \end{aligned}
       $$
       Thus $S=T$, proving uniqueness.
  
- **Example 2.2**  

  1. $V=\mathbb R^3,W=\mathbb R[x],\mathcal B=\{(1,0,0),(1,1,0),(1,1,1)\},p_1(x)=2-x^3,p_2(x)=1-x+x^2,p_3(x)=x-x^4$. Then $\exists ! T\colon V \to W,T(v_i)=p_1(x)$. We have  
      $$
      T(a,b,c)=T((a-b)v_1+(b-c)v_2+cv_3)=(a-b)Tv_1+(b-c)Tv_2+cTv_3=(a-b)p_1(x)+(b-c)p_2(x)+cp_3(x).
      $$
      Then $T(e_1)=T(v_1)=p_1(x)=2-x^3,T(e_2)=-p_1(x)+p_2(x)=-1-x+x^2+x^3,T(e_3)=-p_2(x)+p_3(x)=-1+2x-x^2-x^4$.

  2. $V=\mathbb C^3,W=M_{2\times 2}(\mathbb C),v_1=(1,0,i),v_2=(-i,i,0),v_3=(0,1,i),A_1=\begin{pmatrix}1&0\\0&1\end{pmatrix},A_2=\begin{pmatrix}0&1\\0&0\end{pmatrix},A_3=\begin{pmatrix}0&0\\1&0\end{pmatrix}$. Is there a linear map $T\colon V\to W$ such that $T(v_i)=A_i$?

      Let's compute $T(v_1-iv_2-v_3)=\begin{pmatrix}1&0\\0&1\end{pmatrix}-\begin{pmatrix}0&i\\0&0\end{pmatrix}-\begin{pmatrix}0&0\\1&0\end{pmatrix}=\begin{pmatrix}1&-i\\-1&1\end{pmatrix}$ No. Since $v_1,v_2,v_3$ are not bases. Let's change $A_3=\begin{pmatrix}1&-i\\0&1\end{pmatrix}$.

---

- **Proposition 3**  
    Given a linear map $T\colon V\to W$. Consider  
    $$
    \ker T=\{v\in V:T(v)=0\}\subseteq V.
    $$

    $$
    \Im T=\{w\in W:\exists v\in V,T(v)=w\}.
    $$

    Both $\ker T$ and $\Im T$ are subspaces of $V$ and $W$ respectively.

    - **Proof 3.1**   

- **Remark 3.2**  
    $T$ is surjective if and only if $\Im T=W$. $T$ is injective if and only if $\ker T=0$.

---

- **Theorem 4**  
    Let $V$ and $W$ be finite-dimmensional $\mathbb F$-vector spaces and let $T\colon V\to W$ be a linear map. Then $\dim\ker T+\dim \Im T=\dim T$.
