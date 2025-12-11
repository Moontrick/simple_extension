import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/global.scss'
import Popup from './containers/Popup/Popup';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);