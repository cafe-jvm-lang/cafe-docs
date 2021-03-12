---
id: functional-programming
title: () {Functional Programming}
sidebar_label: Functional Programming
---


<!-- # (){Functional Programming} -->



## Closure

### Lexical Scoping

To understand closure let's first take a look at Lexical scoping using example below:

```
func testScope() {	
	var test = “In Lexical Scope”;	
	func insideScope() {		
		cmd.println(test);
	}
}
```



`testScope` creates local variable `test` and instance of function `insideScope` .

`insideScope()` displays value of `test` variable,which is declared in its parent function. 

Variable `test`  is not available in `insideScope` which is referred as **Lexical Scope**.

### More Closer to `Closure`

Closure  is a function enclosed within another function having some variable(state).
Example:

```
func outerFunction() {	
	var a = 10;	
	func innerFunction() {		
		cmd.println(“A Inside: “+a); // a 
	}
	return innerFunction;
}
var useClosure = outerFunction();
useClosure(); # A Inside: 10
```

Call to `outerFunction` is returning `innerFunction `(‘closure’ ) which captures the variable `a`.Variable `a` can be accessed only by `innerFunction ` outside its Lexical Scope so it can be referred as variable private to `innerFunction`.

### Practical use of Closure

```
func Account() {	
	var amount = 0;	
	func updateAmount(withAmnt) {		
		balance = balance + withAmnt;	
	}
	return {		
		deposit: func(b) {			
			updateAmount(b);		
		},
		withdraw: func(b) {	
			if(b > amount) {		
				cmd.println(“Insufficient balance”);	
			} else {	
				updateAmount(-b);
			}
		},
		checkBalance: func() {	
			cmd.println(amount);
		}	
	};
}
var acc = Account();
acc.checkBalance();
acc.deposit(1000);
acc.withdraw(2000);
```





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



## Anonymous Function

In cafe anonymous function can be implemented using syntax below:
Syntax

```
func ([params]) {	
	# statements
}
```


Example:

```
var acc = {  
	init: func(){    
		this.amount = 0;  
	},  
	updateBal: func(amt){    
		this.amount = this.amount+amt;  
	},  
	checkBalance: func(){    
		cmd.println(this.amount);  
	},  
	deposit: func(b){    
		this.updateBal(b);  
	},  
	withdraw: func(b){    
		if(this.amount < b){      
			cmd.println("Insufficient Balance");    
		} else {      
			updateBal(-b);    
		}  
	}
};
acc.init();
acc.checkBalance();
acc.deposit(1000);
acc.withdraw(2000);
acc.checkBalance();


```

