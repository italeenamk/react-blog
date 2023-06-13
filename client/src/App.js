import {useState} from "react";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Registor from "./pages/registor/Registor";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";


function App() {

    const currentUser = true;
  return (
      <>
          <Router>
              <Layout>
                  <Routes>
                      <Route exact path="/" element={<Home/>}/>
                      <Route exact path="/login" element={<Login/>}/>
                      <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Routes>
              </Layout>
          </Router>
          {/*<Router>*/}
          {/*    <Topbar />*/}
          {/*    <Switch>*/}
          {/*        <Route exact path="/">*/}
          {/*            <Home />*/}
          {/*        </Route>*/}
          {/*            <Route path='/Posts' element={<Home/>} />*/}
          {/*        <Route path="/register">*/}
          {/*            {currentUser ? <Home /> : <Registor />}*/}
          {/*        </Route>*/}
          {/*        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>*/}
          {/*        <Route path="/post/:id">*/}
          {/*            <Single />*/}
          {/*        </Route>*/}
          {/*        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>*/}
          {/*        <Route path="/settings">*/}
          {/*            {currentUser ? <Settings /> : <Login />}*/}
          {/*        </Route>*/}
          {/*    </Switch>*/}
          {/*</Router>*/}

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
