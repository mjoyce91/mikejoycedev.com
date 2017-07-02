import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import Meta from '../../Containers/Meta/Meta';
import About from '../../Containers/About/About';

const App = () => (
  <HashRouter>
    <main>
      <Switch>
        <Route exact path="/" component={props => <Home {...props} />} />
        <Route exact path="/about" component={props => <About {...props} />} />
        <Route exact path="/meta" component={props => <Meta {...props} />} />
      </Switch>
    </main>
  </HashRouter>
);

export default App;
