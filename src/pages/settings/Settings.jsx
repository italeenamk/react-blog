import './settings.css';
import Sidebar from "../../components/sidebar/sidebar";


const Settings = () => {
  return(
      <>
          <div className="settings">
              <div className="settings-wrapper">
                  <div className="settings-title">
                      <span className="settings-update-title">Update Your Account</span>
                      <span className="settings-delete-title">Delete Account</span>
                      <form className="settings-form"></form>
                  </div>
              </div>
              <Sidebar/>
          </div>
      </>
  )
}

export default Settings;