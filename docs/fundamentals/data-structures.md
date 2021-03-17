---
id: data-structures
title: Data Structures
sidebar_label: Data Structures
slug: /fundamentals/data-structures
---

<!-- # Data Structures -->



## List

Array-like data structure helps to store values in order.

Example

``` 
var list = [10,{a:10}, [“String”]];
```

### Subscript[]

This operation helps manipulate values in data structures.	

Example

``` 
var a = [10, 20, 30];	
cmd.println(a[1]); # 20	
var obj = {a: 10, b: [20,30] };	
cmd.println(obj[a]); 	# 10	
cmd.println(obj[b][1]); 	# 30
var x = {a:10};
x["l"] = [0, [2,4,6,8], 10];
x.l[1][0] = "new 2";
```



### Slice[:]

Manipulate data structure over a range of values. 

This operation slices data structure from `start `index till `end` index(excluded).

Syntax

```
list[start: end]
```


Example

```
var x = {a:10};
l = [0, [2,4,6,8], 10];	
x[“l”] = l;	
x.l[0:1] = 3;		
l[2:3] = [“over”, “ride”];
```



