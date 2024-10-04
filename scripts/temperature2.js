function convertTemperature() {
    let scale = prompt("Do you want to convert to Celsius (C) or Fahrenheit (F)?").toUpperCase();
    let temperature;

    if (scale === "C") {
        temperature = prompt("Enter temperature Celsius: ");
        let fahrenheit = (temperature * 9 / 5) + 32;
        document.getElementById("result").innerHTML = `<p>Fahrenheit: ${fahrenheit.toFixed(2)}°</p>`;
    } else if (scale === "F") {
        temperature = prompt("Enter temperature Fahrenheit: ");
        let celsius = (temperature - 32) * 5 / 9;
        document.getElementById("result").innerHTML = `<p>Celsius: ${celsius.toFixed(2)}°</p>`;
    } else {
        document.getElementById("result").innerHTML = `<p>Please use "C" or "F"</p>`;
    }
}