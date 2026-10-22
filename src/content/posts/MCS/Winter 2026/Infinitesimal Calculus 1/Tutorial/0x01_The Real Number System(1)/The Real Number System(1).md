---
title: "The Real Number System(1)"
published: 2026-10-13
description: "Bounds, supremum and infimum, basic computations, signs of reciprocals and products, and inequalities (Exercises 2–6)."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Bounds, supremum, and infimum

- **Definition 1 (Upper and lower bounds)**  
  Let $A\subseteq\mathbb{R}$.

  A real number $u$ is an **upper bound (UB)** of $A$ if
  $$
  x\leqslant u\qquad\text{for every }x\in A.
  $$
  A real number $\ell$ is a **lower bound (LB)** of $A$ if
  $$
  \ell\leqslant x\qquad\text{for every }x\in A.
  $$
  The set is **bounded above** if it has an upper bound, **bounded below** if it has a lower bound, and **bounded** if it has both.

  The **supremum** of $A$, denoted $\sup A$, is its least upper bound. Thus $s=\sup A$ means:

  1. $x\leqslant s$ for every $x\in A$.
  2. If $u$ is any upper bound of $A$, then $s\leqslant u$.

  The **infimum** of $A$, denoted $\inf A$, is its greatest lower bound. Thus $m=\inf A$ means:

  1. $m\leqslant x$ for every $x\in A$.
  2. If $\ell$ is any lower bound of $A$, then $\ell\leqslant m$.

  - **Completeness axiom 1.1**  
    Every **nonempty** subset of $\mathbb{R}$ that is bounded above has a supremum in $\mathbb{R}$.

    The nonempty hypothesis is necessary: every real number is an upper bound of $\varnothing$, but there is no least such real number. The corresponding existence of an infimum for nonempty sets bounded below follows from Exercise 3.

  - **Proof method 1.2**  
    To prove $s=\sup A$, show that $s$ is an upper bound and that every $y<s$ fails to be an upper bound. The latter requires finding an $x\in A$ such that $y<x$.

    To prove $m=\inf A$, show that $m$ is a lower bound and that every $y>m$ fails to be a lower bound. The latter requires finding an $x\in A$ such that $x<y$.

    If an upper bound belongs to $A$, it is the **maximum** and hence the supremum: every upper bound must be at least that element. Similarly, a lower bound belonging to $A$ is the **minimum** and hence the infimum. A supremum or infimum need not belong to the set.

## Computing suprema and infima

- **Exercise 2**  
  Compute the supremum and infimum of
  $$
  A=\{0,1,2\},\qquad
  B=[1,2),\qquad
  C=\left\{\frac{3n+4}{2n-5}:n\in\mathbb{N}\right\}.
  $$
  Here we use $\mathbb{N}=\{1,2,3,\ldots\}$, as in the original calculations.

  - **Solution 2.1 (The finite set $A$)**  
    Every element of $A$ is at most $2$, so $2$ is an upper bound. Since $2\in A$, every upper bound $u$ must satisfy $2\leqslant u$. Hence
    $$
    \sup A=\max A=2.
    $$

    Every element of $A$ is at least $0$, so $0$ is a lower bound. Since $0\in A$, every lower bound $\ell$ must satisfy $\ell\leqslant0$. Hence
    $$
    \inf A=\min A=0.
    $$

  - **Solution 2.2 (The interval $B=[1,2)$)**  
    **Supremum.** Every $x\in B$ satisfies $x<2$, so $2$ is an upper bound. To prove that it is the least upper bound, let $y<2$.

    If $y<1$, then $1\in B$ and $1>y$, so $y$ is not an upper bound.

    If $1\leqslant y<2$, choose
    $$
    x=\frac{y+2}{2}.
    $$
    Then
    $$
    1\leqslant y<\frac{y+2}{2}<2,
    $$
    so $x\in B$ and $x>y$. Again, $y$ is not an upper bound. These two cases cover every $y<2$, proving
    $$
    \sup B=2.
    $$

    **Infimum.** Every $x\in B$ satisfies $1\leqslant x$, so $1$ is a lower bound. Because $1\in B$, every lower bound $\ell$ must satisfy $\ell\leqslant1$. Therefore
    $$
    \inf B=\min B=1.
    $$

    The supremum $2$ does not belong to $B$. In fact, $B$ has no maximum: for every $x\in B$, the number $(x+2)/2$ is a larger element of $B$.

  - **Solution 2.3 (The set $C$)**  
    Write
    $$
    c_n=\frac{3n+4}{2n-5}.
    $$
    The denominator is nonzero for every integer $n$, since $2n-5=0$ would require $n=5/2$. The first three values are
    $$
    c_1=-\frac73,\qquad c_2=-10,\qquad c_3=13.
    $$

    **Infimum.** We show that $-10\leqslant c_n$ for every $n\in\mathbb{N}$:

    - For $n=1$, $c_1=-7/3>-10$.
    - For $n=2$, $c_2=-10$.
    - For $n\geqslant3$, both $3n+4$ and $2n-5$ are positive, so $c_n>0>-10$.

    Thus $-10$ is a lower bound. Since $c_2=-10\in C$, every lower bound is at most $-10$. Therefore
    $$
    \inf C=\min C=-10.
    $$

    **Supremum.** We show that $c_n\leqslant13$ for every $n\in\mathbb{N}$. The cases $n=1,2$ follow from the values above. For $n\geqslant3$, the denominator is positive and
    $$
    \begin{aligned}
    13-c_n
      &=\frac{13(2n-5)-(3n+4)}{2n-5}\\
      &=\frac{23n-69}{2n-5}\\
      &=\frac{23(n-3)}{2n-5}\geqslant0.
    \end{aligned}
    $$
    Hence $13$ is an upper bound. Since $c_3=13\in C$, every upper bound is at least $13$. Therefore
    $$
    \sup C=\max C=13.
    $$

    If the convention $0\in\mathbb{N}$ is used, the additional term is $c_0=-4/5$, which lies between $-10$ and $13$. Thus the answers are unchanged.

  - **Results 2.4**

    | Set | Infimum | Supremum | Minimum exists? | Maximum exists? |
    | --- | --- | --- | --- | --- |
    | $A=\{0,1,2\}$ | $0$ | $2$ | Yes: $0$ | Yes: $2$ |
    | $B=[1,2)$ | $1$ | $2$ | Yes: $1$ | No |
    | $C=\{(3n+4)/(2n-5):n\in\mathbb{N}\}$ | $-10$ | $13$ | Yes: $c_2=-10$ | Yes: $c_3=13$ |

## Infimum and the negated set

- **Exercise 3**  
  Let $A\subseteq\mathbb{R}$ be **nonempty and bounded below**. Define
  $$
  -A:=\{-a:a\in A\}.
  $$
  Prove that $\inf A$ exists in $\mathbb{R}$ and
  $$
  \boxed{\inf A=-\sup(-A)}.
  $$

  - **Proof 3.1**  
    **Step 1: prove that $-A$ has a supremum.** Because $A$ is nonempty, $-A$ is also nonempty. Choose a lower bound $\ell$ of $A$. For every $a\in A$,
    $$
    \ell\leqslant a\quad\Longrightarrow\quad -a\leqslant-\ell.
    $$
    Thus $-\ell$ is an upper bound of $-A$. By completeness, the real number
    $$
    s:=\sup(-A)
    $$
    exists.

    **Step 2: show that $-s$ is a lower bound of $A$.** For every $a\in A$, we have $-a\in-A$, and hence
    $$
    -a\leqslant s\quad\Longrightarrow\quad -s\leqslant a.
    $$
    Therefore $-s$ is a lower bound.

    **Step 3: show that $-s$ is the greatest lower bound.** Let $b$ be any lower bound of $A$. Then
    $$
    b\leqslant a\quad\text{for every }a\in A,
    $$
    so $-b$ is an upper bound of $-A$. Since $s$ is the least upper bound of $-A$,
    $$
    s\leqslant-b\quad\Longrightarrow\quad b\leqslant-s.
    $$
    Thus every lower bound of $A$ is at most $-s$. Combining Steps 2 and 3 gives
    $$
    \inf A=-s=-\sup(-A).
    $$

  - **Remark 3.2 (The role of completeness)**  
    Negation reverses order and turns lower bounds of $A$ into upper bounds of $-A$. Completeness supplies $\sup(-A)$, and the proof constructs $\inf A$ from it. No separate assumption that $\inf A$ already exists is needed.

---

- **Exercise 4**  
  Let $a\in\mathbb{R}\setminus\{0\}$. Prove that
  $$
  a>0\iff a^{-1}>0,\qquad a<0\iff a^{-1}<0.
  $$

  - **Proof 4.1 (A nonzero number and its inverse have the same sign)**  
    Put $b=a^{-1}$. Then $ab=ba=1>0$, so $b\neq0$. We use the order properties that multiplication by a positive number preserves inequalities, while multiplication by a negative number reverses them.

    **If $a>0$, then $b>0$.** Suppose instead that $b\leqslant0$. Multiplying by the positive number $a$ gives
    $$
    ab\leqslant a\cdot0=0,
    $$
    contradicting $ab=1>0$. Hence $b=a^{-1}>0$.

    **If $a<0$, then $b<0$.** Suppose instead that $b\geqslant0$. Multiplying by the negative number $a$ reverses the inequality, so
    $$
    ab\leqslant a\cdot0=0,
    $$
    again contradicting $ab=1>0$. Hence $b=a^{-1}<0$.

    **Converses.** Since $ba=1$, uniqueness of the multiplicative inverse gives
    $$
    b^{-1}=a,\qquad\text{that is, }(a^{-1})^{-1}=a.
    $$
    Applying the two implications just proved to the nonzero number $b$ gives
    $$
    b>0\Longrightarrow a=b^{-1}>0,\qquad
    b<0\Longrightarrow a=b^{-1}<0.
    $$
    Thus both equivalences hold:
    $$
    \boxed{a>0\iff a^{-1}>0,\qquad a<0\iff a^{-1}<0}.
    $$

---

- **Exercise 5**  
  Let $a,b\in\mathbb{R}$. Prove that
  $$
  ab>0\iff(a>0\land b>0)\lor(a<0\land b<0).
  $$

  - **Proof 5.1 (A product is positive exactly when its factors have the same nonzero sign)**

    **Forward direction.** Suppose $ab>0$. Neither factor can be zero, because a zero factor would give $ab=0$. In particular, trichotomy gives either $a>0$ or $a<0$.

    - If $a>0$, Exercise 4 gives $a^{-1}>0$. Multiplying $ab>0$ by $a^{-1}$ preserves the inequality:
      $$
      a^{-1}(ab)>a^{-1}\cdot0
      \quad\Longrightarrow\quad b>0.
      $$
      Thus $a>0$ and $b>0$.

    - If $a<0$, Exercise 4 gives $a^{-1}<0$. Multiplying $ab>0$ by $a^{-1}$ reverses the inequality:
      $$
      a^{-1}(ab)<a^{-1}\cdot0
      \quad\Longrightarrow\quad b<0.
      $$
      Thus $a<0$ and $b<0$.

    These cases prove the forward implication.

    **Reverse direction.** If $a>0$ and $b>0$, multiply $b>0$ by $a>0$ to obtain
    $$
    ab>a\cdot0=0.
    $$
    If $a<0$ and $b<0$, multiply $b<0$ by $a<0$ and reverse the inequality to obtain
    $$
    ab>a\cdot0=0.
    $$
    Hence either pair of sign conditions implies $ab>0$, completing the equivalence.

---

- **Exercise 6**  
  Solve in $\mathbb{R}$.

  1. $(x-7)(2x+8)>0$.
  2. $\dfrac{x^2+3x-19}{x-5}>3$.

  - **Solution 6.1 (The product inequality)**  
    Both factors are defined for every real $x$. By Exercise 5, their product is positive exactly when both factors are positive or both are negative:
    $$
    \begin{aligned}
    (x-7)(2x+8)>0
    &\iff
    \bigl(x-7>0\land 2x+8>0\bigr)\\
    &\qquad\lor\bigl(x-7<0\land 2x+8<0\bigr)\\
    &\iff
    \bigl(x>7\land x>-4\bigr)
    \lor\bigl(x<7\land x<-4\bigr)\\
    &\iff x>7\lor x<-4.
    \end{aligned}
    $$
    Therefore the solution set is
    $$
    \boxed{(-\infty,-4)\cup(7,\infty)}.
    $$
    The endpoints $-4$ and $7$ are excluded because the product is zero there, while the inequality is strict.

  - **Solution 6.2 (The rational inequality)**

    **Step 1: determine the domain.** The denominator must be nonzero, so $x\neq5$.

    **Step 2: move all terms to one side and factor.** For $x\neq5$,
    $$
    \begin{aligned}
    \frac{x^2+3x-19}{x-5}>3
    &\iff \frac{x^2+3x-19}{x-5}-3>0\\
    &\iff \frac{x^2+3x-19-3(x-5)}{x-5}>0\\
    &\iff \frac{x^2-4}{x-5}>0\\
    &\iff \frac{(x-2)(x+2)}{x-5}>0.
    \end{aligned}
    $$

    **Step 3: determine the signs.** The numerator is zero at $x=-2,2$, and the denominator is zero at $x=5$. These three points split the domain into intervals on which each factor has a fixed sign. By Exercise 4, $x-5$ and its reciprocal have the same sign. Thus the sign of the quotient is the product of the signs in the first three rows:

    | Expression | $(-\infty,-2)$ | $(-2,2)$ | $(2,5)$ | $(5,\infty)$ |
    | --- | --- | --- | --- | --- |
    | $x+2$ | $-$ | $+$ | $+$ | $+$ |
    | $x-2$ | $-$ | $-$ | $+$ | $+$ |
    | $x-5$ | $-$ | $-$ | $-$ | $+$ |
    | $\dfrac{(x-2)(x+2)}{x-5}$ | $-$ | $+$ | $-$ | $+$ |

    The quotient is positive exactly on $(-2,2)$ and $(5,\infty)$. At $x=-2$ or $x=2$, the original fraction equals $3$, so neither endpoint satisfies the strict inequality. The point $x=5$ is outside the domain. Therefore
    $$
    \boxed{(-2,2)\cup(5,\infty)}.
    $$

    **Why the denominator's sign matters.** Multiplying an inequality by $x-5$ preserves its direction when $x>5$ and reverses it when $x<5$. Factoring and using the sign table accounts for both cases.
