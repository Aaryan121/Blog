import { useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"
import axios from "axios"

const Register = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try{
      const res = await  axios.post("https://blog-app-aaryan.herokuapp.com/api/auth/register", {
        username,email,password
      });
      res.data && window.location.replace("/login");
      console.log(res);
    }catch(err){
      setError(true);
    }
    
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
        </button>{error &&
        <span className="error">Something Went wrong!</span>}
    </div>
  )
}

export default Register