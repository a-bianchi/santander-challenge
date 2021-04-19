import { BrowserRouter, Switch } from 'react-router-dom';
import Login from '../containers/login';
import Home from '../containers/home';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ReactElement } from 'react';

export const Routing = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute Component={Home} path="/" />
                <PrivateRoute Component={Login} path="/login" />
            </Switch>
        </BrowserRouter>
    );
};
