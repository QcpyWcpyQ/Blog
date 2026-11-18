---
title: "Week 6"
published: 2026-11-18
description: "Implication, DNF and CNF, and the set-theoretic analogue"
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Implication, DNF/CNF, and the Set-Theoretic Analogue

- **Exercise 1 — Two Variables**
  Show that the truth table for $A\Rightarrow B$ coincides with
  $$
  (\neg A\land\neg B)\lor(A\land B)\lor(\neg A\land B)
  $$
  and also with $\neg A\lor B$.

  - **Solution 1.1**
    The three expressions have the same truth value in every row.

    | $A$ | $B$ | $A\Rightarrow B$ | $(\neg A\land\neg B)\lor(A\land B)\lor(\neg A\land B)$ | $\neg A\lor B$ |
    |:---:|:---:|:---:|:---:|:---:|
    | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ |
    | $\mathrm T$ | $\mathrm F$ | $\mathrm F$ | $\mathrm F$ | $\mathrm F$ |
    | $\mathrm F$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ |
    | $\mathrm F$ | $\mathrm F$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ |

    Therefore,
    $$
    A\Rightarrow B
    \equiv
    (\neg A\land\neg B)\lor(A\land B)\lor(\neg A\land B)
    \equiv
    \neg A\lor B.
    $$

---

- **Exercise 2 — Three Variables: Two Representations**
  Consider the Boolean function
  $$
  F(A,B,C):=(A\Rightarrow B)\land(B\Rightarrow C).
  $$

  1. Compute its truth table.
  2. Show that $F$ has the conjunctive normal form
     $$
     F\equiv(\neg A\lor B)\land(\neg B\lor C).
     $$
  3. Show that $F$ has the disjunctive normal form
     $$
     F\equiv(\neg A\land\neg B)\lor(\neg A\land C)\lor(B\land C).
     $$
  4. Conclude that the formulas in parts 2 and 3 are logically equivalent by comparing their truth tables with the table from part 1.

  - **Solution 2.1**
    The truth table is

    | $A$ | $B$ | $C$ | $A\Rightarrow B$ | $B\Rightarrow C$ | $F(A,B,C)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ |
    | $\mathrm T$ | $\mathrm T$ | $\mathrm F$ | $\mathrm T$ | $\mathrm F$ | $\mathrm F$ |
    | $\mathrm T$ | $\mathrm F$ | $\mathrm T$ | $\mathrm F$ | $\mathrm T$ | $\mathrm F$ |
    | $\mathrm T$ | $\mathrm F$ | $\mathrm F$ | $\mathrm F$ | $\mathrm T$ | $\mathrm F$ |
    | $\mathrm F$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ |
    | $\mathrm F$ | $\mathrm T$ | $\mathrm F$ | $\mathrm T$ | $\mathrm F$ | $\mathrm F$ |
    | $\mathrm F$ | $\mathrm F$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ |
    | $\mathrm F$ | $\mathrm F$ | $\mathrm F$ | $\mathrm T$ | $\mathrm T$ | $\mathrm T$ |

  - **Solution 2.2**
    Using $P\Rightarrow Q\equiv\neg P\lor Q$, we obtain
    $$
    \begin{aligned}
    F(A,B,C)
    &=(A\Rightarrow B)\land(B\Rightarrow C)\\
    &\equiv(\neg A\lor B)\land(\neg B\lor C).
    \end{aligned}
    $$
    This is a conjunction of disjunctions, so it is a conjunctive normal form.

  - **Solution 2.3**
    By the distributive laws,
    $$
    \begin{aligned}
    F
    &\equiv(\neg A\lor B)\land(\neg B\lor C)\\
    &\equiv(\neg A\land\neg B)
      \lor(\neg A\land C)
      \lor(B\land\neg B)
      \lor(B\land C)\\
    &\equiv(\neg A\land\neg B)
      \lor(\neg A\land C)
      \lor(B\land C).
    \end{aligned}
    $$
    This is a disjunction of conjunctions, so it is a disjunctive normal form.

  - **Solution 2.4**
    Evaluating either normal form in the eight rows produces
    $$
    \mathrm T,\mathrm F,\mathrm F,\mathrm F,
    \mathrm T,\mathrm F,\mathrm T,\mathrm T,
    $$
    which is exactly the final column of the table in Solution 2.1. Hence the CNF and DNF are logically equivalent.

---

- **Exercise 3 — Sets: The Same Two Representations**
  Let $X,Y,Z$ be subsets of a fixed universe $U$, and write $X^{\mathsf c}=U\setminus X$. Translate the Boolean equivalence from Exercise 2 into the set identity
  $$
  (X^{\mathsf c}\cup Y)\cap(Y^{\mathsf c}\cup Z)
  =
  (X^{\mathsf c}\cap Y^{\mathsf c})
  \cup(X^{\mathsf c}\cap Z)
  \cup(Y\cap Z).
  $$
  Prove this equality either by element chasing with membership tables or by the distributive laws for $\cup$ and $\cap$.

  - **Solution 3.1**
    By the distributive laws,
    $$
    \begin{aligned}
    (X^{\mathsf c}\cup Y)\cap(Y^{\mathsf c}\cup Z)
    &=[(X^{\mathsf c}\cup Y)\cap Y^{\mathsf c}]
      \cup[(X^{\mathsf c}\cup Y)\cap Z]\\
    &=(X^{\mathsf c}\cap Y^{\mathsf c})
      \cup(Y\cap Y^{\mathsf c})
      \cup(X^{\mathsf c}\cap Z)
      \cup(Y\cap Z)\\
    &=(X^{\mathsf c}\cap Y^{\mathsf c})
      \cup\varnothing
      \cup(X^{\mathsf c}\cap Z)
      \cup(Y\cap Z)\\
    &=(X^{\mathsf c}\cap Y^{\mathsf c})
      \cup(X^{\mathsf c}\cap Z)
      \cup(Y\cap Z).
    \end{aligned}
    $$

