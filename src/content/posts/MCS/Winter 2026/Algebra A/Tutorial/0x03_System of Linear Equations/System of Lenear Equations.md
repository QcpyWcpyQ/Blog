---
title: "System of Linear Equations"
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
  A=\begin{pmatrix}
  0&2&4&2\\
  1&1&1&2\\
  2&2&2&4
  \end{pmatrix}\in M_{3\times4}(\mathbb R).
  $$

  1. Use elementary row operations to find a row-reduced echelon matrix equivalent to $A$.
  2. Find the solution set of the corresponding homogeneous system of linear equations.

  - **Solution 1.1**

    Interchanging the first two rows, eliminating the third row, and then reducing above the second pivot gives
    $$
    \begin{aligned}
    A
    &\sim
    \begin{pmatrix}
    1&1&1&2\\
    0&2&4&2\\
    2&2&2&4
    \end{pmatrix}
    \sim
    \begin{pmatrix}
    1&1&1&2\\
    0&1&2&1\\
    0&0&0&0
    \end{pmatrix}\\[4pt]
    &\sim
    \begin{pmatrix}
    1&0&-1&1\\
    0&1&2&1\\
    0&0&0&0
    \end{pmatrix}.
    \end{aligned}
    $$
    Hence the homogeneous system $AX=0$ is equivalent to
    $$
    \begin{cases}
    x_1-x_3+x_4=0,\\
    x_2+2x_3+x_4=0.
    \end{cases}
    $$
    The variables $x_3$ and $x_4$ are free. Set $x_3=s$ and $x_4=t$. Then
    $$
    x_1=s-t,\qquad x_2=-2s-t.
    $$
    Therefore the solution set is
    $$
    \boxed{
    S=\left\{
    \begin{pmatrix}s-t\\-2s-t\\s\\t\end{pmatrix}
    :s,t\in\mathbb R
    \right\}.
    }
    $$

---

- **Exercise 2**
  Consider the matrix
  $$
  A_c=\begin{pmatrix}
  1&2&0\\
  0&1&1\\
  1&3&c
  \end{pmatrix},\qquad c\in\mathbb R.
  $$
  For which values of $c$ is $A_c$ row-equivalent to $I_3$? For the remaining value, find all solutions of $A_cX=0$.

  - **Solution 2.1**

    Subtracting the first row from the third and then subtracting the second row from the third gives
    $$
    \begin{aligned}
    A_c
    &\sim
    \begin{pmatrix}
    1&2&0\\
    0&1&1\\
    0&1&c
    \end{pmatrix}
    \sim
    \begin{pmatrix}
    1&2&0\\
    0&1&1\\
    0&0&c-1
    \end{pmatrix}.
    \end{aligned}
    $$
    If $c\neq1$, the matrix has a pivot in every column, so it is row-equivalent to $I_3$.

    If $c=1$, its row-reduced echelon form is
    $$
    \begin{pmatrix}
    1&0&-2\\
    0&1&1\\
    0&0&0
    \end{pmatrix}.
    $$
    Thus
    $$
    x_1-2x_3=0,\qquad x_2+x_3=0.
    $$
    Setting $x_3=t$ gives $x_1=2t$ and $x_2=-t$. Therefore
    $$
    \boxed{
    A_c\sim I_3\iff c\neq1,\qquad
    S_{1}=\left\{
    t\begin{pmatrix}2\\-1\\1\end{pmatrix}:t\in\mathbb R
    \right\}.
    }
    $$

---

- **Exercise 3**
  For a real parameter $\lambda$, consider
  $$
  T_\lambda:\begin{cases}
  x+y+z=1,\\
  2x+y+3z=4,\\
  3x+2y+4z=\lambda.
  \end{cases}
  $$

  1. Write the augmented matrix and use elementary row operations to determine for which values of $\lambda$ the system $T_\lambda$ is consistent.
  2. For every consistent system $T_\lambda$, find the solution set $S_\lambda$.

  - **Solution 3.1**

    The augmented matrix reduces as follows
    $$
    \begin{aligned}
    \left(
    \begin{array}{ccc|c}
    1&1&1&1\\
    2&1&3&4\\
    3&2&4&\lambda
    \end{array}
    \right)
    &\sim
    \left(
    \begin{array}{ccc|c}
    1&1&1&1\\
    0&-1&1&2\\
    0&-1&1&\lambda-3
    \end{array}
    \right)\\[4pt]
    &\sim
    \left(
    \begin{array}{ccc|c}
    1&1&1&1\\
    0&-1&1&2\\
    0&0&0&\lambda-5
    \end{array}
    \right).
    \end{aligned}
    $$
    The last row represents the equation
    $$
    0=\lambda-5.
    $$
    Hence $T_\lambda$ is consistent if and only if $\lambda=5$.

    For $\lambda=5$, further reduction gives
    $$
    \left(
    \begin{array}{ccc|c}
    1&0&2&3\\
    0&1&-1&-2\\
    0&0&0&0
    \end{array}
    \right).
    $$
    Set the free variable $z=t$. Then
    $$
    x=3-2t,\qquad y=t-2.
    $$
    Therefore
    $$
    \boxed{
    S_5=\left\{
    \begin{pmatrix}3-2t\\t-2\\t\end{pmatrix}:t\in\mathbb R
    \right\}.
    }
    $$

---

- **Exercise 4**
  Let $a,b\in\mathbb R$. Consider the system of linear equations
  $$
  T_{a,b}:\begin{cases}
  x+y+z+w=4,\\
  x+2y+z+2w=5,\\
  x+y+2z+w=6,\\
  3x+4y+4z+aw=b.
  \end{cases}
  $$
  Find the solution set $S_{a,b}$ for each pair $a,b\in\mathbb R$.

  - **Solution 4.1**

    Row reduction of the augmented matrix gives
    $$
    \begin{aligned}
    \left(
    \begin{array}{cccc|c}
    1&1&1&1&4\\
    1&2&1&2&5\\
    1&1&2&1&6\\
    3&4&4&a&b
    \end{array}
    \right)
    &\sim
    \left(
    \begin{array}{cccc|c}
    1&1&1&1&4\\
    0&1&0&1&1\\
    0&0&1&0&2\\
    0&1&1&a-3&b-12
    \end{array}
    \right)\\[4pt]
    &\sim
    \left(
    \begin{array}{cccc|c}
    1&0&0&0&1\\
    0&1&0&1&1\\
    0&0&1&0&2\\
    0&0&0&a-4&b-15
    \end{array}
    \right).
    \end{aligned}
    $$

    If $a\neq4$, then
    $$
    w=\frac{b-15}{a-4},\qquad
    y=1-w=\frac{a-b+11}{a-4},\qquad
    x=1,\qquad z=2.
    $$
    Hence
    $$
    \boxed{
    S_{a,b}=\left\{
    \begin{pmatrix}
    1\\[2pt]
    \dfrac{a-b+11}{a-4}\\[6pt]
    2\\[2pt]
    \dfrac{b-15}{a-4}
    \end{pmatrix}
    \right\}\qquad(a\neq4).
    }
    $$

    If $a=4$, the last row becomes
    $$
    \left(0\quad0\quad0\quad0\mid b-15\right).
    $$
    Therefore there are two remaining cases

    1. If $a=4$ and $b\neq15$, the system is inconsistent, so
       $$
       \boxed{S_{4,b}=\varnothing.}
       $$
    2. If $a=4$ and $b=15$, the variable $w$ is free. Setting $w=t$ gives
       $$
       x=1,\qquad y=1-t,\qquad z=2.
       $$
       Thus
       $$
       \boxed{
       S_{4,15}=\left\{
       \begin{pmatrix}1\\1-t\\2\\t\end{pmatrix}:t\in\mathbb R
       \right\}.
       }
       $$
