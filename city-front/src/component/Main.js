import React from 'react';
import axios from 'axios';
import CitySearch from './CitySearch';
import Latlon from './Latlon';
import Map from './Map';
import Weather from './Weather';
require('dotenv').config();

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchM: '',
            lat: '',
            lon: '',
            location: '',
            desplayMap: false,
            desplayError: false,
            // data: '',
            WeatherData: {},
        }
    }
    getLocation = async (x) => {
        x.preventDefault();
        try {
            debugger;
            const url = `https://us1.locationiq.com/v1/search.php?key=pk.7c2b1f16ce9a694bf4d6a5d64d2650a2&q=${this.state.searchM}&format=json`;
            const req = await axios.get(url);
            const req2 = await axios.get(`${process.env.REACT_APP_CLINET}`);
            await this.setState({
                lat: req.data[0].lat,
                lon: req.data[0].lon,
                location: req.data[0].desplay_name,
                desplayMap: true,
                desplayError: false,
                WeatherData: req2.data
            });
            // console.log(req.data[0]);
        }
        catch (mmm) {
            await this.setState({
                desplayMap: false,
                desplayError: true,
            });
        }
    }
    update = (x) => {
        this.setState({ searchM: x.target.value })
    }
    render() {
        return (
            <div>
                <CitySearch location={this.getLocation} update={this.update} />
                {this.state.desplayMap &&
                    <>
                        <Latlon lat={this.state.lat} lon={this.state.lon} location={this.state.location} />
                        <Map lat={this.state.lat} lon={this.state.lon} />
                        <Weather data={this.state.WeatherData} />
                    </>
                }
                {this.state.desplayError &&
                    <>
                        <p> Error failed with status cade 400</p>
                    </>
                }
            </div>
        )
    }
}
export default Main;
