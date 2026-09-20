---
title: "Truth Values"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Truth Values

The truth value of a mathematical statement is not determined in isolation, but always relative to a universe of discourse or context, in which the statement is interpreted. For example, consider the statement
$$
\forall x,y\exists z\left((x\neq y)\implies (x<z<y)\right).
$$
which may be read as

$$
\text{"For any two distinct numbers }x,y\text{, there exists a number }z\text{ strictly between them."}
$$

Note that if the statement is interpreted in the context of natural numbers, it is false because there is no natural number between $1$ and $2$. But if the statement is interpreted in the context of rational numbers, it is true because for any two rational numbers $x,y$, the number $z=\dfrac{x+y}{2}$ is a rational number between them.

---

- **Definition 1**  
  Let $P$ and $Q$ be mathematical statements interpreted in some context $u$, the truth value of $P\land Q$ in such a context is fully determined by the following truth table
  $$
  \begin{array}{c|c|c}  P&Q&P\land Q \\ \hline  1&1&1 \\ 1&0&0 \\ 0&1&0 \\ 0&0&0  \end{array}
  $$

- **Remark 1**  
  The truth table for conjunction can be understood in an even more compact way as follows

  - **Example 1.1**  
    If $\left\|P\right\|$ is the truth value of $P$ and $\left\|Q\right\|$ is the truth value of $Q$, then
    $$
    \left\|P\land Q\right\|=\min\left\{\left\|P\right\|,\left\|Q\right\|\right\}.
    $$

    This algebraic perspective is useful for replacing structural properties of logical connectives.

---

- **Definition 2**  
  Let $P$ and $Q$ be mathematical statements interpreted in some context $u$, the truth value of $P\lor Q$ in such a context is fully determined by the following truth table
  $$
  \begin{array}{c|c|c}  P&Q&P\lor Q \\ \hline  1&1&1 \\ 1&0&1 \\ 0&1&1 \\ 0&0&0  \end{array}
  $$

- **Remark 2**  
  The truth table for disjunction can be understood in an even more compact way as follows

  - **Example 2.1**  
    If $\left\|P\right\|$ is the truth value of $P$ and $\left\|Q\right\|$ is the truth value of $Q$, then
    $$
    \left\|P\lor Q\right\|=\max\left\{\left\|P\right\|,\left\|Q\right\|\right\}.
    $$

---

- **Definition 3**  
  Let $P$ and $Q$ be mathematical statements interpreted in some context $u$, the truth value of $P\implies Q$ in such a context is fully determined by the following truth table
  $$
  \begin{array}{c|c|c}  P&Q&P\implies Q \\ \hline  1&1&1 \\ 1&0&0 \\ 0&1&1 \\ 0&0&1  \end{array}
  $$

- **Remark 3**  
  In algebraic form, the truth table can be understood in an even more compact way as follows

  - **Example 3.1**  
    If $\left\|P\right\|$ is the truth value of $P$ and $\left\|Q\right\|$ is the truth value of $Q$, then
    $$
    \left\|P\implies Q\right\|=\begin{cases} \left\|Q\right\|\quad&\text{if } \left\|P\right\|=1 \\ 1 &\text{otherwise} \end{cases}.
    $$

    or in another form

    $$
    \left\|P\implies Q\right\|=\max\left\{1-\left\|P\right\|,\left\|Q\right\|\right\}.
    $$

---

- **Definition 4**  
  Let $P$ and $Q$ be mathematical statements interpreted in some context $u$, the truth value of $P\Leftrightarrow Q$ in such a context is fully determined by the following truth table
  $$
  \begin{array}{c|c|c}  P&Q&P\Leftrightarrow Q \\ \hline  1&1&1 \\ 1&0&0 \\ 0&1&0 \\ 0&0&1  \end{array}
  $$

- **Remark 4**  
  In algebraic form, the truth table can be understood in an even more compact way as follows

  - **Example 4.1**  
    If $\left\|P\right\|$ is the truth value of $P$ and $\left\|Q\right\|$ is the truth value of $Q$, then
    $$
    \left\|P\Leftrightarrow Q\right\|=\min\left(1-\left\|P\right\|+\left\|Q\right\|,1-\left\|Q\right\|+\left\|P\right\|\right).
    $$

---

- **Definition 5**  
  Let $P$ be a mathematical statement interpreted in some context $u$, the truth value of $\neg P$ in such a context is fully determined by the following truth table
  $$
  \begin{array}{c|c}  P&\neg P \\ \hline  1&0 \\ 0&1  \end{array}
  $$

- **Remark 5**  
  In algebraic form, the truth table can be understood in an even more compact way as follows

  - **Example 5.1**  
    If $\left\|P\right\|$ is the truth value of $P$, then
    $$
    \left\|\neg P\right\|=1-\left\|P\right\|.
    $$

---

We now turn to the question of how truth values are assigned to statements involving quantifiers.

- **Definition 6**  
  A universally quantified statement of the form $\forall xP(x)$ is true if and only if $P(x)$ is true for all possible values of $x$. Note that the universally quantified statement $\forall xP(x)$ is false if $P(x)$ is false for some value of $x$.  
  An existentially quantified statement of the form $\exists xP(x)$ is true if $P(x)$ is true for some value of $x$. Note that the existentially quantified statement $\exists xP(x)$ is false if $P(x)$ is false for all possible values of $x$.

- **Remark 6**  
  In algebraic form, the truth values of the qu/antifiers $\forall xP(x)$ and $\exists xP(x)$ in a context $u$ are

  - **Example 6.1**  
    $$
    \left\|\forall xP(x)\right\|=\min_{x \text{ takes a value in } u}\{\left\|P(x)\right\|\}.
    $$

    $$
    \left\|\exists xP(x)\right\|=\max_{x \text{ takes a value in } u}\{\left\|P(x)\right\|\}.
    $$

---

- **Definition 7**  
  We say that two mathematical statements $P$ and $Q$ are logically equivalent, denoted by $P\equiv Q$, if for any context $u$ we obtain $\left\|P\right\|=\left\|Q\right\|$.

  - **Example 7.1**  
    Let $P$ and $Q$ be two mathematical statements, then $\neg\left(P\land Q\right)\equiv\left(\neg P \lor \neg Q\right)$.
    $$
    \begin{array}{c|c|c|c|c|c|c} P&Q&P\land Q&\neg\left(P\land Q\right)&\neg P&\neg Q&\left(\neg P \lor \neg Q\right) \\ \hline 1&1&1&0&0&0&0 \\ 1&0&0&1&0&1&1 \\ 0&1&0&1&1&0&1 \\ 0&0&0&1&1&1&1 \end{array}
    $$

    Therefore, $\neg\left(P\land Q\right)\equiv\left(\neg P \lor \neg Q\right)$.

  - **Example 7.2**  
    Let $P$ and $Q$ be two mathematical statements, then $\neg\left(P\implies Q\right)\equiv P \land \neg Q$.
    $$
    \begin{array}{c|c|c|c|c|c} P&Q&P\implies Q&\neg\left(P\implies Q\right)&\neg Q&\left(P \land \neg Q\right) \\ \hline 1&1&1&0&0&0 \\ 1&0&0&1&1&1 \\ 0&1&1&0&0&0 \\ 0&0&1&0&1&0 \end{array}
    $$

    Therefore, $\neg\left(P\implies Q\right)\equiv P \land \neg Q$.

  - **Example 7.3**  
    Determine if $\forall xP(x)\equiv\neg\exists x\left(\neg P(x)\right)$.

    - **Solution 7.3.1**  
      We consider two possible cases for the truth value of $\forall xP(x)$ in any given context $u$

      **Case 1:** If $\forall xP(x)$ is true, then $\left\|\forall xP(x)\right\|=1$. This implies that $\|P(x)\|=1$ for all $x$ in $u$. Consequently, the truth value of its negation is $\left\|\neg P(x)\right\|=1-\|P(x)\|=0$ for all $x$ in $u$. Taking the maximum over all $x$, we get
      $$
      \left\|\exists x(\neg P(x))\right\|=\max_{x}\{\left\|\neg P(x)\right\|\}=0.
      $$

      Thus, its negation evaluates to

      $$
      \left\|\neg\exists x\left(\neg P(x)\right)\right\|=1-0=1.
      $$

      **Case 2:** If $\forall xP(x)$ is false, then $\left\|\forall xP(x)\right\|=0$. This implies that there exists at least one element $x_0$ in $u$ such that $\left\|P\left(x_0\right)\right\|=0$. For this specific element, we have $\left\|\neg P\left(x_0\right)\right\|=1-\left\|P\left(x_0\right)\right\|=1$. Since there is at least one element where $\neg P(x)$ is true, taking the maximum yields
      $$
      \left\|\exists x(\neg P(x))\right\|=\max_{x}\{\left\|\neg P(x)\right\|\}=1.
      $$

      Thus, its negation evaluates to

      $$
      \left\|\neg\exists x\left(\neg P(x)\right)\right\|=1-1=0.
      $$

      In both cases, we obtain

      $$
      \left\|\forall xP(x)\right\|=\left\|\neg\exists x\left(\neg P(x)\right)\right\|.
      $$

      By Definition 2.7, we conclude that $\forall xP(x)\equiv\neg\exists x\left(\neg P(x)\right)$.
