---
title: "Series"
published: 2026-11-05
description: ""
tags: [MCS]
category: MCS
draft: true
image: ""
---

- **Definition 1**  
    If $(a_k)$ is a sequence then the series associated to $(a_k)$ is the new sequence  
    $$
    S_n=\sum_{k=1}^na_k.
    $$

- **Example 1.1**  

    1. Let $a_k=c$, then $S_n=nc$.
    2. Let $a_k=\frac 1k$, then $S_n=\sum_{k=1}^n\frac 1k$.
    3. Let $a_k=r^k$, then $S_n=\sum_{k=1}^nr^k=\begin{cases}\frac{r-r^{n+1}}{1-r}(r\neq 1)\\n\end{cases}$.

---

- **Definition 2**  
    We say that the series is convergent if the sequence $(S_n)$ is convergent.
- **Example 2.1**  
    Which of the previous examples are convergent series?  
    1. $(S_n)$ is not convergent except $c=0$, in this case $S_n\to 0$.
    2. $(S_n)$ is not convergent. Later we will prove it.
    3. When $0<r<1$

---

- **Definition 3**  
    If $S_n=\sum_{k=1}^na_k$ is convergent then we have  
    $$
    \lim_{n\to\infty}S_n=l
    $$
    and we write
    $$
    \sum_{k=1}^\infty a_k=l.
    $$

- **Example 3.1**  

    1. $\sum_k^\infty c=$ not convergent. We may say  
        $$
        \sum_k^\infty c=\begin{cases}
        \infty(c>0)\\
        0(c=0)\\
        -\infty(c<0)
        \end{cases}.
        $$

    2. $\sum_k^\infty c=\infty$. Later.

    3. 