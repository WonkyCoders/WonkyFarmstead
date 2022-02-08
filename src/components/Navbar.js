import React, { useState } from "react";
import Avocado from "../assets/Avocado.png";
import { Link } from "react-router-dom";
// import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
  
  const toggleNavbar = () => {
      setOpenLinks(!openLinks);
  }; 
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        {/* <img src={Avocado} /> */}
        <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/produce"> Produce </Link>
        <Link to="/farmstead"> Farmstead </Link>
        <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/produce"> Produce </Link>
        <Link to="/farmstead"> Farmstead </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          {/* <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
