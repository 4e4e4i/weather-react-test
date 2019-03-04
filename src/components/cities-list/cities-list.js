import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from "../spinner";
import CitiesListItem from '../cities-list-item';
import {cityDeleted, fetchCities} from "../../actions";
import { bindActionCreators } from "redux";
import { withWeatherService } from "../hoc";
import { compose } from '../utils'
import { connect } from 'react-redux';

import './cities-list.scss';

const CitiesList = ({ cities, onDelete }) => {

    if (cities) {
        return (

            <ul className="cities-list">
                {
                    cities.map((city) => {

                        return (
                            <li key={city.id}>
                                <CitiesListItem city={city} onDelete={onDelete}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
};

class CitiesListContainer extends Component {

    componentDidMount() {
        this.props.fetchCities();
    }

    render() {
        const { cities, loading, error, onDelete } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <CitiesList cities={cities} onDelete={onDelete}/>

    }
}

const mapStateToProps = ({ cities, loading, error }) => {
    return { cities, loading, error }
};

const mapDispatchToProps = (dispatch, { weatherService }) => {
    return bindActionCreators({
        fetchCities: fetchCities(weatherService),
        onDelete: cityDeleted,
    }, dispatch);
};

export default compose(
    withWeatherService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CitiesListContainer);
