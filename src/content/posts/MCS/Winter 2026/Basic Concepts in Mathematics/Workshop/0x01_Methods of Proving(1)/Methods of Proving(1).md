---
title: "Methods of Proving(1)"
published: 2026-10-14
description: "Complete parity and invariant proofs for coins, gears, permutations, number operations, domino chains, polygons, and cup flipping."
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Exercise 1**  
  Can $25$ HKD be exchanged for exactly ten coins of denominations $1$, $3$, and $5$ HKD?

  - **Solution 1.1 (Parity of the total)**  
    **No.** Let $x,y,z\in\mathbb{Z}_{\geqslant0}$ be the numbers of $1$-, $3$-, and $5$-HKD coins. Exactly ten coins means
    $$
    x+y+z=10.
    $$
    Their total value is
    $$
    x+3y+5z=(x+y+z)+2y+4z=10+2y+4z,
    $$
    which is even. It therefore cannot equal the odd number $25$.

    **Key idea.** The sum of ten odd denominations is even, regardless of how the denominations are chosen.

---

- **Exercise 2**  
  Nine gears are arranged in a cycle, with each meshing with the next and the ninth meshing with the first. Can all of them rotate? What happens for a cycle of $n$ gears?

  - **Solution 2.1 (Alternating directions)**  
    Use the usual idealized model of **externally meshing gears**: each pair of neighbouring gears must rotate in opposite directions. We ask whether all gears can rotate with nonzero speed.

    Suppose gear $1$ rotates clockwise. Gear $2$ must then rotate anticlockwise, gear $3$ clockwise, and so on. Thus the odd-indexed gears rotate clockwise and the even-indexed gears anticlockwise.

    **If $n$ is odd**, gear $n$ rotates clockwise, just like gear $1$. But these two gears mesh, so they must rotate in opposite directions. This is a contradiction. Choosing the other initial direction gives the same contradiction. In particular, **nine gears cannot all rotate**.

    **If $n$ is even**, gear $n$ rotates anticlockwise, opposite to gear $1$. The alternating assignment is therefore consistent at every contact, including the last-to-first contact. For equal-sized gears, assigning the same nonzero angular speed in these alternating directions gives a compatible motion.

    The conclusion also holds for unequal-sized ideal gears in a given cycle. If gear $i$ has pitch radius $r_i>0$ and signed angular velocity $\omega_i$, the no-slip condition at an external contact is
    $$
    r_i\omega_i=-r_{i+1}\omega_{i+1}.
    $$
    For even $n$, choose a fixed $v>0$ and set
    $$
    \omega_i=(-1)^{i-1}\frac{v}{r_i},\qquad1\leqslant i\leqslant n.
    $$
    Every contact satisfies this condition, including the contact between gears $n$ and $1$.

    Therefore, in this model, **a cycle of gears can rotate with nonzero speeds exactly when $n$ is even**.
    The speed calculation is a supplementary justification that evenness gives a compatible motion, rather than only removing the contradiction for odd cycles.

---

- **Exercise 3**  
  A row contains $100$ distinct towers. A move interchanges any two towers that have exactly one tower between them. Can a sequence of such moves reverse the entire order?

  - **Solution 3.1 (Parity of each tower's position)**  
    **No.** Number the positions $1,2,\ldots,100$ and label each tower by its original position.

    An allowed move swaps the towers at positions $i$ and $i+2$. These positions have the same parity, so each moved tower remains in a position of the same parity as before. The other towers do not move. Consequently, after any sequence of moves, **each tower's position has the same parity as its original position**.

    Reversing the row would send the tower originally in position $i$ to position
    $$
    101-i.
    $$
    Since $101$ is odd, $101-i$ has the opposite parity from $i$. This contradicts the invariant. Hence reversal is impossible.

    **Key idea.** Track the position of an individual tower, not a numerical value assigned to the tower itself.

---

- **Exercise 4**  
  The numbers $1,2,3,4,5,6$ lie on a table. A move adds $1$ to each of any two of them. Can all six numbers eventually become equal?

  - **Solution 4.1 (Parity of the sum)**  
    **No.** Initially the sum is
    $$
    S_0=1+2+3+4+5+6=21.
    $$
    Every move increases the sum by exactly $2$. After $t$ moves,
    $$
    S_t=21+2t,
    $$
    which is always odd.

    If all six numbers became equal to an integer $k$, their sum would be $6k$, which is even. An odd sum cannot equal an even sum, so the target is impossible.

    **Invariant.** The sum itself changes, but its parity does not.

---

- **Exercise 5**  
  All dominoes in a standard set are arranged in one chain, each tile used exactly once, with equal labels at every join. If one exposed end is labelled $5$, what can be at the other exposed end?

  Here the **standard double-six set** has one tile $\{a,b\}$ for each pair $0\leqslant a\leqslant b\leqslant6$, including the doubles. A blank half is labelled $0$.

  - **Solution 5.1 (Pairing equal labels)**  
    The other exposed end must also be **$5$**.

    Fix a label $k\in\{0,1,\ldots,6\}$. There are six non-double tiles containing $k$, one paired with each other label, and the double tile $\{k,k\}$ contains two halves labelled $k$. Thus the entire set has
    $$
    6+2=8
    $$
    halves carrying the label $k$.

    At each internal join of the chain, two halves carrying the same label meet. Thus the internal joins use an even number of occurrences of each label.

    Let $j_k$ be the number of internal joins labelled $k$, and let $e_k$ be the number of exposed ends labelled $k$. Every half belongs either to one internal join or to an exposed end, so
    $$
    8=2j_k+e_k.
    $$
    Therefore $e_k$ is even for every label $k$.

    One exposed end is labelled $5$, so $e_5\geqslant1$. Since there are only two exposed ends in total and $e_5$ is even, we must have $e_5=2$. Hence both ends are labelled $5$.

    **Key idea.** Count occurrences of a label on tile halves. A double contributes two occurrences of its label; its two halves must both be counted.

---

- **Exercise 6**  
  Can a line that passes through no vertex of an $11$-gon intersect all eleven sides?

  - **Solution 6.1 (Alternating sides of the line)**  
    **No.** Let the line be $\ell$ and list the polygon's vertices in cyclic order as
    $$
    v_1,v_2,\ldots,v_{11},\qquad v_{12}=v_1.
    $$
    Since no vertex lies on $\ell$, every vertex lies in exactly one of the two open half-planes determined by $\ell$.

    A segment whose endpoints are not on $\ell$ intersects $\ell$ if and only if its endpoints lie in opposite half-planes. Thus, if every polygon side intersected $\ell$, each consecutive pair $v_i,v_{i+1}$ would have to lie on opposite sides of the line.

    Call the side containing $v_1$ side $L$, and the other side $R$. The vertices would then alternate:
    $$
    v_1\in L,\quad v_2\in R,\quad v_3\in L,\quad\ldots,\quad v_{11}\in L.
    $$
    But now the endpoints of the closing side $v_{11}v_1$ both lie in $L$, so that side cannot intersect $\ell$. This contradicts the assumption that all eleven sides intersect it.

    **General observation.** Walking once around a polygon, every intersected side switches half-planes. Returning to the starting vertex requires an even number of switches. Hence a line avoiding all vertices intersects an even number of polygon sides. This argument does not require the polygon to be convex.

---

- **Exercise 7**  
  Seven cups are initially upside down. A move turns over any two cups simultaneously. Can all seven cups eventually be upright?

  - **Solution 7.1 (Parity of the number of upright cups)**  
    **No.** Let $U$ be the number of upright cups. Initially $U=0$.

    There are three possibilities for a move:

    | Cups selected | Change in $U$ |
    | --- | --- |
    | Two upside-down cups | $+2$ |
    | Two upright cups | $-2$ |
    | One upright and one upside-down cup | $0$ |

    Every change is even, so the parity of $U$ is preserved. Starting from $U=0$, the number of upright cups is therefore always even.

    If all seven cups were upright, we would have $U=7$, which is odd. This is impossible.
