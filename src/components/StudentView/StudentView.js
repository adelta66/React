import React from "react";
import { firebaseDb } from 'firebase/firebaseDb'

const uid = props.uid

let userData = firebaseDb.ref('users/'+uid).once('value',snapshot=>{
    console.log(snapshot.val())
})

export default function StudentView() {
  return (
    <div>
      
    </div>
  );
}