/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider} from 'react-redux';

import Home from 'containers/Home/';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header/';
import Footer from 'components/Footer/';
import SearchTrips from 'containers/SearchTrips';
import ManageTrips from 'containers/ManageTrips/Loadable';
import Modal from 'containers/Modal';
export default function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/trips/search" component={SearchTrips} />
        <Route exact path="/trips/manage" component={ManageTrips} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer/>
      <Modal/>
    </div>
  );
}