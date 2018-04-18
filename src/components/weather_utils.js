export default class WeatherUtils{
    constructor()
    {

    }

    static convertToFahrenheit(kelvinTemp) {
        return (kelvinTemp * 9 /5 - 459.67);
    }
}