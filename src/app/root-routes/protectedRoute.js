import React from 'react';
import { Route, Redirect } from "react-router-dom"

let ProtectedRoute = (props) => {
    console.log('protected route executed')
    if (props.isLoggedIn)
        return <Route {...props}>{props.children}</Route>
    else
        return <Redirect to="/home"></Redirect>
}

export default ProtectedRoute