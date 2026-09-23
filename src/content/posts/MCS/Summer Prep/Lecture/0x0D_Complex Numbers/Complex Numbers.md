---
title: "Complex Numbers"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Complex Numbers

- **Definition 1**  
  The set of **complex numbers**, denoted by $\mathbb C$, is the set of all ordered pairs of real numbers with the sum and product defined by
  $$
  \begin{aligned}
  (a,b)+(c,d)&=(a+c,b+d) \\
  (a,b)\cdot (c,d)&=(ac-bd,ad+bc).
  \end{aligned}
  $$
  That is, $\mathbb C=\left(\mathbb R\times \mathbb R,+,\cdot\right)$.
  Since the function $\iota\colon \mathbb R\to\mathbb C$ defined by $\iota(a)=(a,0)$ is a bijection, we can identify the real number $a$ with the pair $(a,0)$. Now, if we consider $1=(1,0)$ and $\operatorname i=(0,1)$, we have that
  $$
  \operatorname i^2=(0,1)(0,1)=(-1,0)=-1,
  $$
  and every complex number can be written as
  $$
  (a,b)=a(1,0)+b(0,1)=a+b\operatorname i.
  $$
  Hence, with this notation we have
  $$
  \begin{aligned}
  (a+b\operatorname i)+(c+d\operatorname i) &= (a+c)+(b+d)\operatorname i \\
  (a+b\operatorname i)\cdot(c+d\operatorname i) &= (ac-bd)+(ad+bc)\operatorname i
  \end{aligned}
  $$
  and
  $$
  \mathbb C=\left\{a+b\operatorname i:a,b\in\mathbb R\right\}.
  $$

  - **Properties 1.1**  
    The arithmetic properties of $\mathbb C$ are as follows. Suppose $z,z_1,z_2,z_3\in\mathbb C$

    1. $$
       \left(z_1+z_2\right)+z_3=z_1+\left(z_2+z_3\right).
       $$

    2. $$
       z+0=z.
       $$

    3. For each $z\in\mathbb C$, there exists a unique $-z\in\mathbb C$ such that $z+(-z)=0$.

    4. $$
       z_1+z_2=z_2+z_1.
       $$

    5. $$
       \left(z_1z_2\right)z_3=z_1\left(z_2z_3\right).
       $$

    6. $$
       z\cdot 1=z.
       $$

    7. For each $z\in\mathbb C$ with $z\neq 0$, there exists a unique $z^{-1}\in\mathbb C$ such that $z\cdot z^{-1}=1$.

    8. $$
       z_1z_2=z_2z_1.
       $$

    9. $$
       z_1\left(z_2+z_3\right)=z_1z_2+z_1z_3.
       $$

---

- **Definition 2**  
  Let $z=a+b\operatorname i$. The real number $a$ is called the **real part** of $z$ and is denoted $\operatorname{Re}(z)=a$. The real number $b$ is called the **imaginary part** of $z$ and is denoted $\operatorname{Im}(z)=b$.

---

- **Definition 3**  
  Let $z=a+bi$. The **conjugate** of $z$, denoted $\overline z$, is defined by $\overline z=a-b\operatorname i$.
  The **modulus** of $z$, denoted $\vert z\vert$, is defined by $\vert z\vert=\sqrt{a^2+b^2}$.

  - **Remark 3.1**  
    $\vert z\vert\in\mathbb R$ and $\vert z\vert\geqslant 0$.

  - **Theorem 3.2**  

    1. $\vert z\vert ^2 = z\overline z$.
    2. If $z\neq 0$, then $z^{-1}=\dfrac{\overline z}{\vert z\vert ^2}$.
    3. $\Re(z)=\dfrac 12\left(z+\overline z\right)$.
    4. $\Im(z)=\dfrac 1{2\operatorname i}\left(z-\overline z\right)$.
    5. $\overline{z+w}=\overline z+\overline w$.
    6. $\overline{zw}=\overline z\overline w$.
    7. $\vert \overline z\vert=\vert z\vert$.
    8. $\vert zw\vert=\vert z\vert\vert w\vert$.

    - **Proof 3.2.1**  

      1. If $z=a+b\operatorname i$, then
         $$
         z\overline z=(a+b\operatorname i)(a-b\operatorname i)=\left(a^2+b^2\right)+(-ab+ab)\operatorname i=a^2+b^2=\vert z\vert ^2.
         $$

      2. If $z\neq 0$, we have by $\text{Theorem 3.2(1)}$
         $$
         z^{-1}=\dfrac 1z=\dfrac{\overline z}{z\overline z}=\dfrac{\overline z}{\vert z\vert ^2}.
         $$

      3. If $z=a+b\operatorname i$, then
         $$
         \dfrac 12\left(z+\overline z\right)=\dfrac 12\left(a+b\operatorname i+a-b\operatorname i\right)=\dfrac 12(2a)=a=\Re(z).
         $$

      4. If $z=a+b\operatorname i$, then
         $$
         \dfrac 1{2\operatorname i}\left(z-\overline z\right)=\dfrac 12\left(a+b\operatorname i-a+b\operatorname i\right)=\dfrac{1}{2\operatorname i}(2b\operatorname i)=b=\Im (z).
         $$

      5. If $z=a+b\operatorname i$, $w=c+d\operatorname i$, then
         $$
         \overline z+\overline w=(a-b\operatorname i)+(c-d\operatorname i)=(a+c)-(b+d)\operatorname i=\overline{(a+c)+(b+d)\operatorname i}=\overline{z+w}.
         $$

      6. If $z=a+b\operatorname i$, $w=c+d\operatorname i$, then
         $$
         \begin{aligned}
         \overline z\overline w &= (a-b\operatorname i)(c-d\operatorname i) \\
         &= (ac-bd)+(-1)(-ad-bc)\operatorname i \quad \text{since } \operatorname i^2 = -1 \\
         &= (ac-bd)-(ad+bc)\operatorname i \\
         &= \overline{(ac-bd)+(ad+bc)\operatorname i} \\
         &= \overline{zw}.
         \end{aligned}
         $$

      7. If $z=a+b\operatorname i$, then $\overline z = a-b\operatorname i$. By the definition of modulus, we have
         $$
         |\overline z| = \sqrt{a^2 + (-b)^2} = \sqrt{a^2+b^2} = |z|.
         $$

      8. If $z,w\in\mathbb C$, then we have
         $$
         \begin{aligned}
         \vert zw\vert^2&=zw\cdot \overline{zw} \\
         &= zw\cdot \overline z\cdot \overline w \quad \text{(by Theorem 3.2(6))} \\
         &= z\overline z\cdot w\overline w \\
         &= \vert z\vert ^2\vert w\vert^2.
         \end{aligned}
         $$
         Therefore, $\vert zw\vert=\vert z\vert\vert w\vert$.

  - **Example 3.3**  
    If $z=a+b\operatorname i$, find $\Re\left(\dfrac 1z\right)$ and $\Im\left(\overline z^2+z^2\right)$.

    - **Solution 3.3.1**  
      Since $\dfrac 1z=\dfrac{\overline z}{\vert z\vert ^2}=\dfrac{a-b\operatorname i}{a^2+b^2}=\dfrac{a}{a^2+b^2}-\dfrac{b}{a^2+b^2}\operatorname i$, then $\Re\left(\dfrac 1z\right)=\dfrac{a}{a^2+b^2}$.

      Now, as
      $$
      \begin{aligned}
      \overline z^2+z^2 &= \overline z^2+2z\overline z+z^2-2z\overline z \\
      &= \left(z+\overline z\right)^2-2\vert z\vert^2 \\
      &= \left(2\Re (z)\right)^2-2\vert z\vert^2 \\
      &= 4a^2-2\left(a^2+b^2\right) \\
      &= 2a^2-2b^2.
      \end{aligned}
      $$
      Therefore, $\Im\left(\overline z^2+z^2\right)=0$.

  - **Example 3.4**  
    If $z=a+b\operatorname i$, express $\Re(\operatorname iz)$ and $\Im((1+\operatorname i)z)$ in terms of $\Re(z)$ and $\Im (z)$.

    - **Solution 3.4.1**  
      Since $\operatorname iz=\operatorname i(a+b\operatorname i)=-b+a\operatorname i$, then $\Re(\operatorname iz)=-b=-\Im(z)$.
      Since $(1+\operatorname i)z=(1+\operatorname i)(a+b\operatorname i)=(a-b)+(a+b)\operatorname i$, then \(\Im((1+\operatorname i)z)=a+b=\Re(z)+\Im(z)\).

  - **Proposition 3.5 (Triangle inequality on $\mathbb C$)**  
    If $z,w\in\mathbb C$, then
    $$
    \vert z+w\vert\leqslant \vert z\vert +\vert w\vert.
    $$

    - **Proof 3.5.1**  
      $$
      \begin{aligned}
      \vert z+w\vert^2 &= (z+w)\overline{(z+w)} \\
      &= (z+w)\left(\overline z+\overline w\right) \\
      &= z\overline z+z\overline w+w\overline z+w\overline w \\
      &= \vert z\vert ^2+z\overline w+\overline{\overline w}z+\vert w\vert ^2 \\
      &= \vert z\vert ^2+2\Re\left(z\overline w\right)+\vert w\vert ^2 \\
      &\leqslant \vert z\vert ^2+2\left\vert z\overline w\right\vert+\vert w\vert ^2 \\
      &= \vert z\vert ^2+2\vert z\vert\vert w\vert+\vert w\vert ^2 \\
      &= \left(\vert z\vert + \vert w\vert\right)^2.
      \end{aligned}
      $$
      Therefore, $\vert z+w\vert\leqslant \vert z\vert +\vert w\vert$.

  Given $z\in\mathbb C$ with $z\neq 0$, $z=a+b\operatorname i=(a,b)$ has polar coordinates $\left(r,\theta\right)$ where
  $$
  a=r\cos\theta, \quad b=r\sin\theta \quad\left(0\leqslant \theta<2\pi\right).
  $$
  We have that
  $$
  \dfrac ba=\dfrac{r\sin\theta}{r\cos\theta}=\tan\theta\implies \theta=\tan^{-1}\left(\dfrac ba\right). \\
  a^2+b^2=r^2. \\
  r=\vert z\vert \geqslant 0. \\
  \cos \theta=\dfrac{a}{\sqrt{a^2+b^2}}, \quad \sin \theta=\dfrac{b}{\sqrt{a^2+b^2}}.
  $$
  Note that
  $$
  \begin{aligned}
  z &=\vert z\vert\cdot\dfrac{z}{\vert z\vert} \\
  &= r\left(\dfrac{a+b\operatorname i}{\sqrt{a^2+b^2}}\right) \\
  &= r\left(\dfrac{a}{\sqrt{a^2+b^2}}+\operatorname i\dfrac{b}{\sqrt{a^2+b^2}}\right) \\
  &= r(\cos\theta+\operatorname i\sin\theta).
  \end{aligned}
  $$

---

- **Definition 4**  
  If $z\in\mathbb C$ with $z\neq 0$, the expression
  $$
  z=r(\cos\theta+\operatorname i\sin\theta)\quad\left(\theta\in\mathbb R\right)
  $$
  is called the **polar representation** of $z$.

  - **Notation 4.1**  
    $\operatorname{cis}\theta=\cos\theta+\operatorname i\sin\theta$.

---

- **Definition 5**  
  A real number $\theta$ that satisfies $z=r\operatorname{cis}\theta$ is called an **argument** of $z$. The unique argument $\theta\in\left[0,2\pi\right)$ is called the **principal argument** of $z$ and is denoted $\operatorname{Arg}(z)$.

  - **Remark 5.1**  
    Since $\cos\left(\theta +2k\pi\right)=\cos \theta$ and $\sin\left(\theta +2k\pi\right)=\sin \theta$ for all $k\in\mathbb Z$, we have that every argument of $z$ has the form
    $$
    \operatorname{Arg}(z)+2k\pi.
    $$
    The argument of $0$ is undefined.

  - **Example 5.2**  
    If $z=\operatorname i$, then $\operatorname{Arg}(z)=\dfrac{\pi}{2}$ and
    $$
    z=\vert \operatorname i\vert\left(\cos\left(\dfrac\pi 2\right)+\operatorname i\sin\left(\dfrac \pi2\right)\right).
    $$

  - **Theorem 5.3**  
    Let $z,w\in\mathbb C$ with $z,w\neq 0$ with polar representations
    $$
    z=r\operatorname{cis}\theta, \quad w=s\operatorname{cis}\varphi.
    $$
    Then $zw$ has the polar representation
    $$
    zw=rs\operatorname{cis}\left(\theta+\varphi\right).
    $$
    And $\dfrac zw$ has the polar representation
    $$
    \dfrac zw=\dfrac rs\operatorname{cis}\left(\theta-\varphi\right).
    $$

    - **Proof 5.3.1**  
      For the product $zw$, by Definition 4 and the trigonometric addition formulas, we have
      $$
      \begin{aligned}
      zw &= (r\operatorname{cis}\theta)(s\operatorname{cis}\varphi) \\
      &= rs(\cos\theta+\operatorname i\sin\theta)(\cos\varphi+\operatorname i\sin\varphi) \\
      &= rs\left((\cos\theta\cos\varphi - \sin\theta\sin\varphi) + \operatorname i(\sin\theta\cos\varphi + \cos\theta\sin\varphi)\right) \\
      &= rs\left(\cos(\theta+\varphi) + \operatorname i\sin(\theta+\varphi)\right) \\
      &= rs\operatorname{cis}(\theta+\varphi).
      \end{aligned}
      $$
      For the quotient $\dfrac zw$, since $w \cdot w^{-1} = 1$, we first find the polar representation of $w^{-1} = \dfrac{\overline w}{|w|^2}$
      $$
      w^{-1} = \dfrac{s(\cos\varphi - \operatorname i\sin\varphi)}{s^2} = \dfrac{1}{s}\left(\cos(-\varphi) + \operatorname i\sin(-\varphi)\right) = \dfrac{1}{s}\operatorname{cis}(-\varphi).
      $$
      Applying the product rule proved above, we obtain
      $$
      \dfrac zw = z \cdot w^{-1} = (r\operatorname{cis}\theta) \cdot \left(\dfrac{1}{s}\operatorname{cis}(-\varphi)\right) = \dfrac rs \operatorname{cis}(\theta-\varphi).
      $$

  - **Corollary 5.4**  
    If $z_1,z_2,\cdots,z_n\in\mathbb C$ with $z_1,z_2,\cdots,z_n\neq 0$ and polar representations
    $$
    z_1=r_1\operatorname{cis}\theta_1, \quad z_2=r_2\operatorname{cis}\theta_2, \cdots, \quad z_n=r_n\operatorname{cis}\theta_n.
    $$
    Then $z_1z_2\cdots z_n$ has the polar representation
    $$
    z_1z_2\cdots z_n=r_1r_2\cdots r_n\operatorname{cis}\left(\theta_1+\theta_2+\cdots+\theta_n\right).
    $$

    - **Proof 5.4.1**  
      By induction on $n$.
      * **Base step**: For $n=1$, the statement is trivially true since $z_1 = r_1\operatorname{cis}\theta_1$.
      * **Inductive step**: Suppose that the result is true for $n$, that is, $z_1z_2\cdots z_n = r_1r_2\cdots r_n\operatorname{cis}\left(\theta_1+\theta_2+\cdots+\theta_n\right)$. For $n+1$, by Theorem 5.3, we have
        $$
        \begin{aligned}
        (z_1z_2\cdots z_n) \cdot z_{n+1} &= \left(r_1r_2\cdots r_n\operatorname{cis}(\theta_1+\cdots+\theta_n)\right) \cdot (r_{n+1}\operatorname{cis}\theta_{n+1}) \\
        &= (r_1r_2\cdots r_n \cdot r_{n+1})\operatorname{cis}\left((\theta_1+\cdots+\theta_n) + \theta_{n+1}\right) \\
        &= r_1r_2\cdots r_{n+1}\operatorname{cis}\left(\theta_1+\theta_2+\cdots+\theta_{n+1}\right).
        \end{aligned}
        $$
        Thus, the result is true for $n+1$. So the result is true for every $n\in\mathbb N$.

  - **Corollary 5.5 (De Moivre's formula)**  
    If $z\in\mathbb C$ with $z\neq 0$ and polar representation $z=r\operatorname{cis}\theta$, then $z^n$ has the polar representation
    $$
    z^n=r^n\operatorname{cis}(n\theta) \quad \left(n\in\mathbb Z\right).
    $$

    - **Proof 5.5.1**  
      We first prove the case for $n \in \mathbb N_0$ by induction on $n$.

      * **Base step**: If $n = 0$, then $z^0 = 1$ and $r^0\operatorname{cis}(0 \cdot \theta) = 1 \cdot (\cos 0 + \operatorname i\sin 0) = 1$. The result is true.
      * **Inductive step**: Suppose that the result is true for $n \in \mathbb N_0$, that is, $z^n = r^n\operatorname{cis}(n\theta)$. For $n+1$, by Definition 3 and Theorem 5.3, we have
        $$
        z^{n+1} = z^n \cdot z = \left(r^n\operatorname{cis}(n\theta)\right) \cdot (r\operatorname{cis}\theta) = (r^n \cdot r)\operatorname{cis}(n\theta + \theta) = r^{n+1}\operatorname{cis}((n+1)\theta).
        $$
        Thus, the formula holds for all $n \in \mathbb N_0$.

      Now, consider the case where $n$ is a negative integer, so $n = -m$ for some $m \in \mathbb N$. By Definition 3 and Theorem 5.3, we have
      $$
      z^n = z^{-m} = (z^{-1})^m = \left(\dfrac{1}{r}\operatorname{cis}(-\theta)\right)^m.
      $$
      Since $m \in \mathbb N$, applying the formula proved for natural numbers yields
      $$
      \left(\dfrac{1}{r}\operatorname{cis}(-\theta)\right)^m = \left(\dfrac{1}{r}\right)^m \operatorname{cis}(m(-\theta)) = r^{-m}\operatorname{cis}(-m\theta) = r^n\operatorname{cis}(n\theta).
      $$
      Therefore, De Moivre's formula holds for all $n \in \mathbb Z$.

  - **Example 5.6**  
    Since $\dfrac{\sqrt 3}{2}+\dfrac 12\operatorname i=\operatorname{cis}\left(\dfrac{\pi}{6}\right)$, then by De Moivre's formula we have that
    $$
    \begin{aligned}
    \left(\dfrac{\sqrt 3}{2}+\dfrac 12\operatorname i\right)^3 &= \operatorname{cis}\left(3 \cdot \dfrac \pi 6\right) \\
    &= \operatorname{cis}\left(\dfrac \pi 2\right) \\
    &= \cos \dfrac\pi 2+\operatorname i\sin\dfrac\pi 2 \\
    &=\operatorname i.
    \end{aligned}
    $$