import React from 'react';
import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Routers;
