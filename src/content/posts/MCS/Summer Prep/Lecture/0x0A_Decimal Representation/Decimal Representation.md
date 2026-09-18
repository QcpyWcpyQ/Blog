---
title: "Decimal Representation"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Decimal Representation

- **Definition 1**
  A decimal is an expression of the form
  $$
  \pm a_0.a_1a_2a_3\cdots
  $$
  where $a_0$ is a nonnegative integer and $a_1,a_2,a_3,\cdots\in\left\{0,1,\cdots, 9\right\}$ are **digits**.

---

- **Definition 2**
  Let $a_0.a_1a_2a_3\cdots$ be a decimal. If only a finite number of the digits $a_1,a_2,a_3\cdots$ are nonzero, the decimal is called **finite**. Otherwise, it is called **infinite**. 
  If the digits $a_1,a_2,a_3,\cdots$ repeat periodically from some point on, the decimal is called a **repeating decimal**.

  The periodic part of a repeating decimal is the part that repeats indefinitely, and it can be represented in the following form:
  $$
  \begin{aligned}
  0.333\cdots &= 0.\overline{3} \\
  0.454545\cdots &= 0.\overline{45}
  \end{aligned}
  $$

  - **Theorem 2.1**
    Let $x$ be a nonzero decimal. If $x$ is a finite or repeating decimal, then there exist $p,q\in\mathbb Z$ with $q\neq 0$ such that $qx=p$.

    - **Proof 2.1.1**
      Let $x$ be a nonzero decimal with a finite or infinite periodic representation.

      Consider the case where $x$ is finite, that is, 
      $$
      x=\pm a_0.a_1a_2a_3\cdots a_n.
      $$
      Hence,
      $$
      10^n x=\pm\left(10^na_0+10^{n-1}a_1+10^{n-2}a_2+\cdots+10a_{n-1}+a_n\right).
      $$
      Then, if
      $$
      p=\pm\left(10^na_0+10^{n-1}a_1+10^{n-2}a_2+\cdots+10a_{n-1}+a_n\right) \quad \text{and} \quad q=10^n,
      $$
      we have that $qx=p$.

      Consider the case in which $x$ has an infinite periodic representation and assume that $x>0$, as the case $x<0$ is similar, that is, 
      $$
      x=a_0.b_1b_2\cdots b_m\overline{c_1c_2\cdots c_n}.
      $$
      Hence,
      $$
      \begin{aligned}
      10^mx &= a_0b_1b_2\cdots b_m.\overline{c_1c_2\cdots c_n} \\
      10^{m+n}x &= a_0b_1b_2\cdots b_m c_1c_2\cdots c_n.\overline{c_1c_2\cdots c_n}
      \end{aligned}
      $$
      and thus
      $$
      \begin{aligned}
      10^{m+n}x-10^m x &= a_0b_1b_2\cdots b_mc_1c_2\cdots c_n-a_0b_1b_2\cdots b_m \\
      10^m\left(10^n-1\right)x &= a_0b_1b_2\cdots b_mc_1c_2\cdots c_n-a_0b_1b_2\cdots b_m.
      \end{aligned}
      $$
      Then, if
      $$
      p=a_0b_1b_2\cdots b_mc_1c_2\cdots c_n-a_0b_1b_2\cdots b_m \quad \text{and} \quad q=10^m\left(10^n-1\right),
      $$
      we have that $qx=p$.

  - **Example 2.2**
    (1) If $x=0.\overline 3$, then $10x=3+x$, that is, $x=\frac 39=\frac 13$.

    (2) If $x=0.\overline{45}$, then $100x=45+x$, that is, $x=\frac {45}{99}=\frac{5}{11}$.

  - **Remark 2.3**
    A solution of the equation $qx=p$ is represented as $\frac pq$.

---

- **Definition 3**
  The set of **rational numbers** is
  $$
  \mathbb Q=\left\{\dfrac pq:p,q\in\mathbb Z\text{ with }q\neq 0\right\}.
  $$
  For a given $\frac pq\in\mathbb Q$, we say that $p$ is the **numerator** and $q$ is the **denominator**.

  - **Remark 3.1**
    Every integer is a rational number since $n=\frac n1$, that is, $\mathbb Z\subseteq\mathbb Q$.

  - **Remark 3.2**
    Two fractions represent the same rational number when
    $$
    \frac pq=\frac rs\iff ps=qr.
    $$

  - **Example 3.3**
    $$
    \frac 15=\frac{2}{10}=\frac{14}{70}=\cdots.
    $$

  We usually choose the representation with the smallest possible integers, that is, with the smallest possible $p, q$, and call this the **reduced representation**.

  Since two fractions $\frac pq$ and $\frac rs$ are equal, if and only if, $ps=qr$, then the reduced representation of a rational number is that one for which $p\in\mathbb Z, q\in\mathbb N$ are such that $px+qy=1$ for some $x,y\in\mathbb Z$, and we say that $p, q$ are **coprime**.

  - **Example 3.4 (Finite decimal number)**
    The decimal $0.75$ is the same as the rational number $\frac{75}{100}$.

    The decimal $0.3333$ is the same as the rational number $\frac{3333}{10000}$.

    The decimal $0.0125$ is the same as the rational number $\frac{1}{80}$.

  - **Example 3.5 (Infinite decimal number)**
    The decimal $0.333\cdots$ is the rational number $\frac 13$.
    The decimal $0.454545\cdots$ is the rational number $\frac 5{11}$.
    The decimal $0.31282828\cdots$ is the rational number $\frac{3097}{9900}$.

  Rational numbers are ordered as follows:
  $$
  \frac ab<\frac cd\iff ad<bc.
  $$
  Given $x,y\in\mathbb Q$, we have $x<y$, if and only if, we can find $p,r\in\mathbb Z$ and $q\in\mathbb N$ such that
  $$
  x=\frac pq, y=\frac rq \text{ with } p<r.
  $$

  - **Proposition 3.4 (Density of rational numbers)**
    Between any two distinct rational numbers there is another rational number.

    - **Proof 3.4.1**
      Given $x,y\in\mathbb Q$ with $x<y$, then
      $$
      x<\frac{x+y}2<y,
      $$
      with $\frac{x+y}2\in\mathbb Q$.

  - **Theorem 3.5**
    If $x$ is a rational number, then it can be represented as a finite or repeating decimal.

    - **Proof 3.5.1**
      Assume that $x>0$, that $x=\frac pq$ with $p, q$ coprime and $p<q$, and let $r_0=p$. Note that
      $$
      10\frac pq=\frac{10p} q,
      $$
      and by the division algorithm we have that
      $$
      10p=k_1q+r_1\text{ with }0\leqslant r_1<q, k_1\in\mathbb N.
      $$
      Since $p<q$, we have that
      $$
      \begin{aligned}
      10p &< 10q \\
      k_1q &\leqslant k_1q+r_1<10q
      \end{aligned}
      $$
      since $r_1\geqslant 0$. Hence $k_1<10$. Then $k_1$ is a digit. Thus we obtain that
      $$
      \frac pq=10^{-1}k_1+10^{-1}\frac{r_1}q,
      $$
      and we compute the first digit of the decimal representation of $\frac pq$.

      As $0\leqslant r_1<q$, we can repeat the same argument and obtain that
      $$
      \frac{r_1}{q}=10^{-1}k_2+10^{-1}\frac{r_2}{q}
      $$
      with $0\leqslant r_2<q$ and $0\leqslant k_2<10$, and we compute the second digit of $\frac pq$.

      We can continue this process and obtain $r_1,r_2,r_3,\cdots$ and $k_1,k_2,k_3,\cdots$ such that
      $$
      \frac{r_j}q=10^{-1}k_{j+1}+10^{-1}\frac{r_{j+1}}q\quad(*)
      $$
      and
      $$
      \frac pq=\sum_{j=1}^N 10^{-j}k_j+10^{-N}\frac{r_N}q.
      $$
      Note that there are two possibilities for the remainders $r_1,r_2,r_3,\cdots$:

      1. The sequence of remainders does not contain zero, so we obtain an infinite decimal representation of $\frac pq$.

      2. The sequence of remainders contains zero, $r_j=0$. From $(*)$,
         $$
         \frac 0q=10^{-1}\cdot 0+10^{-1}\cdot \frac 0q,
         $$
         that is, $r_{j+1}=0$ and $k_{j+1}=0$, therefore we obtain a finite decimal representation of $\frac pq$.

  - **Example 3.6**
    $\frac 7{12}$. We have
    $$
    \begin{aligned}
    70 &= 12\cdot 5+10 \\
    100 &= 12\cdot 8+4 \\
    40 &= 12\cdot 3+4 \\
    40 &= 12\cdot 3+4 \\
    &\ \ \vdots 
    \end{aligned}
    $$
    So $\frac 7{12}=0.58\overline{3}$.

  - **Theorem 3.7**
    Let $\frac pq$ be a reduced representation. Its decimal representation is finite if and only if every prime factor of $q$ is either $2$ or $5$.

    - **Proof 3.7.1**
      ($\Longrightarrow$) If $\frac pq$ is finite, then $\frac pq=\frac{N}{10^k}$ for some integers $N$ and $k\geqslant 0$. Hence $10^kp=qN$. Since $p$ and $q$ are coprime, there exist $x,y\in\mathbb Z$ such that
      $$
      \begin{aligned}
      px+qy&=1 \\
      10^k&=x\left(10^kp\right)+y\left(10^kq\right),
      \end{aligned}
      $$
      so $q\mid 10^k=2^k\cdot 5^k$, which implies that the only possible prime factors of $q$ are $2$ or $5$.
      
      ($\Longleftarrow$) Suppose that every prime factor of $q$ is either $2$ or $5$.
      By the fundamental theorem of arithmetic, since $q \in \mathbb N$, we can express $q$ in the following form:
      $$
      q = 2^\alpha \cdot 5^\beta \quad \text{for some } \alpha, \beta \in \mathbb N_0.
      $$
      Let $k = \max(\alpha, \beta)$. Then we can find a nonnegative integer $N^\prime \in \mathbb N$ such that $10^k = q \cdot N^\prime$. 
      Indeed, we have:
      $$
      10^k = 2^k \cdot 5^k = \left(2^\alpha \cdot 2^{k-\alpha}\right) \cdot \left(5^\beta \cdot 5^{k-\beta}\right) = q \cdot \left(2^{k-\alpha} \cdot 5^{k-\beta}\right).
      $$
      Setting $N^\prime = 2^{k-\alpha} \cdot 5^{k-\beta} \in \mathbb Z$, we multiply both the numerator and the denominator of $\frac pq$ by $N^\prime$, yielding:
      $$
      \frac pq = \frac{p \cdot N^\prime}{q \cdot N^\prime} = \frac{p \cdot N^\prime}{10^k}.
      $$
      Let $N = p \cdot N^\prime$. Since $p, N^\prime \in \mathbb Z$, we have $N \in \mathbb Z$. Therefore, the rational number can be written as:
      $$
      \frac pq = \frac{N}{10^k}.
      $$
      By Definition, any rational number that can be expressed as an integer divided by a power of $10$ has a decimal representation that terminates after at most $k$ digits. 
      Therefore, the decimal representation of $\frac pq$ is finite.