---
id: modular-programming
title: Modular Programming
sidebar_label: Modular Programming
---

<!-- # Modular Programming -->



## Export

Cafe supports export of variables and functions using `export` keyword in global scope.

Every variable and function is private by default unless it is marked as ‘export’. 

Variables and functions can be marked as `export` at the time of declaration.

Syntax

```
export  [ identifier ];
export [ function_declaration | variable_declaration ];
```

Example

```
# Save in a File name export.cafe
export var a = func(){
    return "Hello";
};
```



## Import

Cafe module can import all the exported variables and functions from the specified module. 

All Imported modules are executed transitively at runtime & cyclic dependency will flag runtime error. 

> Note: The .class file of a module at `module_path` should be available while running current module.

Syntax

```
import [ exported_identifier(,exported_identifier)* | * ] [as identifier] from “module_path”;
```

Example

```
import a from "export";

func test(){
    return a();
}
```

