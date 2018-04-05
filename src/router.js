import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    {/* <Route path="/favorites" componente={Favorites} /> */}
  </Switch>
);
