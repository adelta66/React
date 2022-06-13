import "./app.css";
import Login from "./components/login/Login";
import React from "react";
import MainView from "./components/MainView/MainView";
import {AuthProvider} from "./contexts/AuthContext";
import Nav from "./components/Nav/Nav"
/* 
  green:"#82D9A0",
  red:"#CD5D67",
  lessRed:"#E6A9A7",
  white:"#FFF5E6",
  grey:"#434556"
   */

function App() {
  return (
    <AuthProvider>
      <div className="app-div">
          <Nav></Nav>
          <Login></Login>
          {/* <MainView></MainView> */}
      </div>
    </AuthProvider>
  );
}

export default App;
