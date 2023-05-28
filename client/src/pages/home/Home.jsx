import './home.css';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {
    const [posts, serPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            console.log(res)
        }
        fetchPosts();
    },[])
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