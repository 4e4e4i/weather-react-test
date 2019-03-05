import reducer, { initialState } from '../reducers/index';

describe('cities reducer', () => {

    it('FETCH_CITIES_REQUESTED', () => {
        const action = {
            type: 'FETCH_CITIES_REQUESTED',
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: true
        })
    });

    it('FETCH_CITIES_REQUESTED after error', () => {
        const initialStateWithError = {
            cities: [],
            loading: true,
            error: 'Unknown error'
        };

        const action = {
            type: 'FETCH_CITIES_REQUESTED'
        };

        expect(reducer(initialStateWithError, action)).toEqual({
            ...initialStateWithError,
            loading: true
        })
    });

    it('FETCH_CITIES_SUCCESS', () => {
        const stateBefore = {
            cities: [],
            loading: true,
            error: null
        };

        const action = {
            type: 'FETCH_CITIES_SUCCESS',
            payload: [1, 2, 3]
        };

        expect(reducer(stateBefore, action)).toEqual({
            ...stateBefore,
            loading: false,
            cities: action.payload
        })
    });

    it('FETCH_CITIES_FAILURE', () => {
        const action = {
            type: 'FETCH_CITIES_FAILURE',
            payload: '505 error message'
        };

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: action.payload
        })
    })
});
