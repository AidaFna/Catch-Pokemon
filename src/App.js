import React from 'react';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import List from './views/listPokemon/listPokemon';
import Details from './views/detailsPokemon/detailsPokemon';
import Landing from './views/landingPage/landingPage';
import './App.css';

const App =()=>{
return <>
  <Router>
    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/:name" element={<Details/>}/>
      <Route path="/landing" element={<Landing/>}/>
    </Routes>
  </Router>
  
</>

}

export default App;
