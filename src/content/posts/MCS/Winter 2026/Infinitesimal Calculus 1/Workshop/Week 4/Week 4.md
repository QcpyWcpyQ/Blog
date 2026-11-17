---
title: "Week 4"
published: 2026-11-08
description: "Complete workshop solutions on sequence limits and the Cauchy criterion for convergence."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Limits

- **Problem 1**  
  Compute the following limits. You do not need to use the definition.

  1. $\displaystyle\lim_{n\to\infty}\frac{\sqrt[n]{1+2^n+3^n+\cdots+n^n}}{n}$.
  2. $\displaystyle\lim_{n\to\infty}\sqrt[n]{\frac{5^n-2^n}{2^n+3^n}}$.
  3. $\displaystyle\lim_{n\to\infty}\frac{1}{\sqrt[n]{n!}}$.
  4. $\displaystyle\lim_{n\to\infty}\sqrt[n]{2^n+3^n}$.
  5. $\displaystyle\lim_{n\to\infty}\left(1-\frac1n\right)^n$.
  6. $\displaystyle\lim_{n\to\infty}\left(\frac{2n+1}{2n+3}\right)^{\frac{n^2+4}{n+1}}$.

  - **Solution 1.1 (Part a)**  
    Since $n^n$ is one of the terms in the sum and every term is at most $n^n$,
    $$
    n^n
    \leqslant
    1+2^n+3^n+\cdots+n^n
    \leqslant
    n\cdot n^n.
    $$
    Taking $n$th roots and dividing by $n$ gives
    $$
    1
    \leqslant
    \frac{\sqrt[n]{1+2^n+3^n+\cdots+n^n}}{n}
    \leqslant
    n^{1/n}.
    $$
    Since $n^{1/n}\to1$, the squeeze theorem yields
    $$
    \lim_{n\to\infty}
    \frac{\sqrt[n]{1+2^n+3^n+\cdots+n^n}}{n}
    =1.
    $$

  - **Solution 1.2 (Part b)**  
    Factor out the dominant powers from the numerator and denominator:
    $$
    \begin{aligned}
    \sqrt[n]{\frac{5^n-2^n}{2^n+3^n}}
    &=\sqrt[n]{
      \frac{5^n\left(1-(2/5)^n\right)}
           {3^n\left((2/3)^n+1\right)}
      }\\
    &=\frac53
      \sqrt[n]{
      \frac{1-(2/5)^n}{1+(2/3)^n}
      }.
    \end{aligned}
    $$
    Set
    $$
    r_n=\frac{1-(2/5)^n}{1+(2/3)^n}.
    $$
    Then $r_n\to1$ and $0<r_n<1$. For all sufficiently large $n$,
    $$
    \frac12<r_n<1,
    $$
    and therefore
    $$
    \left(\frac12\right)^{1/n}<r_n^{1/n}<1.
    $$
    Both outer sequences converge to $1$, so $r_n^{1/n}\to1$. Hence
    $$
    \lim_{n\to\infty}
    \sqrt[n]{\frac{5^n-2^n}{2^n+3^n}}
    =\frac53.
    $$

  - **Solution 1.3 (Part c)**  
    For $n\geqslant2$, at least $n/2$ of the factors in $n!$ are at least $n/2$. Thus
    $$
    n!\geqslant\left(\frac n2\right)^{n/2}.
    $$
    Consequently,
    $$
    0<\frac1{\sqrt[n]{n!}}
    \leqslant
    \frac1{\sqrt{n/2}}
    =\sqrt{\frac2n}.
    $$
    Since $\sqrt{2/n}\to0$, the squeeze theorem gives
    $$
    \lim_{n\to\infty}\frac1{\sqrt[n]{n!}}=0.
    $$

  - **Solution 1.4 (Part d)**  
    We have
    $$
    3^n\leqslant2^n+3^n\leqslant2\cdot3^n.
    $$
    Taking $n$th roots gives
    $$
    3
    \leqslant
    \sqrt[n]{2^n+3^n}
    \leqslant
    3\cdot2^{1/n}.
    $$
    Since $2^{1/n}\to1$, it follows that
    $$
    \lim_{n\to\infty}\sqrt[n]{2^n+3^n}=3.
    $$

  - **Solution 1.5 (Part e)**  
    For $n\geqslant2$, write $m=n-1$. Then
    $$
    \begin{aligned}
    \left(1-\frac1n\right)^n
    &=\left(\frac{n-1}{n}\right)^n\\
    &=\left(1+\frac1m\right)^{-(m+1)}\\
    &=\left(\left(1+\frac1m\right)^m\right)^{-(m+1)/m}.
    \end{aligned}
    $$
    Since
    $$
    \left(1+\frac1m\right)^m\longrightarrow e
    \qquad\text{and}\qquad
    \frac{m+1}{m}\longrightarrow1,
    $$
    we obtain
    $$
    \lim_{n\to\infty}\left(1-\frac1n\right)^n=e^{-1}.
    $$

  - **Solution 1.6 (Part f)**  
    Rewrite the base as
    $$
    \frac{2n+1}{2n+3}
    =\left(1+\frac2{2n+1}\right)^{-1}.
    $$
    Hence
    $$
    \begin{aligned}
    \left(\frac{2n+1}{2n+3}\right)^{\frac{n^2+4}{n+1}}
    &=\left(1+\frac2{2n+1}\right)^{-\frac{n^2+4}{n+1}}\\
    &=\left[
      \left(1+\frac2{2n+1}\right)^{(2n+1)/2}
      \right]^{-\frac{2(n^2+4)}{(n+1)(2n+1)}}.
    \end{aligned}
    $$
    The expression in square brackets converges to $e$, while
    $$
    \frac{2(n^2+4)}{(n+1)(2n+1)}\longrightarrow1.
    $$
    Therefore,
    $$
    \lim_{n\to\infty}
    \left(\frac{2n+1}{2n+3}\right)^{\frac{n^2+4}{n+1}}
    =e^{-1}.
    $$

## Consecutive terms of a Cauchy sequence

- **Problem 2**  
  Prove that if $(a_n)$ is a Cauchy sequence, then the sequence
  $$
  \bigl(|a_{n+1}-a_n|\bigr)
  $$
  converges to $0$.

  - **Proof 2.1**  
    Let $\varepsilon>0$. Since $(a_n)$ is a Cauchy sequence, there exists $N\in\mathbb N$ such that
    $$
    m,n\geqslant N
    \quad\Longrightarrow\quad
    |a_m-a_n|<\varepsilon.
    $$
    If $n\geqslant N$, then both $n$ and $n+1$ are at least $N$. Taking $m=n+1$ gives
    $$
    |a_{n+1}-a_n|<\varepsilon.
    $$
    Therefore,
    $$
    \lim_{n\to\infty}|a_{n+1}-a_n|=0.
    $$

## The Cauchy criterion

- **Problem 3**  
  The goal of this exercise is to prove the following proposition:
  $$
  (a_n)_{n\in\mathbb N}\subseteq\mathbb R
  \text{ is convergent}
  \quad\Longleftrightarrow\quad
  (a_n)_{n\in\mathbb N}
  \text{ is a Cauchy sequence}.
  $$

  1. Prove that if $(a_n)_{n\in\mathbb N}$ is convergent, then it is a Cauchy sequence.
  2. Prove that every Cauchy sequence is bounded.
  3. Let $(a_n)_{n\in\mathbb N}\subseteq\mathbb R$. A term $a_n$ is called **dominant** if
     $$
     a_m\leqslant a_n
     \qquad
     \text{for every }m\geqslant n.
     $$
     Prove that if a bounded sequence has infinitely many dominant terms, then it admits a convergent subsequence.
  4. Prove that if a bounded sequence has at most finitely many dominant terms, then it admits a convergent subsequence.
  5. Prove that if a Cauchy sequence has a convergent subsequence, then it is convergent.

  - **Proof 3.1 (Part a)**  
    Suppose that $a_n\to a$. Let $\varepsilon>0$. There exists $N\in\mathbb N$ such that
    $$
    n\geqslant N
    \quad\Longrightarrow\quad
    |a_n-a|<\frac\varepsilon2.
    $$
    If $m,n\geqslant N$, then the triangle inequality gives
    $$
    \begin{aligned}
    |a_m-a_n|
    &\leqslant|a_m-a|+|a_n-a|\\
    &<\frac\varepsilon2+\frac\varepsilon2
    =\varepsilon.
    \end{aligned}
    $$
    Thus $(a_n)$ is a Cauchy sequence.

  - **Proof 3.2 (Part b)**  
    Let $(a_n)$ be a Cauchy sequence. Taking $\varepsilon=1$, there exists $N\in\mathbb N$ such that
    $$
    m,n\geqslant N
    \quad\Longrightarrow\quad
    |a_m-a_n|<1.
    $$
    In particular, for every $n\geqslant N$,
    $$
    |a_n-a_N|<1,
    $$
    and hence
    $$
    |a_n|\leqslant|a_N|+1.
    $$
    Define
    $$
    M=\max\{|a_1|,\ldots,|a_{N-1}|,|a_N|+1\}.
    $$
    Then $|a_n|\leqslant M$ for every $n\in\mathbb N$. Therefore, $(a_n)$ is bounded.

  - **Proof 3.3 (Part c)**  
    Suppose that $(a_n)$ is bounded and has infinitely many dominant terms. Choose their indices in increasing order:
    $$
    n_1<n_2<n_3<\cdots.
    $$
    Since $a_{n_k}$ is dominant and $n_{k+1}\geqslant n_k$,
    $$
    a_{n_{k+1}}\leqslant a_{n_k}
    $$
    for every $k\in\mathbb N$. Thus $(a_{n_k})$ is decreasing.

    The original sequence is bounded, so the subsequence $(a_{n_k})$ is bounded below. By the monotone convergence theorem, $(a_{n_k})$ converges. Hence $(a_n)$ admits a convergent subsequence.

  - **Proof 3.4 (Part d)**  
    Suppose that $(a_n)$ is bounded and has at most finitely many dominant terms. Choose $n_1$ larger than the index of every dominant term. Then $a_{n_1}$ is not dominant, so there exists $n_2>n_1$ such that
    $$
    a_{n_2}>a_{n_1}.
    $$
    Similarly, $a_{n_2}$ is not dominant, so there exists $n_3>n_2$ such that
    $$
    a_{n_3}>a_{n_2}.
    $$
    Continuing inductively produces a subsequence $(a_{n_k})$ satisfying
    $$
    a_{n_1}<a_{n_2}<a_{n_3}<\cdots.
    $$
    Thus $(a_{n_k})$ is increasing. Since $(a_n)$ is bounded, the subsequence is bounded above. By the monotone convergence theorem, $(a_{n_k})$ converges. Hence $(a_n)$ admits a convergent subsequence.

  - **Proof 3.5 (Part e)**  
    Let $(a_n)$ be a Cauchy sequence, and suppose that a subsequence $(a_{n_k})$ converges to $a\in\mathbb R$. Let $\varepsilon>0$.

    Since $(a_n)$ is Cauchy, there exists $N_1\in\mathbb N$ such that
    $$
    m,n\geqslant N_1
    \quad\Longrightarrow\quad
    |a_m-a_n|<\frac\varepsilon2.
    $$
    Since $a_{n_k}\to a$, there exists $K\in\mathbb N$ such that
    $$
    k\geqslant K
    \quad\Longrightarrow\quad
    |a_{n_k}-a|<\frac\varepsilon2.
    $$
    Choose $k\geqslant K$ such that $n_k\geqslant N_1$. Then, for every $n\geqslant N_1$,
    $$
    \begin{aligned}
    |a_n-a|
    &\leqslant|a_n-a_{n_k}|+|a_{n_k}-a|\\
    &<\frac\varepsilon2+\frac\varepsilon2
    =\varepsilon.
    \end{aligned}
    $$
    Therefore, $a_n\to a$.

  - **Conclusion 3.6**  
    Part (a) proves that every convergent sequence is Cauchy. Conversely, let $(a_n)$ be Cauchy. By part (b), it is bounded. Parts (c) and (d) show that every bounded sequence has a convergent subsequence, whether it has infinitely many dominant terms or only finitely many. Part (e) then implies that $(a_n)$ itself is convergent. Hence
    $$
    (a_n)_{n\in\mathbb N}\subseteq\mathbb R
    \text{ is convergent}
    \quad\Longleftrightarrow\quad
    (a_n)_{n\in\mathbb N}
    \text{ is a Cauchy sequence}.
    $$
