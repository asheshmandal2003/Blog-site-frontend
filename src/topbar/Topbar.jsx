import "./topbar.css";
import { NavLink } from "react-router-dom";

function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topleft">
        <div className="topLeftItem">
          <a href="https://www.facebook.com/profile.php?id=100073167571831" target={"_blank"}>
          <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
        <div className="topLeftItem">
          <ion-icon name="logo-twitter"></ion-icon>
        </div>
        <div className="topLeftItem">
          <a href="https://in.pinterest.com/asheshmandal73/" target={"_blank"}>
            <ion-icon name="logo-pinterest" className="topLeftItem"></ion-icon>
          </a>
        </div>
        <div className="topLeftItem">
          <a href="https://instagram.com/ashesh_mandal?igshid=YmMyMTA2M2Y=" target={"_blank"}>
          <ion-icon name="logo-instagram" className="topLeftItem"></ion-icon>
          </a>
        </div>
      </div>
      <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/about"}>ABOUT</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/contact"}>CONTACT</NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/write"}>WRITE</NavLink>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topright">
        <div className="topSearchIcon">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div className="topImg">
          {user ? (
            <NavLink to={"/settings"}>
              <img src="./pic1.jpg" alt="" />
            </NavLink>
          ) : (
            <>
              <div className="topcenter">
                <ul className="topList">
                  <li className="topListItem">
                    <NavLink to={"/login"}>LOGIN</NavLink>
                  </li>
                  <li className="topListItem">
                    <NavLink to={"/signup"}>SIGNUP</NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
