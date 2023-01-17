import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/happyPerson2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1>Movin' Up </h1>
        <p> Good books for your wellbeing </p>
        <Link to="/catalog">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
