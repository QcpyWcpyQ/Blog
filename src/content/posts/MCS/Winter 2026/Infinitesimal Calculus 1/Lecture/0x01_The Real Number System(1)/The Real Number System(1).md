---
title: "The Real Number System(1)"
published: 2026-10-13
description: "Field and order axioms of the real numbers, complete proofs of their basic consequences, number sets, intervals, and absolute value."
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

## Axioms for the real numbers

- **Axioms 2 (The real number system)**  
  The real numbers are described by three groups of axioms:

  1. **Field axioms:** the rules for addition and multiplication.
  2. **Order axioms:** the rules for comparing numbers, compatible with the field operations.
  3. **Completeness axiom:** every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound in $\mathbb{R}$. Here an upper bound is a number at least as large as every element of the set; the least upper bound is the smallest such number. Bounds and completeness are developed further in the tutorial.

  The algebraic and order properties below are derived from the first two groups of axioms.

### Field axioms

Addition and multiplication are binary operations on $\mathbb{R}$. In particular, they are **closed**: if $x,y\in\mathbb{R}$, then $x+y\in\mathbb{R}$ and $xy\in\mathbb{R}$.

The labels below make the references in the proofs precise. All variables are real numbers unless stated otherwise.

**Axioms for addition**

| Label | Axiom | Statement |
| --- | --- | --- |
| S1 | Associativity | $(x+y)+z=x+(y+z)$ |
| S2 | Commutativity | $x+y=y+x$ |
| S3 | Additive identity | There exists $0$ such that $x+0=0+x=x$ for every $x$ |
| S4 | Additive inverse | For every $x$, there exists an opposite $-x$ such that $x+(-x)=(-x)+x=0$ |

**Axioms for multiplication**

| Label | Axiom | Statement |
| --- | --- | --- |
| P1 | Associativity | $(xy)z=x(yz)$ |
| P2 | Commutativity | $xy=yx$ |
| P3 | Multiplicative identity | There exists $1\neq0$ such that $1x=x1=x$ for every $x$ |
| P4 | Multiplicative inverse | For every $x\neq0$, there exists $x^{-1}$ such that $xx^{-1}=x^{-1}x=1$ |

**D: Distributivity.** For every $x,y,z\in\mathbb{R}$,
$$
x(y+z)=xy+xz.
$$
Multiplicative commutativity also gives the distributive law on the other side:
$$
(x+y)z=z(x+y)=zx+zy=xz+yz.
$$
The axioms assert the existence of identities and inverses; the next properties establish their uniqueness.

### Consequences of the field axioms

- **Properties 2.1**

  1. **Unique identities.** The additive identity $0$ and multiplicative identity $1$ are unique.
  2. **Unique inverses.** The opposite of each $x$ is unique, and the multiplicative inverse of each $x\neq0$ is unique.
  3. **Multiplication by zero.** For every $x$,
     $$
     0x=x0=0.
     $$
  4. **Cancellation.** We have
     $$
     a+x=a+y\quad\Longrightarrow\quad x=y,
     $$
     and, if $a\neq0$,
     $$
     ax=ay\quad\Longrightarrow\quad x=y.
     $$
  5. **Opposites and signs.** For all $x,y$,
     $$
     \begin{gathered}
     -(-x)=x,\qquad(-x)y=x(-y)=-(xy),\\
     (-x)(-y)=xy,\qquad(-1)x=-x.
     \end{gathered}
     $$
  6. **Associativity permits omission of parentheses.** All five full parenthesizations of four summands in a fixed order have the same value, denoted by $x_1+x_2+x_3+x_4$.

  - **Proof 2.1.1**

    **1. Uniqueness of the identities.** Suppose $a+x=x$ for every $x$. Taking $x=0$ gives $a+0=0$. But S3 gives $a+0=a$, so $a=0$.

    Similarly, if $ax=x$ for every $x$, then taking $x=1$ gives $a1=1$. By P3, $a1=a$, and hence $a=1$.

    **2. Uniqueness of the inverses.** If $x+a=0$, commutativity and associativity give
    $$
    \begin{aligned}
    a&=a+0=a+(x+(-x))\\
     &=(a+x)+(-x)=0+(-x)=-x.
    \end{aligned}
    $$
    If $x\neq0$ and $xa=1$, then
    $$
    \begin{aligned}
    a&=a1=a(xx^{-1})\\
     &=(ax)x^{-1}=1x^{-1}=x^{-1}.
    \end{aligned}
    $$
    Thus the notation for each inverse is unambiguous.

    **3. Multiplication by zero.** Distributivity gives
    $$
    0x=(0+0)x=0x+0x.
    $$
    Add the opposite of $0x$ to both sides and use associativity:
    $$
    0=0x+(-(0x))=(0x+0x)+(-(0x))=0x.
    $$
    Commutativity gives $x0=0x=0$ as well.

    **4. Cancellation.** If $a+x=a+y$, adding $-a$ yields
    $$
    x=(-a)+(a+x)=(-a)+(a+y)=y.
    $$
    If $ax=ay$ and $a\neq0$, multiply both sides by $a^{-1}$:
    $$
    x=(a^{-1}a)x=a^{-1}(ax)=a^{-1}(ay)=(a^{-1}a)y=y.
    $$
    The condition $a\neq0$ is necessary for multiplicative cancellation: $0x=0y$ holds for any $x,y$, even if $x\neq y$.

    **5. Opposites and signs.** Since $(-x)+x=0$, uniqueness of the opposite gives
    $$
    -(-x)=x.
    $$
    Next, distributivity and part 3 give
    $$
    xy+(-x)y=(x+(-x))y=0y=0.
    $$
    Therefore $(-x)y$ is the opposite of $xy$, and hence $(-x)y=-(xy)$. By commutativity,
    $$
    x(-y)=(-y)x=-(yx)=-(xy).
    $$
    These identities imply
    $$
    (-x)(-y)=-\bigl(x(-y)\bigr)=-\bigl(-(xy)\bigr)=xy.
    $$
    Finally, taking the first factor to be $1$ gives
    $$
    (-1)x=-(1x)=-x.
    $$

    **6. Omission of parentheses.** Repeated applications of S1 give
    $$
    \begin{aligned}
    ((x_1+x_2)+x_3)+x_4
      &=(x_1+x_2)+(x_3+x_4)\\
      &=x_1+(x_2+(x_3+x_4))\\
      &=x_1+((x_2+x_3)+x_4)\\
      &=(x_1+(x_2+x_3))+x_4.
    \end{aligned}
    $$
    These are all five full parenthesizations in the same order. Thus $x_1+x_2+x_3+x_4$ has an unambiguous value. Changing the grouping uses associativity; changing the order of the terms uses commutativity.

---

- **Definition 3 (Groups, rings, and fields)**  
  The same types of axioms describe more general algebraic structures on a nonempty set, with the indicated operations closed on that set:

  | Structure | Required properties |
  | --- | --- |
  | Group under $+$ | S1, S3, S4 |
  | Commutative (abelian) group under $+$ | S1, S2, S3, S4 |
  | Ring | S1–S4, P1, and both distributive laws |
  | Commutative ring | The ring axioms together with P2 |
  | Field | S1–S4, P1–P4, and D, with $1\neq0$ and P4 applying to nonzero elements |

  In a general ring, multiplication need not be commutative, so **both** distributive laws must be required:
  $$
  x(y+z)=xy+xz,\qquad(x+y)z=xz+yz.
  $$
  In a field, either one implies the other by P2, as shown above.

  The ring convention in these notes does not require a multiplicative identity; some texts include one in the definition of a ring. For a field, the nonzero elements form a commutative group under multiplication. Indeed, if $x,y\neq0$ but $xy=0$, multiplying by $x^{-1}$ would give $y=0$, a contradiction; hence nonzero elements are closed under multiplication. Also $x^{-1}\neq0$, since $xx^{-1}=1\neq0$. The remaining group properties follow from P1–P4.

## Order on the real numbers

- **Order axioms 4**  
  The relation $\leqslant$ on $\mathbb{R}$ satisfies:

  1. **Reflexivity:** $a\leqslant a$.
  2. **Transitivity:** if $a\leqslant b$ and $b\leqslant c$, then $a\leqslant c$.
  3. **Antisymmetry:** if $a\leqslant b$ and $b\leqslant a$, then $a=b$.
  4. **Trichotomy:** exactly one of $a<b$, $a=b$, and $a>b$ holds.
  5. **Compatibility with the field operations:**
     $$
     a\leqslant b\quad\Longrightarrow\quad a+c\leqslant b+c
     \qquad\text{for every }c\in\mathbb{R},
     $$
     and
     $$
     a\leqslant b,\ c>0\quad\Longrightarrow\quad ac\leqslant bc.
     $$

  Here $a<b$ means $a\leqslant b$ and $a\neq b$. The notation $a\geqslant b$ means $b\leqslant a$, and $a>b$ means $b<a$.

  A number is **positive** if it is greater than $0$ and **negative** if it is less than $0$. By trichotomy, every real number is positive, zero, or negative, with exactly one of these possibilities holding.

  We use $b-a$ as an abbreviation for $b+(-a)$; see Definition 6.

### Basic order properties and complete proofs

- **Basic properties 4.1**

  1. **Translation preserves all comparisons.** For every real $c$,
     $$
     \begin{aligned}
     a\leqslant b&\iff a+c\leqslant b+c,\\
     a<b&\iff a+c<b+c,\\
     a\geqslant b&\iff a+c\geqslant b+c,\\
     a>b&\iff a+c>b+c.
     \end{aligned}
     $$
  2. **Comparison with a difference.**
     $$
     \begin{aligned}
     a\leqslant b&\iff0\leqslant b-a, & a<b&\iff0<b-a,\\
     a\geqslant b&\iff0\geqslant b-a, & a>b&\iff0>b-a.
     \end{aligned}
     $$
  3. **Multiplication by a positive number preserves strict order.** If $c>0$, then
     $$
     a<b\Longrightarrow ac<bc,\qquad
     a>b\Longrightarrow ac>bc.
     $$
  4. **Adding inequalities.** If $a\leqslant b$ and $c\leqslant d$, then
     $$
     a+c\leqslant b+d.
     $$
     If at least one of the two assumed inequalities is strict, then $a+c<b+d$.
  5. **Negation reverses order.**
     $$
     a\leqslant b\iff-a\geqslant-b,\qquad
     a<b\iff-a>-b.
     $$
     Interchanging $a$ and $b$ gives the versions for $\geqslant$ and $>$.
  6. **Multiplication by a negative number reverses order.** If $c<0$, then
     $$
     a\leqslant b\Longrightarrow ac\geqslant bc,\qquad
     a<b\Longrightarrow ac>bc.
     $$
     Interchanging $a$ and $b$ gives the versions for $\geqslant$ and $>$.
  7. **Squares.** For every real $a$,
     $$
     a^2\geqslant0,\qquad a^2=0\iff a=0.
     $$
  8. **The sign of $1$.** We have $1>0$ and $-1<0$. Consequently, no real number satisfies $x^2=-1$.
  9. **The sign of a reciprocal.** For $a\neq0$,
     $$
     a>0\iff a^{-1}>0,\qquad
     a<0\iff a^{-1}<0.
     $$
  10. **Reciprocals reverse order on positive numbers.**
      $$
      0<a<b\quad\Longrightarrow\quad0<b^{-1}<a^{-1}.
      $$
  11. **Adding one increases a number.** For every real $a$,
      $$
      a<a+1.
      $$

  - **Proof 4.1.1**

    **1. Translation.** The forward implication for $\leqslant$ is an order axiom. If $a+c\leqslant b+c$, adding $-c$ gives $a\leqslant b$, proving the converse.

    If $a<b$, the axiom gives $a+c\leqslant b+c$. Equality would imply $a=b$ by additive cancellation, contradicting $a<b$. Hence $a+c<b+c$. Adding $-c$ proves the converse for strict inequalities as well. Interchanging $a$ and $b$ proves the statements for $\geqslant$ and $>$.

    **2. Differences.** Apply part 1 with $c=-a$:
    $$
    a\leqslant b\iff a+(-a)\leqslant b+(-a)\iff0\leqslant b-a.
    $$
    The same argument with $<$, $\geqslant$, or $>$ gives the other three equivalences. Every implication is reversible because adding $a$ restores the original comparison.

    **3. Multiplication by a positive number.** Suppose $a<b$ and $c>0$. Compatibility gives $ac\leqslant bc$. If $ac=bc$, then $a=b$ by multiplicative cancellation, since $c\neq0$. This contradicts $a<b$, so $ac<bc$. Interchanging $a$ and $b$ proves the version for $>$.

    **4. Adding inequalities.** By translation and transitivity,
    $$
    a+c\leqslant b+c=c+b\leqslant d+b=b+d.
    $$
    If $a<b$, the first comparison is strict; if $c<d$, the second comparison is strict. In either case, the final comparison is strict.

    To justify this last step directly, if $u<v\leqslant w$, transitivity gives $u\leqslant w$. Equality $u=w$ would give $v\leqslant u$, contradicting $u<v$ by antisymmetry. Thus $u<w$. If $u\leqslant v<w$, equality $u=w$ would imply $w\leqslant v$, contradicting $v<w$. Thus $u<w$ in this case too.

    **5. Negation.** Add $(-a)+(-b)$ to both sides and simplify:
    $$
    a\leqslant b\iff-b\leqslant-a\iff-a\geqslant-b.
    $$
    Translation preserves strict comparisons too, so
    $$
    a<b\iff-b<-a\iff-a>-b.
    $$
    In particular, $c<0$ implies $-c>0$.

    **6. Multiplication by a negative number.** If $c<0$, then $-c>0$. For $a\leqslant b$, the positive-multiplier axiom gives
    $$
    a(-c)\leqslant b(-c).
    $$
    Using the sign rules from Properties 2.1 and then part 5,
    $$
    -(ac)\leqslant-(bc)\quad\Longrightarrow\quad ac\geqslant bc.
    $$
    If $a<b$, part 3 gives $a(-c)<b(-c)$, and part 5 then gives $ac>bc$.

    **7. Squares.** By trichotomy there are three cases:

    - If $a>0$, multiply $0<a$ by $a>0$. Part 3 gives $0<a^2$.
    - If $a=0$, then $a^2=0$ by multiplication by zero.
    - If $a<0$, then $-a>0$, so the first case gives $(-a)^2>0$. The field sign rules give $(-a)^2=a^2$, hence $a^2>0$.

    Thus every square is nonnegative, and a square is zero exactly when its base is zero.

    **8. The sign of $1$.** Part 7 gives
    $$
    1=1\cdot1=1^2\geqslant0.
    $$
    Since the field axioms require $1\neq0$, it follows that $1>0$. Negation reverses order, so $-1<0$.

    If a real $x$ satisfied $x^2=-1$, its square would be both nonnegative by part 7 and negative because $-1<0$, a contradiction.

    **9. The sign of a reciprocal.** Let $a\neq0$ and write $b=a^{-1}$. Then $ab=1$, so $b\neq0$: otherwise $ab=a0=0\neq1$.

    If $a>0$ but $b<0$, multiplying $b<0$ by $a>0$ gives $ab<0$. This contradicts $ab=1>0$. Trichotomy and $b\neq0$ therefore give $b>0$.

    If $a<0$ but $b>0$, multiplying $a<0$ by $b>0$ again gives $ab<0$, a contradiction. Hence $b<0$.

    Finally, $ba=1$, so $a$ is the inverse of $b$. Applying the same implications with $b$ in place of $a$ gives the converses. Therefore $a$ and $a^{-1}$ have the same sign.

    **10. Order of positive reciprocals.** If $0<a<b$, part 9 gives $a^{-1}>0$ and $b^{-1}>0$. Their product is positive by part 3. Multiplying $a<b$ by this positive product yields
    $$
    a(a^{-1}b^{-1})<b(a^{-1}b^{-1}).
    $$
    Associativity, commutativity, and the inverse identities simplify this to
    $$
    b^{-1}<a^{-1}.
    $$
    Together with $b^{-1}>0$, this proves $0<b^{-1}<a^{-1}$.

    **11. Adding one.** Since $0<1$ by part 8, adding $a$ gives
    $$
    a=a+0<a+1.
    $$

## Natural numbers, arithmetic notation, and intervals

- **Definition 5 (Natural numbers and integers)**  
  Starting from $1$, define the successive positive integers by
  $$
  2:=1+1,\qquad3:=2+1,\qquad4:=3+1,\quad\ldots.
  $$
  By Basic properties 4.1(11), adding $1$ increases a number. Thus
  $$
  0<1<2<3<\cdots.
  $$
  For example, $2>1>0$, and reversing these inequalities by negation gives
  $$
  2>1>0>-1>-2.
  $$

  In these notes, use the convention
  $$
  \mathbb{N}=\{1,2,3,\ldots\},\qquad
  -\mathbb{N}=\{-n:n\in\mathbb{N}\},
  $$
  and define
  $$
  \mathbb{Z}=(-\mathbb{N})\cup\{0\}\cup\mathbb{N}.
  $$
  When zero is included, write $\mathbb{Z}_{\geqslant0}=\{0,1,2,\ldots\}$ explicitly.

---

- **Definition 6 (Subtraction and division)**

  1. For $a,b\in\mathbb{R}$, define
     $$
     a-b:=a+(-b).
     $$
  2. For $a,b\in\mathbb{R}$ with $b\neq0$, define
     $$
     \frac{a}{b}:=ab^{-1}.
     $$

  Division is defined here only for a nonzero denominator. Zero has no multiplicative inverse, since $0x=0\neq1$ for every real $x$.

---

- **Definition 7 (Intervals)**

  | Interval | Definition | Endpoints included |
  | --- | --- | --- |
  | $(a,b)$, for $a<b$ | $\{x\in\mathbb{R}:a<x<b\}$ | Neither |
  | $[a,b]$, for $a\leqslant b$ | $\{x\in\mathbb{R}:a\leqslant x\leqslant b\}$ | Both |
  | $[a,b)$, for $a<b$ | $\{x\in\mathbb{R}:a\leqslant x<b\}$ | Only $a$ |
  | $(a,b]$, for $a<b$ | $\{x\in\mathbb{R}:a<x\leqslant b\}$ | Only $b$ |

  The interval $(a,b)$ is **open**, and $[a,b]$ is **closed**. The other two are **half-open** intervals. In the degenerate closed case,
  $$
  [a,a]=\{a\},
  $$
  because $a\leqslant x\leqslant a$ implies $x=a$ by antisymmetry, and $a$ satisfies these inequalities by reflexivity.

  The unbounded intervals are defined as follows. The symbols $\infty$ and $-\infty$ are not real numbers, so an infinite endpoint is never included.

  | Interval | Definition | Finite endpoint included |
  | --- | --- | --- |
  | $(a,\infty)$ | $\{x\in\mathbb{R}:x>a\}$ | No |
  | $[a,\infty)$ | $\{x\in\mathbb{R}:x\geqslant a\}$ | Yes |
  | $(-\infty,a)$ | $\{x\in\mathbb{R}:x<a\}$ | No |
  | $(-\infty,a]$ | $\{x\in\mathbb{R}:x\leqslant a\}$ | Yes |

---

- **Definition 8 (Rational numbers)**  
  The rational numbers are the real numbers expressible as a ratio of two integers with nonzero denominator:
  $$
  \mathbb{Q}:=\left\{\frac{a}{b}:a,b\in\mathbb{Z},\ b\neq0\right\}\subseteq\mathbb{R}.
  $$

## Absolute value

- **Definition 9 (Absolute value)**  
  For $x\in\mathbb{R}$, define
  $$
  |x|:=\begin{cases}
  x,&x\geqslant0,\\
  -x,&x<0.
  \end{cases}
  $$

  - **Properties 9.1**

    1. **Nonnegativity and the zero case:** $|x|\geqslant0$, and $|x|=0$ if and only if $x=0$.
    2. **Symmetry under negation:** $|-x|=|x|$.
    3. **Multiplicativity:** $|ab|=|a|\,|b|$ for all real $a,b$.
    4. **Comparison with a positive number:** if $a>0$, then
       $$
       |x|\leqslant a\iff -a\leqslant x\leqslant a.
       $$

  - **Proof 9.1.1**

    **1. Nonnegativity and the zero case.** If $x>0$, then $|x|=x>0$. If $x=0$, then $|x|=0$. If $x<0$, then $-x>0$ and $|x|=-x>0$. These three cases show both that $|x|\geqslant0$ always and that equality holds exactly for $x=0$.

    **2. Symmetry.** Again consider the sign of $x$:

    - If $x>0$, then $-x<0$, so $|-x|=-(-x)=x=|x|$.
    - If $x=0$, then $-x=0$, and both absolute values are zero.
    - If $x<0$, then $-x>0$, so $|-x|=-x=|x|$.

    Thus $|-x|=|x|$ for every real $x$.

    **3. Multiplicativity.** The sign rules for multiplication follow from Basic properties 4.1(3) and (6), with multiplication by zero handled by Properties 2.1(3). Apply them in each of the following four cases:

    | Signs of $a,b$ | Sign of $ab$ | Absolute value of the product | Product of the absolute values |
    | --- | --- | --- | --- |
    | $a\geqslant0$, $b\geqslant0$ | $ab\geqslant0$ | $\lvert ab\rvert=ab$ | $\lvert a\rvert\,\lvert b\rvert=ab$ |
    | $a<0$, $b\geqslant0$ | $ab\leqslant0$ | $\lvert ab\rvert=-ab$ | $\lvert a\rvert\,\lvert b\rvert=(-a)b=-ab$ |
    | $a\geqslant0$, $b<0$ | $ab\leqslant0$ | $\lvert ab\rvert=-ab$ | $\lvert a\rvert\,\lvert b\rvert=a(-b)=-ab$ |
    | $a<0$, $b<0$ | $ab>0$ | $\lvert ab\rvert=ab$ | $\lvert a\rvert\,\lvert b\rvert=(-a)(-b)=ab$ |

    In the two middle rows, if $ab=0$, the formula $|ab|=-ab=0$ still holds. The cases cover every pair of real numbers, so
    $$
    \boxed{|ab|=|a|\,|b|}.
    $$

    **4. Comparison with a positive number.** First observe from the definition that
    $$
    x\leqslant|x|\qquad\text{and}\qquad -x\leqslant|x|
    $$
    for every real $x$.

    Suppose $|x|\leqslant a$. Then
    $$
    x\leqslant|x|\leqslant a
    $$
    and
    $$
    -x\leqslant|x|\leqslant a.
    $$
    The second inequality is equivalent to $-a\leqslant x$. Hence
    $$
    -a\leqslant x\leqslant a.
    $$

    Conversely, suppose $-a\leqslant x\leqslant a$. If $x\geqslant0$, then $|x|=x\leqslant a$. If $x<0$, then $-a\leqslant x$, so negation reverses the inequality and gives $-x\leqslant a$; therefore $|x|=-x\leqslant a$. Thus $|x|\leqslant a$ in both cases.

  - **Corollary 9.1.2**
    If $a>0$, then
    $$
    \begin{aligned}
    |x-l|\leqslant a
      &\iff -a\leqslant x-l\leqslant a\\
      &\iff l-a\leqslant x\leqslant l+a.
    \end{aligned}
    $$
    The strict version is
    $$
    \begin{aligned}
    |x-l|<a
      &\iff -a<x-l<a\\
      &\iff l-a<x<l+a.
    \end{aligned}
    $$
    The first equivalence in the strict version follows directly from the definition by considering whether $x-l$ is nonnegative or negative; the second follows by adding $l$ throughout.

- **Proposition 9.2 (Triangle inequalities)**

  For all $x,y\in\mathbb{R}$,

  1. **Triangle inequality**
     $$
     |x+y|\leqslant|x|+|y|.
     $$
  2. **Reverse triangle inequality**
     $$
     \bigl||x|-|y|\bigr|\leqslant|x-y|.
     $$

  - **Proof 9.2.1**

    **1. Triangle inequality.** If $x+y\geqslant0$, then $|x+y|=x+y$. Since $x\leqslant|x|$ and $y\leqslant|y|$, adding these inequalities gives
    $$
    |x+y|=x+y\leqslant|x|+|y|.
    $$
    If $x+y<0$, then $|x+y|=-(x+y)$. Since $-x\leqslant|x|$ and $-y\leqslant|y|$, we obtain
    $$
    |x+y|=-x-y\leqslant|x|+|y|.
    $$
    Thus the triangle inequality holds in every case.

    **2. Reverse triangle inequality.** Apply the triangle inequality to $x=(x-y)+y$:
    $$
    |x|\leqslant|x-y|+|y|,
    $$
    and hence
    $$
    |x|-|y|\leqslant|x-y|.
    $$
    Interchanging $x$ and $y$ gives
    $$
    |y|-|x|\leqslant|y-x|=|x-y|.
    $$
    Equivalently,
    $$
    -|x-y|\leqslant|x|-|y|\leqslant|x-y|.
    $$
    By the definition of absolute value,
    $$
    \bigl||x|-|y|\bigr|\leqslant|x-y|.
    $$
