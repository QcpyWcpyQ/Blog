---
title: "Functions and Preimages"
published: 2026-11-11
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**  
  Let $f\colon X\to Y$ be a function. Show that, for any subsets $A\subseteq X$ and $B\subseteq Y$, we have

  1. $f\bigl(f^{-1}(B)\bigr)\subseteq B$.
  2. $A\subseteq f^{-1}\bigl(f(A)\bigr)$.

  - **Solution 1.1**

    **(a)** Let

    $$
    y\in f\bigl(f^{-1}(B)\bigr).
    $$

    By the definition of an image, there exists

    $$
    x\in f^{-1}(B)
    $$

    such that $y=f(x)$. By the definition of a preimage, $x\in f^{-1}(B)$ implies that $f(x)\in B$. Hence $y\in B$. Therefore,

    $$
    f\bigl(f^{-1}(B)\bigr)\subseteq B.
    $$

    **(b)** Let $x\in A$. By the definition of an image,

    $$
    f(x)\in f(A).
    $$

    By the definition of a preimage, this implies that

    $$
    x\in f^{-1}\bigl(f(A)\bigr).
    $$

    Therefore,

    $$
    A\subseteq f^{-1}\bigl(f(A)\bigr).
    $$

---

- **Exercise 2**  
    Show that if $f\colon\mathbb R_{>0}\to\mathbb R_{>0}$ is invertible with inverse $g(x)=\dfrac{1}{f(x)}$ then  
    $$
    f\circ f(x)=\frac 1x
    $$
    and  
    $$
    f\circ f\circ f\circ f(x)=x.
    $$

    - **Solution 2.1**  
        We have  
        $$
        x=g\circ f(x)=\dfrac{1}{f\circ f(x)}\implies f\circ f(x)=\frac 1x.
        $$
        And we have  
        $$
        (f\circ f)\circ (f\circ f)=f\circ f\left(\dfrac 1x\right)=\dfrac{1}{\frac 1x}=x.
        $$
        
