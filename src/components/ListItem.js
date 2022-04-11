import React from "react";

function ListItem(props) {
  return (
    <li className={`user-card--contact-item ${!props.item && "unavailable"}`}>
      <div className="user-card--contact-icon-wrapper">
        <img className="user-card--contact-icon" src={props.icon} alt="" />
      </div>
      <div className="user-card--contact-text">
        <h4>{props.item ? props.item : "Not Available"}</h4>
      </div>
    </li>
  );
}

export default ListItem;
