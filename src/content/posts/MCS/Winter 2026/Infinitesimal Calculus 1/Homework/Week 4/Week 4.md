---
title: "Week 4"
published: 2026-11-20
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**
  Determine whether each of the following series converges. Justify your answers.

  (a)
  $$
  \sum_{n=1}^{\infty}\frac{(-1)^n}{n^2}.
  $$

  (b)
  $$
  \sum_{n=1}^{\infty}\frac{1}{2^n+n}.
  $$

  (c)
  $$
  \sum_{n=1}^{\infty}\frac{\sin(n)}{n!}.
  $$

  (d)
  $$
  \sum_{n=1}^{\infty}\left(1+\frac{1}{n^2}\right)^2.
  $$

  (e)
  $$
  \sum_{n=1}^{\infty}\frac{1}{\sqrt n+1}.
  $$

  (f)
  $$
  \sum_{n=1}^{\infty}\frac{n!}{n^n}.
  $$

  (g)
  $$
  \sum_{n=0}^{\infty}(-1)^{n+1}\frac{\sqrt n+1}{n+1}.
  $$

  (h)
  $$
  \sum_{n=5}^{\infty}\frac{2^n-5^n}{9^n}.
  $$

  (i)
  $$
  \sum_{n=1}^{\infty}\frac{\cos(n)}{n^3-n}.
  $$

  (j)
  $$
  \sum_{n=1}^{\infty}\sqrt[n]{n}.
  $$

  (k)
  $$
  \sum_{n=1}^{\infty}\frac{1}{\sqrt[3]{n^2+1}}.
  $$

  (l)
  $$
  \sum_{n=1}^{\infty}\frac{\left(1+\frac1n\right)^n}{2^n}.
  $$

  (m)
  $$
  \sum_{n=1}^{\infty}\frac{n^2}{n^3-3}.
  $$

  (n)
  $$
  \sum_{n=1}^{\infty}\frac{\sqrt{n^2-1}}{\sqrt{n^5+1}}.
  $$

  - **Solution 1.1 (Part a)**
    The series converges absolutely because the series of absolute values is
    $$
    \sum_{n=1}^{\infty}\frac{1}{n^2},
    $$
    a convergent $p$-series with $p=2$.

  - **Solution 1.2 (Part b)**
    For every $n\geqslant1$,
    $$
    0<\frac{1}{2^n+n}\leqslant\frac{1}{2^n}.
    $$
    The series on the right is geometric with ratio $1/2$, so the given series converges by comparison.

  - **Solution 1.3 (Part c)**
    Since $\lvert\sin(n)\rvert\leqslant1$, the absolute value of each term is at most $1/n!$. The series $\sum_{n=1}^{\infty}1/n!$ converges by the ratio test, since the ratio of successive terms is $1/(n+1)\to0$. Hence the given series converges absolutely.

  - **Solution 1.4 (Part d)**
    The terms satisfy
    $$
    \lim_{n\to\infty}\left(1+\frac{1}{n^2}\right)^2=1.
    $$
    The series diverges by the term test.

  - **Solution 1.5 (Part e)**
    For $n\geqslant1$, we have $\sqrt n+1\leqslant2\sqrt n$. Thus
    $$
    \frac{1}{\sqrt n+1}\geqslant\frac{1}{2\sqrt n}.
    $$
    The series on the right diverges because it is a constant multiple of the $p$-series with $p=1/2$. The given series therefore diverges.

  - **Solution 1.6 (Part f)**
    Let $a_n=n!/n^n$. Then
    $$
    \frac{a_{n+1}}{a_n}
    =\frac{(n+1)!}{(n+1)^{n+1}}\frac{n^n}{n!}
    =\left(1+\frac1n\right)^{-n}
    \longrightarrow e^{-1}<1.
    $$
    The series converges by the ratio test.

  - **Solution 1.7 (Part g)**
    Let $b_n=(\sqrt n+1)/(n+1)$. Then $b_n\to0$. To check monotonicity, write $b_n=h(\sqrt n)$, where $h(s)=(s+1)/(s^2+1)$. For $t>s\geqslant1$,
    $$
    h(s)-h(t)=\frac{(t-s)(st+s+t-1)}{(s^2+1)(t^2+1)}>0.
    $$
    Thus $(b_n)$ decreases for $n\geqslant1$, and the alternating series test gives convergence. For the absolute values,
    $$
    \lim_{n\to\infty}\frac{b_n}{1/\sqrt n}
    =\lim_{n\to\infty}\frac{n+\sqrt n}{n+1}=1.
    $$
    Since $\sum_{n=1}^{\infty}1/\sqrt n$ diverges, the original series converges conditionally.

  - **Solution 1.8 (Part h)**
    For $n\geqslant5$,
    $$
    \left|\frac{2^n-5^n}{9^n}\right|
    =\left(\frac59\right)^n-\left(\frac29\right)^n
    \leqslant\left(\frac59\right)^n.
    $$
    Comparison with the convergent geometric series of ratio $5/9$ gives absolute convergence.

  - **Solution 1.9 (Part i)**
    At $n=1$, the denominator $n^3-n$ is zero, so the series as written is undefined. Its tail starting at $n=2$ converges absolutely. Indeed, $n^3-n\geqslant n^3/2$ for $n\geqslant2$, so
    $$
    \left|\frac{\cos(n)}{n^3-n}\right|\leqslant\frac{2}{n^3}.
    $$
    The comparison series converges.

  - **Solution 1.10 (Part j)**
    Each term satisfies $\sqrt[n]{n}\geqslant1$. The $N$th partial sum is therefore at least $N$, so the series diverges to $+\infty$.

  - **Solution 1.11 (Part k)**
    Since $n^2+1\leqslant2n^2$ for $n\geqslant1$,
    $$
    \frac{1}{\sqrt[3]{n^2+1}}\geqslant\frac{1}{\sqrt[3]{2}\,n^{2/3}}.
    $$
    The series diverges by comparison with the $p$-series with $p=2/3$.

  - **Solution 1.12 (Part l)**
    Compare the terms with $2^{-n}$. Their ratio satisfies
    $$
    \frac{(1+1/n)^n/2^n}{2^{-n}}
    =\left(1+\frac1n\right)^n\longrightarrow e.
    $$
    Since $0<e<\infty$ and $\sum_{n=1}^{\infty}2^{-n}$ converges, the given series converges by limit comparison.

  - **Solution 1.13 (Part m)**
    For $n\geqslant2$, the denominator is positive and smaller than $n^3$. Hence
    $$
    \frac{n^2}{n^3-3}>\frac{n^2}{n^3}=\frac1n.
    $$
    The tail diverges by comparison with the harmonic series. Adding the finite first term gives a divergent series.

  - **Solution 1.14 (Part n)**
    For every $n\geqslant1$,
    $$
    0\leqslant\frac{\sqrt{n^2-1}}{\sqrt{n^5+1}}
    \leqslant\frac{n}{n^{5/2}}=\frac{1}{n^{3/2}}.
    $$
    Since $3/2>1$, the comparison series converges, and so does the given series.

---

- **Problem 2**
  For each of the following series, find the set of all $t\in\mathbb R$ for which it converges.

  (a)
  $$
  \sum_{n=1}^{\infty}n^2t^n.
  $$

  (b)
  $$
  \sum_{n=1}^{\infty}\frac{t^n}{2^n}.
  $$

  (c)
  $$
  \sum_{n=1}^{\infty}\frac{t^n}{n2^n}.
  $$

  - **Solution 2.1 (Part a)**
    When $t=0$, every term is zero. For $t\ne0$, the ratio of successive absolute values satisfies
    $$
    \frac{(n+1)^2|t|^{n+1}}{n^2|t|^n}
    =\left(1+\frac1n\right)^2|t|\longrightarrow |t|.
    $$
    Thus the series converges absolutely for $|t|<1$. For $|t|\geqslant1$, the absolute values $n^2|t|^n$ are at least $n^2$, so the terms fail to tend to zero. The set of convergence is $(-1,1)$.

  - **Solution 2.2 (Part b)**
    This is a geometric series with ratio $t/2$. It converges exactly when $|t/2|<1$, so the set of convergence is $(-2,2)$.

  - **Solution 2.3 (Part c)**
    The terms are $(t/2)^n/n$. For $t\ne0$, the ratio of successive absolute values tends to $|t|/2$. The ratio test gives absolute convergence for $0<|t|<2$ and divergence for $|t|>2$. At $t=0$, all terms vanish.

    At $t=-2$, the series becomes $\sum_{n=1}^{\infty}(-1)^n/n$, which converges by the alternating series test. At $t=2$, it becomes the divergent harmonic series. The set of convergence is $[-2,2)$.

---

- **Problem 3**
  Suppose that $a_n>0$ and $\lim_{n\to\infty}na_n=l$, where $l\ne0$. Show that the series $\sum a_n$ diverges.

  - **Proof 3.1**
    Since $na_n>0$, its nonzero limit $l$ is positive. Choose $N$ so that $na_n>l/2$ for every $n\geqslant N$. Then
    $$
    a_n>\frac{l}{2n}\qquad(n\geqslant N).
    $$
    The harmonic series diverges, so comparison gives $\sum a_n=+\infty$.

---

- **Problem 4**
  Assume that $a_n>0$ and that $\lim_{n\to\infty}n^2a_n$ exists. Show that $\sum a_n$ converges.

  - **Proof 4.1**
    Let $L=\lim_{n\to\infty}n^2a_n$. Since this limit is finite, there exists $N$ such that $n^2a_n<L+1$ for all $n\geqslant N$. Thus
    $$
    0<a_n<\frac{L+1}{n^2}\qquad(n\geqslant N).
    $$
    The series $\sum_{n=1}^{\infty}1/n^2$ converges. By comparison, $\sum a_n$ converges as well.
