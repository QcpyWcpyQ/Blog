---
title: "Inequalities"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Inequalities

- **Exercise 1**
  Let $f(x)=\dfrac{2x-1}{x+3}$. Find the preimage $f^{-1}\left((1,3)\right)$ of $(1,3)$.

  - **Solution 1.1**
    We have
    $$
    \begin{aligned}
    f^{-1}\left((1,3)\right)&=\left\{x\in\mathbb R\setminus\{-3\}:f(x)\in(1,3)\right\} \\
    &= \left\{x\in\mathbb R\setminus\{-3\}:1<\dfrac{2x-1}{x+3}<3\right\} \\
    &= \left\{x\in\mathbb R\setminus\{-3\}:1<\dfrac{2x-1}{x+3}\right\}\cap \left\{x\in\mathbb R\setminus\{-3\}:\dfrac{2x-1}{x+3}<3\right\} \\
    &= \left\{x\in\mathbb R\setminus\{-3\}:0<\dfrac{2x-1}{x+3}-1\right\}\cap \left\{x\in\mathbb R\setminus\{-3\}:\dfrac{2x-1}{x+3}-3<0\right\} \\
    &= \left\{x\in\mathbb R\setminus\{-3\}:0<\dfrac{x-4}{x+3}\right\}\cap \left\{x\in\mathbb R\setminus\{-3\}:\dfrac{-x-10}{x+3}<0\right\} \\
    &= \left((-\infty,-3)\cup(4,\infty)\right)\cap \left((-\infty,-10)\cup(-3,\infty)\right) \\
    &= (-\infty,-10)\cup (4,\infty).
    \end{aligned}
    $$

---

- **Exercise 2**
  Suppose $x,y\in\mathbb R$ satisfy
  $$
  0\leqslant\vert x-y\vert<\varepsilon
  $$
  for every $\varepsilon>0$. Prove that $x=y$.

  - **Proof 2.1**
    Suppose $x,y\in\mathbb R$. Consider $a=\vert x-y\vert$. Then $\forall \varepsilon>0, a\geqslant 0, a<\varepsilon$. By Theorem 1.5, we have that $a=0=\vert x-y\vert$, that is, $x=y$.

---

- **Exercise 3**
  Suppose $a\in\mathbb R$ satisfies
  $$
  0\leqslant a<\dfrac 1n
  $$
  for every $n\in\mathbb N$. Prove that $a=0$.

  - **Proof 3.1**
    Suppose $a\in\mathbb R$. Suppose $\forall n\in\mathbb N, 0\leqslant a<\dfrac 1n$. Suppose $\varepsilon>0$, we need to prove that $a<\varepsilon$. By the Archimedean property, $\exists N_{\varepsilon}\in\mathbb N$ such that $\dfrac{1}{N_{\varepsilon}}<\varepsilon$. Thus $0\leqslant a<\dfrac{1}{N_{\varepsilon}}<\varepsilon$. Therefore $0\leqslant a<\varepsilon$. By Theorem 1.5, we have that $a=0$.

---

- **Exercise 4**
  Suppose $a\in\mathbb R$, suppose that for all $\varepsilon>0$, $a<\varepsilon$. Is it true that $a=0$? Prove it or give a counterexample.

  - **Solution 4.1**
    It's false. Consider $a=-1$, then $a<\varepsilon$ holds for all \(\varepsilon>0\), but $a \neq 0$.

---

- **Exercise 5**
  Consider $f(x)=\dfrac{2x+1}{x-5}$. Find the elements in the domain whose image is at a distance less than $2$ from $3$.

  - **Solution 5.1**
    We have that
    $$
    \begin{aligned}
    \left\{x\in\mathbb R\setminus\{5\}:\text d(f(x),3)<2\right\} &= \left\{x\in\mathbb R\setminus\{5\}:\left\vert \dfrac{2x+1}{x-5}-3\right\vert<2\right\} \\
    &= \left\{x\in\mathbb R\setminus\{5\}:\left\vert \dfrac{2x+1-3(x-5)}{x-5}\right\vert<2\right\} \\
    &= \left\{x\in\mathbb R\setminus\{5\}:\left\vert \dfrac{-x+16}{x-5}\right\vert<2\right\}.
    \end{aligned}
    $$
    By Proposition 2.3(1), this ``is equivalent to:
    $$
    -2 < \dfrac{-x+16}{x-5} < 2.
    $$
    We solve this by splitting it into a system of two inequalities
    1. For
       $$
       \begin{aligned}
       
       -2 < \dfrac{-x+16}{x-5} &\iff \dfrac{-x+16+2(x-5)}{x-5} > 0 \\
       & \iff \dfrac{x+6}{x-5} > 0 \\
       &\implies x \in (-\infty, -6) \cup (5, \infty).
       
       \end{aligned}
       $$
    
    2. For
       $$
       \begin{aligned}
       
       \dfrac{-x+16}{x-5} < 2 &\iff \dfrac{-x+16-2(x-5)}{x-5} < 0 \
       &\iff \dfrac{-3x+26}{x-5} < 0 \\
       &\iff \dfrac{3x-26}{x-5} > 0 \\
       &\implies x \in (-\infty, 5) \cup \left(\dfrac{26}{3}, \infty\right).
       
       \end{aligned}
       $$
    
    Taking the intersection of these two solution sets yields
    $$
    \left((-\infty, -6) \cup (5, \infty)\right) \cap \left((-\infty, 5) \cup \left(\dfrac{26}{3}, \infty\right)\right) = (-\infty, -6) \cup \left(\dfrac{26}{3}, \infty\right).
    $$
    Therefore, the required elements in the domain are $x \in (-\infty, -6) \cup \left(\dfrac{26}{3}, \infty\right)$.

---

- **Exercise 6**
  Solve $\vert2x-5\vert-\left\vert\dfrac{x+1}{x-3}\right\vert\geqslant 1$.

  - **Solution 6.1**
    Consider a necessary condition $\vert 2x-5\vert-1\geqslant 0$, which yields $2x-5 \leqslant -1 \lor 2x-5 \geqslant 1 \iff x\leqslant 2\lor x\geqslant 3$. Notice that the expression is undefined at $x=3$, so the domain is $\mathbb R \setminus \{3\}$. The zeroes of the absolute value expressions are $x = \frac{5}{2}$, $x = -1$, and $x = 3$. Combined with the necessary condition, we consider the following valid intervals for $x$:

    1. **Case 1**: $x \leqslant -1$.
       In this interval, $2x-5 < 0 \implies |2x-5| = -2x+5$. For the fraction, $x+1 \leqslant 0$ and $x-3 < 0$, so $\dfrac{x+1}{x-3} \geqslant 0 \implies \left|\dfrac{x+1}{x-3}\right| = \dfrac{x+1}{x-3}$. The inequality becomes
       $$
       -2x+5 - \dfrac{x+1}{x-3} \geqslant 1 \iff -2x+4 - \dfrac{x+1}{x-3} \geqslant 0 \iff \dfrac{(-2x+4)(x-3) - (x+1)}{x-3} \geqslant 0.
       $$
       Expanding the numerator: $-2x^2 + 10x - 12 - x - 1 = -2x^2 + 9x - 13$. The inequality is
       $$
       \dfrac{-2x^2+9x-13}{x-3} \geqslant 0 \iff \dfrac{2x^2-9x+13}{x-3} \leqslant 0.
       $$
       The discriminant of the quadratic equation $2x^2-9x+13$ is $\Delta = (-9)^2 - 4(2)(13) = 81 - 104 = -23 < 0$, which means $2x^2-9x+13 > 0$ for all $x \in \mathbb R$. Thus, the inequality depends only on $x-3 < 0 \implies x < 3$. Intersecting with $x \leqslant -1$ yields $x \in (-\infty, -1]$.

    2. **Case 2**: $-1 < x \leqslant 2$.
       In this interval, $|2x-5| = -2x+5$. For the fraction, $x+1 > 0$ and $x-3 < 0$, so $\dfrac{x+1}{x-3} < 0 \implies \left|\dfrac{x+1}{x-3}\right| = -\dfrac{x+1}{x-3}$. The inequality becomes
       $$
       -2x+5 + \dfrac{x+1}{x-3} \geqslant 1 \iff -2x+4 + \dfrac{x+1}{x-3} \geqslant 0 \iff \dfrac{(-2x+4)(x-3) + (x+1)}{x-3} \geqslant 0.
       $$
       Expanding the numerator $-2x^2 + 10x - 12 + x + 1 = -2x^2 + 11x - 11$. The inequality is:
       $$
       \dfrac{-2x^2+11x-11}{x-3} \geqslant 0 \iff \dfrac{2x^2-11x+11}{x-3} \leqslant 0.
       $$
       Since $x \leqslant 2 < 3$, the denominator $x-3$ is negative, so the numerator must be positive, that is, $2x^2-11x+11 \geqslant 0$.
       The roots of $2x^2-11x+11=0$ are $x = \dfrac{11 \pm \sqrt{121-88}}{4} = \dfrac{11 \pm \sqrt{33}}{4}$. So The solution for the numerator is $x \leqslant \dfrac{11-\sqrt{33}}{4} \lor x \geqslant \dfrac{11+\sqrt{33}}{4}$.
       Intersecting this with the case interval $-1 < x \leqslant 2$ gives $x \in \left(-1, \dfrac{11-\sqrt{33}}{4}\right]$.
       
    3. **Case 3**: $x > 3$.
       In this interval, $2x-5 > 0 \implies |2x-5| = 2x-5$. For the fraction, $x+1 > 0$ and $x-3 > 0$, so $\left|\dfrac{x+1}{x-3}\right| = \dfrac{x+1}{x-3}$. The inequality becomes
       $$
       2x-5 - \dfrac{x+1}{x-3} \geqslant 1 \iff 2x-6 - \dfrac{x+1}{x-3} \geqslant 0 \iff \dfrac{2(x-3)^2 - (x+1)}{x-3} \geqslant 0.
       $$
       Since $x > 3$, the denominator is positive, so the numerator must be positive, that is, $2x^2 - 12x + 18 - x - 1 = 2x^2 - 13x + 17 \geqslant 0$.
       The roots are $x = \dfrac{13 \pm \sqrt{169-136}}{4} = \dfrac{13 \pm \sqrt{33}}{4}$. So the solution is $x \leqslant \dfrac{13-\sqrt{33}}{4} \lor x \geqslant \dfrac{13+\sqrt{33}}{4}$.
       Intersecting this with the case interval $x > 3$ gives $x \in \left[\dfrac{13+\sqrt{33}}{4}, \infty\right)$.
    
    Combining all three cases, the complete solution set is:
    $$
    (-\infty, -1] \cup \left(-1, \dfrac{11-\sqrt{33}}{4}\right] \cup \left[\dfrac{13+\sqrt{33}}{4}, \infty\right) = \left(-\infty, \dfrac{11-\sqrt{33}}{4}\right] \cup \left[\dfrac{13+\sqrt{33}}{4}, \infty\right).
    $$

---

- **Exercise 7**
  Prove that $\forall\varepsilon>0, \exists\delta>0$, such that $\forall x, 0<\vert x+3\vert <\delta\implies \vert 2x+6\vert<\varepsilon$. 

  - **Proof 7.1**
    Suppose $\varepsilon>0$ and let $\delta:=\dfrac\varepsilon 2$. Suppose $0<\vert x+3\vert <\delta$. Then we have:
    $$
    \vert 2x+6\vert =2\vert x+3\vert<2\delta=2\left(\dfrac\varepsilon 2\right)=\varepsilon.
    $$
    Therefore, the implication holds.

---

- **Exercise 8**
  Prove that $\forall\varepsilon>0, \exists\delta>0$, such that $\forall x, 0<\vert x-2\vert <\delta\implies\left\vert x^3-8\right\vert<\varepsilon$. 

  - **Proof 8.1**
    Suppose $\varepsilon>0$ and let $\delta:=\min\left\{1, \dfrac\varepsilon{19}\right\}$. Suppose $0<\vert x-2\vert <\delta$.  
    Since $\delta \leqslant 1$, we have $\vert x-2\vert < 1$, which implies:
    $$
    -1 < x-2 < 1 \implies 1 < x < 3.
    $$
    We factor the expression $\left\vert x^3-8\right\vert$ as $\vert x-2\vert \cdot \left\vert x^2+2x+4\right\vert$. To bound the term $\left\vert x^2+2x+4\right\vert$, we apply the triangle inequality given $1 < x < 3$:
    $$
    \left\vert x^2+2x+4\right\vert \leqslant \vert x\vert^2 + 2\vert x\vert + 4 < 3^2 + 2(3) + 4 = 19.
    $$
    Since we also have $\vert x-2\vert < \delta \leqslant \dfrac\varepsilon{19}$, it follows that:
    $$
    \left\vert x^3-8\right\vert = \vert x-2\vert \cdot \left\vert x^2+2x+4\right\vert < \left(\dfrac\varepsilon{19}\right) \cdot 19 = \varepsilon.
    $$
    Therefore, the statement is proved.

---

- **Exercise 9**
  Prove that $\forall\varepsilon>0, \exists\delta>0$, such that $\forall x, 0<\vert x-1\vert <\delta\implies\left\vert \dfrac{1}{x^2}-1\right\vert<\varepsilon$. 

  - **Proof 9.1**
    Suppose $\varepsilon>0$ and let $\delta:=\min\left\{\dfrac{1}{2}, \dfrac{\varepsilon}{10}\right\}$. Suppose $0<\vert x-1\vert <\delta$.  
    Since $\delta \leqslant \dfrac{1}{2}$, we have $\vert x-1\vert < \dfrac{1}{2}$, which implies:
    $$
    -\dfrac{1}{2} < x-1 < \dfrac{1}{2} \implies \dfrac{1}{2} < x < \dfrac{3}{2}.
    $$
    From $\dfrac{1}{2} < x$, we have $x^2 > \dfrac{1}{4} \implies \dfrac{1}{x^2} < 4$. Also, from $x < \dfrac{3}{2}$, we have $\vert x+1\vert \leqslant \vert x\vert + 1 < \dfrac{3}{2} + 1 = \dfrac{5}{2}$.  
    Now, we algebraicly simplify and factor the target expression
    $$
    \left\vert \dfrac{1}{x^2}-1\right\vert = \left\vert \dfrac{1-x^2}{x^2}\right\vert = \dfrac{\vert 1-x\vert \cdot \vert 1+x\vert}{x^2} = \vert x-1\vert \cdot \dfrac{\vert x+1\vert}{x^2}.
    $$
    Using our bounds $\dfrac{1}{x^2} < 4$ and $\vert x+1\vert < \dfrac{5}{2}$, we obtain that 
    $$
    \dfrac{\vert x+1\vert}{x^2} < 4 \cdot \dfrac{5}{2} = 10.
    $$
    Since we also have $\vert x-1\vert < \delta \leqslant \dfrac{\varepsilon}{10}$, it follows that:
    $$
    \left\vert \dfrac{1}{x^2}-1\right\vert = \vert x-1\vert \cdot \dfrac{\vert x+1\vert}{x^2} < \left(\dfrac{\varepsilon}{10}\right) \cdot 10 = \varepsilon.
    $$
    Therefore, the statement is proved.