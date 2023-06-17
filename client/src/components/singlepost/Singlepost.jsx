import './singlepost.css';
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios, {get} from "axios";


const Singlepost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    useEffect(()=>{
        const getPost = async ()=>{
            const res = await axios.get("http://localhost:5001/api/posts/" + path);
            setPost(res.data)
        };
        getPost()
    }, [path])
  return(
      <>
          <div className="single-post">
              <div className="single-post-wrapper">
                  {post.photo && (
                      <img src={post.photo} alt="" className="single-post-img"/>
                  )}
                  <h1 className="single-post-title">{post.title}
                      <div className="single-post-edit">
                          <i className="single-post-icon fa-solid fa-pen-to-square"></i>
                          <i className="single-post-icon fa-solid fa-trash"></i>
                      </div>
                  </h1>
                  <div className="single-post-info">
                      <span className="single-post-author">Author: <b> {post.username}</b></span>
                      <span className="single-post-date">{new Date(post.createdAt).toDateString()}</span>
                  </div>
                  <p className="single-post-description">{post.description}
                  </p>
              </div>
          </div>
      </>
  )
}

export default Singlepost;