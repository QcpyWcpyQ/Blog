---
title: "Methods of Proving(2)"
published: 2026-10-19
description: "Proof by contradiction, Euclid's proof that there are infinitely many primes, and its constructive reformulation."
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Part 1: Proof by contradiction

To prove a statement $P$ by **contradiction**:

1. Assume its negation, $\neg P$.
2. Use this assumption together with definitions and established results to derive a contradiction.
3. Conclude that $\neg P$ is false, and therefore $P$ is true.

For a statement of the form “if $A$, then $B$”, the contradictory assumption is **$A$ and not $B$**. The assumptions should be stated explicitly, and the proof should identify the precise contradiction.

### Infinitely many prime numbers

- **Exercise 1.1**  
  Prove that there are infinitely many prime numbers.

  - **Proof 1.1.1 (Euclid's argument by contradiction)**
  
    **Step 1: assume that there are only finitely many primes.** List all of them as
    $$
    p_1,p_2,\ldots,p_k.
    $$
    Here $k\geqslant1$, since $2$ is prime.
  
    **Step 2: construct an integer from the list.** Set
    $$
    P=p_1p_2\cdots p_k,\qquad N=P+1.
    $$
    Since $N$ is an integer greater than $1$, the lemma gives a prime $q$ such that $q\mid N$.
  
    **Step 3: show that no listed prime divides $N$.** For every index $i$ with $1\leqslant i\leqslant k$, we have $p_i\mid P$. If $p_i\mid N$ as well, then $p_i$ would divide their difference:
    $$
    p_i\mid(N-P)=1.
    $$
    This is impossible because $p_i\geqslant2$. Therefore
    $$
    p_i\nmid N\qquad\text{for every }i=1,2,\ldots,k.
    $$
    Equivalently, $N\equiv1\pmod{p_i}$ for every listed prime.
  
    **Step 4: identify the contradiction.** The prime $q$ divides $N$, but none of $p_1,\ldots,p_k$ does. Hence
    $$
    q\notin\{p_1,p_2,\ldots,p_k\},
    $$
    contradicting the assumption that the list contains **all** prime numbers.
  
    Thus there cannot be only finitely many primes. Therefore
    $$
    \boxed{\text{There are infinitely many prime numbers.}}
    $$

### Rewriting the proof as a construction

- **Remark 1.2 (Constructive reformulation)**  
  The same construction proves the following statement: **given any finite list of primes, we can find a prime outside that list**.

  Start with any finite nonempty list $p_1,\ldots,p_k$ of primes and form
  $$
  N=p_1p_2\cdots p_k+1.
  $$
  Choose a prime divisor $q$ of $N$, whose existence follows from the lemma. For every $i$,
  $$
  N\equiv1\pmod{p_i},
  $$
  so $p_i$ does not divide $N$. Consequently, $q$ is a prime not present in the original list. If the starting list is empty, the prime $2$ already lies outside it.

  Thus every finite list of primes can be enlarged. No finite list contains all primes, so there are infinitely many primes.

  In the contradiction proof, we assume that the list contains all primes and derive an impossibility. In the constructive reformulation, we start with an arbitrary finite list and produce a prime outside it.

---

### Distinct counts and a lower bound

- **Exercise 2**  
  Five Yunnan boys found $9$ mushrooms in total. Prove that at least two of them found the same number of mushrooms.

  Each boy's count is a nonnegative integer; a boy may have found no mushrooms.

  - **Proof 2.1 (Contradiction)**  
    Suppose, for contradiction, that the five counts are pairwise distinct. Relabel the boys in increasing order of their counts:
    $$
    0\leqslant a_1<a_2<a_3<a_4<a_5,\qquad
    a_1+a_2+a_3+a_4+a_5=9.
    $$
    Since the counts are integers, each strict increase is at least $1$. Thus
    $$
    a_1\geqslant0,\quad a_2\geqslant1,\quad
    a_3\geqslant2,\quad a_4\geqslant3,\quad a_5\geqslant4.
    $$
    Adding these inequalities gives
    $$
    9=a_1+a_2+a_3+a_4+a_5
      \geqslant0+1+2+3+4=10,
    $$
    a contradiction. Therefore at least two boys found the same number of mushrooms.

    **Key idea.** Five distinct nonnegative integer counts have a total of at least $10$. The given total is too small for all five counts to be distinct.

---

### Irrationality and parity

- **Exercise 3**  
  Prove that $\log_2 3$ is irrational.

  - **Proof 3.1 (Contradiction)**  
    Suppose that $\log_2 3$ is rational. Since $\log_2 3>0$, we may write
    $$
    \log_2 3=\frac{m}{n},\qquad m,n\in\mathbb{N},\quad m,n\geqslant1.
    $$
    By the definition of the logarithm,
    $$
    2^{m/n}=3.
    $$
    Raising both sides to the positive integer power $n$ yields
    $$
    2^m=3^n.
    $$
    The left side is even because $m\geqslant1$, while the right side is odd because it is a product of odd integers. An even integer cannot equal an odd integer, so this is a contradiction. Hence
    $$
    \boxed{\log_2 3\notin\mathbb{Q}}.
    $$

    The fraction $m/n$ need not be in lowest terms: parity alone gives the contradiction.

---

### Pigeonhole principle

- **Example (Rabbits and cages)**  
  If $10$ rabbits are placed in $9$ cages, with each rabbit in exactly one cage, at least one cage contains at least $2$ rabbits. Otherwise every cage would contain at most one rabbit, giving at most $9$ rabbits in total.

- **Principle (Bounds from the average)**  
  Let $n\geqslant0$ and $k\geqslant1$ be integers. Distribute $n$ objects among $k$ boxes, assigning each object to exactly one box. Empty boxes are allowed. If box $i$ contains $a_i$ objects, then
  $$
  a_i\in\mathbb{Z}_{\geqslant0},\qquad
  \sum_{i=1}^{k}a_i=n.
  $$
  There is a box containing **at least** $n/k$ objects, and there is a box containing **at most** $n/k$ objects. Equivalently,
  $$
  \boxed{\min_{1\leqslant i\leqslant k}a_i
    \leqslant\frac nk
    \leqslant\max_{1\leqslant i\leqslant k}a_i}.
  $$
  The two boxes need not be the same box.

  - **Proof (At least the average)**  
    Suppose every box contains fewer than $n/k$ objects. Then $a_i<n/k$ for every $i$, and summing gives
    $$
    n=\sum_{i=1}^{k}a_i
      <\sum_{i=1}^{k}\frac nk
      =k\cdot\frac nk=n,
    $$
    a contradiction. Hence some box contains at least $n/k$ objects.

  - **Proof (At most the average)**  
    Suppose every box contains more than $n/k$ objects. Then $a_i>n/k$ for every $i$, and summing gives
    $$
    n=\sum_{i=1}^{k}a_i
      >\sum_{i=1}^{k}\frac nk
      =k\cdot\frac nk=n,
    $$
    again a contradiction. Hence some box contains at most $n/k$ objects.

- **Remark (Integer bounds)**  
  Since the number of objects in a box is an integer, the conclusions can be written more precisely as
  $$
  \boxed{\text{Some box contains at least }\left\lceil\frac nk\right\rceil
    \text{ objects,}}
  $$
  $$
  \boxed{\text{some box contains at most }\left\lfloor\frac nk\right\rfloor
    \text{ objects.}}
  $$
  Here $\lceil t\rceil$ is the smallest integer greater than or equal to $t$, and $\lfloor t\rfloor$ is the largest integer less than or equal to $t$.

  In particular, if $n>k$, then $n/k>1$, so at least one box contains at least $2$ objects. For $10$ rabbits in $9$ cages,
  $$
  \left\lceil\frac{10}{9}\right\rceil=2,\qquad
  \left\lfloor\frac{10}{9}\right\rfloor=1.
  $$
  Thus some cage contains at least $2$ rabbits, and some cage contains at most $1$ rabbit.
  
---

### Shared birthdays

- **Exercise 4**  
  There are $400$ students in a school. Prove that at least two of them were born on the same day of the year.

  “The same day of the year” means the same month and day, not necessarily the same birth year. There are at most $366$ possible birthdays, including February $29$.

  - **Proof 4.1 (Pigeonhole principle)**  
    Treat the $400$ students as objects and the $366$ possible birthdays as boxes. Put each student in the box corresponding to their birthday. Some box contains at least
    $$
    \left\lceil\frac{400}{366}\right\rceil=2
    $$
    students. Thus at least two students share a birthday.

    Equivalently, if all birthdays were different, each box would contain at most one student. There would then be at most $366$ students, contradicting $400>366$.

### Antipodal points in the ocean

- **Example 5**  
  The ocean covers more than half of the Earth's surface. Prove that there are two antipodal points both lying in the ocean.

  Model the Earth's surface as a sphere. Two points are **antipodal** if they are opposite each other through the centre of the sphere.

  - **Proof 5.1 (Area and overlap)**  
    Let $S$ be the sphere and $O\subseteq S$ its ocean region. Write $\mu(E)$ for the surface area of a region $E$. By hypothesis,
    $$
    \mu(O)>\frac12\mu(S).
    $$
    Let $T:S\to S$ send each point to its antipode. This map preserves surface area and satisfies $T(T(x))=x$. Therefore
    $$
    \mu(T(O))=\mu(O),\qquad
    \mu(O)+\mu(T(O))>\mu(S).
    $$
    If $O$ and $T(O)$ were disjoint, their union would have area
    $$
    \mu(O\cup T(O))=\mu(O)+\mu(T(O))>\mu(S),
    $$
    which is impossible because $O\cup T(O)\subseteq S$. Hence $O\cap T(O)\neq\varnothing$.

    Choose $x\in O\cap T(O)$. Then $x$ is in the ocean. Since $x\in T(O)$, there is a point $y\in O$ such that $x=T(y)$. Applying $T$ gives $T(x)=y\in O$. Thus $x$ and its antipode $T(x)$ are both in the ocean, as required.

    **Key distinction.** The sum of the two areas exceeds the sphere's area; their union cannot. This forces an overlap.

### Matching results on three tests

- **Example 6**  
  Sixty-five students take three tests. On each test, the possible scores are $2,3,4,5$. Must two students receive the same scores on all three tests?

  - **Solution 6.1 (Pigeonhole principle)**  
    **Yes.** Represent a student's results by the ordered triple
    $$
    (s_1,s_2,s_3),\qquad s_i\in\{2,3,4,5\},
    $$
    where $s_i$ is the score on test $i$. There are four choices for each coordinate, so there are
    $$
    4\cdot4\cdot4=4^3=64
    $$
    possible triples.

    Put the $65$ students into boxes labelled by these $64$ triples. The pigeonhole principle gives a box containing at least
    $$
    \left\lceil\frac{65}{64}\right\rceil=2
    $$
    students. Those students have the same score on each corresponding test.

    The order matters: $(2,3,4)$ and $(4,3,2)$ are different test results even though their total scores are equal.

### Equal numbers of acquaintances

- **Example 7**  
  Prove that among any five people, two have the same number of acquaintances within the group.

  Assume acquaintance is mutual: if $A$ knows $B$, then $B$ knows $A$. A person is not counted as their own acquaintance.

  - **Solution 7.1 (Pigeonhole principle)**  
    Each person can know $0,1,2,3$, or $4$ of the other people. However, the counts $0$ and $4$ cannot both occur: if someone knows all four others, each of those four knows that person, so nobody knows zero people.

    Consider two cases:

    1. **Someone knows all four others.** Then nobody has count $0$, so every count belongs to $\{1,2,3,4\}$.
    2. **Nobody knows all four others.** Then every count belongs to $\{0,1,2,3\}$.

    In either case, there are at most four possible counts for five people. By the pigeonhole principle, at least two people have the same count.

    **Key idea.** Although five values appear possible at first, the two extreme values cannot occur together. This reduces the number of available boxes to four.

## Invariants

An **invariant** is a quantity or property that does not change under any allowed operation in a process.

To prove that a target configuration cannot be reached:

1. Define a quantity associated with each configuration.
2. Prove that every allowed operation preserves it.
3. Show that the initial and target configurations have different values of this quantity.

Preservation in one step implies preservation after any finite sequence of steps.

### Flipping signs in a grid

- **Example 8 (From the board)**  
  A $4\times4$ grid contains one minus sign and plus signs in every other cell. In one move, we may reverse every sign in one entire row or one entire column. Can we obtain a grid consisting entirely of plus signs?

  The pictured initial configuration is
  $$
  \begin{array}{|c|c|c|c|}
  \hline
  +&+&+&+\\\hline
  +&-&+&+\\\hline
  +&+&+&+\\\hline
  +&+&+&+\\\hline
  \end{array}
  $$
  The argument is the same wherever the single minus sign is placed.

  - **Proof 8.1 (Product invariant)**  
    **No.** Replace each plus sign by $+1$ and each minus sign by $-1$. Let $a_{ij}$ be the value in row $i$, column $j$, and define
    $$
    I=\prod_{i=1}^{4}\prod_{j=1}^{4}a_{ij}.
    $$
    Flipping a row or column multiplies exactly four entries by $-1$. Hence the product changes by the factor $(-1)^4=1$:
    $$
    I_{\mathrm{after}}=(-1)^4I_{\mathrm{before}}=I_{\mathrm{before}}.
    $$
    Thus $I$ is invariant under every allowed move.

    Initially, exactly one entry equals $-1$, so $I=-1$. In an all-plus grid, the product would be $I=+1$. Since the invariant cannot change from $-1$ to $+1$, the all-plus grid is unreachable.

  - **Proof 8.2 (Equivalent parity invariant)**  
    Let $M$ be the total number of minus signs. Suppose the row or column being flipped contains $r$ minus signs and $4-r$ plus signs. Its $r$ minus signs become plus signs, and its $4-r$ plus signs become minus signs. Therefore
    $$
    M_{\mathrm{after}}=M_{\mathrm{before}}-r+(4-r)
      =M_{\mathrm{before}}+4-2r.
    $$
    The change $4-2r$ is even, so the parity of $M$ is invariant. Initially $M=1$ is odd, whereas an all-plus grid has $M=0$, which is even. The target is therefore impossible.

    The number of minus signs itself may change; its parity stays fixed. The two proofs describe the same invariant because $I=(-1)^M$.
