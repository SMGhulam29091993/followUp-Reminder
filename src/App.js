import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Header from './Component/Header';
import SignIn from './pages/SignIn';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App