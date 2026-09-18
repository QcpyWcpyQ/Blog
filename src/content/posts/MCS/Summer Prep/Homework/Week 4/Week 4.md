---
title: "Week 4"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Week 4

- **Problem 1**
  Let 
  $$
  \dfrac{p}{q}
  $$
  be a rational number in a reduced representation, where
  $$
  p \in \mathbb N, \quad q \in \mathbb N, \quad 0 < p < q.
  $$
  Suppose its decimal representation is finite.  
  Prove that its decimal representation terminates after *exactly two digits* after the decimal point if and only if
  $$
  q \in \{4, 20, 25, 50, 100\}.
  $$
  Here, "exactly two digits" means that the number can be written as a decimal with two digits after the decimal point, but cannot be written as a decimal with only one digit after the decimal point.

  - **Proof 1.1**
    Suppose $p \in \mathbb N,q \in \mathbb N, 0 < p < q$. By definition, we have $\dfrac{p}{q} = \dfrac{N}{100}$ for some $10 \leqslant N < 100$ and $10\not\mid N$. Then
    $$
    100p = qN.
    $$
    Since $\dfrac{p}{q}$ is a reduced representation, $p$ and $q$ have no common prime factors. By theorem, since the decimal representation of $\dfrac{p}{q}$ is finite, the only possible prime factors of $q$ are $2$ or $5$. Thus, $q$ must be a divisor of $100 = 2^2 \cdot 5^2$.  We have $\operatorname{Div}_+(100)=\{1, 2, 4, 5, 10, 20, 25, 50, 100\}$.
  
    * ($\Longrightarrow$) Suppose $\dfrac{p}{q}$ has exactly two decimal digits, which means $10 \not\mid N$. We prove the required set by eliminating the invalid values of $q$:
      * If $q = 1$, then $100p = N$. This implies $10 \mid N$, which is a contradiction.
      * If $q = 2$, then $50p = N \implies 10 \mid 50p \implies 10 \mid N$, which is a contradiction.
      * If $q = 5$, then $20p = N \implies 10 \mid 20p \implies 10 \mid N$, which is a contradiction.
      * If $q = 10$, then $10p = N \implies 10 \mid N$, which is a contradiction.
      Therefore, $q$ cannot be $1$, $2$, $5$, or $10$. Eliminating these values from the set of all positive divisors of $100$ leaves the remaining possible values:
      
      $$
      q \in \{4, 20, 25, 50, 100\}.
      $$
      
    * ($\Longleftarrow$) Suppose $q \in \{4, 20, 25, 50, 100\}$. Since $\dfrac{p}{q}$ is a reduced representation, we know that if $2 \mid q$ then $2 \not\mid p$, and if $5 \mid q$ then $5 \not\mid p$. By proposition, we show that $10 \not\mid N$ for each case:
      * If $q = 4$, then $100p = 4N \implies N = 25p$. Since $4 = 2^2 \mid q$, we have $2 \not\mid p$, which means $p$ is odd. Thus, $2 \not\mid 25p \implies 2 \not\mid N \implies 10 \not\mid N$.
      * If $q = 20$, then $100p = 20N \implies N = 5p$. Since $20 = 2^2 \cdot 5 \mid q$, we have $2 \not\mid p$, which means $p$ is odd. Thus, $2 \not\mid 5p \implies 2 \not\mid N \implies 10 \not\mid N$.
      * If $q = 25$, then $100p = 25N \implies N = 4p$. Since $25 = 5^2 \mid q$, we have $5 \not\mid p$. Thus, $5 \not\mid 4p \implies 5 \not\mid N \implies 10 \not\mid N$.
      * If $q = 50$, then $100p = 50N \implies N = 2p$. Since $50 = 2 \cdot 5^2 \mid q$, we have $5 \not\mid p$. Thus, $5 \not\mid 2p \implies 5 \not\mid N \implies 10 \not\mid N$.
      * If $q = 100$, then $100p = 100N \implies N = p$. Since $\dfrac{p}{100}$ is a reduced representation, we have that $p$ cannot be a multiple of $10$. Thus, $10 \not\mid N$.
      In all cases, $10 \not\mid N$, which means the decimal representation cannot be simplified to have only one digit after the decimal point. Since $q \mid 100$, it terminates after at most two digits. Thus, it terminates after exactly two digits.

---

- **Problem 2**
  Let
  $$
  x = \sqrt 2 + \sqrt 3.
  $$

  1. Prove, without using decimal approximations, that
     $$
     3 < x < 4.
     $$

  2. Prove that $x$ is irrational.  
     You may use the result that $\sqrt 2$ is irrational. Your proof should use only the arithmetic properties of rational and real numbers and the properties of roots.

  - **Solution 2.1**
    Suppose $x = \sqrt 2 + \sqrt 3$ then $x>0$.
    
    1. We have
       $$
       x^2 = \left(\sqrt 2 + \sqrt 3\right)^2 = 2 + 2\sqrt 6 + 3 = 5 + 2\sqrt 6.
       $$
       Since $4<6<9$, we have $\sqrt 4<\sqrt 6<\sqrt 9$, that is, $2<\sqrt 6<3$. Then
       $$
       2\times 2+5<2\sqrt 6+5<3\times 2+5 \implies9 < x^2 < 11.
       $$
       Thus $\sqrt 9<\sqrt {x^2}<\sqrt {11}$. SInce $x>0$, we have $3<x<\sqrt {11}$. Because $\sqrt{11}<\sqrt{16}=4$,  by transitivity of order, we obtain that $3<x<4$.
    
    2. By contradiction. Suppose $x = \sqrt 2 + \sqrt 3$ is a rational number, that is, $x \in \mathbb Q$.
      Then we have
    $$
      \begin{aligned}
      
      x = \sqrt 2 + \sqrt 3 &\implies x - \sqrt 2 = \sqrt 3 \\
      &\implies \left(x - \sqrt 2\right)^2 = \left(\sqrt 3\right)^2 \\
      &\implies x^2 - 2x\sqrt 2 + 2 = 3 \\
      &\implies x^2 - 1 = 2x\sqrt 2 \\
      &\implies \sqrt 2 = \dfrac{x^2 - 1}{2x}.
      
      \end{aligned}
    $$
      Since $x \neq 0$, so the denominator $2x \neq 0$. Since $x\in\Q$, we have that $\dfrac{x^2 - 1}{2x}\in\Q$. But $\sqrt 2\not\in\Q$ by proposition, which is a contradiction. Therefore, $x = \sqrt 2 + \sqrt 3$ must be irrational.

---

- **Problem 3**
  Let $x > 0$. Prove that
  $$
  \sqrt{x^{-1}} = \left(\sqrt x\right)^{-1}.
  $$
  Your proof should use the definition of the square root and the arithmetic properties of inverses rather than assuming a rule for manipulating roots.

  - **Proof 3.1**
    Suppose $x>0$. Let $u = \sqrt{x^{-1}}$. Since $x > 0 \implies x^{-1} > 0$, by definition, $u$ is the unique positive real number satisfying
    $$
    u^2 = x^{-1}. \quad (1)
    $$
    Now, let $v = \sqrt x$. By definition, since $x > 0$, $v$ is the unique positive real number satisfying $v^2 = x$. Since $v > 0$, its multiplicative inverse $v^{-1} = (\sqrt x)^{-1}$ exists and is also positive. Then by theorem, we have that
    $$
    \left((\sqrt x)^{-1}\right)^2 = \left(v^{-1}\right)^2 = \dfrac{1}{v^2} = \left(v^2\right)^{-1} = x^{-1}. \quad (2)
    $$
    
    Comparing equation (1) and equation (2), both $u = \sqrt{x^{-1}}$ and $v^{-1} = (\sqrt x)^{-1}$ are positive real numbers whose square is equal to $x^{-1}$. By definition, the positive square root of $x$ is unique, that is,
    $$
    \sqrt{x^{-1}} = (\sqrt x)^{-1}.
    $$

---

- **Problem 4**
  Prove that for every $\varepsilon > 0$, there exists $\delta > 0$, such that
  $$
  0 < |x - 3| < \delta \implies \left| \dfrac{x - 1}{x^2} - \dfrac{2}{9} \right| < \varepsilon.
  $$

  - **Proof 4.1**
    Suppose $\varepsilon > 0$ and let $\delta := \min\left\{1, \dfrac{36\varepsilon}{5}\right\}$. Suppose $0 < |x - 3| < \delta$.  
    Since $\delta \leqslant 1$, we have $|x - 3| < 1$, which implies
    $$
    -1 < x - 3 < 1 \implies 2 < x < 4.
    $$
    Then we have
    $$
    \left| \dfrac{x - 1}{x^2} - \dfrac{2}{9} \right| = \left| \dfrac{9(x - 1) - 2x^2}{9x^2} \right| = \left| \dfrac{-2x^2 + 9x - 9}{9x^2} \right| = \dfrac{|-(2x - 3)(x - 3)|}{9x^2} = |x - 3| \cdot \dfrac{|2x - 3|}{9x^2}.
    $$
    To bound the term $\dfrac{|2x - 3|}{9x^2}$, we apply the properties of order and the triangle inequality within the restricted interval $2 < x < 4$:
    * For the numerator, since $x < 4$, we have $|2x - 3| \leqslant 2|x| + 3 < 2(4) + 3 = 11$. For a tighter elementary bound without derivatives, since $2 < x < 4 \implies 4 < 2x < 8 \implies 1 < 2x - 3 < 5$. Thus, we have $|2x - 3| < 5$.
    * For the denominator, since $2 < x \implies x^2 > 4 \implies 9x^2 > 36 \implies \dfrac{1}{9x^2} < \dfrac{1}{36}$.  
    
    Combining these two basic inequality bounds, we obtain the following upper bound for the fraction:
    $$
    \dfrac{|2x - 3|}{9x^2} < \dfrac{5}{36}.
    $$
    Since we also have $|x - 3| < \delta \leqslant \dfrac{36\varepsilon}{5}$, it follows that:
    $$
    \left| \dfrac{x - 1}{x^2} - \dfrac{2}{9} \right| = |x - 3| \cdot \dfrac{|2x - 3|}{9x^2} < \left(\dfrac{36\varepsilon}{5}\right) \cdot \dfrac{5}{36} = \varepsilon.
    $$
    Therefore, the statement is proved.

---

- **Problem 5**
  Let 
  $$
  z = 1 + \sqrt 3\i.
  $$

  (a) Compute $\overline z$, $|z|$, and $\dfrac 1z$.
  (b) Write $z$ in polar form $z = r\operatorname{cis}(\theta)$, where $\theta = \operatorname{Arg}(z) \in (-\pi, \pi]$.
  (c) Using de Moivre's formula, compute $z^6$.
  (d) Find all complex numbers $w$ satisfying $w^3 = z$. Write your answers in polar form.
  (e) Verify directly that the three solutions from part (d) have the same modulus and that their arguments differ by $\dfrac{2\pi}{3}$.

  - **Solution 5.1**
    
    **(a) Computation of $\overline z$, $|z|$, and $\dfrac 1z$**
    
    * By Definition 3, the conjugate of $z = 1 + \sqrt 3\i$ is:
      $$
      \overline z = 1 - \sqrt 3\i.
      $$
    * By Definition 3, the modulus of $z$ is:
      $$
      |z| = \sqrt{1^2 + (\sqrt 3)^2} = \sqrt{1 + 3} = \sqrt 4 = 2.
      $$
    * By Theorem 3.2(2), since $z \neq 0$, the multiplicative inverse is:
      $$
      \dfrac 1z = \dfrac{\overline z}{|z|^2} = \dfrac{1 - \sqrt 3\i}{2^2} = \dfrac{1}{4} - \dfrac{\sqrt 3}{4}\i.
      $$

    **(b) Polar form representation of $z$**
    From part (a), we have $r = |z| = 2$. For the principal argument $\theta = \operatorname{Arg}(z)$, since $z$ lies in the first quadrant of the complex plane because $x = 1 > 0, y = \sqrt 3 > 0$, we have
    $$
    \tan\theta = \dfrac{\sqrt 3}{1} = \sqrt 3 \implies \theta = \dfrac{\pi}{3}.
    $$
    Thus  $\operatorname{Arg}(z) = \dfrac{\pi}{3}$. Therefore, the polar form of $z$ is:
    $$
    z = 2\operatorname{cis}\left(\dfrac{\pi}{3}\right).
    $$
    **(c) Computation of $z^6$ using de Moivre's formula**

    * By Corollary,
      $$
      \begin{aligned}
      z^6 &= \left(2\operatorname{cis}\left(\dfrac{\pi}{3}\right)\right)^6 \\
      &= 2^6 \operatorname{cis}\left(6 \cdot \dfrac{\pi}{3}\right) \\
      &= 64 \operatorname{cis}(2\pi).
      \end{aligned}
      $$
    * Since $\operatorname{cis}(2\pi) = \cos(2\pi) + \i\sin(2\pi) = 1 + 0\i = 1$, we obtain that
      $$
      z^6 = 64 \cdot 1 = 64.
      $$
    
    **(d) Find all complex numbers $w$ satisfying $w^3 = z$**:
    
    * Let $w = \rho\operatorname{cis}(\varphi)$ be the polar representation of the roots. By De Moivre's formula, $w^3 = \rho^3\operatorname{cis}(3\varphi)$. We set $w^3 = z$:
      $$
      \rho^3\operatorname{cis}(3\varphi) = 2\operatorname{cis}\left(\dfrac{\pi}{3}\right).
      $$
    * Comparing the moduli gives $\rho^3 = 2 \implies \rho = \sqrt[3]{2}$.  
    * Comparing the arguments gives $3\varphi = \dfrac{\pi}{3} + 2k\pi \implies \varphi_k = \dfrac{\pi}{9} + \dfrac{2k\pi}{3}$ for $k \in \mathbb Z$. To obtain three distinct roots, we choose $k = 0, 1, 2$:
      * For $k = 0$: $\varphi_0 = \dfrac{\pi}{9} \implies w_0 = \sqrt[3]{2}\operatorname{cis}\left(\dfrac{\pi}{9}\right)$.
      * For $k = 1$: $\varphi_1 = \dfrac{\pi}{9} + \dfrac{2\pi}{3} = \dfrac{7\pi}{9} \implies w_1 = \sqrt[3]{2}\operatorname{cis}\left(\dfrac{7\pi}{9}\right)$.
      * For $k = 2$: $\varphi_2 = \dfrac{\pi}{9} + \dfrac{4\pi}{3} = \dfrac{13\pi}{9} \implies w_2 = \sqrt[3]{2}\operatorname{cis}\left(\dfrac{13\pi}{9}\right)$.
    * Therefore, the three solutions in polar form are $w_0$, $w_1$, and $w_2$ as defined above.

    **(e) Verification of the modulus and argument properties**:
    * **Modulus verification**: From part (d), the moduli of the three solutions are $|w_0| = |w_1| = |w_2| = \rho = \sqrt[3]{2}$. Thus, they all have the exact same modulus.
    * **Argument verification**: We directly compute the adjacent differences between the arguments $\varphi_0, \varphi_1, \varphi_2$:
      $$
      \varphi_1 - \varphi_0 = \dfrac{7\pi}{9} - \dfrac{\pi}{9} = \dfrac{6\pi}{9} = \dfrac{2\pi}{3}.
      $$
      $$
      \varphi_2 - \varphi_1 = \dfrac{13\pi}{9} - \dfrac{7\pi}{9} = \dfrac{6\pi}{9} = \dfrac{2\pi}{3}.
      $$
      $$
      \left(\varphi_0 + 2\pi\right) - \varphi_2 = \dfrac{19\pi}{9} - \dfrac{13\pi}{9} = \dfrac{6\pi}{9} = \dfrac{2\pi}{3}.
      $$
      Therefore, the arguments of the three solutions differ consecutively by exactly $\dfrac{2\pi}{3}$.
