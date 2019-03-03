import React, { Component } from 'react';

import './city-form.scss';
import { compose } from '../utils';
import { withWeatherService } from '../hoc';
import { bindActionCreators } from "redux";
import { cityAdd } from "../../actions";
import { connect } from 'react-redux';

class CityForm extends Component {

    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleClick = (event) => {
        event.preventDefault();
        this.props.onAddedToList(this.state.value);
        this.setState({
            value: ''
        });
    };

    render() {
        return (
            <form className="city-form">
                <input
                    className="city-form__input"
                    placeholder="Enter your city"
                    value={ this.state.value }
                    onChange={ this.handleChange }
                    type="text"/>
                <button
                    className="city-form__btn btn btn-primary"
                    onClick={ this.handleClick }>
                    Add city
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch, {weatherService}) => {
    return bindActionCreators({
            onAddedToList: cityAdd(weatherService)
        }, dispatch);
};

export default compose(
    withWeatherService(),
    connect(null, mapDispatchToProps)
)(CityForm);
