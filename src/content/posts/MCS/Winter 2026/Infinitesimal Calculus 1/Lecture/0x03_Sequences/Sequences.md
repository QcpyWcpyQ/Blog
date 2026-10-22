---
title: "Sequences"
published: 2026-10-22
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**  
    A sequence is a function $f\colon \mathbb N \to \mathbb R$.

    - **Example 1.1**  
        $$
        \begin{aligned}f(n)&=2n.\\f(n)&=\frac 1n.\\f(n)&=(-1)^n.\\f(n)&=\frac{n^2-3}{n+n^3}.\end{aligned}
        $$

    We usually write $f_n$ instead of $f(n)$. Sometimes we list the values of $f_n:n\in\mathbb N$.

    - **Example 1.2**  
        $$
        \begin{aligned}f_n&=2n.\\f_n&=\frac 1n.\\f_n&=(-1)^n.\\f_n&=\frac{n^2-3}{n+n^3}.\end{aligned}
        $$

    Sometimes we prefer names like $a,b$ instead of $f$.

    - **Example 1.3**  
        $$
        \begin{aligned}a_n&=2n.\\a_n&=\frac 1n.\\b_n&=(-1)^n.\\c_n&=\frac{n^2-3}{n+n^3}.\end{aligned}
        $$

    Also, we use $(a_n)$ to denote the whole sequence.

    A sequence can be defined by recurrence.  

    - **Example 1.4**  
        $$
        \begin{aligned}
        
        a_1&=3 \\
        a_{n+1}&=\frac{2a_n}n(n\geqslant1)
        
        \end{aligned}\implies
        
        (a_n)=(3,6,6,4,2,\cdots).
        $$

    - **Example 1.5**  
        $$
        s_n=\sum_{k=1}^n\frac 1k.
        $$

---

- **Definition 2**  
    This is the most important concept in this part.

    - **Example 2.1**  
        $$
        a_n=\frac 1n.
        $$
        This sequence approaches $0$ when $n$ is large. The bigger $n$ is, the closer $a_n$ is to $0$.

    - **Example 2.2**  
        $$
        b_n=\frac{2n+1}{3n+8}.
        $$
        The bigger $n$ is, the closer $b_n$ is to $\frac 23$.

    - **Example 2.3**  
        $$
        a_n=(-1)^n.
        $$
        As $n$ gets larger, $a_n$ does not approach any value.

    Given a sequence $(a_n)$, we say that $(a_n)$ is convergent to $l$ or that the limit of $a_n$ is $l$ if  
    $$
    \forall \varepsilon>0,\exists n_0\in\mathbb N,\forall n>n_0,\left\vert a_n-l\right\rvert<\varepsilon.
    $$
    