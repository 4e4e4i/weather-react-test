import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from "../spinner";
import CitiesListItem from '../cities-list-item';
import {fetchCities} from "../../actions";
import {bindActionCreators} from "redux";
import {withWeatherService} from "../hoc";
import compose from '../utils'
import { connect } from 'react-redux';

const CitiesList = ({ cities }) => {
    return (
        <ul className="cities-list">
            {
                cities.map((city) => {

                    return (
                        <li key={city.id}>
                            <CitiesListItem city={city}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};

class CitiesListContainer extends Component {

    componentDidMount() {
        console.log(this.props.fetchCities());
        this.props.fetchCities();
    }

    render() {
        const { cities, loading, error } = this.props;
        console.log({cities});

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <CitiesList cities={cities} />
    }
}

const mapStateToProps = ({ cities, loading, error }) => {
    return { cities, loading, error }
};

const mapDispatchToProps = (dispatch, { weatherService }) => {
    return bindActionCreators({
        fetchCities: fetchCities(weatherService),
    }, dispatch);
};

export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CitiesListContainer);
