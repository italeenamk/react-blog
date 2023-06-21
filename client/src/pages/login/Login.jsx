import './login.css';
import {Link} from "react-router-dom";


const Login = () => {
    const handelsubmit=(e)=>{
      e.preventDefault();
    };
  return(
      <>
          <div className="login">
              <span className="loginTitle">Login</span>
              <form className="loginForm" onSubmit={handelsubmit}>
                  <label>Username</label>
                  <input className="loginInput" type="text" placeholder="Enter your username..." />
                  <label>Password</label>
                  <input className="loginInput" type="password" placeholder="Enter your password..." />
                  <button className="loginButton" type="submit">Login</button>
              </form>
              <button className="loginRegisterButton"><Link style={{textDecoration: "none", color:"inherit"}} to="/register">Register</Link></button>
          </div>
      </>
  )
}

export default Login;