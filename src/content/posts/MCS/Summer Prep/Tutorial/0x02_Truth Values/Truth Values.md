---
title: "Truth Values"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Truth Values

- **Exercise 1**
  Let $P,Q$ and $R$ be three mathematical statements, we want to prove that the propositions
  $$
  \begin{aligned}
  
  &A:P\implies \left(Q\implies R\right),\\
  &B:\left(P\and Q\right)\implies R.
  
  \end{aligned}
  $$
  are equivalent. 

  - **Solution 1.1**
    We have
    $$
    \begin{array}{c|c|c|c|c|c|c}
    
    P&Q&R&Q\implies R&P\and Q&P\implies \left(Q\implies R\right)&\left(P\and Q\right)\implies R \\ \hline
    1&1&1&1&1&1&1 \\
    1&1&0&0&1&0&0 \\
    1&0&1&1&0&1&1 \\
    1&0&0&1&0&1&1 \\
    0&1&1&1&0&1&1 \\
    0&1&0&0&0&1&1 \\
    0&0&1&1&0&1&1 \\
    0&0&0&1&0&1&1
    
    \end{array}
    $$
    Therefore, $A\equiv B$.

---

- **Exercise 2**
  Let $P,Q$ and $R$ be three mathematical statements, we want to prove that the propositions
  $$
  \begin{aligned}
  
  &A:\left(P\implies Q\right)\and\left(Q\implies R\right),\\
  &B:\left(\neg P\or Q\right)\and\left(Q \or R\right).
  
  \end{aligned}
  $$
  are equivalent.

  - **Solution 2.2**
    **Case 1**: $A$ is false if and only if
    $$
    (P\implies Q)\text{ is false or } (\neg Q\implies R)\text{ is false}.
    $$
    which means
    $$
    \begin{pmatrix}
    P\text{ is true}\\
    \text{and} \\
    Q\text{ is false}
    \end{pmatrix} \text{or}
    
    \begin{pmatrix}
    Q\text{ is false}\\
    \text{and} \\
    R\text{ is false}
    \end{pmatrix}.
    $$
    **Case 2**: $B$ is false if and only if
    $$
    \left(\neg P\or Q\right)\text{ is false or }\left(Q \or R\right)\text{ is false}.
    $$
    which means
    $$
    \begin{pmatrix}
    P\text{ is true}\\
    \text{and} \\
    Q\text{ is false}
    \end{pmatrix} \text{or}
    
    \begin{pmatrix}
    Q\text{ is false}\\
    \text{and} \\
    R\text{ is false}
    \end{pmatrix}.
    $$
    In conclusion, both propositions are false exactly in the same cases.
    Therefore, $A\equiv B$.

---

- **Exercise 3**
  Let $P,Q$ and $R$ be three mathematical statements, we want to prove that the propositions
  $$
  \begin{aligned}
  
  &A:P\implies(Q\implies R), \\
  &B:(P\implies Q)\implies R.
  
  \end{aligned}
  $$
  are not equivalent.

  - **Solution 3.2**
    if $P$ is false, $Q$ is true and $R$ is false, then the proposition $A$ is true and the proposition $B$ is false, then $A,B$ are not equivalent.

---

- **Exercise 4**
  Are $A:\neg(P\and Q),B:\neg P\and \neg Q$ are equivalent?

  - **Solution 4.1**
    If $P$ is true and $Q$ is false, then $A$ is true and $B$ is false, then $A,B$ are not equivalent.

---

- **Exercise 5**
  Are $A:(P\implies Q)\and R,B:P\implies(Q\and R)$ are equivalent?

  - **Solution 5.1**
    If $P$ is false, then $B$ is always true. In this case, if $R$ is false, $A$ is false, then $A,B$ are not equivalent.

