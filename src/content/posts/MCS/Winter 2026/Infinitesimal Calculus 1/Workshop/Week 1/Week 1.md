---
title: "Week 1"
published: 2026-10-16
description: "Complete workshop solutions on order properties, polynomial and rational inequalities, suprema and infima, and attained bounds."
tags: [MCS]
category: MCS
draft: false
image: ""
---

All variables are real unless stated otherwise. As in the lecture and tutorial notes, we use $\mathbb{N}=\{1,2,3,\ldots\}$.

## Comparing a number with its square

- **Problem 1**  
  Prove that:

  (a) If $a>1$, then $a^2>1$.

  (b) If $0<a<1$, then $a^2<a$.

  - **Proof 1.1 (Part a)**  
    Since $a>1>0$, multiplying $a>1$ by the positive number $a$ preserves the inequality:
    $$
    a^2>a.
    $$
    Combining this with $a>1$ gives
    $$
    \boxed{a^2>a>1}.
    $$
    In particular, $a^2>1$.

  - **Proof 1.2 (Part b)**  
    Since $a>0$, multiplying $a<1$ by $a$ preserves the inequality:
    $$
    \boxed{a^2<a\cdot1=a}.
    $$
    Thus the conclusion follows directly from compatibility of multiplication with order.

## Solving inequalities

- **Problem 2**  
  Solve the following inequalities:

  (a) $x^2>9$.

  (b) $\dfrac{x-1}{x+1}<0$.

  (c) $\dfrac1x+\dfrac1{1-x}\leqslant0$.

  (d) $\dfrac{x^2+3x-1}{x+1}\geqslant3$.

  - **Solution 2.1 (Part a)**  
    Factor the difference of squares:
    $$
    x^2>9\iff x^2-9>0\iff(x-3)(x+3)>0.
    $$
    A product is positive exactly when both factors are positive or both are negative. Therefore
    $$
    \begin{aligned}
    (x-3)(x+3)>0
      &\iff (x>3\land x>-3)\lor(x<3\land x<-3)\\
      &\iff x>3\lor x<-3.
    \end{aligned}
    $$
    Hence the solution set is
    $$
    \boxed{(-\infty,-3)\cup(3,\infty)}.
    $$
    The endpoints $-3$ and $3$ are excluded because they give $x^2=9$.

  - **Solution 2.2 (Part b)**  
    **Domain:** $x\neq-1$.

    A quotient is negative exactly when its numerator and denominator have opposite signs. Thus
    $$
    \begin{aligned}
    \frac{x-1}{x+1}<0
      &\iff (x-1>0\land x+1<0)\\
      &\qquad\lor(x-1<0\land x+1>0)\\
      &\iff (x>1\land x<-1)\lor(x<1\land x>-1).
    \end{aligned}
    $$
    The first pair of conditions is impossible. The second gives $-1<x<1$, so
    $$
    \boxed{(-1,1)}.
    $$
    The point $-1$ is outside the domain, and $x=1$ gives zero, which does not satisfy the strict inequality.

  - **Solution 2.3 (Part c)**  
    **Domain:** $x\neq0$ and $x\neq1$.

    On this domain, combine the fractions:
    $$
    \frac1x+\frac1{1-x}
      =\frac{1-x+x}{x(1-x)}
      =\frac1{x(1-x)}.
    $$
    The numerator is $1$, so this expression can never be zero. A nonzero number and its reciprocal have the same sign. Consequently,
    $$
    \frac1{x(1-x)}\leqslant0
      \iff\frac1{x(1-x)}<0
      \iff x(1-x)<0.
    $$
    The product is negative exactly when the two factors have opposite signs:
    $$
    \begin{aligned}
    x(1-x)<0
      &\iff (x>0\land1-x<0)\lor(x<0\land1-x>0)\\
      &\iff (x>0\land x>1)\lor(x<0\land x<1)\\
      &\iff x>1\lor x<0.
    \end{aligned}
    $$
    Therefore
    $$
    \boxed{(-\infty,0)\cup(1,\infty)}.
    $$
    Neither $0$ nor $1$ is included: both are excluded by the original denominators. There is no equality case even though the original inequality uses $\leqslant$.

  - **Solution 2.4 (Part d)**  
    **Domain:** $x\neq-1$.

    Subtract $3$ and simplify without multiplying by a denominator of unknown sign:
    $$
    \begin{aligned}
    \frac{x^2+3x-1}{x+1}\geqslant3
      &\iff\frac{x^2+3x-1-3(x+1)}{x+1}\geqslant0\\
      &\iff\frac{x^2-4}{x+1}\geqslant0\\
      &\iff\frac{(x-2)(x+2)}{x+1}\geqslant0.
    \end{aligned}
    $$
    The numerator is zero at $-2$ and $2$, while the denominator is zero at $-1$. Determine the sign on each interval:

    | Expression | $(-\infty,-2)$ | $(-2,-1)$ | $(-1,2)$ | $(2,\infty)$ |
    | --- | --- | --- | --- | --- |
    | $x-2$ | $-$ | $-$ | $-$ | $+$ |
    | $x+2$ | $-$ | $+$ | $+$ | $+$ |
    | $x+1$ | $-$ | $-$ | $+$ | $+$ |
    | $\dfrac{(x-2)(x+2)}{x+1}$ | $-$ | $+$ | $-$ | $+$ |

    The quotient is positive on $(-2,-1)$ and $(2,\infty)$. It is zero at $x=-2,2$, both of which are in the domain and satisfy the non-strict inequality. The point $x=-1$ remains excluded. Hence
    $$
    \boxed{[-2,-1)\cup[2,\infty)}.
    $$

  - **Results 2.5**

    | Part | Solution set |
    | --- | --- |
    | (a) | $(-\infty,-3)\cup(3,\infty)$ |
    | (b) | $(-1,1)$ |
    | (c) | $(-\infty,0)\cup(1,\infty)$ |
    | (d) | $[-2,-1)\cup[2,\infty)$ |

## Suprema and infima

- **Problem 3**  
  Compute, if they exist, the supremum and infimum of the following sets. Justify your answers.

  (a) $A=\left\{\dfrac{n}{2n+1}:n\in\mathbb{N}\right\}$.

  (b) $B=(4,5)\cup\{8\}$.

  - **Solution 3.1 (Part a)**  
    Set $a_n=n/(2n+1)$ for $n\in\mathbb{N}$.

    **Infimum.** Since $n\geqslant1$, the denominator $2n+1$ is positive and
    $$
    a_n-\frac13
      =\frac{3n-(2n+1)}{3(2n+1)}
      =\frac{n-1}{3(2n+1)}\geqslant0.
    $$
    Thus $1/3$ is a lower bound of $A$. Moreover, $a_1=1/3\in A$, so every lower bound $\ell$ must satisfy $\ell\leqslant a_1=1/3$. Therefore
    $$
    \boxed{\inf A=\min A=\frac13}.
    $$

    **Supremum: first establish an upper bound.** For every $n\in\mathbb{N}$,
    $$
    \frac12-a_n
      =\frac{2n+1-2n}{2(2n+1)}
      =\frac1{4n+2}>0.
    $$
    Hence $a_n<1/2$ for every $n$, and $1/2$ is an upper bound.

    **The Archimedean property used below.** For every real $T$, there is an $n\in\mathbb{N}$ with $n>T$. This follows from completeness: if $\mathbb{N}$ were bounded above, it would have a supremum $s$. Since $s-1<s$, the number $s-1$ would not be an upper bound, so some $n\in\mathbb{N}$ would satisfy $n>s-1$. Then $n+1\in\mathbb{N}$ and $n+1>s$, contradicting that $s$ is an upper bound. Thus $\mathbb{N}$ is unbounded above.

    **Supremum: no smaller number is an upper bound.** Let $y<1/2$ and set
    $$
    \varepsilon=\frac12-y>0.
    $$
    By the Archimedean property, choose $n\in\mathbb{N}$ such that
    $$
    n>\frac1{4\varepsilon}.
    $$
    Then $4n+2>1/\varepsilon>0$, and taking reciprocals gives
    $$
    \frac12-a_n=\frac1{4n+2}<\varepsilon.
    $$
    Thus
    $$
    a_n>\frac12-\varepsilon=y.
    $$
    We have found an element of $A$ greater than every proposed upper bound $y<1/2$. Therefore
    $$
    \boxed{\sup A=\frac12}.
    $$
    Since every $a_n<1/2$, the supremum does not belong to $A$. The set has no maximum: a maximum would necessarily equal the supremum, as proved in Problem 4.

    **Convention check.** If $0\in\mathbb{N}$ were used instead, the extra term $a_0=0$ would make $\inf A=\min A=0$. The supremum would still be $1/2$.

  - **Solution 3.2 (Part b)**  
    Let $B=(4,5)\cup\{8\}$.

    **Supremum.** Every $x\in B$ is either in $(4,5)$ or equal to $8$, so $x\leqslant8$. Hence $8$ is an upper bound. Because $8\in B$, any upper bound $u$ must satisfy $8\leqslant u$. Thus
    $$
    \boxed{\sup B=\max B=8}.
    $$

    **Infimum.** Every $x\in B$ satisfies $x>4$, so $4$ is a lower bound. Let $\ell>4$; we show that $\ell$ cannot be a lower bound.

    - If $4<\ell<5$, choose $x=(4+\ell)/2$. Then
      $$
      4<x<\ell<5,
      $$
      so $x\in B$ and $x<\ell$.
    - If $\ell\geqslant5$, choose $x=9/2$. Then $x\in(4,5)\subseteq B$ and $x<5\leqslant\ell$.

    In either case, $B$ contains an element below $\ell$. Thus no number greater than $4$ is a lower bound, proving
    $$
    \boxed{\inf B=4}.
    $$
    Since $4\notin B$, there is no minimum: a minimum would equal the infimum by Problem 4.

  - **Results 3.3**

    | Set | Infimum | Supremum | Minimum | Maximum |
    | --- | --- | --- | --- | --- |
    | $A=\{n/(2n+1):n\in\mathbb{N}\}$, with $\mathbb{N}=\{1,2,\ldots\}$ | $1/3$ | $1/2$ | $1/3$ | Does not exist |
    | $B=(4,5)\cup\{8\}$ | $4$ | $8$ | Does not exist | $8$ |

## Bounds that belong to the set

- **Problem 4**  
  Let $A\subseteq\mathbb{R}$.

  (a) Prove that if $M\in A$ is an upper bound for $A$, then $M=\sup A$.

  (b) Prove that if $m\in A$ is a lower bound for $A$, then $m=\inf A$.

  - **Proof 4.1 (Part a)**  
    By hypothesis, $M$ is an upper bound, so
    $$
    a\leqslant M\qquad\text{for every }a\in A.
    $$
    Let $u$ be any upper bound of $A$. Since $M\in A$, the defining inequality for $u$ applies to $M$ itself:
    $$
    M\leqslant u.
    $$
    Thus $M$ is an upper bound that is no greater than any other upper bound. By the definition of the least upper bound,
    $$
    \boxed{M=\sup A}.
    $$
    Because $M\in A$ as well, it is also the maximum of $A$.

  - **Proof 4.2 (Part b)**  
    By hypothesis, $m$ is a lower bound, so
    $$
    m\leqslant a\qquad\text{for every }a\in A.
    $$
    Let $\ell$ be any lower bound of $A$. Since $m\in A$, the defining inequality for $\ell$ applies to $m$ itself:
    $$
    \ell\leqslant m.
    $$
    Thus $m$ is a lower bound that is at least as large as any other lower bound. By the definition of the greatest lower bound,
    $$
    \boxed{m=\inf A}.
    $$
    Because $m\in A$ as well, it is also the minimum of $A$.

  - **Remark 4.3**  
    An upper bound or lower bound that belongs to the set automatically gives a maximum or minimum. A supremum or infimum can exist without belonging to the set, as $\sup A=1/2$ and $\inf B=4$ in Problem 3 illustrate. In Problem 4, membership already ensures that the set is nonempty, and the given bound is shown directly to be the least or greatest one.
