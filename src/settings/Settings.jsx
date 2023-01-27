import "./settings.css";
import Slidebar from "../slidebar/Slidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteAcc">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="./pic1.jpg" alt="" className="profilePic" />
            <label htmlFor="fileInput">
              <span className="box">
                <span className="userIcon">
                  <ion-icon name="person-circle-outline"></ion-icon>
                </span>
              </span>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Ashesh" />
          <label>Email</label>
          <input type="text" placeholder="asheshmandal73@gmail.com" />
          <label>Password</label>
          <input type="text" placeholder="Password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Slidebar />
    </div>
  );
}
