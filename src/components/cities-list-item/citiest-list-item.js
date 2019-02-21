import React from 'react';

import './cities-list-item.scss';

const CitiesListItem = ({ city }) => {
    const { name } = city;

    return (
        <div className="cities-list-item">
            <strong className="cities-list-item__name">
                <span>{name},</span>
                <span>RU</span>
            </strong>
            <button
                type="button"
                className="cities-list-item__btn btn btn-primary">
                Delete
            </button>
            <ul className="cities-list-item__info">
                <li>
                    <span>current temp: 12 C</span>
                </li>
                <li>
                    <span>current pressure: 654</span>
                </li>
                <li>
                    <span>current wind speed: 7.31</span>
                </li>
            </ul>
        </div>
    )
};

export default CitiesListItem;
