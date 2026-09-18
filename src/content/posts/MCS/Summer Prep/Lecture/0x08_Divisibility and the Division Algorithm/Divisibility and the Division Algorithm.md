---
title: "Divisibility and the Division Algorithm"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Divisibility and the Division Algorithm

- **Definition 1**
  Given $a,b\in\mathbb Z$ we say that $a$ **divides** $b$, denoted $a\mid b$, if there exists $k\in\mathbb Z$ such that $b=ka$.
  We say that $a$ is a **factor** or **divisor** of $b$.
  We say that $b$ is **divisible** by $a$ or $b$ is a **multiple** of $a$.

  If $a$ does not divide $b$ we write $a\nmid b$.

  The set of all divisors of $b$ is denoted $\text{Div}(b)$ and the set of all positive divisors of $b$ is denoted $\text{Div}_+(b)$.

- **Remark 1**
  Since $0=k\cdot 0$ for all $k\in\mathbb Z$ we have
  $$
  0\mid b\iff b=0.
  $$
  Note that $a\mid 0$ for all $a\in\mathbb Z$ since $0=0\cdot a$ for all $a\in\mathbb Z$. Besides, $1\mid a$ for all $a\in\mathbb Z$ since $a=a\cdot 1$ for all $a\in\mathbb Z$.

  If $a\neq 0$ and $a\mid b$ the integer $k$ such that $b=ka$ is unique. In fact, if $a\neq 0$ and $ka=b=k^\prime a$ then by the cancellation law $k=k^\prime$.

  The unique $k$ such that $b=ka$ is called the **exact quotient** of $b$ by $a$ and is denoted $\dfrac ba$.

  - **Example 1.1**
    $7\nmid 6$ because there is no $k\in\mathbb Z$ such that $6=7k$.

    $6\mid 42$ since $42=7\cdot 6$ and we have that $7=\dfrac{42} 6$.

    $\text{Div}(-14)=\left\{-1,1,-2,2,-7,7,-14,14\right\}$.

    $\text{Div}_+(-14)=\left\{1,2,7,14\right\}$.

  - **Proposition 1.2**
    Let $a,b\in\mathbb Z$. If $a\mid b$ then $\text{Div}(a)\subseteq \text{Div}(b)$ and $\text{Div}_+(a)\subseteq \text{Div}_+(b)$.

    - **Proof 1.2.1**
      Suppose that $a\mid b$ then by definition there exists $k\in\mathbb Z$ such that $b=ka$. Let $q\in\text{Div}(a)$ then $q\mid a$, that is, there exists $l\in\mathbb Z$ such that $a=lq$. Hence
      $$
      b=ka=k(lq)=(kl)q\quad\text{ with } kl\in\mathbb Z.
      $$
      Then $q\mid b$, that is, $q\in\text{Div}(b)$ and thus $\text{Div}(a)\subseteq \text{Div}(b)$.
      Analogously, we have that $\text{Div}_+(a)\subseteq \text{Div}_+(b)$.

  - **Theorem 1.3 (Properties of divisibility)**
    Let $a,b,c\in\mathbb Z$.

    1. $a\mid b\iff a\mid -b \iff -a\mid b \iff -a\mid -b$.
    2. If $a\mid b$ then $a\mid bc$.
    3. If $a\mid b$ then $ac\mid bc$.
    4. If $a\mid b$ and $a\mid c$ then $a\mid \alpha b+\beta c$ for all $\alpha, \beta \in\mathbb Z$.
    5. If $a\mid (b+c)$ and $a\mid b$ then $a\mid c$.
    6. If $a\mid b$ and $b\neq 0$ then $0<\vert a\vert\leqslant \vert b\vert$. 
    7. Divisibility is an order relation on $\mathbb N$.

    - **Proof 1.3.1**
      1. ($\Longrightarrow$) If $a\mid b$ then by definition there exists $k\in\mathbb Z$ such that $b=ka$, hence $-b=-(ka)=(-k)a$ with $-k\in\mathbb Z$ and thus $a\mid -b$. 
         ($\Longleftarrow$) If $a\mid -b$ then there exists $k\in\mathbb Z$ such that $-b=ka$, hence $b=-(ka)=(-k)a$ with $-k\in\mathbb Z$ and thus $a\mid b$.
         
         The remaining proofs are similar.
         
      2. If $a\mid b$ then there exists $k\in\mathbb Z$ such that $b=ka$, hence $bc=(ka)c=(kc)a$ with $kc\in\mathbb Z$ and thus $a\mid bc$.
         
      3. If $a\mid b$ then there exists $k\in\mathbb Z$ such that $b=ka$, hence $bc=(ka)c=k(ac)$ and thus $ac\mid bc$.
         
      4. If $a\mid b$ and $a\mid c$ then there exist $k,k^\prime\in\mathbb Z$ such that $b=ka$ and $c=k^\prime a$. Hence if $\alpha,\beta\in\mathbb Z$ then
         $$
         \begin{aligned}
         \alpha b+\beta c&=\alpha (ka)+\beta \left(k^\prime a\right) \\
         &= \left(\alpha k+\beta k^\prime\right)a
         \end{aligned}
         $$
         with $\alpha k+\beta k^\prime\in\mathbb Z$ and thus $a\mid \alpha b+\beta c$.
         
      5. If $a\mid(b+c)$ and $a\mid b$ then by $\text{Property 4}$ we have that $a\mid (b+c)-b=c$.
         
      6. If $a\mid b$ then there exists $k\in\mathbb Z$ such that $b=ka$ and since $b\neq 0$ we have that both $k$ and $a$ are nonzero. Hence $\vert b\vert=\vert ka\vert=\vert k\vert \vert a\vert\geqslant 1 \cdot \vert a\vert=\vert a\vert>0$.
         
      7. **Reflexive** Let $a \in \mathbb N$.
         Since $a = 1 \cdot a$ and $1 \in \mathbb Z$, by the definition of divisibility we have $a \mid a$, which means $a \sim a$.
         Therefore, the relation is reflexive.
         
         **Antisymmetric** Let $a, b \in \mathbb N$ such that $a \sim b$ and $b \sim a$.
         By definition, $a \mid b \implies b = k_1 a$ for some $k_1 \in \mathbb Z$, and $b \mid a \implies a = k_2 b$ for some $k_2 \in \mathbb Z$.
         Substituting $a = k_2 b$ into the first equation gives:
         $$
         b = k_1 (k_2 b) = (k_1 k_2) b.
         $$
         Since $b \in \mathbb N$, we can divide both sides by $b$ to get $k_1 k_2 = 1$. Since $a, b \in \mathbb N$, their multipliers $k_1, k_2$ must be positive integers. The only positive integers satisfying $k_1 k_2 = 1$ are $k_1 = k_2 = 1$.
         Substituting $k_1 = 1$ back yields $b = 1 \cdot a = a$.
         Therefore, the relation is antisymmetric.
         
         **Transitive** Let $a, b, c \in \mathbb N$ such that $a \sim b$ and $b \sim c$.
         By definition, $a \mid b \implies b = k_1 a$ for some $k_1 \in \mathbb Z$, and $b \mid c \implies c = k_2 b$ for some $k_2 \in \mathbb Z$.
         Substituting the expression for $b$ into the equation for $c$ yields:
         $$
         c = k_2 (k_1 a) = (k_2 k_1) a.
         $$
         Since $k_1, k_2 \in \mathbb Z$, their product $k_2 k_1 \in \mathbb Z$. Thus, by the definition of divisibility, we have $a \mid c$, which means $a \sim c$.
         Therefore, the relation is transitive.
         
         Since the divisibility relation on $\mathbb N$ is reflexive, antisymmetric, and transitive, it is an order relation.
    
  - **Question 1.4**
    If $a\mid bc$, must $a\mid b$ or $a\mid c$?
  
    - **Solution 1.4.1**
      No. For example, $6\mid (2)(3)$ but $6\nmid 2$ and $6\nmid 3$.
  
  Divisibility is not an order relation on $\mathbb Z$ because it is not antisymmetric. For example, $2\mid -2$ and $-2\mid 2$ but $2\neq -2$.

---

- **Definition 2**
  Given $n,d\in\mathbb Z$ with $d\neq 0$, two integers $q,r$ are called the **quotient** and the **remainder** of $n$ by $d$ if
  $$
  n=dq+r\quad\text{ with }0\leqslant r<\vert d\vert.
  $$

  - **Example 2.1**
    The signs of $n$ and $d$ affect the quotients but the remainder is always nonnegative. For example:
    $$
    \begin{aligned}
    23&=5\cdot 4 +3 \\
    -23&=5\cdot(-5)+2 \\
    23&=(-5)\cdot(-4)+3 \\
    -23&=(-5)\cdot 5+2
    \end{aligned}
    $$

  - **Proposition 2.2**
    Given $n,d\in\mathbb Z$ with $d\neq 0$, the quotient and the remainder of the division of $n$ by $d$ are unique.

    - **Proof 2.2.1**
      Suppose that
      $$
      dq+r=n=dq^\prime +r^\prime\quad\text{ with } 0\leqslant r,r^\prime < \vert d\vert.
      $$
      Then we obtain that $d\left(q^\prime-q\right)=r - r^\prime$ and thus $d\mid r-r^\prime$. Since $0 \leqslant r, r^\prime < |d|$, we have $|r - r^\prime| < |d|$. By $\text{Property 6}$, a nonzero integer cannot be divided by an integer with a larger absolute value, so this is possible if and only if $r - r^\prime=0$, that is, $r=r^\prime$. Now, $dq=dq^\prime$ with $d\neq 0$, then by the cancellation law $q=q^\prime$.
  
  - **Theorem 2.3 (The division algorithm)**
    Given $n,d\in\mathbb Z$ with $d\neq 0$, there exist unique $q,r\in\mathbb Z$ such that
    $$
    n=dq+r\quad\text{ with } 0\leqslant r<\vert d\vert.
    $$
  
    - **Proof 2.3.1**
      Let $m=\vert d\vert$ and consider the set $S=\left\{n-km : k\in\mathbb Z \land n-km\geqslant 0\right\}$. 
      Note that $S\neq\varnothing$ since if $n\geqslant 0$, then
      $$
      n-0\cdot m=n\geqslant 0,
      $$
      that is, $n\in S$, and if $n<0$, then 
      $$
      n-n\cdot m=n\cdot(1-m)\geqslant 0 \quad \text{since } m\geqslant 1 \text{ and } 1-m \leqslant 0,
      $$
      that is, $n-nm\in S$.
      Now, as $S\subseteq \mathbb Z$ with $S\neq\varnothing$ and bounded below by $0$, then by the well-ordering principle for integers, $S$ has a first element $r=n-km$ for some $k\in\mathbb Z$. If $r\geqslant m$, then
      $$
      r-m=n-km-m=n-(k+1)m\geqslant 0.
      $$
      So $r-m\in S$, which contradicts the minimality of $r$, therefore $0\leqslant r<m=\vert d\vert$. If $d>0$, then $n=dq+r$ with $q=k$, and if $d<0$, then $n=dq+r$ with $q=-k$.
  
  
  - **Corollary 2.4**
    Every integer is either even or odd, but not both.
  
    - **Proof 2.4.1**
      Let $n \in \mathbb Z$ and apply the division algorithm with divisor $d = 2$. Then there exist unique $q, r \in \mathbb Z$ such that
      $$
      n = 2q + r \quad \text{with } 0 \leqslant r < |2| = 2.
      $$
      Since $r \in \mathbb Z$ and $0 \leqslant r < 2$, the remainder $r$ must be either $0$ or $1$. We consider these two cases for existence and uniqueness:
  
      1. **Existence**:
         * If $r = 0$, then $n = 2q$, which means $n$ is an even number by definition.
         * If $r = 1$, then $n = 2q + 1$, which means $n$ is an odd number by definition.
         Therefore, every integer is either even or odd.
  
      2. **Uniqueness**:
         Suppose for the sake of contradiction that an integer $n$ is both even and odd. 
         By definition, there exist $k_1, k_2 \in \mathbb Z$ such that $n = 2k_1$ and $n = 2k_2 + 1$. 
         This implies we have found two different representations for the division of $n$ by $2$:
         $$
         n = 2k_1 + 0 \quad \text{and} \quad n = 2k_2 + 1.
         $$
         However, the division algorithm guarantees that the quotient and the remainder are uniquely determined. Since $0 \neq 1$, this contradicts the uniqueness of the remainder $r$. 
  
      Therefore, every integer is either even or odd, but not both.