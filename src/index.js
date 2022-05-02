import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/explore/'
ReactDOM.render(
  
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/explore' element={<Explore/>}/>
    </Routes>
  </Router>
 
  ,

  document.getElementById('root')
);

