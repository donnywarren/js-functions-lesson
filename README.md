---
title: Functions
type: Lecture
duration: "2:30"
creator:
    name: Vincent Abruzzo
    city: NYC
---

# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Functions


### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Give the definition of a function
- Identify the parts of a function
- Write a function

## Opening (5 mins)

**Function** is a term that comes out of mathematics. You may remember hearing it in your high school algebra class.

The basic idea of a function is simple — it's a relationship between a set of inputs and a set of outputs.

## Introduction: Functions

Take a look at the relationship between variable `x` and function `f` in this example.

Function `f` takes the input `x` and spits out a single output ( `f(x)` ).

Can you guess what this function does to the value of `x`?

```
f(-2) => -4
f(-1) => -2
f(0) => 0
f(1) => 2
f(2) => 4
```

Assuming that it's the same function, what is the output of:

`f(f(3))`

### Why are functions useful?

In JavaScript, a function can be:

1. Made up of either a single reusable statement or a group of reusable statements.
2. Called from anywhere in the program, which allows for the statements inside a function to not be written over and over again.

Functions are especially useful because they enable a developer to segment large, unwieldy applications into smaller, more manageable pieces. You might hear this described as making the code modular. Modularity is good.

#### Example of using a function

Here's an example of what a function can do:

This repeats for every additional movie.

```js
var movie = 'Saving Private Ryan';
var year = 1998
console.log(`${movie} was released in ${year}`);

var movie = 'Interstellar';
var year = 2014;
console.log(`${movie} was released in ${year}`);


var movie = 'Jason Bourne';
var year = 2016;
console.log(`${movie} was released in ${year}`);
```

This is all easy enough to write out, but if we have a lot of movies, this results in a lot of repeated code! Also, if we want to change the formatting, we have to change it in every place.

Let's try to keep our code from getting out of hand by using a function.

```js
var printMovie = function(movie, year) {
  console.log(`${movie} was released in ${year}`);
}

printMovie('Saving Private Ryan', 1998);
printMovie('Interstellar', 2014);
printMovie('Jason Bourne', 2016);
```

Notice how much cleaner and simpler this function looks than our repeated lines of code?

Using functions is a great way to save time for yourself, and simplify things for your team members.


#### DRY - Don't repeat yourself

Functions are a critical component of programming because they allow us to execute on a key tenant of engineering:

"**D**on't **R**epeat **Y**ourself" (aka "DRY" code).

Our goal is to craft our programs in as few lines of code as possible, while still being clear.


##### Why should we avoid repetition?

1.  **Performance -** Having repeated code will lead to longer scripts. Longer scripts take up more memory and will take more time to load, which can make a website seem slow.

2.  **Maintainability -** Imagine that we have the same line of code repeated 10 times in our program. If we ever want to change that functionality, we would have to search for all 10 places where that code is repeated and make 10 individual changes.



#### Why use functions - Summary
[Check out this link to review the three main reasons that functions are created.](http://circuits-assets.generalassemb.ly/prod/asset/5016/Slide-17-Chart.svg)


---
<a name="function-expressions"></a>
## Function Expressions

Now we know what functions are and why we use them. But how do we create them?

As you saw in our movie example, just as we do with a variable, we must define a function before we call or "use" it.

In JS, functions can be defined in several ways. Two of the more common methods of defining a function are **function expression** and **function declaration**.

#### Function Expressions - Overview
Let's take a look at **function expressions** first.

A **function expression** defines a function by producing a value that's stored in a variable.

This is similar to the way an expression produces a value that's stored in a variable—hence its name.

![](http://circuits-assets.generalassemb.ly/prod/asset/4421/Slide-19.svg)


Have you ever tried to move forward to the next page of an online form, only to be greeted by an alert that says "Please fill out all the required fields"?

This kind of code can be placed in a function and this function can be called anytime the user hasn't filled out a field on any form on the site. Let's code for this popup alert using a function expression:

![](http://circuits-assets.generalassemb.ly/prod/asset/5049/code_block_1.png)


Let's take a look at the function in more detail:

  1. The first line begins by declaring a variable called `errorAlert`. This is the name that we can then use to call that function.
  ![](http://circuits-assets.generalassemb.ly/prod/asset/5050/code_block_2.png)
  2. This is followed by the word `function`, which is a keyword we use to let JS know that we are creating a function.
  ![](http://circuits-assets.generalassemb.ly/prod/asset/5052/code_block_3.png)
  3. Next, you have a list of parameters surrounded by parentheses. Even though the parameters that can go within the parentheses are optional, the parentheses themselves are _always_ required.
  ![](http://circuits-assets.generalassemb.ly/prod/asset/5053/code_block_4.png)
  4. The statements inside the function will run every time the function is called. The function body must always be wrapped in curly braces `{ }`, even when it consists of only a single statement.
  ![](http://circuits-assets.generalassemb.ly/prod/asset/5054/code_block_5.png)

#### Naming Conventions
Now that we've learned about function expressions, let's discuss naming conventions.

You may have noticed how we capitalize names in JavaScript using the camelCase style.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4427/Slide-25-Camel.svg" width="350px">

Let's take a quick look at some good and bad examples of function names, and what can cause them to break down:

*   **Bad:** thisfunctioncalculatestheperimeterofarectangle
    (no camelCase, too verbose)

*   **Bad:** my new function
    (contains spaces)

*   **Bad:** myNewFunction
    (doesn't explain what it does!)

*   **Good:** calculateArea
    (describes what it does, short, and uses camelCase)

#### Calling a function
To run the code in a function, we **call**, or invoke, the function by using the function name followed by parentheses.

Remember our function printMovie?

What happens if we just type `printMovie`?

Now we add the parentheses.

```js
printMovie();
```

<a name="arguments-and-parameters"></a>
## Arguments and Parameters

#### Syntax - Parameters and Arguments
**Parameters** are the names listed in the function definition.

Let's write a function that calculates the area of a rectangle.

We need to provide our `area` function with a width and a length so we won't need to create a separate function every time we want to measure the dimensions of a new room.


![](http://circuits-assets.generalassemb.ly/prod/asset/4432/Slide-9-Parameter.svg)


![](http://circuits-assets.generalassemb.ly/prod/asset/4433/Slide-10-Width-Length.svg)


![](http://circuits-assets.generalassemb.ly/prod/asset/4435/Slide-11-Arguments.svg)


![](http://circuits-assets.generalassemb.ly/prod/asset/4436/Slide-12-Arguments.svg)

To write functions with more than one parameter, use a comma separated list:

e.g., (parameter1, parameter2, parameter3, parameter4, etc.)

Here is an example of a function with four strings as parameters:

```js
var greetUser = function(firstName, lastName, year, city) {
  console.log('Hello ' + firstName + ' ' + lastName + ' born in '+ year + ' from ' + city + '!');
}
```

> Check: What would happen if we called the function with the following arguments?

```js
greetUser('Bruce', 'Wayne', 1939, 'Gotham');
```

> Have the students discuss what would happen if we don't provide all of the parameters.

The code in a function will not run when the function is defined. The code will only run when the function is called.

## Exercise: write some functions! Check out functions101.js (20 mins)

---
<a name="return-values"></a>
## Return Statements
We now know how to communicate with functions in one direction, by passing values to functions using parameters and arguments.

But, functions can also communicate back to you and return values.

#### Why use return statements?

Sometimes we don't necessarily want to show or log something immediately to the console, or update something on the page.

Instead, we might just want to update a variable within a function, or even call another function without showing its effects.

To do this, we use a `return` statement.


Let's look at an example of updating a variable within a function.

```js
var doubleValue = function(x) {
  return x*2;
}
```

The `return` statement _stops the execution of a function_ and returns a value from that function.

#### Storing a return value in a variable

When we `return` something, it ends the function's execution and "spits out" whatever we are returning.

We can then store this returned value in another variable.


#### Exiting a function

We can also use `return;` by itself as a way to exit the function and prevent any code after it from running.

Take a look at this example:

```js
var rockAndRoll = function (muted) {
  var song = 'Come Together';
  var artist = 'The Beatles';

  if (muted) {
    return; // Here we use return as a way to exit a function, instead of returning any value
  }

  console.log(`Now playing: ${song} by ${artist}`);
}

rockAndRoll(true);
```

Here, we use `return;` as a way to exit the function instead of returning any value.

So when we call the function passing in `true` as an argument for `muted`, the log statement will never run.

How can we modify our area function to return our value instead of printing it?

---
<a name="function-declarations"></a>
## Function Declarations
Now we'll take a look at another way to define functions (**function declarations**) and how these differ from the function expressions we've been using.

Watch this short [video](https://generalassembly.wistia.com/medias/g1w03wkvth) for an overview of Function Declarations and Function Expressions.


#### Function Declarations vs. Function Expressions
Remember the `printMovie()` function?

Let's take a look at how we could rewrite that function as a **Function declaration** by changing the way we declare the function (the bottom example).

```js
var printMovie = function(movie, year) {
  console.log(`${movie} was released in ${year}`);
}
```
vs

```js
function printMovie(movie, year) {
  console.log(`${movie} was released in ${year}`);
}
```

Both functions do the exact same thing, they're just written differently. We'll take a look at the difference between the two in just a few minutes.

#### Syntax
As you can see, a function declaration always has:

*   The keyword `function`.
*   A descriptive name that refers to the function (this can be anything you want, as long as it's in camelCase).
*   An optional list of parameters surrounded by parentheses.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4535/Slide-9-Function-Declaration-New.svg" width="400px">

What's the difference between them? It all comes down to something called **hoisting**.

#### Hoisting
Right now, let's dive deeper into the differences between function declarations and function expressions. While both methods are similar, one of their main differences is the concept of **hoisting**.

In JS, function declarations are always moved, or "hoisted," to the top of their scope by the interpreter. (Remember, the interpreter is the console in JS — the software that runs the code).

In other words, _you can call a function declaration before defining it_.

Let's look at an example of hoisting:

![](http://circuits-assets.generalassemb.ly/prod/asset/5022/Slide-13-Hoisting-Chart.svg)

#### Real-world Developers
Now that you're familiar with both ways of declaring and assigning functions, you can choose which one works best for you.

Let's watch a [video](https://generalassembly.wistia.com/medias/exsv54zfg9) on how programmers choose their favorite method.

## First-class citizens!

Functions in JavaScript are often referred to as 'first-class citizens'. What that means, essentially, is that anything you can do to regular values and datatypes, you can do to functions. Talk to your neighbor for 5 minutes and see if you can think of something that we can do with other datatypes that we haven't had an example for yet for functions.

## Passing Functions as Arguments

We can also pass functions as arguments.

We will see this very often when we talk about DOM Manipulation soon, but here is a preview.

```js
function showWarning() {
  console.log("Warning!");
}

document.getElementById("big-red-button")
button.addEventListener("click", showWarning);

// or
document.getElementById("big-red-button")
button.addEventListener("click", function() {
  console.log("Warning!");
});
```

Where else have we passed a function as an argument?

```js
[1,2,3].forEach(function(x){
  console.log(`num: ${x}`)
});
```

## Math Lab (1 hour)

Open MathLab.js and complete it.

## Conclusion (5 mins)

Functions are very important in JavaScript, and you must have a thorough understanding of how to define them, as well as how you can use them.
