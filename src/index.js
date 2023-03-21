import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import frozenReducer from './reducers/frozenReducer';
import fruitReducer from './reducers/fruitReducer';
import meatReducer from './reducers/meatReducer';

//1. <Provider/>: Using redux in React needs react-redux to wire things up by wrapping all the components in <Provider/>

//2. Store: Store is where states and reducers live, and a property of Provider

//3. Reducers: reducers are functions return a piece of state; At the beginning state, a rootReducer is needed to be added in Store (Don't need with configureStore());
//   And the other reducers conbined in rootReducer by method combineReducers. 

//4. Actions: Actions are created by action creator, records information of type, payload.. 
//   action needs dispatch method to be send, and once sent, all reducers will receive.
//   By using bindActionCreator({actions}, dispatch) method, can be direct called in component (don't need to use dispatch for each time)
//   details in frozenSection.jsx

//5. mapStateToProps: let components (using props) get state from redux;
//   mapDispatchToProps: let components (using props) get the actions to change state
//   details in frozenSection.jsx

// Store corresponds to (2.)
const store = configureStore({
  reducer: {
    frozen: frozenReducer,
    fruit: fruitReducer,
    meat: meatReducer, 
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 
    <Provider> corresponds to (1.)
    */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
