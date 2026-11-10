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
  Consider the sequence
  $$
  a_n=\frac{(-1)^n}{n}.
  $$

  1. For $\varepsilon=0.005$, determine $n$ such that $\left\lvert a_n-0\right\rvert<\varepsilon$.
  2. Prove that $\displaystyle\lim_{n\to\infty}a_n=0$.

  - **Solution 1.1**
    1. We have
       $$
       \left\lvert a_n-0\right\rvert
       =\left\lvert\frac{(-1)^n}{n}\right\rvert
       =\frac{1}{n}.
       $$
       Therefore,
       $$
       \left\lvert a_n-0\right\rvert<0.005
       \iff
       \frac{1}{n}<\frac{1}{200}
       \iff
       n>200.
       $$
       Hence, the required values are $n\geqslant201$.

    2. We want to prove that
       $$
       \forall\varepsilon>0,\ \exists N\in\mathbb{N},\ \forall n>N,\quad
       \left\lvert\frac{(-1)^n}{n}-0\right\rvert<\varepsilon.
       $$
       Let $\varepsilon>0$, and choose
       $$
       N=\left\lceil\frac{1}{\varepsilon}\right\rceil+1.
       $$
       If $n>N$, then
       $$
       \left\lvert a_n-0\right\rvert
       =\frac{1}{n}
       <\frac{1}{N}
       =\frac{1}{\left\lceil\frac{1}{\varepsilon}\right\rceil+1}
       <\frac{1}{1/\varepsilon}
       =\varepsilon.
       $$
       Therefore,
       $$
       \lim_{n\to\infty}a_n=0.
       $$

---

- **Exercise 2**
  Prove that
  $$
  \lim_{n\to\infty}\left(\sqrt{n^2+1}-n\right)=0.
  $$

  - **Solution 2.1**
    Let $\varepsilon>0$, and choose
    $$
    N=\left\lceil\frac{1}{\varepsilon}\right\rceil+1.
    $$
    If $n>N$, then
    $$
    \begin{aligned}
    \left\lvert\sqrt{n^2+1}-n\right\rvert
      &=\sqrt{n^2+1}-n\\
      &=\left(\sqrt{n^2+1}-n\right)
        \frac{\sqrt{n^2+1}+n}{\sqrt{n^2+1}+n}\\
      &=\frac{1}{\sqrt{n^2+1}+n}\\
      &<\frac{1}{n}\\
      &<\frac{1}{N}\\
      &<\varepsilon.
    \end{aligned}
    $$
    Therefore,
    $$
    \lim_{n\to\infty}\left(\sqrt{n^2+1}-n\right)=0.
    $$

---

- **Exercise 3**
  Prove that
  $$
  \lim_{n\to\infty}\frac{\sin(n^2)}{\sqrt[3]{n}}=0.
  $$

  - **Solution 3.1**
    Let $\varepsilon>0$, and choose
    $$
    N=\left\lceil\frac{1}{\varepsilon^3}\right\rceil+1.
    $$
    If $n>N$, then $n>1/\varepsilon^3$. Since $\lvert\sin(n^2)\rvert\leqslant1$,
    $$
    \left\lvert\frac{\sin(n^2)}{\sqrt[3]{n}}-0\right\rvert
    \leqslant\frac{1}{\sqrt[3]{n}}
    <\varepsilon.
    $$
    Therefore,
    $$
    \lim_{n\to\infty}\frac{\sin(n^2)}{\sqrt[3]{n}}=0.
    $$

---

- **Exercise 4**
  Prove that
  $$
  \left\lvert\sin x\right\rvert\leqslant\lvert x\rvert
  \qquad\text{for every }x\in\mathbb{R}.
  $$

  - **Solution 4.1**
    Since $\lvert\sin(-x)\rvert=\lvert\sin x\rvert$, it is enough to consider $x\geqslant0$.

    If $x\geqslant1$, then
    $$
    \lvert\sin x\rvert\leqslant1\leqslant x=\lvert x\rvert.
    $$
    Now suppose that $0\leqslant x<1$. In the unit circle, the triangle formed by two radii with included angle $x$ lies inside the corresponding sector. The triangle has area $\frac12\sin x$, while the sector has area $\frac12x$. Therefore,
    $$
    \frac12\sin x\leqslant\frac12x,
    $$
    so $\sin x\leqslant x$. Since $0\leqslant x<1<\pi$, we have $\sin x\geqslant0$, and hence
    $$
    \lvert\sin x\rvert=\sin x\leqslant x=\lvert x\rvert.
    $$
    Thus, $\lvert\sin x\rvert\leqslant\lvert x\rvert$ for every $x\in\mathbb{R}$.

---

- **Exercise 5**
  Prove that
  $$
  \lim_{n\to\infty}(3-n)\sin\left(\frac{1}{n^2+2n}\right)=0.
  $$

  - **Solution 5.1**
    Let $\varepsilon>0$, and choose
    $$
    N=\left\lceil\frac{4}{\varepsilon}\right\rceil+1.
    $$
    If $n>N$, then, using Exercise 4,
    $$
    \begin{aligned}
    \left\lvert(3-n)\sin\left(\frac{1}{n^2+2n}\right)\right\rvert
      &=\lvert3-n\rvert
        \left\lvert\sin\left(\frac{1}{n^2+2n}\right)\right\rvert\\
      &\leqslant\lvert3-n\rvert\left\lvert\frac{1}{n^2+2n}\right\rvert\\
      &=\frac{\lvert3-n\rvert}{n^2+2n}\\
      &\leqslant\frac{\lvert3\rvert+\lvert n\rvert}{n^2+2n}\\
      &=\frac{3+n}{n^2+2n}\\
      &\leqslant\frac{4n}{n^2+2n}\\
      &<\frac{4n}{n^2}\\
      &=\frac{4}{n}\\
      &<\frac{4}{N}\\
      &<\varepsilon.
    \end{aligned}
    $$
    Therefore,
    $$
    \lim_{n\to\infty}(3-n)\sin\left(\frac{1}{n^2+2n}\right)=0.
    $$

---

- **Exercise 6**
  Prove the following statements.

  1. If $\displaystyle\lim_{n\to\infty}a_n=L$, then
     $$
     \lim_{n\to\infty}\lvert a_n\rvert=\lvert L\rvert.
     $$
  2. Let $(a_n)$ be a real sequence such that $a_n\geqslant0$ for every $n\in\mathbb{N}$. If
     $$
     \lim_{n\to\infty}a_n=L,
     $$
     prove that
     $$
     \lim_{n\to\infty}\sqrt{a_n}=\sqrt{L}.
     $$

  - **Solution 6.1**
    **1. Absolute values.** Let $\varepsilon>0$. Since $a_n\to L$, there exists $N\in\mathbb{N}$ such that
    $$
    n>N\implies\left\lvert a_n-L\right\rvert<\varepsilon.
    $$
    By the reverse triangle inequality,
    $$
    \left\lvert\lvert a_n\rvert-\lvert L\rvert\right\rvert
    \leqslant\left\lvert a_n-L\right\rvert.
    $$
    Therefore, for every $n>N$,
    $$
    \left\lvert\lvert a_n\rvert-\lvert L\rvert\right\rvert
    <\varepsilon.
    $$
    Hence,
    $$
    \lim_{n\to\infty}\lvert a_n\rvert=\lvert L\rvert.
    $$

    **2. Square roots.** First, $L\geqslant0$. Otherwise, if $L<0$, take
    $$
    \varepsilon=-\frac{L}{2}>0.
    $$
    Since $a_n\to L$, for all sufficiently large $n$,
    $$
    \left\lvert a_n-L\right\rvert<-\frac{L}{2},
    $$
    which implies
    $$
    a_n<L-\frac{L}{2}=\frac{L}{2}<0.
    $$
    This contradicts $a_n\geqslant0$.

    For any $x,y\geqslant0$, we have
    $$
    \left\lvert\sqrt{x}-\sqrt{y}\right\rvert
    \leqslant\sqrt{\lvert x-y\rvert}.
    $$
    Indeed, if $x\geqslant y$, then
    $$
    x-y
    =(\sqrt{x}-\sqrt{y})(\sqrt{x}+\sqrt{y})
    \geqslant(\sqrt{x}-\sqrt{y})^2,
    $$
    and the case $y\geqslant x$ is analogous.

    Now let $\varepsilon>0$. Since $a_n\to L$, there exists $N\in\mathbb{N}$ such that
    $$
    n>N\implies\left\lvert a_n-L\right\rvert<\varepsilon^2.
    $$
    Therefore, for every $n>N$,
    $$
    \left\lvert\sqrt{a_n}-\sqrt{L}\right\rvert
    \leqslant\sqrt{\left\lvert a_n-L\right\rvert}
    <\varepsilon.
    $$
    Hence,
    $$
    \lim_{n\to\infty}\sqrt{a_n}=\sqrt{L}.
    $$

---

- **Exercise 7**
  Prove that
  $$
  \lim_{n\to\infty}\frac{3n^2+2n+2}{5n+4}=+\infty.
  $$

  - **Solution 7.1**
    We need to prove that, for every $M>0$, there exists $N\in\mathbb{N}$ such that
    $$
    n>N
    \implies
    \frac{3n^2+2n+2}{5n+4}>M.
    $$
    Let $M>0$, and choose
    $$
    N=\left\lceil3M\right\rceil+1.
    $$
    For every $n\geqslant1$, we have $5n+4\leqslant9n$. Therefore, if $n>N$,
    $$
    \begin{aligned}
    \frac{3n^2+2n+2}{5n+4}
      &\geqslant\frac{3n^2}{5n+4}\\
      &\geqslant\frac{3n^2}{9n}\\
      &=\frac{n}{3}\\
      &>\frac{N}{3}\\
      &>M.
    \end{aligned}
    $$
    Hence,
    $$
    \lim_{n\to\infty}\frac{3n^2+2n+2}{5n+4}=+\infty.
    $$

---

- **Exercise 8**
  1. Compute
     $$
     \lim_{n\to\infty}\sqrt[n]{n}.
     $$
  2. Compute
     $$
     \lim_{n\to\infty}\sqrt[n]{2+(-1)^n}.
     $$
  3. Compute
     $$
     \lim_{n\to\infty}\sqrt[n]{2^n+3^n}.
     $$

  - **Solution 8.1**

    **1.** Let $a_n=n$. Then
    $$
    \lim_{n\to\infty}\frac{a_{n+1}}{a_n}
      =\lim_{n\to\infty}\frac{n+1}{n}
      =1.
    $$
    By the root-ratio theorem,
    $$
    \lim_{n\to\infty}\sqrt[n]{n}=1.
    $$

    **2.** For every $n\in\mathbb{N}$,
    $$
    1\leqslant2+(-1)^n\leqslant3.
    $$
    Hence,
    $$
    1\leqslant\sqrt[n]{2+(-1)^n}\leqslant\sqrt[n]{3}.
    $$
    Since $\sqrt[n]{3}\to1$, the sandwich theorem gives
    $$
    \lim_{n\to\infty}\sqrt[n]{2+(-1)^n}=1.
    $$

    **3.** Since $2^n\leqslant3^n$, we have
    $$
    3^n\leqslant2^n+3^n\leqslant2\cdot3^n.
    $$
    Taking $n$th roots gives
    $$
    3\leqslant\sqrt[n]{2^n+3^n}\leqslant3\sqrt[n]{2}.
    $$
    Since $\sqrt[n]{2}\to1$, the sandwich theorem gives
    $$
    \lim_{n\to\infty}\sqrt[n]{2^n+3^n}=3.
    $$

---

- **Exercise 9**

  1. Compute
     $$
     \lim_{n\to\infty}\left(1+\frac{1}{2n}\right)^n.
     $$

  2. Compute
     $$
     \lim_{n\to\infty}\left(\frac{n-3}{n+1}\right)^n.
     $$

  3. Compute
     $$
     \lim_{n\to\infty}\left(1+\frac{1}{n^2}\right)^n.
     $$

  - **Solution 9.1**

    **1.** Using the standard limit that defines $e$,
    $$
    \begin{aligned}
    \lim_{n\to\infty}\left(1+\frac{1}{2n}\right)^n
      &=\lim_{n\to\infty}
        \left(\left(1+\frac{1}{2n}\right)^{2n}\right)^{1/2}\\
      &=e^{1/2}.
    \end{aligned}
    $$

    **2.** Using the corresponding standard limit,
    $$
    \begin{aligned}
    \lim_{n\to\infty}\left(\frac{n-3}{n+1}\right)^n
      &=\lim_{n\to\infty}\left(1-\frac{4}{n+1}\right)^n\\
      &=e^{-4}.
    \end{aligned}
    $$

    **3.** Write $n=n^2/n$. Then
    $$
    \begin{aligned}
    \lim_{n\to\infty}\left(1+\frac{1}{n^2}\right)^n
      &=\lim_{n\to\infty}
        \left(\left(1+\frac{1}{n^2}\right)^{n^2}\right)^{1/n}\\
      &=e^0\\
      &=1.
    \end{aligned}
    $$
