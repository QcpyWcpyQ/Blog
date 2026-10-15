---
title: "Week 1"
published: 2026-10-14
description: "Solutions on field axioms, powers and idempotents in fields, invertible matrices, and polynomial divisibility over different fields."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**  
  Show one field axiom that fails for $\mathbb{Z}_6$, giving a specific example.

  - **Solution 1.1 (Failure of multiplicative inverses)**  
    The **multiplicative inverse axiom** fails. In a field, every nonzero element must have a inverse.

    Consider $2\neq0$ in $\mathbb{Z}_6$. For $x=0,1,2,3,4,5$, the corresponding products $2x$ modulo $6$ are
    $$
    0,\ 2,\ 4,\ 0,\ 2,\ 4.
    $$
    None equals $1$, so there is no $x\in\mathbb{Z}_6$ satisfying
    $$
    2x=1\qquad\text{in }\mathbb{Z}_6.
    $$
    Thus $2$ has no multiplicative inverse. Therefore $\mathbb{Z}_6$ is not a field.

---

- **Problem 2**  
  Determine whether the following statements are true or false. Justify each answer with a proof or a counterexample.

  1. Let $p$ be a prime number. For every $x\in\mathbb{Z}_p$, there exists $n\in\mathbb{N}$ such that $x^n=x$.
  2. Let $\mathbb{F}$ be a field. Then, there exists $x\in\mathbb F$ such that $x\not\in\{0,1\}$ and $x^2=x$.

  - **Solution 2.1**

    **1. True.** Take $n=1\in\mathbb N$ for every $x$. Then
    $$
    x^n=x^1=x.
    $$
    Therefore the statement is true;

    **2. False.** Suppose $x\in\mathbb{F}$ satisfies $x^2=x$. Subtracting $x$ and factoring gives
    $$
    x^2-x=0\quad\Longrightarrow\quad x(x-1)=0.
    $$
    Since $\mathbb{F}$ is a field, by property, it implies that
    $$
    x=0\qquad\text{or}\qquad x-1=0.
    $$
    Hence $x\in\{0,1\}$, so there is no solution outside this set. Therefore the statement is false.

---

- **Problem 3**  
  Define
  $$
  \operatorname{GL}(2,\mathbb{R})
  :=\left\{A\in M_{2\times2}(\mathbb{R}):
  \exists B\in M_{2\times2}(\mathbb{R}),\ AB=BA=I\right\}.
  $$
  Is $(\operatorname{GL}(2,\mathbb{R}),+,\cdot)$ a field? Justify your answer.

  - **Solution 3.1**
    **No.** Both $I_2$ and $-I_2$ belong to $\operatorname{GL}(2,\mathbb{R})$ because
    $$
    I_2I_2=I_2,\qquad(-I_2)(-I_2)=I_2.
    $$
    However,
    $$
    I_2+(-I_2)=0_{2\times2}.
    $$
    For every $B\in M_{2\times2}(\mathbb{R})$, we have that
    $$
    0_{2\times2}B=B0_{2\times2}=0_{2\times2}\neq I_2.
    $$
    Thus $0_{2\times 2}\not\in(\operatorname{GL}(2,\mathbb{R}),+,\cdot)$ Since the sum of elements of a field cannot lie outside the field, the statement is false.

---

- **Problem 4**  
  Let
  $$
  p(x)=x^3-6x^2+11x-3,\qquad q(x)=x^2-4x+3.
  $$
  Suppose $p(x)=x^3-6x^2+11x-3,q(x)=x^2-4x+3.$. Show that $q(x)$ divides $p(x)$ in $\mathbb{Z}_3[x]$, but not in $\mathbb{R}[x]$.

  - **Solution 4.1**  
    We show that $q(x)$ divides $p(x)$ in $\mathbb{Z}_3[x]$. We clarify $p(x)$ and $q(x)$ in $\mathbb Z_{3}$ first. We have that  
    $$
    \begin{aligned}
    p(x)&=x^3-6x^2+11x-3\equiv x^3+2x\pmod 3 \\
    q(x)&=x^2-4x+3=x^2-x=x(x-1)\pmod 3
    \end{aligned}
    $$
    Thus the root of $q(x)$ in $\mathbb Z_{3}$ is $0$ and $1$. Then we substitute $0$ and $1$ into $p(x)$  
    $$
    \begin{aligned}
    p(0)&\equiv 0^3+2\cdot 0=0\pmod 3 \\
    p(1)&\equiv 1^3+2\cdot 1=3\equiv 0\pmod 3
    \end{aligned}
    $$
    Since $0,1$ are the root of $p(x)$ in $\mathbb Z_3$. Because each root of $q(x)$ is the root of $p(x)$ in $\mathbb Z_{3}$, we obtain that $q(x)$ divides $p(x)$ in $\mathbb Z_3$.
    
    We show that $q(x)$ does not divide $p(x)$ in $\mathbb R[x]$. We clarify $q(x)$ first, that is, 
    $$
    q(x)=x^2-4x+3=(x-1)(x-3).
    $$
    Therefore the root of $q(x)$ in $\mathbb R$ is $1$ and $3$. Then we substitute $1$ and $3$ into $q(x)$  
    $$
    \begin{aligned}
    p(1)&=1^3-6\cdot 1^2+11\cdot 1-3=3\neq 0 \\
    p(3)&=3^3-6\cdot 3^2+11\cdot 3-3=3\neq 0
    \end{aligned}
    $$
    Since $1,3$ are not the root of $p(x)$ in $\mathbb R$. Because there exists a root of $q(x)$ is not the root of $p(x)$ in $\mathbb R$, we obtain that $q(x)$ does not divide $p(x)$ in $\mathbb R$.
