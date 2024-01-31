import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const openMenu = () => {
    setOpenBurger(!openBurger);
  };
  const closeBurger = () => {
    setOpenBurger(false);
  };

  return (
    <div className="Navbar">
      <a href="#home" className="nav-logo">
        <span>.</span>azyzbe
      </a>
      <ul className={openBurger ? "navigation open" : "navigation"}>
        <li className="menu-item">
          <a onClick={() => closeBurger()} href="#home">
            home
          </a>
        </li>
        <li className="menu-item">
          <a onClick={() => closeBurger()} href="#mySkills">
            my skills
          </a>
        </li>
        <li className="menu-item">
          <a onClick={() => closeBurger()} href="#portfolio">
            portfolio
          </a>
        </li>
        <li className="menu-item">
          <a onClick={() => closeBurger()} href="#contact">
            contact
          </a>
        </li>
      </ul>
      <i className="bx bx-menu menu-toggle" onClick={() => openMenu()}></i>{" "}
    </div>
  );
};

export default Navbar;
