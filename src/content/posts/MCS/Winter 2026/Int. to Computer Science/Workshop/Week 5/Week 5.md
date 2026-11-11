---
title: "Week 5"
published: 2026-11-11
description: "C workshop exercise implementing a small null-terminated string library."
tags: [MCS]
category: MCS
draft: false
image: ""
---

The worksheet uses the archive <code>20 - StrLib.zip</code>. The local project contains <code>README.md</code>, <code>strlib.h</code>, and <code>strlib.c</code>. A separate <code>main.c</code> is used to test the implementation.

## Workshop Tasks

1. Download <code>20 - StrLib.zip</code> from Moodle and extract it.
2. Implement and test the functions in the following order.

   1. <code>len</code>
   2. <code>cpy</code>
   3. <code>cat</code>
   4. <code>cmp</code>
   5. <code>palindrome</code>
   6. <code>indexOf</code>
   7. <code>contains</code>
   8. <code>slice</code>

Each function is declared and specified in <code>strlib.h</code>. The header file does not need to be modified.

## C Strings

A C string is an array of characters ending with the null character <code>'\0'</code>. The number of characters before <code>'\0'</code> is the length of the string.

The header defines

~~~c
typedef char* str;

#define string(n) ((str) calloc((n) + 1, sizeof(char)))
~~~

The macro <code>string(n)</code> allocates room for <code>n</code> characters and one null terminator. Because <code>calloc</code> initializes the allocated bytes to zero, a newly allocated string is initially empty.

## Function Summary

| Function | Purpose | Important boundary case |
| --- | --- | --- |
| <code>len(s)</code> | Return the number of characters before <code>'\0'</code> | <code>len("") == 0</code> |
| <code>cpy(src, dst)</code> | Copy <code>src</code> into <code>dst</code> | The null terminator must also be written |
| <code>cat(lft, rgt, res)</code> | Concatenate two strings | Either input may be empty |
| <code>cmp(st1, str2)</code> | Compare strings lexicographically | A proper prefix comes first |
| <code>palindrome(phrase)</code> | Test whether a string reads the same backwards | Empty and one-character strings are palindromes |
| <code>indexOf(phrase, c)</code> | Find the first occurrence of a character | Return <code>-1</code> when absent |
| <code>contains(phrase, pattern)</code> | Search for a substring | Every string contains the empty pattern |
| <code>slice(string, start, end, dest)</code> | Copy the range <code>[start, end)</code> | <code>start == end</code> produces an empty string |

## Complete Implementation

~~~c
#include <strlib.h>

int len(str s)
{
    int length = 0;

    while (s[length] != '\0')
        length++;

    return length;
}

str cpy(str src, str dst)
{
    int i;

    for (i = 0; src[i] != '\0'; i++)
        dst[i] = src[i];

    dst[i] = '\0';
    return dst;
}

str cat(str lft, str rgt, str res)
{
    int i;
    int j;

    for (i = 0; lft[i] != '\0'; i++)
        res[i] = lft[i];

    for (j = 0; rgt[j] != '\0'; j++)
        res[i + j] = rgt[j];

    res[i + j] = '\0';
    return res;
}

int cmp(str st1, str str2)
{
    int i = 0;

    while (st1[i] != '\0' &&
           str2[i] != '\0' &&
           st1[i] == str2[i])
    {
        i++;
    }

    return (unsigned char) st1[i] - (unsigned char) str2[i];
}

int palindrome(str phrase)
{
    int length = len(phrase);

    for (int i = 0; i < length / 2; i++)
    {
        if (phrase[i] != phrase[length - 1 - i])
            return 0;
    }

    return 1;
}

int indexOf(str phrase, char character_to_search)
{
    int i = 0;

    while (phrase[i] != '\0')
    {
        if (phrase[i] == character_to_search)
            return i;
        i++;
    }

    return -1;
}

int contains(str phrase, str pattern)
{
    int phrase_length = len(phrase);
    int pattern_length = len(pattern);

    if (pattern_length > phrase_length)
        return 0;

    for (int i = 0; i <= phrase_length - pattern_length; i++)
    {
        int j = 0;

        while (j < pattern_length && phrase[i + j] == pattern[j])
            j++;

        if (j == pattern_length)
            return 1;
    }

    return 0;
}

str slice(str string, int start, int end, str dest)
{
    int result_length = end - start;

    for (int i = 0; i < result_length; i++)
        dest[i] = string[start + i];

    dest[result_length] = '\0';
    return dest;
}
~~~

## Implementation Notes

### 1. Length

<code>len</code> advances an index until it reaches <code>'\0'</code>. The null terminator is not included in the result.

### 2. Copy

<code>cpy</code> copies every character and then writes a new null terminator. The caller must allocate enough space in <code>dst</code>.

### 3. Concatenation

<code>cat</code> first copies <code>lft</code>, then continues from that position while copying <code>rgt</code>. The caller must provide room for

$$
\operatorname{len}(\texttt{lft})+\operatorname{len}(\texttt{rgt})
$$

characters and the null terminator.

### 4. Lexicographic Comparison

<code>cmp</code> skips the common prefix. At the first different position, it returns the difference between the two character values. If one string ends first, its null character makes the result negative.

### 5. Palindrome

Only the first half of the string must be checked. Position <code>i</code> is compared with position

$$
\operatorname{len}(\texttt{phrase})-1-i.
$$

### 6. Character Search

<code>indexOf</code> returns immediately when it finds the first matching character. If the loop reaches <code>'\0'</code>, the character is absent and the function returns <code>-1</code>.

### 7. Substring Search

<code>contains</code> treats each possible starting position as a candidate and compares the pattern character by character. A pattern of length zero matches immediately.

### 8. Slice

The interval is half-open: <code>start</code> is included and <code>end</code> is excluded. The result therefore contains exactly <code>end - start</code> characters.

## Test Driver

The following driver covers the normal and boundary cases listed in <code>README.md</code>.

~~~c
#include <assert.h>
#include <stdio.h>
#include <stdlib.h>

#include <strlib.h>

int main(void)
{
    assert(len("") == 0);
    assert(len("a") == 1);
    assert(len("Hello!") == 6);

    str empty_copy = string(0);
    str hello_copy = string(6);
    assert(empty_copy != NULL);
    assert(hello_copy != NULL);
    assert(cpy("", empty_copy) == empty_copy);
    assert(len(empty_copy) == 0);
    assert(cpy("Hello!", hello_copy) == hello_copy);
    assert(cmp(hello_copy, "Hello!") == 0);

    str joined = string(6);
    str left_empty = string(3);
    str right_empty = string(3);
    assert(joined != NULL);
    assert(left_empty != NULL);
    assert(right_empty != NULL);
    assert(cat("foo", "bar", joined) == joined);
    assert(cmp(joined, "foobar") == 0);
    assert(cmp(cat("", "bar", left_empty), "bar") == 0);
    assert(cmp(cat("foo", "", right_empty), "foo") == 0);

    assert(cmp("abc", "abc") == 0);
    assert(cmp("abc", "abd") < 0);
    assert(cmp("b", "a") > 0);
    assert(cmp("ab", "abc") < 0);
    assert(cmp("", "a") < 0);
    assert(cmp("", "") == 0);

    assert(palindrome("") == 1);
    assert(palindrome("a") == 1);
    assert(palindrome("abba") == 1);
    assert(palindrome("racecar") == 1);
    assert(palindrome("abc") == 0);
    assert(palindrome("Abba") == 0);

    assert(indexOf("Hello!", 'l') == 2);
    assert(indexOf("Hello!", 'H') == 0);
    assert(indexOf("Hello!", '!') == 5);
    assert(indexOf("Hello!", 'z') == -1);
    assert(indexOf("", 'a') == -1);

    assert(contains("foobar", "oba") == 1);
    assert(contains("foobar", "bar") == 1);
    assert(contains("foobar", "baz") == 0);
    assert(contains("foo", "foobar") == 0);
    assert(contains("foo", "") == 1);
    assert(contains("", "a") == 0);

    str whole = string(6);
    str middle = string(2);
    str empty_slice = string(0);
    assert(whole != NULL);
    assert(middle != NULL);
    assert(empty_slice != NULL);
    assert(cmp(slice("Hello!", 0, 6, whole), "Hello!") == 0);
    assert(cmp(slice("Hello!", 1, 3, middle), "el") == 0);
    assert(cmp(slice("Hello!", 2, 2, empty_slice), "") == 0);

    free(empty_copy);
    free(hello_copy);
    free(joined);
    free(left_empty);
    free(right_empty);
    free(whole);
    free(middle);
    free(empty_slice);

    puts("All strlib tests passed.");
    return 0;
}
~~~

## Compilation and Execution

Compile the library and test driver together.

~~~bash
gcc -I. -std=c99 -Wall -Wextra -Werror -pedantic \
    strlib.c main.c -o main
./main
~~~

The expected output is

~~~text
All strlib tests passed.
~~~

## Source Attribution

The source headers identify the exercise code as copyright © 2025 Valentin Cassano and Santiago Figueira and licensed under GNU GPL version 3 or later.
