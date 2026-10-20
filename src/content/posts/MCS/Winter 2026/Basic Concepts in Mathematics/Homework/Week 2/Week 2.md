---
title: "Week 2"
published: 2026-10-20
description: "Complete solutions on induction, exponential inequalities, lattice walks, word invariants, reflected jumps, knights and liars, paper cutting, and the pigeonhole principle."
tags: [MCS]
category: MCS
draft: false
image: ""
---

<!-- Source: the supplied *2nd homework* screenshot, containing eight problems. The statements below preserve the mathematical conditions while normalizing wording and notation. Here $\mathbb N=\{0,1,2,\ldots\}$, as indicated explicitly in Problem 2. -->

- **Problem 1**  
  Prove by induction that $6$ divides $7^n-1$ for every integer $n\ge1$.

  1. Verify the case $n=1$ and state the induction hypothesis precisely.
  2. Rewrite $7^{n+1}-1$ using $7^n-1$, and complete the proof.

  - **Solution 1.1**  
    Let $P(n)$ be the statement

    $$
    6\mid(7^n-1).
    $$

    The expression is $7^n-1$, not $7^{n-1}$.

    **Base case.** For $n=1$,

    $$
    7^1-1=6,
    $$

    which is divisible by $6$. Thus $P(1)$ holds.

    **Induction hypothesis.** Fix an arbitrary integer $k\ge1$ and assume $P(k)$ holds. Precisely, assume that there exists an integer $q$ such that

    $$
    7^k-1=6q.
    $$

    We must prove $P(k+1)$ from this assumption.

    **Induction step.** Rewrite the next expression so that the induction hypothesis can be used:

    $$
    \begin{aligned}
    7^{k+1}-1
    &=7\cdot7^k-1\\
    &=7(7^k-1)+6\\
    &=7\cdot6q+6\\
    &=6(7q+1).
    \end{aligned}
    $$

    Since $7q+1$ is an integer, $6\mid(7^{k+1}-1)$. This proves $P(k)\Rightarrow P(k+1)$ for every $k\ge1$.

    By mathematical induction,

    $$
    \boxed{6\mid(7^n-1)\quad\text{for every integer }n\ge1.}
    $$

    **Key idea.** The useful decomposition is $7^{k+1}-1=7(7^k-1)+6$: one term contains exactly the expression from the induction hypothesis, and the other is already divisible by $6$.

---

- **Problem 2**  
  For $n\in\mathbb N$, let $P_n$ be the statement $2^n>n^2$.

  1. Check $P_n$ for $n=0,1,2,3,4,5$.
  2. Determine exactly which $n\in\mathbb N$ satisfy $P_n$.

  - **Solution 2.1**  
    **(a) The first six cases.**

    | $n$ | $2^n$ | $n^2$ | Is $2^n>n^2$ true? |
    | --- | --- | --- | --- |
    | $0$ | $1$ | $0$ | Yes |
    | $1$ | $2$ | $1$ | Yes |
    | $2$ | $4$ | $4$ | No: equality |
    | $3$ | $8$ | $9$ | No |
    | $4$ | $16$ | $16$ | No: equality |
    | $5$ | $32$ | $25$ | Yes |

    **(b) All remaining cases.** We claim that $P_n$ holds for every $n\ge5$, and prove this by induction starting at $5$.

    The base case $2^5=32>25=5^2$ was checked above.

    Suppose $k\ge5$ and $2^k>k^2$. Then

    $$
    2^{k+1}=2\cdot2^k>2k^2.
    $$

    To obtain the required comparison with $(k+1)^2$, calculate

    $$
    \begin{aligned}
    2k^2-(k+1)^2
    &=k^2-2k-1\\
    &=(k-1)^2-2\\
    &\ge16-2\\
    &=14>0.
    \end{aligned}
    $$

    Thus $2k^2>(k+1)^2$, and consequently

    $$
    2^{k+1}>2k^2>(k+1)^2.
    $$

    This completes the induction. Combining it with the table, the exact set of solutions is

    $$
    \boxed{\{n\in\mathbb N:2^n>n^2\}=\{0,1\}\cup\{n\in\mathbb N:n\ge5\}.}
    $$

    **Why the starting point matters.** The statement is true at $0$ and $1$, then false at $2,3,4$. A few successful small cases do not imply that it remains true thereafter; the induction above establishes the uninterrupted range starting at $5$.

---

- **Problem 3**  
  A snail crawls in the plane at a constant speed and turns $90^\circ$ every 15 minutes, sometimes left and sometimes right. Prove that it can return to its starting point only after an integer number of hours.

  - **Solution 3.1 (Lattice positions and alternating directions)**  
    Assume the constant speed is positive. Let the distance traveled in 15 minutes be one unit. Put the starting point at $(0,0)$ and choose the positive horizontal direction to be the snail's initial direction.

    In each complete 15-minute interval, the snail moves one unit horizontally or vertically. Since every turn is $90^\circ$, the directions alternate:

    ```text
    interval:       1       2       3       4       5       6   ...
    axis of motion: horizontal vertical horizontal vertical horizontal vertical ...
    ```

    Whether each turn is left or right changes the sign of a displacement, but not this alternation.

    **Step 1: a return cannot occur inside a 15-minute interval**

    After each complete interval, the snail is at a point with integer coordinates, since every completed displacement is one of

    $$
    (1,0),\quad(-1,0),\quad(0,1),\quad(0,-1).
    $$

    Suppose it is strictly inside its next interval. It has traveled a fraction $s$ of one unit, where $0<s<1$. Its position therefore has one of the forms

    $$
    (a+s,b),\quad(a-s,b),\quad(a,b+s),\quad(a,b-s),
    $$

    where $a,b$ are integers.

    In each case, the changing coordinate is nonintegral, so the position cannot be $(0,0)$. Hence any positive return time must occur after a whole number $N$ of 15-minute intervals.

    **Step 2: a return requires an even number of moves on each axis**

    Let $H$ and $V$ be the numbers of horizontal and vertical moves among these $N$ intervals.

    To return to the starting point, the number of rightward moves must equal the number of leftward moves. Therefore $H$ is even. Likewise, upward and downward moves must occur equally often, so $V$ is even.

    Because horizontal and vertical intervals alternate, starting with a horizontal one,

    $$
    H=\left\lceil\frac N2\right\rceil,\qquad
    V=\left\lfloor\frac N2\right\rfloor.
    $$

    Thus $H-V$ is either $0$ or $1$. But $H$ and $V$ are both even, so their difference must be even. Consequently $H-V=0$.

    We can therefore write

    $$
    H=V=2m
    $$

    for a positive integer $m$. It follows that

    $$
    N=H+V=4m.
    $$

    The elapsed time is

    $$
    15N=15\cdot4m=60m\text{ minutes}=m\text{ hours}.
    $$

    Therefore

    $$
    \boxed{\text{Every positive return time is an integer number of hours.}}
    $$

    The assertion is a necessary condition, not a promise that every sequence of turns returns. A return after one hour is possible: four left turns trace a unit square. Continuing around that square gives returns at later whole hours as well.

---

- **Problem 4**  
  A language has only two sounds, written `w` and `y`. Two words are considered the same if one can be obtained from the other by a sequence of the following operations:

  - Delete a consecutive occurrence of `wy`.
  - Delete a consecutive occurrence of `yyww`.
  - Insert `yw` at any position.

  Do `ywy` and `wyw` represent the same word?

  - **Solution 4.1 (An invariant of letter counts)**  
    For a word $u$, write $W(u)$ for its number of `w` symbols and $Y(u)$ for its number of `y` symbols. Define

    $$
    D(u)=W(u)-Y(u).
    $$

    We check every allowed operation:

    | Operation | Change in $W$ | Change in $Y$ | Change in $D=W-Y$ |
    | --- | --- | --- | --- |
    | Delete `wy` | $-1$ | $-1$ | $0$ |
    | Delete `yyww` | $-2$ | $-2$ | $0$ |
    | Insert `yw` | $+1$ | $+1$ | $0$ |

    Thus the integer $D$ is unchanged by each operation. By repeatedly applying this observation, it is unchanged by every finite sequence of allowed operations.

    For the first word,

    $$
    W(\texttt{ywy})=1,\qquad Y(\texttt{ywy})=2,
    \qquad D(\texttt{ywy})=-1.
    $$

    For the second,

    $$
    W(\texttt{wyw})=2,\qquad Y(\texttt{wyw})=1,
    \qquad D(\texttt{wyw})=1.
    $$

    The invariant values differ, so no sequence of allowed operations can transform either word into the other. Therefore:

    $$
    \boxed{\texttt{ywy}\text{ and }\texttt{wyw}\text{ do not represent the same word.}}
    $$

    **Why this invariant is useful.** A search through possible insertions has no obvious stopping point. The letter-count difference rules out all sequences at once. Its full integer value is needed here: both $-1$ and $1$ are odd, so parity alone would not distinguish the two words.

---

- **Problem 5**  
  Three grasshoppers occupy three vertices of a square. In a move, one grasshopper jumps to the point symmetric to another grasshopper across the third. A point $A$ is symmetric to $B$ with respect to $C$ when $C$ is the midpoint of the segment $AB$. Can a grasshopper ever land on the fourth vertex?

  - **Solution 5.1 (Coordinate parity classes)**  
    Translate, rotate, and scale the picture so that the three occupied vertices are

    $$
    (0,0),\qquad(1,0),\qquad(0,1),
    $$

    and the initially unoccupied vertex is $(1,1)$. These transformations preserve the midpoint relation.

    If a grasshopper jumps to the reflection of the grasshopper at $B$ across the grasshopper at $C$, its new position is

    $$
    X'=2C-B.
    $$

    Indeed, the midpoint equation is

    $$
    \frac{B+X'}2=C,
    $$

    which gives exactly that formula.

    All coordinates remain integers: they are initially integers, and $2C-B$ has integer coordinates whenever $B$ and $C$ do.

    For an integer point $(x,y)$, record its coordinate parity pair

    $$
    (x\bmod2,\ y\bmod2)\in\{(0,0),(1,0),(0,1),(1,1)\}.
    $$

    Reducing the jump formula coordinatewise modulo $2$ gives

    $$
    X'=2C-B\equiv B\pmod2,
    $$

    because $2C\equiv(0,0)$ and $-B\equiv B\pmod2$.

    **A jump can therefore only create a parity pair already possessed by one of the grasshoppers.** Initially the only available pairs are

    $$
    (0,0),\qquad(1,0),\qquad(0,1).
    $$

    In particular, no grasshopper has both coordinates odd.

    Inductively, suppose no grasshopper has parity pair $(1,1)$ before a move. The jumping grasshopper takes the parity pair of $B$, which is not $(1,1)$, and the other two positions remain unchanged. Thus the property still holds after the move.

    It holds after every finite sequence of moves. But the fourth vertex $(1,1)$ has both coordinates odd, so it can never be occupied:

    $$
    \boxed{\text{No grasshopper can ever land on the fourth vertex.}}
    $$

    **Careful reading of the move.** Under the rule as stated, the moving grasshopper may change its own parity pair to that of another grasshopper. The invariant is the absence of the fourth parity class, not that each named grasshopper retains its original class.

---

- **Problem 6**  
  Knights always tell the truth and liars always lie. A stranger meets three inhabitants and asks each: “How many knights are among you three?” The first answers “none,” and the second answers “one.” What does the third answer?

  - **Solution 6.1 (Determine the types, then what can be said about the answer)**  
    Let $K$ be the actual number of knights among the three.

    **Step 1: the first person is a liar.** If the first person were a knight, the answer “none” would be true, so $K=0$. But that person would already be a knight, contradicting $K=0$.

    Hence the first is a liar. The claim $K=0$ is false, so

    $$
    K\ge1.
    $$

    **Step 2: the second person is a knight.** Suppose instead that the second person were also a liar. Then the answer “one” would be false, giving $K\ne1$.

    But if the first two are liars, only the third could be a knight, so $K\le1$. Combining this with $K\ge1$ yields $K=1$, a contradiction.

    Therefore the second person is a knight, and the statement “one” is true:

    $$
    K=1.
    $$

    **Step 3: the third person is a liar.** The second person already accounts for the unique knight. Therefore the third is a liar.

    The true answer is “one,” so the third person cannot answer “one.” If answers are restricted to the possible counts $0,1,2,3$, any of the other three answers is false and hence compatible with being a liar:

    | Third person's answer | Is it true when $K=1$? | Compatible with a liar? |
    | --- | --- | --- |
    | “None” | No | Yes |
    | “One” | Yes | No |
    | “Two” | No | Yes |
    | “Three” | No | Yes |

    Consequently:

    $$
    \boxed{
    \begin{gathered}
    \text{The types are liar, knight, liar.}\\
    \text{The third person's exact answer is not uniquely determined.}
    \end{gathered}
    }
    $$

    Among the counts $0,1,2,3$, the third may answer $0$, $2$, or $3$, but not $1$. The problem as supplied gives no requirement that all three answers be different, and a liar need not choose one particular false count. Even requiring distinct answers would leave both “two” and “three” possible.

---

- **Problem 7**  
  A machine can cut one piece of paper into either four or six pieces. Starting from one sheet, which numbers of pieces can be obtained?

  - **Solution 7.1 (Changes in the total and constructive sufficiency)**  
    Each operation acts on one current piece. Cutting it into four replaces one piece by four, increasing the total by

    $$
    4-1=3.
    $$

    Cutting it into six increases the total by

    $$
    6-1=5.
    $$

    Thus, after $a$ four-piece cuts and $b$ six-piece cuts, the number of pieces is

    $$
    \boxed{N=1+3a+5b,\qquad a,b\in\mathbb Z_{\ge0}.}
    $$

    Conversely, every such expression is realizable: perform $a$ four-piece cuts and $b$ six-piece cuts, choosing any existing piece at each stage. There is always at least one available piece, and the statement imposes no minimum-size restriction.

    It remains to describe these integers explicitly.

    **Small totals**

    | Total $N$ | Required increment $N-1$ | Reachable? |
    | --- | --- | --- |
    | $1$ | $0$ | Yes: no cuts |
    | $2$ | $1$ | No |
    | $3$ | $2$ | No |
    | $4$ | $3$ | Yes: one four-piece cut |
    | $5$ | $4$ | No |
    | $6$ | $5$ | Yes: one six-piece cut |
    | $7$ | $6$ | Yes: two four-piece cuts |
    | $8$ | $7$ | No |

    To justify the exclusions, the increments $1,2,4,7$ are not nonnegative combinations of $3$ and $5$:

    - For $1$ and $2$, even the smallest positive increment is too large.
    - For $4$, a contribution of $5$ is too large, and $4$ is not a multiple of $3$.
    - For $7$, either no $5$ is used, leaving a non-multiple of $3$, or one $5$ is used, leaving $2$. Two copies of $5$ are already too large.

    **Every total at least nine is reachable**

    Three consecutive starting totals are reachable:

    $$
    9=1+3+5,\qquad
    10=1+3+3+3,\qquad
    11=1+5+5.
    $$

    From any reachable total, one further four-piece cut increases it by $3$. Every integer $N\ge9$ is of exactly one of the forms

    $$
    9+3t,\qquad10+3t,\qquad11+3t,
    \qquad t\in\mathbb Z_{\ge0}.
    $$

    Starting from the corresponding construction and making $t$ additional four-piece cuts therefore realizes $N$.

    The complete answer, allowing zero operations, is

    $$
    \boxed{\{1,4,6,7\}\cup\{N\in\mathbb Z:N\ge9\}.}
    $$

    Equivalently, all positive integers except $2,3,5,8$ are reachable. If at least one cut is required, omit $1$.

    **Common counting mistake.** A cut into four pieces increases the count by three, not four, because the original piece is removed from the count.

---

- **Problem 8**  
  Prove that among any 52 integers there are two whose sum or difference is divisible by 100.

  - **Solution 8.1 (Pigeonhole principle with paired residues)**  
    Every integer has a unique residue modulo $100$ among

    $$
    0,1,2,\ldots,99.
    $$

    Group these residues into the following boxes:

    $$
    \{0\},\qquad\{50\},\qquad
    \{1,99\},\qquad\{2,98\},\qquad\ldots,\qquad\{49,51\}.
    $$

    There are two singleton boxes and 49 paired boxes, for a total of

    $$
    2+49=51.
    $$

    Assign each of the 52 given integers to the box containing its residue. By the pigeonhole principle, two of the integers, say $a$ and $b$, lie in the same box.

    There are two possibilities:

    1. **Their residues are equal.** Then $a\equiv b\pmod{100}$, so
       $$
       a-b\equiv0\pmod{100}.
       $$
       Thus their difference is divisible by $100$. This includes either singleton box and equal residues inside a paired box.

    2. **Their residues differ.** They must be the two residues $r$ and $100-r$ in one paired box, where $1\le r\le49$. Thus
       $$
       a+b\equiv r+(100-r)\equiv0\pmod{100},
       $$
       so their sum is divisible by $100$.

    In either case:

    $$
    \boxed{100\mid(a-b)\quad\text{or}\quad100\mid(a+b).}
    $$

    The two integers refer to two distinct entries in the given collection; their values are allowed to coincide. Equal values already give a difference of zero, which is divisible by $100$. Negative integers cause no difficulty because they have residues modulo $100$ as well.

    **Supplementary observation: 52 is the smallest guaranteed size.** Consider the 51 integers

    $$
    0,1,2,\ldots,50.
    $$

    For two distinct members, the nonzero absolute difference is at most $50$, and their sum is between $1$ and $99$. Neither the sum nor the difference is divisible by $100$. Thus 51 integers do not suffice in general.
