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

export const cityAdded = (city) => {
    return {
        type: 'CITY_ADDED',
        payload: city,
    }
};

const fetchCities = (weatherService) => (city) => (dispatch) => {
    dispatch(citiesRequested());
    weatherService.getCity(city)
        .then((res) => dispatch(citiesLoaded(res)))
        .catch((err) => dispatch(citiesError(err)));
};

export {
    fetchCities
};
