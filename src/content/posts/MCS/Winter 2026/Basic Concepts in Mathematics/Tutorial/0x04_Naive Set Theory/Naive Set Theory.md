---
title: "Naive Set Theory"
published: 2026-11-04
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**
  Is it true that
  $$
  (A\setminus B)\setminus C
  =(A\setminus C)\setminus B?
  $$

  - **Solution 1.1**
    Yes. Let $x$ be arbitrary. Then
    $$
    \begin{aligned}
    x\in(A\setminus B)\setminus C
    &\iff x\in A,\ x\notin B,\text{ and }x\notin C\\
    &\iff x\in A,\ x\notin C,\text{ and }x\notin B\\
    &\iff x\in(A\setminus C)\setminus B.
    \end{aligned}
    $$
    Therefore,
    $$
    (A\setminus B)\setminus C
    =(A\setminus C)\setminus B.
    $$

---

- **Exercise 2**
  Is it true that
  $$
  (A\setminus B)\setminus C
  =(A\setminus C)\setminus(B\setminus C)?
  $$

  - **Solution 2.1**
    Yes. Let $x$ be arbitrary. Then
    $$
    \begin{aligned}
    x\in(A\setminus C)\setminus(B\setminus C)
    &\iff x\in A,\ x\notin C,
      \text{ and }x\notin B\setminus C\\
    &\iff x\in A,\ x\notin C,
      \text{ and }x\notin B\\
    &\iff x\in(A\setminus B)\setminus C.
    \end{aligned}
    $$
    Therefore,
    $$
    (A\setminus B)\setminus C
    =(A\setminus C)\setminus(B\setminus C).
    $$

---

- **Exercise 3**
  Show that
  $$
  (A\cap B)\cup C
  =(A\cup C)\cap(B\cup C),
  $$
  and use this identity to prove that
  $$
  \begin{aligned}
  (A\cap B)\cup(C\cap D)
  ={}&(A\cup C)\cap(B\cup C)\\
     &\cap(A\cup D)\cap(B\cup D).
  \end{aligned}
  $$

  - **Solution 3.1**
    Let $x$ be arbitrary. By the distributive law for logical operations,
    $$
    \begin{aligned}
    x\in(A\cap B)\cup C
    &\iff (x\in A\text{ and }x\in B)
      \text{ or }x\in C\\
    &\iff (x\in A\text{ or }x\in C)
      \text{ and }(x\in B\text{ or }x\in C)\\
    &\iff x\in(A\cup C)\cap(B\cup C).
    \end{aligned}
    $$
    Hence,
    $$
    (A\cap B)\cup C
    =(A\cup C)\cap(B\cup C).
    $$

    Applying this identity repeatedly gives
    $$
    \begin{aligned}
    (A\cap B)\cup(C\cap D)
    &=\bigl((A\cap B)\cup C\bigr)
      \cap\bigl((A\cap B)\cup D\bigr)\\
    &=\bigl((A\cup C)\cap(B\cup C)\bigr)
      \cap\bigl((A\cup D)\cap(B\cup D)\bigr)\\
    &=(A\cup C)\cap(B\cup C)
      \cap(A\cup D)\cap(B\cup D).
    \end{aligned}
    $$
