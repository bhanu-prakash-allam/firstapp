import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import './App.css';
import "./components/Greet"
import Register from './components/Register';
import React, { useState, useEffect } from 'react';
// import Timesheet from './components/Timesheet';
import Login from './components/Login';
import Home from "./components/Home";
import Greet from "./components/Greet";
import Time from "./components/Time";
import ErrorComp from "./components/Error";
import Test from "./components/Test";

function App() {
  const [login, setLogin] = useState(localStorage.getItem('loggedIn') === 'true');
  useEffect(() => {
    const loggedInValue = localStorage.getItem('loggedIn');
    setLogin(loggedInValue === 'true');
  }, []);
  return (
    <div className="container-fluid App-header vh-100">
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/login' element={< Login setLogin={setLogin} />}></Route>
          <Route exact path='/home' element={< Home />}></Route>
          <Route exact path='/error' element={< ErrorComp />}></Route>
          <Route exact path='/' element={login ? <Outlet /> : <Navigate to="/home" />}>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/time' element={< Time />}></Route>
            <Route path="/greet" element={<Greet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
