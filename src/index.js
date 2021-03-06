import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import * as serviceWorker from './serviceWorker';
import NavBar from './NavBar';
import Hero from './Hero';
import Search from './Search';

//React to render the homepage
ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Search />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
