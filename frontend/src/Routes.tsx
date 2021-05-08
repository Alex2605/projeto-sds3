
import DashBoard from 'pages/Dashboard';
import Home from 'pages/home';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>

            <Switch>
                <Route path="/dashboard">
                    <DashBoard />
                </Route>
            </Switch>

        </BrowserRouter>

    );
}

export default Routes;