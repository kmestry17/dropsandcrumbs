import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#gallery">
            Gallery
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#recipe">
            Recipes
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#about">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
