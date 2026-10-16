---
title: "Matrices over Fields"
published: 2026-10-16
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**  
    Let  
    $$
    \begin{aligned}
    A&=\pmatrix{3&2&4\\1&0&6}\in M_{2\times 3}(\mathbb Z_7) \\
    B&=\pmatrix{1&5\\2&0\\4&1}\in M_{3\times 2}(\mathbb Z_7) \\
    C&=\pmatrix{23&65 \\14&6}\in M_{2\times 2}(\mathbb Z_7)
    \end{aligned}
    $$
    Calculate $AB+C$.  

    - **Solution 1.1**  
      $$
      \begin{aligned}
      
      AB+C &= \pmatrix{3&2&4\\1&0&6}\pmatrix{1&5\\2&0\\4&1}+\pmatrix{23&65 \\14&6} \\
      &= \pmatrix{23&19 \\25&11} + \pmatrix{23&65 \\14&6} \\
      &= \pmatrix{46&84 \\39&17} \\
      &=\pmatrix{4&0 \\4&3}.
      
      \end{aligned}
      $$

---

- **Problem 2**  
    Show that $A=\pmatrix{4&5 \\1&6}$ has an inverse in $M_{2\times 2}(\mathbb R)$ and write it explicately.

    - **Solution 2.1**  
        Suppose $A=\pmatrix{4&5 \\1&6}$. We have that $\det(A)=4\times 6-1\times 5=19\neq 0$. Thus $A$ is invertible and the formula for its inverse is 
        $$
        \begin{aligned}
        A^{-1} &= (\det(A))^{-1}\pmatrix{6&-1 \\-5&4} \\
        &= \pmatrix{\frac{6}{19}&-\frac{1}{19} \\ -\frac{5}{19}&\frac{4}{19}}.
        
        \end{aligned}
        $$

---

- **Problem 3**  
    Let $p(x)=2x^3+x^2+1$, $q(x)=2x^2+x+1$ and $r(x)=2x^2+2x$ be polynomials in $\mathbb Z_3[x]$, calculate $p(x)q(x)+r(x)$.

    Compare $\deg(p(x)q(x))$ with $\deg(p(x))+\deg(q(x))$. Can we guarantee that these values are equal for any nonzero polynomials in $\mathbb Z_3[x]$?

    - **Solution 3.1**  
        Suppose $p(x)=2x^3+x^2+1$, $q(x)=2x^2+x+1$ and $r(x)=2x^2+2x$ be polynomials in $\mathbb Z_3[x]$. Then we have  
        $$
        \begin{aligned}
        p(x)q(x)+r(x)&=\left(2x^3+x^2+1\right)\left(2x^2+x+1\right)+2x^2+2x  \\
        &= 4x^5+2x^4+2x^3+2x^4+x^3+x^2+2x^2+x+1+2x^2+2x \\
        &= 4x^5+4x^4+3x^3+5x^2+3x+1 \\
        &= x^5+x^4+2x^2+1.
        \end{aligned}
        $$
        $\deg(p(x)q(x))=5$. $\deg(p(x))+\deg(q(x))=3+2=5$. Therefore they are equal.

        Yes, we can guarantee this because $\mathbb Z_3$ is a field.

        $\deg(p(x)q(x))=3$ and $\deg(p(x))+\deg(q(x))=3+2=5$ in $\mathbb Z_4$. Therefore they are not equal. ($\mathbb Z_{4}$ is not a field)