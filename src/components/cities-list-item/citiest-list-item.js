import React from 'react';

import './cities-list-item.scss';

const CitiesListItem = ({ city }) => {
    const { name } = city;

    return (
        <div className="book-list-item">
            <span>{name}</span>
        </div>
    )
};

export default CitiesListItem;
