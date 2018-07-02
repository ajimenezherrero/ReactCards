import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './index-reducers';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Prevent recomputing reducers for `replaceReducer`
      shouldHotReload: false
    })
    : compose;

const store = createStore(
  createReducer(),
  fromJS({}),
  composeEnhancers()
);

if (module.hot) {
  module.hot.accept('./index-reducers', () => {
    store.replaceReducer(createReducer(store.injectedReducers));
  });
}

export default store;
