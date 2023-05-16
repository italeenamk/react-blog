import './header.css';


const Header = () => {
  return(
      <>
          <div className="header">
              <div className="header-titles">
                  <span className="header-title-small">React & Node</span>
                  <span className="header-title-large">Blog</span>
              </div>
              <img src="https://hips.hearstapps.com/hmg-prod/images/mexiko-yucatan-las-coloradas-pink-lake-salt-lake-royalty-free-image-1570209145.jpg" className="header-img" alt=""/>
          </div>
      </>
  )
}

export default Header;