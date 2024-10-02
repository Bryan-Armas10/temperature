console.log("function");

// define a function with the name sayHello
function sayHello(){
    console.log("Hello");
}

sayHello(); // trigger//runs the fn

// function  with parameters
function greet(name){
    console.log("Welcome to the system " + name);
}

greet("seth");
greet("Andrew");

// function that return values
function addNumbers(a,b){
    return a+b;
}

let  result = addNumbers(3,5); //8
result = addNumbers(6,8); //14
console.log(result); //14

// function with default parameters

function greetings(name ="Samanthe"){
    console.log("Hello to " + name);
}

greetings("Ava");

/*
// Challenge 1 (My)
function doubleNumber(a){
    return 2*a;
}

let result1 = doubleNumber(8);
console.log(result1);
*/

// Chalenge 1
function doubleNumber(num){
    let total = num  *2;
    console.log(total);
    return total;
}
doubleNumber(4);
doubleNumber(10);

// Challenge 2
function combineNames(firstName = "Unknown", lastName = "Unknown"){
    return firstName + " " + lastName;;
}

let studentName = combineNames("Alice", "Woonderland");

console.log(studentName);

/*
// Challenge 2 (My)
function combineNames(firstName = "Alice", lastName = "Johnson"){
    console.log(firstName + " " + lastName);
}

combineNames();
*/

//Challenge 3
function convertToSeconds(t){ // print 300 and 600
    let time = t*60;
    console.log(time);
    return time;
}
convertToSeconds(5);
convertToSeconds(10);

function sayHello2(){
    let name = prompt("Enter your name: ");
    //document.getElementById("result").innerHTML="<p> Welcome to the system " + name + "</p>";
    // template string
    document.getElementById("result").innerHTML = `<p> Welcome to the system ${name} </p>`;
}