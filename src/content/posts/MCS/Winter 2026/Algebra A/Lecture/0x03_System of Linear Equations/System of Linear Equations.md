---
title: "System of Linear Equations"
published: 2026-10-19
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Description 1**  
    Let $\mathbb F$ be a field. Given $a_1,a_2\cdots,a_n,b\in\mathbb F$, the expression  
    $$
    a_1x_1+a_2x_2+\cdots a_nx_n=b
    $$
    is a linear equation (eqn) in the unknowns $x_1,x_2\cdots,x_n$. A solution of this equation is an n-tuple  
    $$
    \left(\alpha_1,\alpha_2,\cdots,\alpha_n\right)\in\mathbb F^n=\mathbb F\times\mathbb F\times \cdots\times \mathbb F
    $$
    such that $a_1\alpha_1+a_2\alpha_2+\cdots + a_n\alpha _n=b$.

    A system of linear eqns in the unknowns $x_1,x_2,\cdots x_n$ is a finite set of linear eqns in $x_1,x_2,\cdots,x_n$. We write it as  
    $$
    (\#)\begin{cases}
    
    a_{11}x_1+a_{12}x_2+\cdots + a_{1n}x_n=b_1  \\
    a_{21}x_1+a_{22}x_2+\cdots + a_{2n}x_n=b_2  \\
    \vdots \\
    a_{m1}x_1+a_{m2}x_2+\cdots + a_{mn}x_n=b_m  
    
    
    \end{cases}.
    $$
    A solution of $(\#)$ is $\left(\alpha_1,\alpha_2,\cdots,\alpha_n\right)\in\mathbb F^n$ that satisfies all the individual eqns of $(\#)$ simultaneously.

    - **Example 1.1**  
        $$
        (1)\ x_1+2x_2=1.
        $$
        

        Then $(1,0),\left(\frac 12,\frac 14\right)$ are solutions.  
        $$
        (2)\ x_1+x_2=1.
        $$
        Then $(1,0),(0,1)$ are solutions. Then we have  
        $$
        \begin{cases}
        x_1+2x_2=1 \\
        x_1+x_2=1
        \end{cases}
        $$
        In this case, the system has the solution $(1,0)$.  
        $$
        (3)\ 2x_1+4x_2=3.
        $$
        Then $\left(\frac 32,0\right)$ is a solution. But  
        $$
        \begin{cases}
        x_1+2x_2=1 \\
        2x_1+4x_2=3
        \end{cases}
        $$
        has no solutions, since if $\alpha_1+2\alpha_2=1$ then $2\alpha_1+4\alpha_2=2\neq 3$.

    - **Example 1.2**  

        1. A single linear eqn with nonzero coefficient always has a solution.  
        2. A system with at least two eqns may not have a solution.
        3. A system with $b_1=b_2=\cdots=b_m=0$ always has a solution, namely $(0,0,\cdots,0)$ which is a trivial solution.

    - **Example 1.3**  
        Consider  
        $$
        \begin{cases}
        
        2x_1-x_2=-1 \\
        x_1+x_2=2
        
        \end{cases}
        $$

        - **Solution 1.3.1**  
            $$
            \begin{aligned}
            
            \begin{cases}
            
            2x_1-x_2=-1 \\
            x_1+x_2=2
            
            \end{cases} & \iff \begin{cases}
            
            2x_1-x_2=-1 \\
            \left(x_1+x_2\right)+\left(2x_1-x_2\right)=1
            
            \end{cases} \\&\iff
            
            \begin{cases}
            
            2x_1-x_2=-1 \\
            3x_1=1
            
            \end{cases} \\ &\iff
            
            \begin{cases}
            
            x_1=\frac 13 \\
            x_2=\frac 53
            
            \end{cases} 
            
            \end{aligned}
            $$

---

- **Definition 2**  
    Given eqns $\operatorname{eqn}_1,\operatorname{eqn}_2,\cdots,\operatorname{eqn}_m$, a linear combination of them is an equation of the form  
    $$
    c_1\operatorname{eqn}_1+c_2\operatorname{eqn}_2+\cdots+c_m\operatorname{eqn}_m
    $$
    for some $c_1,c_2\cdots,c_m\in\mathbb F$.

    - **Example 2.1**  
        Given a system such as $(\#)$, the corresponding linear combination is  
        $$
        c_1\left(a_{11}x_1+a_{12}x_2+\cdots+a_{1n}x_n\right)+c_2\left(a_{21}x_1+a_{22}x_2+\cdots+a_{2n}x_n\right)+\cdots+c_m\left(a_{m1}x_1+a_{m2}x_2+\cdots+a_{mn}x_n\right)
        $$
        and it can be rewritten as  
        $$
        \left(c_1a_{11}+c_2a_{21}+\cdots+c_m a_{m1}\right)x_1+\left(c_1a_{12}+c_2a_{22}+\cdots+c_m a_{m2}\right)x_2+\cdots+\left(c_1a_{1n}+c_2a_{2n}+\cdots+c_m a_{mn}\right)x_n.
        $$

---

- **Definition 3**  
    Two systems of linear eqns in the same unknowns are said to be equivalent if every eqn of one of them is a linear combination of the eqns of the other one.

    - **Example 3.1**  
        $$
        \begin{cases}
        
        2x_1-x_2=-1 \\
        x_1+x_2=2
        
        \end{cases}
        $$
        is equivalent to  
        $$
        \begin{cases}
        
        2x_1-x_2=-1 \\
        3x_1=1
        
        \end{cases}
        $$
        but is not equivalent to  
        $$
        \begin{cases}
        
        2x_1-x_2=-1 \\
        4x_1-2x_2=-2
        
        \end{cases}.
        $$

---

- **Theorem 4**  
    Equivalent systems have the same solutions.

    - **Proof 4.1**  
        Let $\overline{\operatorname{eqn}_i}$ be an equation of the second system. Then $\overline{\operatorname{eqn}_i}=c_1\operatorname{eqn}_1+c_2\operatorname{eqn}_2+\cdots+c_m\operatorname{eqn}_m$.  
        If $\left(\alpha_1,\alpha_2,\cdots,\alpha_n\right)$ is a solution of all $\operatorname{eqn}_i$, then it is a solution of $\overline{\operatorname{eqn}_i}$. Similarly, every solution of the second system is a solution of the first one.

    How can we conveniently write a system such as $(\#)$? The system $(\#)$ can be written as  
    $$
    \begin{pmatrix}
    
    a_{11}&a_{12}&\cdots &a_{1n} \\
    a_{21}&a_{22}&\cdots &a_{2n} \\
    \vdots&\vdots&\ddots &\vdots \\
    a_{m1}&a_{m2}&\cdots &a_{mn}
    
    \end{pmatrix}\begin{pmatrix}
    
    x_1 \\x_2\\ \vdots \\ x_n
    
    \end{pmatrix}=\begin{pmatrix}
    
    b_1 \\b_2\\ \vdots \\ b_m
    
    \end{pmatrix}\implies AX=b.
    $$

    - **Notation 4.2**  
        $AX=0$ is a homogeneous system. $AX\neq 0$ is a non-homogeneous system.

---

- **Elementary row operations 5**  
    Given $AX=b$ we consider the augmented matrix $\begin{pmatrix}A\mid b\end{pmatrix}$ and we will convert it to $\begin{pmatrix}A^\prime\mid b^\prime\end{pmatrix}$ such that the systems $AX=b$ and $A^\prime X=b^\prime$ are equivalent and $A^\prime X=b^\prime$ is easier to solve.  
    We consider three types of elementary row operations on a matrix.  

    1. Multiply a row by $0\neq\lambda\in\mathbb F$.
    2. Replace row $r$ by itself plus a multiple of another row.
    3. Interchange two rows.

    If $e$ is an elementary operation, its effect on $A$ is $e(A)$.

    1. $e$ multiplies row $r$ by $\lambda\neq 0$: $e(A)_{ij}=A_{ij}$ if $i\neq r$, $e(A)_{rj}=\lambda A_{rj}$.
    2. $e$ replaces row $r$ by itself plus $\lambda$ times row $s\neq r$: $e(A)_{ij}=A_{ij}$, if $i\neq r$, $e(A)_{rj}= A_{rj}+\lambda A_{sj}$.
    3. $e$ interchanges rows $r$ and $s$, $r\neq s$: $e(A)_{ij}=A_{ij}$, if $i\neq r$, $i\neq s$, $e(A)_{rj}=A_{sj}$ and $e(A)_{sj}=A_{rj}$.

---

- **Theorem 6**  
    For each elementary row operation $e$, there exists an elementary row operation $e^\prime$ of the same type such that $e^\prime\left(e\left(A\right)\right)=A$ and $e\left(e^\prime\left(A\right)\right)=A$.
    - **Proof 6.1**

        Write $R_i$ for row $i$ of $A$. We consider the three types of elementary row operations separately.

        **1. Multiplying a row by a nonzero scalar.** Suppose $e$ replaces $R_r$ by $\lambda R_r$, where $\lambda\neq0$. Since $\mathbb F$ is a field, $\lambda^{-1}$ exists and is nonzero. Let $e^\prime$ multiply row $r$ by $\lambda^{-1}$. Then
        $$
        \lambda^{-1}(\lambda R_r)=R_r,
        \qquad
        \lambda(\lambda^{-1}R_r)=R_r.
        $$
        All other rows are unchanged, so both compositions return $A$.

        **2. Adding a multiple of another row.** Suppose $e$ replaces $R_r$ by $R_r+\lambda R_s$, where $r\neq s$. Let $e^\prime$ replace row $r$ by itself minus $\lambda$ times row $s$. This is an elementary row operation of the same type, with coefficient $-\lambda$. Row $s$ is unchanged by both operations, so
        $$
        (R_r+\lambda R_s)-\lambda R_s=R_r,
        \qquad
        (R_r-\lambda R_s)+\lambda R_s=R_r.
        $$
        Every row other than row $r$ is unchanged. Thus both compositions return $A$.

        **3. Interchanging two rows.** Suppose $e$ interchanges rows $r$ and $s$. Take $e^\prime=e$. Interchanging the same two rows twice restores both to their original positions, while every other row remains unchanged.

        In each case, $e^\prime$ is an elementary row operation of the same type as $e$, and
        $$
        e^\prime(e(A))=A,\qquad e(e^\prime(A))=A.
        $$
        This proves the theorem.

---

- **Definition 7**  
    Two matrices $M,M^\prime\in M_{m\times n}(\mathbb F)$ are row-equivalent if each can be obtained from the other by a finite sequence of elementary row operations.

    - **Remark 7.1**  
        It follows from the theorem that if two systems $AX=b$ and $A^\prime X=b^\prime$ are such that $\begin{pmatrix}A\mid b\end{pmatrix}$ and $\begin{pmatrix}A^\prime\mid b^\prime\end{pmatrix}$ are row-equivalent, then they have exactly the same solutions. In $e(M)$, every row is a linear combination of the rows of $M$.

    - **Example 7.2**  
        $$
        \begin{aligned}
        
        \begin{cases}
        
        x_1+x_2+x_3+x_4=1 \\
        2x_1+x_3-x_4=0 \\
        x_1-x_2-2x_4=-1 \\
        x_1+2x_4=1
        
        \end{cases}&\implies 
        \left(
        \begin{array}{cccc|c}
        1&1&1&1&1 \\
        2&0&1&-1&0 \\
        1&-1&0&-2&-1 \\
        1&0&0&2&1
        \end{array}
        \right) \\&\implies
        
        \left(
        \begin{array}{cccc|c}
        1&1&1&1&1 \\
        0&-2&-1&-3&-2 \\
        0&0&0&0&0 \\
        0&1&1&-1&0
        \end{array}
        \right) \\&\implies
        
        \left(
        \begin{array}{cccc|c}
        1&0&0&2&1 \\
        0&0&1&-5&-2 \\
        0&1&1&-1&0 \\
        0&0&0&0&0 \\
        \end{array}
        \right) \\&\implies
        
        \left(
        \begin{array}{cccc|c}
        1&0&0&2&1 \\
        0&1&1&-1&0 \\
        0&0&1&-5&-2 \\
        0&0&0&0&0 \\
        \end{array}
        \right) \\ &\implies
        
        \left(
        \begin{array}{cccc|c}
        1&0&0&2&1 \\
        0&1&0&4&2 \\
        0&0&1&-5&-2 \\
        0&0&0&0&0 \\
        \end{array}
        \right)
        
        \end{aligned}
        $$
        

        Therefore  
        $$
        \begin{cases}
        
        x_1+2x_4=1 \\
        x_2+4x_4=2 \\
        x_3-5x_4=-2
        
        \end{cases}\implies \begin{cases}x_1=1-2x_4\\x_2=2-4x_4\\x_3=-2+5x_4\end{cases}
        $$
        So the solution is  
        $$
        \left\{(1-2t,2-4t,-2+5t,t):t\in\mathbb F\right\}=\left\{(1,2,-2,0)+t(-2,-4,5,1):t\in\mathbb F\right\}.
        $$