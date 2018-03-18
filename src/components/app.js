import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from "./header/header";
import Footer from "./footer/footer";
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';
import Stores from './stores';
import Cart from './cart';
import StoreProducts from './products/store-products';
import RequireAuth from './auth/require_auth';
import Welcome from './welcome';

export default class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={ Welcome } />
          <Route path="/signin" component={ Signin } />
          <Route path="/signout" component={ Signout } />
          <Route path="/signup" component={ Signup } />     
          <Route path="/stores" component={ RequireAuth(Stores) } />
          <Route path="/storeproducts/:id" component={ RequireAuth(StoreProducts) } />
          <Route path="/cart" component={ RequireAuth(Cart) } />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}