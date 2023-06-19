import './registor.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const Registor = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handelsubmit = async (e) =>{
      e.preventDefault();
      try{
      const res = await axios.post("http://localhost:5001/api/auth/register", {
         username,
         email,
         password,
      });
      res.data && window.location.replace("/api/auth/login")
      }catch (err){
      setError(true);
      }
    };
  return(
      <>
          <div className="register">
              <span className="registerTitle">Register</span>
              <form className="registerForm" onSubmit={handelsubmit}>
                  <label>Username</label>
                  <input className="registerInput" type="text" placeholder="Enter your username..."
                  onChange={e=>setUsername(e.target.value)}
                  />
                  <label>Email</label>
                  <input className="registerInput" type="text" placeholder="Enter your email..."
                  onChange={e=>setEmail(e.target.value)}
                  />
                  <label>Password</label>
                  <input className="registerInput" type="password" placeholder="Enter your password..."
                  onChange={e=>setPassword(e.target.value)}
                  />
                  <button className="registerButton" type="submit">Register</button>
              </form>
              <button className="registerLoginButton"><Link style={{textDecoration: "none", color:"inherit"}} to="/login">Login</Link></button>
          </div>
      </>
  )
}

export default Registor;