import "./login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate();  
  return (
      <div className="login-div">
          <input type={"text"} className="pole"></input> <br />
          <input type={"text"} className="pole"></input> <br />
          <button type="submit"className="btn" onClick={() => navigate("../zadania")}>Zaloguj się</button>
      </div>  
    );
}

