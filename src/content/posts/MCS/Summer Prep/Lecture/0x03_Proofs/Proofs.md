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

Proofs are the primary means by which mathematical truth is established. The purpose of a proof is to justify the truth of a mathematical statement (called the **conclusion**) by considering other mathematical statements (called **premises**). Once a statement is proved, we refer to it as a **theorem**.

---

- **Definition 1: Conjunctions ($P \land Q$)**  
  A statement of the form $P \land Q$ is true when both $P$ and $Q$ are true. To prove a conjunction, it suffices to prove each of its component statements separately. That is, if we establish $P$ and we also establish $Q$, we may conclude $P \land Q$.   
  - **Example 1.1**  
    To prove that a number $n$ is even and greater than $10$, we prove separately that $n$ is an even number and that $n > 10$. Combining them yields the result.

---

- **Definition 2: Disjunctions ($P \lor Q$)**  
  A statement of the form $P \lor Q$ is true whenever at least one of its components is true. Therefore, to prove a disjunction, it is enough to prove one of its disjuncts (though a false disjunct cannot establish the disjunction).    
  - **Example 2.1**  
    To prove that a number $n$ is either even or odd, it suffices to prove that $n$ is even, and the disjunction follows.    

---

- **Definition 3: Indirect Strategy for Disjunction**  
  Another useful strategy to prove $P \lor Q$ is to proceed indirectly. Assume that one of the disjuncts is false (say $\neg P$) and then prove the other ($Q$):  
  $$
  P \lor Q \equiv \neg P \implies Q.
  $$

---

- **Definition 4: Proof by Cases**  
  If we know that $P \lor Q$ is true, and we can prove $R$ from $P$, and also prove $R$ from $Q$, we may conclude $R$:    
  - **Example 4.1**  
    Suppose a natural number is either even or odd, and we want to prove that $n^2$ is even. We divide the argument into two cases: if $n$ is even, $n^2$ is even; if $n$ is odd, $n^2$ is even. Since one of these cases must be true, $n^2$ is even in either case.    

---

- **Definition 5: Direct Strategy for Implications ($P \implies Q$)**  
  To prove a statement of the form $P \implies Q$, we must show that whenever $P$ is true, $Q$ is also true.   
  - **Example 5.1**  
    To prove that if $n$ is even, then $n+1$ is odd, we assume that $n$ is even and then show that $n+1$ is odd.   
  - **Modus Ponens**  
    If we establish both $P \implies Q$ and $P$, we can conclude $Q$.

---

- **Definition 6: Indirect Strategy (Proof by Contrapositive)**  
  Since $P \implies Q \equiv \neg Q \implies \neg P$, we can prove $\neg Q \implies \neg P$ instead of $P \implies Q$.

---

- **Definition 7: Proof by Contradiction**  
  To prove $P \implies Q$, suppose that $P$ is true and $Q$ is false ($P \land \neg Q$) and show that this assumption leads to a contradiction ($R \land \neg R$):  
  $$
  P \implies Q \equiv (P \land \neg Q) \implies (R \land \neg R).
  $$
  We have:  
  $$
  \begin{array}{c|c|c|c|c|c|c|c} P & Q & R & \neg Q & P\land\neg Q & R\land\neg R & P\implies Q & (P\and \neg Q)\implies(R\and \neg R) \\ \hline 1 & 1 & 1 & 0 & 0 & 0 & 1 & 1 \\ 1 & 1 & 0 & 0 & 0 & 0 & 1 & 1 \\ 1 & 0 & 1 & 1 & 1 & 0 & 0 & 0 \\ 1 & 0 & 0 & 1 & 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 & 0 & 1 & 1 \\ 0 & 1 & 0 & 0 & 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 1 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 & 0 & 0 & 1 & 1 \end{array}
  $$
  Therefore $P \implies Q \equiv (P \land \neg Q) \implies (R \land \neg R)$.

---

- **Definition 8: Disproofs and Counterexamples**  
  A statement is disproved if we show a single instance in which it is false, known as a **counterexample**.    
  For a universally quantified statement $\forall x P(x)$, a single object $x_0$ for which $P(x_0)$ is false suffices to disprove the statement.   
  For an implication $P \implies Q$, a counterexample consists of a situation where $P$ is true and $Q$ is false.   
  
  - **Example 8.1**  
    Consider the statement $x^2 - 1 > 0$ for all $x \in \mathbb{R}$. To disprove it, use the counterexample $x_0 = 1$, which gives $1^2 - 1 = 0 \ngtr 0$. Thus, the statement is false.    
  - **Example 8.2**  
    Prove that the existentially quantified statement $(\exists x \in \mathbb{R})\left(\frac{1}{x^2+1} > 1\right)$ is false.     
    - **Solution 8.2.1** 
    
    - We need to show that $\frac{1}{x^2+1} \le 1$ for every $x \in \mathbb{R}$. Since $0 \le x^2$ for all $x \in \mathbb{R}$, it follows that $1 \le x^2 + 1$. Because $x^2 + 1 > 0$, taking the reciprocal reverses the inequality:
      $$
      \frac{1}{x^2+1} \le 1.
      $$
      for every $x \in \mathbb{R}$. Thus, the original statement is false.
