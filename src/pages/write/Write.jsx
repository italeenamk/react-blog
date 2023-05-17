import './write.css';


const Write = () => {
  return(
      <>
          <div className="write">
              <form className="write-form">
                  <div className="write-form-group">
                      <label htmlFor="file-input">
                          <i className="write-icon fa-solid fa-plus"></i>
                      </label>
                      <input type="file" id="file-input" style={{display:"none"}}/>
                      <input type="text" placeholder="Title" className="write-input" autoFocus={true}/>
                  </div>
                  <div className="write-form-group">
                      <textarea className="write-input write-text" placeholder="Tell your story..." type="text"/>
                  </div>
                  <button className="write-submit">Publish</button>
              </form>
          </div>
      </>
  )
}

export default Write;