import React from 'react';
import { Switch, Route } from "react-router-dom";
import { HomePage } from '../pages'

import './app.scss';

const App = () => {
    return (
        <main role="main" className="container">
            <Switch>
                <Route
                    path="/"
                    exact
                    component={HomePage}/>
            </Switch>
        </main>

    )
};

export default App;
