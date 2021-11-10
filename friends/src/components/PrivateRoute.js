import React from 'react'; 
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route {...rest}  
            render={() => {
                if(window.localStorage.getItem("token")){
                    return <Component />
                }else {
                    return <Redirect to="/login" />
                }
            }}
        />
    )
}

export default PrivateRoute;