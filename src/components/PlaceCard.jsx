import React from "react";
import "./PlaceCard.css";

const PlaceCard = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>도보 {item.time}</p>
      <button className="add-btn">추가</button>
    </div>
  );
};

export default PlaceCard;
