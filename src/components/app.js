import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./header";
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import Stores from './stores';
import Products from './products';
import RequireAuth from './auth/require_auth';
import Welcome from './welcome';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ Welcome } />
          <Route path="/signin" component={ Signin } />
          <Route path="/signout" component={ Signout } />
          <Route path="/signup" component={ Signup } />     
          <Route path="/stores" component={ RequireAuth(Stores) } />
          <Route path="/products" component={ RequireAuth(Products) } />
        </Switch>
      </div>
    );
  }
}