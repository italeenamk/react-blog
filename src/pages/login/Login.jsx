import './login.css';


const Login = ({selectTab}) => {

  return(
      <>
          <div className="login">
              <span className="loginTitle">Login</span>
              <form className="loginForm">
                  <label>Email</label>
                  <input className="loginInput" type="text" placeholder="Enter your email..." />
                  <label>Password</label>
                  <input className="loginInput" type="password" placeholder="Enter your password..." />
                  <button className="loginButton" onClick={(e)=>selectTab('Home')}>Login</button>
              </form>
              <button className="loginRegisterButton"  onClick={(e)=>selectTab('Register')}>Register</button>
          </div>
      </>
  )
}

export default Login;