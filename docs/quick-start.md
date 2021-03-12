---
id: quick-start
title: Let's Start
sidebar_label: Let's Start
slug: /
---

<!-- # Let's Start -->



These docs were written for all learners, from advanced developers to people getting started programming for the first time in their career.



## Prerequisites



Cafe requires [Java SE Development Kit (JDK).](https://openjdk.java.net/projects/jdk8/)

If you already have a JDK on your system, make sure it is version 8 or newer.

> you can check version by running `java -version` on command prompt.





## Set-up Cafe



You can start by downloading the latest distribution:

<button backgroundColor="green">[ Cafe v0.0.1 Beta](https://github.com/cafe-jvm-lang/cafe/releases/download/v0.0.1-beta/cafe-0.0.1-beta.zip)</button>





## Installation



#### Installation using .zip file.

1. Unzip the package in any empty directory (*preferred*).
2. Add ``path_to_cafe/cafe/bin`` directory to the environment path variable.
3. All set! Now, it's time to write your first Cafe program.

#### Installation using .exe file.

1. Download .exe file.
2. Follow the steps & you're done





## Hello, World example



``` 
func Hello(){
    cmd.println("Hello, World");
}
Hello();
```



#### Step 1: Save the source in file name ```Hello.cafe``` & Compile using command.



```
$ cafe -c Hello.cafe
```

> above command will generate ``Hello.class`` file.



#### Step 2: To run execute command

```
$ cafe -r Hello
```