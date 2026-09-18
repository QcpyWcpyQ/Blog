---
title: "Arithmetic and Order"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Arithmetic and Order

- **Exercise 1 (Additive Cancellation)**
  Let $a,b,c\in\mathbb Z$. Prove that $a+b=a+c\implies b=c$.

  - **Proof 1.1**
    Suppose $a,b,c\in\mathbb Z,a+b=a+c$. Consider the additive inverse of $-a$ of a.
    $$
    \begin{aligned}
    
    -a+(a+b)&=-a+(a+c) \\
    (-a+a)+b&=(-a+a)+c \\
    0+b&=0+c \\
    b&=c.
    
    \end{aligned}
    $$

---

- **Exercise 2 (If adding something changes nothing)**
  Suppose $a,b\in\mathbb Z$ and $a+b=a$. Prove that $b=0$.

  - **Proof 2.1**
    Suppose $a,b\in\mathbb Z$ and $a+b=a$. By propoties,
    $$
    \begin{aligned}
    
    a+0&=a \\
    a+b&=a+0 \\
    b&=0.
    
    \end{aligned}
    $$

---

- **Exercise 3**
  Suppose $a,b\in\mathbb Z$ and $a+b=0$. Prove that $b=-a$.

  - **Proof 3.1**
    Suppose $a,b\in\mathbb Z$ and $a+b=0$. By propoties, 
    $$
    \begin{aligned}
    a+(-a)&=0\\
    a+b&=a+(-a)\\
    b&=-a.
    \end{aligned}
    $$

---

- **Exercise 4**
  Suppose $a,b,x,y\in\mathbb Z$, $a+x=b\land a+y=b$. Prove $x=y$.

  - **Prove 4.1**
    Suppose $a,b,x,y\in\mathbb Z$, $a+x=b$, $a+y=b$. Then $a+x=a+y$. By cancellation law $x=y$.

---

- **Exercise 5**
  Suppose $e\in\mathbb Z$ has the property that $\forall a\in\mathbb Z,a+e=a$. Prove that $e=0$.
  - **Proof 5.1**
    Suppose $e,a\in\mathbb Z$, $a+e=a=a+0\implies e=0$.

---

- **Exercise 6**
  Suppose $a,b,c\in\mathbb Z,a+b=0\land a+c=0$. Prove that $b=c$.
  - **Proof 6.1**
    Suppose $a,b,c\in\mathbb Z,a+b=0\land a+c=0$. Then, $a+c=a+b$. By cancellation law, c=b.

---

- **Exercise 7**
  Prove that $-0=0$.
  - **Proof 7.1**
    $0+(-0)=0=0+0$. By cancellation law, $-0=0$.

---

- **Exercise 8 (Negating an inequality)**
  Suppose $a,b\in\mathbb Z,a<b\implies -b<-a$.
  
  - **Proof 8.1**
    Suppose $a,b\in\mathbb Z,a<b$. By definition, $a<b\iff a\leqslant b \land a\neq b$. Then
    $$
    \begin{aligned}
    
    a+(-a-b)&\leqslant b+(-a-b)\\
    (a+(-a))+(-b) &\leqslant (b+(-b)) +(-a) \\
    0+(-b) &\leqslant 0+(-a) \\
    -b&\leqslant -a
    
    \end{aligned}
    $$
    As $-a\neq -b\implies -b<-a$.

---

- **Exercise 9**
  Suppose $a,b\in\mathbb Z,c<0,a<b$ Prove that $ac>bc$.

  - **Proof 9.1**
    Suppose $a,b\in\mathbb Z,c<0,a<b$. By definition, $a<b\iff a\leqslant b\land a\neq b$. Then
    $$
    \begin{aligned}
    
    -c>0 &\implies (-c)a\leqslant (-c)b \\
    &\implies -ca\leqslant -cb \\
    &\implies -ca<-cb\quad(\text{as }a\neq b\implies ca\neq cb\implies -ca\neq -cb) \\
    &\implies ca>cb
    
    \end{aligned}
    $$

---

- **Exercise 10**
  Prove that $\forall n \in \mathbb Z, -|n| \leqslant n \leqslant |n|$.

  - **Proof 10.1**
    Let $n \in \mathbb Z$. We split the proof into two cases based on the definition of absolute value.

    1. **Case 1**: Suppose that $n \geqslant 0$.
       By definition, we have that $|n| = n$.
       Since $n \geqslant 0$, by Proposition we have $-n \leqslant 0$, which implies
       $$
       -n \leqslant n.
       $$
       Substituting $n = |n|$, we get $-|n| \leqslant n \leqslant |n|$.

    2. **Case 2**: Suppose that $n < 0$.
       By definition, we have that $|n| = -n$, which implies $-|n| = n$.
       Since $n < 0$ and $|n| > 0$, we have
       $$
       n < |n|.
       $$
       Substituting $n = -|n|$ into the left side, we get $-|n| = n \leqslant |n|$.

    Therefore, in both cases, the inequality $-|n| \leqslant n \leqslant |n|$ holds for every $n \in \mathbb Z$.

---

- **Exercise 11**
  Prove that $\forall n,a\in\mathbb Z,a\geqslant 0$, $\vert n\vert\leqslant a\iff -a\leqslant n\leqslant a$.

  - **Proof 11.1**
    Suppose $\forall n,a\in\mathbb Z,a\geqslant 0$.

    ($\Longrightarrow$) Suppose $\vert n\vert\leqslant a$. Then $-a\leqslant -\vert n\vert \leqslant n\leqslant \vert n\vert \leqslant a$.

    ($\Longleftarrow$) Suppose $n\geqslant 0\implies \vert n\vert =n\implies \vert n\vert \leqslant a$. 
             Suppose $n<0\implies \vert n\vert =-n\implies \vert n\vert \leqslant a$.

---

- **Exercise 12 (Triangle Inequality)**
  Prove that $\forall n, m \in \mathbb Z, |n + m| \leqslant |n| + |m|$.

  - **Proof 12.1**
    Let $n, m \in \mathbb Z$. By Exercise 10, we have the following inequalities for $n$ and $m$:
    $$
    -|n| \leqslant n \leqslant |n|,
    $$
    and
    $$
    -|m| \leqslant m \leqslant |m|.
    $$
    Adding these two inequalities together by Properties 2.1, we obtain
    $$
    -(|n| + |m|) \leqslant n + m \leqslant |n| + |m|.
    $$
    We now split the proof into two cases based on the sign of $n + m$.

    1. **Case 1**: Suppose that $n + m \geqslant 0$.
       By Definition 3, we have $|n + m| = n + m$.
       From the right side of the combined inequality, we directly get
       $$
       |n + m| \leqslant |n| + |m|.
       $$
       
    2. **Case 2**: Suppose that $n + m < 0$.
       By Definition 3, we have $|n + m| = -(n + m)$.
       From the left side of the combined inequality, we have $-(|n| + |m|) \leqslant n + m$.
       By Proposition 3.1(1), multiplying by $-1$ reverses the inequality direction, which gives
       $$
       -(n + m) \leqslant |n| + |m|.
       $$
       Substituting $|n + m| = -(n + m)$, we get $|n + m| \leqslant |n| + |m|$.
    
    Therefore, in both cases, the inequality |n + m| \leqslant |n| + |m| holds for all $n, m \in \mathbb Z$.
