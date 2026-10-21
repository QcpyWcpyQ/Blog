---
title: "Row-reduced Echelon Form"
published: 2026-10-21
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  A matrix $R\in M_{m\times n}(\mathbb{F})$ is in row-reduced echelon form if it satisfies the following conditions.

  1. The first nonzero entry of every nonzero row is $1$. This entry is called a pivot.
  2. Each pivot is the only nonzero entry in its column.
  3. All zero rows are below all nonzero rows.
  4. If the nonzero rows are rows $1,2,\ldots,r$ and their pivots are in columns $k_1,k_2,\ldots,k_r$, then
     $$
     k_1<k_2<\cdots<k_r.
     $$

- **Theorem 1.1**
  Every matrix is row-equivalent to a matrix in row-reduced echelon form.

  - **Proof 1.1.1**
    1. Move all zero rows below the nonzero rows by interchanging rows.
    2. Proceed through the nonzero rows from top to bottom. In each row, make the first available nonzero entry equal to $1$, eliminate all entries below it, and then continue with the next row. This produces echelon form.
    3. Proceed through the pivots from bottom to top and eliminate all entries above each pivot. The resulting matrix is in row-reduced echelon form.

- **Example 1.2**
  $$
  \begin{aligned}
  A
  &=\begin{pmatrix}
  0&2&-1&3&4\\
  1&0&1&1&0\\
  2&2&0&-1&0\\
  1&2&0&2&4
  \end{pmatrix}
  \\[4pt]
  &\sim
  \begin{pmatrix}
  1&0&1&1&0\\
  0&1&-\frac12&\frac32&2\\
  2&2&0&-1&0\\
  1&2&0&2&4
  \end{pmatrix}
  \\[4pt]
  &\sim
  \begin{pmatrix}
  1&0&1&1&0\\
  0&1&-\frac12&\frac32&2\\
  0&0&-1&-6&-4\\
  0&0&0&-2&0
  \end{pmatrix}
  \\[4pt]
  &\sim
  \begin{pmatrix}
  1&0&1&1&0\\
  0&1&-\frac12&\frac32&2\\
  0&0&1&6&4\\
  0&0&0&1&0
  \end{pmatrix}
  \\[4pt]
  &\sim
  \begin{pmatrix}
  1&0&1&0&0\\
  0&1&-\frac12&0&2\\
  0&0&1&0&4\\
  0&0&0&1&0
  \end{pmatrix}
  \\[4pt]
  &\sim
  \begin{pmatrix}
  1&0&0&0&-4\\
  0&1&0&0&4\\
  0&0&1&0&4\\
  0&0&0&1&0
  \end{pmatrix}.
  \end{aligned}
  $$

- **Remark 1.3**
  Let $A\in M_{m\times n}(\mathbb{F})$ be in row-reduced echelon form. If $t$ is the number of pivots, then
  $$
  t\leqslant m\qquad\text{and}\qquad t\leqslant n.
  $$

- **Theorem 1.4**
  Let $A\in M_{m\times n}(\mathbb{F})$ with $m<n$. Then the homogeneous system $AX=0$ has a nontrivial solution.

  - **Proof 1.4.1**
    Let $R$ be a row-reduced echelon form matrix that is row-equivalent to $A$. The systems $AX=0$ and $RX=0$ are equivalent. Since $m<n$ and the number of pivots satisfies
    $$
    t\leqslant m<n,
    $$
    the matrix $R$ has a column without a pivot. Assigning a nonzero value to the corresponding unknown and solving for the pivot variables produces a nontrivial solution.

- **Theorem 1.5**
  Let $A\in M_{n\times n}(\mathbb{F})$. Then $A$ is row-equivalent to $I_n$ if and only if $AX=0$ has only the trivial solution.

  - **Proof 1.5.1**
    **Forward direction.** If $A$ is row-equivalent to $I_n$, then $AX=0$ has the same solutions as
    $$
    I_nX=0,
    $$
    whose only solution is $X=0$.

    **Reverse direction.** Let $R$ be a row-reduced echelon form matrix that is row-equivalent to $A$. If $R\neq I_n$, then $R$ cannot have a pivot in every column, since the row-reduced echelon form conditions would otherwise force $R=I_n$. Thus $R$ has a column without a pivot. As in the proof of Theorem 1.4, this gives a nontrivial solution of $RX=0$, and therefore of $AX=0$, which is a contradiction. Hence $R=I_n$.

- **Notation 1.6**
  The unknown variables corresponding to pivot columns are called determined variables.

- **Theorem 1.7**
  Every solution of $AX=b$ is of the form
  $$
  X=X_0+Y,
  $$
  where $X_0$ is a fixed solution of $AX=b$ and $Y$ is a solution of $AX=0$.

  - **Proof 1.7.1**
    Let $Y$ be a solution of $AX=0$. Then
    $$
    A(X_0+Y)=AX_0+AY=b+0=b,
    $$
    so $X_0+Y$ is a solution of $AX=b$.

    Conversely, let $X'$ be a solution of $AX=b$. Then
    $$
    A(X'-X_0)=AX'-AX_0=b-b=0.
    $$
    Therefore $Y:=X'-X_0$ is a solution of $AX=0$, and
    $$
    X'=X_0+Y.
    $$

- **Remark 1.8**
  Consider $AX=b$, where $b\neq0$, and suppose row reduction transforms the augmented matrix as follows.
  $$
  (A\mid b)\sim(R\mid b').
  $$
  The system has at least one solution if and only if every zero row of $R$ corresponds to a zero entry of $b'$.

---

- **Definition 2**
  A square matrix $E\in M_{n\times n}(\mathbb F)$ is elementary if it is of the form $e(I_n)$ for some elementary row operation $e$.

  - **Example 2.1**
    $$
    \begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad
    \begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
    \begin{pmatrix}1&1\\0&1\end{pmatrix}.
    $$

- **Observation 2.2**
  Given an elementary row operation $e$, let $E=e(I_n)$. Then, for every matrix $A$ with $n$ rows,
  $$
  e(A)=EA.
  $$
  Therefore, if $R$ is row-equivalent to $A$, then
  $$
  R=E_k\cdots E_1A,
  $$
  where each $E_i$ is elementary.

  - **Proof 2.2.1**
    For each of the three types of elementary row operations, multiplying $A$ on the left by $e(I_n)$ performs the same row operation on $A$. Hence $e(A)=EA$. Applying this identity successively to the row operations that transform $A$ into $R$ gives
    $$
    R=E_k\cdots E_1A.
    $$

---

- **Definition 3**
  Let $A\in M_{n\times n}(\mathbb F)$. A matrix $B\in M_{n\times n}(\mathbb F)$ is

  1. a left inverse of $A$ if $BA=I_n$;
  2. a right inverse of $A$ if $AB=I_n$;
  3. an inverse of $A$ if $BA=I_n=AB$. In this case, $A$ is said to be invertible.

- **Remark 3.1**
  1. If $A$ is invertible, then its inverse is unique. Hence it is denoted by $A^{-1}$.
  2. If $B$ is a left inverse of $A$ and $C$ is a right inverse of $A$, then $B=C$ and $A$ is invertible.
  3. If $A$ and $B$ are invertible, then $AB$ is invertible and
     $$
     (AB)^{-1}=B^{-1}A^{-1}.
     $$
  4. A product of $k$ invertible matrices is invertible.

  - **Proof 3.1.1**
    1. Suppose that $B$ and $C$ are both inverses of $A$. Then
       $$
       B=BI_n=B(AC)=(BA)C=I_nC=C.
       $$
       Thus the inverse of $A$ is unique.
    2. If $BA=I_n$ and $AC=I_n$, then the same calculation gives
       $$
       B=B(AC)=(BA)C=C.
       $$
       Hence $B=C$ is an inverse of $A$.
    3. We have
       $$
       (AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=I_n
       $$
       and
       $$
       (B^{-1}A^{-1})(AB)=B^{-1}(A^{-1}A)B=I_n.
       $$
       Therefore $(AB)^{-1}=B^{-1}A^{-1}$.
    4. Applying part 3 repeatedly shows that $A_1A_2\cdots A_k$ is invertible, with
       $$
       (A_1A_2\cdots A_k)^{-1}=A_k^{-1}\cdots A_2^{-1}A_1^{-1}.
       $$

- **Proposition 3.2**
  A product of elementary matrices is invertible.

  - **Proof 3.2.1**
    Let $E=e(I_n)$ be an elementary matrix. There is an inverse elementary row operation $e'$ such that
    $$
    e'(e(A))=A\qquad\text{and}\qquad e(e'(A))=A.
    $$
    Set $E'=e'(I_n)$. By Observation 2.2,
    $$
    E'E=e'(E)=e'(e(I_n))=I_n
    $$
    and
    $$
    EE'=e(E')=e(e'(I_n))=I_n.
    $$
    Thus every elementary matrix is invertible. By Remark 3.1, a product of elementary matrices is invertible.

- **Theorem 3.3**
  Let $A\in M_{n\times n}(\mathbb F)$. The following statements are equivalent.

  1. $A$ is invertible.
  2. $A$ is row-equivalent to $I_n$.
  3. $A$ is a product of elementary matrices.

  - **Proof 3.3.1**
    **$(1\Rightarrow2)$.** Let $R$ be the row-reduced echelon form of $A$. By Observation 2.2,
    $$
    R=E_k\cdots E_1A.
    $$
    Proposition 3.2 and Remark 3.1 imply that $R$ is invertible. If $R\neq I_n$, then $R$ has fewer than $n$ pivots and hence has a zero row. This is impossible for an invertible matrix, since the corresponding row of $RR^{-1}$ would be zero. Therefore $R=I_n$.

    **$(2\Rightarrow3)$.** If $A$ is row-equivalent to $I_n$, then
    $$
    I_n=E_k\cdots E_1A.
    $$
    Hence
    $$
    A=E_1^{-1}\cdots E_k^{-1}.
    $$
    The inverse of an elementary matrix is elementary, so $A$ is a product of elementary matrices.

    **$(3\Rightarrow1)$.** By Proposition 3.2, every product of elementary matrices is invertible. Therefore $A$ is invertible.

- **Theorem 3.4**
  Let $A\in M_{n\times n}(\mathbb F)$. The following statements are equivalent.

  1. $A$ is invertible.
  2. $AX=0$ has only the trivial solution.
  3. $AX=b$ has a solution for every $b\in\mathbb F^n$.

  - **Proof 3.4.1**
    **$(1\Rightarrow2)$.** If $AX=0$, then
    $$
    X=A^{-1}AX=A^{-1}0=0.
    $$

    **$(1\Rightarrow3)$.** For every $b\in\mathbb F^n$, let $X=A^{-1}b$. Then
    $$
    AX=A(A^{-1}b)=b.
    $$

    **$(2\Rightarrow1)$.** By Theorem 1.5, $A$ is row-equivalent to $I_n$. Therefore, by Theorem 3.3, $A$ is invertible.

    **$(3\Rightarrow1)$.** Let $R=PA$ be the row-reduced echelon form of $A$, where $P$ is a product of elementary matrices. For any $c\in\mathbb F^n$, set $b=P^{-1}c$. By assumption, there is some $X$ such that $AX=b$. Therefore
    $$
    RX=PAX=Pb=c.
    $$
    Thus $RX=c$ has a solution for every $c\in\mathbb F^n$. If the $i$-th row of $R$ were zero, then $RX=e_i$ would have no solution. Hence $R$ has no zero rows. Since $R$ is an $n\times n$ matrix in row-reduced echelon form, it follows that $R=I_n$. By Theorem 3.3, $A$ is invertible.

- **Remark 3.5**
  The matrix $A$ is invertible if and only if $AX=b$ has a unique solution for every $b\in\mathbb F^n$.

  - **Proof 3.5.1**
    If $A$ is invertible, then $X=A^{-1}b$ is a solution. If $X'$ is another solution, then
    $$
    X'=A^{-1}AX'=A^{-1}b=X,
    $$
    so the solution is unique. Conversely, if $AX=b$ has a unique solution for every $b$, then it has a solution for every $b$. Theorem 3.4 therefore implies that $A$ is invertible.
