---
title: "Week 4"
published: 2026-11-04
description: "C workshop exercises on loops, arithmetic functions, summation, Fibonacci numbers, odd-number summation, and digit counting."
tags: [MCS]
category: MCS
draft: false
image: ""
---

The worksheet uses the folders <code>15 - Arithmetic</code>, <code>16 - Summation</code>, <code>17 - Fibonacci</code>, <code>18 - Odd summation</code>, and <code>19 - Count digits</code>.

## Workshop Tasks

1. Download and extract the five project folders.
2. In the <code>Arithmetic</code> folder, implement every function declared in <code>arithmetic.h</code> in <code>arithmetic.c</code>.
3. In the <code>Summation</code> folder, implement <code>summation</code> in <code>summation.c</code>.
4. In the <code>Fibonacci</code> folder, implement <code>fibonacci</code> in <code>fibonacci.c</code>.
5. In the <code>Odd summation</code> folder, implement <code>odd_summation</code> in <code>odd_summation.c</code>.
6. In the <code>Count digits</code> folder, implement the digit-counting function in its source file.

Compile and run each program after completing its implementation.

The worksheet calls the final file and function <code>count_digits.c</code> and <code>count_digits</code>. The local project instead uses <code>digit_count.c</code> and <code>digit_count</code>; the notes below retain the names used by the local code.

## 1. Arithmetic

The arithmetic library contains the following functions.

| Function | Purpose |
| --- | --- |
| <code>min(a, b)</code> | Return the smaller value |
| <code>max(a, b)</code> | Return the larger value |
| <code>factorial(n)</code> | Compute <code>n!</code> |
| <code>power(base, exp)</code> | Compute an integer power |
| <code>quotient(n, d)</code> | Compute the integer quotient |
| <code>dec2bin(n)</code> | Convert decimal to binary digits |
| <code>bincheck(b)</code> | Check whether every digit is <code>0</code> or <code>1</code> |
| <code>bin2dec(b)</code> | Convert binary digits to decimal |
| <code>divisors(n)</code> | Count the positive divisors |
| <code>prime(n)</code> | Test whether <code>n</code> is prime |
| <code>gcd(a, b)</code> | Compute the greatest common divisor |
| <code>lcm(a, b)</code> | Compute the least common multiple |
| <code>fibonacci(n)</code> | Compute the zero-indexed Fibonacci number |

### Implementation

~~~c
#include <arithmetic.h>

int min(int a, int b)
{
    int result = a;

    if (b < a)
        result = b;

    return result;
}

int max(int a, int b)
{
    int result = a;

    if (b > a)
        result = b;

    return result;
}

int factorial(int n)
{
    int res = 1;
    for (int i = 1; i <= n; i++)
        res = res * i;
    return res;
}

int power(int base, int exp)
{
    int res = 1;
    for (int i = 1; i <= exp; i++)
        res = res * base;
    return res;
}

int quotient(int n, int d)
{
    return n / d;
}

int dec2bin(int n)
{
    int res = 0;
    int p = 1;

    while (n > 0)
    {
        int r = n % 2;
        res += r * p;
        p *= 10;
        n /= 2;
    }

    return res;
}

int bincheck(int b)
{
    while (b > 0)
    {
        if (b % 10 >= 2)
            return 0;
        b /= 10;
    }

    return 1;
}

int bin2dec(int b)
{
    int res = 0;
    int p = 1;

    while (b > 0)
    {
        int r = b % 10;
        res += r * p;
        p *= 2;
        b /= 10;
    }

    return res;
}

int divisors(int n)
{
    int res = 0;

    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
            res++;
    }

    return res;
}

int prime(int n)
{
    if (n == 1)
    {
        return 0;
    }
    else
    {
        for (int i = 2; i * i <= n; i++)
        {
            if (n % i == 0)
                return 0;
        }
    }

    return 1;
}

int gcd(int a, int b)
{
    return b ? gcd(b, a % b) : a;
}

int lcm(int a, int b)
{
    return a * b / gcd(a, b);
}

int fibonacci(int n)
{
    if (n == 0 || n == 1)
        return n;

    int a = 0;
    int b = 1;
    int c = 0;

    for (int i = 2; i <= n; i++)
    {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}
~~~

~~~bash
gcc -I. -std=c99 arithmetic.c main.c -o arithmetic
./arithmetic <n> <d>
~~~

## 2. Summation

The function computes

$$
0+1+2+\cdots+n.
$$

### Implementation

~~~c
#include <summation.h>

int summation(int n)
{
    int res = 0;
    for (int i = 0; i <= n; i++)
        res += i;
    return res;
}
~~~

~~~bash
gcc -I. -std=c99 summation.c main.c -o summation
./summation <n>
~~~

## 3. Fibonacci

This project uses the one-indexed Fibonacci sequence

$$
F_1=F_2=1,
\qquad
F_n=F_{n-1}+F_{n-2}.
$$

### Implementation

~~~c
#include <fibonacci.h>

int fibonacci(int n)
{
    if (n == 1 || n == 2)
    {
        return 1;
    }
    else
    {
        int a = 1;
        int b = 1;
        int c = 0;

        for (int i = 3; i <= n; i++)
        {
            c = a + b;
            a = b;
            b = c;
        }

        return c;
    }
}
~~~

~~~bash
gcc -I. -std=c99 fibonacci.c main.c -o fibonacci
./fibonacci <n>
~~~

## 4. Odd Summation

The function computes the sum of all positive odd integers not exceeding <code>n</code>.

### Implementation

~~~c
#include <odd_summation.h>

int odd_summation(int n)
{
    int res = 0;
    for (int i = 1; i <= n; i += 2)
        res += i;
    return res;
}
~~~

~~~bash
gcc -I. -std=c99 odd_summation.c main.c -o odd_summation
./odd_summation <n>
~~~

## 5. Digit Count

The function removes the sign of a negative input and repeatedly divides the value by <code>10</code>, counting the number of iterations.

### Implementation

~~~c
#include <digit_count.h>

int digit_count(int n)
{
    if (n < 0)
        n = -n;

    int res = 0;
    while (n > 0)
    {
        res++;
        n /= 10;
    }

    return res;
}
~~~

~~~bash
gcc -I. -std=c99 digit_count.c main.c -o digit_count
./digit_count <n>
~~~

## Source Attribution

The source headers identify the exercise code as copyright © 2025 Valentin Cassano and Santiago Figueira and licensed under GNU GPL version 3 or later.
