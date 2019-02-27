import React from 'react';

import './cities-list-item.scss';

const CitiesListItem = ({ city, onDelete }) => {
    const { id, name, main, sys, wind } = city;

    return (
        <div className="cities-list-item">
            <strong className="cities-list-item__name">
                <span>{name},</span>
                <span>{sys.country}</span>
            </strong>
            <button
                onClick={() => onDelete(id)}
                type="button"
                className="cities-list-item__btn btn btn-primary">
                Delete
            </button>
            <ul className="cities-list-item__info">
                <li>
                    <span>current temp: {main.temp} C</span>
                </li>
                <li>
                    <span>current pressure: {main.pressure}</span>
                </li>
                <li>
                    <span>current wind speed: {wind.speed}</span>
                </li>
            </ul>
        </div>
    )
};

export default CitiesListItem;
