---
title: "Week 1"
published: 2026-10-16
description: "Workshop solutions on modular fields, the field with four elements, zero products of matrices, and polynomial multiplication over different fields."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Verifying the field axioms in $\mathbb{Z}_5$

- **Exercise 1**  
  Show that $\mathbb{Z}_5$ is a field by verifying the field axioms.

  - **Solution 1.1**  
    Write $\overline{a}$ for the residue class of the integer $a$ modulo $5$. Define
    $$
    \overline{a}+\overline{b}=\overline{a+b},\qquad
    \overline{a}\cdot\overline{b}=\overline{ab}.
    $$
    In the tables below, $0,1,2,3,4$ denote residue classes, and every result is reduced modulo $5$.

    | $+$ | $0$ | $1$ | $2$ | $3$ | $4$ |
    | --- | --- | --- | --- | --- | --- |
    | $0$ | $0$ | $1$ | $2$ | $3$ | $4$ |
    | $1$ | $1$ | $2$ | $3$ | $4$ | $0$ |
    | $2$ | $2$ | $3$ | $4$ | $0$ | $1$ |
    | $3$ | $3$ | $4$ | $0$ | $1$ | $2$ |
    | $4$ | $4$ | $0$ | $1$ | $2$ | $3$ |

    | $\cdot$ | $0$ | $1$ | $2$ | $3$ | $4$ |
    | --- | --- | --- | --- | --- | --- |
    | $0$ | $0$ | $0$ | $0$ | $0$ | $0$ |
    | $1$ | $0$ | $1$ | $2$ | $3$ | $4$ |
    | $2$ | $0$ | $2$ | $4$ | $1$ | $3$ |
    | $3$ | $0$ | $3$ | $1$ | $4$ | $2$ |
    | $4$ | $0$ | $4$ | $3$ | $2$ | $1$ |

    **1. Well-defined operations and closure.** If $a'=a+5r$ and $b'=b+5s$, then
    $$
    (a'+b')-(a+b)=5(r+s),\qquad
    a'b'-ab=5(as+br+5rs).
    $$
    Thus changing representatives does not change the resulting classes. Every sum and product is again one of the five classes, so both operations are closed.

    **2. Associativity.** Integer associativity gives
    $$
    \begin{aligned}
    (\overline{a}+\overline{b})+\overline{c}
      &=\overline{(a+b)+c}=\overline{a+(b+c)}
       =\overline{a}+(\overline{b}+\overline{c}),\\
    (\overline{a}\,\overline{b})\overline{c}
      &=\overline{(ab)c}=\overline{a(bc)}
       =\overline{a}(\overline{b}\,\overline{c}).
    \end{aligned}
    $$

    **3. Commutativity.** Since $a+b=b+a$ and $ab=ba$ in $\mathbb{Z}$,
    $$
    \overline{a}+\overline{b}=\overline{b}+\overline{a},\qquad
    \overline{a}\,\overline{b}=\overline{b}\,\overline{a}.
    $$

    **4. Identities.** For every $\overline{a}$,
    $$
    \overline{a}+\overline{0}=\overline{a},\qquad
    \overline{a}\,\overline{1}=\overline{a}.
    $$
    Commutativity gives the identities in the other order. Moreover, $\overline{0}\neq\overline{1}$ because $5$ does not divide $1$.

    **5. Additive inverses.** The opposite of $\overline{a}$ is $\overline{-a}$. Explicitly,
    $$
    -0=0,\qquad -1=4,\qquad -2=3,\qquad -3=2,\qquad -4=1.
    $$

    **6. Multiplicative inverses.** Every nonzero element has an inverse:
    $$
    1^{-1}=1,\qquad 2^{-1}=3,\qquad 3^{-1}=2,\qquad 4^{-1}=4,
    $$
    since $1\cdot1\equiv2\cdot3\equiv4\cdot4\equiv1\pmod5$.

    **7. Distributivity.** Integer distributivity gives
    $$
    \overline{a}(\overline{b}+\overline{c})
      =\overline{a(b+c)}
      =\overline{ab+ac}
      =\overline{a}\,\overline{b}+\overline{a}\,\overline{c}.
    $$
    The other distributive law follows by commutativity of multiplication. Thus all field axioms hold, and $\boxed{\mathbb{Z}_5\text{ is a field}}$.

## Why $\mathbb{Z}_6$ is not a field

- **Exercise 2**  
  Show that $\mathbb{Z}_6$ is not a field.

  - **Solution 2.1 (A nonzero element without an inverse)**  
    The element $2$ is nonzero in $\mathbb{Z}_6$. For $x=0,1,2,3,4,5$, the products $2x$ modulo $6$ are
    $$
    0,\ 2,\ 4,\ 0,\ 2,\ 4.
    $$
    None is $1$. Therefore $2$ has no multiplicative inverse, so the inverse axiom fails and $\boxed{\mathbb{Z}_6\text{ is not a field}}$.

    Equivalently, $2\neq0$ and $3\neq0$, but $2\cdot3=0$ in $\mathbb{Z}_6$. If $2^{-1}$ existed, multiplying by it would give $3=0$, a contradiction. Thus this nonzero zero divisor also proves that $\mathbb{Z}_6$ is not a field.

## Constructing a field with four elements

- **Exercise 3**  
  For an arbitrary set $F$ of $4$ elements find (if possible) addition and multiplication tables such that $F$ is a field. Are there any other possible tables?

  - **Solution 3.1 (Construction and verification)**  
    Label the four distinct elements $0,1,\alpha,\beta$. We will use the relations
    $$
    1+1=0,\qquad \beta=\alpha+1,\qquad \alpha^2=\alpha+1=\beta.
    $$
    Define the operations by the following tables:

    | $+$ | $0$ | $1$ | $\alpha$ | $\beta$ |
    | --- | --- | --- | --- | --- |
    | $0$ | $0$ | $1$ | $\alpha$ | $\beta$ |
    | $1$ | $1$ | $0$ | $\beta$ | $\alpha$ |
    | $\alpha$ | $\alpha$ | $\beta$ | $0$ | $1$ |
    | $\beta$ | $\beta$ | $\alpha$ | $1$ | $0$ |

    | $\cdot$ | $0$ | $1$ | $\alpha$ | $\beta$ |
    | --- | --- | --- | --- | --- |
    | $0$ | $0$ | $0$ | $0$ | $0$ |
    | $1$ | $0$ | $1$ | $\alpha$ | $\beta$ |
    | $\alpha$ | $0$ | $\alpha$ | $\beta$ | $1$ |
    | $\beta$ | $0$ | $\beta$ | $1$ | $\alpha$ |

    Closure, commutativity, and the distinct identities $0,1$ follow directly from the tables. Every element is its own additive inverse. The nonzero multiplicative inverses are
    $$
    1^{-1}=1,\qquad \alpha^{-1}=\beta,\qquad \beta^{-1}=\alpha.
    $$
    We still need to verify associativity and distributivity; the existence of identities and inverses alone is not enough.

    **A coordinate description.** Identify the elements with pairs over $\mathbb{Z}_2$:
    $$
    0=(0,0),\qquad 1=(1,0),\qquad
    \alpha=(0,1),\qquad \beta=(1,1).
    $$
    The pair $(u,v)$ represents $u+v\alpha$. The two tables are exactly the rules
    $$
    \begin{aligned}
    (u,v)+(r,s)&=(u+r,v+s),\\
    (u,v)(r,s)&=(ur+vs,\ us+vr+vs),
    \end{aligned}
    $$
    with every coordinate computed modulo $2$.

    **Additive associativity** follows coordinate by coordinate from associativity in $\mathbb{Z}_2$.

    **Distributivity.** For $X=(u,v)$, $Y=(r,s)$, and $Z=(t,w)$,
    $$
    \begin{aligned}
    X(Y+Z)
      &=\bigl(u(r+t)+v(s+w),\ u(s+w)+v(r+t)+v(s+w)\bigr)\\
      &=\bigl(ur+vs+ut+vw,\ us+vr+vs+uw+vt+vw\bigr)\\
      &=XY+XZ.
    \end{aligned}
    $$
    Commutativity gives the other distributive law.

    **Multiplicative associativity.** Using the same coordinate rule, both $(XY)Z$ and $X(YZ)$ have first coordinate
    $$
    urt+vst+usw+vrw+vsw
    $$
    and second coordinate
    $$
    urw+ust+vrt+vst+usw+vrw.
    $$
    In each expansion the term $vsw$ appears twice in the second coordinate and cancels modulo $2$. Hence $(XY)Z=X(YZ)$.

    All field axioms hold. This field is denoted $\mathbb{F}_4$. It is different from $\mathbb{Z}_4$ with its usual operations, where $2\neq0$ but $2\cdot2=0$, so $2$ has no inverse.

  - **Solution 3.2 (Are there other possible tables?)**  
    We show that the tables above are forced once the additive and multiplicative identities have been chosen.

    **Step 1: every field with four elements has $1+1=0$.** Let $S$ be the sum of all four elements. The map $x\mapsto x+1$ is a permutation of $F$, since its inverse is $x\mapsto x-1$. Therefore
    $$
    S=\sum_{x\in F}(x+1)=S+(1+1+1+1).
    $$
    Additive cancellation gives $1+1+1+1=0$. If $u=1+1$, distributivity gives
    $$
    u^2=(1+1)(1+1)=1+1+1+1=0.
    $$
    A field has no nonzero zero divisors, so $u=0$. Consequently, for every $x\in F$,
    $$
    x+x=(1+1)x=0.
    $$

    **Step 2: the addition table is forced.** Choose $\alpha\notin\{0,1\}$ and call the remaining element $\beta$. The element $\alpha+1$ cannot equal $0$, $1$, or $\alpha$: these possibilities would give $\alpha=1$, $\alpha=0$, or $1=0$, respectively. Hence
    $$
    \alpha+1=\beta.
    $$
    It follows that
    $$
    1+\beta=\alpha,\qquad \alpha+\beta=1,
    $$
    and every element added to itself is $0$. These facts determine the entire addition table.

    **Step 3: the multiplication table is forced.** Consider $\alpha^2$:

    - $\alpha^2\neq0$, because $\alpha\neq0$ and a field has no nonzero zero divisors.
    - $\alpha^2\neq\alpha$, since cancellation of the nonzero factor $\alpha$ would give $\alpha=1$.
    - $\alpha^2\neq1$: otherwise
      $$
      (\alpha+1)^2=\alpha^2+\alpha+\alpha+1=1+1=0,
      $$
      forcing $\alpha+1=0$ and hence $\alpha=1$, a contradiction.

    Thus $\alpha^2=\beta$. Distributivity now gives
    $$
    \alpha\beta=\alpha(\alpha+1)=\beta+\alpha=1,\qquad
    \beta^2=(\alpha+1)^2=\beta+1=\alpha.
    $$
    Products involving $0$ or $1$ are already determined by the field identities, so the multiplication table is also forced.

    **Conclusion.** There is exactly one field with four elements **up to relabelling** (up to isomorphism). On a fixed set of four labelled elements, choosing a different element as $0$ or $1$ produces a different pair of tables. There are $4\cdot3=12$ such pairs: four choices for $0$ and three for $1$, after which the tables are uniquely determined. Swapping the names $\alpha$ and $\beta$ gives no additional operation on that fixed set.

## Zero products of matrices

- **Exercise 4**  
  Give examples of $A,B\in M_{3\times3}(\mathbb{R})$ such that

  1. $AB=0$ and $BA\neq0$.
  2. $A\neq0$, $B\neq0$, and $AB=BA=0$.

  Here $0$ denotes the $3\times3$ zero matrix.

  - **Solution 4.1**

    **1. A zero product in only one order.** Take
    $$
    A=\begin{pmatrix}
    0&1&0\\0&1&0\\0&1&0
    \end{pmatrix},\qquad
    B=\begin{pmatrix}
    1&0&0\\0&0&0\\0&0&0
    \end{pmatrix}.
    $$
    Direct multiplication gives
    $$
    AB=\begin{pmatrix}
    0&0&0\\0&0&0\\0&0&0
    \end{pmatrix},\qquad
    BA=\begin{pmatrix}
    0&1&0\\0&0&0\\0&0&0
    \end{pmatrix}\neq0.
    $$
    Multiplying $A$ on the right by $B$ keeps only the first column of $A$, which is zero. Multiplying $A$ on the left by $B$ keeps only its first row, which is nonzero. In particular,
    $$
    (BA)_{12}=1\cdot1+0\cdot1+0\cdot1=1.
    $$

    **2. Nonzero matrices whose products vanish in both orders.** Take
    $$
    A=\begin{pmatrix}
    1&0&0\\0&0&0\\0&0&0
    \end{pmatrix},\qquad
    B=\begin{pmatrix}
    0&0&0\\0&1&0\\0&0&0
    \end{pmatrix}.
    $$
    Both are nonzero. Since they are diagonal, their product is diagonal with entries given by the products of corresponding diagonal entries:
    $$
    AB=BA=\operatorname{diag}(1\cdot0,0\cdot1,0\cdot0)=0.
    $$

    These examples show that matrix multiplication can fail to commute, and that $AB=0$ does not imply $A=0$ or $B=0$ for matrices over a field.

## Polynomial multiplication over different fields

- **Exercise 5**  
  Compute the product of the polynomials
  $$
  p(x)=x^3-8x^2+19x-5,\qquad q(x)=x^2-4x+3
  $$
  in both $\mathbb{Z}_7[x]$ and $\mathbb{R}[x]$.

  - **Solution 5.1 (In $\mathbb{Z}_7[x]$)**  
    Reduce the coefficients modulo $7$ first. Using signed representatives,
    $$
    p(x)=x^3-x^2-2x+2,\qquad q(x)=x^2+3x+3
    \quad\text{in }\mathbb{Z}_7[x].
    $$
    Expand and collect like powers:
    $$
    \begin{aligned}
    p(x)q(x)
      &=(x^3-x^2-2x+2)(x^2+3x+3)\\
      &=x^5+3x^4+3x^3\\
      &\quad-x^4-3x^3-3x^2\\
      &\quad-2x^3-6x^2-6x\\
      &\quad+2x^2+6x+6\\
      &=x^5+2x^4-2x^3-7x^2+6.
    \end{aligned}
    $$
    Since $-2\equiv5$ and $-7\equiv0\pmod7$,
    $$
    \boxed{p(x)q(x)=x^5+2x^4+5x^3+6\quad\text{in }\mathbb{Z}_7[x]}.
    $$

  - **Solution 5.2 (In $\mathbb{R}[x]$)**  
    Use ordinary real arithmetic:
    $$
    \begin{aligned}
    p(x)q(x)
      &=(x^3-8x^2+19x-5)(x^2-4x+3)\\
      &=x^5-4x^4+3x^3\\
      &\quad-8x^4+32x^3-24x^2\\
      &\quad+19x^3-76x^2+57x\\
      &\quad-5x^2+20x-15\\
      &=x^5-12x^4+54x^3-105x^2+77x-15.
    \end{aligned}
    $$
    Therefore
    $$
    \boxed{p(x)q(x)=x^5-12x^4+54x^3-105x^2+77x-15\quad\text{in }\mathbb{R}[x]}.
    $$

    **Check.** All coefficients here are integers, so reducing the expanded product modulo $7$ gives
    $$
    -12\equiv2,\quad54\equiv5,\quad-105\equiv0,\quad77\equiv0,\quad-15\equiv6\pmod7,
    $$
    which agrees with Solution 5.1. In both polynomial rings, $x$ is a formal variable; the difference is the arithmetic used for the coefficients.
