import React from "react";
import { useEffect, useState } from "react";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

function Home() {
  const [count, setCount] = useState(0);
  const [years, setYears] = useState(0);
  const [loaded, setLoaded] = useState(false);
 

  useEffect(() => {
    setLoaded(true);
  }, []);

  const loadcount = (startcount, endcount, callback, interval) => {
    let i = startcount;
    let a;
    a = setInterval(() => {
      if (i < endcount) {
        callback();
        i++;
      } else {
        clearInterval(a);
      }
    }, interval);
  };
  const loadaction = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const loadyears = () => {
    setYears((prevYears) => prevYears + 1);
  };
  useEffect(() => {
    loadcount(0, 3, loadaction, 1000);
  }, []);
  useEffect(() => {
    loadcount(0, 15, loadyears, 1000);
  }, []);

  function SkillProgressBar({ percentage, color }) {
    return (
      <div className="skill-progress-bar-container">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: "grey",
            trailColor: "grey",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
    );
  }
  const skillz = [
    {
      name: "JavaScript",
      color: "yellow",
      percentage: 86,
      img: "https://www.svgrepo.com/download/349419/javascript.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },

    {
      name: "React.js",
      color: "cyan",
      percentage: 75,
      img: "https://www.svgrepo.com/download/354259/react.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },
    {
      name: "Python",
      percentage: 55,
      color: "rgb(0, 174, 255)",
      img: "https://www.svgrepo.com/download/452091/python.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },
    {
      name: "MongoDB",
      color: " rgb(15, 202, 15)",
      percentage: 33,
      img: "https://www.svgrepo.com/download/439231/mongodb.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },
    {
      name: "PhotoShop",
      color: "blue",
      percentage: 85,
      img: "https://www.svgrepo.com/download/373968/photoshop.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },
    {
      name: "Premiere Pro",
      percentage: 30,

      color: "blueviolet",
      img: "https://www.svgrepo.com/download/452150/adobe-premiere.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },
    {
      name: "Figma",
      color: "red",
      percentage: 40,
      img: "https://www.svgrepo.com/download/452202/figma.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },
    {
      name: "Capcut",
      color: "rgb(149, 92, 18)",
      percentage: 90,
      img: "https://www.svgrepo.com/download/504203/capcut.svg",
      info: "https://www.svgrepo.com/download/56648/verified-contact.svg",
    },
  ];
  return (
    <div className="portf">
      <div className={`homepage ${loaded ? "loaded" : ""}`}>
        <div className="profile">
          <div className="pro-details">
            <span className="mage">
              <img src={require("../../image/readywork.jpg")} alt="#" />
            </span>
            <span className="name">Amedu Kerry </span>
            <span className="work">Frontend-Developer</span>
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
            <Button className="gethire" variant="contained" disableElevation>
              Hire me
            </Button>
            {/* <button className="gethire">Hire me</button> */}
          </div>
          <div className="butins">
            <Fab variant="extended" color="primary" className="cv">
              <DownloadIcon sx={{ mr: 1 }} />
              Download cv
            </Fab>
            <Fab variant="extended" color="primary" className="cont">
              <PermContactCalendarIcon sx={{ mr: 1 }} />
              Contact me
            </Fab>
            {/* <button className="cv">Download cv</button> */}
            {/* <button className="cont">Contact me</button> */}
          </div>
        </div>
        <div className="about">
          <div className="abt">
            <h3>
              <span className="wel">Hello,</span> it's me
            </h3>
            <h1>Amedu Donatus Kerry</h1>
            <h3>
              And i'm a{" "}
              <span className="disci">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Frontend Developer",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Graphic Designer",
                    1000,
                    "video Editor",
                    1000,
                    "Fashion Stylist",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1.5em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
            </h3>
            <p>
              With a robust 2-years background in frontend development, I excel
              in creating visually striking and functional user interfaces,
              particularly with Javascript and ReactJS. My prowess extends to
              UX/UI design and responsive web development. Known for my
              strengths in clean code and innovative problem-solving, I’ve
              successfully collaborated within diverse teams. Whether leading or
              contributing, my commitment to excellence ensures impactful
              solutions in the ever-evolving realm of web development.
            </p>
          </div>
          <div className="busson">
            <Fab variant="extended" color="primary" className="exp">
              <h2>{count}+</h2>
              <span>years of experience</span>
            </Fab>
            <Fab variant="extended" color="primary" className="exp">
              <h2>{years}</h2>
              <span>Project completed</span>
            </Fab>
            {/* <button className="exp">
              <h2>2+</h2>
              <span>years of experience</span>
            </button> */}
            {/* <button className="exp">
              <h2>15</h2>
              <span>Project completed</span>
            </button> */}
          </div>
        </div>
      </div>
      {/* ============skills========= */}

      <div className="ski-info" id=" ">
        <div className="textpski">
          <h1>Skills & Technical Prowess</h1>
          <p>
            This section showcases my technical expertise and proficiency in
            programming languages, frameworks, tools, and technologies. It
            demonstrates my problem-solving abilities, analytical skills, and
            commitment to continuous learning. Explore this section to gain
            insight into the technical knowledge and capabilities that enable me
            to deliver innovative solutions.
          </p>
        </div>

        <div className="allpee">
          {skillz.map((skill, index) => (
            <div className="skills" key={index}>
              <div className="skilogo">
                <img className="ick" src={skill.img} alt="#" />
                <button className="bt-info">
                  <img className="ickk" src={skill.info} alt="#" />
                </button>
              </div>
              <div className="contee">
                <div className="skitext">
                  <h3> {skill.name}</h3>
                  <p>Front-End Development</p>
                  <span className="smallp">CERTIFIED SKILLS</span>
                </div>
                <SkillProgressBar
                  key={index}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sch-info">
        <h1>Self Education</h1>
        <div className="school">
          <div className="schdetails">
            <h2>july. 2020 - Present (4 yrs)</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="sch-d">
            <h1>General Programming (YouTube, Google, W3school & Others)</h1>
            <h3>Description:</h3>
            <p>
              I began my journey as a Frontend Developer in 2020 by
              self-learning through resources like YouTube and Google. I
              enhanced my skills through the W3Schools, Udemy courses, and
              coding challenges on HackerRank. I gained proficiency in HTML,
              CSS, JavaScript, and React, focusing on responsive design and
              project management.
            </p>

            <h3>Acquired Skills:</h3>
            <p>
              Proficient in HTML, CSS, and JavaScript • Experienced with React
              and other modern JavaScript frameworks • Responsive design and
              cross-browser compatibility • Project Management • Time Management
              • Version control using Git and GitHub
            </p>
            {/* </span> */}
          </div>
        </div>
        <div className="school">
          <div className="schdetails">
            <h2>Oct. 2019 - Present (4 yrs+)</h2>
            <p>Graphic Designer</p>
          </div>
          <div className="sch-d">
            <h1>General Design (YouTube, Google, Udemy & Others)</h1>
            <h3>Description:</h3>
            <p>
              I embarked on my journey as a Graphic Designer in 2020, initially
              self-learning through platforms like YouTube and Google. I further
              honed my skills by enrolling in various online courses and
              tutorials, including Udemy and other design-specific programs.
              This self-directed learning approach allowed me to develop a
              robust skill set in graphic design.
            </p>

            <h3>Acquired Skills:</h3>
            <p>
              Visual Communication • Adobe Creative Suite (Photoshop,
              Illustrator, InDesign)• Branding and Identity Design
            </p>
            {/* </span> */}
          </div>
        </div>
        <div className="school">
          <div className="schdetails">
            <h2>Feb. 2023 - Present (1yr+)</h2>
            <p>Video Editor</p>
          </div>
          <div className="sch-d">
            <h1>General Video Editing (YouTube, Google & Others)</h1>
            <h3>Description:</h3>
            <p>
              I started my journey as a Video Editor in 2020 by self-learning
              through platforms like YouTube and Google. To enhance my skills, I
              enrolled in various online courses and tutorials on platforms such
              as Udemy and other specialized video editing programs. This
              approach helped me build a comprehensive understanding of video
              editing techniques and tools.
            </p>

            <h3>Acquired Skills:</h3>
            <p>
              Video Editing and Post-Production • Adobe Premiere Pro and After
              Effects • Storyboarding and Scriptwriting
            </p>
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
