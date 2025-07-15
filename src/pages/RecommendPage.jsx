import React from "react";
import "./RecommendPage.css";

// 이미지 import
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const dummyPlaces = [
  {
    id: 1,
    name: "제주도 성산일출봉",
    description: "유네스코 세계자연유산으로 지정된 아름다운 일출 명소",
    rating: 4.8,
    reviews: "2천3백명 추천",
    image: img1,
  },
  {
    id: 2,
    name: "부산 감천문화마을",
    description: "알록달록한 집들이 어우러진 부산의 산토리니",
    rating: 4.6,
    reviews: "당일치기 추천",
    image: img2,
  },
  {
    id: 3,
    name: "전주 한옥마을",
    description: "전통 한옥과 맛있는 전주 음식을 즐길 수 있는 곳",
    rating: 4.7,
    reviews: "1억2만명 추천",
    image: img3,
  },
];

function RecommendPage() {
  return (
    <div className="recommend-container">
      <h3 className="recommend-title">여행, 어디로 갈까요?</h3>
      <input
        className="recommend-search"
        type="text"
        placeholder="여행지를 검색하거나 키워드를 입력하세요"
      />
      <div className="recommend-filters">
        <button>자연</button>
        <button>문화재</button>
        <button>맛집</button>
        <button>쇼핑</button>
        <button>액티비티</button>
      </div>
      <div className="recommend-sort">
        <select>
          <option>인기순</option>
          <option>별점순</option>
          <option>리뷰순</option>
        </select>
      </div>
      <div className="recommend-cards">
        {dummyPlaces.map((place) => (
          <div className="recommend-card" key={place.id}>
            <div className="recommend-card-image">
              <img src={place.image} alt={place.name} />
            </div>
            <div className="recommend-card-body">
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <div className="recommend-card-footer">
                ⭐ {place.rating} ・ {place.reviews}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendPage;
