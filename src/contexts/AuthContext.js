import React, { useContext, useState } from "react"

import auth from '../firebase'
import {signInWithEmailAndPassword, getAuth} from "firebase/auth"


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const auth = getAuth()
    const [currentUser, setCurrentUser] = useState()

    // getAuth(email, password)
    //     .createUser({
    //         email: '',
    //         password: 'secretPassword',
    //     })
    //     .then((userRecord) => {
    //         // See the UserRecord reference doc for the contents of userRecord.
    //         console.log('Successfully created new user:', userRecord.uid)
    //     })
    //     .catch((error) => {
    //         console.log('Error creating new user:', error)
    //     })

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    


    const value = {
        currentUser,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}