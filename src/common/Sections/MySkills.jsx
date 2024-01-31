import React from "react";
import "./MySkills.scss";

const MySkills = () => {
  return (
    <div id="mySkills">
      <div className="container">
        <h2>
          My Skills
        </h2>
        <div className="skills">
          <div className="card-box">
            <div className="skill-card">
              <div className="card-front">
                <h4>Hyper Text Machine Language</h4>
                <div className="card-icon">
                  <i style={{color: '#f06529'}} className="bx bxl-html5"></i>
                </div>
              </div>
              <div className="card-back">
                <h4>HTML</h4>
                <div className="bar">
                  <div style={{width: '80%', backgroundColor: '#f06529'}} className="in-bar">80%</div>
                </div>
              </div>
            </div>
          </div>          
          <div className="card-box">
            <div className="skill-card">
              <div className="card-front">
                <h4>Cascading Style Sheets</h4>
                <div className="card-icon">
                  <i style={{color: '#2965f1'}} className="bx bxl-css3"></i>
                </div>
              </div>
              <div className="card-back">
                <h4>Css</h4>
                <div className="bar">
                  <div style={{width: '65%', backgroundColor: '#2965f1'}} className="in-bar">65%</div>
                </div>
              </div>
            </div>
          </div>          
          <div className="card-box">
            <div className="skill-card">
              <div className="card-front">
                <h4>JavaScript</h4>
                <div className="card-icon">
                  <i style={{color: '#f0db4f'}} className="bx bxl-javascript"></i>
                </div>
              </div>
              <div className="card-back">
                <h4>JS</h4>
                <div className="bar">
                  <div style={{width: '40%', backgroundColor: '#f0db4f'}} className="in-bar">40%</div>
                </div>
              </div>
            </div>
          </div>          
          <div className="card-box">
            <div className="skill-card">
              <div className="card-front">
                <h4>Sassy Cascading Style Sheets</h4>
                <div className="card-icon">
                  <i style={{color: '#cc6699'}} className="bx bxl-sass"></i>
                </div>
              </div>
              <div className="card-back">
                <h4>SCSS</h4>
                <div className="bar">
                  <div style={{width: '65%', backgroundColor: '#cc6699'}} className="in-bar">65%</div>
                </div>
              </div>
            </div>
          </div>          
          <div className="card-box">
            <div className="skill-card">
              <div className="card-front">
                <h4>React</h4>
                <div className="card-icon">
                  <i style={{color: '#00d8ff'}} className="bx bxl-react"></i>
                </div>
              </div>
              <div className="card-back">
                <h4>React</h4>
                <div className="bar">
                  <div style={{width: '40%', backgroundColor: '#00d8ff'}} className="in-bar">40%</div>
                </div>
              </div>
            </div>
          </div>          
          <div className="card-box">
            <div className="skill-card">
              <div className="card-front">
                <h4>Bootstrap</h4>
                <div className="card-icon">
                  <i style={{color: '#563d7c '}} className="bx bxl-bootstrap"></i>
                </div>
              </div>
              <div className="card-back">
                <h4>BS</h4>
                <div className="bar">
                  <div style={{width: '60%', backgroundColor: '#563d7c'}} className="in-bar">60%</div>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default MySkills;
