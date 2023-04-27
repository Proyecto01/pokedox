import React from 'react';
import ReactDOM from 'react-dom/client';
import { logger } from './middlewares';
import App from './App';
import thunk from 'redux-thunk';
import { pokemonsReducer } from './reducers/pokemons';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* WITH DEVTOOLS WITHOUT REDUX THUNK: */
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

/*
WITH DEVTOOLS WITHOUT REDUX THUNK:
const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);*/

const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
