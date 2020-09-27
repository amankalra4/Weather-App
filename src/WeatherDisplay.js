import React from 'react';

const WeatherDisplay = ({city, country, temperature, humidity, description, error, api_error}) => {
    return (
        <div style = {{margin: '0 2em'}}>
            {city && country &&
                <p className = 'weather_key'>
                    Location: <span className = 'weather_value'>{city}, {country}</span>
                </p>
            }
            {temperature &&
                <p className = 'weather_key'>
                    Temperature: <span className = 'weather_value'>{Math.floor(temperature)}°C</span>
                </p>
            }
            {humidity && 
                <p className = 'weather_key'>
                    Humidity: <span className = 'weather_value'>{humidity}</span>
                </p>
            }
            {description &&
                <p className = 'weather_key'>
                    Condition: <span className = 'weather_value' style = {{textTransform: 'capitalize'}}>{description}</span>
                </p>
            }
            {error && <p className="weather_error">{error}</p>}
            {api_error && <p className="api_error">{api_error}</p>}
        </div>
    );
}

export default WeatherDisplay;