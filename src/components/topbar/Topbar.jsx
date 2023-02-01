import "./topbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Topbar() {
  const user = false;
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="top">
      <div className="topleft">
        <div className="topLeftItem">
          <a
            href="https://www.facebook.com/profile.php?id=100073167571831"
            target={"_blank"}
          >
            <div className="navbarIcons">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>
          </a>
        </div>
        <div className="topLeftItem">
          <div className="navbarIcons">
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
        <div className="topLeftItem">
          <a href="https://in.pinterest.com/asheshmandal73/" target={"_blank"}>
            <div className="navbarIcons">
              <ion-icon
                name="logo-pinterest"
                className="topLeftItem"
              ></ion-icon>
            </div>
          </a>
        </div>
        <div className="topLeftItem">
          <a
            href="https://instagram.com/ashesh_mandal?igshid=YmMyMTA2M2Y="
            target={"_blank"}
          >
            <div className="navbarIcons">
              <ion-icon
                name="logo-instagram"
                className="topLeftItem"
              ></ion-icon>
            </div>
          </a>
        </div>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="topcenter">
        <ul className={click ? "topList active" : "topList"}>
          <li className="topListItem">
            <NavLink to={"/"} onClick={closeMobileMenu}>
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/about"} onClick={closeMobileMenu}>
              ABOUT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/contact"} onClick={closeMobileMenu}>
              CONTACT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to={"/write"} onClick={closeMobileMenu}>
              WRITE
            </NavLink>
          </li>
          <div className="menuUser">
            {user ? (
              <li className="topListItem">
                <NavLink to={"/settings"} onClick={closeMobileMenu}>
                  <img
                    src="./pic1.jpg"
                    alt=""
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </NavLink>
              </li>
            ) : (
              <>
                <li className="topListItem">
                  <NavLink to={"/login"} onClick={closeMobileMenu}>
                    LOGIN
                  </NavLink>
                </li>
                <li className="topListItem">
                  <NavLink to={"/signup"} onClick={closeMobileMenu}>
                    SIGNUP
                  </NavLink>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
      <div className="topright">
        <div className="navbarIcons">
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
                <ul className={click ? "topList active" : "topList"}>
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
