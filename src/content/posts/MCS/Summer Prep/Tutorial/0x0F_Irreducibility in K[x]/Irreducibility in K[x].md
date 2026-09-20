---
title: "Irreducibility in K[x]"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Irreducibility in $\K[x]$.

- **Exercise 1**  
  Determine polynomials below is rather reducible or not.
  $$
  \begin{array}{c|c|c|c|c}

  &\Z&\Q&\R&\C  \\
  p_1(x)=x^2+4x+4=(x+2)^2 & 1 & 1 & 1 & 1 \\
  p_2(x)=x^2-4=(x-2)(x+2) & 1 & 1 & 1 & 1 \\
  p_3(x)=9x^2-3=3\left(\sqrt3x-1\right)\left(\sqrt3x+1\right) & 0 & 0  & 1 & 1 \\
  p_4(x)=x^2-\dfrac 49=\left(x-\dfrac 23\right)\left(x+\dfrac 23\right) & 0 & 1 & 1 & 1 \\
  p_5(x)=x^2-2=\left(x-\sqrt 2\right)\left(x+\sqrt 2\right) & 0 & 0 & 1  & 1 \\
  p_6(x)=x^2+1=\left(x-\i\right)\left(x+\i\right) & 0 & 0 & 0 & 1



  \end{array}
  $$

---

- **Exercise 2**  
  Prove that $x=1$is a root of $p(x)=2x^4-3x^3-3x^2+7x-3$ and find its multiplicity. Is $p(x)$ reducible over $\Z,\Q,\R,\C$?
  - **Solution 2.1**  
    $p(1)=2-3-3+7-3=0\implies x=1$ is a root. Then $p(x)=(x-1)\left(2x^3-x^2-4x+3\right)$. We find that $2-1-4+3=0$. Then $p(x)=(x-1)^2\left(2x^2+x-3\right)$ and then $p(x)=(x-1)^3(2x+3)$. Therefore $p$ is reducible over $\Z,\Q,\R,\C$.

---

- **Exercise 3**  
  FInd a real root of $f(x)=x^3-\sqrt 2x^2+x-\sqrt 2$.
  - **Solution 3.1**  
    We have that $f(x)=\left(x-\sqrt2\right)\left(x^2+1\right)$. Therefore $x=\sqrt 2$ is a real root.

---

- **Exercise 4**  
  Determine $p(x)=x^{12}+x^6+1$ is reducible or not over $\Z,\Q,\R,\C$.

  - **Solution 4.1**  
    We have that
    $$
    \begin{aligned}

    p(x)&=x^{12}+2x^6+1-x^6 \\
    &= \left(x^6+1\right)^2-x^6 \\
    &= \left(x^6+1-x^3\right)\left(x^6+1+x^3\right).

    \end{aligned}
    $$
    Therefore it is reducible over $\Z,\Q,\R,\C$.

---

- **Exercise 5**  
  Find the roots of the following polynomial $p(x)=x^5-3x^4+5x^3-x^2-10x$.
  - **Solution 5.1**  
    We have that $p(x)=x\left(x^4-3x^3+5x^2-x-10\right)$. By rational roots theorem, possible rational roots are $\pm1,\pm2,\pm5,\pm10$. We find that $p(-1)=p(2)=0$. Thus $p(x)=x(x+1)(x+2)\left(x^2-2x+5\right)$.

---

- **Exercise 6**  
  Let $p(x)=x^5+a_3x^3+a_2x^2+a_1x+a_0$ be the polynomial with real coefficients. Suppose that $x_1=1+\i$ is one root of multiplicity $2$. Prove that $a_0=16$.
  - **Solution 6.1**  
    $1-\i$ is also a root of multiplication $2$. Then $\left(x-\left(1+\i\right)\right)^2\left(x-\left(1-\i\right)\right)^2=x^4-4x^3+8x^2-8x+4\mid p(x)$. Suppose that $p(x)=(x+r)\left(x^4-4x^3+8x^2-8x+4\right)=x^5+(r-4)x^4+(8-4r)x^3+(8-8r)x^2+(4-8r)x+4r$. Therefore $a_0=4r=16$.
