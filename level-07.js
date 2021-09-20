function convertCelsius(c) {
    let fahrenheit = ( c * 9 / 5) + 32;
    return fahrenheit;
}

function convertFahrenheit(f) {
    let celsius = (f - 32) * 5 / 9;
    return celsius;
}