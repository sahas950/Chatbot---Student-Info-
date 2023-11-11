// Importing necessary modules and components from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing stylesheets for the index file
import './index.css';

// Importing the main App component
import App from './App';

// Importing the Provider component from React Redux for store integration
import { Provider } from 'react-redux';

// Importing the Redux store
import store from "./app/store"

// Creating a root for ReactDOM to render the app into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app within a StrictMode and wrapping it with the Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
