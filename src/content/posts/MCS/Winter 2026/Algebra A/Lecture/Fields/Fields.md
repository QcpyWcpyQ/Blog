---
title: "Fields"
published: 2026-10-12
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---

## Fields

- **Definition 1 (Field)**  
  A **field** is a set $\mathbb{F}$ with two distinct elements $0\neq1$ and two **binary operations**
  $$
  +,\times\colon\mathbb{F}\times\mathbb{F}\longrightarrow\mathbb{F}
  $$
  satisfying the axioms below. Here
  $$
  \mathbb{F}\times\mathbb{F}=\{(a,b):a,b\in\mathbb{F}\}
  $$
  is the **Cartesian product**, the set of all ordered pairs of elements of $\mathbb{F}$. A binary operation assigns an element of $\mathbb{F}$ to each such pair; in particular, addition and multiplication are **closed** in $\mathbb{F}$.

  1. **Axioms for addition ($+$)**  
     For all $x,y,z\in\mathbb{F}$:
     $$
     \begin{aligned}
     (x+y)+z&=x+(y+z) &&\text{(associativity)},\\
     x+y&=y+x &&\text{(commutativity)},\\
     0+x&=x &&\text{(additive identity)}.
     \end{aligned}
     $$
     Moreover, every $x\in\mathbb{F}$ has an **additive inverse** (or **opposite**): there exists $y\in\mathbb{F}$ such that
     $$
     x+y=0.
     $$
     The additive inverse is denoted by $-x$.

  2. **Axioms for multiplication ($\times$)**  
     For all $x,y,z\in\mathbb{F}$:
     $$
     \begin{aligned}
     (x\cdot y)\cdot z&=x\cdot(y\cdot z) &&\text{(associativity)},\\
     x\cdot y&=y\cdot x &&\text{(commutativity)},\\
     1\cdot x&=x &&\text{(multiplicative identity)}.
     \end{aligned}
     $$
     Moreover, every **nonzero** $x\in\mathbb{F}$ has a **multiplicative inverse**: there exists $y\in\mathbb{F}$ such that
     $$
     x\cdot y=1.
     $$
     The multiplicative inverse is denoted by $x^{-1}$.

  3. **Distributivity (combining multiplication and addition)**  
     For all $x,y,z\in\mathbb{F}$:
     $$
     x\cdot(y+z)=x\cdot y+x\cdot z.
     $$
  
  The identities work on both sides.
  
  - **Notation 1.1**  
      $$
      x+y=+(x,y),\qquad x\times y=\times(x,y).
      $$
  
  - **Example 1.2**  
      $$
      \mathbb Q,\mathbb R,\mathbb C.
      $$

  - **Example 1.3 (The field with two elements)**  
    The set
    $$
    \mathbb{F}_2=\{0,1\}
    $$
    is a field with addition and multiplication defined by the following tables. Each entry is the result of applying the operation to the row element and the column element.

    **Addition**

    | $+$ | $0$ | $1$ |
    | --- | --- | --- |
    | $0$ | $0$ | $1$ |
    | $1$ | $1$ | $0$ |

    **Multiplication**

    | $\times$ | $0$ | $1$ |
    | --- | --- | --- |
    | $0$ | $0$ | $0$ |
    | $1$ | $0$ | $1$ |

    These are addition and multiplication **modulo $2$**. In particular,
    $$
    1+1=0\qquad\text{in }\mathbb{F}_2.
    $$
    Every element is its own additive inverse:
    $$
    0+0=0,\qquad1+1=0.
    $$
    The only nonzero element is $1$, and it is its own multiplicative inverse since $1\cdot1=1$.

---

- **Lemma 2 (Uniqueness of identities and inverses)**  
  In a field, the additive identity, the multiplicative identity, the additive inverse of each element, and the multiplicative inverse of each nonzero element are **unique**.

  - **Proof 2.1 (Uniqueness of the additive identity)**  
    Suppose that $0'$ is another additive identity. Since both $0$ and $0'$ are additive identities,
    $$
    0=0'+0=0'.
    $$
    Thus $0'=0$.

  - **Proof 2.2 (Uniqueness of the multiplicative identity)**  
    Suppose that $1'$ is another multiplicative identity. Then
    $$
    1=1'\cdot1=1'.
    $$
    Thus $1'=1$.

  - **Proof 2.3 (Uniqueness of the additive inverse)**  
    Let $x\in\mathbb{F}$, and suppose that $u$ and $v$ are both additive inverses of $x$, so that
    $$
    x+u=0,\qquad x+v=0.
    $$
    By the additive identity, associativity, and commutativity,
    $$
    \begin{aligned}
    u&=u+0\\
     &=u+(x+v)\\
     &=(u+x)+v\\
     &=0+v\\
     &=v.
    \end{aligned}
    $$
    Therefore the additive inverse of $x$ is unique.

  - **Exercise 2.4 (Uniqueness of the multiplicative inverse)**  
    The analogous argument for multiplication was left as an **exercise** in the lecture: if $x\neq0$ and $u,v\in\mathbb{F}$ satisfy $x\cdot u=x\cdot v=1$, prove that $u=v$.

    **Supplementary solution.** Using the multiplicative identity, associativity, and commutativity,
    $$
    \begin{aligned}
    u&=u\cdot1\\
     &=u\cdot(x\cdot v)\\
     &=(u\cdot x)\cdot v\\
     &=1\cdot v\\
     &=v.
    \end{aligned}
    $$

  - **Notation 2.5**  
    The unique **opposite** (additive inverse) of $x$ is denoted by $-x$. For $x\neq0$, its unique **multiplicative inverse** is denoted by $x^{-1}$. Thus
    $$
    x+(-x)=0,\qquad x\cdot x^{-1}=1\quad(x\neq0).
    $$
    Uniqueness ensures that these notations are well-defined.

---

- **Proposition 3 (Elementary consequences of the field axioms)**  
  This is Proposition 1.2 in the lecture notes. Let $\mathbb{F}$ be a field, and let $a,b,c\in\mathbb{F}$. Then:

  **(a) Uniqueness.** The additive identity and multiplicative identity are unique. Every element has a unique additive inverse, and every nonzero element has a unique multiplicative inverse.

  **(b) Additive cancellation.** If $a+b=a+c$, then $b=c$.

  **(c) Multiplication by zero.** For every $a\in\mathbb{F}$,
  $$
  0a=a0=0.
  $$

  **(d) Multiplicative cancellation.** If $a\neq0$ and $ab=ac$, then $b=c$.

  **(e) Zero-product property.** If $ab=0$, then $a=0$ or $b=0$.

  - **Supplementary proof 3.1**  
    **(a)** See Lemma 2 and its proofs above.

    **(b)** Add $-a$ to both sides and use associativity:
    $$
    \begin{aligned}
    b&=0+b=((-a)+a)+b\\
     &=(-a)+(a+b)\\
     &=(-a)+(a+c)\\
     &=((-a)+a)+c=0+c=c.
    \end{aligned}
    $$

    **(c)** Distributivity gives
    $$
    a0=a(0+0)=a0+a0.
    $$
    Hence $a0+0=a0+a0$. By additive cancellation, $0=a0$. Commutativity then gives $0a=a0=0$.

    **(d)** Since $a\neq0$, its multiplicative inverse $a^{-1}$ exists. Multiplying both sides of $ab=ac$ by $a^{-1}$ gives
    $$
    \begin{aligned}
    b&=1b=(a^{-1}a)b\\
     &=a^{-1}(ab)\\
     &=a^{-1}(ac)\\
     &=(a^{-1}a)c=1c=c.
    \end{aligned}
    $$

    **(e)** If $a=0$, the conclusion already holds. If $a\neq0$, then by (c),
    $$
    ab=0=a0.
    $$
    Multiplicative cancellation from (d) gives $b=0$.

  - **Remark 3.2**  
    The condition $a\neq0$ in multiplicative cancellation is essential: $0b=0c$ holds for all $b,c\in\mathbb{F}$ and does not imply $b=c$. In particular, $0\cdot0=0\cdot1$ although $0\neq1$.

---

- **Proposition 4 (Unique solutions of elementary equations)**  
  This is Proposition 1.3 in the lecture. Let $\mathbb{F}$ be a field. The notation $\exists!$ means **there exists exactly one**.

  1. For every $a,b\in\mathbb{F}$, there exists a unique $x\in\mathbb{F}$ such that
     $$
     a+x=b.
     $$
  2. For every $a,b\in\mathbb{F}$ with $a\neq0$, there exists a unique $x\in\mathbb{F}$ such that
     $$
     ax=b.
     $$

  - **Proof 4.1 (The additive equation)**  
    Any solution of $a+x=b$ must satisfy
    $$
    (-a)+(a+x)=(-a)+b
    \quad\Longrightarrow\quad
    x=b+(-a).
    $$
    Conversely, this value is a solution, since
    $$
    a+\bigl(b+(-a)\bigr)=(a+(-a))+b=b.
    $$
    Thus the solution exists and is unique.

  - **Proof 4.2 (The multiplicative equation)**  
    If $a\neq0$, any solution of $ax=b$ must satisfy
    $$
    a^{-1}(ax)=a^{-1}b
    \quad\Longrightarrow\quad
    x=a^{-1}b.
    $$
    Conversely,
    $$
    a(a^{-1}b)=(aa^{-1})b=b,
    $$
    so this is indeed the unique solution.

  - **Notation 4.3 (Subtraction and division)**  
    Define
    $$
    b-a:=b+(-a),\qquad
    \frac{b}{a}:=a^{-1}b\quad(a\neq0).
    $$
    Therefore the solutions above are $x=b-a$ and $x=\frac{b}{a}$, respectively.

---

- **Corollary 5 (Rules for negatives and inverses)**  
  This is Corollary 1.4 in the lecture. In any field $\mathbb{F}$, the following identities and cancellation laws hold:

  1. **Inverses of the identity elements:**
     $$
     -0=0,\qquad1^{-1}=1.
     $$

  2. **Additive cancellation:**
     $$
     x+y=x+z\quad\Longrightarrow\quad y=z.
     $$

  3. **Multiplicative cancellation:**
     $$
     xy=xz\ \text{ and }\ x\neq0\quad\Longrightarrow\quad y=z.
     $$

  4. **Double negatives and multiplication by $-1$:**
     $$
     -(-x)=x,\qquad(-1)x=-x.
     $$

  5. **The negative of a sum:**
     $$
     -(x+y)=(-x)+(-y).
     $$

  6. **The negative of a product:**
     $$
     -(xy)=(-x)y=x(-y).
     $$

  7. **Inverting an inverse or a negative:** for $x\neq0$,
     $$
     (x^{-1})^{-1}=x,\qquad
     (-x)^{-1}=-(x^{-1}).
     $$
     In particular,
     $$
     (-1)^{-1}=-1.
     $$

  8. **The inverse of a product:** for $x\neq0$ and $y\neq0$,
     $$
     (xy)^{-1}=x^{-1}y^{-1}.
     $$

## Some relevant fields

- **Example 6 (Coordinatewise operations on $\mathbb{R}^2$ do not give a field)**  
  Consider the set $\mathbb{R}^2=\mathbb{R}\times\mathbb{R}$ with both operations defined coordinatewise:
  $$
  \begin{aligned}
  (a,b)+(c,d)&=(a+c,b+d),\\
  (a,b)\cdot(c,d)&=(ac,bd).
  \end{aligned}
  $$
  The additive and multiplicative identities for these operations are
  $$
  \mathbf{0}=(0,0),\qquad\mathbf{1}=(1,1).
  $$
  However, the nonzero element $(1,0)$ has no multiplicative inverse. For every $(a,b)\in\mathbb{R}^2$,
  $$
  (1,0)\cdot(a,b)=(a,0)\neq(1,1).
  $$
  Hence the multiplicative inverse axiom fails, so **these operations do not make $\mathbb{R}^2$ a field**.

---

- **Example 7 (Complex numbers as pairs of real numbers)**  
  Identify each complex number $a+bi$ with the ordered pair $(a,b)$, where $a,b\in\mathbb{R}$:
  $$
  \mathbb{C}=\{a+bi:a,b\in\mathbb{R}\}
  \ \longleftrightarrow\ 
  \{(a,b):a,b\in\mathbb{R}\}=\mathbb{R}^2.
  $$
  This identifies the underlying sets; the operations must also be specified.

  - **Addition 7.1**  
    Addition is defined coordinatewise:
    $$
    (a,b)+(c,d)=(a+c,b+d).
    $$
    Equivalently,
    $$
    (a+bi)+(c+di)=(a+c)+(b+d)i.
    $$

  - **Identifications 7.2**  
    Real numbers and purely imaginary numbers correspond to
    $$
    a\longleftrightarrow(a,0),\qquad
    bi\longleftrightarrow(0,b).
    $$
    Thus
    $$
    a+bi\longleftrightarrow(a,b)=(a,0)+(0,b),
    $$
    and in particular,
    $$
    0\longleftrightarrow(0,0),\qquad
    1\longleftrightarrow(1,0),\qquad
    i\longleftrightarrow(0,1).
    $$

  - **Multiplication 7.3**  
    Complex multiplication extends the usual multiplication of real numbers and satisfies $i^2=-1$. Using associativity, commutativity, and distributivity gives
    $$
    \begin{aligned}
    (a+bi)(c+di)
      &=ac+adi+bci+bd\,i^2\\
      &=(ac-bd)+(ad+bc)i.
    \end{aligned}
    $$
    Accordingly, multiplication on pairs is defined by
    $$
    \boxed{(a,b)\cdot(c,d)=(ac-bd,ad+bc)}.
    $$
    It is **not coordinatewise multiplication**. In particular,
    $$
    (0,1)\cdot(0,1)=(-1,0),
    $$
    which expresses $i^2=-1$.

  - **Conjugate and modulus 7.4**  
    For $z=a+bi\in\mathbb{C}$, define its **complex conjugate** and **modulus** by
    $$
    \overline{z}=a-bi,\qquad
    |z|=\sqrt{a^2+b^2}\in\mathbb{R}_{\geq0}.
    $$
    Their basic relation is
    $$
    z\overline{z}=(a+bi)(a-bi)=a^2+b^2=|z|^2.
    $$
    Moreover,
    $$
    |z|=0\quad\Longleftrightarrow\quad a=b=0
    \quad\Longleftrightarrow\quad z=0.
    $$
    In particular, the modulus is strictly positive whenever $z\neq0$.

  - **Multiplicative inverse 7.5**  
    If $z\neq0$, then $|z|^2=a^2+b^2>0$. Hence
    $$
    z\left(\frac{\overline{z}}{|z|^2}\right)
    =\frac{z\overline{z}}{|z|^2}=1,
    $$
    so
    $$
    \boxed{z^{-1}=\frac{\overline{z}}{|z|^2}
    =\frac{a}{a^2+b^2}-\frac{b}{a^2+b^2}i}.
    $$
    Thus every nonzero complex number has a multiplicative inverse. Together with the other field axioms, which follow from the addition and multiplication formulas, this gives the field $\mathbb{C}$.

---

- **Example 8 (An algebraic extension of $\mathbb{Q}$)**  
  Define
  $$
  \mathbb{Q}[\sqrt2]=\{a+b\sqrt2:a,b\in\mathbb{Q}\}.
  $$
  Then
  $$
  \mathbb{Q}\subseteq\mathbb{Q}[\sqrt2]\subseteq\mathbb{R}.
  $$
  Addition and multiplication are the usual real operations restricted to this set. The element $\sqrt2$ satisfies the polynomial equation $t^2-2=0$ over $\mathbb{Q}$.

  - **Closure 8.1**  
    For $a,b,c,d\in\mathbb{Q}$,
    $$
    (a+b\sqrt2)+(c+d\sqrt2)=(a+c)+(b+d)\sqrt2
    \in\mathbb{Q}[\sqrt2],
    $$
    and
    $$
    \begin{aligned}
    (a+b\sqrt2)(c+d\sqrt2)
      &=ac+ad\sqrt2+bc\sqrt2+2bd\\
      &=(ac+2bd)+(ad+bc)\sqrt2
      \in\mathbb{Q}[\sqrt2].
    \end{aligned}
    $$
    The coefficients remain rational, so both operations are closed. Also, $0,1\in\mathbb{Q}[\sqrt2]$ and
    $$
    -(a+b\sqrt2)=(-a)+(-b)\sqrt2\in\mathbb{Q}[\sqrt2].
    $$
    Associativity, commutativity, and distributivity are inherited from $\mathbb{R}$. It remains to check multiplicative inverses.

  - **Conjugation 8.2**  
    For $z=a+b\sqrt2$, define
    $$
    \overline{z}=a-b\sqrt2.
    $$
    Here the bar denotes conjugation in this extension: it fixes rational numbers and sends $\sqrt2$ to $-\sqrt2$.

    The representation $a+b\sqrt2$ with rational coefficients is unique, by the irrationality of $\sqrt2$, so this definition is well-defined. We have
    $$
    z\overline{z}=(a+b\sqrt2)(a-b\sqrt2)=a^2-2b^2\in\mathbb{Q}.
    $$

  - **Multiplicative inverse 8.3**  
    For rational $a,b$,
    $$
    a^2-2b^2=0\quad\Longleftrightarrow\quad a=b=0.
    $$
    Indeed, if $b\neq0$, then $a^2=2b^2$ would imply $(a/b)^2=2$, contradicting the irrationality of $\sqrt2$. If $b=0$, the equality forces $a=0$.

    Consequently, for $z=a+b\sqrt2\neq0$, the rational number $a^2-2b^2$ is nonzero, and
    $$
    \boxed{z^{-1}=\frac{\overline{z}}{a^2-2b^2}
    =\frac{a}{a^2-2b^2}-\frac{b}{a^2-2b^2}\sqrt2}.
    $$
    Both coefficients are rational, so $z^{-1}\in\mathbb{Q}[\sqrt2]$. Direct multiplication gives
    $$
    z\cdot\frac{\overline{z}}{a^2-2b^2}=1.
    $$
    Therefore **$\mathbb{Q}[\sqrt2]$ is a field**.

---

- **Example 9 (Fields of integers modulo a prime)**  
  Let $p$ be a prime number. The field
  $$
  \mathbb{F}_p=\mathbb{Z}/p\mathbb{Z}
  $$
  consists of the residue classes modulo $p$, represented by
  $$
  \{0,1,\ldots,p-1\}.
  $$
  Addition and multiplication are performed **modulo $p$**: compute the usual integer sum or product, then take its remainder on division by $p$. The lecture also writes this structure as $\mathbb{Z}_p$.

  - **Example 9.1 (Addition in $\mathbb{F}_5$)**  
    The complete addition table is

    | $+$ | $0$ | $1$ | $2$ | $3$ | $4$ |
    | --- | --- | --- | --- | --- | --- |
    | $0$ | $0$ | $1$ | $2$ | $3$ | $4$ |
    | $1$ | $1$ | $2$ | $3$ | $4$ | $0$ |
    | $2$ | $2$ | $3$ | $4$ | $0$ | $1$ |
    | $3$ | $3$ | $4$ | $0$ | $1$ | $2$ |
    | $4$ | $4$ | $0$ | $1$ | $2$ | $3$ |

    For example, $3+4=2$ in $\mathbb{F}_5$, because $7\equiv2\pmod5$.

  - **Supplementary explanation 9.2 (Why primality gives inverses)**  
    If $1\leq a\leq p-1$, then $\gcd(a,p)=1$. By Bézout's identity, there are integers $u,v$ such that
    $$
    au+pv=1.
    $$
    Reducing modulo $p$ gives $au\equiv1\pmod p$, so the residue class of $u$ is the multiplicative inverse of $a$. Thus every nonzero element has an inverse; the other field axioms follow from integer arithmetic modulo $p$.

  - **Counterexample 9.3 (Integers modulo $6$)**  
    In $\mathbb{Z}_6=\mathbb{Z}/6\mathbb{Z}$,
    $$
    2\cdot3=0,
    $$
    even though $2\neq0$ and $3\neq0$. This contradicts the zero-product property of a field. Hence **$\mathbb{Z}_6$ is not a field**.
