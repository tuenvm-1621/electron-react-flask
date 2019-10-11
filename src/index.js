import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './components'

ReactDOM.render(
  <Router>
    <Provider {...{store}}>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </Provider>
  </Router>, document.getElementById('root')
);
