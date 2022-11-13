import { useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"
import axios from "axios"

const Register = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const res = axios("/auth", {
      username,email,password
    })
    console.log(res);
  }
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handelSubmit}>
            <label >Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..." 
            onChange={e =>setEmail(e.target.value)}/>
            <label >Username</label>
            <input type="text" className="registerInput" placeholder="Enter your username..." 
            onChange={e =>setUsername(e.target.value)}
            />
            
            <label >Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password..." 
            onChange={e =>setPassword(e.target.value)}/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton" type="submit">
            <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}

export default Register