---
title: "Basic of Polynomials"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Basic of Polynomials

Let $S$ be one of the sets $\mathbb Z, \mathbb Q, \mathbb R, \mathbb C$.

- **Definition 1**  
  A **polynomial** with coefficients in $S$ is a formal expression
  $$
  p(x)=a_0+a_1x+\cdots+a_nx^n
  $$
  where $a_0,a_1,\cdots, a_n\in S$ and $n$ is a nonnegative integer.  
  The set of all polynomials with coefficients in $S$ is denoted by $S[x]$.

---

- **Definition 2**  
  Let $p(x)=a_0+a_1x+\cdots+a_nx^n$. If $a_n\neq 0$, we say that the **degree** of $p(x)$ is $n$ and is denoted
  $$
  \operatorname{deg}(p(x))=n.
  $$

  Moreover, we say that the **leading coefficient** of $p(x)$ is $a_n$.

  - **Example 2.1**  
    $$
    \begin{aligned}
    p(x) &= 2+x-3x^2+7x^4\in\mathbb Z[x] \\
    p(x) &= 1+\dfrac 23x-\dfrac 52x^3\in\mathbb Q[x] \\
    p(x) &= x+\sqrt 2x^2-\dfrac 17x^5\in\mathbb R[x] \\
    p(x) &= \i-2x+(\i +1)x^2\in\mathbb C[x]
    \end{aligned}
    $$

  - **Remark 2.2**  
    The degree of the zero polynomial $\mathbb 0(x)=0$ is undefined.

---

- **Definition 3**  
  A polynomial $p(x)\in S[x]$ is called **monic** if its leading coefficient is $1$.
  - **Example 3.1**  
    Let $p(x)=1-5x^2+\dfrac{\sqrt 2}{2}x^7+x^9\in\mathbb R[x]$, then $p(x)$ is a monic polynomial with $\operatorname{deg}(p(x))=9$.

---

- **Definition 4**  
  Two polynomials $p(x),q(x)\in S[x]$ are **equal** if $\deg(p(x))=\deg(q(x))$ and their corresponding coefficients are equal.

---

- **Definition 5**  
  Let $p(x)=a_0+a_1x+\cdots+a_nx^n, q(x)=b_0+b_1x+\cdots+b_mx^m$. Then
  $$
  \begin{aligned}
  p(x)+q(x) &= \sum_{k=0}^{\max(n,m)}\left(a_k+b_k\right)x^k. \\
  p(x)q(x) &= \sum_{k=0}^{n+m}c_kx^k\quad\text{where}\quad c_k=\sum_{j=0}^{k}a_jb_{k-j}.
  \end{aligned}
  $$

  - **Example 5.1**  
    Let $p(x)=5+2x+6x^2$ and $q(x)=3+x+4x^2+5x^3$, then
    $$
    \begin{aligned}
    a_0&=5, \quad a_1=2, \quad a_2=6, \quad a_3=0, \quad a_4=0, \quad a_5=0 \\
    b_0&=3, \quad b_1=1, \quad b_2=4, \quad b_3=5, \quad b_4=0, \quad b_5=0.
    \end{aligned}
    $$
    Then
    $$
    \begin{aligned}
    p(x)+q(x) &= \sum_{k=0}^{3}\left(a_k+b_k\right)x^k \\
    &= \left(a_0+b_0\right) + \left(a_1+b_1\right)x+ \left(a_2+b_2\right)x^2+\left(a_3+b_3\right)x^3 \\
    &= \left(5+3\right) + \left(2+1\right)x+ \left(6+4\right)x^2+\left(0+5\right)x^3 \\
    &= 8+3x+10x^2+5x^3.
    \end{aligned}
    $$
    
    $$
    \begin{aligned}
    p(x)q(x) &= \sum_{k=0}^{5}c_kx^k\quad\text{where}\quad c_k=\sum_{j=0}^{k}a_jb_{k-j} \\
    &= c_0+c_1x+c_2x^2+c_3x^3+c_4x^4+c_5x^5
    \end{aligned}
    $$
    We compute each coefficient $c_k$ directly as follows
    * $c_0 = a_0b_0 = 5 \cdot 3 = 15$.
    * $c_1 = a_0b_1 + a_1b_0 = 5 \cdot 1 + 2 \cdot 3 = 5 + 6 = 11$.
    * $c_2 = a_0b_2 + a_1b_1 + a_2b_0 = 5 \cdot 4 + 2 \cdot 1 + 6 \cdot 3 = 20 + 2 + 18 = 40$.
    * $c_3 = a_0b_3 + a_1b_2 + a_2b_1 + a_3b_0 = 5 \cdot 5 + 2 \cdot 4 + 6 \cdot 1 + 0 \cdot 3 = 25 + 8 + 6 + 0 = 39$.
    * $c_4 = a_0b_4 + a_1b_3 + a_2b_2 + a_3b_1 + a_4b_0 = 5 \cdot 0 + 2 \cdot 5 + 6 \cdot 4 + 0 \cdot 1 + 0 \cdot 3 = 10 + 24 = 34$.
    * $c_5 = a_0b_5 + a_1b_4 + a_2b_3 + a_3b_2 + a_4b_1 + a_5b_0 = 5 \cdot 0 + 2 \cdot 0 + 6 \cdot 5 + 0 + 0 + 0 = 30$.
    
    Therefore, the product polynomial is
    $$
    p(x)q(x) = 15 + 11x + 40x^2 + 39x^3 + 34x^4 + 30x^5.
    $$
  
  - The arithmetic properties of $S[x]$ are as follows
  
    1. $$
       (p(x)+q(x))+r(x)=p(x)+(q(x)+r(x)).
       $$
  
    2. $$
       p(x)+\mathbb 0(x)=p(x).
       $$
  
    3. For each $p(x)\in S[x]$, there exists $-p(x)\in S[x]$ such that $p(x)+(-p(x))=\mathbb 0(x)$.
  
    4. $$
       p(x)+q(x)=q(x)+p(x).
       $$
  
    5. $$
       (p(x)q(x))r(x)=p(x)(q(x)r(x)).
       $$
  
    6. $$
       p(x)\cdot 1=p(x).
       $$
  
    7. $$
       p(x)q(x)=q(x)p(x).
       $$
  
    8. $$
       p(x)(q(x)+r(x))=p(x)q(x)+p(x)r(x).
       $$
  
    - **Remark 5.2**  
      Let $p(x),q(x)\in S[x]$ be nonzero.  
  
      1. If $p(x)+q(x)\neq \mathbb 0(x)$, then
         $$
         \deg(p(x)+q(x))\leqslant\max\left\{\deg(p(x)),\deg(q(x))\right\}.
         $$
  
      2. $$
         \deg(p(x)q(x))=\deg(p(x))+\deg(q(x)).
         $$
  
    - **Question 5.3**  
      Can the inequality in $\text{Remark 5.2(1)}$ be strict even when both polynomials are nonzero?
  
      - **Solution 5.3.1**  
        Yes. Note that for $p(x)=1+x-x^2$ and $q(x)=2x+x^2$, we have $p(x)+q(x)=1+3x$. Here, $\deg(p(x)+q(x)) = 1 < \max\{2, 2\} = 2$.
  
    We use $\mathbb K$ to denote $\mathbb Q, \mathbb R$, or $\mathbb C$.
  
    - **Remark 5.4**  
      Let $p(x),q(x)\in\mathbb K[x]$. If $p(x)q(x)=0$, then $p(x)=0\lor q(x)=0$. In fact, suppose that $p(x)q(x)=0$ and $p(x)\neq 0\land q(x)\neq 0$. Hence we obtain that
      $$
      \deg(p(x)q(x))=\deg(p(x))+\deg(q(x)).
      $$
      But since $p(x)q(x)=0$, the degree of the left side is undefined, which yields a contradiction.
  
    - **Theorem 5.5 (The division algorithm for $\mathbb K[x]$)**  
      Let $p(x),s(x)\in\mathbb K[x]$ with $s(x)\neq 0$, then there exist unique polynomials $q(x),r(x)\in\mathbb K[x]$ such that  
      $$
      p(x)=s(x)q(x)+r(x)
      $$
      with either $r(x)=0$ or $\deg(r(x))<\deg(s(x))$.
  
      - **Proof 5.5.1**
        **Existence**
        If $p(x)=0$, then we take $q(x)=r(x)=0$.
        If $p(x)\neq 0$, we use induction on $\deg(p(x))$.
  
        * **Base step** Suppose that $\deg(p(x))=0$. Since $s(x)\neq 0$, we have the following cases
          * If $\deg(s(x))=0$, then $s(x)=b\neq 0$, so $b^{-1}\in\mathbb K$. We take $q(x)=b^{-1}p(x)$ and $r(x)=0$.
          * If $\deg(s(x))>0$, we take $q(x)=0$ and $r(x)=p(x)$, where $\deg(r(x)) = 0 < \deg(s(x))$.
          Thus, the base step holds.
  
        * **Inductive step** Suppose that the result is true for any polynomial with degree less than or equal to $n-1$. Now we need to check if the result is true for $\deg(p(x))=n$. Let $\deg(p(x))=n$ and $\deg(s(x))=m$. We consider two cases
          * If $n<m$, we take $q(x)=0$ and $r(x)=p(x)$.
          * If $n\geqslant m$, let $p(x)=a_0+a_1x+\cdots+a_nx^n$ and $s(x)=b_0+b_1x+\cdots+b_mx^m$ with $a_n, b_m \neq 0$. We construct the difference
            $$
            \begin{aligned}
            p(x)-b_m^{-1}a_nx^{n-m}s(x)&=\left(a_0+a_1x+\cdots+a_nx^n\right)\\&\quad\ -b_m^{-1}a_nx^{n-m}\left(b_0+b_1x+\cdots +b_mx^m\right) \\
            &= \left(a_0+a_1x+\cdots+a_nx^n\right)\\&\quad\ -\left(b_m^{-1}a_nb_0x^{n-m}+\cdots+a_nx^n\right).
            \end{aligned}
            $$
            Notice that the leading term $a_nx^n$ cancels out completely. That is, $\deg\left(p(x)-b_m^{-1}a_nx^{n-m}s(x)\right)\leqslant n-1$. By the inductive hypothesis, there exist polynomials $q^\prime(x),r(x)\in\mathbb K[x]$ such that
            $$
            p(x)-b_m^{-1}a_nx^{n-m}s(x)=s(x)q^\prime(x)+r(x)
            $$
            with $r(x)=0$ or $\deg(r(x))<\deg(s(x))$. Now, if we take $q(x)=q^\prime(x)+b_m^{-1}a_nx^{n-m}$, we have
            $$
            p(x)=s(x)q(x)+r(x)
            $$
            with $r(x)=0$ or $\deg(r(x))<\deg(s(x))$. This completes the inductive step.
  
        **Uniqueness**
        Suppose that $p(x)=s(x)q(x)+r(x)$ with $r(x)=0$ or $\deg(r(x))<\deg(s(x))$, and $p(x)=s(x)q^\prime(x)+r^\prime(x)$ with $r^\prime(x)=0$ or $\deg(r^\prime(x))<\deg(s(x))$. Hence
        $$
        \begin{aligned}
        s(x)q(x)+r(x)&=s(x)q^\prime(x)+r^\prime(x) \\
        s(x)(q(x)-q^\prime(x))&=r^\prime(x)-r(x).
        \end{aligned}
        $$
        If $q(x)\neq q^\prime(x)$, then since $s(x) \neq 0$, the degree of the left side is
        $$
        \deg(s(x)(q(x)-q^\prime(x))) = \deg(s(x)) + \deg(q(x)-q^\prime(x)) \geqslant \deg(s(x)).
        $$
        However, for the right side, since $\deg(r(x)) < \deg(s(x))$ and $\deg(r^\prime(x)) < \deg(s(x))$, we have
        $$
        \deg(r^\prime(x)-r(x)) \leqslant \max\{\deg(r^\prime(x)), \deg(r(x))\} < \deg(s(x)),
        $$
        which yields a contradiction. Therefore, $q(x)=q^\prime(x)$ and thus $r(x)=r^\prime(x)$.
  
    - **Example 5.6**
      If $p(x)=8x^4-4x^3+2x^2+x+1$ and $s(x)=2x^2+3x+7$, then
      $$
      \begin{aligned}
      p(x)-4x^2s(x)&=-16x^3-26x^2+x+1 \\
      -16x^3-26x^2+x+1 + 8xs(x) &=-2x^2+57x+1 \\
      -2x^2+57x+1+s(x) &= 60x+8.
      \end{aligned}
      $$
      Hence, $p(x)=s(x)(4x^2-8x-1)+(60x+8)$.
  
  ---
  
  - **Definition 6**
    Let $p(x)=a_0+a_1x+\cdots+a_nx^n\in\mathbb K[x]$. If $\alpha\in\mathbb K$, the **evaluation** of $p(x)$ at $\alpha$ is
    $$
    p(\alpha)=a_0+a_1\alpha+\cdots+a_n\alpha^n,
    $$
    that is, $p(\alpha)\in\mathbb K$.
  
    - **Theorem 6.1 (Remainder theorem)**  
      Let $p(x)\in\mathbb K[x]$ and let $\alpha\in\mathbb K$, then there exists $q(x)\in\mathbb K[x]$ such that
      $$
      p(x)=(x-\alpha)q(x)+p(\alpha).
      $$
  
      - **Proof 6.1.1**
        By the division algorithm, there exist unique polynomials $q(x),r(x)$ such that
        $$
        p(x)=(x-\alpha)q(x)+r(x)
        $$
        with $r(x)=0$ or $\deg(r(x))<\deg(x-\alpha)=1$. This implies that $r(x)$ must be a constant polynomial, so we can write $r(x)=c$ for some $c \in \mathbb K$. 
        We now evaluate the polynomial equation $p(x)=(x-\alpha)q(x)+c$ at the point $x=\alpha$
        $$
        p(\alpha) = (\alpha-\alpha)q(\alpha) + c = 0 \cdot q(\alpha) + c = c.
        $$
        Since $c = p(\alpha)$, substituting this back into the division equation yields
        $$
        p(x)=(x-\alpha)q(x)+p(\alpha).
        $$
        Therefore, the theorem is proved.
