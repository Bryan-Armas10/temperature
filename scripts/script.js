console.log("Scipt");

// Creating string variables
// Keyword nameVariable = value;
let myName = "Jane";
let lastName = "Doe";

console.log(myName);
console.log(lastName);
console.log(myName + " " +lastName);//Concatenation

// Creating numerical variables
let myAge = 99;
console.log("Age: " + myAge);

let myGrade = 9.5;
console.log(myGrade);

// Creating a Boolean vvariables  (true/false)
let isAdmin = true;
let isSudent = false;
let isProfesor = true;
console.log(isProfesor);

/* mani lines of coments
xxxx
xxxx
xxxx
xxxx
*/

myName = "Samantha";
lastName = "Jimenez";
// my name is Samantha Jimenez, and I am 99 years old.
console.log("My name is: " + myName + " " + lastName + ", and I am " + myAge + " years old." );

let number1 = 10;
let number2 = 5;

// addition
let addition = number1 + number2;
console.log(number1 + " + " + number2 + " = " + addition);
// substraction
let substraction = number1 - number2;
console.log(number1 + " - " + number2 + " = " + substraction);
// Multiplication
let multiplication = number1 * number2;
console.log(number1 + " * " + number2 + " = " + multiplication);
// Divicions
let divicions = number1 / number2;
console.log(number1 + " / " + number2 + " = " + divicions);

// Constants
// keyword constName = value;

const pi = 3.1416;
// pi = 4.5 // we can't modify a constant
console.log(pi);
// calculate the area of circle

// PROMPT: this is simple way to interact with a user
let pet  = prompt("Insert your pet name: ");
console.log("your pet is: " + pet);