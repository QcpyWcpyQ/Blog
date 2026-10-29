---
title: "Week 3"
published: 2026-10-28
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Problem 1**
  A football fan drew the positions of the players on a football field at the beginning of the first and the second halves. It turned out that some players had exchanged places, while the others remained in their positions. At the same time, the distance between any two players did not increase. Prove that all these distances in fact remained the same.

  - **Solution 1.1**
    Let the original positions be $P_1,P_2,\ldots,P_n$. Since the players only exchange positions, there is a permutation $\sigma$ such that the player who originally occupied $P_i$ occupies $P_{\sigma(i)}$ at the beginning of the second half.

    For every pair $i<j$, the hypothesis gives
    $$
    d(P_{\sigma(i)},P_{\sigma(j)})
    \leqslant
    d(P_i,P_j).
    $$
    Sum these inequalities over all pairs $1\leqslant i<j\leqslant n$. Because $\sigma$ is a permutation, the unordered pairs
    $$
    \{\sigma(i),\sigma(j)\}
    $$
    run through exactly the same collection of pairs as $\{i,j\}$. Therefore,
    $$
    \sum_{1\leqslant i<j\leqslant n}
    d(P_{\sigma(i)},P_{\sigma(j)})
    =
    \sum_{1\leqslant i<j\leqslant n}
    d(P_i,P_j).
    $$
    The sum of the distances did not change. Since no individual distance increased, no individual distance can have decreased either; otherwise the sum would be strictly smaller. Hence every distance remained the same.

---

- **Problem 2**
  A traveller leaves his home city $A$ and goes to the city $B$ in his country that is farthest from $A$. From that city he goes to the city $C$ farthest from his current city $B$, and so on. Prove that if the city $C$ does not coincide with $A$, then the traveller will never return home. Distances between cities are assumed to be distinct.

  - **Solution 2.1**
    Let the successive cities be
    $$
    X_0=A,\qquad X_1=B,\qquad X_2=C,\qquad\ldots,
    $$
    and define
    $$
    d_k=d(X_k,X_{k+1}).
    $$
    When the traveller is at $X_{k+1}$, the previous city $X_k$ is one of the possible destinations. Since $X_{k+2}$ is chosen to be farthest from $X_{k+1}$,
    $$
    d_{k+1}
    =d(X_{k+1},X_{k+2})
    \geqslant
    d(X_{k+1},X_k)
    =d_k.
    $$
    Thus the successive travel distances are nondecreasing.

    Since $C\neq A$ and all distances between cities are distinct, the choice of $C$ as the farthest city from $B$ gives
    $$
    d_1=d(B,C)>d(B,A)=d_0.
    $$

    Suppose that the traveller later returns to $A$, so $X_m=A$ for some $m\geqslant2$. Because $B$ was chosen as the farthest city from $A$,
    $$
    d_{m-1}
    =d(X_{m-1},A)
    \leqslant
    d(B,A)
    =d_0.
    $$
    On the other hand, the nondecreasing property gives
    $$
    d_{m-1}\geqslant d_1>d_0,
    $$
    which is a contradiction. Therefore, the traveller can never return to $A$.

---

- **Problem 3**
  One of the heads of a hundred-headed dragon wants to arrange his heads so that each head lies strictly between two others. Can he do it? You may regard the heads as points in the plane.

  - **Solution 3.1**
    No. Regard the heads as a finite set of points in $\mathbb R^2$. Choose a point $P$ whose first coordinate is maximal. Among all such points, choose $P$ so that its second coordinate is maximal.

    Suppose that $P$ lies strictly between two other points $Q$ and $R$. Then, for some $t$ with $0<t<1$,
    $$
    P=(1-t)Q+tR.
    $$
    Both $Q$ and $R$ have first coordinate at most that of $P$. Since the first coordinate of $P$ is a strict convex combination of their first coordinates and is maximal, both must have the same first coordinate as $P$.

    Now $Q$ and $R$ belong to the set of points tied for the maximal first coordinate. Applying the same argument to the second coordinate shows that both have the same second coordinate as $P$.

    Hence
    $$
    Q=P=R,
    $$
    contradicting the requirement that $P$ lie strictly between two other heads. Therefore, no such arrangement is possible.
