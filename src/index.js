import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import WeatherService from './services/weather-service';
import { WeatherServiceProvider } from "./components/weather-service-context";

import store from './store';

const weatherService = new WeatherService();

const geoFindMe = () => {

    if (!navigator.geolocation){
        return;
    }

    function success(position) {
        const latitude = position.coords.latitude.toFixed(5);
        const longitude = position.coords.longitude.toFixed(5);

        weatherService.getCityByCurrentPosition(longitude, latitude);
    }

    navigator.geolocation.getCurrentPosition(success);
};
geoFindMe();


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <WeatherServiceProvider value={weatherService}>
                <Router>
                    <App />
                </Router>
            </WeatherServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
