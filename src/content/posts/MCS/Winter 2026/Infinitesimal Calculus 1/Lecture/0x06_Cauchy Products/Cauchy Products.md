---
title: "Cauchy Products"
published: 2026-11-12
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**
  Let $(a_n)$ and $(b_n)$ be sequences. For every $n\geqslant0$, define
  $$
  c_n=\sum_{k=0}^{n}a_kb_{n-k}.
  $$
  The series
  $$
  \sum_{n=0}^{\infty}c_n
  =\sum_{n=0}^{\infty}\sum_{k=0}^{n}a_kb_{n-k}
  $$
  is called the Cauchy product of
  $$
  \sum_{n=0}^{\infty}a_n
  \qquad\text{and}\qquad
  \sum_{n=0}^{\infty}b_n.
  $$

---

- **Theorem 2 (Cauchy Product Theorem)**
  Let $(a_n)$ and $(b_n)$ be sequences such that
  $$
  \sum_{n=0}^{\infty}a_n
  $$
  is absolutely convergent and
  $$
  \sum_{n=0}^{\infty}b_n
  $$
  is convergent. Write
  $$
  A=\sum_{n=0}^{\infty}a_n,
  \qquad
  \widetilde A=\sum_{n=0}^{\infty}\lvert a_n\rvert,
  \qquad
  B=\sum_{n=0}^{\infty}b_n.
  $$
  Define
  $$
  c_n=\sum_{k=0}^{n}a_kb_{n-k}.
  $$
  Then the Cauchy product is convergent and
  $$
  \sum_{n=0}^{\infty}c_n=AB.
  $$

  Moreover, if
  $$
  \sum_{n=0}^{\infty}b_n
  $$
  is also absolutely convergent and
  $$
  \widetilde B=\sum_{n=0}^{\infty}\lvert b_n\rvert,
  $$
  then
  $$
  \sum_{n=0}^{\infty}c_n
  $$
  is absolutely convergent and
  $$
  \sum_{n=0}^{\infty}\lvert c_n\rvert
  \leqslant\widetilde A\widetilde B.
  $$

  - **Proof 2.1**
    Let
    $$
    A_n=\sum_{k=0}^{n}a_k,
    \qquad
    B_n=\sum_{k=0}^{n}b_k,
    \qquad
    C_n=\sum_{k=0}^{n}c_k.
    $$
    By assumption,
    $$
    A_n\longrightarrow A
    \qquad\text{and}\qquad
    B_n\longrightarrow B.
    $$
    Define
    $$
    \beta_n=B-B_n.
    $$
    Then
    $$
    \beta_n\longrightarrow0
    \qquad\text{and}\qquad
    B_n=B-\beta_n.
    $$

    The $n$th partial sum of the Cauchy product satisfies
    $$
    \begin{aligned}
    C_n
    &=\sum_{j=0}^{n}c_j\\
    &=\sum_{j=0}^{n}\sum_{k=0}^{j}a_kb_{j-k}\\
    &=a_0B_n+a_1B_{n-1}+\cdots+a_nB_0\\
    &=\sum_{k=0}^{n}a_kB_{n-k}\\
    &=\sum_{k=0}^{n}a_k\left(B-\beta_{n-k}\right)\\
    &=A_nB-\gamma_n,
    \end{aligned}
    $$
    where
    $$
    \gamma_n=\sum_{k=0}^{n}a_k\beta_{n-k}.
    $$
    Since $A_nB\to AB$, it remains to prove that
    $$
    \gamma_n\longrightarrow0.
    $$

    Because $\beta_n\to0$, the sequence $(\beta_n)$ is bounded. Choose $M>0$ such that
    $$
    \lvert\beta_n\rvert\leqslant M
    $$
    for every $n\geqslant0$.

    Let $\varepsilon>0$. Since $\sum_{k=0}^{\infty}\lvert a_k\rvert$ is convergent, there exists $N\in\mathbb{N}$ such that
    $$
    \sum_{k=N+1}^{\infty}\lvert a_k\rvert
    <\frac{\varepsilon}{2(M+1)}.
    $$
    Set
    $$
    S_N=\sum_{k=0}^{N}\lvert a_k\rvert.
    $$
    Since $\beta_n\to0$, there exists $n_0\in\mathbb{N}$ such that
    $$
    m>n_0
    \implies
    \lvert\beta_m\rvert<\frac{\varepsilon}{2(S_N+1)}.
    $$
    If $n>n_0+N$, then $n-k>n_0$ for every $0\leqslant k\leqslant N$. Therefore,
    $$
    \begin{aligned}
    \lvert\gamma_n\rvert
    &\leqslant
      \sum_{k=0}^{N}\lvert a_k\rvert\lvert\beta_{n-k}\rvert
      +\sum_{k=N+1}^{n}\lvert a_k\rvert\lvert\beta_{n-k}\rvert\\
    &<\frac{\varepsilon}{2(S_N+1)}
      \sum_{k=0}^{N}\lvert a_k\rvert
      +M\sum_{k=N+1}^{\infty}\lvert a_k\rvert\\
    &<\frac{\varepsilon}{2}+\frac{\varepsilon}{2}\\
    &=\varepsilon.
    \end{aligned}
    $$
    Hence $\gamma_n\to0$, and consequently
    $$
    C_n=A_nB-\gamma_n\longrightarrow AB.
    $$
    Thus,
    $$
    \sum_{n=0}^{\infty}c_n=AB.
    $$

    Finally, suppose that $\sum_{n=0}^{\infty}b_n$ is absolutely convergent. For every $N\geqslant0$,
    $$
    \begin{aligned}
    \sum_{n=0}^{N}\lvert c_n\rvert
    &\leqslant
      \sum_{n=0}^{N}\sum_{k=0}^{n}
      \lvert a_k\rvert\lvert b_{n-k}\rvert\\
    &\leqslant
      \left(\sum_{k=0}^{\infty}\lvert a_k\rvert\right)
      \left(\sum_{j=0}^{\infty}\lvert b_j\rvert\right)\\
    &=\widetilde A\widetilde B.
    \end{aligned}
    $$
    The partial sums of $\sum_{n=0}^{\infty}\lvert c_n\rvert$ are increasing and bounded above. Therefore, they converge, and
    $$
    \sum_{n=0}^{\infty}\lvert c_n\rvert
    \leqslant\widetilde A\widetilde B.
    $$
