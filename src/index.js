import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SettingsProvider from './context/settings.js';

import App from './app.js';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <SettingsProvider>
    <App />
  </SettingsProvider>, 
  rootElement
);