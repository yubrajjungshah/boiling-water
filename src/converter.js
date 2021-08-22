function toCelsius(farenheit) {
    const celsius = (farenheit - 32) * 5 / 9;
    return celsius;
}


function toFarenheit(celsius) {
    const  farenheit = (celsius * 9 / 5) + 32;
    return farenheit;
}

export { toCelsius,  toFarenheit};