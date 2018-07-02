import { combineReducers } from 'redux-immutable';

import CardReducer from './containers/Card/reducer';

const createReducer = injectedReducers => (
  combineReducers({
    cardDomain: CardReducer,
    ...injectedReducers
  })
)

export default createReducer
