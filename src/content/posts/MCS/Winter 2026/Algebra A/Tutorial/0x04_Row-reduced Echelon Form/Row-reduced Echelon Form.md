---
title: "Row-reduced Echelon Form"
published: 2026-10-22
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Let
  $$
  M=\begin{pmatrix}
  1&2&0\\
  3&4&1\\
  5&1&7
  \end{pmatrix}.
  $$

  1. Find a row-reduced echelon matrix equivalent to $M$.
  2. For each elementary row operation performed in item 1, find its corresponding elementary matrix.
  3. Determine whether $M$ is invertible. If it is, find its inverse using the elementary matrices from item 2.

  - **Solution 1.1**

    **1. Row reduction.** Applying elementary row operations gives
    $$
    \begin{aligned}
    M
    &\sim
    \begin{pmatrix}
    1&2&0\\
    0&-2&1\\
    5&1&7
    \end{pmatrix}
    \sim
    \begin{pmatrix}
    1&2&0\\
    0&-2&1\\
    0&-9&7
    \end{pmatrix}\\[4pt]
    &\sim
    \begin{pmatrix}
    1&2&0\\
    0&1&-\frac12\\
    0&-9&7
    \end{pmatrix}
    \sim
    \begin{pmatrix}
    1&0&1\\
    0&1&-\frac12\\
    0&-9&7
    \end{pmatrix}\\[4pt]
    &\sim
    \begin{pmatrix}
    1&0&1\\
    0&1&-\frac12\\
    0&0&\frac52
    \end{pmatrix}
    \sim
    \begin{pmatrix}
    1&0&1\\
    0&1&-\frac12\\
    0&0&1
    \end{pmatrix}\\[4pt]
    &\sim
    \begin{pmatrix}
    1&0&0\\
    0&1&-\frac12\\
    0&0&1
    \end{pmatrix}
    \sim
    \begin{pmatrix}
    1&0&0\\
    0&1&0\\
    0&0&1
    \end{pmatrix}
    =I_3.
    \end{aligned}
    $$
    Thus the row-reduced echelon form of $M$ is $I_3$.

    **2. Elementary matrices.** The row operations used above and their corresponding elementary matrices are

    1. $e_1:\ R_2\leftarrow R_2-3R_1$
       $$
       E_1=\begin{pmatrix}
       1&0&0\\
       -3&1&0\\
       0&0&1
       \end{pmatrix}.
       $$
    2. $e_2:\ R_3\leftarrow R_3-5R_1$
       $$
       E_2=\begin{pmatrix}
       1&0&0\\
       0&1&0\\
       -5&0&1
       \end{pmatrix}.
       $$
    3. $e_3:\ R_2\leftarrow-\frac12R_2$
       $$
       E_3=\begin{pmatrix}
       1&0&0\\
       0&-\frac12&0\\
       0&0&1
       \end{pmatrix}.
       $$
    4. $e_4:\ R_1\leftarrow R_1-2R_2$
       $$
       E_4=\begin{pmatrix}
       1&-2&0\\
       0&1&0\\
       0&0&1
       \end{pmatrix}.
       $$
    5. $e_5:\ R_3\leftarrow R_3+9R_2$
       $$
       E_5=\begin{pmatrix}
       1&0&0\\
       0&1&0\\
       0&9&1
       \end{pmatrix}.
       $$
    6. $e_6:\ R_3\leftarrow\frac25R_3$
       $$
       E_6=\begin{pmatrix}
       1&0&0\\
       0&1&0\\
       0&0&\frac25
       \end{pmatrix}.
       $$
    7. $e_7:\ R_1\leftarrow R_1-R_3$
       $$
       E_7=\begin{pmatrix}
       1&0&-1\\
       0&1&0\\
       0&0&1
       \end{pmatrix}.
       $$
    8. $e_8:\ R_2\leftarrow R_2+\frac12R_3$
       $$
       E_8=\begin{pmatrix}
       1&0&0\\
       0&1&\frac12\\
       0&0&1
       \end{pmatrix}.
       $$

    **3. Invertibility and inverse.** Since $M$ is row-equivalent to $I_3$, Theorem 3.3 implies that $M$ is invertible. Observation 2.2 gives
    $$
    E_8E_7E_6E_5E_4E_3E_2E_1M=I_3.
    $$
    Therefore
    $$
    \begin{aligned}
    M^{-1}
    &=E_8E_7E_6E_5E_4E_3E_2E_1\\[4pt]
    &=\begin{pmatrix}
    -\frac{27}{5}&\frac{14}{5}&-\frac25\\[4pt]
    \frac{16}{5}&-\frac75&\frac15\\[4pt]
    \frac{17}{5}&-\frac95&\frac25
    \end{pmatrix}.
    \end{aligned}
    $$

---

- **Exercise 2**
  Let
  $$
  A=\begin{pmatrix}
  2&1\\
  1&1
  \end{pmatrix}.
  $$

  1. Find $A^{-1}$ by performing row operations on the augmented matrix $\left(A\mid I_2\right)$.
  2. Verify the result from item 1 by calculating $AA^{-1}$.

  - **Solution 2.1**

    **1. Finding the inverse.** Applying the same elementary row operations to both sides of the augmented matrix gives
    $$
    \begin{aligned}
    \left(
    \begin{array}{cc|cc}
    2&1&1&0\\
    1&1&0&1
    \end{array}
    \right)
    &\sim
    \left(
    \begin{array}{cc|cc}
    1&1&0&1\\
    2&1&1&0
    \end{array}
    \right)\\[4pt]
    &\sim
    \left(
    \begin{array}{cc|cc}
    1&1&0&1\\
    0&-1&1&-2
    \end{array}
    \right)\\[4pt]
    &\sim
    \left(
    \begin{array}{cc|cc}
    1&1&0&1\\
    0&1&-1&2
    \end{array}
    \right)\\[4pt]
    &\sim
    \left(
    \begin{array}{cc|cc}
    1&0&1&-1\\
    0&1&-1&2
    \end{array}
    \right).
    \end{aligned}
    $$
    Hence
    $$
    A^{-1}=\begin{pmatrix}
    1&-1\\
    -1&2
    \end{pmatrix}.
    $$

    **2. Verification.** We have
    $$
    \begin{aligned}
    AA^{-1}
    &=
    \begin{pmatrix}
    2&1\\
    1&1
    \end{pmatrix}
    \begin{pmatrix}
    1&-1\\
    -1&2
    \end{pmatrix}\\[4pt]
    &=
    \begin{pmatrix}
    2-1&-2+2\\
    1-1&-1+2
    \end{pmatrix}
    =
    \begin{pmatrix}
    1&0\\
    0&1
    \end{pmatrix}
    =I_2.
    \end{aligned}
    $$
