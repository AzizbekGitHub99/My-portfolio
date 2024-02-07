import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <h2>Contact me</h2>
        <div className="contacts">
          <div className="socials">
            <a
              href="https://t.me/qrushz"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <div className="icon">
                <i style={{ color: "#0088cc" }} className="bx bxl-telegram"></i>
              </div>
            </a>
            <a
              href="https://instagram.com/_a_khatamaliyev?igshid=ZDdkNTZiNTM="
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <div className="icon">
                <i
                  style={{ color: "#e95950" }}
                  className="bx bxl-instagram"
                ></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/azizbek-xotamaliyev-927685151"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <div className="icon">
                <i
                  style={{ color: "#0077b5" }}
                  className="bx bxl-linkedin-square"
                ></i>
              </div>
            </a>
            <a
              href="https://github.com/AzizbekGitHub99"
              target="_blank"
              rel="noreferrer"
              className="social"
            >
              <div className="icon">
                <i style={{ color: "#171515 " }} className="bx bxl-github"></i>
              </div>
            </a>
            <a href="gsdgds" className="social">
              <div className="icon">
                <i style={{ color: "#25D366" }} className="bx bxs-phone"></i>
              </div>
              <p>+998 90 820 5575</p>
            </a>
          </div>
          <div className="massage">
            <input type="text" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your name" />
            <textarea placeholder="Enter your massage" />
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
