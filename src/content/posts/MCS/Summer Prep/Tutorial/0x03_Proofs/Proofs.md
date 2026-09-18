---
title: "Proofs"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Proofs

- **Exercise 1**  
  Let $a, b \in \mathbb{R}$ that satisfy $a+b=10$. Prove that $ab\leqslant 25$ or $a^2+b^2<10$.      

  - **Solution 1.1**  
    Suppose $a, b \in \mathbb{R}$ satisfy $a+b=10$, then $a=10-b$, and we have       
    $$
    \begin{aligned}       
    ab &= (10-b)b \\       
    &= 10b-b^2 \\       
    &= -(b^2-10b) \\       
    &= -(b^2-10b+25)+25 \\       
    &= -(b-5)^2+25 \\       
    &\leqslant 25.       
    \end{aligned}
    $$
    So $ab\leqslant 25$, then $ab\leqslant 25$ or $a^2+b^2<10$.    

---

- **Exercise 2**  
  Prove that $\left(\forall x\right)P(x) \lor \left(\forall x\right)Q(x)\implies \left(\forall x\right)\left( P(x)\lor Q(x)\right)$ and refute the converse implication.      
  - **Solution 2.1**  
    Suppose $(\forall x)P(x) \lor (\forall x) Q(x)$ is true, then $(\forall x)P(x)$ is true or $(\forall x)Q(x)$ is true.       
    Suppose $(\forall x)P(x)$ is true, then $\forall x, P(x)$ is true, then $\forall x, P(x)\lor Q(x)$ is true and then $\forall x, (P(x)\lor Q(x))$ is true.       
    To check that the converse is false, consider $P(x): x\text{ is even}, Q(x): x\text{ is odd}$.

---

- **Exercise 3**  
  Proof: $P\land\left(Q\lor R\right)\equiv\left(P\land Q\right)\lor\left(P\land R\right)$      

  - **Solution 3.1**  
    We want to prove $\forall a,b,c\in\mathbb R,\min\{a,\max\{b,c\}\}=\max\{\min\{a,b\},\min\{a,c\}\}$. Let       
    $$
    \begin{aligned}              
    M_1 &:= \min\{a,\max\{b,c\}\}. \\       
    M_2 &:= \max\{\min\{a,b\},\min\{a,c\}\}  .            
    \end{aligned}
    $$
    we want to prove $M_1\leqslant M_2$ and $M_2\leqslant M_1$.        
    For the case $M_1\leqslant M_2$, by the definition of $\min$ and $\max$       
    $$
    \begin{aligned}              
    &M_1 \leqslant a \land M_1 \leqslant \max\{b,c\} \\       
    \implies& M_1 \leqslant a \land \left(M_1 \leqslant b \lor M_1 \leqslant c\right) \\       
    \implies& \left(M_1 \leqslant a \land M_1 \leqslant b\right) \lor \left(M_1 \leqslant a \land M_1 \leqslant c\right) \\       
    \implies& M_1 \leqslant \min\{a,b\} \lor M_1 \leqslant \min\{a,c\} \\       
    \implies& M_1 \leqslant \max\{\min\{a,b\},\min\{a,c\}\} \\       
    \implies& M_1 \leqslant M_2  .            
    \end{aligned}
    $$
    For the case $M_2\leqslant M_1$, by the definition of $\min$ and $\max$, we have       
    $$
    \min\{a,b\}\leqslant a, \min\{a,b\}\leqslant b\leqslant\max\{b,c\}.
    $$
    then $\min\{a,b\}\leqslant\min\{a,\max\{b,c\}\}$.       
    The other inequality is almost the same. Then $M_2=\max\{\min\{a,b\},\min\{a,c\}\}$.    

  - **Solution 3.2**
    We want to prove $\forall a,b,c\in\mathbb R,\min\{a,\max\{b,c\}\}=\max\{\min\{a,b\},\min\{a,c\}\}$.
    Suppose $a,b,c\in\left\{0,1\right\}$. We split into two cases depending on the value of $a$.
    **Case 1** $a=0$
    $$
    \text{LHS}=\min\left\{0,\max\left\{b,c\right\}\right\}=0. \\
    \text{RHS}=\max\left\{\min\left\{0,b\right\},\min\left\{0,c\right\}\right\}=\max\left\{0,0\right\}=0.
    $$
    Thus $\text{LHS}=\text{RHS}$.
    **Case 2** $a=1$
    $$
    \text{LHS}=\min\left\{1,\max\left\{b,c\right\}\right\}=\max\left\{b,c\right\}. \\
    \text{RHS}=\max\left\{\min\left\{1,b\right\},\min\left\{1,c\right\}\right\}=\min\left\{b,c\right\}.
    $$
    Thus $\text{LHS}=\text{RHS}$.
    Since equality holds for $a=0$ and $a=1$, the identity is true for all $a,b,c\in\left\{0,1\right\}$.

---

- **Exercise 4**  
  Let $a_1,a_2,\cdots,a_7\in\mathbb Z$, prove that among these seven integers, one can always choose four numbers whose sum is even.      

  - **Solution 3.1**  
    Suppose $a_1,a_2,\cdots,a_7\in\mathbb Z$. Let $K$ be the number of odd integers among $a_1,a_2,\cdots,a_7$.       
    If $4\leqslant K\leqslant 7$, then take $4$ of these odd integers, their sum is even:       
    $$
    (2a+1)+(2b+1)+(2c+1)+(2d+1)=2(a+b+c+d+2).
    $$
    If $0\leqslant K<4$, then take $4$ of these even integers, their sum is even: 
    $$
    2a+2b+2c+2d=2(a+b+c+d).
    $$
    In both cases, we obtain that we can always choose four numbers whose sum is even.    

---

- **Exercise 5**  
  Prove that $\forall n\in\mathbb Z$, if $n$ is odd, then $3n$ is odd.      

  - **Solution 5.1**  
    Suppose $n\in\mathbb Z$, and $n$ is odd. Then, there exists an integer $k\in\mathbb Z$ such that $n=2k+1$. Then       
    $$
    \begin{aligned}       
    3n &= 3(2k+1) \\       
    &= 6k+3 \\       
    &= 2(3k+1)+1 .      
    \end{aligned}
    $$
    Since $3k+1$ is an integer, $3n$ is odd.    

---

- **Exercise 6**  
  For every $a,b,c\in\mathbb Z$, prove that if $a\mid b$ and $b\mid c$, then $a\mid c$.      

  - **Solution 6.1**  
    Suppose $a,b,c\in\mathbb Z$ and $a\mid b \land b\mid c$. Then there exist $k,q\in\mathbb Z$ such that $b=ka$ and $c=qb$. Then $c=qka$, and since $qk\in \mathbb Z$, by definition, $a\mid c$.    

---

- **Exercise 7**  
  Let $n\in \mathbb Z$. Prove that if $n^2$ is even, then $n$ is even.      

  - **Solution 7.1**  
    We will prove the contrapositive: $\forall n\in\mathbb Z$, if $n$ is odd, then $n^2$ is odd.       
    Suppose $n\in\mathbb Z$ is odd. Then $\exists k\in\mathbb Z$ such that $n=2k+1$. Then       
    $$
    n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1.
    $$
    is odd because $2k^2+2k$ is an integer.    

---

- **Exercise 8**  
  Prove that there is no smallest positive rational number.      

  - **Solution 4.7.1**  
    By contradiction, suppose there exists a smallest positive rational number $r$. Then $\frac{r}{2}$ is a smaller positive rational number. This is a contradiction because $r$ was assumed to be the smallest. Thus, there doesn't exist a smallest positive rational number.    

---

- **Exercise 9**  
  $\forall \epsilon>0$, prove that $\exists N\in\mathbb N$ such that $\forall n\geqslant N$, $\dfrac{1}{n}<\epsilon$.      
  - **Solution 9.1**  
    Suppose $\epsilon > 0$. We will first prove that $\exists N\in\mathbb N$ such that $\dfrac{1}{N}<\epsilon$.        
    The Archimedean Property states that for any real number $x\in\mathbb R$, there exists a natural number $N\in\mathbb{N}$ such that $N>x$. By setting $x=\dfrac{1}{\epsilon}$ in the Archimedean Property, we guarantee that $\exists N \in \mathbb{N}$ satisfying $N>\dfrac{1}{\epsilon}$, and then $\epsilon >\dfrac{1}{N}$. Then if $n\geqslant N$, $\dfrac{1}{N}\geqslant\dfrac{1}{n}$ and $\dfrac{1}{n}<\epsilon$.
