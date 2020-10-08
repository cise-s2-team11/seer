import React from 'react';
import ReactDOM from 'react-dom';
import './Green.css';
import * as serviceWorker from './serviceWorker';
import NavBar from './NavBar';
import Hero from './Hero';
import Search from './Search';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Search />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
