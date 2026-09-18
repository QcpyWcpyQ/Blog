---
title: "Matrix Arithmetic"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Matrix Arithmetic

Let $S$ be one of the sets $\mathbb Z, \mathbb Q, \mathbb R$ or $\mathbb C$.

- **Definition 1**  
  Let $m,n\in\mathbb N$. A **matrix** of size $m\times n$ with entries in $S$ is a rectangular array of the form
  $$
  A = \lb
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
  \eb_{m\times n}, \quad a_{ij}\in S \text{ for } 1\leqslant i\leqslant m, \,\, 1\leqslant j\leqslant n.
  $$
  where $m$ is the number of rows and $n$ is the number of columns.

  The set of all such matrices is denoted by $M_{m\times n}(S)$.  
  The $i$-th row of $A$ is
  $$
  R_i=\lb a_{i1} & a_{i2} & \cdots & a_{in} \eb.
  $$
  The $j$-th column of $A$ is
  $$
  C_j=\lb a_{1j} \\ a_{2j} \\ \vdots \\ a_{mj} \eb.
  $$
  The element of $A$ that is in the $i$-th row and the $j$-th column is denoted $a_{ij}$ and we can write
  $$
  A=\lb a_{ij} \eb_{m\times n}.
  $$

---

- **Definition 2**  
  Two matrices $A=\lb a_{ij} \eb_{m\times n}, B=\lb b_{ij} \eb_{m\times n}\in M_{m\times n}(S)$ are **equal** if $a_{ij}=b_{ij}$ for all $1\leqslant i\leqslant m, \,\, 1\leqslant j\leqslant n$.

---

- **Definition 3**  
  A matrix $A$ is said to be **square** if the number of rows is equal to the number of columns, that is,  
  $$
  A=\lb a_{ij} \eb_{n\times n}.
  $$

  - **Notation 3.1**  
    $$
    \lb a_{ij} \eb_{n\times n}=\lb a_{ij} \eb_{n}, \quad M_{n\times n}(S)=M_{n}(S).
    $$

---

- **Definition 4**  
  The **zero matrix** is the matrix whose entries are all $0$ and is denoted $\mathbb 0$.  

  - **Example 4.1**  
    $$
    \mathbb 0_{2\times 3}=\lb
    0 & 0 & 0 \\
    0 & 0 & 0
    \eb, \quad
    \mathbb 0_{4\times 2}=\lb
    0 & 0 \\
    0 & 0 \\
    0 & 0 \\
    0 & 0 
    \eb, \quad
    \mathbb 0_{3}=\lb
    0 & 0 & 0 \\
    0 & 0 & 0 \\
    0 & 0 & 0
    \eb.
    $$

---

- **Definition 5**  
  Given two matrices $A=\lb a_{ij} \eb_{m\times n}, B=\lb b_{ij} \eb_{m\times n}\in M_{m\times n}(S)$, we define the sum as the matrix $A+B=\lb a_{ij}+b_{ij} \eb_{m\times n}$.

  - **Example 5.1**  
    Let
    $$
    A=\lb
    1 & -2 & 0 \\
    3 & 7 & 1 
    \eb, \quad
    B=\lb
    -2 & 3 & 1 \\
    4 & -2 & 1 
    \eb.
    $$
    Then we have the sum
    $$
    A+B=\lb
    1+(-2) & -2+3 & 0+1 \\
    3+4 & 7+(-2) & 1 +1
    \eb=\lb
    -1 & 1 & 1 \\
    7 & 5 & 2
    \eb.
    $$

---

- **Definition 6**  
  Given a matrix $A=\lb a_{ij} \eb_{m\times n}\in M_{m\times n}(S)$ and $\alpha\in S$, we define the **scalar product** as the matrix  
  $$
  \alpha A=\lb \alpha a_{ij} \eb_{m\times n}.
  $$

  - **Example 6.1**  
    If  
    $$
    A=\lb
    1 & 7 \\
    2 & 6 \\
    3 & 5
    \eb,
    $$
    then we have  
    $$
    2A=\lb
    2 & 14 \\
    4 & 12 \\
    6 & 10
    \eb.
    $$
    If  
    $$
    A=\lb
    \i & 0 \\
    0 & -\i 
    \eb,
    $$
    then we have  
    $$
    \i A=\lb
    -1 & 0 \\
    0 & 1 
    \eb.
    $$

  - **Theorem 6.2**  
    Let $A, B, C\in M_{m\times n}(S)$ and $\alpha, \beta\in S$, then we have the following properties  

    1. $(A+B)+C=A+(B+C)$.
    2. $A+B=B+A$.
    3. $A+\mathbb 0=A$.
    4. $A+(-A)=\mathbb 0$.
    5. $\left(\alpha+\beta\right)A=\alpha A+\beta A$.
    6. $\alpha (A+B)=\alpha A+\alpha B$.
    7. $\left(\alpha\beta\right)A=\alpha\left(\beta A\right)$.

    - **Proof 6.2.1**  
      Let $A=\lb a_{ij} \eb_{m\times n}, B=\lb b_{ij} \eb_{m\times n}, C=\lb c_{ij} \eb_{m\times n}$.  

      1. $$
         \begin{aligned}
         (A+B)+C&=\lb a_{ij}+b_{ij} \eb_{m\times n}+\lb c_{ij} \eb_{m\times n} \\
         &= \lb \left(a_{ij}+b_{ij}\right)+c_{ij} \eb_{m\times n} \\
         &= \lb a_{ij}+\left(b_{ij}+c_{ij}\right) \eb_{m\times n} \\
         &= \lb a_{ij} \eb_{m\times n} + \lb b_{ij}+c_{ij} \eb_{m\times n} \\
         &= A+(B+C).
         \end{aligned}
         $$

      2. $$
         \begin{aligned}
         A+B&=\lb a_{ij}+b_{ij} \eb_{m\times n} \\
         &=\lb b_{ij}+a_{ij} \eb_{m\times n} \\
         &= B+A.
         \end{aligned}
         $$

      3. $$
         \begin{aligned}
         A+\mathbb 0&=\lb a_{ij}+0 \eb_{m\times n} \\
         &=\lb a_{ij} \eb_{m\times n} \\
         &= A.
         \end{aligned}
         $$

      4. $$
         \begin{aligned}
         A+(-A)&=\lb a_{ij} \eb_{m\times n}+\lb -a_{ij} \eb_{m\times n} \\
         &=\lb a_{ij}+(-a_{ij}) \eb_{m\times n} \\
         &=\lb 0 \eb_{m\times n} \\
         &= \mathbb 0.
         \end{aligned}
         $$

      5. $$
         \begin{aligned}
         (\alpha+\beta)A&=\lb (\alpha+\beta)a_{ij} \eb_{m\times n} \\
         &=\lb \alpha a_{ij}+\beta a_{ij} \eb_{m\times n} \\
         &=\lb \alpha a_{ij} \eb_{m\times n}+\lb \beta a_{ij} \eb_{m\times n} \\
         &= \alpha A+\beta A.
         \end{aligned}
         $$

      6. $$
         \begin{aligned}
         \alpha(A+B)&=\alpha\lb a_{ij}+b_{ij} \eb_{m\times n} \\
         &=\lb \alpha(a_{ij}+b_{ij}) \eb_{m\times n} \\
         &=\lb \alpha a_{ij}+\alpha b_{ij} \eb_{m\times n} \\
         &=\lb \alpha a_{ij} \eb_{m\times n}+\lb \alpha b_{ij} \eb_{m\times n} \\
         &= \alpha A+\alpha B.
         \end{aligned}
         $$

      7. $$
         \begin{aligned}
         (\alpha\beta)A&=\lb (\alpha\beta)a_{ij} \eb_{m\times n} \\
         &=\lb \alpha(\beta a_{ij}) \eb_{m\times n} \\
         &=\alpha\lb \beta a_{ij} \eb_{m\times n} \\
         &= \alpha(\beta A).
         \end{aligned}
         $$

---

- [ ] **Definition 7**  
  Consider two matrices $A=\lb a_{ij} \eb_{m\times n}\in M_{m\times n}(S)$ and $B=\lb b_{jk} \eb_{n\times p}\in M_{n\times p}(S)$. We define the **product** as the matrix  
  $$
  C=\lb c_{ik} \eb_{m\times p}
  $$
  where
  $$
  c_{ik}=\sum_{j=1}^na_{ij}b_{jk}.
  $$

  - **Remark 7.1**  
    For the product between $A$ and $B$ to make sense, the number of columns of $A$ must be equal to the number of rows of $B$.
    
  - **Example 7.2**  
    Let  
    $$
    A=\lb
    1 & 2 & -1 \\
    3 & 1 & 4 
    \eb, \quad
    B=\lb
    -2 & 5 \\
    4 & -3 \\
    2 & 1
    \eb.
    $$
    Then by the definition of the matrix product, the resulting matrix $AB$ has size $2\times 2$ and can be written as
    $$
    AB=\lb
    c_{11} & c_{12} \\
    c_{21} & c_{22}
    \eb
    $$
    where each entry $c_{ik}$ is computed explicitly by taking the dot product of the $i$-th row of $A$ and the $k$-th column of $B$ as follows
    $$
    \begin{aligned}
    c_{11}&=\sum_{j=1}^3a_{1j}b_{j1}=a_{11}b_{11}+a_{12}b_{21}+a_{13}b_{31}=1\cdot(-2)+2\cdot 4+(-1)\cdot 2=-2+8-2=4. \\
    c_{12}&=\sum_{j=1}^3a_{1j}b_{j2}=a_{11}b_{12}+a_{12}b_{22}+a_{13}b_{32}=1\cdot 5+2\cdot(-3)+(-1)\cdot 1=5-6-1=-2. \\
    c_{21}&=\sum_{j=1}^3a_{2j}b_{j1}=a_{21}b_{11}+a_{22}b_{21}+a_{23}b_{31}=3\cdot(-2)+1\cdot 4+4\cdot 2=-6+4+8=6. \\
    c_{22}&=\sum_{j=1}^3a_{2j}b_{j2}=a_{21}b_{12}+a_{22}b_{22}+a_{23}b_{32}=3\cdot 5+1\cdot(-3)+4\cdot 1=15-3+4=16.
    \end{aligned}
    $$
    Therefore, substituting these calculated entries back into the product matrix yields the final result
    $$
    AB=\lb
    4 & -2 \\
    6 & 16
    \eb.
    $$

  - **Theorem 7.3**  
    Let $A,B,C$ be matrices with sizes such that the foloowing operations make sense and let $\alpha\in S$. Then

    1. $(AB)C=A(BC)$.
    2. $(A+B)C=AC+BC$.
    3. $A(B+C)=AB+AC$.
    4. $\alpha AB=(\alpha A)B=A(\alpha B)$.

    - **Proof 7.3.1**  

      1. Let $A=\lb a_{ij} \eb_{m\times n},B=\lb b_{jk} \eb_{n\times p},C=\lb c_{kl} \eb_{p\times q}$. Then  
         $$
         \begin{aligned}
         
         (AB)C &= [d_{ik}]_{m\times b}[c_{kl}]_{p\times q} \\
         &= [e_{il}]_{m\times q}
         
         \end{aligned}
         $$

  - **Theorem 7.3**  
    Let $A, B, C$ be matrices with sizes such that the following operations make sense and let $\alpha\in S$. Then  

    1. $(AB)C=A(BC)$.
    2. $(A+B)C=AC+BC$.
    3. $A(B+C)=AB+AC$.
    4. $\alpha (AB)=(\alpha A)B=A(\alpha B)$.

    - **Proof 7.3.1**  

      1. Let $A=\lb a_{ij} \eb_{m\times n}$, $B=\lb b_{jk} \eb_{n\times p}$ and $C=\lb c_{kl} \eb_{p\times q}$. Then
         $$
         \begin{aligned}
         (AB)C &= \left( \lb a_{ij} \eb_{m\times n} \lb b_{jk} \eb_{n\times p} \right) \lb c_{kl} \eb_{p\times q} \\
         &= \lb \sum_{j=1}^n a_{ij}b_{jk} \eb_{m\times p} \lb c_{kl} \eb_{p\times q} \\
         &= \lb \sum_{k=1}^p \left( \sum_{j=1}^n a_{ij}b_{jk} \right) c_{kl} \eb_{m\times q} \\
         &= \lb \sum_{k=1}^p \sum_{j=1}^n a_{ij}b_{jk}c_{kl} \eb_{m\times q} \\
         &= \lb \sum_{j=1}^n \sum_{k=1}^p a_{ij}b_{jk}c_{kl} \eb_{m\times q} \\
         &= \lb \sum_{j=1}^n a_{ij} \left( \sum_{k=1}^p b_{jk}c_{kl} \right) \eb_{m\times q} \\
         &= \lb a_{ij} \eb_{m\times n} \lb \sum_{k=1}^p b_{jk}c_{kl} \eb_{n\times q} \\
         &= \lb a_{ij} \eb_{m\times n} \left( \lb b_{jk} \eb_{n\times p} \lb c_{kl} \eb_{p\times q} \right) \\
         &= A(BC).
         \end{aligned}
         $$

      2. Let $A=\lb a_{ij} \eb_{m\times n}$, $B=\lb b_{ij} \eb_{m\times n}$, and $C=\lb c_{jk} \eb_{n\times p}$. Then
         $$
         \begin{aligned}
         (A+B)C &= \left( \lb a_{ij} \eb_{m\times n} + \lb b_{ij} \eb_{m\times n} \right) \lb c_{jk} \eb_{n\times p} \\
         &= \lb a_{ij} + b_{ij} \eb_{m\times n} \lb c_{jk} \eb_{n\times p} \\
         &= \lb \sum_{j=1}^n (a_{ij} + b_{ij})c_{jk} \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n \left( a_{ij}c_{jk} + b_{ij}c_{jk} \right) \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n a_{ij}c_{jk} + \sum_{j=1}^n b_{ij}c_{jk} \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n a_{ij}c_{jk} \eb_{m\times p} + \lb \sum_{j=1}^n b_{ij}c_{jk} \eb_{m\times p} \\
         &= \lb a_{ij} \eb_{m\times n} \lb c_{jk} \eb_{n\times p} + \lb b_{ij} \eb_{m\times n} \lb c_{jk} \eb_{n\times p} \\
         &= AC + BC.
         \end{aligned}
         $$

      3. Let $A=\lb a_{ij} \eb_{m\times n}$, $B=\lb b_{jk} \eb_{n\times p}$, and $C=\lb c_{jk} \eb_{n\times p}$. Then
         $$
         \begin{aligned}
         A(B+C) &= \lb a_{ij} \eb_{m\times n} \left( \lb b_{jk} \eb_{n\times p} + \lb c_{jk} \eb_{n\times p} \right) \\
         &= \lb a_{ij} \eb_{m\times n} \lb b_{jk} + c_{jk} \eb_{n\times p} \\
         &= \lb \sum_{j=1}^n a_{ij}(b_{jk} + c_{jk}) \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n \left( a_{ij}b_{jk} + a_{ij}c_{jk} \right) \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n a_{ij}b_{jk} + \sum_{j=1}^n a_{ij}c_{jk} \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n a_{ij}b_{jk} \eb_{m\times p} + \lb \sum_{j=1}^n a_{ij}c_{jk} \eb_{m\times p} \\
         &= \lb a_{ij} \eb_{m\times n} \lb b_{jk} \eb_{n\times p} + \lb a_{ij} \eb_{m\times n} \lb c_{jk} \eb_{n\times p} \\
         &= AB + AC.
         \end{aligned}
         $$

      4. Let $A=\lb a_{ij} \eb_{m\times n}$ and $B=\lb b_{jk} \eb_{n\times p}$. Then
         $$
         \begin{aligned}
         \alpha(AB) &= \alpha \left( \lb a_{ij} \eb_{m\times n} \lb b_{jk} \eb_{n\times p} \right) \\
         &= \alpha \lb \sum_{j=1}^n a_{ij}b_{jk} \eb_{m\times p} \\
         &= \lb \alpha \sum_{j=1}^n a_{ij}b_{jk} \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n \alpha (a_{ij}b_{jk}) \eb_{m\times p} \\
         &= \lb \sum_{j=1}^n (\alpha a_{ij})b_{jk} \eb_{m\times p} = \lb \sum_{j=1}^n a_{ij}(\alpha b_{jk}) \eb_{m\times p} \\
         &= \lb \alpha a_{ij} \eb_{m\times n} \lb b_{jk} \eb_{n\times p} = \lb a_{ij} \eb_{m\times n} \lb \alpha b_{jk} \eb_{n\times p} \\
         &= (\alpha A)B = A(\alpha B).
         \end{aligned}
         $$

  - **Remark 7.4**  
    The product of matrices is not commutative. For example, consider  
    $$
    A=\lb
    
    1 & 3 \\
    2 & -1
    
    \eb,
    
    B=\lb
    
    2 & -1 \\
    0 & 2
    \eb.
    $$
    Then
    $$
    \begin{aligned}
    AB&=\lb
    
    1 & 3 \\
    2 & -1
    
    \eb\lb
    
    2 & -1 \\
    0 & 2
    \eb=\lb
    
    2 & 5 \\
    4 & -4
    \eb \\
    
    BA&=\lb
    
    2 & -1 \\
    0 & 2
    \eb\lb
    
    1 & 3 \\
    2 & -1
    
    \eb=\lb
    
    0 & 7 \\
    4 & -2
    \eb 
    
    \end{aligned}
    $$
    That is, $AB\neq BA$.

  - **Remark 7.5**  
    The product between two nonzero square matrices canbe zero matrix. For example
    $$
    A=\lb
    
    1 & 0 \\
    0 & 0
    
    \eb,
    
    B=\lb
    
    0 & 0 \\
    0 & 1
    \eb.
    $$
    Then  
    $$
    AB=\lb1 & 0 \\
    0 & 0
    
    \eb\lb
    
    0 & 0 \\
    0 & 1
    \eb=\lb
    
    0 & 0 \\
    0 & 0
    \eb.
    $$
