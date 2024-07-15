import React from "react";
import "./navbar.scss";
import "../../icofont/icofont.min.css";
import { NavLink } from "react-router-dom";
import Switch from "@mui/material/Switch";


function navbar({togger, chk}) {
  return (
    <div className="allhead">
      <div className="heada">
        <span>
          BigCool
          <Switch
            checked={chk}
            onChange={togger}
            inputProps={{ "aria-label": "controlled" }}
          />
        </span>
        <div className="liks">
          <ul>
            <NavLink to="/">
              {" "}
              <li>
                <i className="icofont-home"></i>Home
              </li>
            </NavLink>
            <NavLink to="/ski-info">
              {" "}
              <li>
                <i className="icofont-brainstorming"></i>Skills
              </li>
            </NavLink>
            <NavLink to="/exp">
              {" "}
              <li>
                <i className="icofont-tasks"></i>Experience
              </li>
            </NavLink>
            <NavLink to="/contact">
              {" "}
              <li>
                <i className="icofont-iphone"></i>Contacts
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar;
