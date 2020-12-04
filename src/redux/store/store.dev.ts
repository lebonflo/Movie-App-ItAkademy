import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
