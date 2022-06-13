 import "./MainView.css"
import React from "react";
export default function MainView() {

    return (
      <div className="mainview">
          <div className="groups">
            <ul>
              <li><button className="group-btn">Grupa 1</button></li>
              <li><button className="group-btn">Grupa 2</button></li>

            </ul>
          </div>
          <div className="tasks"></div>
      </div>  
    );
}