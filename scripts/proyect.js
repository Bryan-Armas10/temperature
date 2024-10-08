function convertTemperatureRange() {
    // Prompt the user to enter the starting temperature
    let startValue = parseFloat(prompt("Enter the starting temperature:"));
    // Prompt the user to enter the ending temperature
    let endValue = parseFloat(prompt("Enter the ending temperature:"));
    // Ask the user to choose the conversion scale (C or F)
    let scale = prompt("Convert from Celsius (C) to Fahrenheit (F) or vice versa?").toUpperCase();
    // Variable to store the result that will be displayed
    let resultHTML = "";
    // Check if the selected scale is Celsius
    if (scale === "C") {
        // Iterate from the starting value to the ending value
        for (let temp = startValue; temp <= endValue; temp++) {
            // Convert Celsius to Fahrenheit
            let fahrenheit = (temp * 9 / 5) + 32; 
            // Accumulate the result in HTML format
            resultHTML += `<p>${temp}°C = ${fahrenheit.toFixed(2)}°F</p>`;
        }
    // Check if the selected scale is Fahrenheit
    } else if (scale === "F") {
        // Iterate from the starting value to the ending value
        for (let temp = startValue; temp <= endValue; temp++) {
            // Convert Fahrenheit to Celsius
            let celsius = (temp - 32) * 5 / 9; 
            // Accumulate the result in HTML format
            resultHTML += `<p>${temp}°F = ${celsius.toFixed(2)}°C</p>`;
        }
    // If the scale is not valid, display an error message
    } else {
        resultHTML = `<p>Invalid scale. Use "C" for Celsius or "F" for Fahrenheit.</p>`;
    }
    // Display the result in the element with ID "result"
    document.getElementById("result").innerHTML = resultHTML;
}
