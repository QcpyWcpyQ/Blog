---
title: "Relations and Functions"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Relations and Functions  

- **Exercise 1**  
  Let  
  $$
  A=\left\{1,2,3\right\}.  
  $$
  Consider the relation  
  $$
  R=\left\{(1,1),(2,2),(3,3),(1,2),(2,1)\right\}.  
  $$
  Determine whether $R$ is

  1. reflexive $\checkmark$.  
  2. symmetric $\checkmark$.  
  3. antisymmetric $\times$.  
  4. transitive $\checkmark$.  

---

- **Exercise 2**  
  Determine which of the following relations are equivalence relations.  

  1. On $\mathbb Z$,   
     $$
     x\sim y\iff x-y \text{ is even}.\quad\checkmark  
     $$

  2. On $\mathbb R$,   
     $$
     x\sim y\iff x\leqslant y.\quad\times  
     $$

  3. On $\mathbb R$,   
     $$
     x\sim y\iff \vert x\vert =\vert y\vert.\quad\checkmark  
     $$

  4. On $\mathbb Z$,   
     $$
     x\sim y\iff \vert x-y\vert \leqslant 1.\quad \times
     $$

---

- **Exercise 3**  
  Decide whether each of the following relations is a partial order.  

  1. On $\mathbb R$,   
     $$
     x\sim y\iff x\leqslant y.\quad \checkmark  
     $$

  2. On $\mathbb R$,   
     $$
     x\sim y\iff x<y.\quad \times  
     $$

  3. On the power set $\mathscr P(X)$,   
     $$
     A\sim B\iff A\subseteq B.\quad\checkmark  
     $$

  4. On the positive integers,   
     $$
     a\sim b\iff a\mid b.\quad \checkmark
     $$

---

- **Exercise 4**  
  Let  
  $$
  A=\{1,2,3\},\quad B=\{a,b,c\},\quad X=A\cup B.  
  $$
  Consider the following relations on $X$. Each relation is specified by listing all ordered pairs $(x,y)$ for which $x\sim y$.  

  Which of these relations define a function  
  $$
  f\colon X\to B.  
  $$

  1. $$
     R_1=\left\{(1,a),(2,b),(3,c)\right\}.\quad \checkmark  
     $$

  2. $$
     R_2=\left\{(1,a),(1,b),(2,c),(3,a)\right\}.\quad \times  
     $$

  3. $$
     R_3=\left\{(1,a),(2,b)\right\}.\quad \times  
     $$

  4. $$
     R_4=\left\{(1,a),(2,a),(3,a)\right\}.\quad \checkmark  
     $$

---

- **Exercise 5**  
  Let  
  $$
  f\colon \mathbb R\to \mathbb R,\quad f(x)=x^2.  
  $$
  Determine  

  1. The domain of $f$  
     $$
     \mathbb R.  
     $$

  2. The codomain of $f$  
     $$
     \mathbb R.  
     $$

  3. The image of $f$  
     $$
     \left[0,\infty\right).  
     $$

  Is the image of a function always equal to its codomain? No.  

---

- **Exercise 6**  
  Consider  
  $$
  f\colon \mathbb R\to \mathbb R,\quad f(x)=x^2,  
  $$
  and  
  $$
  g\colon \mathbb R\to\left[0,\infty\right), \quad g(x)=x^2.  
  $$
  Are $f$ and $g$ equal as functions? No.  

  Now consider   
  $$
  h\colon \mathbb R\to \mathbb R,\quad h(x)=\vert x\vert^2.  
  $$
  Are $f$ and $h$ equal as functions? Yes.  

---

- **Exercise 7**  
  Properties of a Relation
  Let
  $$
  A = \{1, 2, 3, 4\}
  $$
  and
  $$
  R = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1)\}
  $$
  Determine whether $R$ is
  (a) reflexive;
  (b) symmetric;
  (c) antisymmetric;
  (d) transitive.

  - **Solution 7.1**  

    * **(a) Reflexive:** Yes. By definition, a relation $R$ on $A$ is reflexive if for every $x \in A$, $(x, x) \in R$. For $A = \{1, 2, 3, 4\}$, the pairs $(1, 1), (2, 2), (3, 3),$ and $(4, 4)$ are all explicitly present in $R$.

    * **(b) Symmetric:** Yes. By definition, a relation is symmetric if for any $x, y \in A$, $(x, y) \in R \implies (y, x) \in R$. The only distinct pairs in $R$ are $(1, 2)$ and $(2, 1)$. Since $(1, 2) \in R \implies (2, 1) \in R$ and $(2, 1) \in R \implies (1, 2) \in R$, the condition holds.

    * **(c) Antisymmetric:** No. By definition, a relation is antisymmetric if for any $x, y \in A$, $((x, y) \in R \land (y, x) \in R) \implies x = y$. In this relation, we have $(1, 2) \in R$ and $(2, 1) \in R$, but $1 \neq 2$.

    * **(d) Transitive:** Yes. By definition, a relation is transitive if for any $x, y, z \in A$, $((x, y) \in R \land (y, z) \in R) \implies (x, z) \in R$. Checking the non-trivial combinations
      $$
      ((1, 2) \in R \land (2, 1) \in R) \implies (1, 1) \in R
      $$

      $$
      ((2, 1) \in R \land (1, 2) \in R) \implies (2, 2) \in R
      $$

      Any other compositions with diagonal relations automatically satisfy the implication.

---

- **Exercise 8**  
  Relations on Integers
  For each of the following relations on $\mathbb{Z}$, determine whether it is reflexive, symmetric, antisymmetric, and transitive. For every property that fails, give a counterexample.
  (a)
  $$
  a \sim b \iff a = b
  $$
  (b)
  $$
  a \sim b \iff a \leqslant b
  $$
  (c)
  $$
  a \sim b \iff |a - b| \leqslant 2
  $$

  - **Solution 8.1**  
    **Part (a)**
    * **Reflexive:** Yes. For any integer $a \in \mathbb{Z}$, the statement $a = a$ is universally true. Therefore, $a \sim a$ holds for all $a \in \mathbb{Z}$.
    * **Symmetric:** Yes. Let $a, b \in \mathbb{Z}$ such that $a \sim b$. By definition, this means $a = b$. Since equality is symmetric, it follows that $b = a$, which means $b \sim a$.
    * **Antisymmetric:** Yes. Let $a, b \in \mathbb{Z}$ such that $a \sim b$ and $b \sim a$. By definition, this implies $a = b$ and $b = a$. This directly satisfies the requirement that $a = b$.
    * **Transitive:** Yes. Let $a, b, c \in \mathbb{Z}$ such that $a \sim b$ and $b \sim c$. By definition, this yields $a = b$ and $b = c$. Substituting $b$ gives $a = c$, which means $a \sim c$.

  - **Solution 8.2**  
    **Part (b)**
    * **Reflexive:** Yes. For any integer $a \in \mathbb{Z}$, the statement $a \leqslant a$ is always true. Thus, $a \sim a$ holds for all $a \in \mathbb{Z}$.
    * **Symmetric:** No. Let $a = 1$ and $b = 2$. We have $1 \leqslant 2$, so $1 \sim 2$ is true. However, $2 \leqslant 1$ is false, so $2 \sim 1$ does not hold.
    * **Antisymmetric:** Yes. Let $a, b \in \mathbb{Z}$ such that $a \sim b$ and $b \sim a$. By definition, this means $a \leqslant b$ and $b \leqslant a$. By the properties of the standard order relation on integers, $a \leqslant b \land b \leqslant a \implies a = b$.
    * **Transitive:** Yes. Let $a, b, c \in \mathbb{Z}$ such that $a \sim b$ and $b \sim c$. By definition, this yields $a \leqslant b$ and $b \leqslant c$. By the transitivity property of inequalities, $a \leqslant b \land b \leqslant c \implies a \leqslant c$, which means $a \sim c$.

  - **Solution 8.3**  
    **Part (c)**
    * **Reflexive:** Yes. For any integer $a \in \mathbb{Z}$, we have $|a - a| = |0| = 0$. Since $0 \leqslant 2$, the condition $|a - a| \leqslant 2$ is satisfied, so $a \sim a$ holds for all $a \in \mathbb{Z}$.
    * **Symmetric:** Yes. Let $a, b \in \mathbb{Z}$ such that $a \sim b$. By definition, $|a - b| \leqslant 2$. Since $|a - b| = |-(b - a)| = |b - a|$, we have $|b - a| \leqslant 2$, which means $b \sim a$.
    * **Antisymmetric:** No. Let $a = 1$ and $b = 2$. We have $|1 - 2| = |-1| = 1 \leqslant 2$, so $1 \sim 2$ holds. Similarly, $|2 - 1| = |1| = 1 \leqslant 2$, so $2 \sim 1$ holds. However, $1 \neq 2$.
    * **Transitive:** No. Let $a = 1$, $b = 3$, and $c = 5$. We have $|1 - 3| = |-2| = 2 \leqslant 2$, so $1 \sim 3$ holds. We also have $|3 - 5| = |-2| = 2 \leqslant 2$, so $3 \sim 5$ holds. However, for $a$ and $c$, we have $|1 - 5| = |-4| = 4 > 2$, which means $1 \sim 5$ does not hold.

---

- **Exercise 9**  
  An Equivalence Relation on Integers
  Define a relation $\sim$ on $\mathbb{Z}$ by
  $$
  a \sim b \iff a - b \text{ is divisible by } 4.
  $$
  (a) Prove that $\sim$ is an equivalence relation.
  (b) Find $[0]$, $[1]$, $[2]$, $[3]$, $[5]$.
  (c) How many distinct equivalence classes are there?

  - **Solution 9.1**  
    **Part (a)**
    * **Reflexive:** Let $a \in \mathbb{Z}$. Then $a - a = 0$. Since $0 = 4 \times 0$, $0$ is divisible by $4$. Thus, $a \sim a$ for all $a \in \mathbb{Z}$.
    * **Symmetric:** Let $a, b \in \mathbb{Z}$ such that $a \sim b$. By definition, $a - b = 4k$ for some $k \in \mathbb{Z}$. Then $b - a = -(a - b) = -4k = 4(-k)$. Since $-k \in \mathbb{Z}$, $b - a$ is divisible by $4$, so $b \sim a$.
    * **Transitive:** Let $a, b, c \in \mathbb{Z}$ such that $a \sim b$ and $b \sim c$. By definition, $a - b = 4k$ and $b - c = 4m$ for some $k, m \in \mathbb{Z}$. Adding these equations gives $(a - b) + (b - c) = 4k + 4m \implies a - c = 4(k + m)$. Since $k + m \in \mathbb{Z}$, $a - c$ is divisible by $4$, so $a \sim c$.
      Since $\sim$ is reflexive, symmetric, and transitive, it is an equivalence relation.

  - **Solution 9.2**  
    **Part (b)**
    By definition, $[a] = \{x \in \mathbb{Z} \mid x - a = 4k, k \in \mathbb{Z}\} = \{a + 4k \mid k \in \mathbb{Z}\}$.
    * $[0] = \{\dots, -8, -4, 0, 4, 8, \dots\} = \{4k \mid k \in \mathbb{Z}\}$
    * $[1] = \{\dots, -7, -3, 1, 5, 9, \dots\} = \{1 + 4k \mid k \in \mathbb{Z}\}$
    * $[2] = \{\dots, -6, -2, 2, 6, 10, \dots\} = \{2 + 4k \mid k \in \mathbb{Z}\}$
    * $[3] = \{\dots, -5, -1, 3, 7, 11, \dots\} = \{3 + 4k \mid k \in \mathbb{Z}\}$
    * $[5] = \{\dots, -3, 1, 5, 9, 13, \dots\} = [1]$

  - **Solution 9.3**  
    **Part (c)**
    There are exactly $4$ distinct equivalence classes, which are $[0], [1], [2],$ and $[3]$.

---

- **Exercise 10**  
  Same Remainder
  Let
  $$
  A = \{0, 1, 2, 3, 4, 5, 6, 7\}.
  $$
  Define a relation $\sim$ on $A$ by
  $$
  a \sim b \iff a \text{ and } b \text{ have the same remainder when divided by } 3.
  $$
  (a) Write down all equivalence classes.
  (b) Write the relation $\sim$ explicitly as a set of ordered pairs.

  - **Solution 10.1**  
    **Part (a)**
    We group the elements of $A$ by their remainder when divided by $3$

    * Remainder $0$: $[0] = \{0, 3, 6\}$
    * Remainder $1$: $[1] = \{1, 4, 7\}$
    * Remainder $2$: $[2] = \{2, 5\}$

  - **Solution 10.2**  
    **Part (b)**
    The relation $\sim$ consists of all pairs $(x, y)$ such that $x$ and $y$ belong to the same equivalence class
    $$
    \begin{aligned}
    \sim = \{ &(0,0), (0,3), (0,6), (3,0), (3,3), (3,6), (6,0), (6,3), (6,6), \\
              &(1,1), (1,4), (1,7), (4,1), (4,4), (4,7), (7,1), (7,4), (7,7), \\
              &(2,2), (2,5), (5,2), (5,5) \}
    \end{aligned}
    $$

---

- **Exercise 11**  
  A Partial Order on Sets
  Let
  $$
  X = \{1, 2, 3\}.
  $$
  Consider the relation $\subseteq$ on $\mathscr{P}(X)$. Prove that $\subseteq$ is a partial order.

  - **Solution 11.1**  
    **Proof**
    * **Reflexive:** Let $A \in \mathscr{P}(X)$. For any $x \in A$, the statement $x \in A$ is true, so $A \subseteq A$ holds by definition of subset.
    * **Antisymmetric:** Let $A, B \in \mathscr{P}(X)$ such that $A \subseteq B$ and $B \subseteq A$. By definition of subset, $A \subseteq B \implies (\forall x \in A \implies x \in B)$ and $B \subseteq A \implies (\forall x \in B \implies x \in A)$. Thus $x \in A \iff x \in B$, which implies $A = B$.
    * **Transitive:** Let $A, B, C \in \mathscr{P}(X)$ such that $A \subseteq B$ and $B \subseteq C$. Let $x \in A$. Since $A \subseteq B$, it follows that $x \in B$. Since $B \subseteq C$ and $x \in B$, it follows that $x \in C$. Thus $x \in A \implies x \in C$, meaning $A \subseteq C$.
      Since $\subseteq$ is reflexive, antisymmetric, and transitive, it is a partial order.

---

- **Exercise 12**  
  Divisibility as a Partial Order
  Let $\mathbb{N}$ denote the set of positive integers. Define a relation $\preceq$ on $\mathbb{N}$ by
  $$
  x \preceq y \iff x \mid y.
  $$
  Recall that $x \mid y$ means that there exists $k \in \mathbb{N}$ such that $y = xk$. Prove that $\preceq$ is a partial order on $\mathbb{N}$.

  - **Solution 12.1**  
    **Proof**

    * **Reflexive:** Let $x \in \mathbb{N}$. We can write $x = x \times 1$. Since $1 \in \mathbb{N}$, there exists a positive integer $k=1$ such that $x = xk$, meaning $x \mid x$. Thus, $x \preceq x$.

    * **Antisymmetric:** Let $x, y \in \mathbb{N}$ such that $x \preceq y$ and $y \preceq x$. By definition, $y = xk$ and $x = ym$ for some $k, m \in \mathbb{N}$. Substituting $x$ into the first equation yields $y = (ym)k = y(mk)$. Dividing both sides by $y$ (since $y \ge 1$) gives $1 = mk$. Since $m, k$ are positive integers, the only solution is $m = 1$ and $k = 1$. Substituting $k = 1$ into $y = xk$ gives $y = x$.

    * **Transitive:** Let $x, y, z \in \mathbb{N}$ such that $x \preceq y$ and $y \preceq z$. By definition, $y = xk$ and $z = ym$ for some $k, m \in \mathbb{N}$. Substituting $y$ into the equation for $z$ gives $z = (xk)m = x(km)$. Since $k, m \in \mathbb{N}$, their product $km \in \mathbb{N}$. Thus, there exists an integer $k' = km$ such that $z = xk'$, meaning $x \mid z$, so $x \preceq z$.

      Since the relation $\preceq$ is reflexive, antisymmetric, and transitive, it is a partial order on $\mathbb{N}$.

---

- **Exercise 13**  
  Inverse Relation
  Let $\sim$ be a relation on a set $X$. The inverse relation $\sim^{-1}$ is defined by
  $$
  x \sim^{-1} y \iff y \sim x.
  $$
  Prove that $\sim$ is symmetric if and only if
  $$
  \sim \,=\, \sim^{-1}.
  $$

  - **Solution 13.1**  
    **Proof**
    $(\Longrightarrow)$ Assume $\sim$ is symmetric. We prove $\sim \,=\, \sim^{-1}$ by showing mutual inclusion

    * Let $(x, y) \in \;\sim$, meaning $x \sim y$. Since $\sim$ is symmetric, we have $y \sim x$. By definition of the inverse relation, $y \sim x \iff x \sim^{-1} y$, which means $(x, y) \in \;\sim^{-1}$. Thus, $\sim \,\subseteq\, \sim^{-1}$.
    * Let $(x, y) \in \;\sim^{-1}$, meaning $x \sim^{-1} y$. By definition of the inverse relation, this means $y \sim x$. Since $\sim$ is symmetric, $y \sim x \implies x \sim y$, which means $(x, y) \in \;\sim$. Thus, $\sim^{-1} \,\subseteq\, \sim$.
      Therefore, $\sim \,=\, \sim^{-1}$.

    $(\Longleftarrow)$ Assume $\sim \,=\, \sim^{-1}$. To show $\sim$ is symmetric, let $x, y \in X$ such that $x \sim y$, which means $(x, y) \in \;\sim$.
    Since $\sim \,=\, \sim^{-1}$, it follows that $(x, y) \in \;\sim^{-1}$, meaning $x \sim^{-1} y$.
    By definition of the inverse relation, $x \sim^{-1} y \iff y \sim x$.
    Thus, $x \sim y \implies y \sim x$, proving that $\sim$ is symmetric.

---

- **Exercise 14**  
  Identity Relation and Antisymmetry
  Let $\sim_X$ be the identity relation on $X$, defined by
  $$
  x \sim_X y \iff x = y.
  $$
  Let $\sim$ be a relation on $X$, and let $\sim^{-1}$ denote its inverse relation. Prove that $\sim$ is antisymmetric if and only if
  $$
  \{(x, y) \in X \times X \mid x \sim y\} \cap \{(x, y) \in X \times X \mid x \sim^{-1} y\} \subseteq \{(x, y) \in X \times X \mid x \sim_X y\}.
  $$

  - **Solution 14.1**  
    **Proof**
    For simplicity, let $R = \{(x, y) \in X \times X \mid x \sim y\}$, $R^{-1} = \{(x, y) \in X \times X \mid x \sim^{-1} y\}$, and $I = \{(x, y) \in X \times X \mid x \sim_X y\}$.

    $(\Longrightarrow)$ Assume $\sim$ is antisymmetric. Let $(x, y) \in R \cap R^{-1}$.
    By definition of intersection, $(x, y) \in R$ and $(x, y) \in R^{-1}$.
    This means $x \sim y$ and $x \sim^{-1} y$.
    By definition of the inverse relation, $x \sim^{-1} y \iff y \sim x$.
    Since $\sim$ is antisymmetric, $x \sim y \land y \sim x \implies x = y$.
    By definition of the identity relation, $x = y \iff x \sim_X y \iff (x, y) \in I$.
    Thus, $R \cap R^{-1} \subseteq I$.

    $(\Longleftarrow)$ Assume $R \cap R^{-1} \subseteq I$. To prove $\sim$ is antisymmetric, let $x, y \in X$ such that $x \sim y$ and $y \sim x$.
    Since $x \sim y$, we have $(x, y) \in R$.
    Since $y \sim x$, by definition of the inverse relation, we have $x \sim^{-1} y$, which means $(x, y) \in R^{-1}$.
    Therefore, $(x, y) \in R \cap R^{-1}$.
    By our inclusion hypothesis, $(x, y) \in R \cap R^{-1} \implies (x, y) \in I$.
    By definition of $I$, $(x, y) \in I \iff x \sim_X y \iff x = y$.
    Thus, $x \sim y \land y \sim x \implies x = y$, proving that $\sim$ is antisymmetric.

---

- **Exercise 15**  
  Which Relations Define Functions?
  For each of the following relations $R \subseteq \mathbb{R} \times \mathbb{R}$, determine whether $R$ defines a function
  $$
  f \colon \mathbb{R} \rightarrow \mathbb{R}.
  $$
  Explain your answer.
  (a) $R = \{(x, y) \in \mathbb{R}^2 : y = x^2\}$.
  (b) $R = \{(x, y) \in \mathbb{R}^2 : y^2 = x\}$.
  (c) $R = \{(x, y) \in \mathbb{R}^2 : xy = 1\}$.
  (d) $R = \{(x, y) \in \mathbb{R}^2 : y^3 = x\}$.

  - **Solution 15.1**  
    By definition, a relation $R \subseteq \mathbb{R} \times \mathbb{R}$ defines a function $f \colon \mathbb{R} \rightarrow \mathbb{R}$ if for every $x \in \mathbb{R}$, there exists a unique $y \in \mathbb{R}$ such that $(x, y) \in R$.
    * **(a) Yes.** For every $x \in \mathbb{R}$, the value $y = x^2$ is a uniquely determined real number.
    * **(b) No.** It fails on two conditions of the definition
      * For $x = -1 \in \mathbb{R}$, there is no $y \in \mathbb{R}$ such that $y^2 = -1$.
      * For $x = 4 \in \mathbb{R}$, there is no unique $y$ because both $y = 2$ and $y = -2$ satisfy $y^2 = 4$.
    * **(c) No.** For $x = 0 \in \mathbb{R}$, there is no $y \in \mathbb{R}$ such that $0 \cdot y = 1$. Thus, $f(0)$ is undefined, so it cannot be a function from the entire domain $\mathbb{R}$.
    * **(d) Yes.** For every $x \in \mathbb{R}$, every real number has a unique real cube root, so $y = \sqrt[3]{x}$ exists and is uniquely determined for all $x$.

---

- **Exercise 16**  
  Natural Domains and Ranges
  Verify the natural domains and corresponding ranges of the following functions. The domain in each case consists of all values of $x$ for which the formula is well-defined.
  $$
  \begin{array}{c|c|c}
  \text{Function} & \text{Domain} & \text{Range} \\ \hline
  y = x^2 & (-\infty, \infty) & [0, \infty) \\
  y = \frac{1}{x} & (-\infty, 0) \cup (0, \infty) & (-\infty, 0) \cup (0, \infty) \\
  y = \sqrt{x} & [0, \infty) & [0, \infty) \\
  y = \sqrt{4 - x} & (-\infty, 4] & [0, \infty) \\
  y = \sqrt{1 - x^2} & [-1, 1] & [0, 1]
  \end{array}
  $$

  - **Solution 16.1**  
    * **For $y = x^2$**
      * **Domain:** The expression $x^2$ is defined for all real numbers, so the domain is $(-\infty, \infty)$.
      * **Range:** Since the square of any real number is non-negative, $x^2 \ge 0$, and for any $y \ge 0$, $x = \sqrt{y}$ exists. Thus, the range is $[0, \infty)$.
    * **For $y = \frac{1}{x}$**
      * **Domain:** The expression is well-defined as long as the denominator is non-zero, so $x \neq 0$, which gives $(-\infty, 0) \cup (0, \infty)$.
      * **Range:** Since $y = \frac{1}{x}$, $y$ can never be $0$. For any $y \neq 0$, we can choose $x = \frac{1}{y}$, so the range is $(-\infty, 0) \cup (0, \infty)$.
    * **For $y = \sqrt{x}$**
      * **Domain:** The square root is defined for non-negative real numbers, so $x \ge 0$, giving the domain $[0, \infty)$.
      * **Range:** The principal square root function always yields non-negative values, so $y \ge 0$, and for any $y \ge 0$, $x = y^2$ is in the domain. Thus, the range is $[0, \infty)$.
    * **For $y = \sqrt{4 - x}$**
      * **Domain:** We require $4 - x \ge 0 \iff x \le 4$, which gives the interval $(-\infty, 4]$.
      * **Range:** The square root outputs non-negative values, $y \ge 0$. For any $y \ge 0$, setting $y = \sqrt{4-x} \iff y^2 = 4 - x \iff x = 4 - y^2$, which is always $\le 4$. Thus, the range is $[0, \infty)$.
    * **For $y = \sqrt{1 - x^2}$**
      * **Domain:** We require $1 - x^2 \ge 0 \iff x^2 \le 1 \iff -1 \le x \le 1$, which gives the interval $[-1, 1]$.
      * **Range:** Since $-1 \le x \le 1$, we have $0 \le x^2 \le 1$, which implies $0 \le 1 - x^2 \le 1$. Taking the square root gives $0 \le y \le 1$. For any $y \in [0, 1]$, $x = \sqrt{1-y^2}$ is a valid domain element. Thus, the range is $[0, 1]$.

---

- **Exercise 17**  
  Domain, Codomain, and Image
  Let
  $$
  f \colon \mathbb{Z} \rightarrow \mathbb{Z}, \quad f(n) = 2n.
  $$
  Determine
  (a) the domain of $f$;
  (b) the codomain of $f$;
  (c) the image of $f$.
  Is the image equal to the codomain?

  - **Solution 17.1**  

    * **(a) Domain of $f$**
      By definition, for a function written as $f \colon A \rightarrow B$, the set $A$ is the domain. Therefore, the domain of $f$ is $\mathbb{Z}$ (the set of all integers).

    * **(b) Codomain of $f$**
      By definition, for a function written as $f \colon A \rightarrow B$, the set $B$ is the codomain. Therefore, the codomain of $f$ is $\mathbb{Z}$ (the set of all integers).

    * **(c) Image of $f$**
      The image of $f$ is the set of all outputs generated by the function
      $$
      \text{Image}(f) = \{f(n) \mid n \in \mathbb{Z}\} = \{2n \mid n \in \mathbb{Z}\}
      $$
      This is the set of all even integers, which can be written as $2\mathbb{Z} = \{\dots, -4, -2, 0, 2, 4, \dots\}$.

    * **Is the image equal to the codomain?**
      No. The image is the set of even integers $2\mathbb{Z}$, while the codomain is the set of all integers $\mathbb{Z}$. Since there are odd integers in the codomain (such as $1 \in \mathbb{Z}$) that do not belong to the image ($1 \notin 2\mathbb{Z}$), the image is a proper subset of the codomain, meaning they are not equal.

---

- **Exercise 18**  
  Identity and Inclusion
  Let
  $$
  A = \{1, 2, 3\}, \quad B = \{1, 2, 3, 4\}.
  $$
  Define
  $$
  \text{id}_A \colon A \rightarrow A, \quad \text{id}_A(x) = x,
  $$
  and the inclusion map
  $$
  \iota \colon A \rightarrow B, \quad \iota(x) = x.
  $$
  (a) Find all values of $\text{id}_A$ and $\iota$.
  (b) Do the two functions have the same rule?
  (c) Are they equal as functions? Explain.

  - **Solution 18.1**  

    * **(a)** By evaluating each element of the domain $A = \{1, 2, 3\}$ under their respective definitions
      $$
      \text{id}_A(1) = 1, \quad \text{id}_A(2) = 2, \quad \text{id}_A(3) = 3
      $$

      $$
      \iota(1) = 1, \quad \iota(2) = 2, \quad \iota(3) = 3
      $$

    * **(b) Yes.** Both functions have the exact same assignment rule, which maps any input element $x$ directly to itself without alteration.

    * **(c) No.** By definition, two functions are equal if and only if their domains, codomains, and rules are all identical. Here, the codomain of $\text{id}_A$ is $A = \{1, 2, 3\}$, whereas the codomain of $\iota$ is $B = \{1, 2, 3, 4\}$. Since their codomains are not the same set ($A \neq B$), they are not equal as functions.

---

- **Exercise 19**  
  Restriction of a Function
  Let
  $$
  f \colon \mathbb{R} \rightarrow \mathbb{R}, \quad f(x) = x^2 - 1.
  $$
  Let
  $$
  A = [-1, 1]
  $$
  and define
  $$
  g = f|_A.
  $$
  (a) Write the domain and codomain of $g$.
  (b) Find $g(-1)$, $g(0)$, $g(1)$.
  (c) Are $f$ and $g$ equal?
  (d) Do they have the same formula?

  - **Solution 19.1**  

    * **(a)** By definition of a function restriction, restricting a function $f \colon X \rightarrow Y$ to a subset $A \subseteq X$ means the new function has domain $A$ while retaining the original rule and codomain. Therefore

      * Domain of $g$ is $A = [-1, 1]$.
      * Codomain of $g$ is $\mathbb{R}$.

    * **(b)** Since $g(x) = f(x)$ for all $x \in A$, we substitute the values into the formula $x^2 - 1$
      $$
      g(-1) = (-1)^2 - 1 = 1 - 1 = 0
      $$

      $$
      g(0) = (0)^2 - 1 = 0 - 1 = -1
      $$

      $$
      g(1) = (1)^2 - 1 = 1 - 1 = 0
      $$

    * **(c) No.** By definition, two functions are equal if and only if they share the exact same domain, codomain, and assignment rule. Here, the domain of $f$ is $\mathbb{R}$ while the domain of $g$ is $[-1, 1]$. Since their domains are different ($\mathbb{R} \neq [-1, 1]$), the functions are not equal.

    * **(d) Yes.** Both functions use the exact same algebraic formula $x^2 - 1$ to compute outputs from inputs, although $g$ is only allowed to apply this formula to elements within the restricted set $A$.

---

- **Exercise 20**  
  Construct Your Own Relation
  Let
  $$
  A = \{1, 2, 3, 4\}.
  $$
  Construct
  (a) a relation that is reflexive but not symmetric;
  (b) a relation that is symmetric but not reflexive;
  (c) an equivalence relation with exactly two equivalence classes;
  (d) a partial order different from the equality relation.

  - **Solution 20.1**  

    * **(a)** To be reflexive, the relation must contain $(1,1), (2,2), (3,3),$ and $(4,4)$. To violate symmetry, we add a directional pair without its inverse, such as $(1,2)$ without $(2,1)$
      $$
      R = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 2)\}.
      $$

    * **(b)** To violate reflexivity, at least one diagonal element must be missing (e.g., $(1,1) \notin R$). To maintain symmetry, any ordered pair must have its coordinates flipped within the set
      $$
      R = \{(1, 2), (2, 1)\}.
      $$

    * **(c)** To form an equivalence relation with exactly two classes, we can partition $A$ into two disjoint non-empty subsets, for instance, $A_1 = \{1, 2\}$ and $A_2 = \{3, 4\}$. The relation is constructed by taking $(A_1 \times A_1) \cup (A_2 \times A_2)$
      $$
      R = \{(1, 1), (1, 2), (2, 1), (2, 2), (3, 3), (3, 4), (4, 3), (4, 4)\}.
      $$
      Explicitly rewritten for verification
      $$
      R = \{(1, 1), (1, 2), (2, 1), (2, 2), (3, 3), (3, 4), (4, 3), (4, 4)\}.
      $$

    * **(d)** A partial order must be reflexive, antisymmetric, and transitive. The standard total order relation "less than or equal to" on integers satisfies this. Restricting it to $A$ yields
      $$
      R = \{(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)\}.
      $$
      This relation is distinctly different from the pure equality relation because it contains pairs where $x \neq y$ (such as $(1,2)$).

---

- **Exercise 21**  
  Let $f\colon \mathbb R\to \mathbb R$, defined by $f(x)=x^3+2$. Prove that $f$ is bijective.

  - **Proof 21.1**  

    - **Injectivity** Suppose $x,y\in \mathbb R$, suppose $f(x)=f(y)$, we want to prove that $x=y$. Then
      $$
      \begin{aligned}

      f(x)=f(y)&\iff x^3+2=y^3+2 \\
      &\iff x^3=y^3 \\
      &\iff x^3-y^3=0 \\
      &\iff (x-y)\left(x^2+xy+y^2\right)=0=(x-y)\left(\left(x+\dfrac y2\right)^2+\left(\dfrac{\sqrt 3}{2}y\right)^2\right) \\
      &\iff x=y\lor \left(\left(x+\dfrac y2\right)^2+\left(\dfrac{\sqrt 3}{2}y\right)^2\right)=0 \\
      &\iff x=y\lor (x=0\land y=0).

      \end{aligned}
      $$
      In any case $x=y$. Then $f$ is injective.

    - **Surjectivity** Suppose $y\in\mathbb R$. We want to prove $\exist x\in\mathbb R$ such that $x^3+2=y\iff x^3=y-2$.
      $$
      \begin{aligned}

      x:=\sqrt[3]{y-2} \implies f(x)=\left(\sqrt[3]{y-2}\right)^3+2=y-2+2=y.

      \end{aligned}
      $$


    Thus $f$ is bijective.

---

- **Exercise 22**  
  Let $f\colon \mathbb Z\to \mathbb Z$, defined by $f(n)=3n+1$. Is $f$ injective? Is $f$ surjective? Is $f$ bijective?
  - **Solution**  
    - **Injectivity** Suppose $n,m\in \mathbb Z,f(n)=f(m)$ By definition of $f$, $3n+1=3m+1\implies 3n=3m\implies n=m$.
    - **Surjective** Suppose $y\in\mathbb Z$. We want to find $n\in\mathbb Z$ such that $f(n)=m=3n+1\implies \dfrac{m-1}3=n$.
      By contradiction. If $n\in \mathbb Z$ such that $f(n)=3$ then $n=\dfrac 23\not\in \mathbb Z$. Then there doesn't exist $n\in\mathbb Z$ such that $f(n)=3$. Then $3\not\in \text{Im}f\implies f$ is not surjective. Thus $f$ is not bijective.

---

- **Exercise 23**  
  Let $f\colon X\to Y$ be a function. Prove that $f$ is injective $\iff$ For every set $Z$ and for every pair of functions $g,h\colon Z\to X$, if $f\circ g=f\circ h\implies g=h$.

  - **Proof 23.1**  
    Suppose $f\colon X\to Y$ a function.

    ($\Longrightarrow$) Suppose $f$ is injective. Suppose $Z$ is a set, $g,h\colon Z\to X$ such that $f\circ g=f\circ h\implies\forall z\in Z,(f\circ g)(z)=(f\circ h)(z)$. Then $f(g(z))=g(h(z))$. By the definition of injection, $g(z)=h(z)$ for all $z\in Z$ thus $g=h$.

    $(\Longleftarrow)$ Assume that for every set $Z$ and for every pair of functions $g, h \colon Z \rightarrow X$, $f \circ g = f \circ h \implies g = h$ holds. We need to show that $f$ is injective.
    Let $x_1, x_2 \in X$ be arbitrary elements in the domain such that
    $$
    f(x_1) = f(x_2)
    $$
    Since our hypothesis holds true for any choice of set $Z$, let us choose $Z = \{*\}$ to be a singleton set containing a single element.  
    We define two functions $g, h \colon \{*\} \rightarrow X$ by their assignments
    $$
    g(*) = x_1 \quad \text{and} \quad h(*) = x_2
    $$
    Now, evaluate the compositions $f \circ g$ and $f \circ h$ on the single element $* \in Z$
    $$
    (f \circ g)(*) = f(g(*)) = f(x_1)
    $$

    $$
    (f \circ h)(*) = f(h(*)) = f(x_2)
    $$

    Since we assumed $f(x_1) = f(x_2)$, it follows that $(f \circ g)(*) = (f \circ h)(*)$. Since the domain contains only $*$, this implies
    $$
    f \circ g = f \circ h
    $$
    By our hypothesis, this condition guarantees that $g = h$.  
    By definition of function equality, $g = h \implies g(*) = h(*)$.  
    Substituting our definitions back gives
    $$
    x_1 = x_2
    $$
    Thus, $f(x_1) = f(x_2) \implies x_1 = x_2$ for any arbitrary elements, proving that $f$ is injective.
    The proof is complete.

---

- **Exercise 24**  
  Consider the functions $f,g\colon\mathbb R\to\mathbb R$ defined by
  $$
  f(x)=\dfrac{x}{1+\vert x\vert},\quad g(x)=\begin{cases}

  \dfrac{x}{1+\vert x\vert}\quad &(\vert x\vert<1) \\
  0 \quad &(\vert x\vert\geqslant 1)
  \end{cases}
  $$

  1. Is $g$ a left inverse of $f$ ?
     $$
     \begin{aligned}

     (g\circ f)(x)&=g(f(x)) =g\left(\dfrac{x}{1+\vert x\vert}\right) \\
     &=\dfrac{\dfrac{x}{1+\vert x\vert}}{1-\left\vert\dfrac{x}{1+\vert x\vert}\right\vert} \\
     &=\dfrac{\dfrac{x}{1+\vert x\vert}}{1-\dfrac{\vert x\vert}{1+\vert x\vert}} \\
     &=x

     \end{aligned}
     $$
     Thus the statement is true.

  2. Is $g$ a right inverse of $f$ ?
     $$
     (f\circ g)(1)=f(g(1))=f(0)=0
     $$

     Thus the statement is false

  3. Is $f$ invertible?

     - **Solution 24.3**  
       The function $f \colon \mathbb{R} \rightarrow \mathbb{R}$ is **not invertible** because it is not surjective onto its given codomain $\mathbb{R}$.

       - **Analysis based on definitions**
         By definition, a function is invertible if and only if it is a bijection.
         Let $x_1, x_2 \in \mathbb{R}$ such that $f(x_1) = f(x_2)$.

         * If $x_1, x_2 \ge 0$, then $\frac{x_1}{1 + x_1} = \frac{x_2}{1 + x_2} \implies x_1(1 + x_2) = x_2(1 + x_1) \implies x_1 = x_2$.
         * If $x_1, x_2 < 0$, then $\frac{x_1}{1 - x_1} = \frac{x_2}{1 - x_2} \implies x_1(1 - x_2) = x_2(1 - x_1) \implies x_1 = x_2$.
         * Since $f(x) \ge 0$ for $x \ge 0$ and $f(x) < 0$ for $x < 0$, inputs of different signs cannot have the same output. Thus, $f(x_1) = f(x_2) \implies x_1 = x_2$, showing that $f$ is injective.

         Let $y \in \mathbb{R}$ be an arbitrary element in the codomain. By observing the structure of the function, since $1 + |x| > |x|$ holds true for all $x \in \mathbb{R}$, we always have
         $$
         |f(x)| = \left| \frac{x}{1 + |x|} \right| = \frac{|x|}{1 + |x|} < 1
         $$
         This means the image of $f$ is bounded, specifically $\text{Im } f = (-1, 1)$. Because the image does not equal the given codomain ($\text{Im} f \neq \mathbb{R}$), there exist elements in the codomain for which no preimage $x \in \mathbb{R}$ can be found. Thus, $f$ is not surjective.

---

- **Problem 25**  
  Determine the maximal possible domain $D$ of $f(x) = \frac{x + 1}{x + 2}$ and the image $I = \text{Im } f$. Is $f \colon D \rightarrow I$ bijective, invertible? If so, find the inverse.

  - **Solution 25.1**  
    * **Maximal Domain:** The rational function is well-defined as long as the denominator is non-zero, $x + 2 \neq 0 \iff x \neq -2$. Thus, the maximal possible domain is
      $$
      D = \mathbb{R} \setminus \{-2\}
      $$
    * **Image:** By definition, $\text{Im } f = \{y \in \mathbb{R} \mid \exists x \in D, \, f(x) = y\}$. Let $y = \frac{x + 1}{x + 2}$. Rearranging the equation to solve for $x$
      $$
      y(x + 2) = x + 1 \implies yx + 2y = x + 1 \implies x(y - 1) = 1 - 2y \implies x = \frac{1 - 2y}{y - 1}
      $$
      The expression for $x$ is well-defined for all $y \neq 1$. Furthermore, the value of $x$ can never equal $-2$ because $\frac{1 - 2y}{y - 1} = -2 \implies 1 - 2y = -2y + 2 \implies 1 = 2$, which is impossible. Thus, the image is
      $$
      I = \mathbb{R} \setminus \{1\}
      $$
    * **Bijectivity and Invertibility**
      * **Injective:** Let $x_1, x_2 \in D$ such that $f(x_1) = f(x_2)$. Then $\frac{x_1 + 1}{x_1 + 2} = \frac{x_2 + 1}{x_2 + 2} \implies (x_1 + 1)(x_2 + 2) = (x_2 + 1)(x_1 + 2) \implies x_1 x_2 + 2x_1 + x_2 + 2 = x_1 x_2 + 2x_2 + x_1 + 2 \implies x_1 = x_2$.
      * **Surjective:** By restricting the codomain to the image $I$, every $y \in I$ has a preimage $x = \frac{1 - 2y}{y - 1} \in D$ such that $f(x) = y$.
      Since $f \colon D \rightarrow I$ is both injective and surjective, it is bijective and therefore invertible.
    * **Inverse Function:** The inverse function $f^{-1} \colon I \rightarrow D$ is given by
      $$
      f^{-1}(y) = \frac{1 - 2y}{y - 1}
      $$

---

- **Problem 26**  
  Let $f \colon \mathbb{R} \rightarrow \mathbb{R}$ be a function defined by $f(x) = \frac{x^2}{x^2 + 1}$.

  1. Find $f^{-1}\left(\frac{1}{2}\right)$.
  2. Find $f^{-1}\left(\left[\frac{1}{4}, \frac{3}{4}\right]\right)$.
  3. Let $A = [0, 3] \subset \mathbb{R}$, find $f(A)$, $f^{-1}(f(A))$.

  - **Solution 26.1**  
    * **1.** By definition of a singleton preimage, we solve $f(x) = \frac{1}{2}$
      $$
      \frac{x^2}{x^2 + 1} = \frac{1}{2} \implies 2x^2 = x^2 + 1 \implies x^2 = 1 \implies x = \pm 1
      $$
      Thus
      $$
      f^{-1}\left(\frac{1}{2}\right) = \{-1, 1\}
      $$
    * **2.** By definition, $f^{-1}\left(\left[\frac{1}{4}, \frac{3}{4}\right]\right) = \left\{x \in \mathbb{R} \mid \frac{1}{4} \le \frac{x^2}{x^2 + 1} \le \frac{3}{4}\right\}$. Since $x^2 + 1 > 0$, we solve the inequalities separately
      * Left side: $\frac{1}{4}(x^2 + 1) \le x^2 \implies x^2 + 1 \le 4x^2 \implies 3x^2 \ge 1 \implies x^2 \ge \frac{1}{3} \implies x \in \left(-\infty, -\frac{1}{\sqrt{3}}\right] \cup \left[\frac{1}{\sqrt{3}, \infty}\right)$.
      * Right side: $x^2 \le \frac{3}{4}(x^2 + 1) \implies 4x^2 \le 3x^2 + 3 \implies x^2 \le 3 \implies x \in \left[-\sqrt{3}, \sqrt{3}\right]$.
      Intersecting the two solution intervals yields

      $$
      f^{-1}\left(\left[\frac{1}{4}, \frac{3}{4}\right]\right) = \left[-\sqrt{3}, -\frac{1}{\sqrt{3}}\right] \cup \left[\frac{1}{\sqrt{3}}, \sqrt{3}\right]
      $$
    * **3.** Note that the question text has a standard typo writing $A \subset \mathbb{R}^3$, but the interval $[0, 3]$ indicates $A \subset \mathbb{R}$.
      * To find $f(A)$, since $f(x) = \frac{x^2}{x^2 + 1} = 1 - \frac{1}{x^2 + 1}$, the function is strictly increasing on $[0, 3]$. Evaluating at the endpoints gives $f(0) = 0$ and $f(3) = \frac{9}{10}$. Thus
        $$
        f(A) = \left[0, \frac{9}{10}\right]
        $$
      * To find $f^{-1}(f(A))$, we solve $x \in \mathbb{R}$ such that $0 \le \frac{x^2}{x^2 + 1} \le \frac{9}{10}$. The left inequality is true for all $x \in \mathbb{R}$. The right inequality gives $10x^2 \le 9x^2 + 9 \implies x^2 \le 9 \implies -3 \le x \le 3$. Thus
        $$
        f^{-1}(f(A)) = [-3, 3]
        $$

---

- **Problem 27**  
  Let $f \colon X \rightarrow Y$ be a function. Prove that $f$ is injective $\iff \forall A \subseteq X, \, f^{-1}(f(A)) \subseteq A$.

  - **Solution 27.1**  
    **Proof**
    $(\Longrightarrow)$ Assume $f$ is injective. Let $A \subseteq X$ be an arbitrary subset, and let $x \in f^{-1}(f(A))$.
    By definition of preimage, $x \in f^{-1}(f(A)) \implies f(x) \in f(A)$.
    By definition of image, $f(x) \in f(A) \implies \exists x' \in A$ such that $f(x) = f(x')$.
    Since $x, x' \in X$ and $f$ is given to be injective, $f(x) = f(x') \implies x = x'$.
    Since $x' \in A$, it follows directly that $x \in A$.
    Thus, $f^{-1}(f(A)) \subseteq A$.

    $(\Longleftarrow)$ Assume that for every subset $A \subseteq X$, $f^{-1}(f(A)) \subseteq A$ holds true. We need to show that $f$ is injective.
    Let $x_1, x_2 \in X$ be arbitrary elements in the domain such that
    $$
    f(x_1) = f(x_2)
    $$
    Since our hypothesis holds true for *any* subset of $X$, let us choose $A = \{x_1\}$ to be the singleton subset containing only $x_1$.
    Evaluate the image of $A$: $f(A) = \{f(x_1)\}$.
    Since we assumed $f(x_1) = f(x_2)$, it follows that $f(x_2) \in \{f(x_1)\} = f(A)$.
    By definition of preimage, $f(x_2) \in f(A) \implies x_2 \in f^{-1}(f(A))$.
    By our hypothesis, $f^{-1}(f(A)) \subseteq A$, which means $x_2 \in A$.
    Since $A = \{x_1\}$, the statement $x_2 \in \{x_1\}$ implies
    $$
    x_2 = x_1
    $$
    Thus, $f(x_1) = f(x_2) \implies x_1 = x_2$, proving that $f$ is injective.
    The proof is complete.
