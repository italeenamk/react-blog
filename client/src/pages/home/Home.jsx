import './home.css';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
  return(
      <>
          <Header/>
          <div className="home">
              <Posts/>
              <Sidebar/>
          </div>
      </>
  )
}

export default Home;