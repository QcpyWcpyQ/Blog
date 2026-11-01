---
title: "Week 3"
published: 2026-11-01
description: "Complete workshop solutions on limits proved from the definition, recursive sequences, and the sum rule for convergent sequences."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Limits proved from the definition

- **Problem 1**  
  Compute the following limits, proving them directly from the definition:

  1. $\displaystyle\lim_{n\to\infty}\frac{2n^4-6n^3}{3n-4}$.
  2. $\displaystyle\lim_{n\to\infty}\frac{n-1}{n+1}$.
  3. $\displaystyle\lim_{n\to\infty}\frac{6n^2-7n-1}{4n^2+8}$.
  4. $\displaystyle\lim_{n\to\infty}\frac{2n+1}{-4n^2+4}$.
  5. $\displaystyle\lim_{n\to\infty}\frac{\sin(n^3)}{n^2+2}$.
  6. $\displaystyle\lim_{n\to\infty}\frac{n^2+1}{n^3+2}$.

  - **Proof 1.1 (Part a)**  
    We claim that the sequence tends to $+\infty$. Let $M>0$. For $n\geqslant6$, we have $n-3\geqslant n/2$ and $0<3n-4\leqslant3n$. Therefore

    $$
    \frac{2n^4-6n^3}{3n-4}
    =\frac{2n^3(n-3)}{3n-4}
    \geqslant\frac{n^4}{3n}
    =\frac{n^3}{3}.
    $$

    Choose

    $$
    N=\max\left\{6,\left\lceil(3M)^{1/3}\right\rceil+1\right\}.
    $$

    If $n\geqslant N$, then $n>(3M)^{1/3}$, so

    $$
    \frac{2n^4-6n^3}{3n-4}
    \geqslant\frac{n^3}{3}>M.
    $$

    This is precisely the definition of divergence to $+\infty$. Hence

    $$
    \boxed{\lim_{n\to\infty}\frac{2n^4-6n^3}{3n-4}=+\infty}.
    $$

  - **Proof 1.2 (Part b)**  
    We claim that the limit is $1$. Let $\varepsilon>0$ and choose

    $$
    N=\left\lceil\frac2\varepsilon\right\rceil+1.
    $$

    If $n\geqslant N$, then $n>2/\varepsilon$, and

    $$
    \left|\frac{n-1}{n+1}-1\right|
    =\left|\frac{-2}{n+1}\right|
    =\frac2{n+1}
    <\frac2n
    <\varepsilon.
    $$

    Therefore

    $$
    \boxed{\lim_{n\to\infty}\frac{n-1}{n+1}=1}.
    $$

  - **Proof 1.3 (Part c)**  
    We claim that the limit is $3/2$. For every $n\geqslant1$,

    $$
    \begin{aligned}
    \left|\frac{6n^2-7n-1}{4n^2+8}-\frac32\right|
    &=\left|\frac{2(6n^2-7n-1)-3(4n^2+8)}{2(4n^2+8)}\right|\\
    &=\frac{14n+26}{8n^2+16}\\
    &\leqslant\frac{40n}{8n^2}
    =\frac5n.
    \end{aligned}
    $$

    Let $\varepsilon>0$ and choose

    $$
    N=\left\lceil\frac5\varepsilon\right\rceil+1.
    $$

    If $n\geqslant N$, then $5/n<\varepsilon$, and the preceding estimate gives

    $$
    \left|\frac{6n^2-7n-1}{4n^2+8}-\frac32\right|<\varepsilon.
    $$

    Thus

    $$
    \boxed{\lim_{n\to\infty}\frac{6n^2-7n-1}{4n^2+8}=\frac32}.
    $$

  - **Proof 1.4 (Part d)**  
    We claim that the limit is $0$. For $n\geqslant2$,

    $$
    4n^2-4\geqslant2n^2
    \qquad\text{and}\qquad
    2n+1\leqslant3n.
    $$

    Hence

    $$
    \left|\frac{2n+1}{-4n^2+4}-0\right|
    =\frac{2n+1}{4n^2-4}
    \leqslant\frac{3n}{2n^2}
    =\frac3{2n}.
    $$

    Let $\varepsilon>0$ and choose

    $$
    N=\max\left\{2,\left\lceil\frac3{2\varepsilon}\right\rceil+1\right\}.
    $$

    If $n\geqslant N$, then $3/(2n)<\varepsilon$. Therefore

    $$
    \boxed{\lim_{n\to\infty}\frac{2n+1}{-4n^2+4}=0}.
    $$

  - **Proof 1.5 (Part e)**  
    We use the bound $|\sin x|\leqslant1$. For every $n\geqslant1$,

    $$
    \left|\frac{\sin(n^3)}{n^2+2}-0\right|
    \leqslant\frac1{n^2+2}
    <\frac1{n^2}.
    $$

    Let $\varepsilon>0$ and choose

    $$
    N=\left\lceil\frac1{\sqrt\varepsilon}\right\rceil+1.
    $$

    If $n\geqslant N$, then $n>1/\sqrt\varepsilon$, so $1/n^2<\varepsilon$. Consequently,

    $$
    \boxed{\lim_{n\to\infty}\frac{\sin(n^3)}{n^2+2}=0}.
    $$

  - **Proof 1.6 (Part f)**  
    We claim that the limit is $0$. For every $n\geqslant1$, we have $n^2+1\leqslant2n^2$ and $n^3+2\geqslant n^3$. Thus

    $$
    \left|\frac{n^2+1}{n^3+2}-0\right|
    =\frac{n^2+1}{n^3+2}
    \leqslant\frac{2n^2}{n^3}
    =\frac2n.
    $$

    Let $\varepsilon>0$ and choose

    $$
    N=\left\lceil\frac2\varepsilon\right\rceil+1.
    $$

    If $n\geqslant N$, then $2/n<\varepsilon$. Hence

    $$
    \boxed{\lim_{n\to\infty}\frac{n^2+1}{n^3+2}=0}.
    $$

## Recursive sequences

- **Problem 2**

  1. Consider the sequence $y_1=1$ and $y_{n+1}=3-y_n$, and set $y=\lim y_n$. Because $(y_n)$ and $(y_{n+1})$ have the same limit, taking the limit across the recursive equation gives $y=3-y$. Solving, we conclude that $\lim y_n=3/2$. What is wrong with this argument?
  2. This time set $y_1=1$ and

     $$
     y_{n+1}=3-\frac1{y_n}.
     $$

     Find the limit of the sequence.

  - **Solution 2.1**  
    The argument assumes, without proof, that $(y_n)$ converges. In fact,

    $$
    y_1=1,qquad y_2=2,qquad y_3=1,qquad y_4=2,ldots
    $$

    By induction,

    $$
    y_{2k-1}=1,qquad y_{2k}=2
    $$

    for every $k\geqslant1$. The odd subsequence converges to $1$, while the even subsequence converges to $2$. Since these limits are different, $(y_n)$ does not converge.

    The equation $y=3-y$ only shows that **if** the sequence had a limit, that limit would have to be $3/2$. A fixed point of the recurrence is a necessary condition for a limit, not a proof that the sequence converges. Therefore

    $$
    \boxed{(y_n)\text{ diverges; it alternates between }1\text{ and }2.}
    $$

  - **Solution 2.2**  
    Set

    $$
    \alpha=\frac{3+\sqrt5}{2},
    \qquad
    \beta=\frac{3-\sqrt5}{2}.
    $$

    These are the two roots of $x^2-3x+1=0$, so

    $$
    3-\frac1\alpha=\alpha,
    \qquad
    3-\frac1\beta=\beta.
    $$

    We first prove that

    $$
    \beta<y_n<\alpha
    $$

    for every $n$. Since $\beta<1<\alpha$, this holds for $n=1$. Suppose that $\beta<y_n<\alpha$. The function

    $$
    f(x)=3-\frac1x
    $$

    is strictly increasing on $(0,\infty)$. Therefore

    $$
    \beta=f(\beta)<f(y_n)=y_{n+1}<f(\alpha)=\alpha.
    $$

    The claim follows by induction. Moreover,

    $$
    \begin{aligned}
    y_{n+1}-y_n
    &=3-\frac1{y_n}-y_n\\
    &=-\frac{y_n^2-3y_n+1}{y_n}\\
    &=\frac{(\alpha-y_n)(y_n-\beta)}{y_n}>0.
    \end{aligned}
    $$

    Thus $(y_n)$ is strictly increasing and bounded above by $\alpha$. By the monotone convergence theorem, it converges to some $L$ with $L\geqslant y_1=1$.

    Because every $y_n\geqslant1$, we may take limits in the recurrence:

    $$
    L=3-\frac1L.
    $$

    Hence

    $$
    L^2-3L+1=0,
    $$

    so $L$ is either $\alpha$ or $\beta$. Since $L\geqslant1$ but $\beta<1$, only $L=\alpha$ is possible. Therefore

    $$
    \boxed{\lim_{n\to\infty}y_n=\frac{3+\sqrt5}{2}}.
    $$

## Limit of a sum

- **Problem 3**  
  Let $(a_n)_{n\in\mathbb N},(b_n)_{n\in\mathbb N}\subseteq\mathbb R$ satisfy

  $$
  \lim_{n\to\infty}a_n=a,
  \qquad
  \lim_{n\to\infty}b_n=b.
  $$

  Prove that

  $$
  \lim_{n\to\infty}(a_n+b_n)=a+b.
  $$

  - **Proof 3.1**  
    Let $\varepsilon>0$. Since $a_n\to a$, there exists $N_1\in\mathbb N$ such that

    $$
    n\geqslant N_1
    \quad\Longrightarrow\quad
    |a_n-a|<\frac\varepsilon2.
    $$

    Since $b_n\to b$, there exists $N_2\in\mathbb N$ such that

    $$
    n\geqslant N_2
    \quad\Longrightarrow\quad
    |b_n-b|<\frac\varepsilon2.
    $$

    Choose

    $$
    N=\max\{N_1,N_2\}.
    $$

    If $n\geqslant N$, then both estimates hold. By the triangle inequality,

    $$
    \begin{aligned}
    |(a_n+b_n)-(a+b)|
    &=|(a_n-a)+(b_n-b)|\\
    &\leqslant|a_n-a|+|b_n-b|\\
    &<\frac\varepsilon2+\frac\varepsilon2
    =\varepsilon.
    \end{aligned}
    $$

    This is exactly the definition of convergence. Hence

    $$
    \boxed{\lim_{n\to\infty}(a_n+b_n)=a+b}.
    $$
