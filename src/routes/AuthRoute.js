import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/Login';

function AuthRoute(props) {
  if(localStorage.getItem('user')) {
    return <Redirect to="/users" /> 
  } else {
    return <Route path="/login" exact component={Login} />    
  }
}

export default AuthRoute;