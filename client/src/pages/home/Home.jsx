import './home.css';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const location = useLocation()

    console.log(location);

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:5001/api/posts", {
            'Content-Type': 'application/json'
        })
        setPosts(res.data)
    }

    useEffect(()=>{

        fetchPosts();
    },[])
  return(
      <>
          <Header/>
          <div className="home">
              <Posts posts={posts} />
              <Sidebar/>
          </div>
      </>
  )
}

export default Home;