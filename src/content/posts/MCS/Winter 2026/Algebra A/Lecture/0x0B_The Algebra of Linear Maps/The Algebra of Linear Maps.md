---
title: "The Algebra of Linear Maps"
published: 2026-11-23
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $V$ and $W$ be finite-dimensional vector spaces over $\mathbb F$, and let
  $$
  L(V,W)=\{T\colon V\to W:T\text{ is linear}\}.
  $$
  For $T,S\in L(V,W)$ and $\lambda\in\mathbb F$, addition and scalar multiplication are defined at each $v\in V$ by
  $$
  \begin{aligned}
  (T+S)(v)&=T(v)+S(v),\\
  (\lambda T)(v)&=\lambda\cdot T(v).
  \end{aligned}
  $$

- **Remark 1.1**
  These are the operations defined on $\mathcal F(X,W)$ with $X=V$.

- **Observation 1.2**
  $$
  L(V,W)\subseteq\mathcal F(V,W).
  $$

- **Theorem 1.3**
  With the addition and scalar multiplication defined above, $L(V,W)$ is an $\mathbb F$-vector space.

  - **Proof 1.3.1**
    We show that $L(V,W)$ is a subspace of $\mathcal F(V,W)$. The zero map from $V$ to $W$ is linear, so it belongs to $L(V,W)$. It remains to check that $T+S$ is linear for all $T,S\in L(V,W)$ and that $\lambda T$ is linear for all $T\in L(V,W)$ and $\lambda\in\mathbb F$.
    $$
    \begin{aligned}
    (T+S)(\mu v_1+v_2)
    &=T(\mu v_1+v_2)+S(\mu v_1+v_2)\\
    &=\mu T(v_1)+T(v_2)+\mu S(v_1)+S(v_2)\\
    &=\mu T(v_1)+\mu S(v_1)+T(v_2)+S(v_2)\\
    &=\mu\bigl(T(v_1)+S(v_1)\bigr)+T(v_2)+S(v_2)\\
    &=\mu(T+S)(v_1)+(T+S)(v_2).
    \end{aligned}
    $$
    $$
    \begin{aligned}
    (\lambda T)(\mu v_1+v_2)
    &=\lambda\cdot T(\mu v_1+v_2)\\
    &=\lambda\bigl(\mu T(v_1)+T(v_2)\bigr)\\
    &=\lambda\mu T(v_1)+\lambda T(v_2)\\
    &=\mu(\lambda T)(v_1)+(\lambda T)(v_2).
    \end{aligned}
    $$

- **Theorem 1.4**
  If $\dim V=n$ and $\dim W=m$, then $\dim L(V,W)=n\cdot m$.

  - **Proof 1.4.1**
    Let $\{v_1,\ldots,v_n\}$ and $\mathcal B'=\{w_1,\ldots,w_m\}$ be bases of $V$ and $W$, respectively. For each $1\leqslant q\leqslant n$ and $1\leqslant p\leqslant m$, let $E_{p,q}$ be the linear map from $V$ to $W$ defined by
    $$
    E_{p,q}(v_k)=
    \begin{cases}
    w_p & \text{if }k=q,\\
    0   & \text{if }k\ne q.
    \end{cases}
    $$

    We claim that $\{E_{p,q}\}_{p,q}$ is a basis of $L(V,W)$. Let $T\in L(V,W)$. Then
    $$
    \begin{aligned}
    T=\sum_{p,q}a_{p,q}E_{p,q}
    &\implies T(v_j)=\sum_{p,q}a_{p,q}E_{p,q}(v_j)\\
    &\implies T(v_j)=\sum_p a_{p,j}w_p.
    \end{aligned}
    $$

    We first show that $\{E_{p,q}\}_{p,q}$ spans $L(V,W)$. For each $q$, define the coefficients $a_{p,q}$, $1\leqslant p\leqslant m$, by
    $$
    T(v_q)=\sum_{p=1}^m a_{p,q}w_p,
    \qquad
    (a_{1,q},\ldots,a_{m,q})=[T(v_q)]_{\mathcal B'}.
    $$
    Then $T=\sum_{p,q}a_{p,q}E_{p,q}$. Indeed, for every $j$,
    $$
    T(v_j)=\left(\sum_{p,q}a_{p,q}E_{p,q}\right)(v_j),
    $$
    because
    $$
    \begin{aligned}
    \sum_{p,q}a_{p,q}E_{p,q}(v_j)
    &=\sum_p a_{p,j}E_{p,j}(v_j)\\
    &=\sum_p a_{p,j}w_p\\
    &=T(v_j).
    \end{aligned}
    $$

    To see that $\{E_{p,q}\}_{p,q}$ is linearly independent, suppose that $\sum_{p,q}\lambda_{p,q}E_{p,q}=0$. For every $j$,
    $$
    \begin{aligned}
    0&=\left(\sum_{p,q}\lambda_{p,q}E_{p,q}\right)(v_j)\\
     &=\sum_{p,q}\lambda_{p,q}E_{p,q}(v_j)\\
     &=\sum_{p=1}^m\lambda_{p,j}E_{p,j}(v_j)\\
     &=\sum_{p=1}^m\lambda_{p,j}w_p.
    \end{aligned}
    $$
    The linear independence of $w_1,\ldots,w_m$ gives $\lambda_{p,j}=0$ for every $p$. Since $j$ was arbitrary, $\lambda_{p,j}=0$ for all $p,j$. Thus the $nm$ maps $E_{p,q}$ form a basis of $L(V,W)$, so $\dim L(V,W)=nm$.

- **Proposition 1.5**
  The composition of linear maps is linear.

  - **Proof 1.5.1**
    Let $S\colon V\to U$ and $T\colon U\to W$ be linear maps. For all $v_1,v_2\in V$ and $\lambda\in\mathbb F$, linearity of $S$ and then of $T$ gives
    $$
    \begin{aligned}
    (T\circ S)(\lambda v_1+v_2)
    &=T\bigl(S(\lambda v_1+v_2)\bigr)\\
    &=T\bigl(\lambda S(v_1)+S(v_2)\bigr)\\
    &=\lambda T(S(v_1))+T(S(v_2))\\
    &=\lambda(T\circ S)(v_1)+(T\circ S)(v_2).
    \end{aligned}
    $$
    Hence $T\circ S$ is linear.

- **Notation 1.6**
  $\operatorname{End}(V)=L(V,V)$.

- **Observation 1.7**
  If $T,S\in\operatorname{End}(V)$, then both $T\circ S$ and $S\circ T$ belong to $\operatorname{End}(V)$. We write $TS=T\circ S$ and call $TS$ the product of $T$ and $S$.

- **Lemma 1.8**
  The following identities hold in $\operatorname{End}(V)$.

  1. For every $T\in\operatorname{End}(V)$, $IT=T=TI$, where $I$ is the identity map on $V$.
  2. For all $S,T,U\in\operatorname{End}(V)$, $U(T+S)=UT+US$ and $(T+S)U=TU+SU$.
  3. For all $U,T\in\operatorname{End}(V)$ and $\lambda\in\mathbb F$, $\lambda(UT)=(\lambda U)T=U(\lambda T)$.

  - **Proof 1.8.1**
    We verify each identity at an arbitrary $v\in V$.

    1. Since $I(v)=v$, we have $(IT)(v)=I(T(v))=T(v)$ and $(TI)(v)=T(I(v))=T(v)$.

    2. By linearity of $U$,
       $$
       \begin{aligned}
       \bigl(U(T+S)\bigr)(v)
       &=U\bigl(T(v)+S(v)\bigr)\\
       &=U(T(v))+U(S(v))\\
       &=(UT+US)(v).
       \end{aligned}
       $$
       By the definition of addition,
       $$
       \begin{aligned}
       \bigl((T+S)U\bigr)(v)
       &=(T+S)(U(v))\\
       &=T(U(v))+S(U(v))\\
       &=(TU+SU)(v).
       \end{aligned}
       $$

    3. By the definition of scalar multiplication and the linearity of $U$,
       $$
       \begin{aligned}
       \bigl(\lambda(UT)\bigr)(v)
       &=\lambda U(T(v))\\
       &=(\lambda U)(T(v))\\
       &=\bigl((\lambda U)T\bigr)(v)\\
       &=U\bigl(\lambda T(v)\bigr)\\
       &=\bigl(U(\lambda T)\bigr)(v).
       \end{aligned}
       $$

    The identities follow because the maps agree at every $v\in V$.

- **Example 1.9**

  1. Let $T\colon\mathbb R^2\to\mathbb R^3$ and $S\colon\mathbb R^3\to\mathbb R^2$ be given by
     $$
     \begin{aligned}
     T(x,y)&=(x+y,y,-x),\\
     S(x,y,z)&=(x-y,y-z).
     \end{aligned}
     $$
     What is $TS$? What is $ST$? We have
     $$
     \begin{aligned}
     (TS)(a,b,c)&=T(S(a,b,c))=T(a-b,b-c)=(a-c,b-c,b-a),\\
     (ST)(r,s)&=S(T(r,s))=S(r+s,s,-r)=(r,s+r).
     \end{aligned}
     $$

  2. Let $A\in M_{m\times n}(\mathbb F)$ and $B\in M_{r\times m}(\mathbb F)$, with associated linear maps $T_A\colon\mathbb F^n\to\mathbb F^m$ and $T_B\colon\mathbb F^m\to\mathbb F^r$. What is $T_BT_A$? For every $X\in\mathbb F^n$, we have
     $$
     (T_BT_A)(X)=T_B(T_A(X))=T_B(AX)=B(AX)=(BA)X=T_{BA}(X).
     $$
     Hence $T_BT_A=T_{BA}$.

  3. Let $V=\mathbb C[x]$, and let $T,S\in\operatorname{End}(V)$ be given by differentiation, $T(p(x))=p'(x)$, and multiplication by $x$, $S(p(x))=xp(x)$, respectively. What is $TS$? What is $ST$? For every $p(x)\in V$, the product rule gives
     $$
     (TS)(p(x))=T(xp(x))=(xp(x))'=p(x)+xp'(x).
     $$
     Applying $S$ after $T$ gives
     $$
     (ST)(p(x))=S(p'(x))=xp'(x).
     $$
