import "./Nav.css";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1 className="logo">Nazwa Strony</h1>
      <button className="logout" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}
