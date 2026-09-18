---
title: "Irreducibility in K[x]"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Irreducibility in $\mathbb K[x]$

- **Definition 1**
  A polynomial $p(x)\in\mathbb K[x]$ with $\deg(p(x))>0$ is **irreducible** over $\mathbb K$ if whenever $p(x)=q(x)h(x)$ for some $q(x),h(x)\in\mathbb K[x]$ then either $q(x)$ or $h(x)$ is a constant polynomial. Otherwise, $p(x)$ is **reducible**.

  - **Example 1.1**  
    The polynomial $p(x)=x^2-3$ is irreducible over $\mathbb Q$ but is reducible over $\mathbb R$ since
    $$
    p(x)=\left(x+\sqrt 3\right)\left(x-\sqrt 3\right).
    $$

---

- **Definition 2**  
  Let $p(x)\in\mathbb K[x]$. An element $\alpha\in\mathbb K$ is a root of $p(x)$ if $p(\alpha)=0$.
  - **Example 2.1**  
    The polynomial $p(x)=(x-1)(x-2)(x+3)$ has roots $1, 2$ and $-3$.  
    The polynomial $p(x)=x^2+1$ has no roots in $\mathbb R$ but has two roots $\i$ and $-\i$ in $\mathbb C$.

---

- **Definition 3**  
  Let $p(x),q(x)\in\mathbb K[x]$. We say that $q(x)$ divides $p(x)$, denoted $q(x)\mid p(x)$, if there exists $h(x)\in\mathbb K[x]$ such that
  $$
  p(x)=q(x)h(x).
  $$

  - **Theorem 3.1 (Factor Theorem)**
    Let $p(x)\in\mathbb K[x]$ and $\alpha\in\mathbb K$, then $\alpha$ is a root of $p(x)$ if and only if $(x-\alpha)\mid p(x)$.

    - **Proof 3.1.1**  
      Suppose $p(x)\in\mathbb K[x]$ and \(\alpha\in\mathbb K\).  
      ($\Longrightarrow$) Suppose that $\alpha$ is a root of $p(x)$ then $p(\alpha)=0$ and by the remainder theorem there exists $q(x)\in\mathbb K[x]$ such that
      $$
      p(x)=(x-\alpha)q(x)+p(\alpha)=(x-\alpha)q(x).
      $$
      That is, $(x-\alpha)\mid p(x)$.

      ($\Longleftarrow$) Suppose that $(x-\alpha)\mid p(x)$. By definition, there exists $q(x)\in\mathbb K[x]$ such that $p(x)=(x-\alpha)q(x)$. Hence $p(\alpha)=0$ and thus $\alpha$ is a root of $p(x)$.

  - **Example 3.2**  
    Consider $p(x)=x^3-2x^2-5x+6$. Since $p(1)=1-2-5+6=0$ then by the factor theorem $(x-1)\mid p(x)$. Furthermore  
    $$
    p(x)=(x-1)\left(x^2-x-6\right).
    $$

  - **Corollary 3.3**
    Let $p(x)\in\mathbb K[x]$ with $\deg(p(x))>1$. If $p(x)$ has a root in $\mathbb K$ then $p(x)$ is reducible over $\mathbb K$.

    - **Proof 3.3.1**
      Let $\alpha$ be a root of $p(x)$, then by the factor theorem $(x-\alpha)\mid p(x)$, that is, there exists a polynomial $q(x)\in\mathbb K[x]$ such that $p(x)=(x-\alpha)q(x)$. Since
      $$
      \deg(p(x))=\deg((x-\alpha)q(x))=1+\deg(q(x))>1.
      $$
      Then $q(x)$ is not a constant polynomial and thus $p(x)$ is reducible over $\mathbb K$.

  - **Remark 3.4**
    The converse is false. Consider $p(x)=x^4+2x^2+1\in\mathbb R[x]$, then $p(x)$ is reducible over $\mathbb R$ since
    $$
    p(x)=\left(x^2+1\right)\left(x^2+1\right).
    $$
    But $p(x)$ has no roots in $\mathbb R$.

  - **Proposition 3.5**  
    Let $p(x)\in\mathbb K[x]$.

    1. If \(\deg(p(x))=1\), then $p(x)$ is irreducible over $\mathbb K$.
    2. If $\deg(p(x))$ is $2$ or $3$, then $p(x)$ is irreducible over $\mathbb K$ if and only if $p(x)$ has no roots in $\mathbb K$.

    - **Proof 3.5.1**

      1. If $p(x)=q(x)h(x)$ then
         $$
         1=\deg(p(x))=\deg(q(x)h(x))=\deg(q(x))+\deg(h(x)).
         $$
         Hence $\deg(q(x))=0\lor \deg(h(x))=0$, that is, $q(x)$ is a constant polynomial or $h(x)$ is a constant polynomial. Therefore $p(x)$ is irreducible over $\mathbb K$.

      2. ($\Longrightarrow$) Suppose that $p(x)$ is irreducible over $\mathbb K$ then by the corollary $p(x)$ has no roots in $\mathbb K$.

         ($\Longleftarrow$) Suppose that $p(x)$ has no roots in $\mathbb K$. If $p(x)$ is reducible over $\mathbb K$ then $p(x)=q(x)h(x)$ for some nonconstant polynomials $q(x),h(x)\in\mathbb K[x]$. Hence
         $$
         2=\deg(p(x))=\deg(q(x)h(x))=\deg(q(x))+\deg(h(x)).
         $$
         Then $\deg(q(x))=\deg(h(x))=1$, that is, $q(x)=ax+b$ with $a,b\in\mathbb K$ and $a\neq 0$ with $q(-a^{-1} b)=0$ and $-a^{-1}b\in\mathbb K$. Therefore $-a^{-1}b$ is a root of $p(x)$ which is a contradiction.  
         Similarly if $\deg(p(x))=3$. Thus $p(x)$ is irreducible over $\mathbb K$.

  - **Theorem 3.6**  
    Let $p(x)\in\mathbb K[x]$ with $p(x)\neq 0$. If $\deg(p(x))=n$ then $p(x)$ has at most $n$ roots in $\mathbb K$.

    - **Proof 3.6.1**  
      By induction on $n$.

      1. **Base step** If $n=1$ then $p(x)=ax+b$ with $a,b\in\mathbb K$ and $a \neq 0$ which has exactly one root.

      2. **Inductive step** Suppose that the result is true for $n$ and consider $\deg(p(x))=n+1$. If $p(x)$ has no roots in $\mathbb K$ there is nothing to prove. If $p(x)$ has roots in $\mathbb K$, let \(\alpha\in\mathbb K\) be a root of $p(x)$. Then by the factor theorem $(x-\alpha)\mid p(x)$, that is,
         $$
         p(x)=(x-\alpha)q(x)\quad\text{for some }q(x)\in\mathbb K[x].
         $$
         Furthermore
         $$
         n+1=\deg(p(x))=\deg((x-\alpha)q(x))=1+\deg(q(x)).
         $$
         Then $\deg(q(x))=n$ and by the inductive hypothesis $q(x)$ has at most $n$ roots in $\mathbb K$. If $\beta\in\mathbb K$ is another root of $p(x)$ then $p(\beta)=(\beta-\alpha)q(\beta)=0$. So we obtain that $\beta=\alpha$ or $q(\beta)=0$. Therefore $\beta$ is among the at most $n$ roots, that is $p(x)$ has at most $n+1$ roots.

---

- **Definition 4**  
  Let $p(x)\in\mathbb K[x]$ with $p(x)\neq 0$ and let $\alpha\in\mathbb K$ be a root of $p(x)$. The **multiplicity** of $\alpha$ is the largest integer $m$ such that
  $$
  (x-\alpha)^m\mid p(x).
  $$

  - **Remark 4.1**  
    Equivalently, $\alpha$ has multiplicity $m$ when
    $$
    p(x)=(x-\alpha)^mq(x)
    $$
    with $q(\alpha)\neq 0$.

  - **Example 4.2**  
    If $p(x)=(x-2)^3(x+1)$ then $2$ is a root of $p(x)$ with multiplicity $3$ and $-1$ is a root of $p(x)$ with multiplicity $1$.

  - **Theorem 4.3 (Fundamental theorem of algebra)**  
    If $p(x) \in \mathbb C[x]$ with $\deg(p(x))\geqslant 1$ then $p(x)$ has a root in $\mathbb C$. Equivalently, every polynomial $p(x)\in\mathbb C[x]$ has exactly $n$ roots in \(\mathbb C\) where roots are counted with multiplicities.

  - **Corollary 4.4**  
    A nonconstant polynomial in $\mathbb C[x]$ is irreducible if and only if it has degree $1$.

  - **Corollary 4.5**  
    Let $p(x)\in\mathbb C[x]$ with $\deg(p(x))=n\geqslant 1$. Then
    $$
    p(x)=\alpha_0\left(x-\alpha_1\right)^{m_1}\left(x-\alpha_2\right)^{m_2}\cdots\left(x-\alpha_s\right)^{m_s}
    $$
    where $\alpha_1,\alpha_2,\cdots,\alpha_s$ are the distinct roots of $p(x)$, $m_1,m_2,\cdots,m_s$ are the multiplicities with $m_1+m_2+\cdots+m_s=n$.

  - **Theorem 4.6**  
    Let $p(x)\in\mathbb R[x]$. If $z=a+b\i$ is a root of $p(x)$ then $\overline z=a-b\i$ is also a root of $p(x)$.

    - **Proof 4.6.1**  
      Let $p(x)=a_0+a_1x+a_2x^2+\cdots+a_nx^n\in\mathbb R[x]$ and let $z=a+b\i$ be a root of $p(x)$, that is, $p(z)=0$. Hence
      $$
      \begin{aligned}
      p\left(\overline{z}\right) &= a_0+a_1\overline z+a_2\left(\overline z\right)^2+\cdots+a_n\left(\overline z\right)^n \\
      &= a_0+a_1\overline z+a_2\overline z^2+\cdots+a_n\overline z^n \\
      &= \overline{a_0}+\overline{a_1z}+\overline{a_2z^2}+\cdots+\overline{a_nz^n} \\
      &= \overline{a_0+a_1z+a_2z^2+\cdots+a_nz^n} \\
      &= \overline{p(z)}=\overline{0}=0.
      \end{aligned}
      $$

  - **Corollary 4.7**  
    Every polynomial $p(x)\in\mathbb R[x]$ with odd degree has at least one real root.

    - **Proof 4.7.1**  
      Suppose that $\deg(p(x))=2k+1$ for some $k\in\mathbb N_0$ then $p(x)$ has roots $\alpha_1,\alpha_2,\cdots,\alpha_{2k+1}\in\mathbb C$ and by Theorem 4.6, $\overline{\alpha_1},\overline{\alpha_2},\cdots,\overline{\alpha_{2k+1}}$ are also roots of $p(x)$. There exist some roots such that $\alpha_i=\overline{\alpha_i}$ and thus $\alpha_i\in\mathbb R$.

  - **Theorem 4.8 (Rational roots theorem)**  
    Let $p(x)=a_0+a_1x+\cdots+a_nx^n\in\mathbb Z[x]$ with $a_0,a_n\neq 0$ and let \(\alpha=\dfrac rs\in\mathbb Q\) with $r\in\mathbb N,s\in\mathbb Z$ and $r,s$ are coprime. If $\alpha$ is a root of $p(x)$ then we have that $r\mid a_0$ and $s\mid a_n$. For example, let
    $$
    p(x)=3x^3+2x^2-2x-8.
    $$
    The possible rational roots are
    $$
    \pm 1,\pm 2,\pm 4,\pm 8,\pm\dfrac 13,\pm\dfrac 23,\pm\dfrac 43,\pm\dfrac 83.
    $$
    
    - **Proof 4.8.1**
      Suppose $p(x)=a_0+a_1x+\cdots+a_nx^n\in\mathbb Z[x]$ with $a_0,a_n\neq 0$. Suppose $p\left(\dfrac rs\right)=0$ for some coprime $r,s\in\mathbb Z$, that is  
      $$
      p\left(\dfrac rs\right)=a_0+a_1\left(\dfrac rs\right)+\cdots+a_n\left(\dfrac rs\right)^n=0.
      $$
      To clear denominators, multiplying both sides by $s^n$ yields
      $$
      a_0s^n+a_1rs^{n-1}+\cdots+a_{n-1}r^{n-1}s+a_nr^n=0.
      $$
      Shifting the $a_0s^n$ term to the right side and factoring out $r$ on the left side produces  
      $$
      r\left(a_{1}s^{n-1}+a_2 rs^{n-2}+\cdots+a_{n-1}r^{n-2}s+a_{n}r^{n-1}\right)=-a_{0}s^{n}.
      $$
      Thus, $r$ divides $a_0s^n$ But $r$ is coprime to $s$ and therefore to $s^n$, so by Euclid's lemma $r$ must divide the remaining factor $a_0$.
      $$
      r \mid a_0.
      $$
      On the other hand, shifting the $a_nr^n$ term to the right side and factoring out $s$ on the left side produces  
      $$
      s\left(a_{0}s^{n-1}+a_1rs^{n-2}+\cdots+a_{n-1}r^{n-1}\right)=-a_{n}r^{n}.
      $$
      Similarly it follows that $s$ divides $a_n$. Therefore, the rational roots theorem is proved.
    
