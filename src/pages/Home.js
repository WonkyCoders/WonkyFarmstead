import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.png";
import Aubergine from "../assets/Aubergine.png";
import Avocado from "../assets/Avocado.png";
import Garlic from "../assets/Wonky-Boxgarlic-.png";
import "../styles/Home.css";

function Home() {
  return (
    
    <div className="home" >
    {/* <div className="characterContainer" style={{ backgroundImage: `url(${BannerImage})` }}> */}

    <div className="characterContainer">
      <img src={Aubergine} alt="A hand-drawn Aubergine character" className="homeChar"></img>
      <img src={Garlic} alt="A hand-drawn Garlic character" className="homeChar"></img>
      <img src={Avocado} alt="A hand-drawn Avocado character"className="homeChar"></img>
    
      
    </div>
    <hr style={{borderColor: "transparent"}}></hr>
    <a href="https://wonkybox.nz/blogs/whats-in-the-box-this-weekend" className="return-link">
      ← Back to What's in the box this weekend</a>
    <hr className="break"></hr>
    </div>
    
  );
}

export default Home;
