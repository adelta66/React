import React from "react";
import { useDB } from "../../contexts/DBContext";


export default function StudentView() {

  const {user}  = useDB()

  const logUserInfo = () => {
    
    console.log(user)
  }



  return (
    <div>
      <button onClick={logUserInfo}>log user</button>
    </div>
  );
}