# Prototypes



## Objects & Prototypes

### Cafe has only one construct: `object`!

Cafe has only one construct: object, there is no concept of class.
Every Object has a prototype property pointing to another object.
This prototype object has its own prototype , and so on this chain continues till the prototype of the object becomes null.

### `DynamicObject`

All objects in cafe are usually an instance of `DynamicObject`, which is at the root of the prototype chain. Functions are also an instance of `DynamicObject`.



## Behavioral Delegation

### `$_create(object)`

In cafe, delegation is the process of referring to the prototype for a property which is absent in the object which is looked upon.

`$_create(object)` is used to create a new object using an existing object as the prototype of the newly created object.

```
var a = { hi: “hi” };
    var b = $_create(a);
    b.x = 10;
    b.y = 11;
    
    cmd.println(b); # {x:10,y:11,__proto__:a}
    
cmd.println(b.x);   # check if x is present in b. If yes, return x.
    
cmd.println(b.hi);

/* 
    property hi is not found in b. Thus,b.__proto__ is    checked. 
    b.__proto__ is a. a contains the property hi. Thus, hi is returned.
*/

cmd.println(b.z);
/* 
    property z is not present in b, so check in b.__proto__.
    B.__proto__ also doesnt have property z.So, further continuing to search in chain.
    B.__proto__.__proto__ is DynamicObject.prototype and it doesnt contain z.
    B.__proto__.__proto__.__proto__ is null. Thus, stop searching. This will throw an 		exception at runtime.
*/
                                        
```



In any class-oriented programming, objects are copies of a class.
In Cafe, no copies are made. Rather, objects end up linked to each other via an internal `__proto__` chain.
Thus, "**delegation**" is a more appropriate term, because these relationships are not copies but *delegation links*.





## `This-binding`

### `Call-Site`

Whenever a function is called, `this` variable is passed by default as the first argument implicitly. Functioning of this, what value it points to, can be understood with the help of function `call-site`.
`Call-site` is the location in code where a function is called (not where it's declared). We must inspect the call-site to answer the question: what's this **`this`** a reference to?

```
func foo() {
    cmd.print( this.a );
}
var a = 2;
foo(); # callsite
# prints 2
```



When foo is called, the `this` is set to the global module scope. Thus, when foo is invoked, `this.a` refers to module’s `a` variable.
This is called the default `this` binding.

### Implicit Binding

Implicit binding occurs when dot notation is used to invoke a function.

```
func foo() {
    cmd.println( this.a );
}
var obj = {
    a: 2,
    foo: foo
};
obj.foo(); # callsite
# prints 2
```



Here, `foo` is invoked as a property of an `obj`.
Thus, `this` points to `obj` when the function is called. This is called implicit `this` binding.

## Higher-Order Functions

### `function are first-class objects!`

In cafe, functions are first-class objects.
Thus, a function can be assigned to a variable, can be passed as an argument & can be returned inside a function.

When a function is declared, internally a Function object is created and is assigned to variable.

```
func Hello(){
}
# Is internally interpreted as
# var Hello = `Function` Object                                    
```

Thus, it becomes possible to use functions as any other variables.

```
func A(fn){
    fn();
}
func B(){
    cmd.print(“I’m B”);
}
func Z(){
    return B;
}
var obj = {
    Foo: A,
};

var b = obj.Foo(Z);
b(); # I’m B
```