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

- **Exercise 1**
  Find all primes $p$ such that $p+1$ is prime.

  - **Solution 1.1**
    Suppose $p$ is a prime, then $p>1$. The only even prime is $2$ because if $2\mid p \implies p=2k$ for some $k\in\mathbb N$. If $k=1$, then $p=2$, and if $k\neq 1$, then $p\neq 2$ while $2\mid p$.
    If $p=2$, then $p+1=3$ is a prime. Now suppose $p$ is a prime with $p>2$. Then $p$ cannot be even, so $p$ must be odd. It follows that $p+1$ is even, but since $p+1>p>2$, the integer $p+1$ cannot be prime. Therefore, the only consecutive prime numbers are $2$ and $3$.

---

- **Exercise 2**
  (1) Prove that the numbers
  $$
  100!+2, 100!+3, \cdots, 100!+100
  $$
  are composite.

  - **Solution 2.1**
    For each $k\in\mathbb N$ with $2\leqslant k\leqslant 100$, we have $k\mid 100!$. We also have $k\mid k$, so $k\mid (100!+k)$. Since $k\neq 1$ and $k\neq 100!+k$, the integer $100!+k$ has a positive divisor different from $1$ and itself. This means it is composite. Hence, $\forall k\in\mathbb N$ with $2\leqslant k\leqslant 100$, the number $100!+k$ is composite.

  (2) Let $N\in\mathbb N$. Prove that there exist $N$ consecutive composite numbers.

  - **Solution 2.2**
    For each $N\in\mathbb N$, the following $N$ numbers
    $$
    (N+1)! + 2, (N+1)! + 3, \cdots, (N+1)! + N+1
    $$
    are consecutive composite numbers.

---

- **Exercise 3**
  Suppose $n\in\mathbb N$, and $p$ is a prime number. Prove that $n^2$ is divisible by $p$ if and only if $n$ is divisible by $p$.

  - **Solution 3.1**
    ($\Longrightarrow$) Suppose $p\mid n^2$. By Corollary 1.4(1), since $n^2 = n \cdot n$, we have $p\mid n \lor p\mid n \implies p\mid n$.

    ($\Longleftarrow$) If $p\mid n \implies \exists k\in\mathbb N$ such that $n=kp$, then $n^2=k^2p^2=p\left(k^2p\right) \implies p\mid n^2$.

---

- **Exercise 4**
  Prove that a positive integer is a perfect square if and only if every exponent in its prime factorization is even.

  - **Solution 4.1**
    ($\Longrightarrow$) Suppose $n\in\mathbb N$ and there exists $a\in\mathbb N$ such that $n=a^2$. Consider the prime factorization of $a$. By the fundamental theorem of arithmetic, there exist distinct prime numbers $p_1, p_2, \cdots, p_r$ and exponents $\alpha_1, \alpha_2, \cdots, \alpha_r\in\mathbb N$ such that $a=p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}$. Then
    $$
    \begin{aligned}
    n &= a^2 = \left(p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}\right)^2 \\
    &= p_1^{2\alpha_1}p_2^{2\alpha_2}\cdots p_r^{2\alpha_r}.
    \end{aligned}
    $$
    By the uniqueness of the fundamental theorem of arithmetic, this expression represents the prime factorization of $n$, where every exponent is even.

    ($\Longleftarrow$) Suppose the prime factorization of $n$ has even exponents, that is, $n=p_1^{2\alpha_1}p_2^{2\alpha_2}\cdots p_r^{2\alpha_r}$. Then we can write $n = \left(p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r}\right)^2$. Since $p_1^{\alpha_1}p_2^{\alpha_2}\cdots p_r^{\alpha_r} \in \mathbb N$, $n$ is a perfect square.

---

- **Example 5**
  Let $x,y$ be two positive integers. If $x\cdot y$ is a perfect square and $x$ itself is a perfect square, prove that $y$ is a perfect square.

  - **Solution 5.1**
    By Exercise 4, a positive integer is a perfect square if and only if every exponent in its prime factorization is even.

    By Proposition 2.4, for any prime $p$, we have
    $$
    \nu_{p}(xy)=\nu_{p}(x)+\nu_p(y).
    $$
    Since $xy$ and $x$ are perfect squares, $\nu_{p}(xy)$ and $\nu_{p}(x)$ are even integers. Since the difference between two even integers is even, $\nu_p(y) = \nu_{p}(xy) - \nu_{p}(x)$ must be even. Thus, every exponent in the prime factorization of $y$ is even, which implies $y$ is a perfect square.

---

- **Exercise 6**
  Prove that the remainder obtained by dividing a prime number by $30$ is either $1$ or a prime number.

  - **Solution 6.1**
    Let $p$ be a prime number. Dividing $p$ by $30$ according to the division algorithm yields
    $$
    p=q\cdot 30+r \quad \text{with} \quad 0\leqslant r<30.
    $$
    We want to prove that $r=1$ or $r$ is a prime number. We consider the possible cases for $r$:
    * If $r=0$, then $p=30q$. Since $p$ is prime, this implies $p=30$ and $q=1$, but $30$ is not a prime number, which is a contradiction.
    * Suppose $r > 0$ and $r$ is composite. Then $r$ must have a prime factor $s$ such that $s \leqslant \sqrt{r} < \sqrt{30} < 6$. Thus, $s \in \{2, 3, 5\}$. Since $s$ is a prime factor of $30$, we have $s \mid 30$, and since $s \mid r$, it follows that $s \mid (30q + r)$, which means $s \mid p$. Since $p$ is prime, we must have $s = p$. This implies $p \in \{2, 3, 5\}$. However, if $p \in \{2, 3, 5\}$, then dividing $p$ by $30$ yields a remainder $r = p$, which is a prime number, contradicting the assumption that $r$ is composite.
    
    Therefore, the remainder $r$ cannot be $0$ or a composite number, meaning it must be either $1$ or a prime number.