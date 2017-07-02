import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../../Containers/Home/Home';

const App = () => (
  <HashRouter>
    <main>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </main>
  </HashRouter>
);

export default App;
