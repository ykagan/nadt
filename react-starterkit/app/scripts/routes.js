import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Info from './pages/info.jsx';
import IvyPage from './pages/ivypage.jsx';
import NotFound from './pages/notFound.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="info" handler={ Info } />
    <Route name='ivy' path="/home/ivy" handler={ IvyPage } />
    <Route name="home" handler={ Home } >
      
    </Route>
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

export default routes;