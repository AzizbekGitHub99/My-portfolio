import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home-text">
          <h1>Hi I'm Azizbek</h1>
          <div className="animation-text">
            <h3>
              Frontend Developer
            </h3>
          </div>
          <p>I'm 25 years old and my level is Junior. </p>
        </div>
        <a href="./images/Azizbek Xotamaliyev.pdf" target='_blank' className="button">
          Watch my resume
        </a>
      </div>
    </div>
  );
};

export default Home;
