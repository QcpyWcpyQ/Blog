---
title: "Mathematical Logic"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Mathematical Logic

- **Exercise 1**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  $\sin\left(\frac{\pi}{4}\right) > 0$ and $\sin\left(\frac{\pi}{4}\right) < 1$,

    - **Solution 1.1**
      Let:
      $p:$ $\sin\left(\frac{\pi}{4}\right) > 0$
      $q:$ $\sin\left(\frac{\pi}{4}\right) < 1$

      The symbolic logic is:
      $$
      p \land q.
      $$

---

- **Exercise 2**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  $9$ is a perfect square or $8$ is a perfect square.

    - **Solution 2.1**
      Let:
      $p:$ $9$ is a perfect square.
      $q:$ $8$ is a perfect square.

      The symbolic logic is:
      $$
      p \lor q.
      $$

---

- **Exercise 3**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  The sum of $a$ and $b$ is greater than zero or zero and smaller than the product of them.

    - **Solution 3.1**
      Let:
      $p:$ The sum of $a$ and $b$ is greater than zero ($a + b > 0$).
      $q:$ Zero is smaller than the product of them ($0 < ab$).

      The symbolic logic is:
      $$
      p \lor q.
      $$

---

- **Exercise 4**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  If $P$ is a parabola, then the equation of $P$ is quadratic.

    - **Solution 4.1**
      Let:
      $p:$ $P$ is a parabola.
      $q:$ The equation of $P$ is quadratic.

      The symbolic logic is:
      $$
      p \implies q.
      $$

---

- **Exercise 5**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  $x - 2$ is greater than zero and $x + 2$ is smaller than zero or $x - 2$ is smaller than zero and $x + 2$ is greater than zero.

    - **Solution 5.1**
      Let:
      $p: x - 2$ is greater than zero ($x - 2 > 0$).
      $q: x + 2$ is smaller than zero ($x + 2 < 0$).
      $r: x - 2$ is smaller than zero ($x - 2 < 0$).
      $s: x + 2$ is greater than zero ($x + 2 > 0$).

      The symbolic logic is:
      $$
      (p \land q) \lor (r \land s).
      $$


---

- **Exercise 6**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  $(x + 2)(x - 2)$ is smaller than zero.

    - **Solution 6.1**
      Let:
      $p:$ $(x + 2)(x - 2)$ is smaller than zero.

      The symbolic logic is:
      $$
      p.
      $$

---

- **Exercise 7**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  It is not true that $x - 3$ is greater than zero or smaller than $1$.

    - **Solution 7.1**
      Let:
      $p:$ $x - 3$ is greater than zero ($x - 3 > 0$).
      $q:$ $x - 3$ is smaller than $1$ ($x - 3 < 1$).

      The symbolic logic is:
      $$
      \neg (p \lor q).
      $$

---

- **Exercise 8**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  If $f$ is not a constant, then $f'$ is not zero.

    - **Solution 8.1**
      Let:
      $p:$ $f$ is a constant.
      $q:$ $f'$ is zero.

      The symbolic logic is:
      $$
      \neg p \implies \neg q.
      $$

---

- **Exercise 9**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  If $\sin x$ is $0$ and $x$ is greater than, or equal to $0$ and smaller than or equal to $2\pi$, then $x = 0$ or $x = \pi$.

    - **Solution 9.1**
      Let:
      $p:$ $\sin x$ is $0$.
      $q:$ $x$ is greater than, or equal to $0$ and smaller than or equal to $2\pi$ ($0 \le x \le 2\pi$).
      $r:$ $x = 0$.
      $s:$ $x = \pi$.

      The symbolic logic is:
      $$
      (p \land q) \implies (r \lor s).
      $$

---

- **Exercise 10**
  Translate to symbolic logic the following statement defining propositions and using appropriated connectives:
  If $\cos x \cdot \sin x$ is $0$ and $x$ is greater than $0$ and smaller than, or equal to $\pi$, then $x = \frac{\pi}{2}$.

    - **Solution 10.1**
      Let:
      $p:$ $\cos x \cdot \sin x$ is $0$.
      $q:$ $x$ is greater than $0$ and smaller than, or equal to $\pi$ ($0 < x \le \pi$).
      $r:$ $x = \frac{\pi}{2}$.

      The symbolic logic is:
      $$
      (p \land q) \implies r.
      $$

---

- **Exercise 11**
  Let $p$ stand for the proposition "$x^2 + 2x - 3$ is $0$" and $q$ for "$x^2 - x - 2$ is $0$". Express the following as natural sentences in English:
  $$
  \neg p. \\
  p \land q. \\
  p \lor q.
  $$
  
    - **Solution 11.1**
      $$
      x^2 + 2x - 3 \text{ is not } 0. \\
      x^2 + 2x - 3 \text{ is } 0 \text{ and } x^2 - x - 2 \text{ is } 0. \\
      x^2 + 2x - 3 \text{ is } 0 \text{ or } x^2 - x - 2 \text{ is } 0.
      $$

---

### High school mathematical concepts with quantified definitions
- **Exercise 14**
  **Perfect square**
  An integer $k$ is a perfect square if there exists an integer $n$ such that $k = n^2$.

    - **Solution 14.1**
      The statement can be expressed as:
      $$
      \exists n \in \mathbb{Z}, \, k = n^2.
      $$

---

- **Exercise 15**
  **Odd number**
  An integer $m$ is odd if there exists an integer $t$ such that $m = 2t + 1$.

    - **Solution 15.1**
      The statement can be expressed as:
      $$
      (\exists t \in \mathbb{Z}) \, m = 2t + 1.
      $$

---

- **Exercise 16**
  **Multiple**
  An integer $n$ is a multiple of the integer $d$ if there exists an integer $k$ such that $n=dk$.

    - **Solution 16.1**
      The statement can be expressed as:
      $$
      (\exists k \in \mathbb{Z}), \, n = dk.
      $$

---

- **Exercise 17**
  **Rational number**
  A real number $x$ is rational if there exist integers $a, b$ with $b \neq 0$ such that $x = \frac{a}{b}$.

    - **Solution 17.1**
      The statement can be expressed as:
      $$
      (\exists a \in \mathbb{Z})(\exists b \in \mathbb{Z}) \, b \neq 0, \, x = \frac{a}{b}.
      $$

---

- **Exercise 18**
  **Irrational number**
  A real number $x$ is irrational if for all integers $a, b$ with $b \neq 0$, we have $x \neq \frac{a}{b}$.

    - **Solution 18.1**
      The statement can be expressed as:
      $$
      (\forall a, b \in \mathbb{Z}) \, b \neq 0 \implies x \neq \frac{a}{b}.
      $$

---

- **Exercise 19**
  **Root (zero) of a function**
  A real function $f : \mathbb{R} \to \mathbb{R}$ has a root if there exists a number $c \in \mathbb{R}$, such that $f(c) = 0$.

    - **Solution 19.1**
      The statement can be expressed as:
      $$
      (\exists c \in \mathbb{R}) \, f(c) = 0.
      $$

---

- **Exercise 20**
  **Function bounded above**
  A real function $f : \mathbb{R} \to \mathbb{R}$ is bounded above if there exists a real number $M > 0$, such that for all $x \in \mathbb{R}$, $f(x) \leqslant M$.

    - **Solution 20.1**
      The statement can be expressed as:
      $$
      (\exists M \in \mathbb{R}^+) (\forall x \in \mathbb{R}) \, f(x) \leqslant M.
      $$

---

- **Exercise 21**
  **Function bounded below**
  A real function $f : \mathbb{R} \to \mathbb{R}$ is bounded below if there exists a real number $m$ such that for all $x \in \mathbb{R}$, $f(x) \geqslant m$.

    - **Solution 21.1**
      The statement can be expressed as:
      $$
      (\exists m \in \mathbb{R}) (\forall x \in \mathbb{R}) \, f(x) \geqslant m.
      $$

---

- **Exercise 22**
  **Strictly increasing function**
  A real function $f : \mathbb{R} \to \mathbb{R}$ is strictly increasing if for all $x_1, x_2 \in \mathbb{R}$, $x_1 < x_2$, we have $f(x_1) < f(x_2)$.

    - **Solution 22.1**
      The statement can be expressed as:
      $$
      (\forall x_1, x_2), \, x_1 < x_2 \implies f(x_1) < f(x_2).
      $$

---

- **Exercise 23**
  **Equal functions**
  A real function $f : \mathbb{R} \to \mathbb{R}$ equals a real function $g : \mathbb{R} \to \mathbb{R}$ if for every $x \in \mathbb{R}$, $f(x) = g(x)$.

    - **Solution 23.1**
      The statement can be expressed as:
      $$
      (\forall x \in \mathbb{R}) \, f(x) = g(x).
      $$

---

- **Exercise 24**
  **Different functions**
  A real function $f : \mathbb{R} \to \mathbb{R}$ is different from a real function $g : \mathbb{R} \to \mathbb{R}$ if there exists $x \in \mathbb{R}$, $f(x) \neq g(x)$.

    - **Solution 24.1**
      The statement can be expressed as:
      $$
      (\exists x \in \mathbb{R}) \, f(x) \neq g(x).
      $$

---

- **Exercise 25**
  **Congruent triangles**
  Two triangles are congruent if there exists a rigid transformation $T$ mapping one triangle onto the other.

    - **Solution 25.1**
      The statement can be expressed as:
      $$
      (\exists \text{rigid motion } T) \, T(\Delta_1) = \Delta_2.
      $$

---

- **Exercise 26**
  **A very well-known Theorem of High-School**
  Let $f(x) = ax^2 + bx + c$, $a, b, c \in \mathbb{R}$ be any quadric.

  (a) If $b^2 - 4ac < 0$, then $f$ doesn't have real roots.
  (b) If $b^2 - 4ac = 0$, then $f$ has exactly one real root.
  (c) If $b^2 - 4ac > 0$, then $f$ has exactly two real roots.

    - **Solution 26.1**
      For statement (a), it can be expressed as:
      $$
      (\forall x \in \mathbb{R}) \, f(x) \neq 0.
      $$

    - **Solution 26.2**
      For statement (b), using the unique existential quantifier $\exists!$:
      $$
      (\exists! x) \, f(x) = 0.
      $$

      Alternatively, without using $\exists!$:
      $$
      (\exists x)(\forall y) \, (f(x) = 0 \land (y \neq x \implies f(y) \neq 0)).
      $$

    - **Solution 26.3**
      For statement (c), it can be expressed as:
      $$
      (\exists x)(\exists z)(\forall y) \, (x \neq z \land f(x) = 0 \land f(z) = 0 \land (y \neq x \land y \neq z \implies f(y) \neq 0)).
      $$