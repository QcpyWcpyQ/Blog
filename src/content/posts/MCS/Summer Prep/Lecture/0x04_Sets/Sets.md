---
title: "Sets"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Sets

- **Definition 1**  
  A **set** is a collection of objects, called **elements** of the set. If $x$ is an element in a set $A$ we denote it $x\in A$, and $x\not\in A$ otherwise.  

- **Example 1.1**  
  If we have $3$ pens in a pencil case $x_1,x_2,x_3$, then  
  $$
  B=\left\{x_1,x_2,x_3\right\}.
  $$
  And if we consider the blue pens in a pencil case  
  $$
  C=\left\{x\in B:x \text{ is blue}\right\}.
  $$
  For example, if $x_1$ and $x_3$ are blue pens we have that  
  $$
  C=\left\{x_1,x_3\right\}.
  $$

---

- **Definition 2**  
  Let $A$ be a set. We say that a set $B$ is a **subset** of $A$, denoted $B\subseteq A$, if all the elements in $B$ are also elements in $A$, that is, if $x\in B$ then $x\in A$ for all $x\in B$.  

---

- **Definition 3**  
  Let $A$ and $B$ be sets. We say that $A=B$, if $A\subseteq B$ and $B\subseteq A$.  

---

- **Definition 4**  
  If $B\subseteq A$ and $A\neq B$, we say that $B$ is a **proper subset** of $A$ and is denoted $B\subsetneq A$ (or $B\subset A$).  

- **Example 4.1**  
  Which of the following is a set?  
  $$
  \begin{aligned}  
  &(a)\left\{6,7,8,9,10\right\} \quad& (b)\ \left\{\left\{e,d,f\right\},g,h\right\} \\  
  &(c)\left\{e,d,f,g,h\right\} \quad& (d)\left\{6,7,\left\{8,9\right\},10\right\}  
  \end{aligned}  
  $$
  $a, b, c, d$ are sets.  

- **Example 4.2**  
  Note that  
  $$
  A=\left\{6,7,\left\{8,9\right\},10\right\}  
  $$
  Determine if the following expressions are valid.  
  $$
  \begin{aligned}  
  &6\in A\ \checkmark\quad\quad \left\{7,\left\{8,9\right\}\right\}\subseteq A\ \checkmark \\  
  &8\in A\ \times\quad\quad \left\{8,10\right\}\subseteq A\ \times \\  
  &8\in A\ \times\quad\quad \left\{\left\{8,9\right\},10\right\}\in A\ \times \\  
  &\left\{8,9\right\}\in A\ \checkmark  
  \end{aligned}
  $$

---

- **Definition 5**  
  The **empty set**, denoted $\varnothing$, is the set that has no elements.  

- **Remark 5**  
  Let $A$ be a set, then $\varnothing\subseteq A$ and $A\subseteq A$.  

---

- **Definition 6**  
  Let $A$ and $B$ be two sets.   
  The **union** of $A$ and $B$, denoted $A\cup B$, is the set that contains all elements of $A$ and all elements in $B$, that is,   
  $$
  A\cup B=\left\{x:x\in A \text{ or } x\in B\right\}.
  $$
  The **intersection** of $A$ and $B$, denoted $A\cap B$, is the set that contains all elements of $A$ that are also elements of $B$, that is,   
  $$
  A\cap B=\left\{x:x\in A \text{ and } x\in B\right\}.
  $$
  The **difference** $A$ minus $B$, denoted $A\setminus B$, is the set that contains all elements of $A$ that are not in $B$, that is,   
  $$
  A\setminus B=\left\{x:x\in A\text{ and }x\not\in B\right\}.
  $$

- **Example 6.1**  
  Consider the sets $A=\left\{a,b,c,d,e\right\}$ and $B=\left\{b,c\right\}$, then  
  $$
  \begin{aligned}  
  &A\cup B=\left\{a,b,c,d,e\right\} \\  
  &A\cap B=\left\{b,c\right\} \\  
  &A\setminus B=\left\{a,d,e\right\} \\  
  &B\setminus A=\varnothing=\left\{\ \right\}  .
  \end{aligned}
  $$

---

- **Definition 7**  
  Let $X$ be a set and consider two subsets $A_1$ and $A_2$ of the set $X$.   
  We say that $A_1$ and $A_2$ are **disjoint** if $A_1\cap A_2=\varnothing$.   
  We say that $A_1$ and $A_2$ form a **partition** of $X$ if $X=A_1\cup A_2$ and $A_1\cap A_2=\varnothing$ with $A_1,A_2\neq \varnothing$.  

---

- **Definition 8**  
  Let $A$ be a set, the **complement** of $A$, denoted $A^\complement$, is the set $A^\complement=\left\{x:x\not\in A\right\}$.  

  - **Proposition 8.1**  
    Let $X$ be a set.  

    1. If $A,B \subseteq X$ then $A,B\subseteq A\cup B$ and $A\cap B\subseteq A,B$.  

    2. If $A,B\subseteq X$ then $A\cup B=B\cup A$ and $A\cap B=B\cap A$.  

    3. If $A,B\subseteq X$ and $A\subseteq B$ then $B^\complement\subseteq A^\complement$.  

    4. $X^\complement=\varnothing$ and $\varnothing^\complement=X$.  

    5. If $A,B\subseteq X$ then $\left(A\cup B\right)^\complement=A^\complement\cap B^\complement$.  

    6. If $A,B\subseteq X$ then $\left(A\cap B\right)^\complement=A^\complement\cup B^\complement$.  

    $5, 6$ are De Morgan's laws.  

    **Proof**  
    - Let $x\in A$, then $x\in A$ or $x\in B$, that is,  
       $$
       x\in A\cup B\implies A\subseteq A\cup B.
       $$
       Analogously, we have that $B\subseteq A\cup B$.  
       Let $x\in A\cap B$, then $x\in A$ and $x\in B$, that is,  
       $$
       x\in A\cap B\implies A\cap B\subseteq A,B.
       $$
    - $$
       \begin{aligned}  
       A\cup B&=\left\{x:x\in A\text{ or }x\in B\right\} \\  
       &=\left\{x:x\in B\text{ or }x\in A\right\}=B\cup A  
       \end{aligned}.
       $$

    Analogously, we have that $A\cap B=B\cap A$.  

    - Suppose that $A\subseteq B$ and let $x\in B^\complement$, then $x\not\in B$; since $A\subseteq B$ we have that $x\not\in A$ and thus $x\in A^\complement$.  
       Therefore, $B^\complement\subseteq A^\complement$.  
    - By definition

    $$
    \begin{aligned}
    &X^\complement=\left\{x\in X:x\not\in X\right\}=\varnothing \\  
    &\varnothing^\complement=\left\{x\in X:x\not\in\varnothing\right\}=X.
    \end{aligned}
    $$

    - Let $x\in\left(A\cup B\right)^\complement$, then  

    $$
    \begin{aligned}  
    x\in\left(A\cup B\right)^\complement&\iff x\not\in\left(A\cup B\right) \\  
    &\iff \text{It is false that }x\in A\lor x\in B\\  
    &\iff \text{It is true that }x\not\in A \land x\not\in B \\  
    &\iff x\not\in A \text{ and }x\not\in B \\  
    &\iff x\in A^\complement\text{ and }x\in B^\complement \\  
    &\iff x\in A^\complement\cap B^\complement  .
    \end{aligned}
    $$
    Thus $\left(A\cup B\right)^\complement=A^\complement\cap B^\complement$.  

    - Let $x\in\left(A\cap B\right)^\complement$, then  

    $$
    \begin{aligned}  
    x\in\left(A\cap B\right)^\complement&\iff x\not\in\left(A\cap B\right) \\  
    &\iff \text{It is false that }x\in A\land x\in B\\  
    &\iff \text{It is true that }x\not\in A \lor x\not\in B \\  
    &\iff x\not\in A \text{ or }x\not\in B \\  
    &\iff x\in A^\complement\text{ or }x\in B^\complement \\  
    &\iff x\in A^\complement\cup B^\complement  .
    \end{aligned}
    $$
    Thus $\left(A\cap B\right)^\complement=A^\complement\cup B^\complement$.  


---

- **Definition 9**  
  Let $X$ be a set. The **power set** of $X$, denoted $\mathscr P(X)$, is the set of all subsets of $X$.  

  - **Example 9.1**  
    Let $X=\left\{a,b,c\right\}$, then  
    $$
    \mathscr P(X)=\left\{\varnothing,\left\{a\right\},\left\{b\right\},\left\{c\right\},\left\{a,b\right\},\left\{a,c\right\},\left\{b,c\right\},\left\{a,b,c\right\}\right\}.
    $$

  - **Example 9.2**  
    Let $A$ and $B$ be sets. Prove that $\mathscr P(A)\subseteq \mathscr P(B)$, if and only if, $A\subseteq B$.

    - **Proof 9.2.1**  
      Suppose that $\mathscr P(A)\subseteq \mathscr P(B)$. Let $x\in A$ then $\left\{x\right\}\in\mathscr P(A)$ and thus $\left\{x\right\}\in\mathscr  P(B)$, therefore $x\in B$, hence $A\subseteq B$.
      Suppose that $A\subseteq B$. Let $X\in\mathscr P(A)$ then $X\subseteq A$, that is, $X\subseteq B$, therefore $X\in\mathscr P(B)$ and thus $\mathscr P(A)\subseteq \mathscr P(B)$.