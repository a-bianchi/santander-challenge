import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ReactElement } from 'react';
import Admin from '../pages/Admin';
import User from '../pages/User';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const Routing = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute Component={Home} path="/" exact />
                <PublicRoute Component={Home} path="/home" />
                <PrivateRoute Component={Admin} path="/admin" />
                <PrivateRoute Component={User} path="/user" />
                <PublicRoute Component={NotFound} path="/404" />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};
