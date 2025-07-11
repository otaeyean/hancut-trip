import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import "./CustomCourseSection.css";

const CustomCourseSection = ({ title, items }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => setShowAll(!showAll);

  // 보여줄 아이템: 기본 3개, 더보기 클릭 시 전부
  const displayedItems = showAll ? items : items.slice(0, 3);

  return (
    <section className="info-box">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="toggle-btn" onClick={toggleShow}>
          {showAll ? "접기 ▲" : "더보기 ▼"}
        </button>
      </div>
      <div className="card-container">
        {displayedItems.map((item, idx) => (
          <PlaceCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CustomCourseSection;
