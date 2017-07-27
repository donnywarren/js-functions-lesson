/**********************
Using Functions to be DRY
**********************/

// this is kind of ugly, seeing the same lines of code repeated over and over again

//a function will help us stop repeating all of this three times!
function wdiPride(person){
  console.log('hi my name is ' + person + ' and I am a WDI instructor');
}

//now look at how much cleaner this is
wdiPride('paris')
wdiPride('jason')
wdiPride('roy')

/**********************
Dealing with unknown inputs
**********************/
//
// //if i wanted to log each instructor's name and age, it would change based on each instructor
// //like above, this isn't exactly clean.
var name = 'jason';
var age = 23;
// console.log('hi, my name is ' + name + ' and I am ' + age + ' years old');
//
name = 'paris';
age = 28;
// console.log('hi, my name is ' + name + ' and I am ' + age + ' years old');

// //parameters
function introduceMyself(dude, young){
  console.log('hi my name is ' + dude + ' and I am ' + young + ' years old')
}

// //arguments
introduceMyself(name, age)
introduceMyself('paris', 28)
//
// /**********************
// Using other stuff as parameters
// **********************/
//declaring a function with a parameter
//basically, when we declare this function...
//...we tell it to expect something that it can loop over
function playWithArrays(literallyAnything){
  //this function won't care about what's inside the parameter you give it
  //whatever is inside...
  for (var i = 0 ; i < literallyAnything.length ; i++){
    //...it'll print out whatever is in there, and the index
    console.log('I am ' + literallyAnything[i] + ' currently at index ' + i)
  }
}

//passing an array as an argument to a function
//cool thing about arrays is that the elements can be anything
// playWithArrays(['cat', 1, true, 'wdi', '4', 234234])

// //alternatively:
var arrayToPlayWith = ['cat', 1, true, 'wdi', '4', 234234];
playWithArrays(arrayToPlayWith)

// /**********************
// Scope
// **********************/

// as it stands, my dog will age properly, but i'll age weirdly
var age = 2;
console.log('My dog and I are ' + age + ' years old')

function dogAging(){
  //this next line of code pollutes the global variable...
  age +=7;
  console.log('After 1 year, my dog\'s age is:', age);
}
dogAging();

function humanAging(){
  //...which means the next time it's used will be weird
  age ++;
  console.log('After 1 year, my age is:', age);
};
humanAging();

var instructor = 'paris';
console.log('in the global scope, the instructor is', instructor);

function changeInstructor(){
  //redefine the instructor here
  var instructor = 'jason';
  console.log('in changeInstructor, the instructor is', instructor);
}
changeInstructor();

function changeInstructorAgain(){
  //redefine the instructor once more
  var instructor = 'roy';
  console.log('in changeInstructorAgain, the instructor is', instructor)
}
changeInstructorAgain();

/**********************
Nested Scope
**********************/

//these variables have been defined in the global scope
var x = "global x",
    y = "global y",
    z = "global z";
var outerFunction = function () {
  //these variables have been defined inside the scope of the first function
  //this function only exists to create another scope for the variables
  //it doesn't do anything but define variables and define and call another function
  var x = "outerFunction x",
      y = "outerFunction y";
  var innerFunction = function() {
    //this variable has been declared in the scope of the second function
    var x = "innerFunction x";
    console.log("in innerFunction.");
    //console.logging the variables inside the second function will give you the variables as defined in this scope.
    //since x has been defined here in this scope, it'll take that definition
    console.log("x: " + x);
    //innerFunction doesn't have a definition for y, it will look in the next scope up, which is the outerFunction.
    //y is defined there, so it'll take that definition
    console.log("y: " + y);
    //z isn't defined anywhere but the global scope, so innerFunction has no choice but to take that definition
    console.log("z: " + z);
  };
   innerFunction();
};
outerFunction();

var globalScope = 'this is a globally scoped variable';

function compareScopes(){
  console.log('inside compareScopes, but I can see...')
  //this function catches the globally scoped variable...
  console.log(globalScope);
  var localScope = 'this is a locally scoped variable';
  //...and the locally scoped variable
  console.log('I can also see...')
  console.log(localScope);
}
compareScopes();
// but the global scope doesn't see anything about the locally scoped variable
// console.log(localScope);

/**********************
Answers to Function Exercises
**********************/
//1. write a function that console.logs 'Hello World'
var hello = function(){
  console.log('hello world');
};
hello();

//2. write a function that console.logs whatever you want it to say
function sayText(inputText){
  console.log(inputText)
}
sayText('hello world')

//3. write a function that prints every number between 1 and 100
// function nameToAHundred(){
  for (var i = 0 ; i <=100 ; i++){
    console.log(i)
  }
}
nameToAHundred();

//4. write a function that takes an array of numbers as a parameter and adds each element of that array to a counter
var arr = [1,2,3,4,5];

var arrayAdd = function(array){
  var sum = 0;
  for (var i = 0 ; i < array.length ; i++){
    sum += array[i]
  }
  console.log(sum)
  return sum
}
arrayAdd(arr)

//using forEach and callback functions
var newArrayAdd = function(array){
  var count = 0
  array.forEach(function(item){
    count += item
  })
  console.log(count)
  return count
}
newArrayAdd(arr);
//5. Write a function that loops over an array of students in our class and prints out their name and what class they are currently in.

var students = ['issac', 'fernando', 'yarden', 'john', 'lenora', 'stephanie', 'gary', 'manuel', 'daniel', 'kevin', 'michael', 'nital', 'amisha', 'deniz'];

function classList(array){
  array.forEach(function(item){
    console.log(item + ' is in WDI Kestrel')
  })
}
classList(students)

//6. Write a function that takes an array of strings as a parameter and returns an array of numbers corresponding to the lengths of each word.
function stringLength(stringArray){
  var returnArray = [];
  for (var i = 0 ; i < stringArray.length ; i++ ){
    returnArray.push(stringArray[i].length)
  }
  console.log(returnArray)
  return returnArray
}
stringLength(['i', 'am', 'the', 'best'])

//7. Write a function that takes 3 parameters and returns one number, which is the product of the first two numbers raised to the power of the third.
var productPower = function(a, b, c){
  var product = a * b;
  var power = Math.pow(product, c);
  console.log(power);
  return power;
}
productPower(4,5,6)

//bonus
//  1. Write a function that prints every EVEN number between 1 and 100
var evens = function(){
  for (var i = 0; i <= 100; i++){
    if (i % 2 === 0){
      console.log(i)
    }
  }
}
evens();

//2. Recreate the Fibonacci sequence between 1 and 20. If you don't know what that is, Google is your best friend!
var fibonacci = function(end){
  var sequence = [];
  var a = 1;
  var b = 0;
  var c;
  for (var i = 1 ; i < end ; i++){
    c = a + b;
    a = b;
    b = c
    sequence.push(c)
  }
  console.log(sequence)
  return sequence
}
fibonacci(20);
