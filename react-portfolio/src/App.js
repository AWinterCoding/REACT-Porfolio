import React from 'react';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      {/* Okay so this is the routing that tells the page what element to render */}
    <BrowserRouter>
  <Routes>
    <Route index element={<AboutMe></AboutMe>}></Route>
    <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
    <Route path='/portfolio'element={<Portfolio></Portfolio>}></Route>
    <Route path='/resume' element={<Resume></Resume>}></Route>
    <Route path='/contact'element={<Contact></Contact>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
