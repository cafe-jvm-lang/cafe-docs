---
id: cafe-fundamentals
title: Cafe Fundamentals
sidebar_label: Cafe Fundamentals
slug: /fundamentals
---

This section covers fundamental concept of [Structured Programming](https://en.wikipedia.org/wiki/Structured_program_theorem) for any algorithm, that is `Iteration, selection & Sub-sequence`  with the syntax to implement in cafe.

## Comments

Cafe supports single line comment using ``#`` Symbol and multi line comments using ``/*..*/``

```
# this is a single line comment.
/*
    this is a Multi-line comment.
*/
```



## Variables & Constants

As cafe is dynamically typed, the variables can be declared using `var` keyword and constants can be declared using `const` keyword.

```
var a=10, b;
const c = “Hey!”;
```



## Data types

**String**		: represents sequence of characters.

**Number**:   : represents numeric values.

**Boolean**	: represents boolean value either `true `or `false`.

```
var a = “Hi”;
var b = 100, c=10.2;
var d=true; 
```



## Operators

| Symbol(s)                  | Description                                                  | Examples                                                     |
| -------------------------- | ------------------------------------------------------------ | :----------------------------------------------------------- |
| =                          | Assign a value to a variable.                                | var a = 10;                                                  |
| +                          | Returns the sum of numeric operands or string concatenation. | `cmd.println(2+3); # 5                                 cmd.println(“Hello” + “World”); # HelloWorld` |
| -                          | Subtracts the two operands, producing their difference.      | `cmd.println(4-2); # 2`                                      |
| *                          | Multiplication on numbers and strings.                       | `cmd.println(4*2); # 8                                 cmd.println("Hello"*2) # HelloHello` |
| /                          | Division on numbers.                                         | `cmd.println(4/2); # 2`                                      |
| %                          | Modulo on numbers.                                           | `cmd.println(8/3); # 2`                                      |
| **                         | Computes the power of a number.                              | `cmd.println(2**3); # 8`                                     |
| //                         | Computes the floor of a number.                              | `cmd.println(9//2); # 4`                                     |
| \|\| , && , !or , and, not | Logical operators.                                           | `cmd.println((true and true)); # true  cmd.println(not true); # false` |
| == , != , > , >= , <, <=   | Relational operators.                                        | `cmd.println((2 >= 3)); # false`                             |
| >> , >>> , ~ , <<          | Bitshift operators.                                          | `cmd.println((2 >> 1)); # 1`                                 |
| & , \| , ^ , ~             | Bitwise operators.                                           | `cmd.println((2 & 2)); # 2`                                  |



## Control Flow

### 															`if..else`

The if statement executes a statement if a specified condition is evaluated true. 

If the condition is false, another statement can be executed. 

Multiple ``if...else`` statements can be nested to create an ``else if`` clause.

Syntax

```
if(condition1)
    Statement1
else if(condition2)
    Statement2
...
...
else
    StatementN
```



Example

```
var i=10;
if(i<10){
    cmd.println(“Less Than 10”);
} else if(i==10){
    cmd.println(“Equals”);
} else {
    cmd.println(“Greater Than 10”);
}
                                            
```

### `for` Loop

The `for` statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by `;`, followed by a statement (usually a block statement) to be executed in the loop.

Syntax

```
for ([initialization]; [condition]; [final-expression])
    statements
```



Example

```
# prints 0 to 4.
for(var i=0;i<5;i=i+1){
    cmd.println(i);
}
var i=0;
for(;i<5;i=i+1){
    cmd.println(i);
}
                                            
```

## `{Object}`

Cafe Objects are a collection of properties made up of key-value pairs. Keys are unique & valid identifiers. Values can be any valid type (primitives, Functions or Objects). Objects can be declared using {} notation.

Syntax

```javascript
{[[key: value],([key: value],)*]}
```

Example

```
var a = {};
func Hi(){ return “hi”; }
var a = { 
	hello: “world!”, 
	a: 1, 
	b: Hi  # references a function object Hi. 
};
```

Object properties can be accessed using the `.`  or `[]` operator.

Syntax

```
object.property
object[property]
```

Example

```
var z = “a”;
cmd.println(a.hello); # world!
cmd.println(a.b());   # hi
cmd.println(a[“hello”]);# world!
cmd.println(a[z]);	   # 1
```

## `Function`

In CAFE, functions can be declared using keyword `func`.

Syntax

```
func name([param[, param,[..., param]]]) {
	[statements]
}
```

**`name`**
The function name.

**`param `	(Optional)**
The argument names to be passed to the function.

**`statements`**
The statements which comprise the body of the function.



Example

```
func areaOfTriangle(base, height){
	return 0.5 * base * height;
}
cmd.print(areaOfTriangle(5, 10)); # 25
```