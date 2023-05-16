import './sidebar.css';


const Sidebar = () => {
  return(
      <>
          <div className="sidebar">
              <div className="sidebar-items">
                  <span className="sidebar-title">ABOUT ME</span>
                  <img src="https://cdn.contrastly.com/wp-content/uploads/storytelling-photography-3.jpg" alt=""/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eius error
                      est quae quas, quis sint soluta! Aliquid, maiores, maxime?</p>
              </div>
              <div className="sidebar-items">
                  <span className="sidebar-title">CATEGORIES</span>
                  <ul className="sidebar-list">
                      <li className="sidebar-list-item">Life</li>
                      <li className="sidebar-list-item">Music</li>
                      <li className="sidebar-list-item">Style</li>
                      <li className="sidebar-list-item">Sport</li>
                      <li className="sidebar-list-item">Tech</li>
                      <li className="sidebar-list-item">Cinema</li>
                  </ul>
              </div>
          </div>
      </>
  )
}

export default Sidebar;