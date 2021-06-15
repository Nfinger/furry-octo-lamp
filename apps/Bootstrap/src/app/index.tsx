/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { App as Auth } from '@reggora/auth'
import { App as Home } from '@reggora/home'

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/home" component={Home} />
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </BrowserRouter>
);
