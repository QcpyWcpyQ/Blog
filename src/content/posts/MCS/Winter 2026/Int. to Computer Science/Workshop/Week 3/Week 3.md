---
title: "Week 3"
published: 2026-10-28
description: "C workshop exercises on conditional statements, character classification, letter conversion, and grade conversion."
tags: [MCS]
category: MCS
draft: false
image: ""
---

The worksheet uses the folders <code>06 - Max</code>, <code>09 - Absolute Value</code>, <code>10 - Successor</code>, <code>11 - Interval</code>, <code>12 - Character type</code>, <code>13 - Letter converter</code>, and <code>14 - Grades</code>.

## Workshop Tasks

1. Download and extract the seven project folders.
2. In the <code>Absolute Value</code> folder, implement <code>abs</code> in <code>abs.c</code>.
3. In the <code>Successor</code> folder, implement <code>succ</code> in <code>succ.c</code>.
4. In the <code>Max</code> folder, implement <code>max</code> in <code>max.c</code>.
5. In the <code>Interval</code> folder, implement <code>interval</code> in <code>interval.c</code>.
6. In the <code>Character type</code> folder, implement <code>char_type</code> in <code>chartype.c</code>.
7. In the <code>Letter converter</code> folder, implement <code>char_converter</code> in <code>charconverter.c</code>.
8. In the <code>Grades</code> folder, implement <code>number_to_letter</code>, <code>letter_to_number</code>, and <code>rounding</code> in <code>grades.c</code>.

Compile and run each program after completing its implementation.

## 1. Absolute Value

The function returns the absolute value of an integer.

### Implementation

~~~c
#include <abs.h>

int abs(int n)
{
    if (n < 0)
        return -n;
    else
        return n;
}
~~~

~~~bash
gcc -I. -std=c99 abs.c main.c -o abs
./abs <n>
~~~

## 2. Successor

The function computes the successor of <code>num</code> modulo <code>mod</code>. When <code>num + 1</code> reaches <code>mod</code>, it wraps around to <code>0</code>.

### Implementation

~~~c
#include <succ.h>

int succ(int num, int mod)
{
    num = num + 1;
    if (num == mod)
        num = 0;
    return num;
}
~~~

~~~bash
gcc -I. -std=c99 succ.c main.c -o succ
./succ <num> <mod>
~~~

## 3. Maximum

The function returns the greater of two integers.

### Implementation

~~~c
#include <max.h>

int max(int a, int b)
{
    if (a < b)
        return b;
    else
        return a;
}
~~~

~~~bash
gcc -I. -std=c99 max.c main.c -o max
./max <a> <b>
~~~

## 4. Interval

The function returns <code>1</code> when <code>number</code> belongs to the closed interval from <code>interval_begin</code> to <code>interval_end</code>, and <code>0</code> otherwise.

### Implementation

~~~c
#include <interval.h>

int interval(int number, int interval_begin, int interval_end)
{
    if (interval_begin <= number && number <= interval_end)
        return 1;
    else
        return 0;
}
~~~

~~~bash
gcc -I. -std=c99 interval.c main.c -o interval
./interval <number> <begin> <end>
~~~

## 5. Character Type

The function classifies one character according to the following return values.

| Character type | Return value |
| --- | --- |
| Lowercase letter | <code>0</code> |
| Uppercase letter | <code>1</code> |
| Decimal digit | <code>2</code> |
| Other character | <code>3</code> |

### Implementation

~~~c
#include <chartype.h>

int char_type(char c)
{
    if ('a' <= c && c <= 'z')
        return 0;
    else if ('A' <= c && c <= 'Z')
        return 1;
    else if ('0' <= c && c <= '9')
        return 2;
    else
        return 3;
}
~~~

~~~bash
gcc -I. -std=c99 chartype.c main.c -o chartype
./chartype <character>
~~~

## 6. Letter Converter

The function converts lowercase letters to uppercase and uppercase letters to lowercase. Every other character remains unchanged.

### Implementation

~~~c
#include <charconverter.h>

char char_converter(char c)
{
    if ('a' <= c && c <= 'z')
        return c - 'a' + 'A';
    else if ('A' <= c && c <= 'Z')
        return c - 'A' + 'a';
    else
        return c;
}
~~~

~~~bash
gcc -I. -std=c99 charconverter.c main.c -o charconverter
./charconverter <character>
~~~

## 7. Grades

The numeric and letter grade correspondence is

| Numeric grade | Letter grade |
| --- | --- |
| <code>90</code>–<code>100</code> | <code>A</code> |
| <code>80</code>–<code>89</code> | <code>B</code> |
| <code>70</code>–<code>79</code> | <code>C</code> |
| <code>60</code>–<code>69</code> | <code>D</code> |
| <code>0</code>–<code>59</code> | <code>F</code> |

### Implementation

~~~c
#include <grades.h>

char number_to_letter(int grade)
{
    if (90 <= grade && grade <= 100)
        return 'A';
    else if (80 <= grade && grade <= 89)
        return 'B';
    else if (70 <= grade && grade <= 79)
        return 'C';
    else if (60 <= grade && grade <= 69)
        return 'D';
    else
        return 'F';
}

int letter_to_number(char grade)
{
    if (grade == 'A')
        return 100;
    else if (grade == 'B')
        return 89;
    else if (grade == 'C')
        return 79;
    else if (grade == 'D')
        return 69;
    else
        return 59;
}

int rounding(int grade)
{
    int x = grade / 10 * 10;
    if (grade - x <= 4)
        return x;
    else
        return x + 10;
}
~~~

Compile the three drivers separately.

~~~bash
gcc -I. -std=c99 grades.c number_to_letter.c -o number_to_letter
gcc -I. -std=c99 grades.c letter_to_number.c -o letter_to_number
gcc -I. -std=c99 grades.c rounding.c -o rounding

./number_to_letter <numeric-grade>
./letter_to_number <letter-grade>
./rounding <numeric-grade>
~~~

## Source Attribution

The source headers identify the exercise code as copyright © 2025 Valentin Cassano and Santiago Figueira and licensed under GNU GPL version 3 or later.
