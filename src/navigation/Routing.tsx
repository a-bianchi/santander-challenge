import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { ReactElement } from 'react';
import { Admin, User, Home, Notification, NotFound } from '../pages';

export const Routing = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute Component={Home} path="/" exact />
                <PublicRoute Component={Home} path="/home" />
                <PrivateRoute Component={Admin} path="/admin" />
                <PrivateRoute Component={User} path="/user" />
                <PrivateRoute Component={Notification} path="/notification" />
                <PublicRoute Component={NotFound} path="/404" />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};
