import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Gallery from "./containers/Gallery/Gallery";
import GalleryByAuthor from "./containers/GalleryByAuthor/GalleryByAuthor";
import PhotoAdd from "./containers/PhotoAdd/PhotoAdd";


const ProtectedRoute = ({isAllowed, ...props}) => (
    isAllowed ? <Route {...props} /> : <Redirect to={"/login"}/>
);

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Gallery}/>
            <ProtectedRoute isAllowed={user }
                            path="/photos/new" exact component={PhotoAdd}/>
            <Route path="/photos/:id" exact component={GalleryByAuthor}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
        </Switch>
    );
};

export default Routes;