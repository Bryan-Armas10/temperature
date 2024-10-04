let hungerLevel = 30;
const hungerDisplay = document.getElementById("hungerLevel");

function feedpet(){
    console.log("Feeding the pet");
    let foodAmount = 10;
    //Create a variable foodAmount
    hungerLevel -= foodAmount;
    //hungerLevel=hungerLevel-foodAmount;
    //discount the foodAmount to the hunger 
    if(hungerLevel<0){
        alert("Your pet is overfeed!!!");
        hungerLevel=0;
    }
    hungerDisplay.innerHTML=hungerLevel;
}