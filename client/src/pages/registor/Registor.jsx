import './registor.css';
import {Link} from "react-router-dom";
import {useState} from "react";


const Registor = () => {
    const [username, setUsername] = useState("")
  return(
      <>
          <div className="register">
              <span className="registerTitle">Register</span>
              <form className="registerForm">
                  <label>Username</label>
                  <input className="registerInput" type="text" placeholder="Enter your username..." />
                  <label>Email</label>
                  <input className="registerInput" type="text" placeholder="Enter your email..." />
                  <label>Password</label>
                  <input className="registerInput" type="password" placeholder="Enter your password..." />
                  <button className="registerButton">Register</button>
              </form>
              <button className="registerLoginButton"><Link style={{textDecoration: "none", color:"inherit"}} to="/login">Login</Link></button>
          </div>
      </>
  )
}

export default Registor;