import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./assets/scss/style.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
