
import './App.css';
import Nav from'./pages/nav.js';
import Main from'./pages/main.js';
import Login from'./pages/login.js';

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  
  
  
  
    <div className="App">
								<Nav />
								<Routes>
													<Route path="/main" element={<Main />}>
  </Route>
													<Route path="/login" element={<Login />}></Route>
								</Routes>
  
  
    </div>
  );
}

export default App;
