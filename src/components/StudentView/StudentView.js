import "./StudentView.css"
import React from "react";
import { useDB } from "../../contexts/DBContext";


export default function StudentView() {

  const {user, getGroupInfo, getSubmitions, addTask, submitSolution,uploadState, getUserGroups, getUserTasks}  = useDB()

  const logUserInfo =async () => {
    getUserTasks(user.uid).then(tasks=>{
      console.log(tasks)

    
      tasks.forEach(task => {
        console.log(task)
      })
      
    })
  }

  const formHandler=(e)=>{
    e.preventDefault()
    console.log(e);
    const file = e.target[0].files[0]
    submitSolution("testGroup","testTask",file)
  }

  

  return (
    <div>
      <button onClick={logUserInfo}>log user</button>
      <form onSubmit={formHandler}>
        <input type="file" name="file" />
        <button type="submit">Submit</button>
      </form>
      <span class="white">{uploadState}%</span>

    </div>
  );
}