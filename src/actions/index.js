const weatherRequested = () => {
    return {
        type: 'FETCH_WEATHER_REQUESTED'
    }
};

const weatherLoaded = (newWeather) => {
    return {
        type: 'FETCH_WEATHER_SUCCESS',
        payload: newWeather
    }
};

const weatherError = (error) => {
    return {
        type: 'FETCH_WEATHER_FAILURE',
        payload: error
    }
};

const citiesRequested = () => {
    return {
        type: 'FETCH_CITIES_REQUESTED'
    }
};

const citiesLoaded = (newCities) => {
    return {
        type: 'FETCH_CITIES_SUCCESS',
        payload: newCities
    }
};

const citiesError = (error) => {
    return {
        type: 'FETCH_CITIES_FAILURE',
        payload: error
    }
};

const fetchWeather = (weatherService) => () => (dispatch) => {
    dispatch(weatherRequested());
    console.log(weatherService.getWeather());
    weatherService.getWeather()
        .then((res) => dispatch(weatherLoaded(res)))
        .catch((err) => dispatch(weatherError(err)));
};

const fetchCities = (weatherService) => () => (dispatch) => {
    dispatch(citiesRequested());
    console.log(weatherService.getCities());
    weatherService.getCities()
        .then((cities) => dispatch(citiesLoaded(cities)))
        .catch((err) => dispatch(citiesError(err)));
};

export {
    fetchWeather,
    fetchCities
};
