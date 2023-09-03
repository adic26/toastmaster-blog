import React, {useState} from "react";
import {Link} from "gatsby";
import github from "../img/github-icon.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const logo = "https://toastmasterscdn.azureedge.net/medias/images/brand-items/logos-and-wordmarks/toastmasters-logo-color-png.png";

  return (<nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Toastmaster International" style={{ maxHeight: "3.75rem" }}/>
        </Link>
        {/* Hamburger menu */}
        <button className={`navbar-burger burger ${isActive && "is-active"}`} aria-expanded={isActive} onClick={() => setIsActive(!isActive)}>
          <span/>
          <span/>
          <span/>
        </button>
      </div>
      <ul id="navMenu" className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
        {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */
        }

        <li className="navbar-item" style={{
            padding: "0px"
          }}>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
        </li>
        <li className="navbar-item" style={{
            padding: "0px"
          }}>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </li>
        <li className="navbar-item" style={{
            padding: "0px",
            textAlign: "right"
          }}>
          <img src="https://toastmasterscdn.azureedge.net/medias/images/brand-items/toastmasterswordmarkcolor.png" alt="Toastmaster International"/>
        </li>
      </ul>
    </div>
  </nav>);
};

export default Navbar;
