import React from 'react';
import CitiesListContainer from "../cities-list/cities-list";
import CityForm from "../citi-form/city-form";

const HomePage = () => {
    return (
        <section className="current-weather">
            <h1>React Weather</h1>
            <CityForm />
            <CitiesListContainer />
        </section>
    )
};

export default HomePage;
