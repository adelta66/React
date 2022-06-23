import "./StudentView.css"
import React from "react";
import { useDB } from "../../contexts/DBContext";
import { useState, useEffect} from "react";


export default function StudentView() {

    const { user, getUserTasks, submitSolution } = useDB()
    const [filename, setfile] = useState("Wybierz plik z komputera")
    const [tasks, setTasks] = useState([])

    //pokaz taski z bazy

    // const numbers = [{ id: 1, title: getUserTasks.name, content: 'tresc zadania 1', mark: '100/100' }, { id: 2, title: 'Tytul zadania 2', content: 'Tresc zadania 2', mark: '90/100' }, { id: 3, title: 'tytul zadania 3', content: 'tresc zadania 3', mark: '80/100' }, { id: 1, title: 'tytul zadania 4', content: 'tresc zadania 4', mark: '1/100' }];
    const listItems = tasks.map((number) =>
    <li>
      {console.log(tasks)}
        <div className="post">
            <div className="header">
                <h1>{number.name}</h1>
            </div>
            <div>
                <div className="description"><p>{number.description}</p>
                    <h3></h3>
                </div>
                <div className="attachments">
                    <div className="files-container">

                        <ol>
                            <li> {filename} <button type="submit" className="add" onClick={dfn} >Usun</button></li>
                        </ol>

                        <div className="buttons">

                            <form onSubmit={formHandler}>
                                <div class="field upload">
                                    <label>Wybierz plik z komputera</label>
                                    <input type="file" id="upload-button" onChange={changefilename} name="upload-file"></input>
                                </div>
                                <button type="submit" className="send" >Przeslij Zadanie</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>

)
    async function getTasks(){
      setTasks(await getUserTasks(user.uid))
    }
    useEffect(()=>{
      getTasks()
  }, [])
    

    const formHandler = (e) => {
        e.preventDefault()
        console.log("xdddd");
        const file = e.target[0].files[0]
        submitSolution("testGroup", "testTask", file)
    }

    //dodaje nazwe pliku do tabelki
    function changefilename(e) {
        setfile(e.target.files[0].name);
    }
    //usuwa nazwe pliku
    function dfn() {
        console.log("123");
        setfile("Wybierz plik z komputera");
    }

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}