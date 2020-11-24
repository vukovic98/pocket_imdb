import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import VerificationModal from '../containers/VerificationModal';
import MovieComponent from './MovieComponent';

export default function AppLayout() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path='/' exact> <Register /> </Route>
          <Route path='/login' exact> <Login /> </Route>
          <Route path='/verify' exact> <VerificationModal /> </Route>
          <Route path='/home' exact> <Home /> </Route>
          <Route path='/profile' exact> <Profile /> </Route>
          <Route path='/movie/:id' exact> <MovieComponent /> </Route>
        </Switch>
      </Router>
    </div>
  );
}
