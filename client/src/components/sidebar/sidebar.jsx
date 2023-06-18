import './sidebar.css';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async () =>{
            const res = await axios.get("http://localhost:5001/api/categories");
            setCats(res.data);
        };
        getCats()
    }, []);
  return(
      <>
          <div className="sidebar">
              <div className="sidebar-items">
                  <span className="sidebar-title">ABOUT ME</span>
                  <img src="https://images.squarespace-cdn.com/content/v1/62983f895312590f364452cc/7ba22126-7684-438a-a44e-5b4d8ff68865/LYD07977-Edit.jpg?format=500w" alt=""/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eius error
                      est quae quas, quis sint soluta! Aliquid, maiores, maxime?</p>
              </div>
              <div className="sidebar-items">
                  <span className="sidebar-title">CATEGORIES</span>
                  <ul className="sidebar-list">
                      {cats.map((c)=>(
                          <Link style={{textDecoration: "none", color:"inherit"}} to={`/?cat=${c.name}`}>
                              <li className="sidebar-list-item">{c.name}</li>
                          </Link>
                      ))}
                  </ul>
              </div>
              <div className="sidebar-items">
                  <span className="sidebar-title">FOLLOWS US</span>
                  <div className="sidebar-social">
                      <i className="sidebar-icon fa-brands fa-square-facebook"></i>
                      <i className="sidebar-icon fa-brands fa-square-twitter"></i>
                      <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
                      <i className="sidebar-icon fa-brands fa-square-instagram"></i>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Sidebar;