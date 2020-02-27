# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

# JavaScript Functions

### LEARNING OBJECTIVES

_After this lesson, you will be able to:_

- Give the definition of a function
- Identify the parts of a function
- Differentiate between function expression and declaration
- Define a function in an object
- Pass a function as a parameter

## Opening

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

1.  Made up of either a single reusable statement or a group of reusable statements.
2.  Called from anywhere in the program, which allows for the statements inside a function to not be written over and over again.

Functions are especially useful because they enable a developer to segment large, unwieldy applications into smaller, more manageable pieces. You might hear this described as making the code modular. Modularity is good.

#### Example of using a function

Here's an example of what a function can do:

This repeats for every additional movie.

```js
const movie1 = 'Saving Private Ryan';
const year1 = 1998;
console.log(`${movie1} was released in ${year1}`);

const movie2 = 'Interstellar';
const year2 = 2014;
console.log(`${movie2} was released in ${year2}`);

const movie3 = 'Jason Bourne';
const year3 = 2016;
console.log(`${movie3} was released in ${year3}`);
```

This is all easy enough to write out, but if we have a lot of movies, this results in a lot of repeated code! Also, if we want to change the formatting, we have to change it in every place.

Let's try to keep our code from getting out of hand by using a function.

```js
const printMovie = function(movie, year) {
  console.log(`${movie} was released in ${year}`);
};

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

```js
const pickADescriptiveName = function() {
  // code block
}
// 'pickADescriptiveName' is the function name
// 'function' is the keyword that declares a function
// parentheses is needed an can have optional parameters
```

Have you ever tried to move forward to the next page of an online form, only to be greeted by an alert that says "Please fill out all the required fields"?

This kind of code can be placed in a function and this function can be called anytime the user hasn't filled out a field on any form on the site. Let's code for this popup alert using a function expression:

```js
const errorAlert = function() {
  alert('Please be sure to fill out all required fields');
}
```

Let's take a look at the function in more detail:

1.  The first line begins by declaring a variable called `errorAlert`. This is the name that we can then use to call that function.
2.  This is followed by the word `function`, which is a keyword we use to let JS know that we are creating a function.
3.  Next, you have a list of parameters surrounded by parentheses. Even though the parameters that can go within the parentheses are optional, the parentheses themselves are _always_ required.
4.  The statements inside the function will run every time the function is called. The function body must always be wrapped in curly braces `{ }`, even when it consists of only a single statement.

#### Naming Conventions

Now that we've learned about function expressions, let's discuss naming conventions.

You may have noticed how we capitalize names in JavaScript using the camelCase style.

<img src="./images/Slide-25-Camel.png" width="350px">

Let's take a quick look at some good and bad examples of function names, and what can cause them to break down:

- **Bad:** thisfunctioncalculatestheperimeterofarectangle
  (no camelCase, too verbose)

- **Bad:** my new function
  (contains spaces)

- **Bad:** myNewFunction
  (doesn't explain what it does!)

- **Good:** calculateArea
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

```js
const area = function(width, length) {
  console.log(width * length);
}

area(5, 3); // 15
area(12, 16); // 192

```

1. Width and length are our parameters. Note that they are in a comma separated list. This tells our function that we are going to give it a width and a length.
2. There is nothing special about the words `width` and `length` here. These are just descriptive names to remember what information that is being given to our function. We could use other names as well i.e. `width` and `height`, `l` and `w`, etc
3. When the name of the function is followed by `()` the function is being called. By passing comma separated values in between the parentheses (i.e. arguments) correlate to the name of the parameters when the function was declared. Ex: `5` relates to `width` and `3` relates to `length`. Note that the order does matter.

To write functions with more than one parameter, use a comma separated list:

e.g., (parameter1, parameter2, parameter3, parameter4, etc.)

Here is an example of a function with four strings as parameters:

```js
const greetUser = function(firstName, lastName, year, city) {
  console.log(
    'Hello ' +
      firstName +
      ' ' +
      lastName +
      ' born in ' +
      year +
      ' from ' +
      city +
      '!',
  );
};
```

> Check: What would happen if we called the function with the following arguments?

```js
greetUser('Bruce', 'Wayne', 1939, 'Gotham');
```

> Have the students discuss what would happen if we don't provide all of the parameters.

The code in a function will not run when the function is defined. The code will only run when the function is called.

## Exercise:

1.  Write a function that console.logs 'Hello World'
2.  Write a function that console.logs whatever you want it to say
3.  Write a function that prints every number between 1 and 100
4.  Write a function that takes an array of numbers as a parameter and adds each element of that array to a counter and prints the final value of the counter (i.e. the sum of all of the numbers in the array).
5.  Write a function that loops over the following array of SEI students and prints out their name and what class they are currently in.

```js
const students = [
  'Alice',
  'Andrew',
  'Casey',
  'Damian',
  'Grant',
  'Howie',
  'Wade',
  'Kat',
  'Kimbrad',
  'Kiu',
  'Natasha',
  'Obi',
  'Pedro',
  'Sarah',
  'Scott',
  'Tiffany',
  'Zhe',
];
```

6.  Write a function that takes an array of strings as a parameter and returns an array of numbers corresponding to the lengths of each word.
    e.g. passing this function an array `['i', 'am', 'the', 'best']` should give you back `[1, 2, 3, 4]`
    Hint: you can call .length on a string!
7.  Write a function that takes 3 parameters and returns one number, which is the product of the first two numbers raised to the power of the third.
    e.g. passing this function `1, 2, 3` should give you back the answer to `(1 * 2)^3`

Bonus Functions!

1.  Write a function that prints every EVEN number between 1 and 100
2.  Recreate the Fibonacci sequence between 1 and 20. If you don't know what that is, Google is your best friend!

---

<a name="return-values"></a>

## Return Statements

We now know how to communicate with functions in one direction, by passing values to functions using parameters and arguments.

But, functions can also communicate back to you and return values.

#### Why use return statements?

Sometimes we don't necessarily want to show or log something immediately to the console, or update something on the page.

Instead, we might just want to update a variable within a function, or even call another function without showing its effects.

To do this, we use `return` statement.

Let's look at an example of updating a variable within a function.

```js
const doubleValue = function(x) {
  return x * 2;
};
```

The `return` statement _stops the execution of a function_ and returns a value from that function.

#### Storing a return value in a variable

When we `return` something, it ends the function's execution and "spits out" whatever we are returning.

We can then store this returned value in another variable.

#### Exiting a function

We can also use `return;` by itself as a way to stop the function and prevent any code after it from running.

Take a look at this example:

```js
const rockAndRoll = function(muted) {
  const song = 'Come Together';
  const artist = 'The Beatles';

  if (muted) {
    return; // Here we use return as a way to exit a function, instead of returning any value
  }

  console.log(`Now playing: ${song} by ${artist}`);
};

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

Let's take a look at how we could rewrite that function by changing the way we declare the function (the bottom example).

```js
const printMovie = function(movie, year) {
  console.log(`${movie} was released in ${year}`);
};
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

- The keyword `function`.
- A descriptive name that refers to the function (this can be anything you want, as long as it's in camelCase).
- An optional list of parameters surrounded by parentheses.

```js
function pickADescriptiveName() {
  // code block
}
```

What's the difference between them? It all comes down to something called **hoisting**.

#### Scope

Scope is the space of computer memory where any given variable lives.

If I define a variable _globally,_ that is to say, outside of any function, my entire program (and any functions I write in it) have access to that variable, and any function I write can manipulate it.

However, scope only flows _downward._ That is to say, functions can only see variables that have been defined within their scope or above them, so trying to access a variable defined in one function by calling another will throw an un error

#### Hoisting

Right now, let's dive deeper into the differences between function declarations and function expressions. While both methods are similar, one of their main differences is the concept of **hoisting**.

In JS, function declarations are always moved, or "hoisted," to the top of their scope by the interpreter. (Remember, the interpreter is the console in JS — the software that runs the code).

In other words, _you can call a function declaration before defining it_.

Let's look at an example of hoisting:

```js
sayHello()

function sayHello() {
  console.log('hey')
}

// works great!!
```

```js
sayHello()

const sayHello = function() {
  console.log('hey')
}

// ERROR: What's sayHello??
```

Function expressions must be defined before they are called. The function is not processed until the interpreter gets to that statement. We have to wait for the interpreter to reach that line, otherwise we will get an error.

## Conclusion

Functions are very important in JavaScript, and you must have a thorough understanding of how to define them, as well as how you can use them.
