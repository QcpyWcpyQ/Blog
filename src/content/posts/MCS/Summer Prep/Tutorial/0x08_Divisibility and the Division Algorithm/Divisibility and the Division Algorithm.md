---
title: "Divisibility and the Division Algorithm"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Divisibility and the Division Algorithm

- **Exercise 1**
  Let $d\in\mathbb N$ and suppose that the division of $n\in\mathbb Z$ by $d$ gives quotient $q$ and remainder $r$,
  $$
  n=dq+r\quad\text{ with }\quad 0\leqslant r<d.
  $$
  Determine, in terms of $p,q$ and $k$, the quotient and the remainder obtained when $n+kd$ is divided by $d$.

  We need
  $$
  n+kd=(\quad)d+?\quad \text{with }\quad 0\leqslant r<d.
  $$

  - **Solution 1.1**
    $$
    n+kd=dq+r+kd=d(q+k)+r.
    $$
    Then the quotient is $(q+k)$ and the remainder is $r$.

---

- **Exercise 2**
  Let $a_1,a_2,\cdots,a_n\in\mathbb N$ that satisfy $a_1\mid a_2, a_2\mid a_3,\cdots, a_{n-1}\mid a_n$. Suppose that $a_1<a_2<\cdots<a_{n-1}<a_n$.
  Prove that $\forall n\in\mathbb N, a_n\geqslant 2^{n-1}a_1$.

  - **Proof 2.1**
    What happens when $n=1$: $a_1\geqslant 2^{1-1}a_1$.
    What happens when $n=2$: $\exists k\in\mathbb N, a_2=ka_1$. And $k\geqslant 2$ since $a_1<a_2$. Then $a_2\geqslant 2^{2-1}a_1$.

    What happens when $n=3$: $\exists k\in\mathbb N, a_3=ka_2$. And $k\geqslant 2$ since $a_2<a_3$. Then $a_3\geqslant 2a_2\geqslant 2\cdot 2^{2-1}a_1=2^2a_1\implies a_3\geqslant 2^{3-1}a_1$. From this, we can prove the statement by induction.

    1. Base step
       We already proved that the result is true for $n=1$. 

    2. Inductive step
       Suppose that the result is true for $n$, that is,
       $$
       a_n\geqslant 2^{n-1}a_1.
       $$
       Now consider $a_{n+1}$. We have $a_n\mid a_{n+1}$ and $a_n<a_{n+1}$. By definition, $\exists k\in\mathbb N$ and $k\geqslant 2$ such that $a_{n+1}=ka_n$. Then we have
       $$
       a_{n+1}\geqslant 2a_n\geqslant 2\cdot\left(2^{n-1}a_1\right)=2^na_1.
       $$
       Then the result is true for $n+1$ and therefore
       $$
       a_n\geqslant 2^{n-1}a_1
       $$
       is true for every $n\in\mathbb N$.

---

- **Exercise 3**
  Determine all integers $d$ such that $d\mid 84$ and $d\mid 126$.

  - **Solution 3.1**
    We want to prove that the set of all integers $d$ such that $d\mid 84$ and $d\mid 126$ is exactly $\text{Div}(42)$.
    If $d$ is one of those that we want to find, i.e., $d\mid 84\land d\mid 126$, then $d$ divides any integer combination of them. As $42 = 126 - 84$ is an integer combination of $84$ and $126$, then $d\mid 42$.

    Conversely, suppose $k\in\text{Div}(42)$, then
    $$
    \begin{aligned}
    &k\mid 42\land 42\mid 84\implies k\mid 84, \\
    &k\mid 42\land 42\mid 126\implies k\mid 126.
    \end{aligned}
    $$
    Therefore, the required integers are exactly the elements of $\text{Div}(42)$.

---

- **Exercise 4**
  Let $d,e\in\mathbb N$. First, divide $n\in\mathbb Z$ by $d$, that is, $n=dq+r, 0\leqslant r<d$. Next, divide $q$ by $e$, that is, $q=es+t, 0\leqslant t<e$.
  Prove that when $n$ is divided directly by $de$, the quotient is $s$ and the remainder is $dt+r$.

  - **Proof 4.1**
    $$
    \begin{aligned}
    n&=dq+r\\
    &= d(es+t)+r \\
    &= des+dt+r \\
    &=(de)s+(dt+r).
    \end{aligned}
    $$
    Then we want to prove $de>dt+r \geqslant 0$. Since $t \leqslant e-1$, we have:
    $$
    dt+r < d(e-1) + d = de.
    $$
    Also, since $d \in \mathbb N$, $t \geqslant 0$, and $r \geqslant 0$, we have $dt+r \geqslant 0$. Thus, $0 \leqslant dt+r < de$, satisfying the remainder condition.

---

- **Exercise 5**
  Let $a,b\in\mathbb Z$. Suppose $a\mid b\land a\mid(b+1)$. Prove that $a=1\lor a=-1$.

  - **Proof 5.1**
    Suppose $a\mid b\land a\mid(b+1)$. Then $a$ divides any integer combination of $b$ and $b+1$. Since
    $$
    \begin{aligned}
    1=(1)(b+1)+(-1)b &\implies a\mid 1 \\
    &\implies \exists k\in\mathbb Z, 1=a\cdot k \\
    &\implies a,k\in\left\{1,-1\right\} \\
    &\implies a=1\lor a=-1.
    \end{aligned}
    $$

---

- **Exercise 6**
  For $a,b\in\mathbb Z$, prove that $\text{Div}(a)=\text{Div}(b)\iff a=b\lor a=-b$.

  - **Proof 6.1**
    ($\Longrightarrow$) Suppose $\text{Div}(a)=\text{Div}(b)$.
    As $a\in \text{Div}(a)\implies a\in \text{Div}(b)\implies a\mid b\implies \exists k\in\mathbb Z, b=ak$.
    As $b\in \text{Div}(b)\implies b\in \text{Div}(a)\implies b\mid a\implies \exists q\in\mathbb Z, a=bq$.
    Then $a=bq=akq$. 

    If $a\neq 0$, then $kq=1\implies k=1\lor k=-1\implies b=a\lor b=-a$.

    If $a=0$, then $\text{Div}(0)=\mathbb Z=\text{Div}(b)\implies 0\in\mathbb Z \land 0\mid b\implies b=0$. Thus $b = a$.

    ($\Longleftarrow$) Suppose $a=b\lor a=-b$.
    If $a=b$, then $\text{Div}(a)=\text{Div}(b)$.

    If $a=-b$, suppose $d\in\text{Div}(a)\implies \exists k\in\mathbb Z, a=dk$. Then $b=-a=-dk=d(-k)$ for some $-k\in\mathbb Z$. Then $d\mid b\implies d\in \text{Div}(b)\implies \text{Div}(a)\subseteq \text{Div}(b)$. In a similar way, we can prove that \(\text{Div}(b)\subseteq \text{Div}(a)\). Hence $\text{Div}(a)=\text{Div}(b)$.

---

- **Exercise 7**
  Find all integers $d\neq 0$ for which the remainder obtained when $47$ is divided by $d$ is $5$.
  For every possible value of $d$, determine the corresponding quotient.

  - **Solution 7.1**
    By the definition of the division algorithm, we have:
    $$
    47 = dq + 5 \quad \text{with} \quad 5 < |d|.
    $$
    This implies $dq = 42$, which means $d \in \text{Div}(42)$ and $|d| > 5$.
    The set of all divisors of $42$ is $\text{Div}(42)=\left\{\pm1,\pm2,\pm3,\pm6,\pm7,\pm14,\pm21,\pm42\right\}$. 
    Filtering for $|d| > 5$, we find the possible values for $d$:
    $$
    \text{Ans} = \left\{\pm 6, \pm 7, \pm 14, \pm 21, \pm 42\right\}.
    $$
    The corresponding quotients $q = \dfrac{42}{d}$ for each possible value of $d$ are given below:
    * If $d = 6$, then $q = 7$.
    * If $d = -6$, then $q = -7$.
    * If $d = 7$, then $q = 6$.
    * If $d = -7$, then $q = -6$.
    * If $d = 14$, then $q = 3$.
    * If $d = -14$, then $q = -3$.
    * If $d = 21$, then $q = 2$.
    * If $d = -21$, then $q = -2$.
    * If $d = 42$, then $q = 1$.
    * If $d = -42$, then $q = -1$.

---

- **Exercise 8**
  Prove that $\forall n\in\mathbb N, (a-b)\mid\left(a^n-b^n\right)$.

  - **Proof 8.1**
    By induction.

    1. Base step
       The result is true for $n=1$ because $(a-b)\mid\left(a^1-b^1\right)$.

    2. Inductive step
       Suppose that the result is true for $n$, that is, 
       $$
       (a-b)\mid\left(a^n-b^n\right).
       $$
       By definition, $\exists k\in\mathbb Z, k(a-b)=\left(a^n-b^n\right)$. We want to prove that it is true for $n+1$. We have
       $$
       \begin{aligned}
       a^{n+1}-b^{n+1}&=a\cdot a^n-b\cdot b^n \\
       &= a\cdot a^n-(b-a+a)\cdot b^n \\
       &= a\cdot\left(a^n-b^n\right)+(a-b)\cdot b^n \\
       &= a\cdot(k(a-b))+(a-b)\cdot b^n \\
       &= (a-b)\left(ka+b^n\right).
       \end{aligned}
       $$
       Since $ka+b^n\in\mathbb Z$, $(a-b)\mid\left(a^{n+1}-b^{n+1}\right)$. So the result is true for $n+1$ and therefore the statement is true.
