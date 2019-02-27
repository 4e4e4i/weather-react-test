const initialState = {
    cities: [],
    loading: true,
    error: null
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

        default:
            return state;
    }
};

export default reducer;
