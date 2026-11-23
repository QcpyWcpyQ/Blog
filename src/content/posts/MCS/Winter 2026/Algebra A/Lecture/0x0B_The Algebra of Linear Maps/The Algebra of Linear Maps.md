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
    Let $V$ and $W$ be finite-dim vector spaces over $\mathbb F$ and let $L(V,W)=\{T\colon V\to W:T \text{ is linear}\}$.  
    We now define a $+$ and $\cdot$ as a function
    $$
    \forall v\in V,(T+S)(v)=T(v)+S(v) \\
    \forall v\in V,\lambda \in \mathbb F,(\lambda T)(v)=\lambda\cdot T(v).
    $$

- **Remark 1.1**  
    These are the definitions we made on $\mathcal F(X,W)$ with $X=V$.

- **Observation 1.2**  
    $$
    L(V,W)\subseteq \mathcal F(V,W).
    $$

- **Theorem 1.3**  
    $L(V,W)$ is an $\mathbb F$-vector space with the above $+$ and $\cdot$.
    
    - **Proof 1.3.1**  
        Let's prove that $L(V,W)$ is a subspace of $\mathcal F(V,W)$. That is, we need to check that $T+S$ is linear for all $T,S$ and that $\lambda\cdot T$ is linear for all $T$ and $\lambda$.  
        $$
        \begin{aligned}(T+S)(\mu v_1+v_1) &= T(\mu v_1+v_2)+S(\mu v_1+v_2)  \\
        &= \mu T(v_1)+T(v_2)+\mu S(v_1)+S(v_2) \\
        &= \mu T(v_1)+\mu S(v_1)+T(v_2)+S(v_2) \\
        &= \mu(T(v_1)+S(v_1))+T(v_2)+S(v_2) \\
        &= \mu(T+S)(v_1)+(T+S)(v_2)
        \end{aligned}
        $$
    
        $$
        \begin{aligned}(\lambda T)(\mu v_1+v_1) &= \lambda \cdot T(\mu v_1+v_2) \\
        &= \lambda(\mu T(v_1)+T(v_2))  \\
        &= \lambda\mu T(v_1)+\lambda T(v_2) \\
        &= \mu \cdot(\lambda\cdot T)(v_1)+(\lambda\cdot T)(v_2)
        \end{aligned}
        $$
    
- **Theorem 1.4**  
    If $\dim V=n$ and $\dim W=m$ then $\dim L(V,W)=n\cdot m$.
    
    - **Proof 1.4.1**  
        Assume $\{v_1,\cdots,v_n\}$ and $\{w_1,\cdots,w_m\}$ are bases of $B$ and $W$ respectively.
    