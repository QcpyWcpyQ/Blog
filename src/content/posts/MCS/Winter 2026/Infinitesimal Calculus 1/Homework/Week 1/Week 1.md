---
title: "Week 1"
published: 2026-10-26
description: "Complete homework solutions on polynomial and rational inequalities, suprema and infima, and extrema of sets."
tags: [MCS]
category: MCS
draft: false
image: ""
---

All variables are real unless stated otherwise. As in the lecture notes, we use
$$
\mathbb N=\{1,2,3,\ldots\}.
$$

## Solving inequalities

- **Problem 1**
  Find the solution sets of the following inequalities.

  (a)
  $$
  (x-\pi)(x+5)(x-3)>0.
  $$

  (b)
  $$
  \frac{4x^2-x}{2x^2-18}>2.
  $$

  (c)
  $$
  \frac1x+\frac1{1-x}\leqslant0.
  $$

  - **Solution 1.1 (Part a)**
    The zeros of the three factors are
    $$
    -5,\qquad 3,\qquad\pi,
    $$
    and they satisfy
    $$
    -5<3<\pi.
    $$
    These points divide the real line into four intervals. The signs of the factors are as follows.

    | Interval | $x-\pi$ | $x+5$ | $x-3$ | Product |
    | --- | --- | --- | --- | --- |
    | $(-\infty,-5)$ | $-$ | $-$ | $-$ | $-$ |
    | $(-5,3)$ | $-$ | $+$ | $-$ | $+$ |
    | $(3,\pi)$ | $-$ | $+$ | $+$ | $-$ |
    | $(\pi,\infty)$ | $+$ | $+$ | $+$ | $+$ |

    The inequality is strict, so the three zeros are excluded. Therefore, the solution set is
    $$
    \boxed{(-5,3)\cup(\pi,\infty)}.
    $$

  - **Solution 1.2 (Part b)**
    The denominator must be nonzero, so the domain is
    $$
    x\neq-3,\qquad x\neq3.
    $$
    Move all terms to the left without multiplying by a denominator of unknown sign:
    $$
    \begin{aligned}
    \frac{4x^2-x}{2x^2-18}>2
    &\iff
    \frac{4x^2-x-2(2x^2-18)}{2x^2-18}>0\\
    &\iff
    \frac{36-x}{2(x-3)(x+3)}>0.
    \end{aligned}
    $$
    The critical points are $-3$, $3$, and $36$. Since the constant factor $2$ is positive, it does not affect the sign.

    | Interval | $36-x$ | $x-3$ | $x+3$ | Quotient |
    | --- | --- | --- | --- | --- |
    | $(-\infty,-3)$ | $+$ | $-$ | $-$ | $+$ |
    | $(-3,3)$ | $+$ | $-$ | $+$ | $-$ |
    | $(3,36)$ | $+$ | $+$ | $+$ | $+$ |
    | $(36,\infty)$ | $-$ | $+$ | $+$ | $-$ |

    The points $-3$ and $3$ are outside the domain, and $x=36$ gives equality rather than a strict inequality. Hence the solution set is
    $$
    \boxed{(-\infty,-3)\cup(3,36)}.
    $$

  - **Solution 1.3 (Part c)**
    The domain is
    $$
    x\neq0,\qquad x\neq1.
    $$
    On this domain,
    $$
    \frac1x+\frac1{1-x}
    =\frac{1-x+x}{x(1-x)}
    =\frac1{x(1-x)}.
    $$
    The expression cannot equal zero because its numerator is $1$. A nonzero real number and its reciprocal have the same sign, so
    $$
    \frac1{x(1-x)}\leqslant0
    \iff
    x(1-x)<0.
    $$
    The factors $x$ and $1-x$ have opposite signs exactly when
    $$
    x<0\qquad\text{or}\qquad x>1.
    $$
    Therefore, the solution set is
    $$
    \boxed{(-\infty,0)\cup(1,\infty)}.
    $$

  - **Results 1.4**

    | Part | Solution set |
    | --- | --- |
    | (a) | $(-5,3)\cup(\pi,\infty)$ |
    | (b) | $(-\infty,-3)\cup(3,36)$ |
    | (c) | $(-\infty,0)\cup(1,\infty)$ |

## Comparing suprema

- **Problem 2**
  Show that if
  $$
  \sup A<\sup B,
  $$
  then there exists $b\in B$ that is an upper bound of $A$. Give an example showing that this need not hold if we assume only
  $$
  \sup A\leqslant\sup B.
  $$

  - **Proof 2.1**
    Let
    $$
    \alpha=\sup A
    \qquad\text{and}\qquad
    \beta=\sup B,
    $$
    and suppose that $\alpha<\beta$.

    Since $\beta$ is the least upper bound of $B$, the number $\alpha<\beta$ cannot be an upper bound of $B$. Therefore, there exists $b\in B$ such that
    $$
    \alpha<b.
    $$
    On the other hand, $\alpha=\sup A$ is an upper bound of $A$, so
    $$
    a\leqslant\alpha<b
    \qquad\text{for every }a\in A.
    $$
    Hence $a\leqslant b$ for every $a\in A$, which means that $b$ is an upper bound of $A$.

  - **Counterexample 2.2**
    Take
    $$
    A=B=(0,1).
    $$
    Then
    $$
    \sup A=\sup B=1,
    $$
    so $\sup A\leqslant\sup B$.

    However, no $b\in B$ is an upper bound of $A$. Indeed, if $b\in(0,1)$, then
    $$
    a=\frac{b+1}{2}
    $$
    satisfies
    $$
    b<a<1.
    $$
    Thus $a\in A$ and $a>b$, so $b$ is not an upper bound of $A$. This shows why the strict inequality between the two suprema is necessary.

## A characterization of the infimum

- **Problem 3**
  Let $A\subseteq\mathbb R$ be nonempty and bounded below. Prove that $a=\inf A$ if and only if

  1. $a\leqslant x$ for every $x\in A$;
  2. for every $\varepsilon>0$, there exists $x\in A$ such that
     $$
     a\leqslant x<a+\varepsilon.
     $$

  - **Proof 3.1**
    **Forward direction.** Suppose that $a=\inf A$. By the definition of the infimum, $a$ is a lower bound of $A$. Hence
    $$
    a\leqslant x
    \qquad\text{for every }x\in A.
    $$

    Let $\varepsilon>0$. If there were no $x\in A$ satisfying $x<a+\varepsilon$, then
    $$
    a+\varepsilon\leqslant x
    \qquad\text{for every }x\in A.
    $$
    Thus $a+\varepsilon$ would be a lower bound of $A$. But
    $$
    a+\varepsilon>a,
    $$
    contradicting the fact that $a$ is the greatest lower bound. Therefore, there exists $x\in A$ such that
    $$
    a\leqslant x<a+\varepsilon.
    $$

    **Reverse direction.** Suppose that the two stated conditions hold. The first condition says that $a$ is a lower bound of $A$.

    Let $\ell$ be any lower bound of $A$. We show that $\ell\leqslant a$. Suppose, for contradiction, that $\ell>a$. Set
    $$
    \varepsilon=\ell-a>0.
    $$
    By the second condition, there exists $x\in A$ such that
    $$
    a\leqslant x<a+\varepsilon=\ell.
    $$
    This contradicts the fact that $\ell$ is a lower bound of $A$, which requires $\ell\leqslant x$ for every $x\in A$. Hence every lower bound $\ell$ satisfies $\ell\leqslant a$.

    Therefore, $a$ is the greatest lower bound of $A$, and
    $$
    \boxed{a=\inf A}.
    $$

## Suprema, infima, maxima, and minima

- **Problem 4**
  Compute, if they exist, the supremum, maximum, infimum, and minimum of the following sets.

  (a)
  $$
  A=\left\{\frac{n^2+2}{n^2+1}:n\in\mathbb N\right\}.
  $$

  (b)
  $$
  B=\left\{\frac1n+(-1)^n:n\in\mathbb N\right\}.
  $$

  (c)
  $$
  C=\left\{\frac{n}{3n+1}:n\in\mathbb N\right\}.
  $$

  - **Solution 4.1 (Part a)**
    Write
    $$
    a_n=\frac{n^2+2}{n^2+1}
    =1+\frac1{n^2+1}.
    $$

    **Maximum and supremum.** Since $n\geqslant1$,
    $$
    n^2+1\geqslant2,
    $$
    and therefore
    $$
    a_n=1+\frac1{n^2+1}\leqslant1+\frac12=\frac32.
    $$
    Equality holds when $n=1$, so
    $$
    \boxed{\sup A=\max A=\frac32}.
    $$

    **Infimum and minimum.** Every term satisfies $a_n>1$, so $1$ is a lower bound of $A$. To show that it is the greatest lower bound, let $\varepsilon>0$. By the Archimedean property, choose $n\in\mathbb N$ such that
    $$
    n>\frac1\varepsilon.
    $$
    Then
    $$
    n^2+1>n>\frac1\varepsilon,
    $$
    and taking reciprocals gives
    $$
    0<\frac1{n^2+1}<\varepsilon.
    $$
    Hence
    $$
    1<a_n<1+\varepsilon.
    $$
    By the characterization in Problem 3,
    $$
    \boxed{\inf A=1}.
    $$
    Since $a_n>1$ for every $n$, the infimum is not attained, so $A$ has no minimum.

  - **Solution 4.2 (Part b)**
    Write
    $$
    b_n=\frac1n+(-1)^n.
    $$

    **Maximum and supremum.** If $n$ is even, then
    $$
    b_n=1+\frac1n\leqslant1+\frac12=\frac32,
    $$
    with equality at $n=2$. If $n$ is odd, then
    $$
    b_n=-1+\frac1n\leqslant0<\frac32.
    $$
    Therefore,
    $$
    \boxed{\sup B=\max B=\frac32}.
    $$

    **Infimum and minimum.** Every even-indexed term is greater than $1$, and every odd-indexed term satisfies
    $$
    b_n=-1+\frac1n>-1.
    $$
    Thus $-1$ is a lower bound of $B$.

    Let $\varepsilon>0$. By the Archimedean property, choose $m\in\mathbb N$ such that
    $$
    m>\frac1{2\varepsilon},
    $$
    and set $n=2m+1$. Then $n$ is odd and
    $$
    n>\frac1\varepsilon.
    $$
    Then
    $$
    -1<b_n=-1+\frac1n<-1+\varepsilon.
    $$
    Problem 3 therefore gives
    $$
    \boxed{\inf B=-1}.
    $$
    Since $b_n>-1$ for every $n$, the infimum is not attained, so $B$ has no minimum.

  - **Solution 4.3 (Part c)**
    Write
    $$
    c_n=\frac{n}{3n+1}.
    $$

    **Minimum and infimum.** For every $n\geqslant1$,
    $$
    c_n-\frac14
    =\frac{4n-(3n+1)}{4(3n+1)}
    =\frac{n-1}{4(3n+1)}
    \geqslant0.
    $$
    Equality holds when $n=1$, so
    $$
    \boxed{\inf C=\min C=\frac14}.
    $$

    **Supremum and maximum.** We have
    $$
    \frac13-c_n
    =\frac{3n+1-3n}{3(3n+1)}
    =\frac1{3(3n+1)}>0.
    $$
    Therefore, $c_n<1/3$ for every $n$, so $1/3$ is an upper bound.

    Let $\varepsilon>0$. By the Archimedean property, choose $n\in\mathbb N$ such that
    $$
    n>\frac1{9\varepsilon}.
    $$
    Then
    $$
    0<\frac13-c_n
    =\frac1{3(3n+1)}
    <\frac1{9n}
    <\varepsilon.
    $$
    Hence
    $$
    \frac13-\varepsilon<c_n<\frac13.
    $$
    It follows that
    $$
    \boxed{\sup C=\frac13}.
    $$
    Since $c_n<1/3$ for every $n$, the supremum is not attained, so $C$ has no maximum.

  - **Results 4.4**

    | Set | Infimum | Minimum | Supremum | Maximum |
    | --- | --- | --- | --- | --- |
    | $A$ | $1$ | Does not exist | $3/2$ | $3/2$ |
    | $B$ | $-1$ | Does not exist | $3/2$ | $3/2$ |
    | $C$ | $1/4$ | $1/4$ | $1/3$ | Does not exist |
