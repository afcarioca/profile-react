import React from 'react';
import ReactDOM from 'react-dom';
import "./reset.css";
import './index.css';
import Home from './components/Home/Home.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Home exact  path="/profile"/>
  </React.StrictMode>,
  document.getElementById('root')
);


