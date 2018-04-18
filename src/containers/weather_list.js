import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import WeatherUtils from '../components/weather_utils';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => WeatherUtils.convertToFahrenheit(weather.main.temp));
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;


        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temps} color="red" units="f"/>
                </td>
                <td>
                    <Chart data={pressures} color="orange" units="hPA"/>
                </td>
                <td>
                    <Chart data={humidity} color="blue" units="%"/>
                </td>
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>City</th>
                    <th>Temperature (f)</th>
                    <th>Pressure (hPA)</th>
                    <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps ({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);