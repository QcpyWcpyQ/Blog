---
title: "Matrix Arithmetic"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Matrix arithmetic

- **Exercise 1**  
  Let
  $$
  A=\lb
  1 & -2 \\
  0 & 4
  \eb, \quad B=\lb
  5 & 1 \\
  3 & -2
  \eb.
  $$

  Compute $A+B, 2A-3B, AB, BA$.

  - **Solution 1.1**  
    We have that  
    $$
    \begin{aligned}
    A+B &= \lb
    6 & -1 \\
    3 & 2
    \eb, \\
    2A-3B &= \lb
    -13 & -7 \\
    -9 & 14
    \eb, \\
    AB &= \lb
    -1 & 5 \\
    12 & -8
    \eb, \\
    BA &= \lb
    5 & -6 \\
    3 & -14
    \eb.
    \end{aligned}
    $$

---

- **Exercise 2**  
  Find the size of the product matrix.

  - **Solution 2.1**  
    $$
    \begin{aligned}
    (2\times 3)(3\times 4)&\implies (2\times 4). \\
    (4\times 1)(1\times 2)&\implies (4\times 2). \\
    (1\times 2)(3\times 1)&\implies \text{Not defined}. \\
    (2\times 2)(2\times 4)&\implies (2\times 4).
    \end{aligned}
    $$

---

- **Exercise 3**  
  Suppose $A+B$ and $AB$ are defined. What can you say about the sizes of $A$ and $B$?
  - **Solution 3.1**  
    As $A+B$ is well-defined, both matrices have the same size $n\times m$.  
    As $AB$ is well-defined, $m=n$. Therefore $A, B$ have size $n\times n$.

---

- **Exercise 4 (Recovering a matrix from its action)**  
  Suppose $A\in M_{2\times 3}(\mathbb R)$ satisfies
  $$
  A\lb
  1\\ 0 \\ 0
  \eb=\lb
  2\\ -1
  \eb, \quad
  A\lb
  0\\ 1 \\ 0
  \eb=\lb
  3\\ 2
  \eb, \quad A\lb
  0\\ 0 \\ 1
  \eb=\lb
  -1\\ 4
  \eb.
  $$

  1. Determine $A$.

  2. Compute  
     $$
     A\lb
     2\\ 3 \\ -5
     \eb
     $$

  3. In general, what information about a matrix $A$ is contained in $Ae_1, Ae_2, \cdots, Ae_m,A\in M_{m\times n}(\R)$?

  - **Solution 4.1**  

    1. Let $A = \lb a_{ij} \eb_{2\times 3} = \lb a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \eb$. By the definition, we have
       $$
       \begin{aligned}
       A\lb 1 \\ 0 \\ 0 \eb &= \lb a_{11} \cdot 1 + a_{12} \cdot 0 + a_{13} \cdot 0 \\ a_{21} \cdot 1 + a_{22} \cdot 0 + a_{23} \cdot 0 \eb = \lb a_{11} \\ a_{21} \eb = \lb 2 \\ -1 \eb, \\
       A\lb 0 \\ 1 \\ 0 \eb &= \lb a_{11} \cdot 0 + a_{12} \cdot 1 + a_{13} \cdot 0 \\ a_{21} \cdot 0 + a_{22} \cdot 1 + a_{23} \cdot 0 \eb = \lb a_{12} \\ a_{22} \eb = \lb 3 \\ 2 \eb, \\
       A\lb 0 \\ 0 \\ 1 \eb &= \lb a_{11} \cdot 0 + a_{12} \cdot 0 + a_{13} \cdot 1 \\ a_{21} \cdot 0 + a_{22} \cdot 0 + a_{23} \cdot 1 \eb = \lb a_{13} \\ a_{23} \eb = \lb -1 \\ 4 \eb.
       \end{aligned}
       $$
       Therefore, we determine the matrix $A$ to be
       $$
       A = \lb 2 & 3 & -1 \\ -1 & 2 & 4 \eb.
       $$

    2. By using the recovered matrix $A$, we directly compute the product
       $$
       A\lb 2 \\ 3 \\ -5 \eb = \lb 2 & 3 & -1 \\ -1 & 2 & 4 \eb \lb 2 \\ 3 \\ -5 \eb = \lb 2 \cdot 2 + 3 \cdot 3 + (-1) \cdot (-5) \\ (-1) \cdot 2 + 2 \cdot 3 + 4 \cdot (-5) \eb = \lb 4 + 9 + 5 \\ -2 + 6 - 20 \eb = \lb 18 \\ -16 \eb.
       $$
    
    3. Let $A = \lb a_{ij} \eb_{m\times n}$ and let $e_k = \lb \delta_{jk} \eb_{n\times 1}$ be the $k$-th standard basis vector where $\delta_{jk} = 1$ if $j=k$ and $\delta_{jk} = 0$ if $j \neq k$. Then the $i$-th entry of the column vector $Ae_k$ is given by
       $$
          \sum_{j=1}^n a_{ij}\delta_{jk} = a_{ik}.
       $$
          Thus, we obtain the algebraic identity
       $$
          Ae_k = \lb a_{1k} \\ a_{2k} \\ \vdots \\ a_{mk} \eb = C_k(A).
       $$
          Therefore, for each $k \in \{1, 2, \cdots, n\}$, the product $Ae_k$ contains exactly the $k$-th column of the matrix $A$.

---

- **Exercise 5**  
  Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$. Show that if $A\in M_{m\times n}(\mathbb F)$ satisfies $Ax=0$ for all $x\in\mathbb F^n$, then $A=0$. Deduce that if $Ax=Bx$ for all $x\in\mathbb F^n$, then $A=B$.

  - **Proof 5.1**  
    Suppose $A\in M_{m\times n}(\mathbb F)$ with the property that $\forall x \in \mathbb F^n, Ax=0$. Let $e_j = \lb \delta_{kj} \eb_{n\times 1}$ be the $j$-th standard basis vector of $\mathbb F^n$ for each $1 \leqslant j \leqslant n$. By hypothesis, we have
    $$
    Ae_j = \lb 0 \\ 0 \\ \vdots \\ 0 \eb_{m\times 1}.
    $$
    By Exercise 4.3, the product $Ae_j$ represents the $j$-th column of $A$, which yields $C_j(A) = 0$ for all $1 \leqslant j \leqslant n$. Since all columns of $A$ are zero, we obtain $A=0$.

    Now, suppose $\forall x \in \mathbb F^n, Ax=Bx \iff Ax-Bx=0$. By using Theorem 7.3, this can be rewritten as
    $$
    (A-B)x=0 \implies A-B=0 \implies A=B.
    $$

---

- **Exercise 6**  

  1. Find nonzero matrices $A\in M_{2\times 3}(\mathbb R)$ and $B\in M_{3\times 2}(\mathbb R)$ such that $AB=\mathbb 0_{2\times 2}$ but $BA\neq\mathbb 0_{3\times 3}$.
  2. Use your example to show that the following statements are false:
     - $AB=0\implies A=0\lor B=0$.
     - $AB=0\implies BA=0$.

  - **Solution 6.1**
    1. Let the non-zero matrices be defined as
       $$
       A=\lb
       1 & 1 & 0 \\
       0 & 0 & 0
       \eb_{2\times 3}, \quad 
       B=\lb
       1 & 0 \\
       -1 & 0 \\
       0 & 0
       \eb_{3\times 2}.
       $$
       By the definition of matrix multiplication, we compute the product $AB$ as
       $$
       AB = \lb
       1\cdot 1 + 1\cdot(-1) + 0\cdot 0 & 1\cdot 0 + 1\cdot 0 + 0\cdot 0 \\
       0\cdot 1 + 0\cdot(-1) + 0\cdot 0 & 0\cdot 0 + 0\cdot 0 + 0\cdot 0
       \eb = \lb
       0 & 0 \\
       0 & 0
       \eb = \mathbb 0_{2\times 2}.
       $$
       Now, we compute the product $BA$ as
       $$
       BA = \lb
       1\cdot 1 + 0\cdot 0 & 1\cdot 1 + 0\cdot 0 & 1\cdot 0 + 0\cdot 0 \\
       (-1)\cdot 1 + 0\cdot 0 & (-1)\cdot 1 + 0\cdot 0 & (-1)\cdot 0 + 0\cdot 0 \\
       0\cdot 1 + 0\cdot 0 & 0\cdot 1 + 0\cdot 0 & 0\cdot 0 + 0\cdot 0
       \eb = \lb
       1 & 1 & 0 \\
       -1 & -1 & 0 \\
       0 & 0 & 0
       \eb \neq \mathbb 0_{3\times 3}.
       $$

    2. By using the explicit counterexample constructed in part (1), we analyze the truth values of the statements:
       * Since $A \neq \mathbb 0_{2\times 3}$ and $B \neq \mathbb 0_{3\times 2}$ but $AB = \mathbb 0_{2\times 2}$, the implication $AB=0\implies A=0\lor B=0$ is false.
       * Since $AB = \mathbb 0_{2\times 2}$ but $BA \neq \mathbb 0_{3\times 3}$, the implication $AB=0\implies BA=0$ is false.

---

- **Exercise 6 (Which familiar scalar identities survive?)**  
  Let $A, B \in M_n(\mathbb R)$.  

  1. Expand $(A + B)^2$ using only distributivity and associativity.  
  2. Show that
     $$
     (A + B)^2 = A^2 + 2AB + B^2
     $$
     holds if and only if $AB = BA$.  
  3. Prove that
     $$
     (A - B)(A + B) = A^2 - B^2
     $$
     holds if and only if $AB = BA$.  
  4. Give explicit $2 \times 2$ matrices for which both familiar scalar formulas fail.

  - **Solution 6.1**  

    1. By applying the distributive law and associativity of matrix multiplication, we expand the expression as
       $$
       \begin{aligned}
       (A+B)^2 &= (A+B)(A+B) \\
       &= (A+B)A + (A+B)B \\
       &= AA + BA + AB + BB \\
       &= A^2 + BA + AB + B^2.
       \end{aligned}
       $$

    2. We establish the equivalence by comparing the algebraic expansions
       $$
       \begin{aligned}
       (A+B)^2 = A^2 + 2AB + B^2 &\iff A^2 + BA + AB + B^2 = A^2 + 2AB + B^2 \\
       &\iff BA + AB = 2AB \\
       &\iff BA + AB = AB + AB \\
       &\iff BA = AB.
       \end{aligned}
       $$

    3. By expanding the left side using the distributive law, we have
       $$
       \begin{aligned}
       (A-B)(A+B) &= (A-B)A + (A-B)B \\
       &= AA - BA + AB - BB \\
       &= A^2 - BA + AB - B^2.
       \end{aligned}
       $$
       We establish the equivalence by comparing the algebraic expansions
       $$
       \begin{aligned}
       (A-B)(A+B) = A^2 - B^2 &\iff A^2 - BA + AB - B^2 = A^2 - B^2 \\
       &\iff -BA + AB = \mathbb 0 \\
       &\iff AB = BA.
       \end{aligned}
       $$

    4. Let the two non-commuting $2 \times 2$ matrices be defined as
       $$
       A = \lb 1 & 0 \\ 0 & 0 \eb, \quad B = \lb 0 & 1 \\ 0 & 0 \eb.
       $$
       We verify their products directly by the definition of matrix multiplication
       $$
       \begin{aligned}
       AB &= \lb 1 & 0 \\ 0 & 0 \eb \lb 0 & 1 \\ 0 & 0 \eb = \lb 1\cdot 0 + 0\cdot 0 & 1\cdot 1 + 0\cdot 0 \\ 0\cdot 0 + 0\cdot 0 & 0\cdot 1 + 0\cdot 0 \eb = \lb 0 & 1 \\ 0 & 0 \eb. \\
       BA &= \lb 0 & 1 \\ 0 & 0 \eb \lb 1 & 0 \\ 0 & 0 \eb = \lb 0\cdot 1 + 1\cdot 0 & 0\cdot 0 + 1\cdot 0 \\ 0\cdot 1 + 0\cdot 0 & 0\cdot 0 + 0\cdot 0 \eb = \lb 0 & 0 \\ 0 & 0 \eb.
       \end{aligned}
       $$
       Since $AB = \lb 0 & 1 \\ 0 & 0 \eb \neq \lb 0 & 0 \\ 0 & 0 \eb = BA$, the condition $AB = BA$ is false. By parts 2 and 3, both scalar formulas fail for these explicit matrices.
