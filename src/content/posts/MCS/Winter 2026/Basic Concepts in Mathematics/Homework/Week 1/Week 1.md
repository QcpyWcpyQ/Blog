---
title: "Week 1"
published: 2026-10-16
description: "Complete solutions on mutilated chessboards, a case-by-case domino proof without coloring, square dissections, and an invariant of repeated differences."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: the supplied Week 1 homework screenshot, containing Problems 1–4. The statements below normalize the wording and mathematical notation. All solutions include the supporting arguments.

## Problem 1: a mutilated $4\times4$ board, without coloring

**Problem.** Prove, with all details, that a $4\times4$ square board with two opposite corner unit squares removed cannot be tiled by dominoes. Use a **case-by-case strategy without coloring**.

**Solution 1.1 (Exhaustive cases and forced placements).**

A domino covers exactly two unit squares sharing a side, either horizontally or vertically. We must cover all remaining squares without gaps or overlaps.

Label a square by $(r,c)$, where rows are numbered from top to bottom and columns from left to right. By rotating the board if necessary, take the removed squares to be $(1,1)$ and $(4,4)$:

```text
          column
          1  2  3  4
row 1     ×  ·  ·  ·
row 2     ·  ·  ·  ·
row 3     ·  ·  ·  ·
row 4     ·  ·  ·  ×
```

Here `×` means a removed square. There are $16-2=14$ squares, so a tiling would contain seven dominoes. This area calculation alone does not rule out a tiling.

We use the following observation: **if an uncovered square has only one available side-sharing neighbor, the domino covering it is forced to cover that neighbor.** If it has none, the tiling is impossible.

The top row contains exactly the three squares $(1,2),(1,3),(1,4)$. A horizontal domino there must cover either the first two or the last two. There cannot be two horizontal dominoes in that row. Thus there are exactly three cases:

1. A horizontal domino covers $(1,2)$ and $(1,3)$.
2. A horizontal domino covers $(1,3)$ and $(1,4)$.
3. There is no horizontal domino in the top row.

### Case 1: the horizontal pair is $(1,2),(1,3)$

Place that domino, and follow the forced choices:

| Step | Square being covered | Forced partner | Why there is no other available neighbor |
| --- | --- | --- | --- |
| 1 | $(1,4)$ | $(2,4)$ | Its left neighbor is already covered; above and right lie outside the board |
| 2 | $(3,4)$ | $(3,3)$ | Its upper neighbor is covered; its lower neighbor is removed; right is outside |
| 3 | $(2,3)$ | $(2,2)$ | Its upper, lower, and right neighbors are covered |
| 4 | $(2,1)$ | $(3,1)$ | Its upper neighbor is removed and its right neighbor is covered; left is outside |
| 5 | $(3,2)$ | $(4,2)$ | Its upper, left, and right neighbors are covered |

After these placements, the board has the following form. Each repeated letter denotes the two squares of one domino; `!` denotes an uncovered square with no available neighbor.

```text
×  A  A  B
E  D  D  B
E  F  C  C
!  F  !  ×
```

The remaining squares are $(4,1)$ and $(4,3)$. They do not share a side, and all their other possible neighbors are covered or absent. Therefore they cannot be covered by a domino. Case 1 is impossible.

### Case 2: the horizontal pair is $(1,3),(1,4)$

Again follow the forced choices:

| Step | Square being covered | Forced partner | Why there is no other available neighbor |
| --- | --- | --- | --- |
| 1 | $(1,2)$ | $(2,2)$ | Its left neighbor is removed and its right neighbor is covered; above is outside |
| 2 | $(2,1)$ | $(3,1)$ | Its upper neighbor is removed and its right neighbor is covered; left is outside |
| 3 | $(4,1)$ | $(4,2)$ | Its upper neighbor is covered; left and below are outside |
| 4 | $(4,3)$ | $(3,3)$ | Its left neighbor is covered and its right neighbor is removed; below is outside |

The resulting partial placement is:

```text
×  B  A  A
C  B  ·  ·
C  !  E  ·
D  D  E  ×
```

Now $(3,2)$ is uncovered, but its four neighbors are all covered:

$$
(2,2),\quad(3,1),\quad(3,3),\quad(4,2).
$$

No domino can cover $(3,2)$. Case 2 is impossible, regardless of how the other uncovered squares might be paired.

### Case 3: no horizontal domino occurs in the top row

Each top-row square must then be covered by a vertical domino. The following three pairs are forced:

$$
\{(1,2),(2,2)\},\qquad
\{(1,3),(2,3)\},\qquad
\{(1,4),(2,4)\}.
$$

Continue:

| Step | Square being covered | Forced partner | Why there is no other available neighbor |
| --- | --- | --- | --- |
| 1 | $(2,1)$ | $(3,1)$ | Its upper neighbor is removed and its right neighbor is covered; left is outside |
| 2 | $(4,1)$ | $(4,2)$ | Its upper neighbor is covered; left and below are outside |
| 3 | $(4,3)$ | $(3,3)$ | Its left neighbor is covered and its right neighbor is removed; below is outside |

This gives:

```text
×  A  B  C
D  A  B  C
D  !  F  !
E  E  F  ×
```

The uncovered square $(3,2)$ has no available neighbor. The same is true of $(3,4)$. Therefore Case 3 is impossible.

The three cases exhaust every possible arrangement in the top row, and each leads to an uncovered square that cannot be covered. Hence:

$$
\boxed{\text{The mutilated }4\times4\text{ board has no domino tiling.}}
$$

This proof uses only adjacency, exhaustive cases, and forced placements. The letters in the diagrams identify dominoes; they are not a coloring argument.

---

## Problem 2: a mutilated $8\times8$ board

**Problem.** Prove that an $8\times8$ square board with two opposite corner unit squares removed cannot be tiled by dominoes. Coloring is allowed.

**Solution 2.1 (Checkerboard coloring).**

Color the board alternately black and white, as on a chessboard. Each row has four squares of each color, so the full board contains

$$
32\text{ black squares and }32\text{ white squares}.
$$

Opposite corner squares have the same color. For example, if $(1,1)$ is black, the square $(r,c)$ is black exactly when $r+c$ is even. Both $1+1=2$ and $8+8=16$ are even, so $(1,1)$ and $(8,8)$ are both black.

Removing them leaves

$$
30\text{ black squares and }32\text{ white squares}.
$$

Every domino covers two side-sharing squares, which necessarily have different colors. Therefore every domino covers exactly one black square and one white square, regardless of its orientation.

Suppose a tiling existed. The remaining board has $64-2=62$ squares, so it would use $31$ dominoes. These would cover exactly $31$ squares of each color, contradicting the actual counts $30$ and $32$.

Thus:

$$
\boxed{\text{The mutilated }8\times8\text{ board has no domino tiling.}}
$$

If the removed opposite corners are white instead, the two counts are interchanged and the same contradiction follows.

**Why area is insufficient.** The area is even, so the number of squares is compatible with dominoes. The obstruction is that each domino uses the colors equally, while the remaining board does not contain equal numbers of the two colors.

---

## Problem 3: dissecting a square into $n$ squares

**Problem.** Show that a square can be cut into exactly $n$ smaller squares for every integer $n>6$.

**Solution 3.1 (Three initial constructions and induction).**

The smaller squares may have different sizes. A dissection means that their interiors do not overlap and their union is the original square. It does not require every cut to go all the way across the original square.

The key operation is:

> Replace one square in a dissection by its four equal quarter-squares, by cutting through the midpoints of its sides in the two perpendicular directions.

One old square is replaced by four new squares, so the number of pieces increases by

$$
4-1=3.
$$

Thus, if a dissection into $k$ squares exists, a dissection into $k+3$ squares also exists.

### Initial construction: seven squares

Divide the original square into four equal squares. Subdivide one of those four into four equal squares. The other three are unchanged, giving

$$
3+4=7
$$

squares in total.

In the diagram below, every letter denotes one square piece; repeated copies of a letter indicate that the same piece spans several small grid cells:

```text
A  B  E  E
C  D  E  E
F  F  G  G
F  F  G  G
```

The pieces $A,B,C,D$ have side length one quarter of the original side; $E,F,G$ have side length one half.

### Initial construction: eight squares

Use a $4\times4$ auxiliary grid. Take the upper-left $3\times3$ block as one large square. The remaining cells are the four cells of the rightmost column and the three additional cells of the bottom row. Keep these seven cells as seven unit squares.

```text
A  A  A  B
A  A  A  C
A  A  A  D
E  F  G  H
```

This is one square of side length three quarters of the original side and seven squares of side length one quarter. The number of pieces is

$$
1+7=8.
$$

The auxiliary grid lines inside $A$ are not cuts. The area check is

$$
\left(\frac34\right)^2+7\left(\frac14\right)^2
=\frac9{16}+\frac7{16}=1.
$$

The placement in the diagram also shows that the pieces cover the original square without overlaps or gaps.

### Initial construction: nine squares

Divide each side into three equal segments and use the resulting $3\times3$ grid:

```text
A  B  C
D  E  F
G  H  I
```

This gives nine equal squares.

### Completing the proof for every $n>6$

The three constructions cover the three possible residues modulo $3$. Every integer $n\ge7$ can be written in exactly one of the forms

$$
n=7+3t,\qquad n=8+3t,\qquad n=9+3t,
$$

where $t$ is a nonnegative integer.

Start with the corresponding seven-, eight-, or nine-square dissection, and apply the quartering operation $t$ times. Each application preserves a valid square dissection and increases the number of pieces by three. The final number is exactly $n$.

Equivalently, use strong induction. The cases $7,8,9$ hold. For any $n\ge10$, we have $7\le n-3<n$; a dissection into $n-3$ squares exists by the induction hypothesis, and quartering one of its pieces produces $n$ squares.

Therefore:

$$
\boxed{\text{For every integer }n>6,\text{ a square admits a dissection into exactly }n\text{ squares.}}
$$

**Why all three initial constructions matter.** Starting only from seven squares and repeatedly adding three gives $7,10,13,\ldots$, but misses integers such as $8$ and $9$. The three base cases ensure that every residue class is covered.

---

## Problem 4: replacing two numbers by their difference

**Problem.** The numbers $1,2,\ldots,101$ are written on a blackboard. You may erase any two numbers and write their difference in their place. After repeating this operation 100 times, only one number remains. Prove that this number cannot be zero.

**Solution 4.1 (Parity of the sum is invariant).**

Let $S$ be the sum of all numbers currently on the board. If two selected numbers are $a$ and $b$ and we replace them by $a-b$, the new sum is

$$
\begin{aligned}
S'
&=S-a-b+(a-b)\\
&=S-2b.
\end{aligned}
$$

Thus $S'$ differs from $S$ by an even integer:

$$
\boxed{S'\equiv S\pmod2.}
$$

If the difference is written in the other order, the new sum is $S-2a$, so the same conclusion holds. If “difference” means the nonnegative difference $|a-b|$, then

$$
S'=S-a-b+|a-b|=S-2\min\{a,b\},
$$

which also preserves parity. The proof therefore works under either convention.

Initially the sum is

$$
S_0=1+2+\cdots+101
=\frac{101\cdot102}{2}
=101\cdot51
=5151.
$$

This number is odd. Since every operation preserves the parity of the sum, the sum remains odd after every operation.

Each operation removes two entries and adds one, decreasing the number of entries by exactly one. Starting with 101 entries, after 100 operations exactly one number, say $z$, remains. At that stage the sum of all entries equals $z$ itself, so

$$
z\equiv5151\equiv1\pmod2.
$$

Hence $z$ is odd. Since zero is even,

$$
\boxed{z\ne0.}
$$

**What is invariant?** The numerical sum need not remain fixed. Its **parity** remains fixed. The final number can depend on the chosen operations, but it must always be odd.
