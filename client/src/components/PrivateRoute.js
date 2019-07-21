import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// Requirement 3.
// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={props =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )
        }
    />
)

export default PrivateRoute;