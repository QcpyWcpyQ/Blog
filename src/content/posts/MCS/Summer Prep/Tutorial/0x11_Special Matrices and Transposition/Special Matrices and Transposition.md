---
title: "Special Matrices and Transposition"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Special Matrices and Transposition

- **Exercise 1**  
  Let $u=\lb 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1\eb$ with $a,b,c\in\mathbb R$. Prove that $u$ is invertible and find $u^{-1}$.

  - **Solution 1.1**  
    Suppose $u=\lb 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1\eb$ with $a,b,c\in\mathbb R$. For any $d,e,f\in\mathbb R$, let $A=\lb 1 & d & e \\ 0 & 1 & f \\ 0 & 0 & 1\eb$. Then  
    $$
    Au=\lb 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1\eb\lb 1 & d & e \\ 0 & 1 & f \\ 0 & 0 & 1\eb=\lb 1 & a+d & b+cd+e \\ 0 & 1 & c+f \\ 0 & 0 & 1\eb=\lb 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1\eb.
    $$
    By comparison we have that  
    $$
    \begin{cases}
    a+d=0 \\
    c+f=0 \\
    b+cd+e=0
    \end{cases}.
    $$
    Therefore  
    $$
    \begin{cases}
    d=-a \\
    e=ac-b \\
    f=-c
    \end{cases}.
    $$
    And thus  
    $$
    A=\lb 1 & d & e \\ 0 & 1 & f \\ 0 & 0 & 1\eb=\lb 1 & -a & ac-b \\ 0 & 1 & -c \\ 0 & 0 & 1\eb.
    $$
    Check the answer by $uA=I$, that is  
    $$
    uA=\lb 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1\eb\lb 1 & -a & ac-b \\ 0 & 1 & -c \\ 0 & 0 & 1\eb=\lb 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \eb=I.
    $$
    Therefore $u$ is invertible and $u^{-1}=\lb 1 & -a & ac-b \\ 0 & 1 & -c \\ 0 & 0 & 1\eb$.

---

- **Exercise 2**  
  Write $A=\lb 4 & 5 \\ 1 & 3 \eb$ as the sum of a symmetric matrix and an antisymmetric matrix.

  - **Solution 2.1**  
    Suppose $A\in M_{2\times 2}(\mathbb R)$, $A=\dfrac{A+A^\top}{2}+\dfrac{A-A^\top}{2}$. We have that $A^\top=\lb 4 & 1 \\ 5 & 3 \eb$ and thus  
    $$
    \begin{aligned}
    \dfrac{A+A^\top}{2}&=\lb 4 & 3 \\ 3 & 3 \eb \\
    \dfrac{A-A^\top}{2}&=\lb 0 & 2 \\ -2 & 0 \eb 
    \end{aligned}
    $$
    since $\dfrac{A+A^\top}{2}$ is symmetric and $\dfrac{A-A^\top}{2}$ is antisymmetric.

---

- **Exercise 3**  
  Let $D=\operatorname{diag}(1,2,4)$ and let $A=\lb a_{ij}\eb\in M_{3\times 3}(\mathbb R)$. Determine all matrices satisfying $AD=DA$.

  - **Solution 3.1**  
    We are looking for matrices  
    $$
    A=\lb
    a_{11}&a_{12}&a_{13} \\
    a_{21}&a_{22}&a_{23} \\
    a_{31}&a_{32}&a_{33}
    \eb
    $$
    such that $AD=DA$. Then we have  
    $$
    \begin{aligned}
    AD&=\lb
    a_{11}&a_{12}&a_{13} \\
    a_{21}&a_{22}&a_{23} \\
    a_{31}&a_{32}&a_{33}
    \eb\lb
    1 & 0 & 0 \\
    0 & 2 & 0 \\
    0 & 0 & 4 
    \eb=\lb
    a_{11}&2a_{12}&4a_{13} \\
    a_{21}&2a_{22}&4a_{23} \\
    a_{31}&2a_{32}&4a_{33}
    \eb \\
    DA&=\lb
    1 & 0 & 0 \\
    0 & 2 & 0 \\
    0 & 0 & 4 
    \eb\lb
    a_{11}&a_{12}&a_{13} \\
    a_{21}&a_{22}&a_{23} \\
    a_{31}&a_{32}&a_{33}
    \eb=\lb
    a_{11}&a_{12}&a_{13} \\
    2a_{21}&2a_{22}&2a_{23} \\
    4a_{31}&4a_{32}&4a_{33}
    \eb
    \end{aligned}
    $$
    By comparison, we have that $a_{11},a_{22},a_{33}\in\mathbb R$ and $a_{12}=a_{13}=a_{21}=a_{23}=a_{31}=a_{32}=0$. Thus $A$ is diagonal.

---

- **Exercise 4**  
  Suppose $A\in M_{n\times n}(\mathbb R)$ is both upper triangular and symmetric. Prove that $A$ must be diagonal. Is the converse true?

  - **Proof 4.1**  
    Suppose that $A\in M_{n\times n}(\mathbb R)$ is both upper triangular and symmetric. Then by definition $\forall i>j, a_{ij}=0$ and $\forall i,j, a_{ij}=a_{ji}$. Now we need to prove that $\forall i,j, i<j, a_{ij}=0$. As $A$ is symmetric $a_{ij}=a_{ji}=0$. Thus $\forall i,j, i\neq j, a_{ij}=0$ which is the definition of diagonal.

    The converse is true. Suppose $A$ is diagonal, $A\in M_n(\mathbb R)$. By definition we have that $\forall i,j, i\neq j, a_{ij}=0$. Then $\forall i,j, i>j, a_{ij}=0$ and then $A$ is upper triangular. If $i\neq j$, we have that $a_{ij}=a_{ji}=0$ and thus $A$ is symmetric.

---

- **Exercise 5**  
  Suppose $A\in M_{n\times n}(\mathbb R)$ is invertible and symmetric. Prove using definition of inverse and identities of transpose that $A^{-1}$ is also symmetric.

  - **Proof 5.1**  
    Suppose $A\in M_{n\times n}(\mathbb R)$ is invertible and symmetric. Then $\exists A^{-1}\in M_{n}(\mathbb R), AA^{-1}=A^{-1}A=I$ and $A=A^\top$. We want to prove $\left(A^{-1}\right)^\top=A^{-1}$. That is, $\left(A^{-1}\right)^\top$ is the inverse of $A$. We have that  
    $$
    I=I^\top=\left(AA^{-1}\right)^\top=\left(A^{-1}\right)^\top A^\top=\left(A^{-1}\right)^\top A=I.
    $$
    By the uniqueness of inverse, $\left(A^{-1}\right)^\top$ is the inverse of $A$.
