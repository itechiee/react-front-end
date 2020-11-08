import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Login from './components/Login';
import UserList from './components/UserList';
import PageNotFound from './components/PageNotFound';
import DefaultRoute from './routes/DefaultRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import AuthRoute from './routes/AuthRoute';
import TestPage from './components/TestPage';

function App() {
  return (
    <div className="App">
      <Switch>
          <DefaultRoute path="/" exact />
          <AuthRoute path="/login" />    
          <ProtectedRoute path="/users" exact component={UserList} /> 
          {/* <Route path="/admin" component={Admin} />              */}
          <Route path="/test" component={TestPage} />
          <Route path="**" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
