import { BrowserRouter, Switch } from 'react-router-dom';
import Admin from '../containers/admin';
import User from '../containers/user';
import Home from '../containers/home';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ReactElement } from 'react';

export const Routing = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute Component={Home} path="/" />
                <PrivateRoute Component={Admin} path="/admin" />
                <PrivateRoute Component={User} path="/user" />
            </Switch>
        </BrowserRouter>
    );
};
