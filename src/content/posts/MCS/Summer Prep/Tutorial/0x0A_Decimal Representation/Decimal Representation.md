---
title: "Decimal Representation"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Decimal Representation

- **Exercise 1**
  For each of the following reduced fractions, determine whether its decimal representation is finite or infinite repeating.
  For each fraction with a finite decimal representation, determine the smallest number of digits after the decimal point needed to represent it.
  For each fraction with an infinite repeating decimal representation, determine whether the repeating part begins immediately after the decimal point or only after one or more nonrepeating digits.

  1. $\frac {7}{24}$
     We have
     $$
     24=2^3\cdot 3.
     $$
     So $\frac{7}{24}$ has an infinite repeating decimal representation because $3 \mid 24$.

     Then
     $$
     \begin{aligned}
     70 &= 24\cdot 2+22 \\
     220 &= 24\cdot 9+4 \\
     40 &= 24\cdot 1+16 \\
     160 &= 24\cdot 6+16 \\
     160 &= 24\cdot 6+16 \\
     &\ \ \vdots 
     \end{aligned}
     $$
     Thus $\frac{7}{24}=0.291\overline{6}$. The repeating part begins only after $3$ nonrepeating digits.

  2. $\frac{11}{40}$
     We have
     $$
     40=2^3\cdot 5.
     $$
     So $\frac{11}{40}$ has a finite decimal representation because every prime factor of $40$ is either $2$ or $5$.

     Then
     $$
     \begin{aligned}
     \frac{11}{40}&=\frac{11}{2^3\cdot 5} \\
     &= \frac{11}{2^3\cdot 5}\cdot \frac{5^2}{5^2} \\
     &= \frac{11\cdot 5^2}{2^3\cdot 5^3} \\
     &= \frac{11\cdot 5^2}{10^3} \\
     &= \frac{275}{1000}=0.275.
     \end{aligned}
     $$
     The smallest number of digits after the decimal point needed to represent it is $3$.

  3. $\frac{13}{45}$
     We have
     $$
     45=3^2\cdot 5.
     $$
     So $\frac{13}{45}$ has an infinite repeating decimal representation because $3 \mid 45$.

     Then
     $$
     \begin{aligned}
     130 &= 45 \cdot 2 + 40 \\
     400 &= 45 \cdot 8 + 40 \\
     400 &= 45 \cdot 8 + 40 \\
     &\ \ \vdots
     \end{aligned}
     $$
     Thus $\frac{13}{45}=0.2\overline{8}$. The repeating part begins only after $1$ nonrepeating digit.

  4. $\frac{29}{125}$
     We have
     $$
     125=5^3.
     $$
     So $\frac{29}{125}$ has a finite decimal representation because every prime factor of $125$ is either $2$ or $5$.

     Then
     $$
     \begin{aligned}
     \frac{29}{125}&=\frac{29}{5^3} \\
     &= \frac{29}{5^3}\cdot \frac{2^3}{2^3} \\
     &= \frac{29\cdot 2^3}{5^3\cdot 2^3} \\
     &= \frac{29\cdot 2^3}{10^3} \\
     &= \frac{232}{1000}=0.232.
     \end{aligned}
     $$
     The smallest number of digits after the decimal point needed to represent it is $3$.

---

- **Exercise 2**
  Let $x=0.a_1a_2a_3\cdots$ and $y=0.b_1b_2b_3\cdots$ be two decimal representations, neither of which is eventually an infinite string of $9$'s. Suppose $n$ is the first index for which $a_n\neq b_n$. Prove that
  $$
  x<y\iff a_n<b_n.
  $$

  - **Proof 2.1**
    Since $n$ is the first index for which $a_n \neq b_n$, we have $a_k = b_k$ for all $1 \leqslant k < n$. We can express the difference $y - x$ as:
    $$
    y - x = (b_n - a_n)10^{-n} + \sum_{i=n+1}^{\infty} (b_i - a_i)10^{-i}.
    $$
    
    ($\Longleftarrow$) Suppose $a_n < b_n$. Since $a_n, b_n$ are distinct digits, we have $b_n - a_n \geqslant 1$.  
    For the remaining tail digits, the minimum possible value of $b_i - a_i$ is $0 - 9 = -9$. Since the decimal representations do not eventually terminate in an infinite string of $9$'s, the tail sum satisfies a strict inequality:
    $$
    \sum_{i=n+1}^{\infty} (b_i - a_i)10^{-i} > \sum_{i=n+1}^{\infty} (-9)10^{-i} = -9 \cdot \frac{10^{-(n+1)}}{1 - 10^{-1}} = -10^{-n}.
    $$
    Substituting this back into the difference equation, we obtain:
    $$
    y - x > 1 \cdot 10^{-n} - 10^{-n} = 0 \implies x < y.
    $$

    ($\Longrightarrow$) Suppose $x < y$. We prove $a_n < b_n$ by contradiction.  
    Since $a_n \neq b_n$, if $a_n \nless b_n$, it must be that $a_n > b_n$.  
    By symmetry, applying the exact same argument as the previous step (interchanging the roles of $x$ and $y$), $a_n > b_n$ implies that $x > y$.  
    This directly contradicts the given assumption that $x < y$. Therefore, we must have $a_n < b_n$.

    Hence, the equivalence $x < y \iff a_n < b_n$ is proved.