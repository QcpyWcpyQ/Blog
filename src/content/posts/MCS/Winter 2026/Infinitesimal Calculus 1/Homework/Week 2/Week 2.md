---
title: "Week 2"
published: 2026-10-30
description: "Complete solutions on limits proved from the definition, recursive sequences, and monotone convergence."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Limits from the definition

- **Problem 1**
  Compute the following limits, proving them by definition.

  1. $\displaystyle\lim_{n\to\infty}\frac{3n^2+2n+2}{5n+4}$.
  2. $\displaystyle\lim_{n\to\infty}\left(n-\sqrt{n^2+2n}\right)$.
  3. $\displaystyle\lim_{n\to\infty}\frac{3n^2+2n}{n^2+1}$.
  4. $\displaystyle\lim_{n\to\infty}\frac{5n^3-n}{2n^3+3}$.
  5. $\displaystyle\lim_{n\to\infty}\frac{n-1}{2n+3}$.
  6. $\displaystyle\lim_{n\to\infty}\sin\left(\frac{2+5n}{8n+2n^2}\right)$.

  - **Solution 1.1 (Part a)**
    We prove that
    $$
    \lim_{n\to\infty}\frac{3n^2+2n+2}{5n+4}=+\infty.
    $$
    Let $M>0$. For every $n\geqslant1$,
    $$
    3n^2+2n+2\geqslant3n^2
    $$
    and
    $$
    5n+4\leqslant9n.
    $$
    Therefore,
    $$
    \frac{3n^2+2n+2}{5n+4}
    \geqslant
    \frac{3n^2}{9n}
    =\frac{n}{3}.
    $$
    By the Archimedean property, choose $n_0\in\mathbb{N}$ such that
    $$
    n_0>3M.
    $$
    Then, for every $n>n_0$,
    $$
    \frac{3n^2+2n+2}{5n+4}
    \geqslant\frac{n}{3}
    >\frac{n_0}{3}
    >M.
    $$
    Hence the sequence tends to $+\infty$ by definition.

  - **Solution 1.2 (Part b)**
    Rationalizing gives
    $$
    \begin{aligned}
    n-\sqrt{n^2+2n}
      &=\frac{n^2-(n^2+2n)}{n+\sqrt{n^2+2n}}\\
      &=-\frac{2}{1+\sqrt{1+\frac{2}{n}}}.
    \end{aligned}
    $$
    We prove that the limit is $-1$. Let $\varepsilon>0$. Since
    $$
    \sqrt{1+\frac{2}{n}}\geqslant1,
    $$
    we have
    $$
    \begin{aligned}
    \left\lvert
    n-\sqrt{n^2+2n}+1
    \right\rvert
      &=\left\lvert
        1-\frac{2}{1+\sqrt{1+\frac{2}{n}}}
        \right\rvert\\
      &=\frac{\sqrt{1+\frac{2}{n}}-1}
        {\sqrt{1+\frac{2}{n}}+1}\\
      &=\frac{\frac{2}{n}}
        {\left(\sqrt{1+\frac{2}{n}}+1\right)^2}\\
      &\leqslant\frac{1}{2n}.
    \end{aligned}
    $$
    Choose $n_0\in\mathbb{N}$ such that
    $$
    n_0>\frac{1}{2\varepsilon}.
    $$
    Then, for every $n>n_0$,
    $$
    \left\lvert
    n-\sqrt{n^2+2n}-(-1)
    \right\rvert
    \leqslant\frac{1}{2n}
    <\varepsilon.
    $$
    Therefore,
    $$
    \lim_{n\to\infty}\left(n-\sqrt{n^2+2n}\right)=-1.
    $$

  - **Solution 1.3 (Part c)**
    We prove that the limit is $3$. Let $\varepsilon>0$. For every $n\geqslant2$,
    $$
    \begin{aligned}
    \left\lvert\frac{3n^2+2n}{n^2+1}-3\right\rvert
      &=\frac{\lvert2n-3\rvert}{n^2+1}\\
      &\leqslant\frac{2n}{n^2}\\
      &=\frac{2}{n}.
    \end{aligned}
    $$
    Choose $n_0\in\mathbb{N}$ such that
    $$
    n_0>\max\left\{2,\frac{2}{\varepsilon}\right\}.
    $$
    Then, for every $n>n_0$,
    $$
    \left\lvert\frac{3n^2+2n}{n^2+1}-3\right\rvert
    \leqslant\frac{2}{n}
    <\varepsilon.
    $$
    Hence
    $$
    \lim_{n\to\infty}\frac{3n^2+2n}{n^2+1}=3.
    $$

  - **Solution 1.4 (Part d)**
    We prove that the limit is $\frac52$. Let $\varepsilon>0$. For every $n\geqslant1$,
    $$
    \begin{aligned}
    \left\lvert\frac{5n^3-n}{2n^3+3}-\frac{5}{2}\right\rvert
      &=\frac{2n+15}{4n^3+6}\\
      &\leqslant\frac{17n}{4n^3}\\
      &=\frac{17}{4n^2}\\
      &\leqslant\frac{17}{4n}.
    \end{aligned}
    $$
    Choose $n_0\in\mathbb{N}$ such that
    $$
    n_0>\frac{17}{4\varepsilon}.
    $$
    Then, for every $n>n_0$,
    $$
    \left\lvert\frac{5n^3-n}{2n^3+3}-\frac{5}{2}\right\rvert
    \leqslant\frac{17}{4n}
    <\varepsilon.
    $$
    Thus
    $$
    \lim_{n\to\infty}\frac{5n^3-n}{2n^3+3}=\frac{5}{2}.
    $$

  - **Solution 1.5 (Part e)**
    We prove that the limit is $\frac12$. Let $\varepsilon>0$. For every $n\geqslant1$,
    $$
    \begin{aligned}
    \left\lvert\frac{n-1}{2n+3}-\frac{1}{2}\right\rvert
      &=\frac{5}{4n+6}\\
      &<\frac{5}{4n}.
    \end{aligned}
    $$
    Choose $n_0\in\mathbb{N}$ such that
    $$
    n_0>\frac{5}{4\varepsilon}.
    $$
    Then, for every $n>n_0$,
    $$
    \left\lvert\frac{n-1}{2n+3}-\frac{1}{2}\right\rvert
    <\frac{5}{4n}
    <\varepsilon.
    $$
    Therefore,
    $$
    \lim_{n\to\infty}\frac{n-1}{2n+3}=\frac{1}{2}.
    $$

  - **Solution 1.6 (Part f)**
    We prove that the limit is $0$. Using $\lvert\sin x\rvert\leqslant\lvert x\rvert$, for every $n\geqslant1$ we have
    $$
    \begin{aligned}
    \left\lvert
    \sin\left(\frac{2+5n}{8n+2n^2}\right)
    \right\rvert
      &\leqslant\frac{2+5n}{8n+2n^2}\\
      &\leqslant\frac{7n}{2n^2}\\
      &=\frac{7}{2n}.
    \end{aligned}
    $$
    Let $\varepsilon>0$, and choose $n_0\in\mathbb{N}$ such that
    $$
    n_0>\frac{7}{2\varepsilon}.
    $$
    Then, for every $n>n_0$,
    $$
    \left\lvert
    \sin\left(\frac{2+5n}{8n+2n^2}\right)-0
    \right\rvert
    \leqslant\frac{7}{2n}
    <\varepsilon.
    $$
    Hence
    $$
    \lim_{n\to\infty}
    \sin\left(\frac{2+5n}{8n+2n^2}\right)=0.
    $$

---

## A recursively defined sequence

- **Problem 2**
  Let the sequence $(x_n)$ be defined by
  $$
  x_1=3,
  \qquad
  x_{n+1}=\frac{1}{4-x_n}.
  $$

  1. Prove that $(x_n)$ converges.
  2. Compute $\displaystyle\lim_{n\to\infty}x_n$.

  - **Solution 2.1 (Convergence)**
    Let
    $$
    \alpha=2-\sqrt3,
    \qquad
    \beta=2+\sqrt3.
    $$
    These are the two roots of
    $$
    x^2-4x+1=0,
    $$
    and in particular
    $$
    \alpha=\frac{1}{4-\alpha}.
    $$
    We have
    $$
    x_2=\frac{1}{4-x_1}=1,
    $$
    so $\alpha<x_2\leqslant1$.

    Suppose that $\alpha<x_n\leqslant1$ for some $n\geqslant2$. The function
    $$
    f(x)=\frac{1}{4-x}
    $$
    is increasing on $(-\infty,4)$. Hence
    $$
    x_{n+1}=f(x_n)>f(\alpha)=\alpha.
    $$
    Moreover, since $x_n\in(\alpha,1]\subset(\alpha,\beta)$,
    $$
    x_n^2-4x_n+1<0.
    $$
    Thus
    $$
    1<x_n(4-x_n),
    $$
    and because $4-x_n>0$,
    $$
    x_{n+1}=\frac{1}{4-x_n}<x_n.
    $$
    Therefore, by induction,
    $$
    \alpha<x_{n+1}<x_n\leqslant1
    \qquad(n\geqslant2).
    $$
    The tail $(x_n)_{n\geqslant2}$ is decreasing and bounded below by $\alpha$. By the monotone convergence theorem, it converges. Therefore, the original sequence $(x_n)$ also converges.

  - **Solution 2.2 (The limit)**
    Let
    $$
    L=\lim_{n\to\infty}x_n.
    $$
    Since $\alpha<x_n\leqslant1$ for $n\geqslant2$, we have $L\leqslant1$. Taking limits in
    $$
    x_{n+1}=\frac{1}{4-x_n}
    $$
    gives
    $$
    L=\frac{1}{4-L}.
    $$
    Therefore,
    $$
    L^2-4L+1=0,
    $$
    so
    $$
    L=2-\sqrt3
    \qquad\text{or}\qquad
    L=2+\sqrt3.
    $$
    Since $L\leqslant1$, only the first value is possible. Hence
    $$
    \lim_{n\to\infty}x_n=2-\sqrt3.
    $$

---

## A decreasing sequence bounded below

- **Problem 3**
  Let $(a_n)_{n\in\mathbb{N}}$ be a decreasing sequence that is bounded below. Prove that
  $$
  \lim_{n\to\infty}a_n
  =\inf\{a_n:n\in\mathbb{N}\}.
  $$

  - **Proof 3.1**
    Let
    $$
    l=\inf\{a_n:n\in\mathbb{N}\}.
    $$
    Since $l$ is a lower bound,
    $$
    l\leqslant a_n
    $$
    for every $n\in\mathbb{N}$.

    Let $\varepsilon>0$. Since $l+\varepsilon>l$ and $l$ is the greatest lower bound, $l+\varepsilon$ is not a lower bound of the set $\{a_n:n\in\mathbb{N}\}$. Therefore, there exists $n_0\in\mathbb{N}$ such that
    $$
    a_{n_0}<l+\varepsilon.
    $$
    Because $(a_n)$ is decreasing, for every $n>n_0$,
    $$
    l\leqslant a_n\leqslant a_{n_0}<l+\varepsilon.
    $$
    Hence
    $$
    \left\lvert a_n-l\right\rvert<\varepsilon.
    $$
    Thus $a_n\to l$, and therefore
    $$
    \lim_{n\to\infty}a_n
    =\inf\{a_n:n\in\mathbb{N}\}.
    $$
