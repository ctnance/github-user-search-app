import React from "react";
import CatTest from "../images/cat-test.png";
import LocationIcon from "../images/icon-location.svg";
import WebsiteIcon from "../images/icon-website.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import CompanyIcon from "../images/icon-company.svg";

function UserCard() {
  return (
    <div className="user-card">
      <div className="user-card--user">
        <div className="user-card--user-img">
          <img src={CatTest} alt="" />
        </div>
        <div className="user-card--user-info">
          <h3>User Name</h3>
          <h4 className="user-info--username">@username</h4>
          <h4>Joined 11 Apr 2022</h4>
        </div>
      </div>

      <div className="user-card--description">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </div>

      <div className="user-card--stats">
        <div className="user-repos">
          <p className="user-stat-title">Repos</p>
          <p className="user-stat-number">8</p>
        </div>
        <div className="user-followers">
          <p className="user-stat-title">Followers</p>
          <p className="user-stat-number">3938</p>
        </div>
        <div className="user-following">
          <p className="user-stat-title">Following</p>
          <p className="user-stat-number">9</p>
        </div>
      </div>

      <ul className="user-card--contact">
        <li className="user-card--contact-item">
          <div className="user-card--contact-icon-wrapper">
            <img className="user-card--contact-icon" src={LocationIcon} alt="" />
          </div>
          <div className="user-card--contact-text">
            <h4>San Fransisco</h4>
          </div>
        </li>
        <li className="user-card--contact-item">
          <div className="user-card--contact-icon-wrapper">
            <img className="user-card--contact-icon" src={WebsiteIcon} alt="" />
          </div>
          <div className="user-card--contact-text">
            <h4>San Fransisco</h4>
          </div>
        </li>
        <li className="user-card--contact-item unavailable">
          <div className="user-card--contact-icon-wrapper">
            <img className="user-card--contact-icon" src={TwitterIcon} alt="" />
          </div>
          <div className="user-card--contact-text">
            <h4>Not Available</h4>
          </div>
        </li>
        <li className="user-card--contact-item">
          <div className="user-card--contact-icon-wrapper">
            <img className="user-card--contact-icon" src={CompanyIcon} alt="" />
          </div>
          <div className="user-card--contact-text">
            <h4>@github</h4>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default UserCard;
