const initialState = {
    cities: [],
    loading: true,
    error: null,
    cityError: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_CITIES_REQUESTED':
            return {
                ...state
            };
        case 'FETCH_CITIES_SUCCESS':
            return {
                ...state,
                cities: action.payload,
                loading: false
            };
        case 'FETCH_CITIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'CITY_ADDED':
            const city = action.payload;
            const cityId = city.id;
            const cityIndex = state.cities.findIndex(({id}) => id === cityId);
            if (cityIndex === -1) {
                return {
                    ...state,
                    cities: [
                        ...state.cities,
                        city
                    ],
                    loading: false,
                    cityError: false
                }
            }

            return {
                ...state
            };
        case 'CITY_DELETED':
            const { cities } = state;
            const itemIndex = cities.findIndex(({id}) => id === action.payload);
            return {
                ...state,
                cities: [
                    ...state.cities.slice(0, itemIndex),
                    ...state.cities.slice(itemIndex + 1)
                ]
            };
        case 'CITY_NOT_FOUND':
            return {
                ...state,
                cityError: true
            };

        default:
            return state;
    }
};

export default reducer;
