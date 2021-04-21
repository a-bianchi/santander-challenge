/* eslint-disable react/prop-types */
import { ReactElement } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '../utils';

type Public = {
    Component: React.FC<
        RouteComponentProps<{
            [x: string]: string | undefined;
        }>
    >;
    path: string;
    restricted?: boolean;
};

export const PublicRoute: React.FC<Public> = ({ Component, restricted = false, path }): ReactElement => {
    return (
        <Route
            path={path}
            exact
            render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
        />
    );
};
