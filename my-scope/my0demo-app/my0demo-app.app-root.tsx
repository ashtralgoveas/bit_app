import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { My0DemoAppApp } from './app';

ReactDOM.render((
  <BrowserRouter>
    <My0DemoAppApp />
  </BrowserRouter>
), document.getElementById('root'));

