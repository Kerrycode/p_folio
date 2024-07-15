import React from 'react'
import "./skill.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function skill() {
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
  );
}

export default skill