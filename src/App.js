import "./app.css";
import Login from "./components/login/Login";
import React from "react";
import MainView from "./components/MainView/MainView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
/* 
  green:"#82D9A0",
  red:"#CD5D67",
  lessRed:"#E6A9A7",
  white:"#FFF5E6",
  grey:"#434556"
   */

function App() {
  return (
    <div className="app-div">
   
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/zadania" element={<MainView />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
