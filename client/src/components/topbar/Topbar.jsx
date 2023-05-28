import './topbar.css';

const Topbar = () => {
  return(
      <>
          <div className="top">
              <div className="top-left">
                  <i className="top-icon fa-brands fa-square-facebook"></i>
                  <i className="top-icon fa-brands fa-square-twitter"></i>
                  <i className="top-icon fa-brands fa-square-pinterest"></i>
                  <i className="top-icon fa-brands fa-square-instagram"></i>
              </div>
              <div className="top-center">
                  <ul className="top-list">
                      <li className="top-list-item">HOME</li>
                      <li className="top-list-item">ABOUT</li>
                      <li className="top-list-item">CONTACT</li>
                      <li className="top-list-item" >WRITE</li>
                      <li className="top-list-item" >LOGOUT</li>
                  </ul>
              </div>
              <div className="top-right">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?crop=1:1" alt="" className="top-img"/>
                  <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
              </div>
          </div>
      </>
  )
}

export default Topbar;