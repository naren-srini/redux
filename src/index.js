import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from ''
import {createStore} from 'redux';

// Store Redux (A globalized state, can be designed to be accessed everywhere)


// Action (Functionality of the App)
// Increment for Counter
let value;
const increment = () => {
  return {
    type: 'INCREMENT'
  }
   
   
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

// Reducer (Description of actions from one state to another)
let state = 0;

const counter = (state, action) => {
  switch(action.value){
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
  }
}

let store = createStore(counter);

// Dispatch (Exporting the action to the user)
store.subscribe(() => console.log(store.getState()))

store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
