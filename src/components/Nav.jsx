import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from "../assets/CineFlix.png";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";


const Nav = ({onSearch}) => {
  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="header">
          {/* Navbar */}
          <div className="navbar">
            <figure className="logo__wrapper">
              <FontAwesomeIcon icon="film" className="logo__icon" />
              <img src={NavLogo} alt="CineFlix Logo" className="logo__img" />
            </figure>

            <ul className="nav__links">
              <li>
                <Link to="/" className="nav__link">
                  <span className="maroon">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/movies" className="nav__link">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/" className="nav__link no-cursor">
                  TV Series
                </Link>
              </li>
            </ul>

            {/* Menu button */}
            <button className="btn__menu" onClick={openMenu}>
              <FontAwesomeIcon icon="bars" />
            </button>

            {/* Mobile menu backdrop */}
            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon="times" />
              </button>

              <ul className="menu__links">
                <li className="menu__list">
                  <Link to="/" className="menu__link" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/movies" className="menu__link" onClick={closeMenu}>
                    Movies
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/"
                    className="menu__link no-cursor"
                    onClick={closeMenu}
                  >
                    TV Series
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Overlay onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
