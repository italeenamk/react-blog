import {useState} from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Registor from "./pages/registor/Registor";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Post from "./components/post/post";


function App() {

    const currentUser = true;
    const user = true;
  return (
      <>
          <Router>
              <Topbar/>
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route exact path="/login" element={user ? <Home/> :<Login/>}/>
                      <Route exact path="/register" element={user ? <Home/> :<Registor/>}/>
                      <Route exact path="/post" element={<Post/>}/>
                      <Route path="/write" element={user ? <Write/> :<Registor/>}/>
                      <Route path="/settings" element={<Settings/>}/>
                      <Route path="/post/:postId" element={<Single/>}/>
                  </Routes>
          </Router>

          {/*<Topbar selectTab={selectTab}/>*/}


          {/*{currentTab === "Home" && <Home/> }*/}
          {/*{currentTab === "Write" && <Write/> }*/}
          {/*{currentTab === "Register" && <Registor selectTab={selectTab}/> }*/}
          {/*{currentTab === "Login" && <Login selectTab={selectTab}/> }*/}
          {/*{currentTab === "post" && <Post selectTab={selectTab}/> }*/}
          {/*{currentTab === "Settings" && <Settings selectTab={selectTab}/> }*/}
          {/*{currentTab === "Single" && <Settings/> }*/}
      </>
  );
}

export default App;
