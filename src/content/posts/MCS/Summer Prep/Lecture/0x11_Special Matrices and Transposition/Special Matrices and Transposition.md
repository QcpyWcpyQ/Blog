---
title: "Special Matrices and Transposition"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Special Matrices and Transposition$\def\lb{\begin{bmatrix}}\def\eb{\end{bmatrix}}\def\i{\operatorname{i}}$

- **Definition 1**  
  The **identity matrix** $I_n=\lb \delta_{ij} \eb_{n}\in M_n(S)$ is defined by  
  $$
  \delta_{ij}=\begin{cases}
  
  1\quad(i=j) \\
  0\quad(i\neq j)
  
  \end{cases}.
  $$

  - **Example 1.1**  
    $$
    I_2=\lb
    
    \delta_{11}&\delta_{12} \\
    \delta_{21}&\delta_{22}
    
    \eb=\lb
    
    1 &0 \\
    0&1
    
    \eb,\quad
    I_3=\lb
    
    \delta_{11}&\delta_{12}&\delta_{13} \\
    \delta_{21}&\delta_{22}&\delta_{23} \\
    \delta_{31}&\delta_{32}&\delta_{33}
    \eb=\lb
    
    1 &0 &0 \\
    0 &1 &0 \\
    0 &0 &1
    
    \eb.
    $$
    
  - **Proposition 1.2**  
    For every $A\in M_{m\times n}(S)$  
    $$
    I_mA=A\quad\text{and}\quad AI_n=A.
    $$
  
    - **Proof 1.2.1**  
      Let $A=\lb a_{ij}\eb_{m\times n}$ then  
      $$
      \begin{aligned}
      I_m A&=\lb c_{ij}\eb_{m\times n} \\
      &=\lb a_{ij}\eb_{m\times n}.
      \end{aligned}
      $$
      where $c_{ij}=\sum_{k=1}^m\delta_{ik}a_{kj}=\delta_{ii}a_{ij}=a_{ij}$.
      $$
      \begin{aligned}
      AI_m&=\lb c_{ij}\eb_{m\times n} \\
      &=\lb a_{ij}\eb_{m\times n}.
      \end{aligned}
      $$
      where $c_{ij}=\sum_{k=1}^ma_{ik}\delta_{kj}=a_{ij}\delta_{jj}=a_{ij}$.

---

- **Definition 2**  
  A matrix $A\in M_n(S)$ is called **invertible** if there exists $B\in M_n(S)$ such that  
  $$
  AB=I_n=BA.
  $$
  If it exists, $B$ is called the **inverse** of $A$ and is denoted by $A^{-1}$.

  - **Theorem 2.1**  
    If $A\in M_n(S)$ is an invertible matrix then its inverse is unique. Moreover, if $A$ and $B$ are invertible matrices with the same size, then $AB$ is also an invertible matrix and $(AB)^{-1}=B^{-1}A^{-1}$.

    - **Proof 2.1.1**  
      Suppose that $B$ and $C$ are inverses of $A$ then  
      $$
      AB=I_n=BA,AC=I_n=CA.
      $$
      Hence  
      $$
      B=BI_n=B(AC)=(BA)C=I_nC=C.
      $$
      Therefore the inverse is unique. Now, since  
      $$
      AB\left(B^{-1}A^{-1}\right)=A\left(BB^{-1}\right)A^{-1}=AI_nA^{-1}=AA^{-1}=I_n.
      $$
      and  
      $$
      \left(B^{-1}A^{-1}\right)AB=B^{-1}\left(A^{-1}A\right)B=B^{-1}I_nB=B^{-1}B=I_n.
      $$
      we have the $AB$ is an invertible matrix and $(AB)^{-1}=B^{-1}A^{-1}$ because the inverse is unique.

  - **Example 2.2**  
    If $A=\lb a&b\\c&d\eb$ and $ad-bc\neq 0$ then $A$ is invertible and  
    $$
    A^{-1}=\dfrac{1}{ad-bc}\lb
    
    d&-b \\
    -c&a
    
    \eb.
    $$
    In fact, let $B=\lb x&y\\z&w\eb$ such that $AB=I_2$ then  
    $$
    \begin{aligned}
    
    \lb a&b\\c&d\eb\lb x&y\\z&w\eb &=\lb 1&0\\0&1\eb \\
    
    \lb ax+bz&ay+bw\\cx+dz&cy+dw\eb&=\lb 1&0\\0&1\eb \\
    
    \end{aligned}
    $$
    so we obtain the linear system  
    $$
    \begin{cases}
    
    ax+bz=1 \quad&\left(E_1\right)\\
    ay+bw=0 &\left(E_2\right)\\
    cx+dz=0 &\left(E_3\right)\\
    cy+dw=1 &\left(E_4\right)
    
    \end{cases}
    $$
    From $d\left(E_1\right)-b\left(E_3\right),d\left(E_2\right)-b\left(E_4\right),c\left(E_1\right)-a\left(E_3\right),c\left(E_2\right)-a\left(E_4\right)$ we obtain the following equation  
    $$
    \begin{cases}
    
    (ad-bc)x=d \\
    (ad-bc)y=-b \\
    (ad-bc)z=-c \\
    (ad-bc)w=a \\
    
    \end{cases}
    $$
    Now, if $ad-bc\neq 0$ we have that  
    $$
    \begin{cases}
    
    x=\dfrac{1}{ad-bc}d \\
    y=\dfrac{1}{ad-bc}(-b) \\
    z=\dfrac{1}{ad-bc}(-c) \\
    w=\dfrac{1}{ad-bc}a 
    
    \end{cases}
    $$
    Hence  
    $$
    B=\dfrac{1}{ad-bc}\lb
    
    d&-b \\
    -c&a
    
    \eb.
    $$
    with $AB=I_2=BA$. Therefore $A$ is invertible and  
    $$
    A^{-1}=\dfrac{1}{ad-bc}\lb
    
    d&-b \\
    -c&a
    
    \eb.
    $$

  - **Example 2.3**  
    Determine if the matrix $A=\lb 2&3\\2&2\eb$ is invertible and, if so, find its inverse.

    - **Solution 2.3.1**  
      Since $2\times 2-3\times 2=-2\neq 0$ then $A$ is invertible and  
      $$
      A^{-1}=-\dfrac{1}{2}\lb
      
      2&-3\\-2&2
      
      \eb=\lb
      
      -1&\dfrac{3}{2}\\1&-1
      
      \eb.
      $$

  - **Remark 2.4**  
    Note that $A\in M_2(\Z)$ but $A^{-1}\not\in M_2(\Z)$.

---

- **Definition 3**  
  A matrix $D=\lb d_{ij}\eb_n\in M_n(S)$ is **diagonal** if $d_{ij}=0$ for $i\neq j$ and we write $D=\operatorname{diag}(d_{11},d_{22},\cdots,d_{nn})$. That is  
  $$
  D=\lb
  
  d_{11}&0&\cdots&0&0 \\
  0&d_{22}&\cdots&0&0 \\
  \vdots&\vdots&\ddots&\vdots&\vdots \\
  0&0&\cdots&d_{n-1n-1}&0 \\
  0&0&\cdots&0&d_{nn}
  
  \eb.
  $$
  

  - **Remark 3.1**  
    If $D,E\in M_n(S)$ are diagonal matrices then  
    $$
    \operatorname{diag}(d_{11},d_{22},\cdots,d_{nn})\operatorname{diag}(e_{11},e_{22},\cdots,e_{nn})=\operatorname{diag}(d_{11}e_{11},d_{22}e_{22},\cdots,d_{nn}e_{nn}).
    $$
    Hence diagonal matrices commute.

  - **Remark 3.2**  
    Multiplication by a diagonal matrix has a simple effect. If $A\in M_{n}(S)$ and $D=\operatorname{diag}(d_{11},d_{22},\cdots,d_{nn})$ then $AD$ is obtained by multiplying column $j$ of $A$ by $d_{jj}$. Similarly, $DA$ is obtained by multiplying the row $i$ of $A$ by $d_{ii}$. For example
    $$
    \lb
    
    a_{11}&a_{12}&a_{13} \\
    a_{21}&a_{22}&a_{23} \\
    a_{31}&a_{32}&a_{33}
    
    \eb\lb
    
    d_{11}&0&0 \\
    0&d_{22}&0 \\
    0&0&d_{33}
    
    \eb=\lb
    
    a_{11}d_{11}&a_{12}d_{22}&a_{13}d_{33} \\
    a_{21}d_{11}&a_{22}d_{22}&a_{23}d_{33} \\
    a_{31}d_{11}&a_{32}d_{22}&a_{33}d_{33}
    
    \eb.
    $$

---

- **Definition 4**  
  A matrix $U=\lb u_{ij}\eb \in M_n(S)$ is **upper triangular** if $u_{ij}=0$ for $i>j$.  
  A matrix $L=\lb l_{ij}\eb\in M_{n}(S)$ is **lower triangular** if $l_{ij}=0$ for $i<j$.

  - **Example 4.1**  
    Let
    $$
    A=\lb
    2 & -3 & 4 \\
    0 & 5 & 1 \\
    0 & 0 & -7
    \eb,\quad B=\lb
    1 & 0 & 0 \\
    -4 & -3 & 0 \\
    8 & 9 & 6 
    \eb.
    $$
    Then $A$ is upper triangular and $B$ is lower triangular.

  - **Proposition 4.2**  
    The product of two upper triangular matrices with the same size is upper triangular.  
    The product of two lower triangular matrices with the same size is lower triangular.

    - **Proof 4.2.1**  
      Let $A,B\in M_n(S)$ be upper triangular matrices then  
      $$
      AB=\lb c_{ik}\eb_n\ \operatorname{where}\ c_{ik}=\sum_{j=1}^na_{ij}b_{jk}.
      $$
      Let $i>k$. If $i>j$ then $a_{ij}=0$ because $A$ is upper triangular and if $j\geqslant i>k$ then $b_{jk}=0$ because $B$ is upper triangular. Hence  
      $$
      c_{ik}=\sum_{j=1}^na_{ij}b_{jk}=0
      $$
      and thus $AB$ is upper triangular. Analogously, the product of two lower triangular matrices with the same size is lower triangular.

---

- **Definition 5**  
  Let $A=\lb a_{ij}\eb_{m\times n}\in M_{m\times n}(S)$. Then the **transpose** of $A$, denoted by $A^\top$, is the matrix obtained by interchanging the rows and the columns of $A$, that is, $A^\top=\lb a_{ji}\eb_{n\times m}\in M_{n\times m}(S)$.

  - **Example 5.1**  
    If  
    $$
    A=\lb
    1& -2 & 3 \\
    4 & 5 & -6
    \eb
    $$
    then  
    $$
    A^\top = \lb
    1 & 4 \\
    -2 & 5 \\
     3 & -6
    \eb.
    $$

  - **Theorem 5.2**  
    Let $A,B$ be matrices with sizes such that the following operations make sense and let $\alpha\in S$.

    1. $\left(A^\top\right)^\top=A$.
    2. $\left(A+B\right)^\top=A^\top+B^\top$.
    3. $\left(\alpha A\right)^\top=\alpha A^\top$.
    4. $\left(AB\right)^\top=B^\top A^\top$.

    - **Proof 5.2.1**  

      1. Let $A=\lb a_{ij}\eb_{m\times n}$ then  
         $$
         \left(A^\top\right)^\top=\left(\lb a_{ji}\eb_{n\times m}\right)^\top=\lb a_{ij}\eb_{m\times n}=A.
         $$

      2. Let $A=\lb a_{ij}\eb_{m\times n},B=\lb b_{ij}\eb_{m\times n}$ then  
         $$
         \begin{aligned}
         \left(A+B\right)^\top &= \left(\lb a_{ij}+b_{ij}\eb_{m\times n}\right)^\top \\
         &= \lb a_{ji}+b_{ji}\eb_{n\times m} \\
         &= \lb a_{ji}\eb_{n\times m}+\lb b_{ji}\eb_{n\times m} \\
         &= A^\top+B^\top.
         \end{aligned}
         $$

      3. Let $A=\lb a_{ij}\eb_{m\times n}$ then  
         $$
         \begin{aligned}
         \left(\alpha A\right)^\top&=\left(\lb \alpha a_{ij}\eb_{m\times n}\right)^\top \\
         &= \lb \alpha a_{ji}\eb_{n\times m}\\
         &= \alpha\lb a_{ji}\eb_{n\times m} \\
         &= \alpha A^\top.
         \end{aligned}
         $$

      4. Let $A=\lb a_{ij}\eb_{m\times n},B=\lb b_{jk}\eb_{n\times p}$ then  
         $$
         \begin{aligned}
         \left(AB\right)^\top &= \left(\lb c_{ik}\eb_{m\times p}\right)^\top\quad &\operatorname{where}\ c_{ik}=\sum_{j=1}^n a_{ij}b_{jk} \\
         &= \lb c_{ki}\eb_{p\times m} & \operatorname{where}\ c_{ki}=\sum_{j=1}^n b_{kj}a_{ji} \\
         &= \lb b_{kj}\eb_{p\times n}\lb a_{ji}\eb_{n\times m} \\
         &= B^\top A^\top.
         \end{aligned}
         $$

  ---

  - **Definition 6**  
    Let $A\in M_n(S)$.  
    $A$ is called **symmetric** if $A^\top = A$, that is, if $a_{ji}=a_{ij}$ for all $1\leqslant i,j\leqslant n$.  
    $A$ is called **antisymmetric** if $A^\top=-A$, that is, if $a_{ji}=-a_{ij}$ for all $1\leqslant i,j\leqslant n$.

    - **Remark 6.1**  
      If $A$ is antisymmetric then the entries on the diagonal $a_{11},a_{22},\cdots,a_{nn}$ are $0$. Since $a_{ii}=-a_{ii}$, that is, $2a_{ii}=0$ and thus $a_{ii}=0$ for all $1\leqslant i\leqslant n$.

    - **Example 6.2**  
      Let
      $$
      A=\lb
      1 & 2 & 3 \\
      2 & 4 & 5 \\
      3 & 5 & 6
      \eb,B=\lb
      0 & -2 & -3 \\
      2 & 0 & 4 \\
      3 & -4 & 0
      \eb.
      $$
      Then $A$ is symmetric and $B$ is antisymmetric.

    - **Proposition 6.3**  

      1. If $A\in M_n(S)$ then $A+A^\top$ is symmetric and $A-A^\top$ is antisymmetric.
      2. If $A\in M_{m\times n}(S)$ then both $AA^\top$ and $A^\top A$ are symmetric.
      3. If $A$ and $B$ are symmetric matrices of the same size then $AB$ is symmetric, if and only if, $AB=BA$.

      - **Proof 6.3.1**  

        1. $$
           \begin{aligned}
           \left(A+A^\top\right)^\top &= A^\top+\left(A^\top\right)^\top \\
           &= A^\top + A \\
           &= A + A^\top.
           \end{aligned}
           $$
           Therefore $A+A^\top$ is symmetric.  
           $$
           \begin{aligned}
           \left(A-A^\top\right)^\top &= A^\top+\left(-A^\top\right)^\top \\
           &= A^\top - \left(A^\top\right)^\top \\
           &= A^\top-A \\
           &= -\left(A-A^\top\right).
           \end{aligned}
           $$
           Therefore $A-A^\top$ is antisymmetric.

        2. $$
           \begin{aligned}
           \left(AA^\top\right)^\top &= \left(A^\top\right)^\top A^\top \\
           &= AA^\top
           \end{aligned}
           $$
           Therefore $AA^\top$ is symmetric.  
           $$
           \begin{aligned}
           \left(A^\top A\right)^\top &= A^\top\left(A^\top\right)^\top \\
           &= A^\top A
           \end{aligned}
           $$
           Therefore $A^\top A$ is symmetric.  

        3. ($\Longrightarrow$) Suppose that $AB$ is symmetric then
           $$
           \begin{aligned}
           \left(AB\right)^\top &= AB \\
           B^\top A^\top &= AB \\
           BA &= AB
           \end{aligned}
           $$
           Because $A,B$ are symmetric.
           ($\Longleftarrow$) Suppose that $AB=BA$ hence  
           $$
           \begin{aligned}
           \left(AB\right)^\top &= B^\top A^\top \\
           &= BA \\
           &= AB
           \end{aligned}
           $$
           Because $A,B$ are symmetric. Therefore $AB$ is symmetric.
