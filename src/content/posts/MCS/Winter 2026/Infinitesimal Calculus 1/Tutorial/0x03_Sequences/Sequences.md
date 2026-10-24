---
title: "Sequences"
published: 2026-10-20
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**  
    Consider the sequence $a_n=\dfrac{(-1)^n}{n}$.

    1. For $\varepsilon=0.005$, determine $n$ such that $\vert a_n-0\vert<\varepsilon$.
    2. Prove $\lim\limits_{n\to\infty} a_n=0$.

    - **Solution 1.1**  
        We have $\vert a_n-0\vert=\left\vert \dfrac{(-1)^n}{n}\right\vert=\frac 1n<\varepsilon=0.005$. Then answer is $n\geqslant 201$.

        I want to prove $\forall \varepsilon>0,\exists N\in\mathbb N,\forall n>N,\left\vert\dfrac{(-1)^n}{n}-0\right\vert<\varepsilon$. Let $\varepsilon>0$. Similarly we have $\dfrac 1\varepsilon<n$. Pick $N=\left\lceil\dfrac 1\varepsilon\right\rceil+1$. Then $\forall n>N$,  
        $$
        \vert a_n-0\vert=\dfrac 1n<\frac 1N=\dfrac{1}{\left\lceil\dfrac 1\varepsilon\right\rceil+1}<\dfrac{1}{\frac 1\varepsilon}=\varepsilon.
        $$
        