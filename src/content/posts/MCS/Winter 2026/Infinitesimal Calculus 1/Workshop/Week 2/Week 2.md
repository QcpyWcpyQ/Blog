---
title: "Week 2"
published: 2026-10-24
description: "Complete workshop solutions on extrema of sets, the characterization of infimum, infima of unions, and limits proved from the definition."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Throughout, we use $\mathbb{N}=\{1,2,3,\ldots\}$. When a set is unbounded above, it has no supremum in $\mathbb{R}$; equivalently, its extended-real supremum is $+\infty$.

## Suprema, infima, maxima, and minima

- **Problem 1**  
  Compute the supremum, infimum, maximum, and minimum of the following sets. Justify each answer.

  $$
  \begin{aligned}
  A&=\{k^2-6k-1:k\in\mathbb{Z}\},\\
  B&=\left\{\frac{(-1)^n}{n^2+1}:n\in\mathbb{N}\right\},\\
  C&=\left\{\frac{4n+2}{3n-7}:n\in\mathbb{N}\right\},\\
  D&=\{2^n:n\in\mathbb{N}\},\\
  E&=\left\{\left(\frac12\right)^n:n\in\mathbb{N}\right\}.
  \end{aligned}
  $$

  - **Solution 1.1 (Set $A$)**  
    Complete the square:
    $$
    k^2-6k-1=(k-3)^2-10.
    $$
    Since $(k-3)^2\geqslant0$ for every integer $k$, every element of $A$ is at least $-10$. Equality is attained at $k=3$, so
    $$
    \boxed{\inf A=\min A=-10}.
    $$

    The set is unbounded above. Indeed, given any $M\in\mathbb{R}$, choose an integer $k>3+\sqrt{\max\{M+10,0\}}$. Then
    $$
    (k-3)^2-10>M.
    $$
    Hence $A$ has neither a supremum in $\mathbb{R}$ nor a maximum:
    $$
    \boxed{\sup A\text{ does not exist in }\mathbb{R},\qquad \max A\text{ does not exist}.}
    $$

  - **Solution 1.2 (Set $B$)**  
    Separate the sequence according to the parity of $n$.

    If $n$ is odd, then
    $$
    \frac{(-1)^n}{n^2+1}=-\frac1{n^2+1}.
    $$
    Among the odd positive integers, the smallest denominator occurs at $n=1$. Consequently,
    $$
    -\frac1{n^2+1}\geqslant-\frac12,
    $$
    with equality at $n=1$.

    If $n$ is even, then
    $$
    \frac{(-1)^n}{n^2+1}=\frac1{n^2+1}.
    $$
    This is positive and is largest for the smallest positive even integer, $n=2$. Thus
    $$
    \frac1{n^2+1}\leqslant\frac15,
    $$
    with equality at $n=2$.

    Every odd-indexed term is negative and every even-indexed term is positive, so these two observations give
    $$
    \boxed{\inf B=\min B=-\frac12,\qquad
    \sup B=\max B=\frac15}.
    $$

  - **Solution 1.3 (Set $C$)**  
    First evaluate the two terms for which the denominator is negative:
    $$
    c_1=\frac6{-4}=-\frac32,
    \qquad
    c_2=\frac{10}{-1}=-10.
    $$
    For $n\geqslant3$, rewrite the term as
    $$
    c_n=\frac{4n+2}{3n-7}
       =\frac43+\frac{34}{3(3n-7)}.
    $$
    Here $3n-7>0$. As $n$ increases, the positive correction term
    $34/[3(3n-7)]$ decreases. Therefore the largest term among those with
    $n\geqslant3$ occurs at $n=3$:
    $$
    c_3=\frac{14}{2}=7.
    $$
    All terms with $n\geqslant3$ are positive, whereas $c_1$ and $c_2$ are negative. Comparing the two exceptional negative terms gives
    $$
    \boxed{\inf C=\min C=-10,\qquad
    \sup C=\max C=7}.
    $$

  - **Solution 1.4 (Set $D$)**  
    Since $n\geqslant1$, we have $2^n\geqslant2$, and equality holds at $n=1$. Hence
    $$
    \boxed{\inf D=\min D=2}.
    $$
    The powers of $2$ are unbounded above. For example, Bernoulli's inequality gives $2^n=(1+1)^n\geqslant n+1$, so for every $M\in\mathbb{R}$ we can choose $n>M$ and obtain $2^n>M$. Therefore
    $$
    \boxed{\sup D\text{ does not exist in }\mathbb{R},\qquad \max D\text{ does not exist}.}
    $$

  - **Solution 1.5 (Set $E$)**  
    The sequence $2^{-n}$ is strictly decreasing, and its first term is $1/2$. Thus
    $$
    \boxed{\sup E=\max E=\frac12}.
    $$

    Every element of $E$ is positive, so $0$ is a lower bound. To show that it is the greatest lower bound, let $\varepsilon>0$. Choose $n\in\mathbb{N}$ so large that $n+1>1/\varepsilon$. Bernoulli's inequality yields $2^n\geqslant n+1$, and hence
    $$
    0<\left(\frac12\right)^n
      =\frac1{2^n}
      \leqslant\frac1{n+1}
      <\varepsilon.
    $$
    Thus elements of $E$ occur arbitrarily close to $0$ from above, so $\inf E=0$. Since $2^{-n}>0$ for every $n$, the value $0$ is not attained. Therefore
    $$
    \boxed{\inf E=0,\qquad \min E\text{ does not exist}.}
    $$

  - **Results 1.6**

    | Set | Infimum | Minimum | Supremum | Maximum |
    | --- | --- | --- | --- | --- |
    | $A$ | $-10$ | $-10$ | Does not exist in $\mathbb{R}$ | Does not exist |
    | $B$ | $-\frac12$ | $-\frac12$ | $\frac15$ | $\frac15$ |
    | $C$ | $-10$ | $-10$ | $7$ | $7$ |
    | $D$ | $2$ | $2$ | Does not exist in $\mathbb{R}$ | Does not exist |
    | $E$ | $0$ | Does not exist | $\frac12$ | $\frac12$ |

## Characterization of the infimum

- **Problem 2**  
  Let $A\subseteq\mathbb{R}$ be a bounded nonempty set. Prove that $\inf(A)=a$ if and only if both of the following conditions hold:

  1. $x\geqslant a$ for every $x\in A$;
  2. for every $\varepsilon>0$, there exists $x_0\in A$ such that
     $$
     a\leqslant x_0<a+\varepsilon.
     $$

  - **Proof 2.1 (Forward implication)**  
    Suppose that $\inf(A)=a$.

    By definition, the infimum is a lower bound of the set. Therefore
    $$
    x\geqslant a\qquad\text{for every }x\in A,
    $$
    proving the first condition.

    Now let $\varepsilon>0$. Since $a+\varepsilon>a$ and $a$ is the greatest lower bound of $A$, the number $a+\varepsilon$ cannot also be a lower bound of $A$. Hence there exists some $x_0\in A$ such that
    $$
    x_0<a+\varepsilon.
    $$
    Because $a$ is a lower bound, we also have $a\leqslant x_0$. Combining the two inequalities gives
    $$
    \boxed{a\leqslant x_0<a+\varepsilon}.
    $$
    Thus both conditions hold.

  - **Proof 2.2 (Reverse implication)**  
    Conversely, suppose that the two stated conditions hold.

    The first condition says exactly that $a$ is a lower bound of $A$. It remains to show that no lower bound can be larger than $a$.

    Let $\ell$ be any lower bound of $A$. Suppose, for contradiction, that $\ell>a$. Set
    $$
    \varepsilon=\ell-a>0.
    $$
    By the second condition, there exists $x_0\in A$ such that
    $$
    a\leqslant x_0<a+\varepsilon=\ell.
    $$
    However, $\ell$ is a lower bound and $x_0\in A$, so we must have $\ell\leqslant x_0$. This contradicts $x_0<\ell$.

    Therefore every lower bound $\ell$ of $A$ satisfies $\ell\leqslant a$. Since $a$ is itself a lower bound, it is the greatest lower bound. Hence
    $$
    \boxed{\inf(A)=a}.
    $$

## Infimum of a union

- **Problem 3**  
  Let $A,B\subseteq\mathbb{R}$ be nonempty sets that are bounded below. Prove that
  $$
  \inf(A\cup B)=\min\{\inf(A),\inf(B)\}.
  $$

  - **Proof 3.1**  
    Write
    $$
    \alpha=\inf(A),\qquad \beta=\inf(B),\qquad
    m=\min\{\alpha,\beta\}.
    $$
    For every $x\in A$, we have $x\geqslant\alpha\geqslant m$. Similarly, for every $x\in B$, we have $x\geqslant\beta\geqslant m$. Thus
    $$
    x\geqslant m\qquad\text{for every }x\in A\cup B,
    $$
    so $m$ is a lower bound of $A\cup B$.

    Now let $\ell$ be any lower bound of $A\cup B$. Since $A\subseteq A\cup B$ and $B\subseteq A\cup B$, the number $\ell$ is a lower bound of both $A$ and $B$. By the definition of infimum,
    $$
    \ell\leqslant\alpha
    \qquad\text{and}\qquad
    \ell\leqslant\beta.
    $$
    Therefore
    $$
    \ell\leqslant\min\{\alpha,\beta\}=m.
    $$
    Hence no lower bound of $A\cup B$ is larger than $m$. Since $m$ is itself a lower bound, it is the greatest lower bound, and
    $$
    \boxed{\inf(A\cup B)=\min\{\inf(A),\inf(B)\}}.
    $$

## Limits proved from the definition

- **Problem 4**  
  Prove the following limits directly from the definition of convergence of a sequence:

  (a) $\displaystyle\lim_{n\to\infty}\frac{2n^2}{n^3+3}=0$.

  (b) $\displaystyle\lim_{n\to\infty}\frac{6+3n}{4-5n}=-\frac35$.

  - **Proof 4.1 (Part a)**  
    Let $\varepsilon>0$. Choose
    $$
    N=\left\lceil\frac2\varepsilon\right\rceil+1.
    $$
    If $n\geqslant N$, then $n>2/\varepsilon$. Since $n^3+3>n^3$, we obtain
    $$
    \left|\frac{2n^2}{n^3+3}-0\right|
      =\frac{2n^2}{n^3+3}
      <\frac{2n^2}{n^3}
      =\frac2n
      <\varepsilon.
    $$
    Thus, for every $\varepsilon>0$, all terms with $n\geqslant N$ lie within $\varepsilon$ of $0$. By the definition of convergence,
    $$
    \boxed{\lim_{n\to\infty}\frac{2n^2}{n^3+3}=0}.
    $$

  - **Proof 4.2 (Part b)**  
    Let $\varepsilon>0$. First compute the distance from the proposed limit:
    $$
    \begin{aligned}
    \left|\frac{6+3n}{4-5n}+\frac35\right|
      &=\left|\frac{5(6+3n)+3(4-5n)}{5(4-5n)}\right|\\
      &=\left|\frac{42}{20-25n}\right|\\
      &=\frac{42}{25n-20},
    \end{aligned}
    $$
    where the last equality holds for every $n\geqslant1$.

    Choose
    $$
    N=\left\lceil\frac{20+42/\varepsilon}{25}\right\rceil+1.
    $$
    If $n\geqslant N$, then
    $$
    n>\frac{20+42/\varepsilon}{25},
    $$
    and therefore
    $$
    25n-20>\frac{42}{\varepsilon}.
    $$
    It follows that
    $$
    \left|\frac{6+3n}{4-5n}-\left(-\frac35\right)\right|
      =\frac{42}{25n-20}
      <\varepsilon.
    $$
    Hence, by the definition of convergence,
    $$
    \boxed{\lim_{n\to\infty}\frac{6+3n}{4-5n}=-\frac35}.
    $$
