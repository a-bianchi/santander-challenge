/* eslint-disable react/prop-types */
import { ReactElement } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { isLogin } from '../utils/storage';

type Public = {
    Component: React.FC<
        RouteComponentProps<{
            [x: string]: string | undefined;
        }>
    >;
    exact?: boolean;
    path?: string;
    restricted?: boolean;
};

export const PublicRoute: React.FC<Public> = ({ Component, restricted = false, path, exact = true }): ReactElement => {
    return (
        <Route
            exact={exact}
            path={path}
            render={(props) => (isLogin() && restricted ? <Redirect to="/home" /> : <Component {...props} />)}
        />
    );
};
