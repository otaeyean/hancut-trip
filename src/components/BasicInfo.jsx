import React from "react";
import "./BasicInfo.css";

const BasicInfo = ({ data }) => (
  <section className="info-box">
    <h2>기본정보</h2>
    <div className="info-item">
      <span className="info-label">우편번호</span>
      <span className="info-value">{data.zipcode}</span>
    </div>
    <div className="info-item">
      <span className="info-label">홈페이지</span>
      <span className="info-value">
        <a href={data.homepage} target="_blank" rel="noopener noreferrer">
          {data.homepage}
        </a>
      </span>
    </div>
    <div className="info-item">
      <span className="info-label">주소</span>
      <span className="info-value">{data.address}</span>
    </div>
  </section>
);

export default BasicInfo;
