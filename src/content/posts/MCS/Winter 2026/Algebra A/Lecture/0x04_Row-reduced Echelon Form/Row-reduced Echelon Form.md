---
title: "Row-reduced Echelon Form"
published: 2026-10-21
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

- **Definition 1**  
    An $R\in M_{m\times n}(\mathbb F)$ is an row-reduced echelon form if it satisfies  

    1. The first non-zero entry of every nonzero row is $1$, this entry is a pivot.
    2. All entries in a column with a pivot, different from it, are $0$.
    3. All zero rows are below all non-zero rows.
    4. If the non-zero rows are rows $1,2,\cdots,r$ and their pivots are in columns $k_1,k_2,\cdots,k_r$ such that $k_1,k_2,\cdots,k_r$.

    - **Theorem 1.1**  
        Every matrix is row-equivalent to a row-reduced echelon form matrix.  
        - **Proof 1.1.1**  
            Condition(3) can be achived by interchanging rows.