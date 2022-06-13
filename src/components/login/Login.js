import "./login.css";
import React, {useRef, useState} from "react";
import { useAuth } from "../../contexts/AuthContext";



export default function Login() {
  
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()
    
    try{
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      console.log("login success");
    } catch(error){
      console.log(error);
      setError("Nieprawidłowy login lub hasło")
    }

    setLoading(false)
  }

  return (
    
      <div className="login-div" >
          <form>
            <input ref={emailRef} type={"text"} className="pole" placeholder="Login" required></input> <br />
            <input ref={passwordRef} type={"password"} className="pole" placeholder="Hasło" required></input> <br />
            <button type="submit"className="btn" disabled={loading} onClick={handleSubmit}>Zaloguj się</button>
          </form>
      </div>  

    );
}

