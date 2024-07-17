import React from "react";
import "./exp.scss";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
// import { AvatarGroup } from "@mui/material";

function exp() {
  return (
    <div className="expp" id="">
      <div className="expp-details">
        <div className="exppinfo">
          <h1>Reality Corp</h1>
          <p>Role Description</p>
          <h2>I was responsible for:</h2>
          <ul>
            <li>Design client-side and server-side architectures.</li>
            <li>Develop effective APIs with standardized documentations.</li>
            <li>Test software to ensure responsiveness & efficiency.</li>
            <li>Create security and data protection settings.</li>
            <li>
              Managing multiple projects simultaneously while adhering to
              deadlines.
            </li>
          </ul>
          <div style={{ marginTop: "20px" }}>
            <h4
              style={{
                fontSize: "12px",
                textDecoration: "underline",
                marginBottom: "5px",
              }}
            >
              Required Skills:
            </h4>
            <p>
              REACTJS • TYPESCRIPT • FIGMA • JAVASCRIPT • PROBLEM SOLVING •
              GIT/GITHUB
            </p>
          </div>
        </div>
        <div className="duration">
          <h3>July 2021 – Present</h3>
          <div>
            {" "}
            <AvatarGroup max={4}>
              <Avatar alt="N" src="/path/to/avatar1.jpg" className="nuella" />
              <Avatar alt="A" src="/path/to/avatar2.jpg" className="nico" />
              <Avatar alt="N" src="/path/to/avatar1.jpg" className="nuella" />
              <Avatar alt="A" src="/path/to/avatar2.jpg" className="nico" />
            </AvatarGroup>
          </div>
        </div>
      </div>
      <div className="expp-details">
        <div className="exppinfo">
          <h1>A.D.C. Limousine Services</h1>
          <p>Role Description</p>
          <h2>I was responsible for:</h2>
          <ul>
            <li>
              Creating visual content for various digital platforms using Adobe
              Photoshop.
            </li>
            <li>
              Developing brand identity and ensuring consistency across all
              design projects.
            </li>
            <li>
              Collaborating with clients and team members to understand project
              requirements and deliver creative solutions.
            </li>
            <li>
              Designing logos, brochures, posters, and other promotional
              materials.
            </li>
            <li>
              Editing and enhancing photos to meet high-quality standards.
            </li>
            <li>
              Managing multiple projects simultaneously while adhering to
              deadlines.
            </li>
          </ul>
          <div style={{ marginTop: "20px" }}>
            <h4
              style={{
                fontSize: "12px",
                textDecoration: "underline",
                marginBottom: "5px",
              }}
            >
              Required Skills:
            </h4>
            <p>ADOBE PHOTOSHOP</p>
          </div>
        </div>
        <div className="duration">
          <h3>May 2021 - Feb 2022</h3>
          <div>
            {" "}
            <AvatarGroup max={4}>
              <Avatar alt="A" src="/path/to/avatar1.jpg" className="nuella" />
              <Avatar alt="A" src="/path/to/avatar2.jpg" className="nico" />
              <Avatar alt="A" src="/path/to/avatar1.jpg" className="nuella" />
              <Avatar alt="A" src="/path/to/avatar2.jpg" className="nico" />
            </AvatarGroup>
          </div>
        </div>
      </div>
      <div className="expp-details">
        <div className="exppinfo">
          <h1>GH school</h1>
          <p>Role Description</p>
          <h2>I was responsible for:</h2>
          <ul>
            <li>Design client-side and server-side architectures.</li>
            <li>Develop effective APIs with standardized documentations.</li>
            <li>Test software to ensure responsiveness & efficiency.</li>
            <li>Create security and data protection settings.</li>
            <li>
              Managing multiple projects simultaneously while adhering to
              deadlines.
            </li>
          </ul>
          <div style={{ marginTop: "20px" }}>
            <h4
              style={{
                fontSize: "12px",
                textDecoration: "underline",
                marginBottom: "5px",
              }}
            >
              Required Skills:
            </h4>
            <p>
              REACTJS • TYPESCRIPT • FIGMA • JAVASCRIPT • PROBLEM SOLVING •
              GIT/GITHUB
            </p>
          </div>
        </div>
        <div className="duration">
          <h3>May 2023 - Present</h3>
          <div>
            {" "}
            <AvatarGroup max={4}>
              <Avatar alt="A" src="/path/to/avatar1.jpg" className="nuella" />
              <Avatar alt="A" src="/path/to/avatar2.jpg" className="nico" />
              <Avatar alt="A" src="/path/to/avatar1.jpg" className="nuella" />
              <Avatar alt="A" src="/path/to/avatar2.jpg" className="nico" />
            </AvatarGroup>
          </div>
        </div>
      </div>
      <div className="expp-details">
        <div className="exppinfo">
          <h1>Video Editor</h1>
          <p>Role Description</p>
          <h2>I was responsible for:</h2>
          <ul>
            <li>
              Editing and assembling raw footage into polished, engaging video
              content.
            </li>
            <li>
              Collaborating with creative teams to develop video concepts and
              storyboards.
            </li>
            <li>
              Adding visual effects, sound effects, and music to enhance video
              quality.
            </li>
            <li>
              Ensuring all videos meet technical standards for various platforms
              and formats.
            </li>
            <li>
              Managing multiple projects and meeting tight deadlines
              consistently.
            </li>
            <li>
              Managing multiple projects simultaneously while adhering to
              deadlines.
            </li>
          </ul>
        </div>
        <div className="duration">
          <h3>May 2023 - Feb 2024</h3>
          <div>
            {" "}
            <AvatarGroup max={4}>
              <Avatar alt="N" src="/path/to/avatar1.jpg" className="nuella" />
              <Avatar alt="N" src="/path/to/avatar2.jpg" className="nico" />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default exp;
