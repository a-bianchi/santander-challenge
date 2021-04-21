/* eslint-disable react/prop-types */
import { ReactElement } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '../utils';

type Private = {
    Component: React.FC<
        RouteComponentProps<{
            [x: string]: string | undefined;
        }>
    >;
    path: string;
};

export const PrivateRoute: React.FC<Private> = ({ Component, path }): ReactElement => {
    return (
        <Route exact path={path} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/home" />)} />
    );
};
