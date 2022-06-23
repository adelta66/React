import React from "react";
import { useState, useEffect } from "react";
import { useDB } from "../../contexts/DBContext";

export default function TeacherTask(props) {
    const { submitSolution } = useDB()

    const [isReplies, setIsReplies] = useState(false);
    console.log(props);


    return (
        <div className="oneAssingnment">
            <div class="one">
                <div className="assingnmentName"> {props.name} </div>
                <div className="assingnmentDesc"> {props.desc} </div>
                <div className="assingnmentEnd_Date">Koniec:  {props.end_date} </div>
                <button className="showReplies" onClick={() => setIsReplies(!isReplies)}> {isReplies === true ? "Schowaj przeslane prace" : "Pokaz przeslane prace"}</button>
            </div>{isReplies && <div className="allReplies"></div>}
        </div>


    )
}