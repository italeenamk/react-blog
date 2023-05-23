import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import {useState} from "react";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registor from "./pages/registor/Registor";


function App() {

    const [currentTab, setCurrentTab] = useState('Login');

    const selectTab=(name)=>{
        setCurrentTab(name);
    }

    const currentUser = true;
  return (
      <>
          <Topbar selectTab={selectTab}/>

          {currentTab === "Home" && <Home/> }
          {currentTab === "Write" && <Write/> }
          {currentTab === "Register" && <Registor selectTab={selectTab}/> }
          {currentTab === "Login" && <Login selectTab={selectTab}/> }
      </>
  );
}

export default App;