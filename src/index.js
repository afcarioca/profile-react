import React from 'react';
import ReactDOM from 'react-dom';
import "./reset.css";
import './index.css';
import Home from './components/Home/Home.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact  path="/" component={Home}/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


