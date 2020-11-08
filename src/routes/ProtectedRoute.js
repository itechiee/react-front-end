import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
  const Component = props.component;
  const isAuthenticated = localStorage.getItem('user');

  return isAuthenticated ? (<Component />) : (
    <Redirect to="/login" />
  )
}

export default ProtectedRoute;