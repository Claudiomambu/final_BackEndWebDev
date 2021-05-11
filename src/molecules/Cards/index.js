import React from "react";

const Cards = ({ Name, email, imageUrl }) => {
  return (
    <div className="card" styles={{ width: "18rem" }}>
      <img className="card-img-top" src={imageUrl} alt="avatar" />
      <div className="card-body">
        <p className="card-text">{Name}</p>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

export default Cards;
