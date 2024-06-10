import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Gallery from "../Gallery/Gallery";

const Header = () => {
  return (
    <div className="container">
      <div className="header-main">
        <div className="heading-content">
          <h1>@dropsandcrumbs</h1>
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Header;
