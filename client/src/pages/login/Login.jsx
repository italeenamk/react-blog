import './login.css';
import {Link} from "react-router-dom";
import {useContext, useRef} from "react";
import {Context} from "../../context/Context";
import axios from "axios";


const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handelsubmit = async (e) =>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try{
          const res = await axios.post("http://localhost:5001/api/auth/login", {
              username: userRef.current.value,
              password: passwordRef.current.value,
          });
          dispatch({type:"LOGIN_SUCCESS", payload: res.data});
      }catch (err){
          dispatch({type:"LOGIN_FAILURE"});
      }
    };
  return(
      <>
          <div className="login">
              <span className="loginTitle">Login</span>
              <form className="loginForm" onSubmit={ handelsubmit }>
                  <label>Username</label>
                  <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef}/>
                  <label>Password</label>
                  <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef}/>
                  <button className="loginButton" style={{cursor: "not-allowed"}} type="submit" disabled={ isFetching }>Login</button>
              </form>
              <button className="loginRegisterButton"><Link style={{textDecoration: "none", color:"inherit"}} to="/register">Register</Link></button>
          </div>
      </>
  )
}

export default Login;