import React, { Component } from 'react';
import { connect } from 'react-redux';
class WeatherList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.weather)
            console.log('props-weather', this.props.weather);

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.props.weather.map(this.renderWeather)} */}
                    
                </tbody>
            </table>
        );
    }


    renderWeather(cityData) {
        return (
            <tr>
                <td>{cityData.city.name}</td>
                <td>Temp</td>
                <td>Pressure</td>
                <td>Humidity</td>
            </tr>
        );
    }
}


function mapStateToProps({ weather }) { //state.weather
    return { weather }; // {weather :weather}
}

export default connect(mapStateToProps)(WeatherList);
