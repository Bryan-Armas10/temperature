document.write("<h2>For Loops</h2>")

//document.write(`
//    <h3>Table of 2!</h3>
//    <p>2 X 0 = 0</p>
//    <p>2 X 1 = 2</p>
//    <p>2 X 2 = 3</p>
//    <p>2 X 3 = 4</p>
//    <p>2 X 4 = 5</p>
//    <p>2 X 5 = 10</>
//    <p>2 X 6 = 12</p>
//    <p>2 X 7 = 14</p>
//    <p>2 X 8 = 16</p>
//    <p>2 X 9 = 18</p>
//    <p>2 X 10 = 20</p>
//    `)

// The for Loop
//let index=0
//for(let index=0 ; index<10; index++){
//    console.log("using for loop")
//}

//for(let i = 0; i <= 10; i++){
//    let result = 2 * i; // 0
//    document.write(`<p>2 x ${i} = ${result} </p>`)
//}
// Activity     4
//for(let i = 2; i < 21; i+=2){
//    console.log(i);
//}

// Mini challenge
// Create a loop that displays the numbers from 1 to 100 and 
// display a message "I found it" instead of the 50 
// acceptance criteria:
// 1. the loop needs to be inside of a function
function challenge(){
    for(let i = 1; i <= 100; i++){
        if(i === 50){
            console.log("I found it");
        }else{
            console.log(i);
        }
    }
}
//challenge()

// Interactive multiplication tables
let number = prompt("Enter the number of the table you want to display: ");
function multTable(num){
    document.write(`multi table of ${num}`)
    for( let i = 0; i <= 10; i++){
        let result = num*i;
        document.write(`<p> ${num} x ${i} = ${result} </p>`)
    }
}
multTable(number)

//let i=0
//while(i<=10){
//    console.log(i)
//    i++
//}