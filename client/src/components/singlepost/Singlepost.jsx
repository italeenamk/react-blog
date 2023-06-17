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
            console.log(res)
        };
        getPost()
    }, [path])
  return(
      <>
          <div className="single-post">
              <div className="single-post-wrapper">
                  <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="single-post-img"/>
                  <h1 className="single-post-title">Lorem ipsum dolor sit amet.
                      <div className="single-post-edit">
                          <i className="single-post-icon fa-solid fa-pen-to-square"></i>
                          <i className="single-post-icon fa-solid fa-trash"></i>
                      </div>
                  </h1>
                  <div className="single-post-info">
                      <span className="single-post-author">Author: <b> Aleena</b></span>
                      <span className="single-post-date">1 hour ago</span>
                  </div>
                  <p className="single-post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                      aut deserunt dolorum earum eum exercitationem harum incidunt provident
                      sed.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                      aut deserunt dolorum earum eum exercitationem harum incidunt provident
                      sed.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                      aut deserunt dolorum earum eum exercitationem harum incidunt provident
                      sed.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                      aut deserunt dolorum earum eum exercitationem harum incidunt provident
                      sed.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                      aut deserunt dolorum earum eum exercitationem harum incidunt provident
                      sed.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                      aut deserunt dolorum earum eum exercitationem harum incidunt provident
                      sed.
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                      aut deserunt dolorum earum eum exercitationem harum incidunt provident
                      sed.
                  </p>
              </div>
          </div>
      </>
  )
}

export default Singlepost;