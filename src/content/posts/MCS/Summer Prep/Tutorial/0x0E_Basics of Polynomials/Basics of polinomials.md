---
title: "Basics of polinomials"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Basics of Polynomials$\newcommand{\deg}{\operatorname{deg}}$

- **Exercise 1**  
  Let $p(x)=x^3+2x^2-x+1$ and $q(x)=-x^3+x^2+3x-2$.

  1. Compute $(p+q)(x)$ and $(pq)(x)$.
  2. Find $\deg p, \deg q, \deg(p+q)$, and $\deg(pq)$.

  - **Solution 1.1**  

    1. For the sum of the polynomials, we have:
       $$
       \begin{aligned}
       (p+q)(x) &= p(x)+q(x) \\
       &= \left(x^3+2x^2-x+1\right) + \left(-x^3+x^2+3x-2\right) \\
       &= 3x^2+2x-1.
       \end{aligned}
       $$
       For the product of the polynomials, by expanding each term systematically, we have:
       $$
       \begin{aligned}
       (pq)(x) &= p(x)q(x) \\
       &= \left(x^3+2x^2-x+1\right)\left(-x^3+x^2+3x-2\right) \\
       &= x^3\left(-x^3+x^2+3x-2\right) + 2x^2\left(-x^3+x^2+3x-2\right) \\
       &\quad - x\left(-x^3+x^2+3x-2\right) + 1\left(-x^3+x^2+3x-2\right) \\
       &= \left(-x^6+x^5+3x^4-2x^3\right) + \left(-2x^5+2x^4+6x^3-4x^2\right) \\
       &\quad + \left(x^4-x^3-3x^2+2x\right) + \left(-x^3+x^2+3x-2\right) \\
       &= -x^6 + (1-2)x^5 + (3+2+1)x^4 + (-2+6-1-1)x^3 \\
       &\quad + (-4-3+1)x^2 + (2+3)x - 2 \\
       &= -x^6 - x^5 + 6x^4 + 2x^3 - 6x^2 + 5x - 2.
       \end{aligned}
       $$

    2. By definition, we obtain that
       * Since the leading term of $p(x)$ is $x^3$, we have $\deg p = 3$.
       * Since the leading term of $q(x)$ is $-x^3$, we have \(\deg q = 3\).
       * Since the leading term of $(p+q)(x) = 3x^2+2x-1$ is $3x^2$, so we have $\deg(p+q) = 2$. 
       * Since the leading term of $(pq)(x) = -x^6-x^5+6x^4+2x^3-6x^2+5x-2$ is $-x^6$, so we have $\deg(pq) = 6$.
       

---

- **Exercise 2**  
  Given $n\in\mathbb N$ and $a\in\mathbb K$, perform the following products of polynomials.

  1. $(x-1)\left(x^{n-1}+ax^{n-2}+\cdots+a^{n-2}x+a^{n-1}\right)$.
  2. $(x+1)\left(x^2+1\right)\left(x^4+1\right)\cdots\left(x^{2^n}+1\right)$.

  - **Solution 2.1**  

    1. $$
       \begin{aligned}
       (x-a)\left(x^{n-1}+ax^{n-2}+\cdots+a^{n-2}x+a^{n-1}\right) &= \left(x^n+ax^{n-1}+a^2x^{n-2}+\cdots+a^{n-1}x\right) \\
       &\quad - \left(ax^{n-1}+a^2x^{n-2}+\cdots+a^{n-1}x+a^n\right) \\
       &= x^n-a^n.
       \end{aligned}
       $$
    
    2. We consider the product based on the value of $x$:
       If $x=1$, then
       $$
       \begin{aligned}
       (1+1)\left(1^2+1\right)\left(1^4+1\right)\cdots\left(1^{2^n}+1\right) &= \underbrace{2 \cdot 2 \cdot 2 \cdots \cdot 2}_{n+1 \text{ times}} \\
       &= 2^{n+1}.
       \end{aligned}
       $$
       If $x\neq 1$, then
       $$
       \begin{aligned}
       (1+1)\left(1^2+1\right)\left(1^4+1\right)\cdots\left(1^{2^n}+1\right) &= \underbrace{2 \cdot 2 \cdot 2 \cdots \cdot 2}_{n+1 \text{ times}} \\
       &= 2^{n+1}.
       \end{aligned}
       $$
       If $x\neq 1$, then
       $$
       \begin{aligned}
       (x+1)\left(x^2+1\right)\left(x^4+1\right)\cdots\left(x^{2^n}+1\right) &= \dfrac{(x-1)(x+1)\left(x^2+1\right)\left(x^4+1\right)\cdots\left(x^{2^n}+1\right)}{x-1} \\
       &= \dfrac{\left(x^2-1\right)\left(x^2+1\right)\left(x^4+1\right)\cdots\left(x^{2^n}+1\right)}{x-1} \\
       &= \dfrac{\left(x^4-1\right)\left(x^4+1\right)\cdots\left(x^{2^n}+1\right)}{x-1} \\
       \\ &\ \vdots \\
       &= \dfrac{\left(x^{2^n}-1\right)\left(x^{2^n}+1\right)}{x-1} \\
       &= \dfrac{x^{2^{n+1}}-1}{x-1} \\
       &= x^{2^{n+1}-1}+x^{2^{n+1}-2}+\cdots+x+1.
       \end{aligned}
       $$
       Evaluating this resulting geometric series at $x=1$ yields $\sum_{k=0}^{2^{n+1}-1} 1^k = 2^{n+1}$, which matches the first case. Therefore, for all cases, we obtain that
       $$
       (x+1)\left(x^2+1\right)\left(x^4+1\right)\cdots\left(x^{2^n}+1\right) = x^{2^{n+1}-1}+x^{2^{n+1}-2}+\cdots+x+1.
       $$

---

- **Exercise 3**
  Find the quotient and the remainder of the division of $3x^3-16x^2+23x-2$ by $3x-1$.
  - **Solution 3.1**
    We have that $3x^3-16x^2+23x-2=(3x-1)\left(x^2-5x+6\right)+4$. Thus $x^2-5x+6$ is the quotient and $4$ is the remainder.

---

- **Exercise 4**
  Let $a,b\in S, a\neq 0$. For $f\in S[x]\setminus\{0\}$, prove that the remainder of the division of $f$ by $ax+b$ is $f\left(-\dfrac ba\right)$.

  - **Proof 4.1**
    By the division algorithm for polynomials, there exist unique polynomials $q(x), r(x) \in S[x]$ such that
    $$
    f(x) = (ax+b)q(x) + r(x)
    $$
    with either $r(x) = 0$ or $\deg(r(x)) < \deg(ax+b) = 1$. This implies that $r(x)$ must be a constant polynomial, so we can write $r(x) = c$ for some $c \in S$.  
    We now evaluate the polynomial equation $f(x) = (ax+b)q(x) + c$ at the point $x = -\dfrac ba$. This yields the following expression
    $$
    f\left(-\dfrac ba\right) = \left(a\left(-\dfrac ba\right) + b\right)q\left(-\dfrac ba\right) + c = (-b + b)q\left(-\dfrac ba\right) + c = 0 \cdot q\left(-\dfrac ba\right) + c = c.
    $$
    Since the constant remainder $c$ is exactly equal to $f\left(-\dfrac ba\right)$, substituting this back into the division equation proves that the remainder is $f\left(-\dfrac ba\right)$.

---

- **Exercise 5**
  For which values of $a$ and $b$ does the polynomial $p(x)=3x^3+ax^2+bx+2$ have a remainder equal to $12$ when divided by $x+1$ and a remainder of $4$ when divided by $x+2$?

  - **Solution 5.1**
    By the Remainder Theorem, the remainder of the division of $p(x)$ by $x-\alpha$ is equal to $p(\alpha)$.  
    For the divisor $x+1 = x-(-1)$, the remainder is $p(-1) = 12$. Substituting $x = -1$ into $p(x)$ gives the first equation
    $$
    3(-1)^3 + a(-1)^2 + b(-1) + 2 = 12 \implies -3 + a - b + 2 = 12 \implies a - b = 13. \quad (1)
    $$
    For the divisor $x+2 = x-(-2)$, the remainder is $p(-2) = 4$. Substituting $x = -2$ into $p(x)$ gives the second equation
    $$
    3(-2)^3 + a(-2)^2 + b(-2) + 2 = 4 \implies 2a - b = 13. \quad (2)
    $$
    We now solve the linear system of equations formed by (1) and (2). Subtracting equation (1) from equation (2) eliminates $b$ and yields
    $$
    (2a - b) - (a - b) = 13 - 13 \implies a = 0.
    $$
    Substituting $a = 0$ back into equation (1) gives
    $$
    0 - b = 13 \implies b = -13.
    $$
    Therefore, the required values are $a = 0$ and $b = -13$.