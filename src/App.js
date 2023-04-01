

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import LogIn from './component/LogIn';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/login' element={<LogIn/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
