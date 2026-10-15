---
title: "Fields"
published: 2026-10-15
description: "Complete tutorial solutions on field identities, modified operations, well-defined modular arithmetic, prime moduli, and calculations in finite fields."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Consequences of the field axioms

- **Problem 1**  
  Let $\mathbb{F}$ be a field. Prove the following properties for $a,b\in\mathbb{F}$:

  1. $a\cdot0=0$.
  2. If $ab=0$, then $a=0$ or $b=0$.
  3. $-(a+b)=(-a)+(-b)$.
  4. If $a\neq0$ and $b\neq0$, then $(ab)^{-1}=a^{-1}b^{-1}$.

  The nonzero hypotheses in part 4 are required for the inverses to be defined.

  - **Solution 1.1**

    **1. Multiplication by zero.** Since $0+0=0$, distributivity gives
    $$
    a0=a(0+0)=a0+a0.
    $$
    Add the opposite of $a0$ to both sides and use associativity:
    $$
    \begin{aligned}
    0&=(-(a0))+(a0)\\
     &=(-(a0))+(a0+a0)\\
     &=\bigl((-(a0))+a0\bigr)+a0\\
     &=0+a0=a0.
    \end{aligned}
    $$
    Hence $a0=0$.

    **2. The zero-product property.** Suppose $ab=0$. If $a=0$, the conclusion already holds. If $a\neq0$, its inverse exists, and
    $$
    b=1b=(a^{-1}a)b=a^{-1}(ab)=a^{-1}0=0,
    $$
    where the last equality follows from part 1. Thus $a=0$ or $b=0$.

    **3. The opposite of a sum.** Associativity and commutativity of addition give
    $$
    \begin{aligned}
    (a+b)+\bigl((-a)+(-b)\bigr)
      &=(a+(-a))+(b+(-b))\\
      &=0+0=0.
    \end{aligned}
    $$
    Therefore $(-a)+(-b)$ is an additive inverse of $a+b$. By uniqueness of the additive inverse,
    $$
    \boxed{-(a+b)=(-a)+(-b)}.
    $$

    **4. The inverse of a product.** Suppose $a,b\neq0$. Part 2 implies $ab\neq0$, so $(ab)^{-1}$ exists. By associativity and commutativity of multiplication,
    $$
    (ab)(a^{-1}b^{-1})=(aa^{-1})(bb^{-1})=1\cdot1=1.
    $$
    Commutativity also gives $(a^{-1}b^{-1})(ab)=1$. Thus $a^{-1}b^{-1}$ is the multiplicative inverse of $ab$. By uniqueness,
    $$
    \boxed{(ab)^{-1}=a^{-1}b^{-1}}.
    $$

## Testing modified operations

- **Problem 2**  
  Define operations on $\mathbb{R}$ by
  $$
  a\oplus b=a+b+4,\qquad a\otimes b=2ab.
  $$
  Determine whether $(\mathbb{R},\oplus,\otimes)$ is a field.

  - **Solution 2.1 (Distributivity fails)**  
    **It is not a field.** It is enough to find one field axiom that fails.

    Distributivity would require
    $$
    a\otimes(b\oplus c)
    =(a\otimes b)\oplus(a\otimes c)
    \qquad\text{for all }a,b,c\in\mathbb{R}.
    $$
    Take $a=1$ and $b=c=0$. Compute the two sides separately:
    $$
    \begin{aligned}
    1\otimes(0\oplus0)
      &=1\otimes4=2\cdot1\cdot4=8,\\
    (1\otimes0)\oplus(1\otimes0)
      &=0\oplus0=0+0+4=4.
    \end{aligned}
    $$
    Since $8\neq4$, the distributive law is false for these inputs. Therefore the specified operations do not make $\mathbb{R}$ a field.

    **Notation reminder.** The numbers $0$ and $1$ used as inputs above are the ordinary real numbers. An identity for a modified operation must be determined from its definition. For example, the additive identity for $\oplus$ is $-4$, since $a\oplus(-4)=a=(-4)\oplus a$.

## Modular arithmetic and representatives

- **Problem 3**  
  Let $m\geq1$ be an integer. Define congruence modulo $m$ by
  $$
  a\equiv b\pmod m\quad\Longleftrightarrow\quad m\mid(a-b).
  $$
  Write $\overline{a}$ for the congruence class of $a$, and let
  $$
  \mathbb{Z}_m=\{\overline{0},\overline{1},\ldots,\overline{m-1}\}.
  $$
  Define
  $$
  \overline{a}+\overline{b}:=\overline{a+b},\qquad
  \overline{a}\cdot\overline{b}:=\overline{ab}.
  $$
  Prove that these operations are well-defined.

  The positive-modulus assumption makes the displayed list of representatives meaningful. By division with remainder, every integer belongs to exactly one of these $m$ classes.

  - **Solution 3.1 (Independence of representatives)**  
    An operation on congruence classes is **well-defined** if choosing different representatives of the same input classes produces the same output class.

    Suppose
    $$
    \overline{a}=\overline{a'},\qquad
    \overline{b}=\overline{b'}.
    $$
    Then there exist integers $r,s$ such that
    $$
    a-a'=rm,\qquad b-b'=sm.
    $$

    **Addition.** We have
    $$
    (a+b)-(a'+b')=(a-a')+(b-b')=(r+s)m.
    $$
    Hence $m\mid((a+b)-(a'+b'))$, so
    $$
    \overline{a+b}=\overline{a'+b'}.
    $$

    **Multiplication.** Similarly,
    $$
    \begin{aligned}
    ab-a'b'
      &=a(b-b')+b'(a-a')\\
      &=asm+b'rm\\
      &=(as+b'r)m.
    \end{aligned}
    $$
    Thus $m\mid(ab-a'b')$, and therefore
    $$
    \overline{ab}=\overline{a'b'}.
    $$

    Both output classes are independent of the representatives chosen. Since $a+b$ and $ab$ are integers, their congruence classes also belong to $\mathbb{Z}_m$. Thus both formulas define binary operations on $\mathbb{Z}_m$.

## When modular arithmetic gives a field

- **Problem 4**  
  Let $m\geq2$ be an integer. Prove that $\mathbb{Z}_m$ is a field if and only if $m$ is prime.

  - **Solution 4.1**

    **Necessity: if $\mathbb{Z}_m$ is a field, then $m$ is prime.** Suppose $\mathbb{Z}_m$ is a field, and assume for contradiction that $m$ is composite. Then
    $$
    m=rs\qquad\text{with }1<r<m\text{ and }1<s<m.
    $$
    Consequently, both $\overline{r}$ and $\overline{s}$ are nonzero in $\mathbb{Z}_m$, but
    $$
    \overline{r}\,\overline{s}=\overline{rs}=\overline{m}=\overline{0}.
    $$
    This contradicts the zero-product property for fields proved in Problem 1. Therefore $m$ must be prime.

    **Sufficiency: if $m=p$ is prime, then $\mathbb{Z}_p$ is a field.** By Problem 3, the operations are well-defined and closed. Associativity, commutativity, and distributivity are inherited from integer arithmetic. For example,
    $$
    \begin{aligned}
    \overline{a}(\overline{b}+\overline{c})
      &=\overline{a(b+c)}\\
      &=\overline{ab+ac}
       =\overline{a}\,\overline{b}+\overline{a}\,\overline{c}.
    \end{aligned}
    $$
    The additive identity is $\overline{0}$, and the additive inverse of $\overline{a}$ is $\overline{-a}$, because
    $$
    \overline{a}+\overline{0}=\overline{a},\qquad
    \overline{a}+\overline{-a}=\overline{0}.
    $$
    The multiplicative identity is $\overline{1}$, since $\overline{1}\,\overline{a}=\overline{a}$. Moreover, $\overline{1}\neq\overline{0}$ because $p\geq2$ does not divide $1$.

    It remains to prove that every nonzero class has a multiplicative inverse. Let $\overline{a}\neq\overline{0}$ and choose its representative with $1\leq a\leq p-1$. Since $p$ is prime,
    $$
    \gcd(a,p)=1.
    $$
    **Bézout's identity** for integers states that coprime integers have an integer linear combination equal to $1$. Thus there exist $u,v\in\mathbb{Z}$ such that
    $$
    au+pv=1.
    $$
    Reducing modulo $p$ gives
    $$
    \overline{a}\,\overline{u}
      =\overline{au}
      =\overline{1-pv}
      =\overline{1}.
    $$
    Commutativity gives $\overline{u}\,\overline{a}=\overline{1}$ as well. Hence $\overline{u}$ is an inverse of $\overline{a}$.

    All field axioms hold, proving
    $$
    \boxed{\mathbb{Z}_m\text{ is a field}\iff m\text{ is prime}\qquad(m\geq2)}.
    $$

    **Computing inverses.** In Bézout's identity $au+pv=1$, the coefficient $u$ supplies the inverse of $a$ modulo $p$: $\overline{a}^{\,-1}=\overline{u}$.

## Calculations in finite fields

- **Problem 5**  
  Compute
  $$
  E=4\cdot3^{-1}+2\cdot(-6)+3
  $$
  first in $\mathbb{F}_5=\mathbb{Z}_5$ and then in $\mathbb{F}_{13}=\mathbb{Z}_{13}$.

  In this problem, integer symbols represent their residue classes in the indicated field. The symbol $3^{-1}$ means the multiplicative inverse of $3$ in that field: a residue $c$ satisfying $3c\equiv1$ modulo the field's prime modulus.

  - **Solution 5.1 (In $\mathbb{F}_5$)**  
    Since
    $$
    3\cdot2=6\equiv1\pmod5,
    $$
    we have $3^{-1}=2$ in $\mathbb{F}_5$. Also $-6\equiv4\pmod5$. Therefore
    $$
    E\equiv4\cdot2+2\cdot4+3
      =8+8+3=19\equiv4\pmod5.
    $$
    Thus
    $$
    \boxed{E=4\quad\text{in }\mathbb{F}_5}.
    $$

  - **Solution 5.2 (In $\mathbb{F}_{13}$)**  
    Since
    $$
    3\cdot9=27\equiv1\pmod{13},
    $$
    we have $3^{-1}=9$ in $\mathbb{F}_{13}$. Also $-6\equiv7\pmod{13}$. Therefore
    $$
    E\equiv4\cdot9+2\cdot7+3
      =36+14+3=53\equiv1\pmod{13}.
    $$
    Thus
    $$
    \boxed{E=1\quad\text{in }\mathbb{F}_{13}}.
    $$

  - **Results 5.3**

    | Field | $3^{-1}$ | $-6$ | Value of $E$ |
    | --- | --- | --- | --- |
    | $\mathbb{F}_5$ | $2$ | $4$ | $4$ |
    | $\mathbb{F}_{13}$ | $9$ | $7$ | $1$ |

    The inverse and the final result must be computed in the specified field. The same integer expression can have different values in different fields.
