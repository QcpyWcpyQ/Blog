---
title: "Week 1"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Week 1

- **Problem 1: Conjunction introduction.**
  Let $a, b \in \mathbb{R}$. Suppose that
  $$
  a + b = 8, \quad ab = 12.
  $$
  Prove that
  $$
  a > 0, \quad b > 0 \quad \text{and} \quad |a - b| = 4.
  $$

    - **Solution 1.1**
      Since $a$ and $b$ satisfy $a+b=8$ and $ab=12$, according to Vieta's formulas, they are the roots of the quadratic equation:
      $$
      t^2 - 8t + 12 = 0
      $$
      Factoring the equation gives:
      $$
      (t - 2)(t - 6) = 0
      $$
      Thus, the roots are $2$ and $6$. This implies that either $\{a, b\} = \{2, 6\}$.
      
      In both cases, we can check each part of the conjunction:
      1. $a > 0$ and $b > 0$ since both $2 > 0$ and $6 > 0$ are true.
      2. $|a - b| = |2 - 6| = |-4| = 4$ (or $|6 - 2| = 4$).
      
      By conjunction introduction, since all components are true, the statement holds:
      $$
      a > 0 \land b > 0 \land |a - b| = 4
      $$

---

- **Problem 2: Disjunction introduction.**
  Consider the equation
  $$
  x^3 - ax = 0,
  $$
  where $a \in \mathbb{R}$.
  Prove that, for every value of $a$, the equation has either exactly one or exactly three distinct real solutions. Determine for which values of $a$ each case occurs.
  
    - **Solution 2.1**
      We can factor the given equation as:
      $$
      x(x^2 - a) = 0
      $$
      This gives one guaranteed real solution:
      $$
      x = 0
      $$
      The remaining solutions depend on the quadratic part:
      $$
      x^2 = a
      $$
      
      We separate this into cases based on the value of $a$:
      * Case 1: If $a \leqslant 0$, then $x^2 = a$ has no distinct real solutions other than $x=0$ (when $a=0$, it is a repeated root). Thus, there is exactly one real solution.
      * Case 2: If $a > 0$, then $x^2 = a$ yields two distinct real solutions: $x = \sqrt{a}$ and $x = -\sqrt{a}$. Since $a \neq 0$, these are distinct from $x = 0$. Thus, there are exactly three distinct real solutions.
      
      Therefore, for any $a \in \mathbb{R}$, the equation has either exactly one solution (when $a \leqslant 0$) or exactly three solutions (when $a > 0$).

---

- **Problem 3: Disjunction elimination: proof by cases.**
  Let $a_1, a_2, \dots, a_5 \in \mathbb{Z}$. Prove that among these five integers, one can always choose four numbers whose sum is even.
  
    - **Solution 3.1**
      Let $K$ be the number of odd integers among the five given integers $a_1, a_2, \dots, a_5$. 
      The number of even integers is $5 - K$. 
      The possible values for $K$ range from $0$ to $5$. We analyze the problem by partitioning $K$ into the following three cases:
      
      * **Case 1:** $K \leqslant 1$. 
        The number of even integers is $5 - K \geqslant 4$. We can choose 4 even numbers, which can be written as $2n_1, 2n_2, 2n_3, 2n_4$ for some $n_1, n_2, n_3, n_4 \in \mathbb{Z}$. Their sum is:
        $$
        2n_1 + 2n_2 + 2n_3 + 2n_4 = 2(n_1 + n_2 + n_3 + n_4)
        $$
        Since $n_1 + n_2 + n_3 + n_4 \in \mathbb{Z}$, the sum is even.
        
      * **Case 2:** $K \geqslant 4$. 
        There are at least 4 odd numbers available. We can choose 4 odd numbers, which can be written as $2n_1+1, 2n_2+1, 2n_3+1, 2n_4+1$ for some $n_1, n_2, n_3, n_4 \in \mathbb{Z}$. Their sum is:
        $$
        (2n_1 + 1) + (2n_2 + 1) + (2n_3 + 1) + (2n_4 + 1) = 2(n_1 + n_2 + n_3 + n_4 + 2)
        $$
        Since $n_1 + n_2 + n_3 + n_4 + 2 \in \mathbb{Z}$, the sum is even.
        
      * **Case 3: **$2 \leqslant K \leqslant 3$. 
        There are at least 2 odd numbers and at least 2 even numbers available. We can choose 2 even numbers ($2n_1, 2n_2$) and 2 odd numbers ($2n_3+1, 2n_4+1$) for some $n_1, n_2, n_3, n_4 \in \mathbb{Z}$. Their sum is:
        $$
        2n_1 + 2n_2 + (2n_3 + 1) + (2n_4 + 1) = 2(n_1 + n_2 + n_3 + n_4 + 1)
        $$
        Since $n_1 + n_2 + n_3 + n_4 + 1 \in \mathbb{Z}$, the sum is even.
      
      Since all possible values of $K$ fall into one of these three cases, and each case mathematically guarantees an even sum, the proof is complete.

---

- **Problem 4**
  Construct a truth table and prove that
  $$
  (P \to Q) \land (P \to R) \equiv P \to (Q \land R).
  $$

    - **Solution 4.1**
      The truth table for both expressions is constructed below:
      $$
      \begin{array}{c|c|c|c|c|c|c|c}
            P & Q & R & P \to Q & P \to R & (P \to Q) \land (P \to R) & Q \land R & P \to (Q \land R) \\ \hline
            1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
            1 & 1 & 0 & 1 & 0 & 0 & 0 & 0 \\
            1 & 0 & 1 & 0 & 1 & 0 & 0 & 0 \\
            1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            0 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
            0 & 1 & 0 & 1 & 1 & 1 & 0 & 1 \\
            0 & 0 & 1 & 1 & 1 & 1 & 0 & 1 \\
            0 & 0 & 0 & 1 & 1 & 1 & 0 & 1
            \end{array}
      $$
      Since the columns for $(P \to Q) \land (P \to R)$ and $P \to (Q \land R)$ are identical in every row, the two statements are logically equivalent.

---

- **Problem 5**
  Let the universe of discourse be
  $$
  X = \{a, b\},
  $$
  and let $P(x)$ and $Q(x)$ be mathematical statements depending on $x \in X$.
  Using a truth table, determine whether the statements
  $$
  \forall x \in X \, (P(x) \land Q(x))
  $$
  and
  $$
  (\forall x \in X \, P(x)) \land (\forall x \in X \, Q(x))
  $$
  are logically equivalent.
  First rewrite each quantified statement using only $P(a), P(b), Q(a)$, and $Q(b)$, and then construct the truth table.

    - **Solution 5.1**
      First, we expand the quantified statements over the finite domain $X = \{a, b\}$:
      
      1. $\forall x \in X \, (P(x) \land Q(x)) \equiv (P(a) \land Q(a)) \land (P(b) \land Q(b))$
      2. $(\forall x \in X \, P(x)) \land (\forall x \in X \, Q(x)) \equiv (P(a) \land P(b)) \land (Q(a) \land Q(b))$
      
      By the associative and commutative laws of conjunction ($\land$), both expressions simplify directly to:
      $$
      P(a) \land P(b) \land Q(a) \land Q(b)
      $$
      
      To keep the table compact and readable, let
      $$
      \begin{aligned}
            A &\equiv P(a) \land Q(a) & B &\equiv P(b) \land Q(b) & C &\equiv \forall x \in X \, (P(x) \land Q(x)) \\
            D &\equiv \forall x \in X \, P(x) & E &\equiv \forall x \in X \, Q(x) & F &\equiv (\forall x \in X \, P(x)) \land (\forall x \in X \, Q(x))
            \end{aligned}
      $$
      Thus, they are logically equivalent. The corresponding truth table configuration for their components is:
      $$
      \begin{array}{c|c|c|c|c|c|c|c|c|c}
            P(a) & P(b) & Q(a) & Q(b) & A & B & C & D & E & F \\ \hline
            1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
            1 & 1 & 1 & 0 & 1 & 0 & 0 & 1 & 0 & 0 \\
            1 & 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 0 \\
            1 & 1 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
            1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 & 1 & 0 \\
            1 & 0 & 1 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
            1 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
            1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            0 & 1 & 1 & 1 & 0 & 1 & 0 & 0 & 1 & 0 \\
            0 & 1 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            0 & 1 & 0 & 1 & 0 & 1 & 0 & 0 & 0 & 0 \\
            0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            0 & 0 & 1 & 1 & 0 & 0 & 0 & 0 & 1 & 0 \\
            0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
            0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 
            \end{array}
      $$
      Therefore, the statements are logically equivalent.
