---
title: "Methods of Proving(2)"
published: 2026-10-21
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**  
    Is there a convex polygon with more than three acute angles?

    - **Solution 1.1**  
        No. Note that the sum of all exterior angles in any convex polygon always equals exactly $360^\circ$. Let $n$ be the sum of the acute angles. Suppose $n>3$. Then $n\geqslant 4$. Let $\alpha$ be the exterior angle of the acute angle. Let $S$ be the sum of all exterior angles. We have $\alpha >90^\circ$, and then  
        $$
        360^\circ=S\geqslant n\alpha\geqslant4\alpha>4\times 90^\circ=360^\circ.
        $$
        This is a contradiction. Therefore, the statement is false.

---

- **Exercise 2**  
    Prove that there are infinitely many prime numbers of the forms  

    1. $4k+3$.
    2. $3k+2$.
    3. $6k+5$.

    - **Solution 2.1** 
        (1) By contradiction. Assume that there are exactly $n$ prime numbers of the form $4k+3$, and list them in increasing order. Then $p_n=4k_n+3$ is the largest prime number of the form $4k+3$. Then consider the number  
        $$
        N=2(4k_1+3)(4k_2+3)\cdots(4k_n+3)+1
        $$
        For every $i$, $N\equiv1\pmod{p_i}$, so none of the listed primes divides $N$. We also have  
        $$
        \begin{aligned}
        N&=2(4k_1+3)(4k_2+3)\cdots(4k_n+3)+1 \\
        &\equiv2\cdot3^n+1\pmod 4 \\
        &\equiv2\cdot(4-1)^n+1\pmod 4 \\
        &\equiv2\cdot(-1)^n+1\pmod 4 \\
        &\equiv 3\pmod 4.
        \end{aligned}
        $$
        That is, $N=4m+3$ for some integer $m$. Since $N>1$, write $N=q_1q_2\cdots q_r$ as a product of primes, allowing repeated factors. Since $N$ is odd, each $q_j$ is congruent to $1$ or $3$ modulo $4$. If every $q_j$ were congruent to $1$ modulo $4$, then
        $$
        N=q_1q_2\cdots q_r\equiv1\pmod4,
        $$
        contradicting $N\equiv3\pmod4$. Hence at least one prime divisor $q_j$ satisfies $q_j\equiv3\pmod4$, so it has the form $4k+3$.

        This prime divisor is not among $p_1,\ldots,p_n$, because none of them divides $N$. This contradicts the assumption that the list contains all primes of the form $4k+3$. Therefore, there are infinitely many such primes.

        (2) By contradiction. Assume that there are only finitely many prime numbers of the form $3k+2$, and list them as $p_1,p_2,\ldots,p_n$. The list is nonempty because $2$ is such a prime. Set
        $$
        P=p_1p_2\cdots p_n,\qquad N=3P-1.
        $$
        Then $N>1$ and $N\equiv2\pmod3$. For every $i$,
        $$
        N\equiv-1\pmod{p_i},
        $$
        so none of the listed primes divides $N$.

        Write $N=q_1q_2\cdots q_r$ as a product of primes, allowing repeated factors. Since $3\nmid N$, each $q_j$ is congruent to $1$ or $2$ modulo $3$. If every $q_j$ were congruent to $1$ modulo $3$, then
        $$
        N=q_1q_2\cdots q_r\equiv1\pmod3,
        $$
        contradicting $N\equiv2\pmod3$. Hence at least one prime divisor $q_j$ satisfies $q_j\equiv2\pmod3$, so it has the form $3k+2$.

        This prime divisor is not among $p_1,\ldots,p_n$, because none of them divides $N$. This contradicts the assumption that the list contains all primes of the form $3k+2$. Therefore, there are infinitely many such primes.

        (3) By contradiction. Assume that there are only finitely many prime numbers of the form $6k+5$, and list them as $p_1,p_2,\ldots,p_n$. The list is nonempty because $5$ is such a prime. Set
        $$
        P=p_1p_2\cdots p_n,\qquad N=6P-1.
        $$
        Then $N>1$ and $N\equiv5\pmod6$. For every $i$,
        $$
        N\equiv-1\pmod{p_i},
        $$
        so none of the listed primes divides $N$.

        Write $N=q_1q_2\cdots q_r$ as a product of primes, allowing repeated factors. Since $N\equiv5\pmod6$, neither $2$ nor $3$ divides $N$. Therefore no $q_j$ equals $2$ or $3$. Every prime other than $2$ and $3$ is congruent to $1$ or $5$ modulo $6$: residues $0,2,4$ are divisible by $2$, and residue $3$ is divisible by $3$.

        If every $q_j$ were congruent to $1$ modulo $6$, then
        $$
        N=q_1q_2\cdots q_r\equiv1\pmod6,
        $$
        contradicting $N\equiv5\pmod6$. Hence some prime divisor $q_j$ satisfies $q_j\equiv5\pmod6$, so it has the form $6k+5$.

        Again, this prime is not among $p_1,\ldots,p_n$, since none of them divides $N$. This contradicts the assumption that the list contains all primes of the form $6k+5$. Therefore, there are infinitely many such primes.
