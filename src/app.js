import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router-dom/Router';
import Route from 'react-router-dom/Route';
import { hot } from 'react-hot-loader';

import { get as getHistory } from './utils/history';
import App from './containers/App';
import store from './index-store';

export default hot(module)(() => (
  <Provider store={store}>
    <Router history={getHistory()} basename="/">
      <Route path="/" component={App} />
    </Router>
  </Provider>
));
