## Week 5$\def\lb{\begin{bmatrix}}\def\eb{\end{bmatrix}}\def\i{\operatorname{i}}$

- **Problem 1**
  Let $A, B \in M_n(\mathbb R)$ satisfy
  $$
  AB = A \quad \text{and} \quad BA = B.
  $$

  1. Prove that
     $$
     A^2 = A \quad \text{and} \quad B^2 = B.
     $$

  2. Does it necessarily follow that $A = B$? Prove your answer. If the statement is false, give explicit matrices
     $$
     A, B \in M_2(\mathbb R)
     $$
     satisfying the two given equations but with $A \neq B$.  
     Your argument should use only the arithmetic properties of matrices developed in the section.

  - **Solution 1.1**  

    1. Suppose $A, B \in M_n(\mathbb R)$ satisfy $AB = A,BA = B.$ By using the associative law and substituting the given equations, we have
       $$
       \begin{aligned}
       A^2 &= AA = (AB)A = A(BA) = AB = A. \\
       B^2 &= BB = (BA)B = B(AB) = BA = B.
       \end{aligned}
       $$

    2. No, it does not necessarily follow that $A = B$. Let the two non-equal $2 \times 2$ matrices be defined as
       $$
       A = \lb 1 & 0 \\ 0 & 0 \eb, \quad B = \lb 1 & 0 \\ 1 & 0 \eb.
       $$
       We verify their algebraic products directly
       $$
       \begin{aligned}
       AB &= \lb 1 & 0 \\ 0 & 0 \eb \lb 1 & 0 \\ 1 & 0 \eb = \lb 1\cdot 1 + 0\cdot 1 & 1\cdot 0 + 0\cdot 0 \\ 0\cdot 1 + 0\cdot 1 & 0\cdot 0 + 0\cdot 0 \eb = \lb 1 & 0 \\ 0 & 0 \eb = A. \\
       BA &= \lb 1 & 0 \\ 1 & 0 \eb \lb 1 & 0 \\ 0 & 0 \eb = \lb 1\cdot 1 + 0\cdot 0 & 1\cdot 0 + 0\cdot 0 \\ 1\cdot 1 + 0\cdot 0 & 1\cdot 0 + 0\cdot 0 \eb = \lb 1 & 0 \\ 1 & 0 \eb = B.
       \end{aligned}
       $$
       Since $A\neq B$, the statement is false.

---

- **Problem 2**
  Write the polynomials
  
  1. $f(x) = x^6 - 5x^4 - 4x^2 + 20$
  2. $g(x) = 2x^5 - 2x^4 - 2x^3 + 2x^2 - 4x + 4$
  
  as a product of irreducible factors over $\mathbb Z[x]$, $\mathbb Q[x]$, $\mathbb R[x]$, and $\mathbb C[x]$.

  - **Solution 2.1**  

    1. We factor $f(x)$ by grouping the terms systematically
       $$
       f(x) = x^4\left(x^2 - 5\right) - 4\left(x^2 - 5\right) = \left(x^4 - 4\right)\left(x^2 - 5\right) = \left(x^2 - 2\right)\left(x^2 + 2\right)\left(x^2 - 5\right).
       $$
       By definition, we have
       * Over $\mathbb Z[x]$ and $\mathbb Q[x]$
         $$
         f(x) = \left(x^2 - 2\right)\left(x^2 + 2\right)\left(x^2 - 5\right).
         $$
       * Over $\mathbb R[x]$
         $$
         f(x) = \left(x - \sqrt 2\right)\left(x + \sqrt 2\right)\left(x^2 + 2\right)\left(x - \sqrt 5\right)\left(x + \sqrt 5\right).
         $$
       * Over $\mathbb C[x]$
         $$
         f(x) = \left(x - \sqrt 2\right)\left(x + \sqrt 2\right)\left(x - \sqrt 2\i\right)\left(x + \sqrt 2\i\right)\left(x - \sqrt 5\right)\left(x + \sqrt 5\right).
         $$

    2. We factor $g(x)$ by grouping the terms systematically
       $$
       \begin{aligned}
       g(x) &= 2x^4(x - 1) - 2x^2(x - 1) - 4(x - 1) \\
       &= 2(x - 1)\left(x^4 - x^2 - 2\right) \\
       &= 2(x - 1)\left(x^2 - 2\right)\left(x^2 + 1\right).
       \end{aligned}
       $$
       By definition, we have
       * Over $\mathbb Z[x]$ and $\mathbb Q[x]$
         $$
         g(x) = 2(x - 1)\left(x^2 - 2\right)\left(x^2 + 1\right).
         $$
       * Over $\mathbb R[x]$
         $$
         g(x) = 2(x - 1)\left(x - \sqrt 2\right)\left(x + \sqrt 2\right)\left(x^2 + 1\right).
         $$
       * Over $\mathbb C[x]$
         $$
         g(x) = 2(x - 1)\left(x - \sqrt 2\right)\left(x + \sqrt 2\right)(x - \i)(x + \i).
         $$

---

- **Problem 3**
  Let $n \in \mathbb N$ such that $n$ is even. Show that the polynomial $p(x) = x^n + x^{n-1} + \cdots + x + 1$ has no rational roots.

  - **Proof 3.1**  
    By contradiction. Suppose $p(x)$ has a rational root $\alpha = \dfrac rs \in \mathbb Q$ where $r, s \in \mathbb Z$ are coprime. By the Rational Roots Theorem, since the leading coefficient is $1$ and the constant term is $1$, we must have
    $$
    r \mid 1 \implies r = \pm 1 \quad \text{and} \quad s \mid 1 \implies s = \pm 1.
    $$
    Thus, the only possible rational roots are $\alpha = 1$ or $\alpha = -1$. We evaluate $p(x)$ at these two points
    * For $\alpha = 1$
      $$
      p(1) = \underbrace{1^n + 1^{n-1} + \cdots + 1 + 1}_{n+1 \text{ terms}} = n + 1.
      $$
      Since $n \in \mathbb N$, $n + 1 \geqslant 2 \neq 0$, so $1$ is not a root.
    * For \(\alpha = -1\)
      $$
      p(-1) = (-1)^n + (-1)^{n-1} + \cdots + (-1) + 1.
      $$
      Since $n$ is even, the exponents alternate between even and odd integers, producing a geometric series of alternating signs
      $$
      p(-1) = 1 - 1 + 1 - 1 + \cdots - 1 + 1 = 1.
      $$
      Since $p(-1) = 1 \neq 0$, $-1$ is not a root.
    
    Therefore, $p(x)$ has no rational roots.

---

- **Problem 4**
  Let $a, b \in \mathbb K$ with $a \neq b$, and let $p(x) \in \mathbb K[x]$. Find the remainder when $p(x)$ is divided by $(x - a)(x - b)$ in terms of $p(a)$ and $p(b)$.

  - **Solution 4.1**  
    By the division algorithm for polynomials, there exist unique polynomials $q(x), r(x) \in \mathbb K[x]$ such that
    $$
    p(x) = (x - a)(x - b)q(x) + r(x)
    $$
    with either $r(x) = 0$ or $\deg(r(x)) < \deg\left((x - a)(x - b)\right) = 2$. This implies $\deg(r(x)) \leqslant 1$, so we can write the remainder as $r(x) = Bx + C$ for some constants $B, C \in \mathbb K$.  
    We evaluate the equation $p(x) = (x - a)(x - b)q(x) + Bx + C$ at the roots $x = a$ and $x = b$
    $$
    \begin{aligned}
    p(a) &= (a - a)(a - b)q(a) + Ba + C = Ba + C.\\
    p(b) &= (b - a)(b - b)q(b) + Bb + C = Bb + C.
    \end{aligned}
    $$
    Then we solve this linear system of equations for $B$ and $C$. We have
    $$
    \begin{cases}
    
    B = \dfrac{p(a) - p(b)}{a - b} \\
    C = \dfrac{ap(b) - bp(a)}{a - b}
    
    \end{cases}.
    $$
    Substituting the expressions for $B$ and $C$ back into $r(x) = Bx + C$ yields
    $$
    r(x) = \left( \dfrac{p(a) - p(b)}{a - b} \right) x + \dfrac{ap(b) - bp(a)}{a - b} = \dfrac{p(a)(x - b) - p(b)(x - a)}{a - b}.
    $$
    Therefore, the required remainder is $\dfrac{p(a)(x - b) - p(b)(x - a)}{a - b}$.

---

- **Problem 5**  
  Let
  $$
  A = (a_{ij}) \in M_{m\times n}(\mathbb R).
  $$
  Prove that the following three statements are equivalent
  $$
  A = \mathbb 0, \quad A^\top A = \mathbb 0_{n\times n}, \quad AA^\top = \mathbb 0_{m\times m}.
  $$
  By saying that the three statements are equivalent, you must prove that each one holds if and only if the others hold. In particular, it is sufficient to establish
  $$
  \begin{aligned}
  A = \mathbb 0 &\implies A^\top A = \mathbb 0, \\
  A^\top A = \mathbb 0 &\implies A = \mathbb 0,
  \end{aligned}
  $$
  and
  $$
  \begin{aligned}
  A = \mathbb 0 &\implies AA^\top = \mathbb 0, \\
  AA^\top = \mathbb 0 &\implies A = \mathbb 0.
  \end{aligned}
  $$
  Your proof should use only the definitions of matrix multiplication and transpose. In particular, when proving
  $$
  A^\top A = \mathbb 0 \implies A = \mathbb 0,
  $$
  examine the diagonal entries of $A^\top A$ and justify carefully why they force every entry of $A$ to be zero. Similarly, for
  $$
  AA^\top = \mathbb 0 \implies A = \mathbb 0,
  $$
  examine the diagonal entries of $AA^\top$.

  - **Proof 5.1**  
    Let $A = \lb a_{ij} \eb_{m\times n}$, which means $A^\top = \lb a_{ji} \eb_{n\times m}$.  

    1. **Proof of $A = \mathbb 0 \implies A^\top A = \mathbb 0$**  
       $$
       A = \mathbb 0 \implies a_{ij} = 0 \quad (\forall 1 \leqslant i \leqslant m, \,\, 1 \leqslant j \leqslant n).
       $$
       The $(k,j)$-th entry of $A^\top A$ is given by
       $$
       \sum_{i=1}^m a_{ik}a_{ij} = \sum_{i=1}^m 0 \cdot 0 = 0 \quad (\forall 1 \leqslant k,j \leqslant n) \implies A^\top A = \mathbb 0_{n\times n}.
       $$

    2. **Proof of $A^\top A = \mathbb 0 \implies A = \mathbb 0$**  
       Let $A^\top A = \mathbb 0_{n\times n}$. For each $j \in \{1, 2, \cdots, n\}$, the $j$-th diagonal entry of $A^\top A$ is computed as
       $$
       \sum_{i=1}^m a_{ij}a_{ij} = \sum_{i=1}^m a_{ij}^2 = 0.
       $$
       Since $a_{ij} \in \mathbb R \implies a_{ij}^2 \geqslant 0$ for all $i$, a sum of nonnegative real numbers equals zero if and only if each term is zero, which yields
       $$
       a_{ij}^2 = 0 \implies a_{ij} = 0 \quad (\forall 1 \leqslant i \leqslant m, \,\, 1 \leqslant j \leqslant n) \implies A = \mathbb 0_{m\times n}.
       $$

    3. **Proof of $A = \mathbb 0 \implies AA^\top = \mathbb 0$**  
       $$
       A = \mathbb 0 \implies a_{ij} = 0 \quad (\forall 1 \leqslant i \leqslant m, \,\, 1 \leqslant j \leqslant n).
       $$
       The $(i,k)$-th entry of $AA^\top$ is given by
       $$
       \sum_{j=1}^n a_{ij}a_{kj} = \sum_{j=1}^n 0 \cdot 0 = 0 \quad (\forall 1 \leqslant i,k \leqslant m) \implies AA^\top = \mathbb 0_{m\times m}.
       $$

    4. **Proof of $AA^\top = \mathbb 0 \implies A = \mathbb 0$**  
       Let $AA^\top = \mathbb 0_{m\times m}$. For each $i \in \{1, 2, \cdots, m\}$, the $i$-th diagonal entry of $AA^\top$ is computed as
       $$
       \sum_{j=1}^n a_{ij}a_{ij} = \sum_{j=1}^n a_{ij}^2 = 0.
       $$
       Since $a_{ij} \in \mathbb R \implies a_{ij}^2 \geqslant 0$ for all $j$, a sum of nonnegative real numbers equals zero if and only if each term is zero, which yields
       $$
       a_{ij}^2 = 0 \implies a_{ij} = 0 \quad (\forall 1 \leqslant i \leqslant m, \,\, 1 \leqslant j \leqslant n) \implies A = \mathbb 0_{m\times n}.
       $$
