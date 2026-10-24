---
title: "Week 2"
published: 2026-10-21
description: "Workshop solutions on prime criteria, the pigeonhole principle, direction angles, guaranteed sock selections, and a truck-loading obstruction."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**  
    Is there a convex polygon with more than three acute angles?

    - **Solution 1.1**  
        No. The sum of the exterior angles of any convex polygon is exactly $360^\circ$.

        Suppose that a convex polygon had at least four acute interior angles. The exterior angle corresponding to an interior angle $\alpha$ equals $180^\circ-\alpha$. Therefore, each acute interior angle produces an exterior angle strictly greater than $90^\circ$.

        The four corresponding exterior angles alone would then have sum greater than
        $$
        4\cdot90^\circ=360^\circ,
        $$
        contradicting the fact that the sum of all exterior angles is $360^\circ$. Hence
        $$
        \boxed{\text{a convex polygon can have at most three acute angles}.}
        $$

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

---

- **Exercise 3**  
    Prove that if $(m-1)!+1$ is divisible by $m$, then $m$ is a prime number.

    - **Solution 3.1**  
        Assume that $m>1$ is an integer and
        $$
        m\mid\bigl((m-1)!+1\bigr).
        $$

        We prove that $m$ is prime by contradiction. Suppose that $m$ is composite. Then $m$ has a proper divisor $d$ satisfying
        $$
        1<d<m.
        $$

        Since $d$ is one of the factors $1,2,\ldots,m-1$, we have
        $$
        d\mid(m-1)!.
        $$

        On the other hand, $d\mid m$, and the assumption $m\mid((m-1)!+1)$ therefore implies
        $$
        d\mid\bigl((m-1)!+1\bigr).
        $$

        Hence $d$ divides the difference of these two divisible numbers:
        $$
        d\mid\bigl((m-1)!+1-(m-1)!\bigr)=1.
        $$

        This is impossible because $d>1$. Thus $m$ cannot be composite, and so
        $$
        \boxed{m\text{ is prime}.}
        $$

        This is the converse direction of Wilson's theorem; the proof above does not require the full theorem.

---

- **Exercise 4**  
    In a class of $30$ pupils a test was written. Nikita made $13$ mistakes and every other pupil made strictly fewer. Prove that there are three pupils who made the same number of mistakes.

    - **Solution 4.1**  
        Excluding Nikita, there are $29$ pupils. Each of them made an integer number of mistakes strictly smaller than $13$, so the possible numbers are
        $$
        0,1,2,\ldots,12.
        $$

        These are $13$ possible values. Regard the $29$ pupils as objects and the $13$ possible mistake counts as boxes.

        If every mistake count occurred for at most two pupils, then there could be at most
        $$
        2\cdot13=26
        $$
        pupils other than Nikita. But there are $29>26$ such pupils. Therefore, by the pigeonhole principle, at least one of the $13$ mistake counts occurs for at least
        $$
        \left\lceil\frac{29}{13}\right\rceil=3
        $$
        pupils. Hence
        $$
        \boxed{\text{three pupils made the same number of mistakes}.}
        $$

---

- **Exercise 5**  
    The Earth has more than six billion inhabitants and no person older than $150$ years exists. Prove that there are two people on Earth who were born at exactly the same second.

    - **Solution 5.1**  
        Every living person was born during the last $150$ years. To overestimate the number of seconds in this period, allow every year to have $366$ days. Then the number of possible one-second birth intervals is at most
        $$
        150\cdot366\cdot24\cdot60\cdot60
        =4{,}743{,}360{,}000.
        $$

        Even adding one to account for both endpoints leaves fewer than six billion possible seconds. Since there are more than
        $$
        6{,}000{,}000{,}000
        $$
        people, there are more people than possible birth seconds in the relevant time interval.

        Assign each person to the second in which that person was born. By the pigeonhole principle, at least one second contains at least two people. Therefore
        $$
        \boxed{\text{two people were born at exactly the same second}.}
        $$

---

- **Exercise 6**  
    Twelve lines are drawn in the plane. Prove that some two of them form an angle of at most $15^\circ$.

    - **Solution 6.1**  
        The direction of an unoriented line can be represented by an angle in the half-open interval $[0^\circ,180^\circ)$, because directions differing by $180^\circ$ describe the same line.

        Let the direction angles of the twelve lines, arranged in nondecreasing order, be
        $$
        0^\circ\le\theta_1\le\theta_2\le\cdots\le\theta_{12}<180^\circ.
        $$

        Consider the twelve cyclic gaps
        $$
        \theta_2-\theta_1,\ \theta_3-\theta_2,\ \ldots,\
        \theta_{12}-\theta_{11},\ 180^\circ-\theta_{12}+\theta_1.
        $$

        Their sum is exactly $180^\circ$. If every gap were greater than $15^\circ$, their sum would be greater than
        $$
        12\cdot15^\circ=180^\circ,
        $$
        which is impossible. Therefore at least one cyclic gap is at most $15^\circ$.

        The two lines bordering this gap form an angle equal to that gap. Consequently,
        $$
        \boxed{\text{some two of the lines form an angle of at most }15^\circ.}
        $$

        If two of the lines are parallel, their angle is $0^\circ$, and the conclusion holds immediately; this case is also included by a zero gap above.

---

- **Exercise 7**  
    A drawer contains socks: $10$ black, $10$ blue, and $10$ white. What is the smallest number of socks one must draw without looking in order to guarantee that among the drawn socks there are

    1. two of the same colour;
    2. two of different colours;
    3. two black socks?

    - **Solution 7.1**  
        **1. Two socks of the same colour: $4$.**  
        It is possible for the first three socks to be one black, one blue, and one white, so three socks do not guarantee a matching pair. With four socks and only three colours, the pigeonhole principle guarantees that at least two have the same colour. Thus the minimum is
        $$
        \boxed{4}.
        $$

        **2. Two socks of different colours: $11$.**  
        The first ten socks could all have the same colour, so ten socks are insufficient. No colour occurs more than ten times. Therefore, after drawing eleven socks, they cannot all have the same colour, and at least two have different colours. Thus the minimum is
        $$
        \boxed{11}.
        $$

        **3. Two black socks: $22$.**  
        In the worst case, one may first draw all $20$ nonblack socks and then one black sock. Hence $21$ socks can be drawn while containing only one black sock. The next draw, the twenty-second, must be black, so the minimum is
        $$
        \boxed{22}.
        $$

---

- **Exercise 8**  
    Thirty-six stones were mined in a quarry. Their masses form the arithmetic progression
    $$
    490,495,500,\ldots,665\text{ kg}.
    $$
    Is it possible to transport these stones using seven trucks, each of capacity $3$ tonnes $(3000\text{ kg})$?

    - **Solution 8.1**  
        The total mass is
        $$
        \frac{36(490+665)}{2}
        =18\cdot1155
        =20{,}790\text{ kg},
        $$
        which is less than the combined truck capacity
        $$
        7\cdot3000=21{,}000\text{ kg}.
        $$
        Thus total capacity alone does not settle the question.

        Consider how many stones a single truck can carry. The six lightest stones already have total mass
        $$
        490+495+500+505+510+515=3015\text{ kg}>3000\text{ kg}.
        $$

        Every other collection of six stones is at least this heavy. Therefore no truck can carry six stones; each truck can carry at most five.

        Seven trucks can consequently carry at most
        $$
        7\cdot5=35
        $$
        stones, but there are $36$ stones. Hence
        $$
        \boxed{\text{it is impossible to transport all the stones using seven trucks}.}
        $$
