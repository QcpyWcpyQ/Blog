---
title: "Invertible Linear Maps"
published: 2026-11-25
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Proposition 1**
  Given a linear map $T\colon V\to W$, does it have a linear inverse? That is, is there a linear map $S\colon W\to V$ such that $TS=I_W$ and $ST=I_V$?

  If the linear map $T\colon V\to W$ is bijective, then its set-theoretic inverse $T^{-1}\colon W\to V$ is linear.

  - **Proof 1.1**
    We want to check that
    $$
    v_1:=T^{-1}(\lambda w_1+w_2)
    $$
    and
    $$
    v_2:=\lambda T^{-1}(w_1)+T^{-1}(w_2)
    $$
    are equal. Since $T$ is injective, it suffices to show that $T(v_1)=T(v_2)$. We have
    $$
    T(v_1)=\lambda w_1+w_2
    $$
    and
    $$
    \begin{aligned}
    T(v_2)
    &=T\bigl(\lambda T^{-1}(w_1)+T^{-1}(w_2)\bigr)\\
    &=\lambda T(T^{-1}(w_1))+T(T^{-1}(w_2))\\
    &=\lambda w_1+w_2.
    \end{aligned}
    $$
    Therefore, $v_1=v_2$.

- **Notation 1.2**
  An invertible map is called nonsingular. A noninvertible map is called singular.

- **Lemma 1.3**
  A map $T\in L(V,W)$ is injective if and only if it carries every linearly independent set to a linearly independent set.

  - **Proof 1.3.1**
    Suppose that $T$ is injective, and let $\{v_1,\ldots,v_k\}$ be a linearly independent set. If
    $$
    0=\lambda_1 T(v_1)+\cdots+\lambda_k T(v_k)
    =T(\lambda_1 v_1+\cdots+\lambda_k v_k),
    $$
    then $v=\lambda_1 v_1+\cdots+\lambda_k v_k$ belongs to $\ker T$. Since $T$ is injective,
    $$
    \lambda_1 v_1+\cdots+\lambda_k v_k=0
    \implies \lambda_1=\cdots=\lambda_k=0.
    $$
    Therefore, $\{T(v_1),\ldots,T(v_k)\}$ is linearly independent.

    Conversely, suppose that $T$ carries linearly independent sets to linearly independent sets. Let $v\in\ker T$. We want to prove that $v=0$. If $v\ne0$, then $\{v\}$ is linearly independent, so $\{T(v)\}$ is linearly independent. This gives $T(v)\ne0$, contradicting $v\in\ker T$. Hence $v=0$, and $T$ is injective.

- **Observation 1.4**
  Let $V$ and $W$ be finite-dimensional vector spaces of the same dimension, and let $T\colon V\to W$ be linear. Then $T$ is injective if and only if it is surjective, which holds if and only if it is invertible.

  - **Proof 1.4.1**
    The proof follows directly from the fundamental theorem for linear maps.

---

- **Theorem 2**
  Let $V$ and $W$ have dimension $n$. For $T\in L(V,W)$, the following statements are equivalent.

  1. $T$ is invertible.
  2. $T$ is injective.
  3. $T$ is surjective.
  4. $T$ carries bases to bases.
  5. $T$ carries one basis to a basis.

  - **Proof 2.1**
    Statements 1, 2, and 3 are equivalent by Observation 1.4. Statement 4 immediately implies statement 5.

    We prove that 2 implies 4. By Lemma 1.3, if $\{v_1,\ldots,v_n\}$ is a basis of $V$, then $\{T(v_1),\ldots,T(v_n)\}$ is linearly independent. Since $\dim W=n$, it is a basis of $W$.

    We now prove that 5 implies 2. Let $\{v_1,\ldots,v_n\}$ be a basis that $T$ carries to a basis of $W$. For $v\in\ker T$, write $v=\lambda_1 v_1+\cdots+\lambda_n v_n$. Then
    $$
    0=T(v)=\lambda_1 T(v_1)+\cdots+\lambda_n T(v_n).
    $$
    Hence $\lambda_1=\cdots=\lambda_n=0$, so $v=0$. Therefore, $T$ is injective.

---

- **Definition 3**
  An isomorphism between two vector spaces $V$ and $W$ is an invertible linear map $T\colon V\to W$. Two vector spaces $V$ and $W$ are said to be isomorphic if there is an isomorphism between them.

- **Notation 3.1**
  $V\cong W$.

- **Remark 3.2**
  The relation $\cong$ is an equivalence relation.

- **Theorem 3.3 (Classification theorem)**
  Every $n$-dimensional $\mathbb F$-vector space is isomorphic to $\mathbb F^n$.

  - **Proof 3.3.1**
    Let $V$ be an $n$-dimensional $\mathbb F$-vector space, and let $\{v_1,\ldots,v_n\}$ be a basis of $V$. Let $T\colon V\to\mathbb F^n$ be the linear map such that $T(v_i)=e_i$ for $i=1,\ldots,n$.

    Why is $T$ well defined? This follows from the fundamental theorem of linear algebra. Why is $T$ an isomorphism? This follows from Theorem 2.

- **Note 3.4**
  Finite-dimensional vector spaces are classified up to isomorphism by their dimension.

- **Notation 3.5**
  An isomorphism from $V$ to itself is called an automorphism.

- **Remark 3.6**
  $$
  \begin{CD}
  V @>{T}>> W\\
  @A{\varphi}AA @VV{\Psi}V\\
  V @>>{T'}> W
  \end{CD}
  $$

  - Given an isomorphism $T\colon V\to W$ and any automorphisms $\varphi$ of $V$ and $\Psi$ of $W$, the map $T'=\Psi T\varphi$ is an isomorphism from $V$ to $W$.

  - Conversely, given any isomorphism $T'\colon V\to W$, there exist automorphisms $\varphi$ of $V$ and $\Psi$ of $W$ such that $T'=\Psi T\varphi$. For instance, take $\varphi=I$ and $\Psi=T'T^{-1}$. Then
    $$
    \Psi T\varphi=T'T^{-1}TI=T'.
    $$

- **Question 3.7**
  Is the set of isomorphisms from $V$ to $W$ a subspace of $L(V,W)$?

  In general, no. If $T$ is an isomorphism, so is $-T$, and their sum is the zero map.
  $$
  T+(-T)=0.
  $$
  For the linear maps associated with matrices $A$ and $B$, we have
  $$
  T_A+T_B=T_{A+B}.
  $$

- **Example 3.8**

  1. The set
     $$
     V=\{(x,y,z)\in\mathbb R^3:x+y+z=0\}
     $$
     is a plane in $\mathbb R^3$. Since $\dim V=2$, we have $V\cong\mathbb R^2$.

     Define the maps $T\colon V\to\mathbb R^2$ and $S\colon\mathbb R^2\to V$ by
     $$
     \begin{aligned}
     T(x,y,z)&=(x,y),\\
     S(x,y)&=(x,y,-x-y).
     \end{aligned}
     $$
     Check that $TS=I_{\mathbb R^2}$ and $ST=I_V$.

  2. The space
     $$
     V=\{A\in M_{2\times2}(\mathbb C):\operatorname{tr}(A)=0\}
     $$
     is the kernel of the trace map $\operatorname{tr}\colon M_{2\times2}(\mathbb C)\to\mathbb C$. Thus $\dim V=3$ and $V\cong\mathbb C^3$.

     The maps $T\colon V\to\mathbb C^3$ and $S\colon\mathbb C^3\to V$ are given by
     $$
     \begin{aligned}
     T\colon \begin{pmatrix}a&b\\c&-a\end{pmatrix}
       &\longmapsto (a,b,c),\\
     S\colon (a,b,c)
       &\longmapsto \begin{pmatrix}a&b\\c&-a\end{pmatrix}.
     \end{aligned}
     $$

  3. The set of real sequences
     $$
     V=\{(a_n)\in\mathcal F(\mathbb N_0,\mathbb R):a_{n+2}=a_{n+1}+a_n\text{ for all }n\ge 0\}
     $$
     is a subspace of $\mathcal F(\mathbb N_0,\mathbb R)$. What is $\dim V$?

     The linear map
     $$
     T\colon V\to\mathbb R^2,\qquad (a_n)\longmapsto(a_0,a_1)
     $$
     is surjective, and induction shows that it is injective. Thus $\dim V=2$. In particular, a basis for $V$ is
     $$
     \{(1,0,1,1,2,3,5,\ldots),\ (0,1,1,2,3,5,\ldots)\}.
     $$

  4. The set of magic squares
     $$
     V=\{A\in M_{3\times3}(\mathbb R):A\text{ is magic}\}
     $$
     is a subspace of $M_{3\times3}(\mathbb R)$. What is $\dim V$?

     In a magic square, each row, each column, and each of the two diagonals has the same sum $s$. For example,
     $$
     \begin{pmatrix}
     8&1&6\\
     3&5&7\\
     4&9&2
     \end{pmatrix}
     \qquad (s=15).
     $$

     Consider the four sums involving the center entry $c$. Together they count every entry once and the center three additional times, so
     $$
     4s=3s+3c\quad\Longrightarrow\quad s=3c.
     $$

     The isomorphism $T\colon\mathbb R^3\to V$ is given by
     $$
     T\colon(a,b,c)\longmapsto
     \begin{pmatrix}
     a+c&c-a-b&b+c\\
     c-a+b&c&c-b+a\\
     c-b&c+a+b&c-a
     \end{pmatrix}.
     $$
     Hence $\dim V=3$.
