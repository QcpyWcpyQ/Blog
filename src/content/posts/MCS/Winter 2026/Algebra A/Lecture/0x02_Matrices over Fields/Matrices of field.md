---
title: "Matrices over Fields"
published: 2026-10-12
description: "Matrices over a field: addition, multiplication, identity matrices, inverses, and the criterion for invertibility of a 2 by 2 matrix."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Matrices and entrywise operations

- **Definition 1 (Matrices over a field)**  
  Let $\mathbb{F}$ be a field and let $m,n$ be positive integers. The set of all matrices with $m$ rows, $n$ columns, and entries in $\mathbb{F}$ is denoted by
  $$
  M_{m\times n}(\mathbb{F})
  =\{A=(A_{ij}):A_{ij}\in\mathbb{F},\ 1\leqslant i\leqslant m,\ 1\leqslant j\leqslant n\}.
  $$
  The entry $A_{ij}$ is in row $i$ and column $j$. Two matrices are equal if they have the same size and all corresponding entries are equal.

  - **Example 1.1**
    $$
    A=\begin{pmatrix}
    1&2\\
    0&2\\
    1+i&0
    \end{pmatrix}\in M_{3\times2}(\mathbb{C}),
    \qquad
    B=\begin{pmatrix}
    0&2&3\\
    1&1&5
    \end{pmatrix}\in M_{2\times3}(\mathbb{F}).
    $$
    In the second matrix, integer labels denote elements of the chosen field: for example, $2=1+1$. Their values depend on the field; in $\mathbb{F}_2$, $2=0$.

  **Matrix addition.** For $A,B\in M_{m\times n}(\mathbb{F})$, define $A+B$ entrywise:
  $$
  (A+B)_{ij}=A_{ij}+B_{ij}.
  $$
  Addition requires matrices of the **same size**. For $A,B,C\in M_{m\times n}(\mathbb{F})$, it has the following properties:

  1. **Commutativity:** $A+B=B+A$.
  2. **Associativity:** $(A+B)+C=A+(B+C)$.
  3. **Additive identity:** the zero matrix $0_{m\times n}$ has every entry equal to $0$, and
     $$
     A+0_{m\times n}=A=0_{m\times n}+A.
     $$
  4. **Additive inverse (opposite):** define $(-A)_{ij}=-A_{ij}$. Then
     $$
     A+(-A)=0_{m\times n}=(-A)+A.
     $$

  **Proof.** Each equality follows from the corresponding field property at every entry. For example,
  $$
  \begin{aligned}
  (A+B)_{ij}&=A_{ij}+B_{ij}=B_{ij}+A_{ij}=(B+A)_{ij},\\
  ((A+B)+C)_{ij}&=(A_{ij}+B_{ij})+C_{ij}\\
  &=A_{ij}+(B_{ij}+C_{ij})=(A+(B+C))_{ij}.
  \end{aligned}
  $$
  Similarly, $A_{ij}+0=A_{ij}$ and $A_{ij}+(-A_{ij})=0$ establish the last two properties.

  **Scalar multiplication (notation used below).** For $\alpha\in\mathbb{F}$,
  $$
  (\alpha A)_{ij}=\alpha A_{ij}.
  $$
  This multiplies every entry by the same field element.

## Matrix multiplication

For $A\in M_{m\times n}(\mathbb{F})$ and $B\in M_{n\times k}(\mathbb{F})$, the product is the matrix $AB\in M_{m\times k}(\mathbb{F})$ defined by
$$
\boxed{(AB)_{ij}=\sum_{\ell=1}^{n}A_{i\ell}B_{\ell j}}.
$$
Each entry is obtained by multiplying corresponding entries of **row $i$ of $A$** and **column $j$ of $B$**, then adding. Matrix multiplication is not entrywise multiplication.

The number of columns of the first matrix must equal the number of rows of the second:
$$
(m\times n)(n\times k)\longrightarrow m\times k.
$$

- **Example 1.2 (Multiplication over $\mathbb{F}_5$)**
  $$
  A=\begin{pmatrix}2&3\\0&1\\2&1\end{pmatrix}
  \in M_{3\times2}(\mathbb{F}_5),
  \qquad
  B=\begin{pmatrix}1&1&1\\2&2&2\end{pmatrix}
  \in M_{2\times3}(\mathbb{F}_5).
  $$
  All arithmetic is modulo $5$. Since all columns of $B$ are equal, all columns of $AB$ are equal. The entries in each column are
  $$
  \begin{aligned}
  2\cdot1+3\cdot2&=8\equiv3\pmod5,\\
  0\cdot1+1\cdot2&=2,\\
  2\cdot1+1\cdot2&=4.
  \end{aligned}
  $$
  Therefore
  $$
  AB=\begin{pmatrix}3&3&3\\2&2&2\\4&4&4\end{pmatrix}
  \in M_{3\times3}(\mathbb{F}_5).
  $$

---

- **Properties 1.3 (Matrix multiplication and inverses)**

  1. **Multiplication is generally not commutative.**  
     If $A\in M_{m\times n}(\mathbb{F})$ and $B\in M_{n\times k}(\mathbb{F})$, then $AB$ is defined. If $m\neq k$, the reverse product $BA$ is not defined. If $m=k$, then $BA$ is defined and has size $n\times n$, while $AB$ has size $m\times m$; their sizes can still differ.

     Even when both products have the same size, their entries can differ. For example, over any field, let
     $$
     P=\begin{pmatrix}0&1\\0&0\end{pmatrix},
     \qquad Q=\begin{pmatrix}0&0\\1&0\end{pmatrix}.
     $$
     Then
     $$
     PQ=\begin{pmatrix}1&0\\0&0\end{pmatrix}
     \neq
     \begin{pmatrix}0&0\\0&1\end{pmatrix}=QP.
     $$

  2. **Associativity.**  
     If $A\in M_{m\times n}(\mathbb{F})$, $B\in M_{n\times k}(\mathbb{F})$, and $C\in M_{k\times p}(\mathbb{F})$, then
     $$
     (AB)C=A(BC)\in M_{m\times p}(\mathbb{F}).
     $$

     **Supplementary proof.** For each $i,j$, expand the entries and rearrange the finite sums using the field axioms:
     $$
     \begin{aligned}
     ((AB)C)_{ij}
     &=\sum_{r=1}^{k}\left(\sum_{\ell=1}^{n}A_{i\ell}B_{\ell r}\right)C_{rj}\\
     &=\sum_{\ell=1}^{n}A_{i\ell}\left(\sum_{r=1}^{k}B_{\ell r}C_{rj}\right)\\
     &=(A(BC))_{ij}.
     \end{aligned}
     $$
     Associativity allows us to write $ABC$ without parentheses; it does not allow us to change the order of the factors.

  3. **Distributivity.**  
     Whenever the indicated sums and products are defined,
     $$
     A(B+C)=AB+AC,\qquad (A+B)C=AC+BC.
     $$
     For the first identity, take $A\in M_{m\times n}(\mathbb{F})$ and $B,C\in M_{n\times k}(\mathbb{F})$. For the second, take $A,B\in M_{m\times n}(\mathbb{F})$ and $C\in M_{n\times k}(\mathbb{F})$.

     **Supplementary proof.** Entrywise distributivity in $\mathbb{F}$ gives
     $$
     \begin{aligned}
     (A(B+C))_{ij}
     &=\sum_{\ell=1}^{n}A_{i\ell}(B_{\ell j}+C_{\ell j})\\
     &=\sum_{\ell=1}^{n}A_{i\ell}B_{\ell j}
       +\sum_{\ell=1}^{n}A_{i\ell}C_{\ell j}\\
     &=(AB+AC)_{ij}.
     \end{aligned}
     $$
     Similarly,
     $$
     \begin{aligned}
     ((A+B)C)_{ij}
     &=\sum_{\ell=1}^{n}(A_{i\ell}+B_{i\ell})C_{\ell j}\\
     &=\sum_{\ell=1}^{n}A_{i\ell}C_{\ell j}
       +\sum_{\ell=1}^{n}B_{i\ell}C_{\ell j}\\
     &=(AC+BC)_{ij}.
     \end{aligned}
     $$

  4. **Identity matrices.**  
     The identity matrix $I_n\in M_{n\times n}(\mathbb{F})$ is defined by
     $$
     (I_n)_{ij}=\delta_{ij}=
     \begin{cases}
     1,&i=j,\\
     0,&i\neq j.
     \end{cases}
     $$
     The symbol $\delta_{ij}$ is the **Kronecker delta**. For $A\in M_{m\times n}(\mathbb{F})$,
     $$
     I_mA=A=AI_n.
     $$
     In particular, for square matrices $A\in M_{n\times n}(\mathbb{F})$,
     $$
     I_nA=A=AI_n.
     $$

     **Supplementary proof.** Only the term selected by the Kronecker delta survives:
     $$
     \begin{aligned}
     (I_mA)_{ij}&=\sum_{\ell=1}^{m}\delta_{i\ell}A_{\ell j}=A_{ij},\\
     (AI_n)_{ij}&=\sum_{\ell=1}^{n}A_{i\ell}\delta_{\ell j}=A_{ij}.
     \end{aligned}
     $$

  5. **Left inverses, right inverses, and inverses.**  
     Let $A\in M_{n\times n}(\mathbb{F})$. A matrix $L\in M_{n\times n}(\mathbb{F})$ is a **left inverse** of $A$ if
     $$
     LA=I_n.
     $$
     A matrix $R\in M_{n\times n}(\mathbb{F})$ is a **right inverse** of $A$ if
     $$
     AR=I_n.
     $$
     The names refer to the side on which the inverse multiplies $A$. A **two-sided inverse** satisfies both equations and is denoted by $A^{-1}$:
     $$
     AA^{-1}=I_n=A^{-1}A.
     $$
     A matrix with such an inverse is called **invertible**. The zero matrix has no inverse, since its product with any matrix is zero, whereas $I_n\neq0$. A nonzero matrix need not be invertible either.

## Uniqueness of the inverse

- **Exercise 1.4 (A left and a right inverse must coincide)**  
  If a square matrix $A$ has a left inverse $L$ and a right inverse $R$, prove that $L=R$.

  **Solution.** Since $LA=I_n$ and $AR=I_n$, associativity gives
  $$
  L=LI_n=L(AR)=(LA)R=I_nR=R.
  $$
  Thus their common value is a two-sided inverse of $A$.

  **Consequence: uniqueness.** If $B$ and $C$ are both two-sided inverses of $A$, then $B$ is a left inverse and $C$ is a right inverse. The argument above gives $B=C$, so the notation $A^{-1}$ is well-defined.

## Invertibility of a two-by-two matrix

- **Challenge 1.5 (The $2\times2$ criterion)**  
  Let
  $$
  A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in M_{2\times2}(\mathbb{F}).
  $$
  Define
  $$
  \lambda=ad-bc,\qquad
  B=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.
  $$
  The scalar $\lambda$ is the **determinant** of this $2\times2$ matrix. Then
  $$
  \boxed{A\text{ is invertible}\iff ad-bc\neq0}.
  $$
  When this condition holds,
  $$
  \boxed{A^{-1}=\frac{1}{ad-bc}
  \begin{pmatrix}d&-b\\-c&a\end{pmatrix}}.
  $$
  Here division by a nonzero field element means multiplication by its inverse in $\mathbb{F}$.

  **Proof.** First compute both products, using commutativity of multiplication in the field:
  $$
  \begin{aligned}
  AB&=\begin{pmatrix}
  ad-bc&-ab+ba\\
  cd-dc&-cb+da
  \end{pmatrix}=\lambda I_2,\\[4pt]
  BA&=\begin{pmatrix}
  da-bc&db-bd\\
  -ca+ac&-cb+ad
  \end{pmatrix}=\lambda I_2.
  \end{aligned}
  $$

  **Sufficiency ($\lambda\neq0\Rightarrow A$ is invertible).** Since $\mathbb{F}$ is a field, $\lambda^{-1}$ exists. Scalar multiplication and the product formula give
  $$
  A(\lambda^{-1}B)=\lambda^{-1}(AB)=\lambda^{-1}\lambda I_2=I_2,
  $$
  and
  $$
  (\lambda^{-1}B)A=\lambda^{-1}(BA)=I_2.
  $$
  Therefore $\lambda^{-1}B$ is the inverse of $A$, and Exercise 1.4 shows that it is unique.

  **Necessity ($A$ is invertible $\Rightarrow\lambda\neq0$).** Suppose $A$ has an inverse $C$, so $AC=I_2$. Multiplying on the left by $B$ gives
  $$
  B=B(AC)=(BA)C=\lambda I_2C=\lambda C.
  $$
  If $\lambda=0$, this forces $B=0$. By the definition of $B$, we then have $a=b=c=d=0$, hence $A=0$. But this contradicts $AC=I_2$. Thus $\lambda\neq0$.

  Both directions are proved. In particular, the criterion also covers the zero matrix, which has determinant zero and is not invertible.

---

- **Example 1.6 (Applying the criterion)**  
  For the numerical fractions below, work over $\mathbb{R}$.

  1. Let
     $$
     A=\begin{pmatrix}1&-2\\1&-2\end{pmatrix}.
     $$
     Then
     $$
     \det A=1\cdot(-2)-(-2)\cdot1=0.
     $$
     Thus $A$ is nonzero but has **no inverse**.

  2. Let
     $$
     B=\begin{pmatrix}1&-2\\-1&-2\end{pmatrix}.
     $$
     Then
     $$
     \det B=1\cdot(-2)-(-2)\cdot(-1)=-4\neq0.
     $$
     Therefore
     $$
     B^{-1}=-\frac14\begin{pmatrix}-2&2\\1&1\end{pmatrix}
     =\begin{pmatrix}
     \frac12&-\frac12\\
     -\frac14&-\frac14
     \end{pmatrix}.
     $$
     Direct verification gives
     $$
     BB^{-1}
     =\begin{pmatrix}1&0\\0&1\end{pmatrix}
     =B^{-1}B.
     $$

  **Dependence on the field.** The first example is singular over every field. The second is invertible precisely when $4\neq0$ in the chosen field, with fractions interpreted as field inverses. For example, over $\mathbb{F}_2$ we have $-4=0$, so the second matrix is also singular. Always evaluate the determinant in the field in which the matrix is defined.
