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
  2. Let $\mathbb{F}$ be a field. There exists $x\in\mathbb{F}\setminus\{0,1\}$ such that $x^2=x$.

  - **Solution 2.1**

    **1. True.** As the statement is written, take $n=1$ for every $x$. Then
    $$
    x^n=x^1=x.
    $$
    This proves the stated claim immediately. For this choice of $n$, the assumption that $p$ is prime is not needed.

    **Supplementary stronger statement: one may also take $n=p>1$.** We prove
    $$
    x^p=x\qquad\text{for every }x\in\mathbb{Z}_p.
    $$
    If $x=0$, this is immediate. Suppose $x\neq0$. Since $p$ is prime, $\mathbb{Z}_p$ is a field, and multiplication by $x$ permutes its nonzero elements. Indeed, it sends nonzero elements to nonzero elements, and if $xa=xb$, cancellation gives $a=b$. An injective map from this finite set to itself is a permutation.

    Consequently, multiplying all nonzero elements before and after this permutation gives
    $$
    \prod_{k=1}^{p-1}(xk)=\prod_{k=1}^{p-1}k
    \qquad\text{in }\mathbb{Z}_p.
    $$
    Equivalently,
    $$
    x^{p-1}\prod_{k=1}^{p-1}k=\prod_{k=1}^{p-1}k.
    $$
    The product on the right is nonzero, because every factor is nonzero and a field has no zero divisors. Cancelling it gives $x^{p-1}=1$. Multiplying by $x$ yields $x^p=x$.

    Thus the stronger statement also holds, including for $x=0$. This is the form of **Fermat's little theorem** valid for every element of $\mathbb{Z}_p$.

    **2. False.** Suppose $x\in\mathbb{F}$ satisfies $x^2=x$. Subtracting $x$ and factoring gives
    $$
    x^2-x=0\quad\Longrightarrow\quad x(x-1)=0.
    $$
    Since $\mathbb{F}$ is a field, the zero-product property implies
    $$
    x=0\qquad\text{or}\qquad x-1=0.
    $$
    Hence $x\in\{0,1\}$, so there is no solution outside this set. Conversely, $0$ and $1$ both satisfy $x^2=x$. Therefore the only solutions in any field are exactly $0$ and $1$.

---

- **Problem 3**  
  Define
  $$
  \operatorname{GL}(2,\mathbb{R})
  :=\left\{A\in M_{2\times2}(\mathbb{R}):
  \exists B\in M_{2\times2}(\mathbb{R}),\ AB=BA=I_2\right\}.
  $$
  Is $(\operatorname{GL}(2,\mathbb{R}),+,\cdot)$ a field under the usual matrix operations? Justify your answer.

  - **Solution 3.1 (Addition is not closed)**  
    **No.** Both $I_2$ and $-I_2$ belong to $\operatorname{GL}(2,\mathbb{R})$, because
    $$
    I_2I_2=I_2,\qquad(-I_2)(-I_2)=I_2.
    $$
    However,
    $$
    I_2+(-I_2)=0_{2\times2}.
    $$
    The zero matrix is not invertible: for every $B\in M_{2\times2}(\mathbb{R})$,
    $$
    0_{2\times2}B=B0_{2\times2}=0_{2\times2}\neq I_2.
    $$
    Thus the sum of two elements of $\operatorname{GL}(2,\mathbb{R})$ can lie outside the set. **Closure under addition fails**, which already proves that these operations do not make it a field.

  - **Remark 3.2 (Multiplication also fails commutativity)**  
    There is another obstruction. Let
    $$
    A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad
    B=\begin{pmatrix}1&0\\1&1\end{pmatrix}.
    $$
    Both are invertible; their inverses are
    $$
    A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix},\qquad
    B^{-1}=\begin{pmatrix}1&0\\-1&1\end{pmatrix},
    $$
    as direct multiplication verifies. But
    $$
    AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}
    \neq
    \begin{pmatrix}1&1\\1&2\end{pmatrix}=BA.
    $$
    Hence the field axiom of commutative multiplication fails as well. Having multiplicative inverses for all elements of this set is not sufficient to satisfy all field axioms.

---

- **Problem 4**  
  Let
  $$
  p(x)=x^3-6x^2+11x-3,\qquad q(x)=x^2-4x+3.
  $$
  Show that $q(x)$ divides $p(x)$ in $\mathbb{Z}_3[x]$, but not in $\mathbb{R}[x]$.

  - **Solution 4.1 (The coefficient field determines the remainder)**  
    Polynomial division gives
    $$
    \begin{aligned}
    p(x)-xq(x)&=-2x^2+8x-3,\\
    p(x)-xq(x)-(-2)q(x)&=3.
    \end{aligned}
    $$
    Thus we have the integer-coefficient identity
    $$
    \boxed{p(x)=(x-2)q(x)+3}.
    $$

    **Over $\mathbb{Z}_3$.** Reduce every coefficient modulo $3$, and denote the resulting polynomials by $\overline{p}$ and $\overline{q}$. Then
    $$
    \overline{p}(x)=x^3+2x,\qquad
    \overline{q}(x)=x^2+2x.
    $$
    Since $3=0$ and $-2=1$ in $\mathbb{Z}_3$, the division identity becomes
    $$
    \overline{p}(x)=(x+1)\overline{q}(x).
    $$
    Directly,
    $$
    (x+1)(x^2+2x)=x^3+3x^2+2x=x^3+2x
    \qquad\text{in }\mathbb{Z}_3[x].
    $$
    Therefore $q$ divides $p$ in $\mathbb{Z}_3[x]$, with quotient $x+1$.

    **Over $\mathbb{R}$.** The remainder in the same division is the nonzero constant $3$, whose degree is less than $\deg q=2$. Therefore $q$ does not divide $p$ in $\mathbb{R}[x]$.

    This can also be proved without invoking uniqueness of the division remainder. If $p=qh$ for some $h\in\mathbb{R}[x]$, then evaluating at $x=1$ would give
    $$
    p(1)=q(1)h(1)=0,
    $$
    because $q(1)=1-4+3=0$. But
    $$
    p(1)=1-6+11-3=3\neq0,
    $$
    a contradiction.

    **Key point.** The remainder is $3$: it vanishes in $\mathbb{Z}_3$ and remains nonzero in $\mathbb{R}$. This is why divisibility differs between the two coefficient fields.
