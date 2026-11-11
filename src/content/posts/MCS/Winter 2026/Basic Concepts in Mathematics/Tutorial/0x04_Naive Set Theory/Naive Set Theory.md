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

---

- **Exercise 4**
  Express $\cup$ and $\setminus$ using $\cap$ and $\Delta$.

  - **Solution 4.1**
    We have
    $$
    A\cup B
    =(A\mathbin{\Delta}B)\mathbin{\Delta}(A\cap B)
    $$
    and
    $$
    A\setminus B
    =A\mathbin{\Delta}(A\cap B).
    $$

    To verify the first identity, observe that $A\mathbin{\Delta}B$ and $A\cap B$ are disjoint. Hence, for every $x$,
    $$
    \begin{aligned}
    x\in(A\mathbin{\Delta}B)\mathbin{\Delta}(A\cap B)
    &\iff x\in A\mathbin{\Delta}B
      \text{ or }x\in A\cap B\\
    &\iff x\in A\text{ or }x\in B\\
    &\iff x\in A\cup B.
    \end{aligned}
    $$

    Since $A\cap B\subseteq A$, for the second identity we have
    $$
    \begin{aligned}
    x\in A\mathbin{\Delta}(A\cap B)
    &\iff x\in A\text{ and }x\notin A\cap B\\
    &\iff x\in A\text{ and }x\notin B\\
    &\iff x\in A\setminus B.
    \end{aligned}
    $$

---

- **Exercise 5**  
  Show that the following equalities hold.

  1. $(A\mathbin{\Delta}B)\setminus C=(A\cup C)\mathbin{\Delta}(B\cup C)$.
  2. $A\setminus(B\mathbin{\Delta}C)=[A\setminus(B\cup C)]\cup(A\cap B\cap C)$.

  - **Solution 5.1**

    **(a)** Let $x$ be arbitrary. Then

    $$
    \begin{aligned}
    x\in(A\cup C)\mathbin{\Delta}(B\cup C)
    &\iff
    \bigl(x\in A\cup C\text{ and }x\notin B\cup C\bigr)\\
    &\qquad\text{or }
    \bigl(x\in B\cup C\text{ and }x\notin A\cup C\bigr)\\
    &\iff
    \bigl(x\in A,\ x\notin B,\text{ and }x\notin C\bigr)\\
    &\qquad\text{or }
    \bigl(x\in B,\ x\notin A,\text{ and }x\notin C\bigr)\\
    &\iff x\in(A\mathbin{\Delta}B)\setminus C.
    \end{aligned}
    $$

    Therefore,

    $$
    (A\mathbin{\Delta}B)\setminus C
    =(A\cup C)\mathbin{\Delta}(B\cup C).
    $$

    **(b)** Let $x$ be arbitrary. Then

    $$
    \begin{aligned}
    x\in A\setminus(B\mathbin{\Delta}C)
    &\iff x\in A\text{ and }x\notin B\mathbin{\Delta}C\\
    &\iff x\in A\text{ and }
    \bigl((x\notin B\text{ and }x\notin C)
    \text{ or }(x\in B\text{ and }x\in C)\bigr)\\
    &\iff
    \bigl(x\in A\setminus(B\cup C)\bigr)
    \text{ or }\bigl(x\in A\cap B\cap C\bigr)\\
    &\iff
    x\in[A\setminus(B\cup C)]\cup(A\cap B\cap C).
    \end{aligned}
    $$

    Therefore,

    $$
    A\setminus(B\mathbin{\Delta}C)
    =[A\setminus(B\cup C)]\cup(A\cap B\cap C).
    $$
