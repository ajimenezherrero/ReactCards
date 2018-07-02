import React from 'react';
import { render } from 'react-dom';

import { create as createHistory } from './utils/history';
import App from './app';

createHistory();

render(
  <App />,
  document.getElementById('root')
)
