import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import MainPage from "./containers/MainPage/MainPage";


const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props} /> : <Redirect to={"/login"}/>
);

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage}/>
            {/*<ProtectedRoute isAllowed={user && user.role === 'admin'}*/}
            {/*                path="/admin" exact component={AdminPage}/>*/}

            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
    );
};

export default Routes;