// imports
import React from 'react';
import App from './App.jsx'
import './index.css'
import {createRoot} from 'react-dom/client';

// variables
const container = document.getElementById('root');
const root = createRoot(container);

//rendering the app with the container
root.render(
  <App />
);
