---
title: "Naive Set Theory"
published: 2026-11-02
description: "Set notation, logical and set operations, and characteristic functions."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Notation 1**
  - $a\in A$ means that the element $a$ belongs to the set $A$.
  - $A\cup B$ denotes the union of $A$ and $B$.
  - $A\cap B$ denotes the intersection of $A$ and $B$.
  - $A\mathbin{\Delta}B$ denotes the symmetric difference of $A$ and $B$.
  - $A\subset B$ means that $A$ is a subset of $B$.
  - $A^\complement$ denotes the complement of $A$.

- **Example 1.1**
  The notation
  $$
  \mathbb Q_+=\left\{q\in\mathbb Q:q>0\right\}
  $$
  denotes the set of positive rational numbers.

  The notation
  $$
  \mathbb Z_{\geqslant0}
  $$
  denotes the set of nonnegative integers.

  The expression
  $$
  \sum_{a\in A}f(a)
  $$
  denotes the sum of the values of $f$ at all elements $a$ of the set $A$.

---

- **Definition 2**
  The logical operations are
  $$
  \lor\text{ for or},
  \qquad
  \land\text{ for and},
  \qquad
  \oplus\text{ for exclusive or},
  \qquad
  \neg\text{ for negation}.
  $$

---

- **Definition 3**
  The set operations are
  $$
  \cup\text{ for union},
  \qquad
  \cap\text{ for intersection},
  \qquad
  \Delta\text{ for symmetric difference},
  \qquad
  A^\complement\text{ for complement}.
  $$

  These set operations can be expressed using logical operations. For every element $x$,
  $$
  \begin{aligned}
  x\in A\cup B
    &\iff (x\in A)\lor(x\in B),\\
  x\in A\cap B
    &\iff (x\in A)\land(x\in B),\\
  x\in A\mathbin{\Delta}B
    &\iff (x\in A)\oplus(x\in B),\\
  x\in A^\complement
    &\iff \neg(x\in A).
  \end{aligned}
  $$

---

- **Definition 4**
  The characteristic function $\mathbb{1}_A$ is defined by
  $$
  \mathbb{1}_A(x)=
  \begin{cases}
  1,&x\in A,\\
  0,&x\notin A.
  \end{cases}
  $$

- **Example 4.1**
  $$
  \mathbb{1}_{\mathbb Z}(3)=1,
  \qquad
  \mathbb{1}_{\mathbb Z}(\pi)=0.
  $$
  Characteristic functions satisfy
  $$
  \mathbb{1}_{A\cup B}
  =\mathbb{1}_A+\mathbb{1}_B-\mathbb{1}_{A\cap B}
  =\max\left\{\mathbb{1}_A,\mathbb{1}_B\right\},
  $$
  $$
  \mathbb{1}_{A\cap B}=\mathbb{1}_A\mathbb{1}_B,
  $$
  $$
  \mathbb{1}_{A\mathbin{\Delta}B}
  =\mathbb{1}_A+\mathbb{1}_B-2\mathbb{1}_{A\cap B},
  $$
  and
  $$
  \mathbb{1}_{A^\complement}=\mathbb{1}-\mathbb{1}_A.
  $$

  Viewing the values $0$ and $1$ of characteristic functions as the logical values false and true, respectively, the same identities can be written pointwise as
  $$
  \begin{aligned}
  \mathbb{1}_{A\cup B}(x)
    &=\mathbb{1}_A(x)\lor\mathbb{1}_B(x),\\
  \mathbb{1}_{A\cap B}(x)
    &=\mathbb{1}_A(x)\land\mathbb{1}_B(x),\\
  \mathbb{1}_{A\mathbin{\Delta}B}(x)
    &=\mathbb{1}_A(x)\oplus\mathbb{1}_B(x),\\
  \mathbb{1}_{A^\complement}(x)
    &=\neg\left(\mathbb{1}_A(x)\right).
  \end{aligned}
  $$

---

- **Problem 5**
  Prove that, for any three sets $A,B,C$,
  $$
  (A\setminus B)\setminus C
  \subset
  A\setminus(B\setminus C).
  $$

  - **Proof 5.1**
    Let
    $$
    x\in(A\setminus B)\setminus C.
    $$
    Then $x\in A\setminus B$ and $x\notin C$. Hence
    $$
    x\in A,
    \qquad
    x\notin B,
    \qquad
    x\notin C.
    $$
    Since $x\notin B$, we have $x\notin B\setminus C$. Therefore,
    $$
    x\in A\setminus(B\setminus C).
    $$
    Since $x$ was arbitrary,
    $$
    (A\setminus B)\setminus C
    \subset
    A\setminus(B\setminus C).
    $$

---

- **Problem 6 (Intervals on the real line)**
  What is the intersection of the two intervals $(a,b)$ and $(c,d)$? What is their union? When is the union an interval?

  - **Solution 6.1**
    Assume that $a<b$ and $c<d$. An element $x$ belongs to the intersection if and only if
    $$
    a<x<b
    \qquad\text{and}\qquad
    c<x<d.
    $$
    Equivalently,
    $$
    \max\{a,c\}<x<\min\{b,d\}.
    $$
    Therefore,
    $$
    (a,b)\cap(c,d)
    =
    \begin{cases}
    \bigl(\max\{a,c\},\min\{b,d\}\bigr),
      &\max\{a,c\}<\min\{b,d\},\\
    \varnothing,
      &\max\{a,c\}\geqslant\min\{b,d\}.
    \end{cases}
    $$

    The union is a single interval exactly when the two intervals have a nonempty intersection, that is, when
    $$
    \max\{a,c\}<\min\{b,d\}.
    $$
    In this case,
    $$
    \boxed{
    (a,b)\cup(c,d)
    =\bigl(\min\{a,c\},\max\{b,d\}\bigr).}
    $$

    To verify this, suppose without loss of generality that $a\leqslant c$. Since the intervals intersect, $c<b$. Thus every point between $a$ and $\max\{b,d\}$ lies in at least one of the two intervals, which proves the displayed equality.

    If the intervals do not intersect, suppose without loss of generality that $b\leqslant c$. Choose
    $$
    x\in(a,b)
    \qquad\text{and}\qquad
    y\in(c,d).
    $$
    Then $x<y$, but the point
    $$
    z=\frac{b+c}{2}
    $$
    satisfies $x<z<y$ and does not belong to $(a,b)\cup(c,d)$. Hence the union cannot be an interval.
