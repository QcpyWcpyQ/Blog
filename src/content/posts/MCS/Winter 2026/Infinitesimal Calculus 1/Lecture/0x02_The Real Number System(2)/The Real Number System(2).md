---
title: "The Real Number System(2)"
published: 2026-10-20
description: "Bounds and extrema, supremum and infimum, completeness, negated sets, and the Archimedean property."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Bounds, extrema, supremum, and infimum

- **Definition 10 (Bounds and extrema)**
  Let $A\subseteq\mathbb{R}$. Define the sets of upper and lower bounds by
  $$
  \begin{aligned}
  \operatorname{UB}(A)
    &:=\{U\in\mathbb{R}:a\leqslant U\text{ for every }a\in A\},\\
  \operatorname{LB}(A)
    &:=\{L\in\mathbb{R}:L\leqslant a\text{ for every }a\in A\}.
  \end{aligned}
  $$
  The set $A$ is **bounded above** if $\operatorname{UB}(A)\neq\varnothing$ and **bounded below** if $\operatorname{LB}(A)\neq\varnothing$.

  A number $M$ is the **maximum** of $A$ if
  $$
  M\in A\qquad\text{and}\qquad a\leqslant M\quad\text{for every }a\in A.
  $$
  A number $m$ is the **minimum** of $A$ if
  $$
  m\in A\qquad\text{and}\qquad m\leqslant a\quad\text{for every }a\in A.
  $$
  Equivalently, a maximum is an upper bound that belongs to $A$, and a minimum is a lower bound that belongs to $A$.

  - **Proposition 10.1 (Uniqueness of extrema)**
    If $A$ has a maximum, then it is unique. If $A$ has a minimum, then it is unique.

    - **Proof 10.1.1**
      Suppose $M_1$ and $M_2$ are both maxima of $A$. Since $M_1\in A$ and $M_2$ is an upper bound, $M_1\leqslant M_2$. Similarly, $M_2\leqslant M_1$. Antisymmetry gives $M_1=M_2$.

      The proof for minima is analogous. If $m_1$ and $m_2$ are both minima, then $m_1\leqslant m_2$ and $m_2\leqslant m_1$, so antisymmetry gives $m_1=m_2$.

  The **supremum** of $A$, denoted by $\sup A$, is the least upper bound of $A$. Thus $s=\sup A$ means

  1. $a\leqslant s$ for every $a\in A$.
  2. $s\leqslant U$ for every $U\in\operatorname{UB}(A)$.

  The **infimum** of $A$, denoted by $\inf A$, is the greatest lower bound of $A$. Thus $i=\inf A$ means

  1. $i\leqslant a$ for every $a\in A$.
  2. $L\leqslant i$ for every $L\in\operatorname{LB}(A)$.

  Unlike a maximum or minimum, a supremum or infimum need not belong to $A$.

- **Completeness axiom**
  Every nonempty subset of $\mathbb{R}$ that is bounded above has a supremum in $\mathbb{R}$.

- **Proposition 10.2 (Supremum of a set and infimum of its negative)**
  Let $A\subseteq\mathbb{R}$ be nonempty, let
  $$
  B:=-A:=\{-a:a\in A\},
  $$
  and suppose $s=\sup A$. Then
  $$
  \inf B=-s.
  $$

  - **Proof 10.2.1**
    First, $-s$ is a lower bound of $B$. Indeed, if $b\in B$, then $b=-a$ for some $a\in A$. Since $a\leqslant s$, negating the inequality gives
    $$
    -s\leqslant-a=b.
    $$

    Now let $L$ be any lower bound of $B$. For every $a\in A$, the number $-a$ belongs to $B$, so
    $$
    L\leqslant-a.
    $$
    Negating this inequality gives $a\leqslant-L$. Hence $-L$ is an upper bound of $A$. Since $s$ is the least upper bound of $A$,
    $$
    s\leqslant-L,
    $$
    and therefore $L\leqslant-s$. Thus every lower bound of $B$ is at most $-s$, so $-s$ is the greatest lower bound of $B$.

- **Proposition 10.3 (Bounds of a negated set)**
  Let $A\subseteq\mathbb{R}$ and $B=-A$. Then
  $$
  \operatorname{LB}(B)
  =\{-U:U\in\operatorname{UB}(A)\}
  $$
  and
  $$
  \operatorname{UB}(B)
  =\{-L:L\in\operatorname{LB}(A)\}.
  $$

  - **Proof 10.3.1**
    We prove the first equality by showing both inclusions.

    Let $L\in\operatorname{LB}(B)$. For every $a\in A$, we have $-a\in B$, and therefore
    $$
    L\leqslant-a.
    $$
    Negating gives $a\leqslant-L$. Thus $-L\in\operatorname{UB}(A)$, and
    $$
    L=-(-L)\in\{-U:U\in\operatorname{UB}(A)\}.
    $$

    Conversely, let $L=-U$ for some $U\in\operatorname{UB}(A)$. If $b\in B$, then $b=-a$ for some $a\in A$. Since $a\leqslant U$, negation gives
    $$
    L=-U\leqslant-a=b.
    $$
    Hence $L\in\operatorname{LB}(B)$. This proves
    $$
    \operatorname{LB}(B)=\{-U:U\in\operatorname{UB}(A)\}.
    $$

    The second equality is proved similarly. If $U\in\operatorname{UB}(B)$, then $-a\leqslant U$ for every $a\in A$, so $-U\leqslant a$ for every $a\in A$. Hence $-U\in\operatorname{LB}(A)$ and $U=-(-U)$ belongs to the set on the right. Conversely, if $U=-L$ for some $L\in\operatorname{LB}(A)$, then $L\leqslant a$ implies $-a\leqslant-L=U$ for every $a\in A$, so $U\in\operatorname{UB}(B)$.

- **Corollary 10.4 (Existence of infima)**
  Every nonempty subset of $\mathbb{R}$ that is bounded below has an infimum in $\mathbb{R}$.

  - **Proof 10.4.1**
    Let $A$ be nonempty and bounded below, and set $B=-A$. If $L$ is a lower bound of $A$, then $-L$ is an upper bound of $B$. Thus $B$ is nonempty and bounded above. By completeness, $s:=\sup B$ exists. Applying Proposition 10.2 to $B$ and using $-B=A$ gives
    $$
    \inf A=-\sup B=-s.
    $$

- **Property 10.5 (Archimedean property)**

  1. For every $x\in\mathbb{R}$, there exists $n\in\mathbb{N}$ such that $n>x$.
  2. For every $x>0$, there exists $n\in\mathbb{N}$ such that
     $$
     \frac{1}{n}<x.
     $$

  - **Proof 10.5.1**
    First, we prove that $\mathbb{N}$ is not bounded above. Suppose, for contradiction, that $\mathbb{N}$ is bounded above. Since $\mathbb{N}$ is nonempty, completeness guarantees that
    $$
    s:=\sup\mathbb{N}
    $$
    exists. Because $s-1<s$ and $s$ is the least upper bound of $\mathbb{N}$, the number $s-1$ cannot be an upper bound of $\mathbb{N}$. Hence there exists $n\in\mathbb{N}$ such that
    $$
    s-1<n.
    $$
    Adding $1$ to both sides gives
    $$
    s<n+1.
    $$
    However, $n+1\in\mathbb{N}$, contradicting the fact that $s$ is an upper bound of $\mathbb{N}$. Therefore $\mathbb{N}$ is not bounded above. Equivalently, for every $x\in\mathbb{R}$, there exists $n\in\mathbb{N}$ such that $n>x$.

    Now let $x>0$. Then $x^{-1}>0$. By the first part, there exists $n\in\mathbb{N}$ such that
    $$
    n>x^{-1}.
    $$
    Thus $0<x^{-1}<n$. Taking reciprocals reverses the order of positive numbers, so
    $$
    0<n^{-1}<\left(x^{-1}\right)^{-1}=x.
    $$
    Since $n^{-1}=1/n$, we conclude that
    $$
    \frac{1}{n}<x.
    $$

- **Proposition 10.6**  
    $\mathbb Q$ is dense. It means that $\forall a<b\in\mathbb R,\exists q\in\mathbb Q$ such that $a<q<b$.  

    - **Proof 10.6.1**  
        First, suppose $0\leqslant a<b$. By Archimedean property, let $n\in\mathbb N$ such that $\frac 1n<b-a$. Let 
        $$
        K=\left\{k\in\mathbb N:k>na\right\}.
        $$
        $K\neq\varnothing$ since Archi for $x=na$. By the well ordering principle, $K$ has first element, this is $m$. Let's prove that $q=\frac mn$ is between $a,b$. By definition of $m$ we have that $q=\frac mn>a$. Let's prove $q<b$. Assume $q\geqslant b$ then $\frac mn\geqslant b$. We know that $\frac 1n<b-a$ and then $-\frac 1n>a-b$. Thus $\frac{m-1}n>a$. Since $m-1<m$ and $m$ was the first $k\in\mathbb N$ such that $\frac kn>a$. Then $m-1=0$, $m=1$. In this case $\frac{m-1}{n}=0>a$ which is a contradiction. Therefore $q<b$.  

        Second suppose $a<0<b$. $q=0$ works.

        Finally, suppose $a<b\leqslant 0$. By first part, take $q\in\mathbb Q$ such that $0\leqslant -b<q<-a$. Then $a<-q<b$.
