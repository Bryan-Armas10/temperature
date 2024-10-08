console.log("if-statement file");

// -----if statement-----
// if (condition){
// code to be excecuted if condition is true

if(3>7){
    console.log("I am  inside the if statement");
}

let studentAge=45;
let studentAge2=45;

if(studentAge == studentAge2){
    console.log("Both are the same");
}


// ======= if-else statement ---
// if(condition){
//      Code to be excecute if condition is true
// }else{
//      Code to be excecute if condition is false
//}

if("Sam" == "Jesus"){
    console.log("Sam us equals to Jesus");
}else{
    console.log("Sam is diferent than Jesus");
}

//Challenge:
// check if the age is greater than 21
// T: display "you are an adult"
// F: display "you are underage"

let Age = 20;

if(Age>= 21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}

// if-else  if-else statememt
// if(conndition){
// Code to be excecute if condition is true
// }else if(condition2){
// Code to be excecute if condition is true
// }else{
// Code to be excecute if condition is false

Age = 75;

if(Age<13){
    console.log("Child");
} else if(Age<20){
    console.log("Teenager");
} else if(Age<64){
    console.log("adult");
}else{
    console.log("senior");
}



//let viewersAge = prompt("Enter your age:");

//if(viewersAge<12){
  //  console.log("Price = $5.00");
//}else if(viewersAge<18){
//    console.log("Price = $8.00");
//}else{
//    console.log("Price = $10.00");
//}

let temperature = prompt("Enter temperature: ");

if(temperature<15){
    console.log("suggest wearing a jacket");
}else if(temperature<25){
    console.log("suggest wearing a sweater");
}else{
    console.log("suggest wearing a t-shirt");
}

// using logical AND operator &&
Age = 25;

if(Age<13){
    console.log("child");
}else if(Age<=13 && Age<=19){
    console.log("Teenager");
}else if(Age>=20 && Age<=64){
    console.log("adult");
}else{
    console.log("You are older than 64");
}   