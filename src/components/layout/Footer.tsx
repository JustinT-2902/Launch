import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Contact-Container">
        <div className="Contact-request-Container">
            <div className="All-Heading">
              <div className="Heading-Content">
                <hr className="Yellow-Line" />
                <p className="Heading-Text">Contact me</p>
              </div>
              <img
                src=".\assets\images\Navbar\Logo.png"
                alt=""
                className="LogoImage"
              />
            </div>

            <div className="Contact-Items-Container">
              <div className="Contact-Items">
                <div className="Contact-Item-Inputs">
                  <label className="Contact-Name">Name</label>
                  <input
                    type="text"
                    placeholder="Ex: Justin"
                    className="Contact-Input"
                  />
                </div>

                <div className="Contact-Item-Inputs">
                  <label className="Contact-Name">Email</label>
                  <input
                    type="text"
                    placeholder="Example@gmail.com"
                    className="Contact-Input"
                  />
                </div>

                <div className="Contact-Item-Inputs">
                  <label className="Contact-Name">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="Contact-Input"
                  />
                </div>

                <div className="Contact-Item-Inputs">
                  <label className="Contact-Name">I'm interested in</label>
                  <select
                    defaultValue="" // Set the initial value to match the placeholder
                    className="Contact-Input"
                  >
                    <option value="">Select</option>
                    <option value="option1">Hire me</option>
                    <option value="option2">Discuss</option>
                    <option value="option3">Be Partner</option>
                  </select>
                </div>
              </div>

              <div className="Contact-Item-Inputs">
                <label className="Contact-Name">Message</label>
                <input
                  type="text"
                  placeholder="Enter here..."
                  className="Contact-Input-Message"
                />
              </div>

              <button className="Request-Button">Send Request</button>
            </div>
        </div>
        <div className="Informations-Menu">
          <div className="Informations">
          <div className="Contact-Information">
            <p className="Contact-Title">LET'S CHAT</p>
            <p className="Contact-Details">JustinT.works@gmail.com</p>
            <p className="Contact-Details">+84 917868529</p>
          </div>

          <div className="Contact-Information">
            <div className="Contact-Title">MY SOCIAL SITES</div>
            <div>
              <div className="Media-Container">
                <a href="">
                  <img
                    src=".\assets\images\Footer\Facebook-Footer.png"
                    alt=""
                    className="media-icon"
                  />
                </a>
                <a href="">
                  <img
                    src=".\assets\images\Footer\Youtube-Footer.png"
                    alt=""
                    className="media-icon"
                  />
                </a>
                <a href="">
                  <img
                    src=".\assets\images\Footer\Insta-Footer.png"
                    alt=""
                    className="media-icon"
                  />
                </a>
                <a href="">
                  <img
                    src=".\assets\images\Footer\TikTok-Footer.png"
                    alt=""
                    className="media-icon"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="Right">© 2025 Made by JustinT</p>
          </div>
          </div>
          <div className="Menu-container">
          <p className="Contact-Title">NAVIGATION</p>
          <p className="Menu-chosen">Home</p>
          <p className="Menu-chosen">About</p>
          <p className="Menu-chosen">Services</p>
          <p className="Menu-chosen">Resume</p>
          <p className="Menu-chosen">Project</p>
          <p className="Menu-chosen">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
