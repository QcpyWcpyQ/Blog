---
title: "The Real Number System"
published: 2026-10-13
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Introduction

The course studies **real-valued functions defined on subsets of $\mathbb{R}$**:
$$
f\colon D\longrightarrow\mathbb{R},\qquad D\subseteq\mathbb{R}.
$$
Its two main goals are to learn **calculus** and to understand **how mathematics works as a science**. Statements are studied formally and rigorously, using the rules of logic and proofs to justify conclusions.

## The need for axioms: an example from Euclidean geometry

- **Notation (Angles of a triangle)**  
  In a triangle $ABC$, write $\widehat{A}$, $\widehat{B}$, and $\widehat{C}$ for the angles at the corresponding vertices. The notation $\angle XYZ$ denotes the angle with vertex $Y$ and sides given by the rays $YX$ and $YZ$. For example,
  $$
  \widehat{B}=\angle ABC.
  $$
  The same symbols also denote the measures of these angles in degrees.

---

- **Theorem 1 (The greater side is opposite the greater angle)**  
  This is Theorem 1.1 in the course notes. In a triangle $ABC$,
  $$
  AC>AB\quad\Longrightarrow\quad\widehat{B}>\widehat{C}.
  $$
  The side $AC$ is opposite $\widehat{B}$, while $AB$ is opposite $\widehat{C}$. The converse is also true.

  - **Proof 1.1 (A first argument)**  
    **Construction.** Since $AC>AB$, lay off a segment of length $AB$ on the ray $AC$. This gives a point $D$ strictly between $A$ and $C$ such that
    $$
    AD=AB.
    $$
    Draw the segment $BD$.

    **Step 1: use the isosceles triangle $ABD$.** Since $AD=AB$, its base angles are equal:
    $$
    \angle ABD=\angle ADB.
    $$

    **Step 2: compare $\angle ADB$ with the angles of $BCD$.** The angles of triangle $BCD$ add up to $180^\circ$:
    $$
    \angle BCD+\angle DBC+\angle BDC=180^\circ.
    $$
    Since $D$ lies between $A$ and $C$, the rays $DA$ and $DC$ are opposite, so
    $$
    \angle ADB+\angle BDC=180^\circ.
    $$
    Consequently,
    $$
    \angle ADB=180^\circ-\angle BDC
    =\angle BCD+\angle DBC.
    $$

    **Step 3: compare $\widehat{B}$ with $\angle ABD$.** The ray $BD$ lies inside the angle at $B$. Therefore,
    $$
    \widehat{B}=\angle ABD+\angle DBC>\angle ABD.
    $$
    The inequality is strict because $\angle DBC>0$.

    Finally, $D$ lies on the segment $AC$, so $\angle BCD=\widehat{C}$. Combining the three steps gives
    $$
    \begin{aligned}
    \widehat{B}
      &>\angle ABD\\
      &=\angle ADB\\
      &=\angle BCD+\angle DBC\\
      &>\angle BCD\\
      &=\widehat{C}.
    \end{aligned}
    $$
    Thus $\widehat{B}>\widehat{C}$.

  - **Remark 1.2 (Which facts does the proof use?)**  
    The argument is correct, but it relies on geometric facts that have not yet been proved in this discussion. In particular:

    1. The base angles of an isosceles triangle are equal.
    2. The interior angles of every Euclidean triangle add up to $180^\circ$.

    It also uses facts about laying off segments, straight angles, and the position of a ray inside an angle. A rigorous development must make the assumptions and previously established results behind such steps explicit. This example motivates the need for **axioms** as a starting point for proofs.

---

- **Axioms 2 (Real numbers Axioms)**  
    The real numbers axioms include:

    1. Field Axioms.
    2. Order Axioms.
    3. Completeness Axiom.

    **Field Axioms**  

    1. $\mathbb R$ is a set where we can sum and multiply its element, that is, $x+y\in\mathbb R$ and $xy\in\mathbb R$. The sum satisfies these axioms:
        1. Associativity: $\forall x,y,z,\in\mathbb R,(x+y)+z=x+(y+z)$.
        2. Commutativity: $x+y=y+x$.
        3. Neutral element: $\exists$ a number called $0$ such that $\forall x\in \mathbb R,x+0=0+x=x$.
        4. Opposite element: $\forall x\in\mathbb R,\exists y\in\mathbb R$ such that $x+y=y+x=0$. This $y$ is called the opposite of $x$ and denoted $-x$.
    2. The product satisfies these axioms:
        1. Associativity: $\forall x,y,z\in\mathbb R,(xy)z=x(yz)$.
        2. Commutativity: $\forall x,y\in\mathbb R,xy=yx$.
        3. Identity element: $\exists$ a number called $1\neq 0$ such that $\forall x\in\mathbb R,1\cdot x=x\cdot 1=x$.
        4. Inverse elemet: $\forall x\in\mathbb R,x\neq 0,\exists y$ such that $xy=yx=1$. This $y$ is called inverse of $x$ and denoted $x^{-1}$.
    3. Distribution law: $\forall x,y,z\in\mathbb R,x(y+z)=xy+xz$.

    - **Properties 2.1**  

        1. There is only $0$ with proprety $\operatorname{S3}$: If a number $a$ satisfies $\forall x\in\mathbb R,a+x=x\implies a=0$.

            There is only $1$ with proprety $\operatorname{P3}$: If a number $a$ satisfies $\forall x\in\mathbb R,ax=x\implies a=1$.

        2. The opposite of $x$ is unique: If $x+a=0\implies a=-x$.

            The inverse of $x\neq 0$ is unique: If $xa=1\implies a=x^{-1}$.

        3. $\forall x\in\mathbb R,0x=0$.

        4. If $ax=ay$ and $a\neq 0$ then $x=y$ (Cancellation property).

        5. $-(-x)=x,(-x)y=-(xy),(-x)(-y)=xy,(-1)x=-x$.

        6. $((x_1+x_2)+x_3)+x_4=(x_1+x_2)+(x_3+x_4)=\cdots$. Since all are the same, we simply write $x_1+x_2+x_3+x_4$.

        - **Proof 2.1.1**  
            1. Suppose that $a$ satisfies $\forall x,a+x=x$, we want to obtain $a=0$. Substituting $x=0$ we have $a+0=0$. By $\operatorname{S3}$ we have that $a+0=a$. Therefore $a=0$.
                Suppose that $a$ satisfies $\forall x,ax=x$, we want to ontain $a=1$. Substituting $x=1$ we have that $a\cdot 1=1$. By $\operatorname{P3}$ we have that $a\cdot 1=a$. Therefore $a=1$.
            2. Assume $a+x=0$. Then by $\operatorname{S4}$ we have that $a+x+(-x)=0+(-x)$ then $a+(x+(-x))=(-x)$ and then $a+0=-x$. Therefore $a=-x$.
                Assume $ax=1$ and $x\neq 0$. Then by $\operatorname{P4}$ we have that $(ax)x^{-1}=1x^{-1}$ then $a\left(xx^{-1}\right)=x^{-1}$ and then $a\cdot 1=x^{-1}$. Therefore $a=x^{-1}$.
            3. $0x=(0+0)x=0x+0x\implies 0x+(-0x)=0x+(0x+(-0x))\implies0=0x$.
            4. Suppose $ax=ay$ and $a\neq 0$. Then $a^{-1}(ax)=a^{-1}(ay)$ and then $\left(a^{-1}a\right)x=\left(a^{-1}a\right)y$ and thus $1\cdot x=1\cdot y$. Therefore $x=y$.

            5. **Rules for opposites and signs.**

                Since $(-x)+x=0$, the number $x$ is an opposite of $-x$. By uniqueness of the opposite, proved in part 2,
                $$
                -(-x)=x.
                $$

                Next, distributivity and part 3 give
                $$
                xy+(-x)y=(x+(-x))y=0y=0.
                $$
                Thus $(-x)y$ is the opposite of $xy$. By uniqueness again,
                $$
                (-x)y=-(xy).
                $$
                By commutativity, we also obtain
                $$
                x(-y)=(-y)x=-(yx)=-(xy).
                $$
                Applying these identities and the double-negative identity yields
                $$
                (-x)(-y)=-\bigl(x(-y)\bigr)=-\bigl(-(xy)\bigr)=xy.
                $$

                Finally, applying the same identity with first factor $1$ gives
                $$
                (-1)x=-(1x)=-x.
                $$

            6. **Associativity and omission of parentheses.**

                Repeatedly applying additive associativity, $\operatorname{S1}$, gives
                $$
                \begin{aligned}
                ((x_1+x_2)+x_3)+x_4
                  &=(x_1+x_2)+(x_3+x_4)\\
                  &=x_1+(x_2+(x_3+x_4))\\
                  &=x_1+((x_2+x_3)+x_4)\\
                  &=(x_1+(x_2+x_3))+x_4.
                \end{aligned}
                $$
                These are all five ways to fully parenthesize the sum of four terms in this fixed order. They have the same value, so the notation
                $$
                x_1+x_2+x_3+x_4
                $$
                is unambiguous. Each step only changes the grouping of the terms and uses associativity.
