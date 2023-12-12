import { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const isOnline = useOnlineStatus();
  const [btn, setBtn] = useState("Login");

  const commonStyles = (navProps) => {
    const { isActive } = navProps;
    if (isActive) {
      return {};
    }
    return {};
  };

  const activeClassName = (navProps) => {
    const { isActive } = navProps;

    return isActive ? "activeNavClass" : "navClass";
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} className="logo" />
      </div>
      <div>{isOnline ? "Online" : "Offline"}</div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink style={commonStyles} to={"/"} className={activeClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={activeClassName}
              style={commonStyles}
              to={"/about"}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={activeClassName}
              style={commonStyles}
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={activeClassName}
              style={commonStyles}
              to={"/cart"}
            >
              Cart
            </NavLink>
          </li>
          <li
            onClick={() => {
              setBtn("Logout");
            }}
          >
            {btn}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
