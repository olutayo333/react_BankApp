import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.css'
import { BrowserRouter } from 'react-router-dom';
 
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
 import counterReducer from "./redux/counterSlice.js"
export const store = configureStore({
  reducer: {counterReducer},
})

//reducers - variables actions-functions for manipulating the variables
//slice - reducer, actions

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
