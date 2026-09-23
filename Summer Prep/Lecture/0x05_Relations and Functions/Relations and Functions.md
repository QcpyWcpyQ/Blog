## Relations and Functions  
- **Definition 1**   
  Let $X$ be a set. A **relation** $\sim$ on $X$ is a rule that determines for every $x,y\in X$ whether the statement   
  $$
  x\sim y   
  $$
  is true or false. If it is true, we say that $x$ is related to $y$. If it is false, we write $x\not\sim y$.    
  - **Example 1.1**     
    Let $X=\left\{1,2,3,4\right\}$, the following are examples of relations on $X$.     
    1. The relation $\sim$ given by $1\sim 2,2\sim 3,3\sim 1,4\sim 4$.     
    2. The relation $\sim$ given by $1\sim 1,2\sim 2,2\sim 4$.     
    3. The relation $\sim$ given by $1\sim 1,2\sim 2,3\sim 3,4\sim 4$.  

---

- **Definition 2**   
  Let $X$ be a set and $\sim$ a relation on $X$.    
  
  1. The relation is **reflexive** if $x\sim x$ for every $x\in X$.    
  2. The relation is **symmetric** if for every $x,y\in X$      
     $$
     x\sim y\implies y\sim x.
     $$
  3. The relation is **antisymmetric** if for every $x,y\in X$      
     $$
     x\sim y\land y\sim x\implies x=y.
     $$
  4. The relation is **transitive** if for every $x,y,z\in X$      
     $$
     x\sim y\land y\sim z\implies x\sim z.
     $$
  - **Example 2.1**     
    On the set $\mathbb Z$ consider the relation     
    $$
    x\sim y\iff x\leqslant y.
    $$
    Note that      
    1. $\sim$ is reflexive since $x\leqslant x$ for every $x\in\mathbb Z$.     
    2. $\sim$ is not symmetric since $1\leqslant 2$ but $2\not\leqslant 1$.     
    3. $\sim$ is antisymmetric because if $x\leqslant y$ and $y\leqslant x$ then $x=y$.      
    4. $\sim$ is transitive since $x\leqslant y$ and $y\leqslant z$ implies that $x\leqslant z$.  

---

- **Definition 3**   
  Let $X$ be a set. An **equivalence relation** on $X$ is a relation $\sim$ that satisfies the following properties.    
  
  1. $\sim$ is reflexive.   
  2. $\sim$ is symmetric.   
  3. $\sim$ is transitive.    
  - **Example 3.1**     
    Let $X=\left\{1,2,3,4\right\}$. The following are examples of equivalence relations on $X$.     
    1. The relation $\sim$ given by $1\sim1,2\sim2,3\sim3,4\sim4$.     
    2. The relation $\sim$ given by $1\sim1,2\sim2,3\sim3,4\sim4,2\sim3,3\sim2,1\sim4,4\sim1$.  

---

- **Definition 4**   
  Let $X$ be a set. An **order relation** on $X$ is a relation $\sim$ that satisfies the following properties.    
  
  1. $\sim$ is reflexive.   
  2. $\sim$ is antisymmetric.   
  3. $\sim$ is transitive.    
  - **Example 4.1**     
    Let $X=\left\{1,2,3,4\right\}$. The following are examples of order relations on $X$.     
    1. The relation $\sim$ given by $1\sim1,2\sim2,3\sim3,4\sim4$.     
    2. The relation $\sim$ given by $1\sim1,2\sim2,3\sim3,4\sim4,1\sim2,1\sim3,1\sim4,2\sim3,2\sim4,3\sim4$.  

---

- **Definition 5**   
  A **function** $f\colon X\to Y$ is a correspondence of elements of $X$ with elements of $Y$ such that forall $x\in X$ there exists a unique $y\in Y$ such that $y=f(x)$.   
  $$
  \begin{aligned}      
     f\colon X\to \ &Y \\   
  x\mapsto \ &y=f(x)      
     \end{aligned}   
  $$
  The element $y=f(x)$ is called the **image** of $x$ under $f$ and the element $x$ is called the **preimage** of $y$ under $f$.  

---

- **Definition 6**   
  If $f\colon X\to Y$ is a function, the **domain** of $f$ denote $\text{Dom}(f)$ is $X$ and the **codomain** of $\text{CoDom}(f)$ is $Y$. The **range** of $f$, denoted $\text{Ran}(f)$, is the set   
  $$
  \text{Ran}(f)=\left\{y\in Y: y=f(x)\text{ for some }x\in X\right\}   
  $$
  Note that $\text{Ran}(f)\subseteq Y$.    
  - **Example 6.1**      
    1. The function $f\colon\mathbb R\to\mathbb R$, $f(x)=x^2$.     
    2. The function $g\colon\mathbb R\to\mathbb R$, $g(x)=\sin(x)$.     
    3. The function $h\colon \left[0,\infty\right)\to\mathbb R$, $h(x)=\sqrt{x}$.    
  - **Example 6.2**     
    Let $X=\left\{1,2,3\right\}$ and $Y=\left\{a,b,c\right\}$ the following examples of functions from $X$ to $Y$.      
    1. The function $f\colon X\to Y$ defined by        
       $$
       f(1)=a\quad f(2)=b\quad f(3)=c.
       $$
    2. The function $g\colon X\to Y$ defined by        
       $$
       g(1)=a\quad g(2)=a\quad g(3)=a.
       $$
    3. The function $h\colon X\to Y$ defined by        
       $$
       h(1)=a\quad h(2)=b\quad h(3)=a.
       $$

---

- **Definition 7**   
  Two functions $f\colon X\to Y$ and $g\colon Z\to W$ are **equal** if $X=Z,Y=W$ and $f(x)=g(x)$ for all $x\in X$.    
  - **Example 7.1**     
    1. Let $X$ be a set. The **identity function** on $X$ is the function $\mathrm{id}_x\colon X\to X$ given by $\mathrm{id}_x(x)=x$.     
    2. Let $X$ and $Y$ be sets and $c\in Y$. The **constant function** with value $c$ is the function $\mathrm K_c\colon X\to Y$ given by $\mathrm K_c(x)=c$.     
    3. Let $X$ be a set and $A\subseteq X$. The **inclusion function** of $A$ in $X$ is the function $\iota\colon A\to X$ (or $\iota\colon A\hookrightarrow X$) given by $\forall x\in A,\iota(x)=x$.     
    4. If $f\colon X\to Y$ is a function and $A\subseteq X$, the **restriction** of $f$ to $A$ is the function $f \big|_A\colon A\to Y$ given by $f\big|_A(x)=f(x)$ for all $x\in A$.

---

- **Definition 8**
  If $f\colon X\to Y$ and $g\colon Z\to W$ are functions, the **composition** of $g$ with $f$, denoted $g\circ f$, is the function $g\circ f\colon X\to Z$ defined by $\left(g\circ f\right)=g\left(f\left(x\right)\right)$ for all $x\in X$.

  - **Example 8.1**
    Note that if $f\colon X\to Y$, $f$ is a function and $A\subseteq X$, we have that $f \big|_A=f\circ \iota_A$ where $\iota\colon A\to x$.
    $$
    A\xrightarrow{\iota}X\xrightarrow{f}Y.
    $$

- **Remark 8**
  Note that even in the case both $g\circ f$ and $f\circ g$ are defined, the composition of two functions is not commutative, that is, in general $g\circ f\neq f\circ g$.

  - **Example 8.2**
    Consider the functions
    $$
    \begin{aligned}
    
    f\colon &\mathbb R\to \mathbb R,\quad g\colon \mathbb R\to \mathbb R. \\
    &x\mapsto x^2,\quad x\mapsto x+1.
    &
    \end{aligned}
    $$
    Note thet $g\circ f\colon \mathbb R\to \mathbb R$ and $f\circ g\colon \mathbb R\to \mathbb R$ with
    $$
    \begin{aligned}
    
    g\circ f&=g\left(f\left(x\right)\right) \\
    &=g\left(x^2\right) \\
    &=x^2+1
    
    \end{aligned}
    \quad
    \begin{aligned}
    
    f\circ g&=f\left(g\left(x\right)\right) \\
    &=f\left(x+1\right) \\
    &=\left(x+1\right)^2.
    
    \end{aligned}
    $$
    In particular if $x=2$ we have that $(g\circ f)(2)=5$ and $(f\circ g)=9$. Therefore $g\circ f\neq f\circ g$.
    
  - **Proposition 8.3**
    Let $f\colon X\to Y,g\colon Y\to Z$ and $h\colon Z\to W$ be functions, the $(h\circ g)\circ f=h\circ(g\circ f)$. In other words, the composition is associative.
    
    - **Proof 8.3.1**
      Let $x\in X$ then
      $$
      \begin{aligned}
      
      [(h\circ g)\circ f](x)&=(h\circ g)(f(x)) \\
      &=h(g(f(x))) \\
      &=h((g\circ f)(x)) \\
      &=[h\circ(g\circ f)](x).
      
      \end{aligned}
      $$
      Now, as $[(h\circ g)\circ f](x)=[h\circ(g\circ f)](x)$ for all $x\in X$ we have that $(h\circ g)\circ f=h\circ(g\circ f)$.
    
  - **Example 8.4**
    Let $s,t\colon \mathbb Z\to \mathbb Z$ be functions defined by $s(x)=x+1$ and $t(x)=2x$. Prove that $t\circ s\neq s\circ t$.
    
    - **Proof 8.4.1**
      Let $x\in\mathbb Z$ then
      $$
      \begin{aligned}
      
      t\circ s&=t\left(s\left(x\right)\right) \\
      &=t\left(x+1\right) \\
      &=2x+2
      
      \end{aligned}
      \quad
      \begin{aligned}
      
      s\circ t&=s\left(t\left(x\right)\right) \\
      &=s\left(2x\right) \\
      &=2x+1.
      
      \end{aligned}
      $$
      In particular if $x=2$ we have that $(t\circ s)(2)=6$ and $(s\circ t)(2)=5$. Therefore $t\circ s\neq s\circ t$.
    
  - **Example 8.5**
    Let $X=\left\{1,2,3,4,5\right\}$ and let $f\colon X\to X$ be the function defined by 
    $$
    f(1)=2,\quad f(2)=2, \quad f(3)=4,\quad f(4)=4,\quad f(5)=4.
    $$
    Show that $f\circ f=f$. Find a function $g$ such that $g\circ f=f$ and $f\circ g=f$.
    
    - **Solution 8.5.1**
      $$
      g\colon X\to X \\
      g(1)=1,\quad g(2)=2, \quad g(3)=5,\quad g(4)=4,\quad g(5)=3.
      $$
      Then
      $$
      (g\circ f)(1)=g(f(1))=g(2)=2=f(1), \\
      (g\circ f)(2)=g(f(2))=g(2)=2=f(2), \\
      (g\circ f)(3)=g(f(3))=g(4)=4=f(3), \\
      (g\circ f)(4)=g(f(4))=g(4)=4=f(4), \\
      (g\circ f)(5)=g(f(5))=g(4)=4=f(5).
      $$
      Therefore $g\circ f=f$. Similarly, we can prove $f\circ g=f$ and $f\circ f=f$.

---

- **Definition 9**
  Let $f\colon X\to Y$ be a function.
  We say that $f$ is **injective** if given $x_1,x_2\in X$, such that $f\left(x_1\right)=f\left(x_2\right)$ implies $x_1=x_2$.
  Equivalently, if given $x_1,x_2\in X$ such that $x_1\neq x_2$ implies $f\left(x_1\right)\neq f\left(x_2\right)$.

  We say that $f$ is **surjective** if for every $y\in Y$ there exists $x\in X$ such that $y=f(x)$.

  We say that $f$ is **bijective** if it is both injective and surjective.

- **Remark 9**
  If there exists a bijective function $f\colon X\to Y$. We say that $X$ and $Y$ are **one-to-one correspondence**.

  - **Example 9.1**
    The identity function $\text{id}_X\colon X\to X$ is injective since if $\text{id}_X(x)=\text{id}_X(y)$ then $x=y$.
    It is also surjective since for all $x\in X$ we have that $x=\text{id}_X(x)$.
    Therefore, $\text{id}_X$ is bijective.
    
  - **Example 9.2**
    Consider the constant function $\text{K}_c\colon X\to Y$.
    Note that if $X$ has more than one element the function is not injective and if $Y$ has more than one element the function is not surjective.
    
  - **Example 9.3**
    The inclusion function $\iota\colon A\to X$ is injective since $\iota_A(x)=\iota_A(y)$ implies $x=y$. Note that, if $A=X$ then $\iota_x=\text{id}_X$. Therefore $\iota_A$ is surjective. If $A\neq X$ and is not surjective if $A\subset X$.
    
  - **Example 9.4**
    Suppose that $f \colon A \rightarrow B$ and $g \colon B \rightarrow C$ are functions. Prove that if $g \circ f$ is injective then $f$ is injective, and if $g \circ f$ is surjective then $g$ is surjective.
    
    - **Solution 9.4.1**
      **Proof:**
      
      * **First Part (If $g \circ f$ is injective, then $f$ is injective):**
        Let $x_1, x_2 \in A$ be arbitrary elements in the domain of $f$ such that:
        $$
        f(x_1) = f(x_2)
        $$
        Since $g$ is a function, applying $g$ to both sides yields identical outputs:
        $$
        g(f(x_1)) = g(f(x_2))
        $$
        By definition of function composition, this is equivalent to:
        $$
        (g \circ f)(x_1) = (g \circ f)(x_2)
        $$
        We are given the hypothesis that $g \circ f$ is injective. By definition of an injective function, $(g \circ f)(x_1) = (g \circ f)(x_2) \implies x_1 = x_2$.
        Thus, $f(x_1) = f(x_2) \implies x_1 = x_2$, proving that $f$ is injective.
      
      * **Second Part (If $g \circ f$ is surjective, then $g$ is surjective):**
        Let $z \in C$ be an arbitrary element in the codomain of $g$.
        We are given the hypothesis that $g \circ f \colon A \rightarrow C$ is surjective. By definition of a surjective function, there exists some element $x \in A$ such that:
        $$
        (g \circ f)(x) = z
        $$
        By definition of function composition, this means:
        $$
        g(f(x)) = z
        $$
        Let $y = f(x)$. Since $x \in A$ and $f \colon A \rightarrow B$, it follows that $y \in B$.
        Substituting $y$ back into the equation gives $g(y) = z$.
        Thus, for any arbitrary $z \in C$, there exists an element $y \in B$ such that $g(y) = z$, proving that $g$ is surjective.
    
  - **Example 9.5**
    Prove that the function $f\colon \mathbb R\to \mathbb R$ defined by $f(x)=2x+1$ is injective and surjective.
    
    - **Proof 9.5.1**
      **Injective** Suppose that $f\left(x_1\right)=f\left(x_2\right)$, that is,
      $$
      \begin{aligned}
      
      2x_1+1&=2x_2+1 \\
      2x_1&=2x_2 \\
      x_1&=x_2
      
      \end{aligned}
      $$
      then $f$ is injective.
    
      **Surjective** Let $y\in\mathbb R$ and consider $x=\dfrac{y-1}2\in\mathbb R$, then $f(x)=f\left(\dfrac{y-1}2\right)=2\left(\dfrac{y-1}2\right)+1=y-1+1=y$.
      Therefore $f$ is surjective.

---

- **Definition 10**
  Let $f\colon X\to Y$ be a function. If $A\subseteq X$ the **direct image** of $A$ under $f$, denoted $f(A)$, is the set
  $$
  f(A)=\left\{y\in Y:y=f(x)\text{ for some }x\in A\right\}
  $$
  Note that $f(A)\subseteq Y$ abd $f(X)=\text{Ran}(f)$.

  If $B\subseteq Y$ the **inverse image** of $B$ under $f$, denoted $f^{-1}(B)$, is the set
  $$
  f^{-1}(B)=\left\{x\in X:f(x)\in B\right\}
  $$

  - **Example 10.1**
    Let $X=\{1,2,3,4\},Y=\{a,b,c,d\}$ and $f\colon X\to Y$ defined by $f(1)=a,f(2)=c,f(3)=c,f(4)=a$.
    Consider $A=\left\{1,2,4\right\}\subseteq X$ and $B=\left\{a,b\right\}\subseteq Y$. Then
    $$
    f(A)=\left\{a,c\right\},\quad f^{-1}(B)=\left\{1,4\right\} \\
    f^{-1}(\left\{c\right\})=\left\{2,3\right\},\quad f^{-1}(\left\{d\right\})=\varnothing
    $$
    
  - **Proposition 10.2**
    Let $f\colon X\to Y$ a function, $A,B\subseteq X$ and $C,D\subseteq Y$.
    
    1. $f(A\cap B)\subseteq f(A)\cap f(B)$.
       **Proof**
       Let $y\in f(A\cap B)$ then $y=f(x)$ for some $x\in A\cap B$. Since $x\in A\cap B$ then $x\in A$ and $x\in B$, that is, $y=f(x)\in f(A)$ and $y=f(x)\in f(B)$. Hence $y\in f(A)\cap f(B)$ and thus $f(A\cap B)\subseteq f(A)\cap f(B)$.
    
    2. $f(A\cup B)=f(A)\cup f(B)$.
       **Proof**
       ($\subseteq$) Let $y\in f(A\cup B)$ then $y=f(x)$ for some $x\in A\cup B$. Since $x\in A\cup B$ then $x\in A$ or $x\in B$, that is, $y=f(x)\in f(A)$ or $y=f(x)\in f(B)$ hence $y\in f(A)\cup f(B)$ and thus $f(A\cup B)\subseteq f(A)\cup f(B)$.
    
       ($\supseteq$) Let $y\in f(A)\cup f(B)$ then $y\in f(A)$ or $y\in f(B)$, that is, $y=f(a)$ for some $a\in A$ or $y=f(b)$ for some $b\in B$. Therefore $y\in f(A\cup B)$ since $a,b\in A\cup B$ and thus $f(A)\cup f(B)\subseteq f(A\cup B)$.
    
    3. $f^{-1}(C\cap D)=f^{-1}(C)\cap f^{-1}(D)$.
       **Proof**
       ($\subseteq$) Let $x\in f^{-1}(C\cap D)$ then $f(x)\in C\cap D$, that is, $f(x)\in C$ and $f(x)\in D$ hence $x\in f^{-1}(C)$ and $x\in f^{-1}(D)$ therefore $x\in f^{-1}(C)\cap f^{-1}(D)$ and thus $f^{-1}(C\cap D)\subseteq f^{-1}(C)\cap f^{-1}(D)$.
    
       ($\supseteq$) Let $x\in f^{-1}(C)\cap f^{-1}(D)$ then $x\in f^{-1}(C)$ and $x\in f^{-1}(D)$, that is, $f(x)\in C$ and $f(x)\in D$ hence $f(x)\in C\cap D$, that is, $x\in f^{-1}(C\cap D)$ and thus $f^{-1}(C)\cap f^{-1}(D)\subseteq f^{-1}(C\cap D)$.
    
    4. $f^{-1}(C\cup D)=f^{-1}(C)\cup f^{-1}(D)$.
       **Proof**
       ($\subseteq$) Let $x\in f^{-1}(C\cup D)$ then $f(x)\in C\cup D$, that is, $f(x)\in C$ or $f(x)\in D$ hence $x\in f^{-1}(C)$ or $x\in f^{-1}(D)$ therefore $x\in f^{-1}(C)\cup f^{-1}(D)$ and thus $f^{-1}(C\cup D)\subseteq f^{-1}(C)\cup f^{-1}(D)$.
    
       ($\supseteq$) Let $x\in f^{-1}(C)\cup f^{-1}(D)$ then $x\in f^{-1}(C)$ or $x\in f^{-1}(D)$, that is, $f(x)\in C$ or $f(x)\in D$ hence $f(x)\in C\cup D$, that is, $x\in f^{-1}(C\cup D)$ and thus $f^{-1}(C)\cup f^{-1}(D)\subseteq f^{-1}(C\cup D)$.
    
  - **Remark 10.2**
    Note that $f(A)\cap f(B)\subseteq f(A\cap B)$ is not always true, for example consider the function $f\colon\mathbb R\to \mathbb R$ given by $f(x)=x^2$, $A=\{-1\}$ and $B=\{1\}$ then $f(A)={1}=f(B)$. But $f(A\cap B)=f(\varnothing)=\varnothing$.
    
  - **Exercise 10.3**
    If $f\colon X\to Y$ is injective and $A,B\subseteq X$ then $f(A)\cap f(B)\subseteq f(A\cap B)$.
    
  - **Theorem 10.4**
    Let $f\colon X\to Y$ be an injective function. Let $y\in\text{Ran}$ then there exists a **unique** $x\in X$ such that $y=f(x)$, that is, $f^{-1}(\{y\})=\{x\}$.
    
    - **Proof 10.4.1**
      Let $y\in\text{Ran}(f)$ then there exists $x\in X$ such that $y=f(x)$. Suppose that there exists $x^\prime\in X$ such that $y=f\left(x^\prime\right)$ then $f(x)=f\left(x^\prime\right)$ and as $f$ is injective we have that $x=x^\prime$.

---

- **Definition 11**
  A funtion $f\colon X\to Y$ is called **invertible** if there exists a function $g\colon Y\to X$ such that $g\circ f=\text{id}_X$ and $f\circ g=\text{id}_Y$. Such that function is called **inverse** of $f$.

- **Remark 11**
  If $f\colon X\to Y$ is invertible then its inverse is unique. In fact, suppose that $g,g^\prime\colon Y\to X$ are both inverse of $f$, then
  $$
  g\circ f=\text{id}_X=g^\prime\circ f\text{ and } f\circ g=\text{id}_Y=f\circ g^\prime
  $$
  hence $g=\text{id}_X\circ g=\left(g^\prime\circ f\right)\circ g=g^\prime\left(\circ f\circ g\right)=g^\prime \circ \text{id}_Y=g^\prime$.

  If $f$ is invertivle, the inverse of $f$ is denoted $f^{-1}$. Note that for all $x\in X$ and $y\in Y$
  $$
  y=f(x),\text{ if and only if, }f^{-1}(y)=x
  $$

  - **Example 11.1**
    Let $f\colon \mathbb R\to \mathbb R$ and $g\colon \mathbb R\to \mathbb R$ be the functions.
    $$
    f(x)=\begin{cases}
    
    x^2+2\quad (x\leqslant 0) \\
    2-x^2\quad (x>0)
    
    \end{cases} \quad
    g(x)=\begin{cases}
    
    -\sqrt{x-2} \quad(x\geqslant 2) \\
    \sqrt{2-x} \quad(x<2)
    \end{cases}
    $$
    Prove that $g=f^{-1}$.

    - **Proof 11.1.1**
      We need to prove that $g\circ f=\text{id}_\mathbb R$, that is, $(g\circ f)(x)=x$ for all $x\in\mathbb R$.
      If $x\leqslant 0$ then $x^2\geqslant 0$ and $x^2+2\geqslant 2$, hence $(g\circ f)(x)=g(f(x))=g\left(x^2+2\right)=-\sqrt{\left(x^2+2\right)-2}=-\sqrt{x^2}=-\vert x\vert=-(-x)=x$.
      If $x>0$ then $x^2>0$ and $2-x^2<2$, hence $(g\circ f)(x)=g(f(x))=g\left(2-x^2\right)=\sqrt{2-\left(2-x^2\right)}=\sqrt{x^2}=\vert x\vert=x$.

  - **Theorem 11.2**
    A function $f\colon X\to Y$ is invertible, if and only if, $f$ is bijective.

    - **Proof 11.2.1**
      ($\Longrightarrow$) Suppose that $f$ is invertivle then there exists $f^{-1}\colon Y\to X$ such that $f^{-1}\circ f=\text{id}_X$ and $f\circ f^{-1}=\text{id}_Y$.
      If $f(x)=f\left(x^\prime\right)$ then
      $$
      \begin{aligned}
      
      f^{-1}(f(x))&=f^{-1}\left(f\left(x^\prime\right)\right) \\
      (f^{-1}\circ f)(x)&=(f^{-1}\circ f)\left(x^\prime\right) \\
      \text{id}_X(x)&=\text{id}_{X}\left(x^\prime\right) \\
      x&=x^\prime
      \end{aligned}
      $$
      hence $f$ is injective.
      Let $y\in Y$ then $y=\text{id}_Y(y)=\left(f\circ f^{-1}\right)(y)=f\left(f^{-1}(y)\right)$ with $f^{-1}(y)\in X$, hence $f$ is surjective. Therefore, $f$ is bijective.

      ($\Longleftarrow$) Suppose that $f$ is bijective. Let $y\in Y$ then $y\in\text{Ran}(f)$ because $f$ is surjective and since $f$ is injective then by the previous theorem there exists a unique $x\in X$ such that $y=f(x)$.
      Define $g\colon Y\to X$ by $g(y)=x$ where $x$ is the unique element in $X$ such that $y=f(x)$ then
      $$
      g\circ f=g(f(x))=x=\text{id}_X(x) \\
      f\circ g=f(g(x))=y=\text{id}_Y(y)
      $$
      
      therefore $g\circ f=\text{id}_X,f\circ g=\text{id}_Y$ and thus $f$ is invertible.

---

- **Definition 12**
  Let $f\colon A\to B$ and $g\colon B\to A$ be two functions.

  $g$ is a **left inverse** of $f$ if $g\circ f=\text{id}_A$.

  $g$ is a **right inverse** of $f$ if $f\circ g=\text{id}_B$.
