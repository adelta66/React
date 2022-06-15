import React, { useContext, useEffect, useState } from "react"
import {ref, onValue, get } from 'firebase/database'
import {firebaseDb as db} from '../firebase'
import { useAuth } from "../contexts/AuthContext";




const DBContext = React.createContext()

export function useDB() {
    return useContext(DBContext)
}

export function DBProvider({children}) {

    const {currentUser} = useAuth()
    const [user, setUser] = useState(undefined)

    // function getUserInfo(){
        
    //     console.log(user);
    // }

    

    function updateUser(){
        const userref = ref(db,'users/'+currentUser.uid)
        get(userref).then(snapshot=>{
            setUser({...currentUser,...snapshot.val()})
        })
        
    }

    

    


    const value = {
        user,
        updateUser,

    }

    return (
        <DBContext.Provider value={value}>
            {children}
        </DBContext.Provider>
    )
}