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
  A sequence is a function $f\colon\mathbb{N}\to\mathbb{R}$.

  - **Example 1.1**
    $$
    \begin{aligned}
    f(n)&=2n,\\
    f(n)&=\frac{1}{n},\\
    f(n)&=(-1)^n,\\
    f(n)&=\frac{n^2-3}{n+n^3}.
    \end{aligned}
    $$

  We usually write $f_n$ instead of $f(n)$. Sometimes, we list the values of $f_n$ for $n\in\mathbb{N}$.

  - **Example 1.2**
    $$
    \begin{aligned}
    f_n&=2n,\\
    f_n&=\frac{1}{n},\\
    f_n&=(-1)^n,\\
    f_n&=\frac{n^2-3}{n+n^3}.
    \end{aligned}
    $$

  Sometimes, we prefer names such as $a$ and $b$ instead of $f$.

  - **Example 1.3**
    $$
    \begin{aligned}
    a_n&=2n,\\
    a_n&=\frac{1}{n},\\
    b_n&=(-1)^n,\\
    c_n&=\frac{n^2-3}{n+n^3}.
    \end{aligned}
    $$

  We also use $(a_n)$ to denote the whole sequence.

  A sequence can be defined by recurrence.

  - **Example 1.4**
    $$
    \begin{aligned}
    a_1&=3,\\
    a_{n+1}&=\frac{2a_n}{n}\quad(n\geqslant1)
    \end{aligned}
    \implies
    (a_n)=(3,6,6,4,2,\ldots).
    $$

  - **Example 1.5**
    $$
    s_n=\sum_{k=1}^n\frac{1}{k}.
    $$

---

- **Definition 2**
  This is the most important concept in this part.

  - **Example 2.1**
    $$
    a_n=\frac{1}{n}.
    $$
    This sequence approaches $0$ as $n$ becomes large. The larger $n$ is, the closer $a_n$ is to $0$.

  - **Example 2.2**
    $$
    b_n=\frac{2n+1}{3n+8}.
    $$
    The larger $n$ is, the closer $b_n$ is to $\frac{2}{3}$.

  - **Example 2.3**
    $$
    a_n=(-1)^n.
    $$
    As $n$ becomes larger, $a_n$ does not approach any value.

  Given a sequence $(a_n)$, we say that $(a_n)$ converges to $l$, or that the limit of $(a_n)$ is $l$, denoted by
  $$
  \lim_{n\to\infty}a_n=l,
  $$
  if
  $$
  \forall\varepsilon>0,\ \exists n_0\in\mathbb{N},\ \forall n>n_0,\quad
  \left\lvert a_n-l\right\rvert<\varepsilon.
  $$

- **Example 2.4**
  Let $a_n=\frac{1}{n}$. Then
  $$
  \lim_{n\to\infty}a_n=0.
  $$

  - **Proof 2.4.1**
    Let $\varepsilon>0$. We need to find $n_0$ such that
    $$
    n>n_0\implies
    \left\lvert\frac{1}{n}-0\right\rvert<\varepsilon.
    $$
    Equivalently,
    $$
    0-\varepsilon<\frac{1}{n}<0+\varepsilon.
    $$
    By the Archimedean property, there exists $n_0\in\mathbb{N}$ such that
    $$
    \frac{1}{n_0}<\varepsilon.
    $$
    If $n>n_0$, then
    $$
    \frac{1}{n}>0>0-\varepsilon
    $$
    and
    $$
    \frac{1}{n}<\frac{1}{n_0}<\varepsilon=0+\varepsilon.
    $$
    Thus
    $$
    \left\lvert\frac{1}{n}-0\right\rvert<\varepsilon.
    $$

- **Example 2.5**
  Let $a_n=\dfrac{3n}{2n-5}$. Then
  $$
  \lim_{n\to\infty}a_n=\frac{3}{2}.
  $$

  - **Proof 2.5.1**
    Let $\varepsilon>0$. We need to find $n_0$ such that
    $$
    n>n_0
    \implies
    \left\lvert\frac{3n}{2n-5}-\frac{3}{2}\right\rvert<\varepsilon
    \iff
    \left\lvert\frac{15}{4n-10}\right\rvert<\varepsilon.
    $$
    By the Archimedean property, there exists $n_1$ such that
    $$
    \frac{1}{n_1}<\frac{3\varepsilon}{15}
    \implies
    \frac{15}{3n_1}<\varepsilon.
    $$
    Now let
    $$
    n_0=\max\{n_1,11\}\geqslant n_1.
    $$
    If $n>n_0$, then
    $$
    \begin{aligned}
    \left\lvert\frac{3n}{2n-5}-\frac{3}{2}\right\rvert
      &=\left\lvert\frac{15}{4n-10}\right\rvert\\
      &=\frac{15}{4n-10}\\
      &<\frac{15}{4n-n}\\
      &=\frac{15}{3n}\\
      &<\frac{15}{3n_0}\\
      &<\varepsilon.
    \end{aligned}
    $$
    Therefore,
    $$
    \left\lvert\frac{3n}{2n-5}-\frac{3}{2}\right\rvert<\varepsilon.
    $$

---

- **Definition 3**
  A sequence is said to be convergent if it has a limit. A sequence is said to be divergent if it is not convergent.

- **Example 3.1**
  The sequence $a_n=(-1)^n$ is divergent.

  - **Proof 3.1.1**
    We must prove that it does not have a limit $l$. Suppose, for contradiction, that it has a limit $l$. Then
    $$
    \forall\varepsilon>0,\ \exists n_0\in\mathbb{N},\ \forall n>n_0,\quad
    \left\lvert a_n-l\right\rvert<\varepsilon.
    $$
    Take $\varepsilon=1$. For every $n>n_0$,
    $$
    \left\lvert a_n-l\right\rvert<1.
    $$
    In particular, let $n>n_0$ be even. Then
    $$
    \left\lvert1-l\right\rvert<1.
    $$
    Let $n>n_0$ be odd. Then
    $$
    \left\lvert-1-l\right\rvert<1.
    $$
    Thus,
    $$
    \left\lvert-1-l\right\rvert+\left\lvert1-l\right\rvert<2.
    $$
    By the triangle inequality,
    $$
    \begin{aligned}
    \left\lvert-1-l\right\rvert+\left\lvert1-l\right\rvert
      &=\left\lvert1+l\right\rvert+\left\lvert1-l\right\rvert\\
      &\geqslant\left\lvert1+l+1-l\right\rvert\\
      &=2.
    \end{aligned}
    $$
    This gives $2>2$, which is a contradiction.

- **Theorem 3.2**
  If
  $$
  \lim_{n\to\infty}a_n=l_1
  \qquad\text{and}\qquad
  \lim_{n\to\infty}a_n=l_2,
  $$
  then $l_1=l_2$.

  - **Proof 3.2.1**
    Suppose, for contradiction, that $l_1\neq l_2$. Without loss of generality, assume that $l_1<l_2$, and let
    $$
    \varepsilon=\frac{l_2-l_1}{2}.
    $$
    Since $a_n\to l_1$, there exists $n_1\in\mathbb{N}$ such that, for every $n>n_1$,
    $$
    \left\lvert a_n-l_1\right\rvert<\varepsilon.
    $$
    Hence,
    $$
    l_1-\frac{l_2-l_1}{2}
    <a_n<
    l_1+\frac{l_2-l_1}{2}.
    $$
    Similarly, since $a_n\to l_2$, there exists $n_2\in\mathbb{N}$ such that, for every $n>n_2$,
    $$
    l_2-\frac{l_2-l_1}{2}
    <a_n<
    l_2+\frac{l_2-l_1}{2}.
    $$
    Take $n>\max\{n_1,n_2\}$. The two inequalities give
    $$
    \frac{l_1+l_2}{2}<a_n<\frac{l_1+l_2}{2},
    $$
    which is impossible. Therefore, $l_1=l_2$.

---

- **Definition 4**
  We say that $(a_n)$ is increasing if
  $$
  \forall n\in\mathbb{N},\quad a_{n+1}\geqslant a_n.
  $$
  We say that $(a_n)$ is decreasing if
  $$
  \forall n\in\mathbb{N},\quad a_{n+1}\leqslant a_n.
  $$
  We add the word **strictly** if the corresponding inequality is strict. We say that $(a_n)$ is monotonic if it is either increasing or decreasing.

- **Example 4.1**
  The sequence
  $$
  a_n=\frac{1}{n}
  $$
  is decreasing; in fact, it is strictly decreasing.

  - **Proof 4.1.1**
    For every $n\geqslant1$, we have $0<n<n+1$. Taking reciprocals reverses the inequalities, so
    $$
    \frac{1}{n+1}<\frac{1}{n}.
    $$
    Therefore, $a_{n+1}<a_n$ for every $n\geqslant1$.

---

- **Definition 5**
  A sequence $(a_n)$ is said to be bounded above if
  $$
  \exists M\in\mathbb{R},\ \forall n\in\mathbb{N},\quad a_n\leqslant M.
  $$
  A sequence $(a_n)$ is said to be bounded below if
  $$
  \exists m\in\mathbb{R},\ \forall n\in\mathbb{N},\quad m\leqslant a_n.
  $$

- **Theorem 5.1**
  If $(a_n)$ is increasing and bounded above, then it is convergent and
  $$
  \lim_{n\to\infty}a_n
  =\sup\{a_n:n\in\mathbb{N}\}.
  $$
  If $(a_n)$ is decreasing and bounded below, then it is convergent and
  $$
  \lim_{n\to\infty}a_n
  =\inf\{a_n:n\in\mathbb{N}\}.
  $$

  - **Proof 5.1.1**
    Suppose first that $(a_n)$ is increasing and bounded above. Let
    $$
    l=\sup\{a_n:n\in\mathbb{N}\}.
    $$
    Let $\varepsilon>0$. Since $l-\varepsilon<l$ and $l$ is the least upper bound, $l-\varepsilon$ is not an upper bound of $\{a_n:n\in\mathbb{N}\}$. Therefore, there exists $n_0\in\mathbb{N}$ such that
    $$
    l-\varepsilon<a_{n_0}.
    $$
    Since the sequence is increasing, for every $n>n_0$,
    $$
    l-\varepsilon<a_{n_0}\leqslant a_n\leqslant l<l+\varepsilon.
    $$
    Hence,
    $$
    \left\lvert a_n-l\right\rvert<\varepsilon,
    $$
    so $a_n\to l$.

    Now suppose that $(a_n)$ is decreasing and bounded below. Let
    $$
    l=\inf\{a_n:n\in\mathbb{N}\}.
    $$
    Let $\varepsilon>0$. Since $l+\varepsilon>l$ and $l$ is the greatest lower bound, $l+\varepsilon$ is not a lower bound of $\{a_n:n\in\mathbb{N}\}$. Therefore, there exists $n_0\in\mathbb{N}$ such that
    $$
    a_{n_0}<l+\varepsilon.
    $$
    Since the sequence is decreasing, for every $n>n_0$,
    $$
    l-\varepsilon<l\leqslant a_n\leqslant a_{n_0}<l+\varepsilon.
    $$
    Thus,
    $$
    \left\lvert a_n-l\right\rvert<\varepsilon,
    $$
    and therefore $a_n\to l$.

---

- **Theorem 6 (Algebra of limits)**
  Let $(a_n)$ and $(b_n)$ be convergent sequences such that
  $$
  \lim_{n\to\infty}a_n=a
  \qquad\text{and}\qquad
  \lim_{n\to\infty}b_n=b.
  $$
  Then:

  1. $\displaystyle\lim_{n\to\infty}(a_n+b_n)=a+b$.
  2. $\displaystyle\lim_{n\to\infty}(a_nb_n)=ab$.
  3. If $a\neq0$, then there exists $n_0$ such that $a_n\neq0$ for every $n>n_0$, and
     $$
     \lim_{n\to\infty}\frac{1}{a_n}=\frac{1}{a}.
     $$
  4. If $a\neq0$, then there exists $n_0$ such that $a_n\neq0$ for every $n>n_0$, and
     $$
     \lim_{n\to\infty}\frac{b_n}{a_n}=\frac{b}{a}.
     $$
  5. For every $c\in\mathbb{R}$,
     $$
     \lim_{n\to\infty}ca_n=ca.
     $$

  - **Proof 6.1**
    **1. Sum.** Let $\varepsilon>0$. Since $a_n\to a$ and $b_n\to b$, there exist $n_1,n_2\in\mathbb{N}$ such that
    $$
    n>n_1\implies\left\lvert a_n-a\right\rvert<\frac{\varepsilon}{2}
    $$
    and
    $$
    n>n_2\implies\left\lvert b_n-b\right\rvert<\frac{\varepsilon}{2}.
    $$
    For $n>\max\{n_1,n_2\}$, the triangle inequality gives
    $$
    \begin{aligned}
    \left\lvert(a_n+b_n)-(a+b)\right\rvert
      &\leqslant\left\lvert a_n-a\right\rvert
        +\left\lvert b_n-b\right\rvert\\
      &<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}
      =\varepsilon.
    \end{aligned}
    $$

    **2. Product.** Since $a_n\to a$, there exists $n_0\in\mathbb{N}$ such that
    $$
    n>n_0\implies\left\lvert a_n-a\right\rvert<1.
    $$
    Thus, for $n>n_0$,
    $$
    \left\lvert a_n\right\rvert
    \leqslant\left\lvert a_n-a\right\rvert+\left\lvert a\right\rvert
    <\left\lvert a\right\rvert+1.
    $$
    Let $\varepsilon>0$. Choose $n_1,n_2\in\mathbb{N}$ such that
    $$
    n>n_1
    \implies
    \left\lvert a_n-a\right\rvert
    <\frac{\varepsilon}{2(\lvert b\rvert+1)}
    $$
    and
    $$
    n>n_2
    \implies
    \left\lvert b_n-b\right\rvert
    <\frac{\varepsilon}{2(\lvert a\rvert+1)}.
    $$
    For $n>\max\{n_0,n_1,n_2\}$,
    $$
    \begin{aligned}
    \left\lvert a_nb_n-ab\right\rvert
      &=\left\lvert a_n(b_n-b)+b(a_n-a)\right\rvert\\
      &\leqslant
        \left\lvert a_n\right\rvert\left\lvert b_n-b\right\rvert
        +\left\lvert b\right\rvert\left\lvert a_n-a\right\rvert\\
      &<
        (\lvert a\rvert+1)\frac{\varepsilon}{2(\lvert a\rvert+1)}
        +\lvert b\rvert\frac{\varepsilon}{2(\lvert b\rvert+1)}\\
      &\leqslant\frac{\varepsilon}{2}+\frac{\varepsilon}{2}
      =\varepsilon.
    \end{aligned}
    $$

    **3. Reciprocal.** Suppose $a\neq0$. Since $a_n\to a$, there exists $n_0\in\mathbb{N}$ such that
    $$
    n>n_0
    \implies
    \left\lvert a_n-a\right\rvert<\frac{\lvert a\rvert}{2}.
    $$
    The reverse triangle inequality gives
    $$
    \left\lvert a_n\right\rvert
    \geqslant\lvert a\rvert-\left\lvert a_n-a\right\rvert
    >\frac{\lvert a\rvert}{2}>0.
    $$
    Hence, $a_n\neq0$ for every $n>n_0$. Let $\varepsilon>0$, and choose $n_1\in\mathbb{N}$ such that
    $$
    n>n_1
    \implies
    \left\lvert a_n-a\right\rvert
    <\frac{\varepsilon\lvert a\rvert^2}{2}.
    $$
    For $n>\max\{n_0,n_1\}$,
    $$
    \begin{aligned}
    \left\lvert\frac{1}{a_n}-\frac{1}{a}\right\rvert
      &=\frac{\left\lvert a_n-a\right\rvert}
        {\left\lvert a_n\right\rvert\lvert a\rvert}\\
      &<\frac{2}{\lvert a\rvert^2}\left\lvert a_n-a\right\rvert\\
      &<\varepsilon.
    \end{aligned}
    $$

    **4. Quotient.** By part 3, the sequence $(1/a_n)$ is eventually defined and converges to $1/a$. Applying part 2 to $(b_n)$ and $(1/a_n)$ gives
    $$
    \lim_{n\to\infty}\frac{b_n}{a_n}
    =
    \left(\lim_{n\to\infty}b_n\right)
    \left(\lim_{n\to\infty}\frac{1}{a_n}\right)
    =b\cdot\frac{1}{a}
    =\frac{b}{a}.
    $$

    **5. Scalar multiple.** If $c=0$, then $ca_n=0=ca$ for every $n$. Suppose $c\neq0$. Let $\varepsilon>0$. Since $a_n\to a$, there exists $n_0\in\mathbb{N}$ such that
    $$
    n>n_0
    \implies
    \left\lvert a_n-a\right\rvert<\frac{\varepsilon}{\lvert c\rvert}.
    $$
    Therefore, for every $n>n_0$,
    $$
    \left\lvert ca_n-ca\right\rvert
    =\lvert c\rvert\left\lvert a_n-a\right\rvert
    <\varepsilon.
    $$
