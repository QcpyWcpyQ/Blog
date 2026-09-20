---
title: "Sets"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Sets

- **Exercise 1**  
  Suppose $A,B,D\subseteq X$. Prove the following properties

  1. $\left(A\setminus B\right)^\complement=A^\complement\cup B$.
     **Proof**
     $$
     \begin{aligned}
     x\in\left(A\setminus B\right)^\complement&\iff x\not\in\left(A\setminus B\right)\iff\text{It is false that } x\in A\setminus B \\
     &\iff\text{It is false that }x\in A\land x\not\in B \\
     &\iff\text{It is true that }\neg(x\in A\land x\not\in B)\\
     &\iff x\not\in A\lor x\in B\iff x\not\in A\text{ or } x\in B \\
     &\iff x\in A^\complement\cup B.
     \end{aligned}
     $$
     Thus $\left(A\setminus B\right)^\complement=A^\complement\cup B$.

  2. $A\cap\left(B\setminus D\right)=\left(A\cap B\right)\setminus\left(A\cap D\right)$.
     **Proof**
     $$
     \begin{aligned}
     x\in A\cap\left(B\setminus D\right)&\iff x\in A \land x\in B\setminus D \\
     &\iff x\in A \land x\in B\land x\not\in D \\
     &\iff \left(x\in A \land x \in B\right)\land\left(x\in A\land x\not\in D\right) \\
     &\iff x\in A\cap B\land x\not\in A\cap D \\
     &\iff x\in\left(A\cap B\right)\setminus\left(A\cap D\right).
     \end{aligned}
     $$
     Thus $A\cap\left(B\setminus D\right)=\left(A\cap B\right)\setminus\left(A\cap D\right)$.

---

- **Exercise 2**  
  Let $A$ and $B$ be two sets. Prove that $\mathscr P(A)\cup \mathscr P(B)\subseteq\mathscr P(A\cup B)$.

  - **Proof 2.1**  
    Suppose
    $$
    \begin{aligned}
    X\in\mathscr P(A)\cup \mathscr P(B)&\implies X\in\mathscr P(A)\text{ or }X\in \mathscr P(B) \\
    &\iff X\subseteq A\text{ or }X\subseteq B \\
    &\implies X\subseteq A\subseteq A\cup B \text{ or }X\subseteq B\subseteq A\cup B \\
    &\implies \text{In any case, } X\subseteq A\cup B \\
    &\implies X\in\mathscr P(A\cup B).
    \end{aligned}
    $$
    Thus $\mathscr P(A)\cup \mathscr P(B)\subseteq\mathscr P(A\cup B)$.

---

- **Exercise 3**  
  Suppose $A_n = \left[-\dfrac{1}{n}, 1 + \dfrac{1}{n}\right]$ for $n \in \mathbb{N}$, find $\bigcup\limits_{n\in\mathbb{N}} A_n$, $\bigcap\limits_{n\in\mathbb{N}} A_n$, $\bigcup\limits_{n\in\mathbb{N}} A_n^\complement$, and $\bigcap\limits_{n\in\mathbb{N}} A_n^\complement$.  

  - **Solution 3.1**  
    Let's prove $\forall n\in\mathbb N,A_n\supseteq A_{n+1}\iff\left[-\dfrac1 n,1+\dfrac 1n\right]\supseteq\left[-\dfrac 1{n+1},1+\dfrac1{n+1}\right]$.
    Suppose $n\in\mathbb N,-\dfrac{1}{n+1}\leqslant x\leqslant 1+\dfrac{1}{n+1}$, we want to prove $-\dfrac 1n\leqslant x\leqslant 1+\dfrac 1n$.
    $$
    -\dfrac 1n\leqslant\dfrac1{n+1}\leqslant x\leqslant 1+\dfrac1{n+1}\leqslant 1+\dfrac 1n.
    $$
    Thus $-\dfrac 1n\leqslant x\leqslant 1+\dfrac 1n$, then $\forall n\in\mathbb N,A_n\supseteq A_{n+1}$.

    As $n$ increases, the intervals $A_n$ become nested, meaning $A_1 \supseteq A_2 \supseteq A_3 \supseteq \dots$  
    For $n=1$, we have $A_1 = [-1, 2]$.  We have $A_1=\bigcup\limits_{n\in\mathbb N}$ because
    $$
    A_1\subseteq\bigcup_{n\in\mathbb N}A_n=A_1\bigcup_{n\in\mathbb N\\n\geqslant 2}A_n
    $$
    and
    $$
    \bigcup\limits_{n\in\mathbb N}\subseteq A_1.
    $$
    The **union** is equal to the largest interval
    $$
    \bigcup_{n\in\mathbb{N}} A_n = [-1, 2].
    $$
    Lets prove $\bigcap\limits_{n}A_n=\left[0,1\right]$. We have
    $$
    [0,1]\subseteq\bigcap_nA_n\iff \forall n\in\mathbb N,[0,1]\subseteq A_n=\left[-\dfrac 1n,1+\dfrac 1n\right]
    $$
    and suppose $y<0$. Consider $\epsilon:=-y>0$ By the Archimedean Property
    $$
    \exist N\in\mathbb N\text{ such that } \dfrac{1}{N}<\epsilon=-y\implies y<-\dfrac 1N.
    $$
    Thus $y\not\in\left[-\dfrac{1}{N},1+\dfrac 1N\right]$. Then $y\not\in\bigcap\limits_{n}A_n$, So $0\in\bigcap\limits_{n}A_n$.

    Similarly, $1\in\bigcap\limits_{n}A_n$.

    The **intersection** approaches the limit points $0$ and $1$ from the outside, including them
    $$
    \bigcap_{n\in\mathbb{N}} A_n = [0, 1].
    $$
    By **De Morgan's laws**, the union of the complements is the complement of the intersection
    $$
    \bigcup_{n\in\mathbb{N}} A_n^\complement = \left(\bigcap_{n\in\mathbb{N}} A_n\right)^\complement = (-\infty, 0) \cup (1, \infty)
    $$
    Similarly, the intersection of the complements is the complement of the union
    $$
    \bigcap_{n\in\mathbb{N}} A_n^\complement = \left(\bigcup_{n\in\mathbb{N}} A_n\right)^\complement = (-\infty, -1) \cup (2, \infty)
    $$

---

- **Exercise 4**  
  Let $M = \{4, \{5\}, \{4, 5\}\}$. Determine which of the following assertions are correct.
  (a) $5 \in M$
  (c) $\{5\} \subseteq M$
  (b) $(A \setminus B)^\complement = A^\complement \cup B$
  (f) $A \subseteq B \iff A \cap B = A$
  (g) $A \cup (A \cap B) = A$
  (j) $A \cap (B \setminus D) = (A \cap B) \setminus (A \cap D)$
  (e) $\{4, 5\} \in M$
  (g) $\{\{4, 5\}\} \in M$
  (i) $\varnothing \in M$
  (k) $M \in M$

  - **Solution 4.1**  

    * **(a) Incorrect.** The number $5$ is not a direct element of $M$; the set $\{5\}$ is.

    * **(c) Incorrect.** For $\{5\} \subseteq M$ to be true, $5 \in M$ must hold, which is false.

    * **(b) Correct.** By definition,
      $$
      \begin{aligned}
      x \in (A \setminus B)^\complement &\iff x \notin A \setminus B\\
      &\iff \neg(x \in A \land x \notin B) \\
      &\iff x \notin A \lor x \in B \\
      &\iff x \in A^\complement \lor x \in B \\
      &\iff x \in A^\complement \cup B

      \end{aligned}
      $$

    * **(f) Correct.**
      $(\Longrightarrow)$ If $A \subseteq B$, then for any $x \in A$, $x \in B$ must hold. Thus $x \in A \implies x \in A \land x \in B \implies x \in A \cap B$, showing $A \subseteq A \cap B$. Since $A \cap B \subseteq A$ always holds by definition, $A \cap B = A$.
      $(\Longleftarrow)$ If $A \cap B = A$, then for any $x \in A$, we have $x \in A \cap B$, which means $x \in B$ by definition of intersection. Thus $A \subseteq B$.

    * **(g) Correct.** By definition, $x \in A \cup (A \cap B) \iff x \in A \lor (x \in A \land x \in B) \iff x \in A$ .

    * **(j) Correct.** By definition
      $$
      x \in A \cap (B \setminus D) \iff x \in A \land (x \in B \land x \notin D) \iff (x \in A \land x \in B) \land x \notin D
      $$
      On the other side
      $$
      x \in (A \cap B) \setminus (A \cap D) \iff (x \in A \land x \in B) \land \neg(x \in A \land x \in D) \iff (x \in A \land x \in B) \land (x \notin A \lor x \notin D)
      $$
      Since $x \in A$ is already true from the first part, $x \notin A$ is false, so $(x \notin A \lor x \notin D)$ simplifies directly to $x \notin D$. Thus, both sides mean $(x \in A \land x \in B) \land x \notin D$.

    * **(e) Correct.** The set $\{4, 5\}$ is explicitly listed as the third element of $M$.

    * **(g) Incorrect.** The nested set $\{\{4, 5\}\}$ is not an element belonging to $M$.

    * **(i) Incorrect.** The empty set $\varnothing$ is not explicitly listed inside $M$.

    * **(k) Incorrect.** By the Axiom of Regularity, no set can contain itself as an element.

---

- **Exercise 5**  
  Suppose $A, B, D \subseteq U$. Prove the following properties.
  (a) $A \cap (A \cup B) = A$
  (c) $A \setminus (B \cup D) = (A \setminus B) \cap (A \setminus D)$
  (d) $(A \cap B)^\complement = A^\complement \cup B^\complement$
  (e) $A \subseteq B \iff A \cup B = B$
  (h) $(A \cup B)^\complement = A^\complement \cap B^\complement$
  (i) $(A \setminus B) \cup (A \cap B) = A$

  - **Solution 5.1**  

    * **(a) Proof**
      We prove this by showing $x \in A \cap (A \cup B) \iff x \in A$
      $$
      x \in A \cap (A \cup B) \iff x \in A \land (x \in A \lor x \in B) \iff x \in A
      $$

    * **(c) Proof**
      We use the element-hood definition to show logical equivalence
      $$
      \begin{aligned}
      x \in A \setminus (B \cup D) &\iff x \in A \land x \notin (B \cup D) \\
      &\iff x \in A \land \neg(x \in B \lor x \in D) \\
      &\iff x \in A \land (x \notin B \land x \notin D) \\
      &\iff (x \in A \land x \notin B) \land (x \in A \land x \notin D)  \\
      &\iff x \in (A \setminus B) \land x \in (A \setminus D) \\
      &\iff x \in (A \setminus B) \cap (A \setminus D)
      \end{aligned}
      $$

    * **(d) Proof**
      By definition of the complement and logical negation
      $$
      \begin{aligned}

      x \in (A \cap B)^\complement &\iff x \notin A \cap B \\
      &\iff \neg(x \in A \land x \in B) \\
      &\iff x \notin A \lor x \notin B \\
      &\iff x \in A^\complement \lor x \in B^\complement \\
      &\iff x \in A^\complement \cup B^\complement

      \end{aligned}
      $$

    * **(e) Proof**
      $(\Longrightarrow)$ Assume $A \subseteq B$, meaning if $x \in A$ then $x \in B$. We show $A \cup B = B$

      * If $x \in A \cup B$, then $x \in A$ or $x \in B$. If $x \in A$, then $x \in B$ by assumption. Thus $x \in B$ in both cases, which means $A \cup B \subseteq B$.
      * If $x \in B$, then $x \in A \lor x \in B$ is automatically true, so $x \in A \cup B$, meaning $B \subseteq A \cup B$. Thus, $A \cup B = B$.

      $(\Longleftarrow)$ Assume $A \cup B = B$. Let $x \in A$. Then $x \in A \lor x \in B$ is true, so $x \in A \cup B$. Since $A \cup B = B$, it follows that $x \in B$. Hence, $A \subseteq B$.

    * **(h) Proof**
      By definition of the complement and logical negation
      $$
      \begin{aligned}

      x \in (A \cup B)^\complement &\iff x \notin A \cup B \\
      &\iff \neg(x \in A \lor x \in B) \\
      &\iff x \notin A \land x \notin B \\
      &\iff x \in A^\complement \land x \in B^\complement \\
      &\iff x \in A^\complement \cap B^\complement

      \end{aligned}
      $$

    * **(i) Proof**
      We use the element-hood definition to show logical equivalence
      $$
      \begin{aligned}
      x \in (A \setminus B) \cup (A \cap B) &\iff x \in (A \setminus B) \lor x \in (A \cap B) \\
      &\iff (x \in A \land x \notin B) \lor (x \in A \land x \in B) \\
      &\iff x \in A \land (x \notin B \lor x \in B)\\
      &\iff x \in A \land \text{True} \\
      &\iff x \in A
      \end{aligned}
      $$

---

- **Exercise 6**  
  Let $A, B, C$ be subsets of a universal set $X$. Prove the implication: If $A \cap B \subseteq C$ and $C \subseteq A \cup B$, then $C \setminus A \subseteq B$.

  - **Solution 6.1**  
    **Proof**
    Let $x \in C \setminus A$. By definition of set difference, this means
    $$
    x \in C \quad \text{and} \quad x \notin A
    $$
    We are given the condition $C \subseteq A \cup B$. Since $x \in C$, it must follow by definition of subset that
    $$
    x \in A \cup B
    $$
    By definition of union, this means $x \in A$ or $x \in B$.  
    However, we already established from the definition of $C \setminus A$ that $x \notin A$.  
    Therefore, for the disjunction $(x \in A \lor x \in B)$ to hold true while $x \in A$ is false, $x \in B$ must be true.

    Since any arbitrary element $x \in C \setminus A$ satisfies $x \in B$, we conclude by definition of subset that
    $$
    C \setminus A \subseteq B
    $$
    The proof is complete.

---

- **Exercise 7**  
  Let $A, B$ be arbitrary sets. Prove or disprove: $\mathscr{P}(A \setminus B) = \mathscr{P}(A) \setminus \mathscr{P}(B)$. If false, provide an explicit counterexample.

  - **Solution 7.1**  
    The statement is **false**.

    **Counterexample**
    Let $A = \{1\}$ and $B = \{2\}$.  
    Then, the set difference is $A \setminus B = \{1\}$.  
    The power sets of these collections are
    $$
    \mathscr{P}(A \setminus B) = \{\varnothing, \{1\}\}
    $$

    $$
    \mathscr{P}(A) = \{\varnothing, \{1\}\}, \quad \mathscr{P}(B) = \{\varnothing, \{2\}\}
    $$

    Evaluating the right side of the proposed equation yields
    $$
    \mathscr{P}(A) \setminus \mathscr{P}(B) = \{\{1\}\}
    $$
    Since $\{\varnothing, \{1\}\} \neq \{\{1\}\}$, the statement does not hold in general.

---

- **Exercise 8**  
  Let $A, B \subseteq X$. Prove that $A \subseteq B$ if and only if for every set $C$, $A \cap C \subseteq B \cap C$.

  - **Solution 8.1**  
    **Proof**
    $(\Longrightarrow)$ Assume $A \subseteq B$. Let $C$ be any arbitrary set, and let $x \in A \cap C$. By definition of intersection, this means
    $$
    x \in A \quad \text{and} \quad x \in C
    $$
    Since $A \subseteq B$, by definition of subset, $x \in A \implies x \in B$. Therefore, we have
    $$
    x \in B \quad \text{and} \quad x \in C
    $$
    By definition of intersection, $x \in B \cap C$. Since any arbitrary element $x \in A \cap C$ satisfies $x \in B \cap C$, we conclude that $A \cap C \subseteq B \cap C$.

    $(\Longleftarrow)$ Assume that for every set $C$, $A \cap C \subseteq B \cap C$ holds. We need to show $A \subseteq B$.
    Let $x$ be an arbitrary element such that $x \in A$.
    Since the given hypothesis holds true for any choice of set $C$, we can choose $C$ to be the singleton set containing only $x$, that is, $C = \{x\}$.
    Now evaluate the intersection $A \cap \{x\}$: since $x \in A$ and $x \in \{x\}$, we have
    $$
    x \in A \cap \{x\}
    $$
    By our hypothesis, $A \cap \{x\} \subseteq B \cap \{x\}$, which implies
    $$
    x \in B \cap \{x\}
    $$
    By definition of intersection, this means $x \in B$ and $x \in \{x\}$. In particular, we obtain
    $$
    x \in B
    $$
    Since $x \in A \implies x \in B$ for any arbitrary element, we conclude by definition of subset that $A \subseteq B$.
    The proof is complete.

---

- **Exercise 9**  
  Let $U$ be a universal set, and let $A, B \subseteq U$. Prove or disprove: $(A \cup B)^\complement = A^\complement \cup B^\complement$. If the statement is false, give a counterexample.

  - **Solution 9.1**  
    The statement is **false**.

    **Counterexample**
    Let the universal set be $U = \{1, 2\}$, and let $A = \{1\}$ and $B = \{2\}$.  
    First, find the union of $A$ and $B$
    $$
    A \cup B = \{1, 2\}
    $$
    By definition of complement, the left-hand side is
    $$
    (A \cup B)^\complement = U \setminus \{1, 2\} = \varnothing
    $$
    Now, calculate the complements of $A$ and $B$ separately
    $$
    A^\complement = \{2\}, \quad B^\complement = \{1\}
    $$
    Thus, the right-hand side is
    $$
    A^\complement \cup B^\complement = \{1, 2\}
    $$
    Since $\varnothing \neq \{1, 2\}$, the statement does not hold.

---

- **Exercise 10**  
  Suppose $A \subseteq B \cup C$. Does it follow that $A \subseteq B$ or $A \subseteq C$? If not, construct a concrete counterexample.

  - **Solution 10.1**  
    No, it **does not follow**.

    **Counterexample**
    Let $A = \{1, 2\}$, $B = \{1\}$, and $C = \{2\}$.  
    First, evaluate the union of $B$ and $C$
    $$
    B \cup C = \{1, 2\}
    $$
    Since every element of $A$ is in $B \cup C$, the condition $A \subseteq B \cup C$ is satisfied.  
    However, $A \nsubseteq B$ because $2 \in A$ but $2 \notin B$.  
    Similarly, $A \nsubseteq C$ because $1 \in A$ but $1 \notin C$.  
    Therefore, the implication is false.

---

- **Exercise 11**  
  Let $A, B, C \subseteq X$. Prove: $(A \setminus B) \setminus C = A \setminus (B \cup C)$.

  - **Solution 11.1**  
    **Proof**
    We show that an element $x$ belongs to the left-hand side if and only if it belongs to the right-hand side using basic definition of set-membership
    $$
    \begin{aligned}
    x \in (A \setminus B) \setminus C &\iff x \in (A \setminus B) \land x \notin C \\
    &\iff (x \in A \land x \notin B) \land x \notin C \\
    &\iff x \in A \land (x \notin B \land x \notin C) \\
    &\iff x \in A \land \neg(x \in B \lor x \in C)\\
    &\iff x \in A \land x \notin (B \cup C) \\
    &\iff x \in A \setminus (B \cup C)
    \end{aligned}
    $$
    Since $x \in (A \setminus B) \setminus C \iff x \in A \setminus (B \cup C)$ is logically equivalent, the two sets are equal.

---

- **Exercise 12**  
  Let $A, B, C \subseteq X$. Show that $A \cap (B \Delta C) = (A \cap B) \Delta (A \cap C)$, where $\Delta$ denotes symmetric difference: $X \Delta Y = (X \setminus Y) \cup (Y \setminus X)$.

  - **Solution 12.1**  
    **Proof**
    By definition of symmetric difference, $B \Delta C = (B \setminus C) \cup (C \setminus B)$. We unpack the condition $x \in A \cap (B \Delta C)$ step by step
    $$
    \begin{aligned}
    x \in A \cap (B \Delta C) &\iff x \in A \land x \in (B \Delta C) \\
    &\iff x \in A \land (x \in B \setminus C \lor x \in C \setminus B) \\
    &\iff x \in A \land ((x \in B \land x \notin C) \lor (x \in C \land x \notin B)) \\
    &\iff (x \in A \land x \in B \land x \notin C) \lor (x \in A \land x \in C \land x \notin B)
    \end{aligned}
    $$
    Now, we unpack the right-hand side expression, $x \in (A \cap B) \Delta (A \cap C)$
    $$
    \begin{aligned}
    x \in (A \cap B) \Delta (A \cap C) &\iff x \in ((A \cap B) \setminus (A \cap C)) \lor x \in ((A \cap C) \setminus (A \cap B)) \\
    &\iff (x \in A \cap B \land x \notin A \cap C) \lor (x \in A \cap C \land x \notin A \cap B) \\
    &\iff ((x \in A \land x \in B) \land \neg(x \in A \land x \in C)) \lor ((x \in A \land x \in C) \land \neg(x \in A \land x \in B)) \\
    &\iff ((x \in A \land x \in B) \land (x \notin A \lor x \notin C)) \lor ((x \in A \land x \in C) \land (x \notin A \lor x \notin B))
    \end{aligned}
    $$
    In the first component, since $x \in A$ is true, the statement $(x \notin A \lor x \notin C)$ simplifies directly to $x \notin C$.  
    In the second component, since $x \in A$ is true, the statement $(x \notin A \lor x \notin B)$ simplifies directly to $x \notin B$.  
    Substituting these simplifications back, we get
    $$
    (x \in A \land x \in B \land x \notin C) \lor (x \in A \land x \in C \land x \notin B)
    $$
    Since both sides reduce to the exact same logical statement, $A \cap (B \Delta C) = (A \cap B) \Delta (A \cap C)$ is proven.

---

- **Exercise 13**  
  Another Morgan's Law (Indexed Families): Let $\{A_i\}_{i \in I}$ be a family of sets. Prove
  $$
  \left(\bigcap_{i \in I} A_i\right)^\complement = \bigcup_{i \in I} A_i^\complement
  $$

  - **Solution 13.1**  
    **Proof**
    We apply the logical definitions of indexed intersection, union, and complement to show element-hood equivalence
    $$
    \begin{aligned}
    x \in \left(\bigcap_{i \in I} A_i\right)^\complement &\iff x \notin \bigcap_{i \in I} A_i \\
    &\iff \neg \left( \forall i \in I, \, x \in A_i \right) \\
    &\iff \exists i \in I, \, \neg(x \in A_i) \\
    &\iff \exists i \in I, \, x \notin A_i \\
    &\iff \exists i \in I, \, x \in A_i^\complement \\
    &\iff x \in \bigcup_{i \in I} A_i^\complement
    \end{aligned}
    $$
    Since the logical statements match at every point, the set identity holds true.
