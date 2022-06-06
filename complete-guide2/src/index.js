import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello World</h1>
    <App />
  </React.StrictMode>
);

reportWebVitals();
