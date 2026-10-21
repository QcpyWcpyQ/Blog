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
    Is it possible to connect five cities by roads so that each city is connected with exactly three other cities?

    - **Solution 1.1**  
        No. Let $R$ be the number of roads. Assume that this is possible. Note that the sum of the numbers of connections of all cities counts each road twice. That is,  
        $$
        R=\dfrac{c_1+c_2+c_3+c_4+c_5}{2}
        $$
        where $c_i$ is the number of connections of city $i$. Then $2R=c_1+c_2+c_3+c_4+c_5=15$. This is a contradiction: $2R=15$, but $2R$ is even and $15$ is odd. Therefore, it is not possible.

---

- **Exercise 2**  
    Prove that there does not exist a polyhedron whose number of faces is odd such that each face has an odd number of vertices.

    - **Solution 2.1**  
        Let $n$ be the number of faces. Enumerate the faces from $1$ to $n$. Let $v_i$ be the number of vertices of face $i$. Let $e_i$ be the number of edges of face $i$. Let $E$ be the total number of edges of the polyhedron. Note that each edge is in exactly two faces. Then $e_1+e_2+\cdots +e_n=2E$. On the other hand, the number of edges in a face is equal to the number of vertices, that is, $\forall i,e_i=v_i$. Then we have  
        $$
        2E=\sum_{i=1}^ne_i=\sum_{i=1}^n v_i.
        $$
        Since $n$ is odd and $v_i$ is odd, $\sum_{i=1}^n v_i$ is odd. Then $2E$ is odd. This is a contradiction.  

---

- **Exercise 3**  
    A class contains $25$ students. It is known that among $3$ students, $2$ of them are friends. Show that there is a student with at least $12$ friends.

    - **Solution 3.1**  
        Case 1: All students are friends. Then each student has $24$ friends.  
        Case 2: There are two students $x$ and $y$ such that $x$ is not a friend of $y$. Let $H$ consist of all students different from $x$ and $y$. Then $\#H=23$. Let $F_x=\left\{z\in H:z\text{ is a friend of }x\right\}$ and $F_y=\left\{z\in H:z\text{ is a friend of }y\right\}$. Note that $H=F_x\cup F_y$. Indeed, let $z\in H$. Then $z$ is a friend of $x$ or $z$ is a friend of $y$ since among $3$ students, $2$ of them are friends and $x$ is not a friend of $y$. Then $z\in F_x$ or $z\in F_y$ and then $z\in F_x\cup F_y$. Then we have  
        $$
        \# H=\#(F_x\cup F_y)\leqslant \#F_x+\# F_y.
        $$
        Suppose $\#F_x<12$ and $\# F_y<12$. Then $23=\# H\leqslant \#F_x+\# F_y=22$, which is a contradiction. Therefore, $\#F_x\geqslant 12$ or $\# F_y\geqslant 12$.

---

- **Exercise 4**  
    In each cell of an $m\times k$ rectangular array, there is a number. The sum of the numbers in each row and column is $1$. Show that $m=k$.

    - **Solution 4.1**  
        Let $R_i$ be the sum of all numbers in row $i$ and $C_j$ be the sum of all numbers in column $j$. Then the sum of all the numbers in the array is $\sum_{i=1}^m r_i=\sum_{j=1}^kc_j$. Then  
        $$
        m=\sum_{i=1}^m1=\sum_{i=1}^mr_i=\sum_{j=1}^kc_j=\sum_{j=1}^k1=k.
        $$