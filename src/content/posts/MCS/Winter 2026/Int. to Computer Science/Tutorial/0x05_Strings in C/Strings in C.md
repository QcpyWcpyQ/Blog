---
title: "Strings in C"
published: 2026-11-10
description: "The representation of strings in C, null termination, typedef aliases, dynamic allocation with the string macro, and basic string loops."
tags: [MCS]
category: MCS
draft: false
image: ""
---

Source: *Tutorial 05: Strings in C*, Introduction to Computer Science, Guangdong Technion Israel Institute of Technology, 12 slides. The supplied file is *slides_T5.pdf*. References below use PDF page numbers counted from the title page.

## Goals

*Slide 2.*

By the end of this tutorial, we should be able to:

1. Recognize that C has no primitive string type and explain how strings are represented instead.
2. Describe the role of the null terminator <code>'\0'</code> and explain why every string needs one.
3. Understand the <code>typedef</code> construct used to declare string variables and explain what it hides.
4. Use the <code>string(n)</code> macro to allocate a string of a given length.

## Strings in C

*Slides 3-6.*

### No primitive string type

In many languages, a string is a built-in type with its own operators. C has no primitive string type.

The following statements cannot be written in C:

~~~c
string s = "Hello!";   /* Invalid: string is not a C type. */

s = s + " World";      /* Invalid: C has no string concatenation operator. */

if (s == "Hello!")     /* == compares addresses, not string contents. */
~~~

Instead, a string is an array of <code>char</code> values stored in consecutive memory locations. The last character must be <code>'\0'</code>, the null character that marks the end of the string.

Operations such as finding the length, copying, comparing, and concatenating must be performed explicitly, one character at a time. Implementing these operations gives us an opportunity to practice common loop patterns on strings.

### Strings as arrays of char

A string in C is a <code>char</code> array whose last element is <code>'\0'</code>. For example,

~~~c
char* s = "Hello!";
~~~

is stored in memory as seven bytes:

| Index | Stored value |
| ---: | :---: |
| <code>0</code> | <code>'H'</code> |
| <code>1</code> | <code>'e'</code> |
| <code>2</code> | <code>'l'</code> |
| <code>3</code> | <code>'l'</code> |
| <code>4</code> | <code>'o'</code> |
| <code>5</code> | <code>'!'</code> |
| <code>6</code> | <code>'\0'</code> |

The string <code>"Hello!"</code> contains six characters but occupies seven bytes. The extra byte stores the null terminator.

The null terminator is not part of the string's content. It is a sentinel marking the end of the string; without it, there is no way to determine where the string stops in memory.

The **length** of a string is the number of content characters. The **size** of the corresponding array is the length plus one, because it must also contain <code>'\0'</code>.

String indexing works like ordinary array indexing:

~~~c
char c = s[0];   /* c = 'H' */
char d = s[5];   /* d = '!' */
char e = s[6];   /* e = '\0' */
~~~

### The null terminator

The character <code>'\0'</code> has ASCII value <code>0</code>. C uses it to mark the end of a string.

Every string-processing function ultimately scans the characters one at a time and stops upon reaching <code>'\0'</code>.

~~~c
/* Pattern for iterating over a string. */
int i = 0;

while (s[i] != '\0')
{
    /* Process s[i]. */
    i = i + 1;
}
~~~

This is the early-exit <code>while</code> pattern, with the exit condition stored in the data itself.

The null terminator and the digit zero are different characters:

| Literal | ASCII value | Meaning |
| :---: | ---: | --- |
| <code>'\0'</code> | <code>0</code> | Null terminator: the end of a string |
| <code>'0'</code> | <code>48</code> | The digit character zero |

Confusing <code>'\0'</code> with <code>'0'</code> commonly causes off-by-one errors and infinite loops.

## typedef and #define

*Slides 7-9.*

### typedef char* str

We use <code>typedef</code> to give <code>char*</code> the alias <code>str</code>, making string variables easier to read and write.

~~~c
typedef char* str;
~~~

After this declaration, <code>str</code> and <code>char*</code> are interchangeable: the compiler treats them as the same type.

Without the alias, a string variable and a copy function are written as follows:

~~~c
char* greeting = "Hello!";
char* copy(char* s, char* d)
{
    /* ... */
}
~~~

With the alias, the same declarations become:

~~~c
str greeting = "Hello!";
str copy(str s, str d)
{
    /* ... */
}
~~~

The type <code>char*</code> carries two ideas: a pointer to a character and a string. The name <code>str</code> keeps the second meaning visible. Pointers will be studied later; for now, <code>str</code> lets us work with strings without using the pointer terminology directly.

### Creating strings with the string macro

To create a new writable string of a given length, we use a <code>#define</code> macro.

~~~c
#define string(n) \
    ((str) calloc((n + 1), sizeof(char)))
~~~

The macro allocates <code>n + 1</code> bytes: <code>n</code> bytes for the content and one byte for <code>'\0'</code>.

For example,

~~~c
string(6)
~~~

is replaced by the preprocessor with

~~~c
((str) calloc((6 + 1), sizeof(char)))
~~~

A macro is a textual substitution performed before compilation. The expression <code>string(n)</code> is not a function; it is shorthand that the preprocessor replaces with a call to <code>calloc</code>.

A writable string can be created and filled as follows:

~~~c
str s = string(6);   /* Room for six characters and '\0'. */

s[0] = 'H';
s[1] = 'e';
s[2] = 'l';
s[3] = 'l';
s[4] = 'o';
s[5] = '!';
~~~

Always allocate the length plus one byte. Forgetting the extra byte is one of the most common string errors in C. Because <code>calloc</code> initializes every allocated byte to zero, the null terminator is already present.

## Our String Library

*Slide 10.*

Instead of using C's standard string functions, such as <code>strlen</code> and <code>strcpy</code>, we implement the string operations ourselves. Every operation reduces to a loop over characters, so this provides direct practice with loop patterns on a concrete data structure.

The tutorial introduces the following functions:

| Function | Purpose | Loop pattern |
| --- | --- | :---: |
| <code>len(s)</code> | Return the length of <code>s</code> | <code>while</code> |
| <code>cpy(s, d)</code> | Copy <code>s</code> into <code>d</code> | <code>for</code> |
| <code>cat(s, t, r)</code> | Join <code>s</code> and <code>t</code> in <code>r</code> | <code>for</code> |
| <code>equal(s, t)</code> | Determine whether <code>s</code> and <code>t</code> are equal | <code>while</code> |

The key loop is the implementation of <code>len</code>:

~~~c
/* len: count characters until '\0'. */
int len(str s)
{
    int n = 0;

    while (s[n] != '\0')
    {
        n = n + 1;
    }

    return n;
}
~~~

The function <code>len</code> is the foundation of the library. The functions <code>cpy</code> and <code>cat</code> can use it to determine where strings end, so <code>len</code> is implemented first.

## Key Takeaways

*Slide 11.*

1. C has no primitive string type. A string is a <code>char</code> array terminated by <code>'\0'</code>.
2. The null terminator is not part of the content; it is a sentinel marking the end of the string.
3. A string of length <code>n</code> occupies <code>n + 1</code> bytes. The extra byte is reserved for <code>'\0'</code>.
4. The null terminator <code>'\0'</code> has ASCII value <code>0</code>, whereas the digit character <code>'0'</code> has ASCII value <code>48</code>.
5. The declaration <code>typedef char* str</code> gives <code>char*</code> a readable alias that expresses the intention to store a string.
6. The macro <code>string(n)</code> allocates <code>n + 1</code> bytes for a writable string and initializes its null terminator.
7. Every string function reduces to a loop that scans characters until it reaches <code>'\0'</code>.
