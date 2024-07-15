import "./contact.scss";
import "../../icofont/icofont.min.css";
import React from "react";

function Contactme() {
  return (
    <div className="Contactme">
      <div className="contxt">
        <div className="whyte">
          <span className="headtext">
            <h2>Contact us</h2>
            <p>Read to work and create or just to have a chat with</p>
          </span>
          <div className="deta">
            <span className="infoh">
              {" "}
              <i className="icofont-location-pin pin"></i>
              <h3>
                Address: <span className="whyt"> Lagos, Nigeria</span>
              </h3>
            </span>
            <span className="infoh">
              {" "}
              <i className="icofont-ui-call pin"></i>
              <h3>
                Phone:<span className="grey"> 09012722105</span>
              </h3>
            </span>
            <span className="infoh">
              {" "}
              <i className="icofont-paper-plane pin"></i>
              <h3>
                Email:<span className="grey"> Amedu_donatus@yahoo.com</span>
              </h3>
            </span>
            <span className="infoh">
              {" "}
              <i className="icofont-world pin"></i>
              <h3>
                Web: <span className="grey"> coolsite.com</span>
              </h3>
            </span>
          </div>
          {/* <div className="socials">
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
          </div> */}
        </div>

        <div className="blayk">
          <h1>Send a message</h1>
          <div className="headinput">
            <div className="namebox">
              <h3 className="xxx">Name: </h3>
              <div className="boxx">
                <input type="name" placeholder="Name" />
              </div>
            </div>
            <div className="namebox">
              <h3 className="xxx">Email: </h3>
              <div className="boxx">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="namebox">
              <h3 className="xxx">Subject: </h3>
              <div className="boxx">
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            {/* <div className="boxx">
              <input type="email" placeholder="Email"/>
            </div>
            <div className="boxx">
              <input type="text" placeholder="Subject"/>
            </div> */}
            <div className="boxxx">
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
          <button className="clickit">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
