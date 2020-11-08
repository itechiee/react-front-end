import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function DefaultRoute(props) {
  return <Route {...props} render = {() => {
    if(localStorage.getItem('user')) {
      return <Redirect to='/users' />
    } else {
      return <Redirect to='/login' />
    }
  }}
  />  
}

export default DefaultRoute;