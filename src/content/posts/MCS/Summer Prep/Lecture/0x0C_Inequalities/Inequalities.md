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

- **Definition 1**
  Let $a,b\in\mathbb R$ with $a<b$. We define the sets:
  $$
  \left(a,b\right)=\left\{x\in\mathbb R:a<x<b\right\}
  $$
  is called the **open interval** between $a$ and $b$.
  $$
  \left[a,b\right]=\left\{x\in\mathbb R:a\leqslant x\leqslant b\right\}
  $$
  is called the **closed interval** between $a$ and $b$.
  $$
  \left(a,b\right ]=\left\{x\in\mathbb R:a<x\leqslant b\right\}
  $$
  is called the **half-open interval** between $a$ and $b$.
  $$
  \left[a,b\right)=\left\{x\in\mathbb R:a\leqslant x<b\right\}
  $$
  is called the **half-open interval** between $a$ and $b$.
  $$
  \left(a,\infty\right)=\left\{x\in\mathbb R:x>a\right\}
  $$
  is the open interval of all numbers greater than $a$.
  $$
  \left(-\infty,b \right)=\left\{x\in\mathbb R:x<b\right\}
  $$
  is the open interval of all numbers smaller than $b$.
  $$
  \left[a,\infty\right)=\left\{x\in\mathbb R:x\geqslant a\right\}
  $$
  is the half-open interval of all numbers greater than or equal to $a$.
  $$
  \left(-\infty,b \right]=\left\{x\in\mathbb R:x\leqslant b\right\}
  $$
  is the half-open interval of all numbers smaller than or equal to $b$.
  We also have
  $$
  (-\infty,\infty)=\mathbb R.
  $$
  
  - **Remark 1.1**
    The symbols $-\infty$ and $\infty$ are not real numbers; they indicate that the corresponding interval has no endpoint.
  
  If $a=b$, then we define $[a,b]=\{a\}$ and $(a,b)=\varnothing$.
  
  - **Example 1.2**
    The conditions
    $$
    -2<x\leqslant 3,\quad x<1\lor x\geqslant 4,\quad 2\leqslant x\leqslant 5
    $$
    describe the sets
    $$
    (-2,3],\quad (-\infty,1)\cup [4,\infty),\quad [2,5].
    $$
  
  - **Example 1.3**
    Prove that for every $x\in\mathbb R$, if $x^3+x>0$ then $x>0$.
  
    - **Proof 1.3.1**
      If $x^3+x>0$, then $x\left(x^2+1\right)>0$. Since $x^2+1>0$, we have $\left(x^2+1\right)^{-1}>0$. Hence
      $$
      \begin{aligned}
      x\left(x^2+1\right)\cdot \left(x^2+1\right)^{-1} &> 0\cdot \left(x^2+1\right)^{-1} \\
      x &> 0.
      \end{aligned}
      $$
  
  - **Example 1.4**
    Solve the inequality
    $$
    \dfrac{x+2}{x+4} > \dfrac{x-3}{2x-1}.
    $$
  
    - **Solution 1.4.1**
      $$
      \begin{aligned}
      \dfrac{x+2}{x+4} > \dfrac{x-3}{2x-1} &\iff \dfrac{x+2}{x+4} - \dfrac{x-3}{2x-1} >0 \\
      &\iff \dfrac{(x+2)(2x-1)-(x-3)(x+4)}{(x+4)(2x-1)}>0 \\
      &\iff \dfrac{2x^2+3x-2-x^2-x+12}{(x+4)(2x-1)}>0 \\
      &\iff \dfrac{x^2+2x+10}{(x+4)(2x-1)}>0 \\
      &\iff \dfrac{\left(x+1\right)^2+9}{(x+4)(2x-1)}>0.
      \end{aligned}
      $$
      Since $\left(x+1\right)^2+9>0$, the sign of $\dfrac{\left(x+1\right)^2+9}{(x+4)(2x-1)}$ depends on the sign of $(x+4)(2x-1)$. Consider the points where the factors are zero, $-4$ and $\frac 12$, which divide the set of real numbers into three intervals, that is, $(-\infty, -4), (-4, \frac 12), (\frac 12, \infty)$. Then we have:
      $$
      \begin{array}{c|c|c|c|}
      & x+4 & 2x-1 & (x+4)(2x-1) \\
      x<-4 & - & - & + \\
      -4<x<\frac 12 & + & - & - \\
      x>\frac 12 & + & + & +
      \end{array}
      $$
      Therefore, the solution is $\left(-\infty,-4\right)\cup\left(\frac 12,\infty\right)$.
  
  - **Theorem 1.5**
    If $a\in\mathbb R$ such that $0\leqslant a<\varepsilon$ for every $\varepsilon>0$, then $a=0$.
  
    - **Proof 1.5.1**
      If $a>0$, then let $\varepsilon=\frac a2>0$. By the hypothesis, we have that 
      $$
      0 \leqslant a < \frac a2.
      $$
      But $a>\frac a2$ since $a>0$, which is a contradiction. Therefore, $a=0$.
  
  - **Notation 1.6**
    If $a\in\mathbb R$ with $a\neq 0$, $a^{-1}=\frac 1a$.
  
  - **Theorem 1.7**
    Let $a,b\in\mathbb R$.
  
    1. If $a>0$, then $a^{-1}>0$.
    2. If $0<a<b$, then $a^{-1}>b^{-1}$.
  
    - **Proof 1.7.1**
  
      1. Suppose that $a>0$ and $a^{-1}<0$, then
         $$
         1=aa^{-1}<0,
         $$
         which is a contradiction. Therefore, $a^{-1}>0$.
  
      2. Suppose that $0<a<b$. Then by $\text{Theorem 1.7(1)}$, we have that $a^{-1}>0$ and $b^{-1}>0$. Hence
         $$
         \begin{aligned}
         a &< b \\
         a \cdot a^{-1} &< b \cdot a^{-1} \\
         1 &< ba^{-1} \\
         b^{-1} \cdot 1 &< b^{-1} \cdot ba^{-1} \\
         b^{-1} &< a^{-1}.
         \end{aligned}
         $$

---

- **Definition 2**
  The **absolute value** of $a\in\mathbb R$ is defined by
  $$
  \vert a\vert=\begin{cases}
  a\quad &(a\geqslant 0) \\
  -a & (a<0)
  \end{cases}.
  $$

  - **Proposition 2.1**
    Let $a\in\mathbb R$, then:

    1. $\vert a\vert \geqslant 0$.
    2. $-\vert a\vert\leqslant a\leqslant \vert a\vert$.
    3. $\vert a\vert=\sqrt{a^2}$.
    4. $\vert ab\vert=\vert a\vert\vert b\vert$.
    5. $\vert -a\vert=\vert a\vert$.

    - **Proof 2.1.1**

      1. If $a\geqslant 0$, then $\vert a\vert=a\geqslant 0$. If $a<0$, then $\vert a\vert=-a>0$.

      2. If $a\geqslant 0$, then $\vert a\vert=a$ and thus
         $$
         -\vert a\vert =-a\leqslant 0 \leqslant a=\vert a\vert.
         $$
         If $a<0$, then $\vert a\vert=-a$ and thus
         $$
         -\vert a\vert = a \leqslant 0 \leqslant -a = \vert a \vert,
         $$
         since $-a>0>a$. Therefore, $-\vert a\vert\leqslant a\leqslant \vert a\vert$ holds for all cases.

      3. Since $\sqrt{a^2}$ is the unique nonnegative real number such that 
         $$
         \left(\sqrt{a^2}\right)^2=a^2,
         $$
         we have that $\sqrt{a^2}=\vert a\vert$ or $\sqrt{a^2}=-\vert a\vert$. But by definition, $\sqrt{a^2}$ is a nonnegative real number, thus $\sqrt{a^2}=\vert a\vert$.

      4. By the properties of exponents and the square root of positive real numbers, we have:
         $$
         \begin{aligned}
         \vert ab\vert &= \sqrt{(ab)^2} \\
         &= \sqrt{a^2b^2} \\
         &= \sqrt{a^2}\sqrt{b^2} \\
         &= \vert a\vert\vert b\vert.
         \end{aligned}
         $$

      5. Since $(-a)^2 = a^2$, by Property 3 we have:
         $$
         |-a| = \sqrt{(-a)^2} = \sqrt{a^2} = |a|.
         $$
    
  - **Remark 2.2**
    $\left\vert a\right\vert^2=\left\vert a^2\right\vert=a^2$ since $a^2\geqslant 0$.
  
  - **Proposition 2.3**
    Let $a,b\in\mathbb R$. Prove that:
  
    1. If $c\geqslant 0$, then $\vert a\vert \leqslant c\iff-c\leqslant a\leqslant c$.
    2. If $c\geqslant 0$, then $\vert a\vert\geqslant c$ if and only if $a\leqslant -c\lor a\geqslant c$.
  
    - **Proof 2.3.1**
  
      1. ($\Longrightarrow$) Suppose that $\vert a\vert \leqslant c$, then $-c\leqslant -\vert a\vert$. Together with Property 2, we have that
         $$
         -c\leqslant  -\vert a\vert\leqslant a\leqslant \vert a\vert\leqslant c,
         $$
         that is, $-c\leqslant a\leqslant c$.
  
         ($\Longleftarrow$) Suppose that $-c\leqslant a\leqslant c$. If $a\geqslant 0$, then $\vert a\vert=a$ and thus $\vert a\vert = a \leqslant c$. If $a<0$, then $\vert a\vert=-a$. Since $-c \leqslant a \implies -a \leqslant c$, we have $\vert a\vert = -a \leqslant c$. Thus, in both cases, $\vert a\vert \leqslant c$.
  
      2. ($\Longrightarrow$) Suppose that $\vert a\vert\geqslant c$. If $a\geqslant 0$, then $a=\vert a\vert\geqslant c$. If $a<0$, then $-a=\vert a\vert \geqslant c$, that is, $a\leqslant -c$.
  
         ($\Longleftarrow$) Suppose that $a\leqslant -c\lor a\geqslant c$. If $a\leqslant -c$, then $-a\geqslant c \geqslant 0$ and thus $\vert a\vert=-a\geqslant c$. If $a\geqslant c \geqslant 0$, then $\vert a\vert = a\geqslant c$.
  
  - **Example 2.4**
    Solve $\vert 5x+2\vert\geqslant 4$.
  
    - **Solution 2.4.1**
      $$
      \begin{aligned}
      \vert 5x+2\vert\geqslant 4 &\iff 5x+2\leqslant -4\lor 5x+2\geqslant 4 \\
      &\iff 5x\leqslant -6\lor 5x\geqslant 2 \\
      &\iff x\leqslant -\dfrac 65\lor x\geqslant \dfrac 25.
      \end{aligned}
      $$
      Therefore, the solution is the set $(-\infty,-\frac 65]\cup[\frac 25,\infty)$.
    
  - **Theorem 2.5 (Triangle inequality)**
    For all $a,b\in\mathbb R$
    $$
    \vert a+b\vert\leqslant\vert a\vert +\vert b\vert.
    $$
  
    - **Proof 2.5.1**
      Since $ab\leqslant \vert ab\vert=\vert a\vert\vert b\vert$ then
      $$
      \begin{aligned}
      
      \vert a+b\vert ^2 &= \left\vert(a+b)^2\right\vert \\
      &= (a+b)^2 \\
      &= a^2+2ab +b^2 \\
      &\leqslant \vert a\vert ^2+2\vert a\vert\vert b\vert +\vert b\vert ^2 \\
      &=\left(\vert a\vert +\vert b\vert\right)^2
      
      \end{aligned}
      $$
      Hence $\vert a+b\vert\leqslant\vert a\vert +\vert b\vert$.