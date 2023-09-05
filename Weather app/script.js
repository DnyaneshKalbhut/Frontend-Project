document.getElementById("convertButton").addEventListener("click", function() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var result = document.getElementById("result");
  
    // Validate input as a number
    if (isNaN(temperatureInput)) {
      result.textContent = "Please enter a valid temperature";
      return;
    }
  
    // Convert temperature based on selected unit
    var convertedTemperature;
    if (unitSelect === "celsius") {
      convertedTemperature = (temperatureInput - 32) * (5 / 9);
    } else if (unitSelect === "fahrenheit") {
      convertedTemperature = (temperatureInput * (9 / 5)) + 32;
    } else if (unitSelect === "kelvin") {
      convertedTemperature = parseFloat(temperatureInput) + 273.15;
    }
  
    // Display the converted temperature
    result.textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + unitSelect;
  });
  