---
title: "Arithmetic and Order of Real Numbers"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Arithmetic and Order of Real Numbers

- **Exercise 1**
  Let $a,b\in\mathbb R, b\neq 0$. Prove that $\dfrac ab>0\iff (a>0\land b>0)\lor(a<0\land b<0)$.
  Similarly, prove that $\dfrac ab<0\iff (a>0\land b<0)\lor(a<0\land b>0)$.

  - **Proof 1.1**
    Suppose $a,b\in\mathbb R, b\neq 0$.

    1. **Proof of the first equivalence**:

       * ($\Longrightarrow$) Suppose $\dfrac ab>0$. By definition, $\dfrac ab=a\cdot\dfrac 1b$. From the properties of ordered fields, a product of two numbers is positive if and only if both numbers have the same sign, which yields:
         $$
         \left(a>0\land \dfrac 1b>0\right)\lor\left(a<0\land\dfrac 1b<0\right).
         $$
         By Proposition 2.4, we know that $\dfrac 1b>0 \iff b>0$, and similarly $\dfrac 1b<0 \iff b<0$. Substituting these relations into the statement, we have:
         $$
         (a>0\land b>0)\lor(a<0\land b<0).
         $$

       * ($\Longleftarrow$) Suppose $(a>0\land b>0)\lor(a<0\land b<0)$. We split this into two cases:

         * **Case 1**: If $a>0$ and $b>0$, then by Proposition 2.4, $b>0 \implies \dfrac 1b>0$. Since the product of two positive numbers is positive, we obtain $\dfrac ab = a \cdot \dfrac 1b > 0$.
         * **Case 2**: If $a<0$ and $b<0$, then by Proposition 2.4, $b<0 \implies \dfrac 1b<0$. Since the product of two negative numbers is positive, we obtain $\dfrac ab = a \cdot \dfrac 1b > 0$.
           Therefore, in both cases, we have \(\dfrac ab>0\).

    2. **Proof of the second equivalence**:

       * ($\Longrightarrow$) Suppose $\dfrac ab<0$, where $\dfrac ab=a\cdot\dfrac 1b$. From the properties of ordered fields, a product of two numbers is negative if and only if they have different signs, which yields:
         $$
         \left(a>0\land \dfrac 1b<0\right)\lor\left(a<0\land\dfrac 1b>0\right).
         $$
         Applying Proposition 2.4, we obtain:
         $$
         (a>0\land b<0)\lor(a<0\land b>0).
         $$

       * ($\Longleftarrow$) Suppose $(a>0\land b<0)\lor(a<0\land b>0)$. We consider the two cases:

         * **Case 1**: If $a>0$ and $b<0$, then by Proposition 2.4, $\dfrac 1b<0$. The product of a positive number and a negative number is negative, so $\dfrac ab = a \cdot \dfrac 1b < 0$.
         * **Case 2**: If $a<0$ and $b>0$, then by Proposition 2.4, $\dfrac 1b>0$. The product of a negative number and a positive number is negative, so $\dfrac ab = a \cdot \dfrac 1b < 0$.
           Therefore, the second equivalence is also proved.

---

- **Exercise 2**
  Let $a,b\in\mathbb R$ satisfy $0<a<b$. Prove that $0<\dfrac 1b<\dfrac 1a$.

  - **Proof 2.1**
    Suppose $a,b\in\mathbb R, 0<a<b$. Then $0<b-a$. Therefore we have:
    $$
    \dfrac 1a-\dfrac 1b=\dfrac{b-a}{ab}.
    $$
    And since $b-a>0$ and $ab>0$ (as $a>0$ and $b>0$), we have that $\dfrac 1a-\dfrac 1b>0$, that is, \(\dfrac 1a>\dfrac 1b\). Because $b>0$, by Proposition 2.4 we have $\dfrac 1b>0$. Therefore, $0<\dfrac 1b<\dfrac 1a$.

---

- **Exercise 3**
  Let $a,b$ be distinct positive real numbers. Prove that $\dfrac ab+\dfrac ba>2$.

  - **Proof 3.1**
    Suppose $a,b\in\mathbb R$ with $a>0, b>0, a\neq b$. By the properties of real numbers, we have that
    $$
    (a-b)^2>0.
    $$
    Then, since $ab>0$, we expand and divide:
    $$
    \begin{aligned}
    a^2-2ab+b^2 &> 0 \\
    a^2+b^2 &> 2ab \\
    \dfrac{a^2}{ab}+\dfrac{b^2}{ab} &> \dfrac{2ab}{ab} \\
    \dfrac ab+\dfrac ba &> 2.
    \end{aligned}
    $$

---

- **Exercise 4**
  Prove that $\sqrt 6$ is irrational.

  - **Proof 4.1**
    By contradiction. Suppose $\sqrt 6$ is rational. Then, there exist $p\in\mathbb Z, q\in\mathbb N$ where $p, q$ are coprime such that $\sqrt 6=\dfrac pq$. Then
    $$
    \begin{aligned}
    6 &= \dfrac {p^2}{q^2} \\
    6q^2 &= p^2.
    \end{aligned}
    $$
    Thus we have
    $$
    \nu_3\left(6q^2\right)=\nu_3(6)+\nu_3\left(q^2\right)=\nu_3\left(p^2\right).
    $$
    Using the properties of the prime exponent notation, this can be rewritten as $1 + 2\nu_3(q) = 2\nu_3(p)$. Since $1 + 2\nu_3(q)$ is an odd integer and $2\nu_3(p)$ is an even integer, this is a contradiction. Therefore, $\sqrt 6$ is irrational.

---

- **Exercise 5**
  Let $x$ be irrational, $r\in\mathbb Q$. Prove that $x+r$ and $\dfrac rx$ when $x\neq 0, r\neq 0$ are irrational.

  - **Proof 5.1**
    By contradiction. Suppose $x\in\mathbb R\setminus \mathbb Q, r\in\mathbb Q$. Suppose $x+r\in\mathbb Q$, then $\exists s\in\mathbb Q$ such that $x+r=s$. Therefore, $x=s-r$. But $s-r\in\mathbb Q$ because $\mathbb Q$ is closed under subtraction. This contradicts the fact that $x$ is irrational. Thus, $x+r$ is irrational.

    By contradiction. Suppose $r\in\mathbb Q, x\neq 0, r\neq 0$, and $x$ is irrational. Suppose $\dfrac rx$ is rational, then $\exists s\in\mathbb Q$ such that \(\dfrac rx=s\). Since $r\neq 0$, we have $s\neq 0$, which implies $x = \dfrac rs = r \cdot s^{-1}$. But since $\mathbb Q$ is closed under division by nonzero elements, $\dfrac rs \in \mathbb Q$, which contradicts the fact that $x$ is irrational. Therefore, $\dfrac rx$ is irrational.

---

- **Exercise 6**
  Let $n\in\mathbb N$ be odd. Prove that $\forall x,y\in\mathbb R, x<y\implies x^n<y^n$.

  - **Proof 6.1**
    Since $n \in \mathbb N$ is odd, we can write $n = 2k + 1$ for some $k \in \mathbb N_0$. We prove the statement by induction on $k$.
    
    1. **Base step**: If $k = 0$, then $n = 1$. The implication $x < y \implies x^1 < y^1$ is trivially true.
    
    2. **Inductive step**: Suppose that the result is true for $n = 2k + 1$, that is, $x < y \implies x^{2k+1} < y^{2k+1}$. We want to show that it holds for $2(k+1)+1 = n+2$. We can factor the difference as follows:
       $$
       y^{n+2} - x^{n+2} = y^n y^2 - x^n x^2 = y^n(y^2 - x^2) + x^2(y^n - x^n) = y^n(y - x)(y + x) + x^2(y^n - x^n).
       $$
       By the inductive hypothesis, $x < y \implies y^n - x^n > 0$, so the second term $x^2(y^n - x^n) \geqslant 0$. For the first term, we analyze three cases based on the signs of $x$ and $y$:
       * **Case 1**: If $0 \leqslant x < y$, then $y^n > 0$ and $y + x > 0$. Since $y - x > 0$, the first term is strictly positive, hence $y^{n+2} - x^{n+2} > 0$.
       * **Case 2**: If $x < y \leqslant 0$, then $-y \geqslant 0$ and $-x > -y \geqslant 0$. By Case 1, $(-x)^n < (-y)^n$. Since $n$ is odd, $-x^n < -y^n \implies x^n > y^n$. Also, $y+x < 0$ and $y-x > 0$. Thus, $y^n(y-x)(y+x) > 0$ (a product of two negatives and one positive), hence $y^{n+2} - x^{n+2} > 0$.
       * **Case 3**: If $x < 0 < y$, then since $n+2$ is odd, $x^{n+2} < 0$ and $y^{n+2} > 0$. It directly follows that $x^{n+2} < 0 < y^{n+2}$.
       
       Therefore, in all cases, $y^{n+2} - x^{n+2} > 0$, which means $x^{n+2} < y^{n+2}$. By induction, the statement is true for all odd $n \in \mathbb N$.

---

- **Exercise 7**
  Suppose $x,y\geqslant 0, n\in\mathbb N$. Prove that $\sqrt[n]{xy}=\sqrt[n]{x}\cdot \sqrt[n]{y}$.

  - **Proof 7.1**
    Suppose $x,y\geqslant 0, n\in\mathbb N$. Let $u=\sqrt[n]{x}$ and $v=\sqrt[n]{y}$. Then $u^n=x$ and $v^n=y$, where $u,v \geqslant 0$. Then we have $(uv)^n=u^n v^n=xy$. Since $uv \geqslant 0$, $uv$ must be the unique $n$-th root of $xy$. Thus, $\sqrt[n]{xy}=\sqrt[n]{x}\cdot \sqrt[n]{y}$.