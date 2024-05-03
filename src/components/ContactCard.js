import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
    <i class="user icon"></i>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div style={{display:"flex", justifyContent:"end"}}>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", margin: "7px", width:"100px", height:"30px" }}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
