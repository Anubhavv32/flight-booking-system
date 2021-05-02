import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware, compose } from 'redux';
import reducer from './reducer/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
// import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));
let persistor = persistStore(store);
ReactDOM.render(
  <React.StrictMode>
     <Provider store = {store}><PersistGate  persistor={persistor}><App /></PersistGate></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
