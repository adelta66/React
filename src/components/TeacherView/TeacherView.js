import "./TeacherView.css";
import React from "react";
import { useDB } from "../../contexts/DBContext.js";
import { useState, useEffect } from "react";
import TeacherTask from "../TeacherTask/TeacherTask";
import { list } from "firebase/storage"

export default function TeacherView() {
  const [x, setX] = useState(1);
  const { user, getGroupInfo, addTask, getUserGroups } = useDB();

  const [isShown, setIsShown] = useState(false); // wyswietla dodawanie zadania
  const handleClick = event => { setIsShown(current => !current); }; // wyswietla dodawanie zadania


  const [teacherGroups, setTeacherGroups] = useState()
  const [teacherTasks, setTeacherTasks] = useState([{
    name: "Zadanie 1",
    description: "asd",
    end_date: "dzi "
  },
  {
    name: "Zadanie 2",
    description: "jedz zupe",
    end_date: "jutro"
},])

  /* const [isReplies, setIsReplies] = useState(false); */

  const group1_assin = [
    {
      assin_name: 'Oblicz pole',
      assin_desc: 'Kwadrat ma bok o dlugosci 4',
      assin_date: '15.12.2022'
    }
  ]

  const groups = [{ grupa: "Grupa 1", id: "1" }, { grupa: "Grupa 2", id: "2" }];
  const listItems = groups.map((group) =>
    <li><button key={group.id} className="group-btn" onClick={() => setX(group.id)}>{group.grupa}</button></li>
  );

  
  //pokaz taski z bazy
  
  
  let listTasks = teacherTasks.map((task) =>
  <TeacherTask key={task.date} name={task.name} desc={task.description} end_date={task.dueDate}></TeacherTask>
  )
  
  useEffect(()=>{
    listTasks = teacherTasks.map((task) =>
    <TeacherTask key={task.date} name={task.name} desc={task.description} end_date={task.dueDate}></TeacherTask>
  )
  }, [teacherTasks])

  
  async function initData() {
    const groups = await getUserGroups(user.uid)

    let groupInfoReturn=[];
    let tasksReturn=[]
    for(let group in groups){
      group = groups[group]
      const groupInfo = await getGroupInfo(group)
      groupInfoReturn[group] = groupInfo.name

      Object.keys(groupInfo.tasks).forEach(key=>{
        tasksReturn[key] = groupInfo.tasks[key]
      })
    }
    console.log("groupInfoReturn",groupInfoReturn);
    console.log("tasksReturn",tasksReturn);

    setTeacherGroups(groupInfoReturn)
    setTeacherTasks(tasksReturn)
    
  }

  useEffect(() => {
    initData()
  }, [])

  // // Update task info after getting teacher groups




  /* const listTasks = tasks.map((assingment) => 
    <div className="oneAssingnment">
      <div class="one"> 
    <div className="assingnmentName"> {assingment.name} </div>
    <div className="assingnmentDesc"> {assingment.desc} </div>
    <div className="assingnmentEnd_Date">Koniec:  {assingment.end_date} </div>
    <button className="showReplies" onClick={()=>setIsReplies(!isReplies)}> {isReplies === true ? "Schowaj przeslane prace" : "Pokaz przeslane prace"}</button>
    </div>{isReplies && <div className="allReplies"></div>}
    </div>

  ); */

  return (
    <div className="mainview">
      <div className="groups">
        <ul>
          {listItems}
        </ul>
      </div>
      <div className="tasks">

        <div className="groupname"> Grupa {x}</div>
        <button className="addassingment" onClick={handleClick} >Dodaj Zadanie</button>
        {isShown && (
          <div className="addAssingmentPop">
            <form>
              <input type="text" className="addassingmentPopName" placeholder="Nazwa Zadania" required></input>
              <textarea type="text" className="addassingmentPopDesc" placeholder="Opis Zadania" required></textarea>
              <button className="addassingmentPopBtn" onClick={handleClick}>Dodaj Zadanie</button>
              <div className="addassingmentPopDate"><input type="date" id="end_date" name="end_date"></input></div>
            </form>
          </div>)}

         <div className="assingments" id="assingments">
          {listTasks}
        </div>

      </div>
    </div>
  );
}