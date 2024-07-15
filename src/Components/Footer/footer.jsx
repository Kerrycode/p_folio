import React from "react";
import "./footer.scss";

function footer() {
  return (
    <div className="foota">
      <div className="allfoot">
        <h1> Check out more</h1>
        <div className="footbottom">
          <div className="Logo"><h1>BigCool</h1></div>
          <div className="qlink">
            <ul>
              <h1> Qiuck Links</h1>
              <a href="">
                <li>Education HIstory</li>
              </a>
              <a href="">
                <li>Personal Project</li>
              </a>
              <a href="">
                <li>Hobbies</li>
              </a>
              <a href="">
                <li>Downlod Cv</li>
              </a>
            </ul>
          </div>

          <div className="smedia">
            <h3>Social Media & Contacts</h3>
            <div className="socials">
              <div className="cool">
                <img
                  src="https://www.svgrepo.com/download/303145/instagram-2-1-logo.svg"
                  alt="bgvfvf"
                />
              </div>
              <div className="cool">
                <img
                  src="https://www.svgrepo.com/download/448234/linkedin.svg"
                  alt="bgvfvf"
                />
              </div>

              <div className="cool">
                <img
                  src="https://www.svgrepo.com/download/303260/tiktok-logo-logo.svg"
                  alt="bgvfvf"
                />
              </div>
              <div className="cool">
                <img
                  src="https://www.svgrepo.com/download/303147/whatsapp-icon-logo.svg"
                  alt="bgvfvf"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
