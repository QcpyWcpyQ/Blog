---
title: "Mathematical Logic"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Mathematical Logic

In this chapter, we cover some of the foundational logical concepts that underlie mathematical reasoning.

### Mathematical statements

A mathematical statement is the most basic unit of meaning in mathematical reasoning every definition, theorem, and proof relies on mathematical statements.
	Mathematical statements are built from atomic statements, called basic propositions, which express elementary claims such as
$$
"x>0"\qquad"\text{3 is a prime number}"\qquad "f(x)=0".
$$
More complex statements are formed by combining basic propositions using a small collection of logical connectives—such as conjunctions, disjunctions, implications, equivalences (if and only ifs), and negations—as well as quantifiers such as "for all" and "there exists".

-----

- **Definition 1**
  A proposition is the simplest kind of mathematical statement and expresses a single, indivisible claim which can be understood on its own.

  - **Example 1.1**
    $$
    "\text{7 is a prime number}"\qquad"2x+3y>0"\qquad "f(x)=7".
    $$
    As we will see, the first logical connective that lets us combine basic propositions into more complex mathematical statements is called a conjunction. In everyday language, a conjunction corresponds to the word "and".

  - **Example 1.2**
    From the propositions "$0<i$" and "$i<n$", we can form the more complex mathematical statement "$0<i\  \text{and}\ i<n$", commonly rephrased as "$0<i<n$". 

Precisely, while the first proposition asserts that $i$ is greater than $0$ and the second proposition asserts that $n$ is greater than $i$, the conjunction tells us that the value of $i$ is in the open interval $(0,n)$.

- **Remark 1**
  Once we know how to combine two basic propositions using a conjunction, we can extend this idea to build even richer expressions. 
  - **Example 1.3**
    Consider the propositions "$0<i, i<n$" and "$i\text{ is even}$". We can form the first conjunction "$0<i<n$" and then combine this new statement with "$i\text{ is even}$" to obtain "$0<i<n$ and $i\text{ is even}$". This final conjunction tells us that $i$ is an even number in the open interval $(0,n)$.

-----

- **Definition 2**
  Suppose that $P$ and $Q$ represent formed mathematical statements. A conjunction is a new mathematical statement of the form $P \land Q$, where $\land$ is the symbol we use for the word "$\text{and}$". For example

  - **Example 2.1**
    Using the formal language, consider again the propositions "$0<i,i<n$" and "$i\text{ is even}$", then we can use the conjunction to obtain
    $$
    \left(0<i<n\right) \land \left(i\text{ is even}\right).
    $$

------

The second logical connective that allows us to combine mathematical statements is called disjunction. In everyday language, the disjunction corresponds to the word "$\text{or}$".

- **Definition 3**
  Suppose that $P$ and $Q$ represent formed mathematical statements. A disjunction is a new mathematical statement of the form $P \lor Q$, where $\lor$ is the symbol we use for the word "$\text{or}$". 

  - **Example 3.1**
    Consider the basic propositions "$0=i$" and "$0<i$" that we can form the disjunction $(0=i)\lor(0<i)$ commonly expressed as $0\leqslant i$.

  - **Example 3.2**
    Consider the propositions "$\sqrt 2^{\sqrt2}\text{ is irrational}$" and "$\sqrt2^{\sqrt2^{\sqrt2}}\text{ is irrational}$" then we can form the disjunction

  $$
  \left(\sqrt 2^{\sqrt2}\text{ is irrational}\right)\lor\left(\sqrt2^{\sqrt2^{\sqrt2}}\text{ is irrational}\right).
  $$

  - **Example 3.3**
    Consider the basic propositions "$0=i$" , "$0<i$" and "$i<n$" then we can form first the disjunction $(0=i)\lor(0<i)$, that is, $0\leqslant i$ and then we can form the conjunction $(0\leqslant i)\land(i<n)$, that is, $0\leqslant i<n$.

-----

The third logical connective that allows us to combine and form new mathematical statements is called implication. In everyday language, an implication corresponds to the word "$\text{implies}$".

- **Definition 4**
  Suppose that $P$ and $Q$ represent formed mathematical statements. An implication is a new mathematical statement of the form $P\implies Q$, where $\implies$ is the symbol we use for the word "$\text{implies}$".
  The statement $P$ is called antecedent and the statement $Q$ is called consequent.
  
  - **Example 4.1**
    Consider the propositions "$n\text{ is even}$" and "$n+1\text{ is odd}$" then we can form the new statement "$n\text{ is even implies } n+1\text{ is odd}$", the antecedent is the proposition "$n\text{ is even}$" and the consequent is the proposition "$n+1\text{ is odd}$".
    $$
    (n\text{ is even})\implies(n+1\text{ is odd}).
    $$
  
  - **Example 4.2**
  
    Consider the propositions "$f\text{ is differentiable}$" and "$f\text{ is continuous}$", we can form the new proposition "$f\text{ is differentiable implies }f\text{ is continuous}$". The antecedent is the proposition "$f\text{ is differentiable}$" and the consequent is "$f\text{ is continuous}$". Using the formal language
    $$
    f\text{ is differentiable}\implies f\text{ is continuous}.
    $$
  
- **Remark 4**
  Implications are often expressed in several equivalent ways.

  - **Example 4.3**
    $$
    f\text{ is differentiable implies }f\text{ is continuous}.
    $$
    can be written as
    $$
    \text{if }f\text{ is differentiable, then }f\text{ is continuous}.\\ f\text{ is continuous if }f\text{ is differentiable}.\\ f\text{ is continuous whenever }f\text{ is differentiable}.
    $$

These different formulations don't change the logical structure, that is, it is always clear which is the antecedent and which is the consequent.

-----

The fourth logical connective that allows us to combine and form new mathematical statements is the equivalence.

- **Definition 5**
  Suppose that $P$ and $Q$ represent formed mathematical statements. We combine the logical connectives "$\implies$" and "$\land$" as
  $$
  (P\implies Q)\land(Q\implies P).
  $$
  to obtain a new mathematical statement called equivalence of the form $P\iff Q$, where $\iff$ is the symbol we use for the phrase "$\text{if and only if}$". 

  - **Example 5.1**
    Consider the propositions "$\left\lvert x\right\rvert\leqslant 3$" and "$-3\leqslant x\leqslant 3$" then we can form the new mathematical statement "$\left\lvert x\right\rvert\leqslant 3\text{ if and only if }-3\leqslant x\leqslant 3$" and using the formal language
    $$
    \left\lvert x\right\rvert\leqslant 3\iff -3\leqslant x\leqslant 3.
    $$

-----

To complete the set of basic logical connectives, we introduce negations. In everyday language a negation corresponds to the word "$\text{not}$".

- **Definition 6**
  Suppose that $P$ represents a formed mathematical statement. The negation of $P$ is the new mathematical statement of the form $\neg P$, where $\neg$ is the symbol we use for the word "$\text{not}$". 
  - **Example 6.1**
    Consider the proposition "$0=i$", then we can form the negation $\neg(0=i)$, commonly written $0\neq i$.

We will introduce two logical constants verum (truth) and falsum (falsehood), these constants represent statements that are universally true, such as $0=0$ and statements that are inherently contradictory such as $0=1$.

------

- **Definition 7**
  The symbol $\top$, called verum, stands for an arbitrary universal mathematical truth. The symbol $\bot$, called falsum, stands for an arbitrary universal mathematical falsehood.
  The logical language developed so far does not allow us to speak about objects or collections of objects. 
  - **Example 7.1** 
    "$\text{all squares are positive}$" or "$\text{there exists a function that is differentiable and not continuous}$".

-----

Our language must be extended and this extension is achieved by introducing two logical operators, the quantifiers $\forall$ and $\exists$ , "$\text{for all}$" and "$\text{there exists}$".

- **Definition 8**
  Suppose that $P(x)$ is a formed mathematical statement about some variable $x$.
  The universal quantification of $P(x)$ is a new mathematical statement of the form $\forall xP(x)$, where $\forall$ is the symbol we use for "$\text{for all}$".
  The existential quantification of $P(x)$ is a new mathematical statement of the form $\exists xP(x)$, where $\exists$ is the symbol we use for "$\text{there exists}$". 

  - **Example 8.1**
    The statement "$\text{there exists a function }f\text{ that is differentiable and not continuous}$" can be written using the formal language
    $$
    \exists f\left(\left(f\text{ is differentiable}\right)\land \neg \left(f\text{ is continuous}\right)\right).
    $$

  - **Example 8.2**
    The statement "$\text{for all functions }f,\text{if } f\text{ is differentiable then }f\text{ is continuous}$" can be written as
    $$
    \forall f\left(\left(\text{if }f\text{ is differentiable}\right)\implies \left(f\text{ is continuous}\right)\right).
    $$
