function temperature(){
    let celsius = prompt("Enter temperature (celsius): ");
    fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = `<p> Fahrenheit: ${fahrenheit} </p>`;
}