---
title: "Prime Numbers and the Fundamental Theorem of Arithmetic"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Prime Numbers and the Fundamental Theorem of Arithmetic

- **Definition 1**
  An integer $p>1$ is a **prime number** if its only positive divisors are $1$ and $p$. An integer $n>1$ that is not prime is called **composite**.

  - **Example 1.1**
    The first prime numbers are
    $$
    2,3,5,7,11,13,17,19,23,\cdots
    $$
    The numbers
    $$
    4,6,8,9,10,12,\cdots
    $$
    are composite.

  Note that $1$ is neither prime nor composite.

  - **Proposition 1.2**
    An integer $n>1$ is composite, if and only if, $n=ab$ for some $a,b\in\mathbb N$ with $1<a<n$ and $1<b<n$.

    - **Proof 1.2.1**
      ($\Longrightarrow$) Suppose that $n$ is composite, then it has a positive divisor $a$ with $a\neq 1,n$. Hence there exists $b\in\mathbb N$ such that $n=ab$ with $1<a<n$ and $1<b<n$, because if $b=1$ then $a=n$.

      ($\Longleftarrow$) Suppose that $n=ab$ for some $a,b\in\mathbb N$ with $1<a<n$ and $1<b<n$. Then such a factorization makes $a$ a divisor of $n$ with $a\neq 1,n$. Therefore $n$ is composite.

  - **Lemma 1.3**
    Let $p$ be a prime and let $a\in\mathbb Z$. If $p\not \mid a$, then there exist $x,y\in\mathbb Z$ such that $ax+py=1$.

    - **Proof 1.3.1**
      Consider the set
      $$
      S=\left\{ax+py:x,y\in\mathbb Z\land ax+py>0\right\}.
      $$
      Since $p\nmid a$, we have that $a\neq 0$. Therefore $\vert a\vert \in S$ because $\vert a\vert = a \cdot 1 + p\cdot 0 > 0$ if $a > 0$, or $\vert a\vert = a \cdot (-1) + p\cdot 0 > 0$ if $a < 0$.
      Now, as $S\subseteq \mathbb N$ and $S\neq\varnothing$, by the well-ordering axiom $S$ has a first element $d$. Therefore $d=ax_0+py_0>0$. If we divide $a$ by $d$, then by the division algorithm we have that
      $$
      a=dq+r\text{ with } 0\leqslant r<\vert d\vert =d.
      $$
      Hence
      $$
      r=a-dq=a-\left(ax_0+py_0\right)q=a\left(1-x_0q\right)+p\left(-y_0q\right).
      $$
      If $r>0$, then $r\in S$, which contradicts the minimality of $d$. Therefore we obtain that $r=0$ and $a=dq$, that is, $d\mid a$. Using the same argument, dividing $p$ by $d$ shows that $d\mid p$. Now, as $p$ is prime we have that $d=1\lor d=p$, but as $p\nmid a$ we have that $d=1$. Therefore we obtain that $ax_0+py_0=1$.

  - **Corollary 1.4 (Euclid's Lemma)**
    (1) Let $p$ be a prime and let $a,b\in\mathbb Z$. If $p\mid ab$, then $p\mid a\lor p\mid b$.

    - **Proof 1.4.1**
      Suppose that $p\nmid a$, then by $\text{Lemma 1.3}$ there exist $x,y\in\mathbb Z$ such that $ax+py=1$, hence
      $$
      abx+pby=b.
      $$
      Since $p\mid ab$, there exists $k\in\mathbb Z$ such that $ab=kp$, so
      $$
      b=abx+pby=kpx+pby=(kx+by)p\text{ with }kx+by\in\mathbb Z.
      $$
      Therefore $p\mid b$.

    (2) Let $p$ be a prime and $a_1,a_2,\cdots,a_n\in\mathbb Z$. If $p\mid\left(a_1a_2\cdots a_n\right)$, then $p\mid a_i$ for some $1\leqslant i\leqslant n$.
    In particular, if all the $a_j$ are prime, then $p=a_i$ for some $1\leqslant i\leqslant n$.

    - **Proof 1.4.2**
      By induction.

      1. Base step
         If $n=1$ then the result is true.

      2. Inductive step
         Suppose that the result is true for $n$.
         $$
         \begin{aligned}
         p\mid \left(a_1a_2\cdots a_n a_{n+1}\right) &\implies p\mid \left(a_1a_2\cdots a_n\right)a_{n+1} \\
         & \implies p\mid \left(a_1a_2\cdots a_n\right)\lor p\mid a_{n+1} \\
         & \implies p\mid a_i\text{ for some } 1\leqslant i\leqslant n \lor p\mid a_{n+1} \\
         & \implies p\mid a_j\text{ for some } 1\leqslant j\leqslant n+1.
         \end{aligned}
         $$
         Therefore the result is true for $n+1$.
         If all the $a_j$ are prime and $p\mid a_i$, then by definition of a prime we have that $p=a_i$.

---

- **Theorem 2 (Fundamental theorem of arithmetic)**Every integer $n\geqslant 2$ can be written in a unique form up to rearrangements as a product
  $$
  n=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}
  $$
  where $p_1,p_2,\cdots,p_r$ are distinct primes and $\alpha_1, \alpha_2, \cdots, \alpha_r\in\mathbb N$. For each $i$, the notation $\nu_{p_i}(n)=\alpha_i$ denotes the exponent of the prime $p_i$ in the factorization of $n$.
  
  - **Proof 2.1**
  
    1. Existence
       Consider the set
       $$
       A=\left\{m\in\mathbb N:m\geqslant 2\land m\text{ cannot be written as a product of primes}\right\}.
       $$
       If $A\neq \varnothing$, then by the well-ordering axiom $A$ has a first element $n$. Then $n$ is not a prime. As $n$ is composite, there exist $a,b\in\mathbb N$ such that $n=ab$ with $1<a<n$ and $1<b<n$. As $n$ is the first element of $A$, we have that $a$ and $b$ can be written as a product of primes, and therefore $n$ can be written as a product of primes, which is a contradiction because $n\in A$. Therefore $A=\varnothing$ and thus every integer $\geqslant 2$ can be written as a product of prime numbers.
  
    2. Uniqueness
       Suppose that the result is false, that is, there exists an integer $\geqslant 2$ that can be written in two different forms as a product of primes. Then the set
       $$
       B=\left\{ m\in \mathbb N: m\geqslant 2 \land m\text{ can be written in two different forms as a product of primes}\right\}
       $$
       is nonempty, then by the well-ordering axiom $B$ has a first element $n$, then
       $$
       p_1p_2\cdots p_r=n=q_1q_2\cdots q_s.
       $$
       Since $p_1\mid q_1q_2\cdots q_s$, then $p_1\mid q_i$ for some $1\leqslant i\leqslant s$ by $\text{Corollary 1.4(2)}$, and by commutativity of the product we may assume that $i=1$ and so $p_1=q_1$. Hence by the cancellation law we have
       $$
       p_2p_3\cdots p_r=q_2q_3\cdots q_s < n.
       $$
       Therefore $p_2p_3\cdots p_r$ and $q_2q_3\cdots q_s$ are two different factorizations of a number $<n$, which contradicts the minimality of $n$. Therefore $B=\varnothing$, that is, every integer $\geqslant 2$ can be written in a unique form as a product of primes.
  
  - **Example 2.2**
    Find the prime factorization of $224$ and $1260$.
    $$
    224 = 2^5\cdot 7\quad 1260 = 2^2\cdot 3^2\cdot 5\cdot 7.
    $$
  
  - **Corollary 2.3**
    Every integer $n\leqslant -2$ can be written in a unique form up to rearrangements as a product
    $$
    n=(-1)p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}
    $$
    where $p_1,p_2,\cdots,p_r$ are distinct primes and \(\alpha_1, \alpha_2, \cdots, \alpha_r\in\mathbb N\).
  
    - **Proof 2.3.1**
      Since $n\leqslant -2$ then $-n\geqslant 2$, and by the fundamental theorem of arithmetic
      $$
      -n=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}
      $$
      where $p_1,p_2,\cdots,p_r$ are distinct primes and $\alpha_1,\alpha_2,\cdots, \alpha_r\in\mathbb N$.
      Hence
      $$
      n=(-1)p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}.
      $$
    
  - **Proposition 2.4**
    Suppose $x,y\in\mathbb N$, then $\nu_{p}(xy)=\nu_{p}(x)+\nu_p(y)$ for any prime $p$.
  
    - **Proof 2.4.1** 
      Consider the prime factorizations of $x$ and $y$. Let
      $$
        \begin{aligned}  x&=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}\quad \alpha_k\in\mathbb N_0, \\  y&=p_1^{\beta_1}p_2^{\beta_2}\cdots p_r^{\beta_r}\quad \beta_k\in\mathbb N_0.  \end{aligned}  
      $$
      Then we have
      $$
        xy=p_1^{\alpha_1+\beta_1}p_2^{\alpha_2+\beta_2}\cdots p_r^{\alpha_r+\beta_r}.  
      $$
      By the uniqueness of the prime factorization of $xy$, for each $p = p_k$, we have that
      $$
      \nu_p(xy)=\alpha_k+\beta_k=\nu_p(x)+\nu_p(y).
      $$

---

- **Theorem 3 (Euclid's theorem)**
  The set of prime numbers is infinite.

  - **Proof 3.1**
    Suppose that there are only finitely many primes $p_1,p_2,\cdots,p_n$ and consider
    $$
    N=p_1p_2\cdots p_n+1.
    $$
    Since $N>1$, by the fundamental theorem of arithmetic we have a prime divisor $q$ of $N$. Then $q=p_i$ for some $1\leqslant i\leqslant n$, hence $q$ divides both $N$ and $p_1p_2\cdots p_n$, and therefore $q$ divides $N-p_1p_2\cdots p_n=1$, which is impossible because $q$ is a prime. Therefore there are infinitely many primes.