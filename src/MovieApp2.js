import React from 'react';
// import Home from './routes/Home';
import './MovieApp2.css';
import { HashRouter, Route } from 'react-router-dom';

import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';

import Navigation from './components/Navigation';

function MovieApp2() {
  //   return <Home />;
  return (
    <HashRouter>
      {/* <Route path='/home'>
        <h1>Home</h1>
        </Route>
        <Route path='/home/introduction'>
        <h1>Introduction</h1>
        </Route>
        <Route path='/about'>
        <h1>About</h1>
    </Route> */}

      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path='/movie-detail' component={Detail} />
    </HashRouter>
  );
}

export default MovieApp2;
