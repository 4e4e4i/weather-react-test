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
        payload: city
    }
};

export const cityNotFound = (error) => {
    return {
        type: 'CITY_NOT_FOUND',
        payload: error
    }
}

export const cityDeleted = (cityId) => {
    const lsPrefix = 'cities-';
    localStorage.removeItem(lsPrefix + cityId);

    return {
        type: 'CITY_DELETED',
        payload: cityId
    }
};

const cityAdd = (weatherService) => (city) => (dispatch) => {
    weatherService.addCity(city)
        .then((res) => dispatch(cityAdded(res)))
        .catch((err) => dispatch(cityNotFound(err)));
};

const fetchCities = (weatherService) => () => (dispatch) => {
    dispatch(citiesRequested());
    weatherService.fetchCities()
        .then((res) => dispatch(citiesLoaded(res)))
        .catch((err) => dispatch(citiesError(err)));
};

export {
    fetchCities,
    cityAdd
};
