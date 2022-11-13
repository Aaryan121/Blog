import Sidebar from "../../components/Sidebar/Sidebar"
import "./Settings.css"

const Settings = () => {
  return (
    <div className="settings">
        <div className="settingWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder="Aaryan" />
                <label >Email</label>
                <input type="email" placeholder="Aaryan@gmail.comm" />
                <label >Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
                
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings