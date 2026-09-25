---
title: "Arithmetic and Order of Real Numbers"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Arithmetic and Order of Real Numbers

- **Definition 1**  
  The set of **real numbers**, denoted $\mathbb R$, is a set that contains $\mathbb Q$. Its sum, product, and order extend the operations and order in $\mathbb Z$ and satisfy the following properties for all $x,y,z\in\mathbb R$

  1. $$
     (x+y)+z=x+(y+z).
     $$

  2. There exists a unique element $0\in\mathbb R$ such that
     $$
     x+0=x.
     $$

  3. For each $x\in\mathbb R$, there exists a unique $-x\in\mathbb R$ such that
     $$
     x+(-x)=0.
     $$

  4. $$
     x+y=y+x.
     $$

  5. $$
     (xy)z=x(yz).
     $$

  6. There exists a unique element $1\in\mathbb R$ such that
     $$
     x\cdot 1=x.
     $$

  7. For each $x\in\mathbb R$ with $x\neq 0$, there exists a unique element $x^{-1}\in\mathbb R$ such that
     $$
     x\cdot x^{-1}=1.
     $$

  8. $$
     xy=yx.
     $$

  9. $$
     x(y+z)=xy+xz.
     $$

  10. The relation $\leqslant$ is a total order in $\mathbb R$.

  11. If $x\leqslant y$, then $x+z\leqslant y+z$.

  12. If $x\leqslant y\land z\geqslant 0$, then $xz\leqslant yz$.

---

- **Definition 2**  
  The set of **irrational numbers** is the set of those real numbers that are not rational numbers, that is,
  $$
  \mathbb R\setminus \mathbb Q.
  $$

  - **Example 2.1**  
    $$
    \sqrt 2, \mathrm e, \pi.
    $$

  - **Proposition 2.2**  
    The number \(\sqrt 2\) is irrational.

    - **Proof 2.2.1**  
      Suppose that $\sqrt 2=\frac pq$ with $p\in\mathbb Z, q\in\mathbb N$ and $p, q$ are coprime. Then
      $$
      p^2=2q^2.
      $$
      Hence $2\mid p^2$, and since $2$ is a prime we have that $2\mid p$, that is, there exists $k\in\mathbb Z$ such that $p=2k$. So
      $$
      \begin{aligned}
      4k^2&=2q^2, \\
      2k^2&=q^2.
      \end{aligned}
      $$
      Then $2\mid q^2$, and since $2$ is a prime we have that $2\mid q$, which is a contradiction since $p, q$ are coprime.

  - **Proposition 2.3**  
    Let $a,b,c,d\in\mathbb R$, then

    1. If $a<b$ and $c<0$, then $ac>bc$.
    2. If $a<b$ and $c<d$, then $a+c<b+d$.
    3. If $a<b$, then $-a>-b$.
    4. If $a<0$ and $b<0$, then $ab>0$.

    - **Proof 2.3.1**  

      1. Since $-c>0$ and $b-a>0$, then
         $$
         ac-bc=(b-a)(-c)>0.
         $$
         And thus $ac>bc$.

      2. Since $b-a>0$ and $d-c>0$, then
         $$
         (b+d)-(a+c)=(b-a)+(d-c)>0.
         $$
         And thus $a+c<b+d$.

      3. By $\text{Proposition 2.3(1)}$ with $c=-1$.

      4. Since $-a>0$ and $-b>0$, then $ab=(-a)(-b)>0$.

  - **Proposition 2.4**  
    $a>0\iff \dfrac 1a>0$.

    - **Proof 2.4.1**  
      ($\Longrightarrow$) Suppose $a>0$. By the axiom of the multiplicative inverse, there exists $a^{-1}=\dfrac 1a$ such that $a\cdot \dfrac 1a=1$. Since $1>0$ and $a>0$, it follows from the properties of order and multiplication that $\dfrac 1a$ must be positive, as a positive number multiplied by a negative number would yield a negative result. Thus, $\dfrac 1a>0$.

      ($\Longleftarrow$) Suppose $a\in\mathbb R$ such that $\dfrac 1a>0$. Applying the forward implication ($\Longrightarrow$) to the positive real number $\dfrac 1a$, we have that its multiplicative inverse must also be positive, that is, $\left(\dfrac 1a\right)^{-1}>0$. Since $a \cdot \dfrac 1a = 1$, multiplying both sides by $\left(\dfrac 1a\right)^{-1}$ yields $a = \left(\dfrac 1a\right)^{-1}$. Therefore, we have $a>0$.


---

- **Definition 3**  
  Let $x \in \mathbb R$ and $n \in \mathbb N$, we define
  $$
  x^n = \underbrace{x \cdot x \cdots \cdot x}_{n \text{ times}}.
  $$
  If $x \neq 0$ we define $x^0 = 1$ and $x^{-n} = \left(x^{-1}\right)^n$.

  - **Theorem 3.1**  
    Let $x, y \in \mathbb R$ and $m, n \in \mathbb N$, then

    1. $x^{m+n} = x^m \cdot x^n$.
    2. $\left(x^m\right)^n = x^{mn}$.
    3. $(xy)^n = x^n y^n$.
    4. $\dfrac{x^m}{x^n} = x^{m-n}$ if $x \neq 0$.
    5. $\left(\dfrac{x}{y}\right)^n = \dfrac{x^n}{y^n}$ if $y \neq 0$.

    - **Proof 3.1.1**  

      1. Fix $m\in\mathbb N$ and use induction on $n$.
         For $n=1$ the result is true since $x^{m+1}=x^mx=x^mx^1$.
         Suppose that the result is true for $n$, that is
         $$
         x^{m+n}=x^mx^n.
         $$
         Hence
         $$
         \begin{aligned}
         x^{m+(n+1)}&=x^{(m+n)+1} \\
         &= x^{m+n}x \\
         &= \left(x^mx^n\right)x \\
         &= \left(x^m\right)\left(x^nx\right) \\
         &=x^mx^{n+1}.
         \end{aligned}
         $$
         Thus the result is true for $n+1$. So the result is true for every $n\in\mathbb N$.

      2. Fix $m\in \mathbb N$ and use induction on $n$.
         For $n=1 the result is true since $\left(x^m\right)^1=x^m=x^{m\cdot 1}$.
         Suppose that the result is true for $n$, that is
         $$
         \left(x^m\right)^n = x^{mn}.
         $$
         Hence
         $$
         \begin{aligned}
         \left(x^m\right)^{n+1} &= \left(x^m\right)^n\cdot x^m \\
         &= x^{mn}\cdot x^m \\
         &= x^{mn+m} \\
         &= x^{m(n+1)}.
         \end{aligned}
         $$
         Thus the result is true for $n+1$. So the result is true for every $n\in\mathbb N$.

      3. Induction on $n$.
         For $n=1$ the result is true since $(xy)^1=xy=x^1y^1$.
         Suppose that the result is true for $n$, that is
         $$
         (xy)^n = x^n y^n.
         $$
         Hence
         $$
         \begin{aligned}
         (xy)^{n+1} &= (xy)^n(xy) \\
         &= x^ny^n(xy) \\
         &= \left(x^nx\right)\left(y^ny\right) \\
         &= x^{n+1}y^{n+1}.
         \end{aligned}
         $$
         Therefore the result is true for $n+1$. So the result is true for every $n\in\mathbb N$.

      4. Fix $m\in\mathbb N$ and suppose $x\neq 0$. Use induction on $n$.
         For $n=1$ the result is true since $\dfrac{x^m}{x^1} = x^m x^{-1} = x^{m+(-1)} = x^{m-1}$ by Property 1.
         Suppose that the result is true for $n$, that is
         $$
         \dfrac{x^m}{x^n} = x^{m-n}.
         $$
         Hence
         $$
         \begin{aligned}
         \dfrac{x^m}{x^{n+1}} &= \dfrac{x^m}{x^n \cdot x} \\
         &= \dfrac{x^m}{x^n} \cdot x^{-1} \\
         &= x^{m-n} \cdot x^{-1} \\
         &= x^{(m-n)+(-1)} \\
         &= x^{m-(n+1)}.
         \end{aligned}
         $$
         Thus the result is true for $n+1$. So the result is true for every $n\in\mathbb N$.

      5. Suppose $y\neq 0$. Use induction on $n$.
         For $n=1$ the result is true since $\left(\dfrac{x}{y}\right)^1 = \dfrac{x}{y} = \dfrac{x^1}{y^1}$.
         Suppose that the result is true for $n$, that is
         $$
         \left(\dfrac{x}{y}\right)^n = \dfrac{x^n}{y^n}.
         $$
         Hence
         $$
         \begin{aligned}
         \left(\dfrac{x}{y}\right)^{n+1} &= \left(\dfrac{x}{y}\right)^n \cdot \left(\dfrac{x}{y}\right) \\
         &= \dfrac{x^n}{y^n} \cdot \left(\dfrac{x}{y}\right) \\
         &= \dfrac{x^n \cdot x}{y^n \cdot y} \\
         &= \dfrac{x^{n+1}}{y^{n+1}}.
         \end{aligned}
         $$
         Thus the result is true for $n+1$. So the result is true for every $n\in\mathbb N$.

  - **Proposition 3.2**  
    If $n\in\mathbb N$ and $0\leqslant x<y$, then $x^n<y^n$. In particular, if $x,y\geqslant 0$ and $x^n=y^n$, then $x=y$.

    - **Proof 3.2.1**  
      Use induction on $n$.
      If $n=1$, then the result is true since $x^1<y^1$.
      Suppose that the result is true for $n$, that is,
      $$
      x^n<y^n.
      $$
      Hence,
      $$
      x^{n+1}=x^n x \leqslant x^n y < y^n y = y^{n+1}.
      $$
      Thus the result is true for $n+1$. So the result is true for every $n\in\mathbb N$.

      Suppose that $x,y\geqslant 0$, $x^n=y^n$ and $x\neq y$.
      If $x<y$, then $x^n<y^n$, which is a contradiction.
      If $x>y$, then $x^n>y^n$, which is a contradiction.
      Therefore $x=y$.

---

- **Definition 4**  
  If $x\geqslant 0$ and $n\in\mathbb N$, the **n-th root** of $x$, denoted $\sqrt[n]{x}$, is the unique nonnegative number $y$ such that $y^n=x$.

  - **Example 4.1**  
    The equation $y^2=9$ has two solutions: $-3$ and $3$. But $\sqrt 9=3$ denotes only the nonnegative one.

  - **Remark 4.2**  
    A negative real number has no even root, whereas an odd root is defined by
    $$
    \sqrt[n]{x}=-\sqrt[n]{-x}
    $$
    if $x<0$ and $n$ is odd.

  If $x^2<y^2$, must $x<y$? No. For example, $(-1)^2<(-2)^2$ but $-1>-2$. The implication is true when both numbers are nonnegative.

  If $x,y\geqslant 0$ with $x^n<y^n$, then $x<y$. By $\text{Proposition 3.2}$, since if $x=y$, then $x^n=y^n$, and if $x>y$, then $x^n>y^n$, which is a contradiction.
