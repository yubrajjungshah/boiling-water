function BoilingResult({temperatureInCelsius}) {
    const temperature = parseInt(temperatureInCelsius);
    if(temperature < 100) {
        return <p>This is below boiling temperature </p>;
    }
    else if(temperature === 100) {
        return <p>This is boiling temperature </p>;
    }
    else if(temperature > 100) {
        return <p>This is above boiling temperature </p>;
    }
    else {
        return <p style={{color: 'red'}}>Temperature data not available </p>;
    }
}
export default BoilingResult;