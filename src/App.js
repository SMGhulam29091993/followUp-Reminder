import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Header from './Component/Header';
import SignIn from './pages/SignIn';
import PrivateRoute from './Component/PrivateRoute';
import PublicRoute from "./Component/PublicRoute"
import Profile from './pages/Profile';
import UpdateProfile from './pages/UpdateProfile';
import FollowupReminder from './pages/FollowupReminder';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<PrivateRoute/>}>
            <Route path="/profile/:userID" element={<Profile/>} />
            <Route path="/update-profile/:userID" element={<UpdateProfile/>}/>
            <Route path="/followup-reminder" element={<FollowupReminder/>} />
          </Route>
          <Route element={<PublicRoute/>}>
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/sign-in" element={<SignIn/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App