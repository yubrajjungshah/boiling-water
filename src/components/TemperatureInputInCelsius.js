function TemperatureInputInCelsius({ handleTemperatureInCelsius, temperatureInCelsius }) {
    
    return(
        <div className="form-item">
            <label>Temperature in Degree Celsius</label>
            <input type="text"  value={temperatureInCelsius} onChange={handleTemperatureInCelsius} />
        </div>
    )
}
export default TemperatureInputInCelsius;