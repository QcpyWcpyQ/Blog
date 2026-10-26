---
title: "Methods of Proving(3)"
published: 2026-10-26
description: "Invariants, method of the extreme"
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Invariants

- **Problem 1 (Changing signs in rows and columns)**  
  Consider a $4\times4$ array whose entries are plus and minus signs. Initially, exactly one entry is a minus sign, for example
  $$
  \begin{pmatrix}
  +&+&+&+\\
  +&+&-&+\\
  +&+&+&+\\
  +&+&+&+
  \end{pmatrix}.
  $$
  In one operation, we may choose a row or a column and reverse all four signs in it. Can we obtain an array containing only plus signs?

  - **Idea 1.1 (Invariant)**  
    Consider the parity of the number of minus signs. Every operation changes the number of minus signs by an even number, so its parity is preserved.

  - **Proof 1.2**  
    Suppose the selected row or column contains $k$ minus signs, where $0\leqslant k\leqslant4$. It therefore contains $4-k$ plus signs.

    After reversing all four signs, the $k$ minus signs become plus signs and the $4-k$ plus signs become minus signs. If the array contains $N$ minus signs before the operation, it contains
    $$
    N-k+(4-k)=N+4-2k
    $$
    minus signs afterwards. Thus the number of minus signs changes by
    $$
    4-2k,
    $$
    which is even. Therefore the parity of the number of minus signs is invariant.

    Initially there is exactly one minus sign, so the number of minus signs is odd. An array containing only plus signs has zero minus signs, which is even. Since the parity cannot change, it is impossible to obtain an array containing only plus signs.

---

- **Problem 2**  
    A tree grow bananas and pineapples. In ine move it is allowed to pick two fruits from it. If two bananas or two pineapples are picked, then one more pineapple grows. If one banana and one pineapple are picked, then one more banana grows. In the end there remains one fruit. Which fruit is it if we started with $100$ bananas and $99$ pineapples?
    
    - **Idea 2.1 (Invariant)**  
        Consider the parity of the number of bananas. None of the three possible operations changes this parity.
    
    - **Proof 2.2**  
        Let $B$ denote the number of bananas. There are three possible operations.
    
        1. If two bananas are picked, then one pineapple grows, so $B$ decreases by $2$.
        2. If two pineapples are picked, then one pineapple grows, so $B$ does not change.
        3. If one banana and one pineapple are picked, then one banana grows, so $B$ does not change.
    
        In every case, the parity of $B$ is preserved. Initially, $B=100$, which is even. If the final fruit were a banana, then $B=1$, which would be odd. This is impossible because the parity of $B$ cannot change. Therefore, the final fruit is a pineapple.

---

- **Problem 3**  
    On an island, there are chameleons of three colors: $13$ gray, $15$ brown, and $17$ pink. Whenever two chameleons of different colors meet, they both change to the third color. Is it possible that, at some moment, all the chameleons have the same color?

    - **Idea 3.1 (Invariant)**  
        Consider the difference between the numbers of gray and brown chameleons modulo $3$. Every possible meeting preserves this value.

    - **Proof 3.2**  
        Let $G$, $B$, and $P$ denote the numbers of gray, brown, and pink chameleons, respectively. Consider the value of $G-B$ modulo $3$. There are three possible types of meeting.

        1. If a gray and a brown chameleon meet, they both become pink. Thus
           $$
           (G,B,P)\longmapsto(G-1,B-1,P+2),
           $$
           so $G-B$ does not change.
        2. If a gray and a pink chameleon meet, they both become brown. Thus
           $$
           (G,B,P)\longmapsto(G-1,B+2,P-1),
           $$
           so $G-B$ decreases by $3$.
        3. If a brown and a pink chameleon meet, they both become gray. Thus
           $$
           (G,B,P)\longmapsto(G+2,B-1,P-1),
           $$
           so $G-B$ increases by $3$.

        Therefore, $G-B\pmod 3$ is invariant. Initially,
        $$
        G-B=13-15=-2\equiv1\pmod 3.
        $$

        The total number of chameleons is
        $$
        13+15+17=45.
        $$
        If all the chameleons eventually had the same color, then $(G,B,P)$ would be one of
        $$
        (45,0,0),\qquad(0,45,0),\qquad(0,0,45).
        $$
        In these three cases, $G-B$ would be $45$, $-45$, or $0$, all of which are congruent to $0$ modulo $3$. This contradicts the invariant $G-B\equiv1\pmod 3$. Hence, it is impossible for all the chameleons to become the same color.

---

- **Problem 4**  
    On a straight line, there are two chips, one red and one black. The following two operations are allowed.

    1. Insert two chips of the same color between any two neighbouring chips or at either end of the line.
    2. Remove two neighbouring chips of the same color.

    Is it possible to use these operations to swap the two initial chips?

    - **Idea 4.1 (Invariant)**  
        Consider the number of pairs consisting of a red chip and a black chip in which the red chip lies to the left of the black chip. The parity of this number is invariant.

    - **Proof 4.2**  
        Let $N$ be the number of pairs consisting of a red chip and a black chip in which the red chip lies to the left of the black chip.

        Suppose that two red chips are inserted at some position, and that there are $k$ black chips to the right of this position. Each new red chip forms a pair with each of these $k$ black chips, so $N$ increases by $2k$.

        Similarly, suppose that two black chips are inserted at some position, and that there are $k$ red chips to the left of this position. Each new black chip forms a pair with each of these $k$ red chips, so $N$ again increases by $2k$.

        Removing two neighbouring chips of the same color reverses one of these insertions, so it decreases $N$ by an even number. Therefore, every allowed operation preserves the parity of $N$.

        Initially, the red chip lies to the left of the black chip, so $N=1$, which is odd. If the two chips were swapped, the black chip would lie to the left of the red chip, so $N=0$, which is even. Since the parity of $N$ cannot change, it is impossible to swap the two initial chips.

---

- **Problem 5**  
    The plane is divided by $N\geqslant3$ lines in general position. Prove that, for each line, there is a triangular region adjacent to that line.

    - **Idea 5.1 (Extreme principle)**  
        Fix one of the lines. Among all intersection points of the other lines, choose one whose distance from the fixed line is minimal.

    - **Proof 5.2**  
        Fix one of the lines and denote it by $L$. Among all intersection points formed by the remaining lines, choose a point $X$ whose distance from $L$ is minimal. Let $\alpha$ and $\beta$ be the two lines that intersect at $X$. Since the lines are in general position, both $\alpha$ and $\beta$ intersect $L$. Denote these intersection points by
        $$
        A=L\cap\alpha
        \qquad\text{and}\qquad
        B=L\cap\beta.
        $$
        Thus, $L$, $\alpha$, and $\beta$ form the triangle $ABX$.

        Suppose that another line $M$ intersects the interior of $ABX$. As $M$ passes through the triangle, it must intersect at least one of the sides $AX$ or $BX$. Hence, $M$ intersects either $\alpha$ or $\beta$ at a point $Y$ lying strictly between $L$ and $X$. It follows that
        $$
        \operatorname{dist}(Y,L)<\operatorname{dist}(X,L).
        $$
        However, $Y$ is an intersection point of two lines different from $L$, contradicting the choice of $X$.

        Therefore, no other line intersects the interior of $ABX$. Hence, $ABX$ is a triangular region adjacent to $L$. Since $L$ was arbitrary, every line has such an adjacent triangular region.

---

- **Problem 6**  
    Prove that, in every convex polyhedron, there are two faces with the same number of edges.

    - **Idea 6.1 (Pigeonhole principle)**  
        If the polyhedron has $F$ faces, then each face has at least $3$ and at most $F-1$ edges. There are fewer possible numbers of edges than there are faces.

    - **Proof 6.2**  
        Let the polyhedron have $F$ faces. Every face is a polygon, so it has at least $3$ edges.

        Consider a face with $k$ edges. Each of its edges is shared with another face. Moreover, distinct edges of this face are shared with distinct neighbouring faces, because two distinct faces of a convex polyhedron cannot share more than one edge. Therefore, this face has $k$ distinct neighbouring faces. Since there are only $F-1$ other faces, we have
        $$
        k\leqslant F-1.
        $$

        Consequently, the number of edges of any face must be one of
        $$
        3,4,\ldots,F-1.
        $$
        There are only $F-3$ possible values in this list, but there are $F$ faces. By the pigeonhole principle, at least two faces have the same number of edges.

---

- **Problem 7**  
    A number is written in each square of a chessboard. Each number is equal to the arithmetic mean of the numbers in its neighbouring squares. Prove that all the numbers are equal.

    - **Idea 7.1 (Extreme principle)**  
        Choose a square containing the largest number. Since this number is the average of its neighbours and none of them is larger, every neighbouring square must contain the same number.

    - **Proof 7.2**  
        Let $M$ be the largest number written on the chessboard, and choose a square containing $M$. Suppose that its neighbouring squares contain the numbers
        $$
        a_1,a_2,\ldots,a_k.
        $$
        By the definition of $M$, we have $a_i\leqslant M$ for every $i$. On the other hand, the condition in the problem gives
        $$
        M=\frac{a_1+a_2+\cdots+a_k}{k}.
        $$
        If some $a_i$ were strictly smaller than $M$, then the average of the $a_i$ would also be strictly smaller than $M$. Therefore,
        $$
        a_1=a_2=\cdots=a_k=M.
        $$

        Thus, every neighbour of a square containing $M$ also contains $M$. Starting from the chosen square and repeatedly moving to neighbouring squares, we can reach every square of the chessboard. Hence, every square contains $M$, so all the numbers are equal.

---

- **Problem 8**  
    Prove that, for every $n\geqslant2$,
    $$
    \sum_{i=1}^n\frac{1}{i}
    $$
    is not an integer.

    - **Idea 8.1 (Largest power of two)**  
        Choose the largest power of $2$ not exceeding $n$ and write the sum over a common denominator. Exactly one term contributes an odd numerator.

    - **Proof 8.2**  
        Let $2^m$ be the largest power of $2$ such that $2^m\leqslant n$. Then
        $$
        2^m\leqslant n<2^{m+1}.
        $$
        Let
        $$
        L=\operatorname{lcm}(1,2,\ldots,n).
        $$
        Since $2^m\leqslant n<2^{m+1}$, the largest power of $2$ dividing $L$ is exactly $2^m$.

        Writing the sum over the common denominator $L$ gives
        $$
        \sum_{i=1}^n\frac{1}{i}
        =\frac{\displaystyle\sum_{i=1}^n\frac{L}{i}}{L}.
        $$
        For $i=2^m$, the integer $L/i=L/2^m$ is odd. If $i\neq2^m$, then $i$ is not divisible by $2^m$, because $2^{m+1}>n$. Thus, the highest power of $2$ dividing $i$ is at most $2^{m-1}$, and consequently $L/i$ is even.

        Therefore, the numerator
        $$
        \sum_{i=1}^n\frac{L}{i}
        $$
        is the sum of one odd integer and several even integers, so it is odd. However, $L$ is even. Hence, $L$ cannot divide the numerator, and the original sum is not an integer.
