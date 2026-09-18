---
title: "Complex Numbers"
published: 2026-09-18
description: ""
tags: [MCS]
category: MCS
draft: false
image: ""
---
## Complex Numbers $\newcommand{\i}{\operatorname{i}}$

- **Exercise 1**
  Comupute
  $$
  1+ \operatorname i+\operatorname i^2+\cdots+\operatorname i^{2026}.
  $$

  - **Solution 1.1**
    We have that
    $$
    \operatorname i^n=\begin{cases}
    
    1\quad&(n=4k) \\
    \operatorname i &(n=4k+1) \\
    -1 &(n=4k+2) \\
    -\operatorname i &(n=4k+3)
    
    \end{cases}\quad\operatorname{For\ some} k\in\Z.
    $$
    Thus
    $$
    \begin{aligned}
    
    1+ \operatorname i+\operatorname i^2+\cdots+\operatorname i^{2026} &= 1+\operatorname i-1-\operatorname i+\cdots+1+\operatorname i-1 \\
    &= \operatorname i.
    
    \end{aligned}
    $$

---

- **Exercise 2**
  Prove that $\forall z\in\C$, $z=\overline{z}\iff z\text{ is real}$, $z=-\overline{z}\iff z$ is purely imaginary.

  - **Proof 2.1**
    Suppose $x,y\in\R,z=x+\operatorname iy$. Then $\overline z=x-\operatorname iy$. Suppose $z=\overline z$.

    1. ($\Longrightarrow$) $x+\i y=x-\i y\implies x=x,y=y\implies y=0\implies z=x\in\R$.
       ($\Longleftarrow$) If $z\in\R$ then $z=z+0\i$ and then $\overline{z}=z-0\i =z$.
    
    2. ($\Longrightarrow$) Suppose $z=-\overline z$, then $x+\i y=-x+\i y\implies x=-x\implies x=0,z=0+\i y=\i y$ is a purely imaginary.
       ($\Longleftarrow$) Suppose $z$ is a purely imaginary, $z=0+\i y,y\in \R,\overline z=0-\i y,-\overline z=\i y\implies z=-\overline z$.

---

- **Exercise 3**
  Describe the sets of all $z\in\mathbb C$ satisfying:

  1. $\vert z\vert=2$.
  2. $\vert z-(1+\i )\vert=2$.
  3. $\vert z-(2-\i)\vert<3$.

  - **Solution 3.1**
    Let $x,y\in\mathbb R$ and let $z=x+\i y=(x,y)$ represent a point in the complex plane. Geometrically, for any fixed $z_0 \in \mathbb C$, the expression $|z - z_0|$ denotes the distance between the points $z$ and $z_0$. We analyze each set as follows:

    1. **Description of the first set ($|z|=2$)**:
       By the definition of the modulus, substituting $z = x + \i y$ yields:
       $$
       |x + \i y| = 2 \implies \sqrt{x^2 + y^2} = 2.
       $$
       Squaring both sides, we obtain the algebraic equation:
       $$
       x^2 + y^2 = 4.
       $$
       Geometrically, this equation represents a circle in the complex plane.  
       Therefore, the set describes a **circle centered at the origin $(0,0)$ with a radius of $2$**.
       
    2. **Description of the second set ($|z-(1+\i)|=2$)**:
       We rewrite the equation by grouping the real and imaginary parts:
       $$
       |(x-1) + \i(y-1)| = 2.
       $$
       By the definition of the modulus, squaring both sides yields:
       $$
       (x-1)^2 + (y-1)^2 = 4.
       $$
       Geometrically, this is the standard Cartesian equation of a circle.  
       Therefore, the set describes a **circle centered at the point $1+\i = (1,1)$ with a radius of $2$**.
       
    3. **Description of the third set ($|z-(2-\i)|<3$)**:
       We rewrite the inequality by grouping the real and imaginary parts:
       $$
       |(x-2) + \i(y+1)| < 3.
       $$
       By the definition of the modulus, squaring both sides yields:
       $$
       (x-2)^2 + (y+1)^2 < 9.
       $$
       Geometrically, a strict inequality ($<$) represents the interior region bounded by a boundary curve.  
       Therefore, the set describes the **open disk consisting of all points inside the circle centered at $2-\i = (2,-1)$ with a radius of $3$ (excluding the boundary circle itself)**.

---

- **Exercise 4**
  Describe the set of all complex numbers $z$ satisfying $\vert z-1\vert=\vert z-\i\vert$.

  - **Solution 4.1**
    Let $x,y\in\mathbb R$ and let $z=x+\i y$. We substitute $z$ into the modulus equation:
    $$
    |(x-1) + \i y| = |x + \i(y-1)|.
    $$
    By the definition of the modulus, squaring both sides yields:
    $$
    (x-1)^2 + y^2 = x^2 + (y-1)^2.
    $$
    Expanding both sides of the equation, we obtain:
    $$
    x^2 - 2x + 1 + y^2 = x^2 + y^2 - 2y + 1.
    $$
    Canceling out the common terms $x^2$, $y^2$, and $1$ from both sides gives:
    $$
    -2x = -2y \implies y = x.
    $$
    Geometrically, this equation represents a straight line in the complex plane. 
    Therefore, the set describes the straight line $y = x$, which is the perpendicular bisector of the line segment joining the points $1 = (1,0)$ and $\i = (0,1)$.

---

- **Exercise 5**
  Without using polar form, find all complex numbers satisfying $z^2=\i$.

  - **Solution 5.1**
    Let $x,y\in\mathbb R$ and let $z=x+y\i$. Then squaring $z$ yields $z^2=x^2-y^2+2xy\i=0+1\i$. By equalling the real and imaginary parts, we obtain the following system of equations:
    $$
    \begin{aligned}
    x^2-y^2 &= 0, \quad (1) \\
    2xy &= 1. \quad (2)
    \end{aligned}
    $$
    From equation (1), factoring the difference of squares gives $(x-y)(x+y)=0$, which implies $x=y$ or $x=-y$. 
    From equation (2), we have $xy = \frac{1}{2} > 0$, which means $x$ and $y$ must have the same sign. This rules out the case $x=-y$. Therefore, we must have $x=y$. 
    Substituting $x=y$ into equation (2) yields $2x^2 = 1 \implies x^2 = \frac{1}{2}$, which gives $x = \pm \dfrac{\sqrt 2}{2}$. We then split it into two cases based on the sign:

    1. **Case 1**: $x,y>0$.  
       This yields $x = y = \dfrac{\sqrt 2}{2}$. Hence, $z = \dfrac{\sqrt 2}{2}+\dfrac{\sqrt 2}{2}\i$.

    2. **Case 2**: $x,y<0$.  
       This yields $x = y = -\dfrac{\sqrt 2}{2}$. Hence, $z = -\dfrac{\sqrt 2}{2}-\dfrac{\sqrt 2}{2}\i$.

    Therefore, the required complex numbers satisfying $z^2=\i$ are $z=\dfrac{\sqrt 2}{2}+\dfrac{\sqrt 2}{2}\i$ and $z=-\dfrac{\sqrt 2}{2}-\dfrac{\sqrt 2}{2}\i$.
