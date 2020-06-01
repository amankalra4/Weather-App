import React, {Component} from 'react';
import './weather.css';
import WeatherDisplay from './WeatherDisplay';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city_text: '',
            country_text: '',
            weather_toggle: false,
            error_toggle: false,
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: undefined,
            api_error: undefined
        }
    }

    handleChange = (event) => {
        let event_name = event.target.name;
        if(event_name === 'city_text') {
            this.setState({city_text: event.target.value})
        }
        else {
            this.setState({country_text: event.target.value})
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        let city = this.state.city_text;
        let country = this.state.country_text;
        let apiKey = 'bbbdd14fbf24a980a025d45684d92a90';
        if(city && country) {

                getWeather(city,country)
                .then((data1) => {
                this.setState({
                    weather_toggle: true,
                    error_toggle: false,
                    temperature: data1.main.temp-273.15,
                    city: data1.name,
                    country: data1.sys.country,
                    humidity: data1.main.humidity,
                    description: data1.weather[0].description,
                    error: undefined,
                    api_error: undefined
                    });
                })
                .catch((error) => {
                    console.log(error);
                    this.setState({
                        weather_toggle: false,
                        error_toggle: true,
                        temperature: undefined,
                        city: undefined,
                        country: undefined,
                        humidity: undefined,
                        description: undefined,
                        error: undefined,
                        api_error: 'Please give correct city and country'});
                })

                async function getWeather(city_param, country_param) {
                    try {
                        const res = await fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city_param},${country_param}&APPID=${apiKey}`)
                        let data = await res.json();
                        console.log(data);
                        return data;
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
        }
        else {
            this.setState({
                weather_toggle: true,
                error_toggle: false,
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: 'Please give valid input.',
                api_error: undefined
              });
        }
    }

    render() {
        return(
            <div style = {{marginTop: '35px', marginLeft: '35px', height: '200px', width: '50%'}}>
                <input type = 'text' name = 'city_text' value = {this.state.city_text} onChange = {this.handleChange} placeholder = 'City...' />
                <input type = 'text' name = 'country_text' value = {this.state.country_text} onChange = {this.handleChange} placeholder = 'Country...' />
                <button name = 'weatherButton' className = 'form-button' onClick = {this.handleClick}>Get Weather</button>
                {this.state.weather_toggle && <WeatherDisplay temperature = {this.state.temperature}
                                                              city = {this.state.city}
                                                              country = {this.state.country}
                                                              humidity = {this.state.humidity}
                                                              description = {this.state.description}
                                                              error = {this.state.error}
                                                              api_error = {this.state.api_error} />}
                {this.state.error_toggle && <WeatherDisplay api_error = {this.state.api_error}
                                                            error = {this.state.error} />}
            </div>
        );
    }
}

export default Weather;