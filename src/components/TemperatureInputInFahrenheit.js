function TemperatureInputInFahrenheit({ handleTemperatureInFarenheit, temperatureInFarenheit }) {
    return (
        <div className="form-item">
            <label>Temperature in Degree Farenheit</label>
            <input type="text"  value={temperatureInFarenheit} onChange={handleTemperatureInFarenheit} />
        </div>
    );
}
export default TemperatureInputInFahrenheit;