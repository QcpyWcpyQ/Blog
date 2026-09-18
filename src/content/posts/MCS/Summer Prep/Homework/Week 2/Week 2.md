---
title: "Week 2"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Week 2

- **Problem 1**
  (a) Let $A_n = \{x \in \mathbb{Z} \mid |x| > n\}$ for each $n \in \mathbb{N}$. Find $\bigcap_{n \in \mathbb{N}} A_n,\bigcup_{n \in \mathbb{N}} A_n,\bigcap_{n \in \mathbb{N}} A_n^\complement,\bigcup_{n \in \mathbb{N}} A_n^\complement$.
  
  
  (b) Let $\mathscr{F}$ be a family of sets such that whenever $S, T \in \mathscr{F}$, we have $S \cap T \in \mathscr{F}$. Is it always true that the intersection of all sets in $\mathscr{F}$ belongs to $\mathscr{F}$? Justify your answer.
  
  - **Solution 1.1**
    **Part (a):**
    
    1. Let $x \in \mathbb{Z}$. By definition of indexed intersection, $x \in \bigcap_{n \in \mathbb{N}} A_n \iff \forall n \in \mathbb{N}, x \in A_n \iff \forall n \in \mathbb{N}, |x| > n$. Since no single integer has an absolute value strictly greater than every natural number, there is no such $x$. Thus:
    
    $$
    \bigcap_{n \in \mathbb{N}} A_n = \varnothing
    $$
    
    2. Let $x \in \mathbb{Z}$. By definition of indexed union, $x \in \bigcup_{n \in \mathbb{N}} A_n \iff \exists n \in \mathbb{N}, x \in A_n \iff \exists n \in \mathbb{N}, |x| > n$. This is true for any integer $x$ except when $|x| \le 1$ for $n=1$. Specifically, for $n=1$, $|x| > 1 \iff x \in \mathbb{Z} \setminus \{-1, 0, 1\}$. Since $A_1 \supseteq A_2 \supseteq A_3 \dots$, the largest set in the union is $A_1$. Thus:
    
    $$
    \bigcup_{n \in \mathbb{N}} A_n = A_1 = \{x \in \mathbb{Z} \mid |x| > 1\} = \{\dots, -3, -2, 2, 3, \dots\}
    $$
    
    3. First, we find the complement $A_n^\complement = \{x \in \mathbb{Z} \mid |x| \le n\}$. By definition, $x \in \bigcap_{n \in \mathbb{N}} A_n^\complement \iff \forall n \in \mathbb{N}, |x| \le n$. This holds if and only if $|x| \le 1$ (since $n \ge 1$). Thus:
    
    $$
    \bigcap_{n \in \mathbb{N}} A_n^\complement = A_1^\complement = \{-1, 0, 1\}
    $$
    
    4. By definition, $x \in \bigcup_{n \in \mathbb{N}} A_n^\complement \iff \exists n \in \mathbb{N}, |x| \le n$. For any integer $x \in \mathbb{Z}$, we can always choose a natural number $n$ such that $n \ge |x|$. Thus, every integer satisfies this condition:
    
    $$
    \bigcup_{n \in \mathbb{N}} A_n^\complement = \mathbb{Z}
    $$
    
  - **Solution 1.2**
    **Part (b):**
    No, it is **not always true**.
    
    **Counterexample:**
    Let $\mathscr{F} = \{(0, \frac{1}{n}) \mid n \in \mathbb{N}\}$, which is a family of open intervals on $\mathbb{R}$. 
    For any two sets $S = (0, \frac{1}{a})$ and $T = (0, \frac{1}{b})$ in $\mathscr{F}$, their intersection is $S \cap T = (0, \frac{1}{\max(a,b)}) \in \mathscr{F}$. Thus, the given condition holds.
    However, the intersection of all sets in $\mathscr{F}$ is:
    $$
    \bigcap_{n \in \mathbb{N}} \left(0, \frac{1}{n}\right) = \varnothing
    $$
    Since the empty set $\varnothing$ is not of the form $(0, \frac{1}{n})$ for any $n \in \mathbb{N}$, $\varnothing \notin \mathscr{F}$. Therefore, the statement is false for infinite families.

---

- **Problem 2**
  Let $\mathbb{R}[x]$ denote the set of all polynomials with real coefficients. Define a relation $\sim$ on $\mathbb{R}[x]$ by
  $$
  f \sim g \iff f(0) = g(0).
  $$
  Recall that for polynomials $p, q \in \mathbb{R}[x]$, we say that $p$ divides $q$, and write $p \mid q$, if there exists a polynomial $h \in \mathbb{R}[x]$ such that $q = ph$.
  (a) Prove that $\sim$ is an equivalence relation.
  (b) Describe the equivalence class of the polynomial $x^2 + x + 3$.
  (c) Prove that for all $f, g \in \mathbb{R}[x]$, $f \sim g \iff x \mid (f - g)$.
  
  - **Solution 2.1**
    **Part (a):**
    * **Reflexive:** Let $f \in \mathbb{R}[x]$. Since $f(0) = f(0)$ is a basic identity, it follows directly from the definition that $f \sim f$.
    * **Symmetric:** Let $f, g \in \mathbb{R}[x]$ such that $f \sim g$. By definition, this means $f(0) = g(0)$. Since equality is symmetric, $g(0) = f(0)$, which implies $g \sim f$.
    * **Transitive:** Let $f, g, h \in \mathbb{R}[x]$ such that $f \sim g$ and $g \sim h$. By definition, $f(0) = g(0)$ and $g(0) = h(0)$. By transitivity of numerical equality, $f(0) = h(0)$, which implies $f \sim h$.
    Since $\sim$ is reflexive, symmetric, and transitive, it is an equivalence relation.
  
  - **Solution 2.2**
    **Part (b):**
    Let $p(x) = x^2 + x + 3$. Evaluating this polynomial at $0$ gives $p(0) = 0^2 + 0 + 3 = 3$.  
    By definition, the equivalence class $[x^2 + x + 3]$ consists of all polynomials $f \in \mathbb{R}[x]$ such that $f(0) = p(0) = 3$.  
    Any polynomial $f(x) = a_n x^n + \dots + a_1 x + a_0$ satisfies $f(0) = a_0$. Therefore, $f(0) = 3$ means its constant term must be $3$.  
    Thus, the equivalence class is the set of all real polynomials with a constant term equal to $3$:
    $$
    [x^2 + x + 3] = \{f \in \mathbb{R}[x] \mid f(0) = 3\} = \{x \cdot q(x) + 3 \mid q(x) \in \mathbb{R}[x]\}
    $$
  
  - **Solution 2.3**
    **Part (c):**
    **Proof:**
    By definitidon of evaluation, any polynomial $f \in \mathbb{R}[x]$ can be written uniquely as $f(x) = x \cdot q_1(x) + f(0)$ for some polynomial $q_1 \in \mathbb{R}[x]$. Similarly, $g(x) = x \cdot q_2(x) + g(0)$.  
    Subtracting $g$ from $f$ yields:
    $$
    f(x) - g(x) = x(q_1(x) - q_2(x)) + (f(0) - g(0))
    $$
    $(\Longrightarrow)$ Assume $f \sim g$. By definition, $f(0) = g(0) \iff f(0) - g(0) = 0$. Substituting this back into the equation gives:
    $$
    f(x) - g(x) = x(q_1(x) - q_2(x))
    $$
    Since $q_1(x) - q_2(x) \in \mathbb{R}[x]$, there exists a polynomial $h = q_1 - q_2$ such that $f - g = x \cdot h$. By definition of divisibility, this means $x \mid (f - g)$.
  
    $(\Longleftarrow)$ Assume $x \mid (f - g)$. By definition of divisibility, there exists a polynomial $h \in \mathbb{R}[x]$ such that:
    $$
    f(x) - g(x) = x \cdot h(x)
    $$
    Evaluating both sides of this identity at $x = 0$ gives:
    $$
    f(0) - g(0) = 0 \cdot h(0) \implies f(0) - g(0) = 0 \implies f(0) = g(0)
    $$
    By definition of the relation, $f(0) = g(0) \iff f \sim g$.  
    The proof is complete.

---

- **Problem 3**
  Let $\mathbb{R}[x] \setminus \{0\}$ denote the set of all nonzero polynomials with real coefficients. Recall that if
  $$
  f(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0, \quad a_n \neq 0,
  $$
  then the degree of $f$ is $\deg f = n$, that is, the largest exponent of $x$ with a nonzero coefficient. Define a relation $\sim$ on $\mathbb{R}[x] \setminus \{0\}$ by
  $$
  f \sim g \iff \deg f = \deg g.
  $$
  (a) Prove that $\sim$ is an equivalence relation.
  (b) (Optional Problem) Describe the equivalence class $[f]$ of a polynomial $f \in \mathbb{R}[x] \setminus \{0\}$.
  (c) (Optional Problem) On the set of equivalence classes, define
  $$
  [f] \preceq [g] \iff \deg f \le \deg g.
  $$
  Prove that this relation is well-defined, i.e., that it does not depend on the choice of representatives.
  (d) Prove that $\preceq$ is a partial order on the set of equivalence classes.
  (e) Describe the first several equivalence classes in this order.
  
  - **Solution 3.1**
    **Part (a):**
    * **Reflexive:** Let $f \in \mathbb{R}[x] \setminus \{0\}$. Since $\deg f = \deg f$ is an identity, it follows directly from the definition that $f \sim f$.
    * **Symmetric:** Let $f, g \in \mathbb{R}[x] \setminus \{0\}$ such that $f \sim g$. By definition, this means $\deg f = \deg g$. Since equality is symmetric, $\deg g = \deg f$, which implies $g \sim f$.
    * **Transitive:** Let $f, g, h \in \mathbb{R}[x] \setminus \{0\}$ such that $f \sim g$ and $g \sim h$. By definition, $\deg f = \deg g$ and $\deg g = \deg h$. By transitivity of numerical equality, $\deg f = \deg h$, which implies $f \sim h$.
    Since $\sim$ is reflexive, symmetric, and transitive, it is an equivalence relation.
  
  - **Solution 3.2**
    **Part (b):**
    Let $f \in \mathbb{R}[x] \setminus \{0\}$ be a polynomial with $\deg f = n$.  
    By definition, the equivalence class $[f]$ is the set of all nonzero polynomials in $\mathbb{R}[x]$ that have the exact same degree as $f$:
    $$
    [f] = \{g \in \mathbb{R}[x] \setminus \{0\} \mid \deg g = \deg f\}
    $$
    Thus, if $\deg f = n$, $[f]$ is the set of all polynomials of degree $n$, which can be described as:
    $$
    [f] = \{a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \mid a_i \in \mathbb{R}, a_n \neq 0\}
    $$
  
  - **Solution 3.3**
    **Part (c):**
    **Proof:**
    To show that the relation is well-defined, we must prove that if we choose different representatives for the same equivalence classes, the definition yields the same result.  
    Let $f_1, f_2, g_1, g_2 \in \mathbb{R}[x] \setminus \{0\}$ such that $[f_1] = [f_2]$ and $[g_1] = [g_2]$.  
    By definition of equivalence classes:
    $$
    f_1 \sim f_2 \iff \deg f_1 = \deg f_2
    $$
    $$
    g_1 \sim g_2 \iff \deg g_1 = \deg g_2
    $$
    Now assume that $[f_1] \preceq [g_1]$ holds according to the definition, which means:
    $$
    \deg f_1 \le \deg g_1
    $$
    Substituting $\deg f_1 = \deg f_2$ and $\deg g_1 = \deg g_2$ into the inequality, we get:
    $$
    \deg f_2 \le \deg g_2
    $$
    By definition of the relation, this means $[f_2] \preceq [g_2]$. Thus, the truth value of the relation does not depend on the choice of representatives, meaning the relation is well-defined.
  
  - **Solution 3.4**
    **Part (d):**
    **Proof:**
    Let the set of all equivalence classes be denoted by $E = \{[f] \mid f \in \mathbb{R}[x] \setminus \{0\}\}$.
    * **Reflexive:** Let $[f] \in E$. Since $\deg f \le \deg f$ is always true for any integer $\deg f \in \mathbb{N} \cup \{0\}$, it follows by definition that $[f] \preceq [f]$.
    * **Antisymmetric:** Let $[f], [g] \in E$ such that $[f] \preceq [g]$ and $[g] \preceq [f]$. By definition, this implies $\deg f \le \deg g$ and $\deg g \le \deg f$. By the properties of the standard order relation on integers, this means $\deg f = \deg g$. By definition of the equivalence relation, $f \sim g$, which implies $[f] = [g]$.
    * **Transitive:** Let $[f], [g], [h] \in E$ such that $[f] \preceq [g]$ and $[g] \preceq [h]$. By definition, this yields $\deg f \le \deg g$ and $\deg g \le \deg h$. By the transitivity of numerical inequalities, $\deg f \le \deg h$, which means $[f] \preceq [h]$.
    Since the relation $\preceq$ is reflexive, antisymmetric, and transitive, it is a partial order.
  
  - **Solution 3.5**
    **Part (e):**
    The degree of a nonzero polynomial can be any non-negative integer $n \in \{0, 1, 2, 3, \dots\}$. The equivalence classes are ordered according to their degrees:
    * The first equivalence class consists of all nonzero polynomials of degree $0$ (nonzero constant polynomials):
      $$
      [1] = \{c \in \mathbb{R} \mid c \neq 0\}
      $$
    * The second equivalence class consists of all polynomials of degree $1$ (linear polynomials):
      $$
      [x] = \{a_1 x + a_0 \mid a_1, a_0 \in \mathbb{R}, a_1 \neq 0\}
      $$
    * The third equivalence class consists of all polynomials of degree $2$ (quadratic polynomials):
      $$
      [x^2] = \{a_2 x^2 + a_1 x + a_0 \mid a_2, a_1, a_0 \in \mathbb{R}, a_2 \neq 0\}
      $$
    * The fourth equivalence class consists of all polynomials of degree $3$ (cubic polynomials):
      $$
      [x^3] = \{a_3 x^3 + a_2 x^2 + a_1 x + a_0 \mid a_3, a_2, a_1, a_0 \in \mathbb{R}, a_3 \neq 0\}
      $$
      Thus, the chain of the first several equivalence classes in this order is $[1] \preceq [x] \preceq [x^2] \preceq [x^3] \dots$

---

- **Problem 4**
  Prove that the function $g \colon \mathbb{N} \rightarrow \mathbb{Z}$ defined by
  $$
  g(n) = \begin{cases} \frac{n - 1}{2}, & \text{if } n \text{ is odd}, \\ -\frac{n}{2}, & \text{if } n \text{ is even}, \end{cases}
  $$
  is a bijection. Is it invertible?, If so, find its inverse.
  
  - **Solution 4.1**
    * **Injective:** Let $n_1, n_2 \in \mathbb{N}$ such that $g(n_1) = g(n_2)$. We analyze the signs of the outputs:
      * If $n$ is odd, $n \ge 1 \implies n - 1 \ge 0 \implies g(n) \ge 0$.
      * If $n$ is even, $n \ge 2 \implies -\frac{n}{2} \le -1 \implies g(n) < 0$.
      Since the image of odd numbers is non-negative and the image of even numbers is strictly negative, $g(n_1) = g(n_2)$ implies that $n_1$ and $n_2$ must have the same parity.
      * Case 1: Both $n_1, n_2$ are odd.
        $$
        \frac{n_1 - 1}{2} = \frac{n_2 - 1}{2} \implies n_1 - 1 = n_2 - 1 \implies n_1 = n_2
        $$
      * Case 2: Both $n_1, n_2$ are even.
        $$
        -\frac{n_1}{2} = -\frac{n_2}{2} \implies n_1 = n_2
        $$
        Thus, $g$ is injective.
    * **Surjective:** Let $m \in \mathbb{Z}$ be an arbitrary integer in the codomain.
      * If $m \ge 0$, let $n = 2m + 1$. Since $m \ge 0$, $n \ge 1$ and $n$ is odd, so $n \in \mathbb{N}$. Evaluating the function gives $g(n) = \frac{(2m + 1) - 1}{2} = m$.
      * If $m < 0$, let $n = -2m$. Since $m \le -1$, $n \ge 2$ and $n$ is even, so $n \in \mathbb{N}$. Evaluating the function gives $g(n) = -\frac{-2m}{2} = m$.
      Thus, $g$ is surjective.
    * **Invertible and Inverse:** Since $g$ is a bijection, it is invertible. By collecting the cases from the surjectivity proof, the inverse function $g^{-1} \colon \mathbb{Z} \rightarrow \mathbb{N}$ is defined by:
      $$
      g^{-1}(m) = \begin{cases} 2m + 1, & \text{if } m \ge 0, \\ -2m, & \text{if } m < 0. \end{cases}
      $$

---

- **Problem 5**
  Suppose $f \colon A \rightarrow B$ is a function, $\{B_i\}_{i \in I}$ is a partition of $B$, and $\{A_i\}_{i \in I}$ is a partition of $A$. Prove that
  (a) If $f$ is surjective; then, $\{f^{-1}(B_i)\}_{i \in I}$ is a partition of $A$.
  (b) If $f$ is injective; then, $\{f(A_i)\}_{i \in I}$ is a partition of $f(A)$.
  
  - **Solution 5.1**
    **Part (a):**
    By definition, $\{B_i\}_{i \in I}$ being a partition of $B$ means: (1) $B_i \neq \varnothing$ for all $i \in I$, (2) $B_i \cap B_j = \varnothing$ for all $i \neq j$, and (3) $\bigcup_{i \in I} B_i = B$. We verify these three conditions for $\{f^{-1}(B_i)\}_{i \in I}$ in $A$:
    * **Non-emptiness:** Let $i \in I$. Since $\{B_i\}_{i \in I}$ is a partition, there exists some $y \in B_i$. Since $f$ is surjective, there exists some $x \in A$ such that $f(x) = y$. By definition of preimage, $f(x) \in B_i \implies x \in f^{-1}(B_i)$. Thus, $f^{-1}(B_i) \neq \varnothing$.
    * **Disjointness:** Let $i, j \in I$ with $i \neq j$. Suppose there exists $x \in f^{-1}(B_i) \cap f^{-1}(B_j)$. By definition of preimage, $f(x) \in B_i$ and $f(x) \in B_j$, meaning $f(x) \in B_i \cap B_j$. However, $B_i \cap B_j = \varnothing$, which is a contradiction. Thus, $f^{-1}(B_i) \cap f^{-1}(B_j) = \varnothing$.
    * **Union:** We show $\bigcup_{i \in I} f^{-1}(B_i) = A$ by showing $x \in \bigcup_{i \in I} f^{-1}(B_i) \iff x \in A$:
      $$
      \begin{aligned}
      
      x \in \bigcup_{i \in I} f^{-1}(B_i) &\iff \exists i \in I, \, x \in f^{-1}(B_i) \\
      &\iff \exists i \in I, \, f(x) \in B_i \\
      &\iff f(x) \in \bigcup_{i \in I} B_i \\
      &\iff f(x) \in B \\
      &\iff x \in A
      
      \end{aligned}
      $$
      Thus, $\{f^{-1}(B_i)\}_{i \in I}$ is a partition of $A$.
    
  - **Solution 5.2**
    **Part (b):**
    By definition, $\{A_i\}_{i \in I}$ being a partition of $A$ means: (1) $A_i \neq \varnothing$ for all $i \in I$, (2) $A_i \cap A_j = \varnothing$ for all $i \neq j$, and (3) $\bigcup_{i \in I} A_i = A$. We verify these three conditions for $\{f(A_i)\}_{i \in I}$ in $f(A)$:
    
    * **Non-emptiness:** Let $i \in I$. Since $\{A_i\}_{i \in I}$ is a partition, there exists some $x \in A_i$. By definition of image, $f(x) \in f(A_i)$. Thus, $f(A_i) \neq \varnothing$.
    * **Disjointness:** Let $i, j \in I$ with $i \neq j$. Suppose there exists $y \in f(A_i) \cap f(A_j)$. By definition of image, there exist $x_1 \in A_i$ and $x_2 \in A_j$ such that $f(x_1) = y$ and $f(x_2) = y$, meaning $f(x_1) = f(x_2)$. Since $f$ is injective, $f(x_1) = f(x_2) \implies x_1 = x_2$. This implies $x_1 \in A_i \cap A_j$. However, $A_i \cap A_j = \varnothing$, which is a contradiction. Thus, $f(A_i) \cap f(A_j) = \varnothing$.
    * **Union:** We show $\bigcup_{i \in I} f(A_i) = f(A)$ by showing $y \in \bigcup_{i \in I} f(A_i) \iff y \in f(A)$:
      $$
      \begin{aligned}
      
      y \in \bigcup_{i \in I} f(A_i) &\iff \exists i \in I, \, y \in f(A_i) \\
      &\iff \exists i \in I, \, \exists x \in A_i, \, f(x) = y \\
      &\iff \exists x \in \bigcup_{i \in I} A_i, \, f(x) = y \\
      &\iff \exists x \in A, \, f(x) = y \\
      &\iff y \in f(A)
      
      \end{aligned}
      $$
      Thus, $\{f(A_i)\}_{i \in I}$ is a partition of $f(A)$.
