import React from "react";
import "./TripInfoPage.css";
import BasicInfo from "../components/BasicInfo";
import BasicCourse from "../components/BasicCourse";
import CustomCourseSection from "../components/CustomCourseSection";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";

const placeData = {
  name: "남산서울타워",
  description:
    "서울의 대표적인 랜드마크인 남산서울타워는 1975년에 개장한 종합전망타워로, 높이 236m의 타워에서 서울 전경을 한눈에 감상할 수 있습니다.",
  zipcode: "04340",
  homepage: "http://www.seoultower.co.kr/",
  address: "서울특별시 용산구 남산공원길 105",
  mainImage: image1,
  basicCourse: ["남산케이블카 탑승", "N서울타워 전망대", "사랑의 자물쇠"],
  nearPlaces: [
    { name: "명동성당", time: "10분", image: image2 },
    { name: "회현역", time: "15분", image: image3 },
    { name: "남대문시장", time: "20분", image: image2 },
    { name: "경복궁", time: "25분", image: image1 },
    { name: "청계천", time: "30분", image: image3 },
    { name: "광화문", time: "35분", image: image2 },
  ],
  restaurants: [
    { name: "해물칼국수", time: "10분", image: image3 },
    { name: "돈까스", time: "15분", image: image2 },
    { name: "해물알밥", time: "20분", image: image1 },
    { name: "김치찌개", time: "25분", image: image3 },
    { name: "삼겹살", time: "30분", image: image2 },
    { name: "비빔밥", time: "35분", image: image1 },
  ],
  hotels: [
    { name: "A호텔", time: "10분", image: image1 },
    { name: "B호텔", time: "15분", image: image2 },
    { name: "C호텔", time: "20분", image: image3 },
    { name: "D호텔", time: "25분", image: image1 },
    { name: "E호텔", time: "30분", image: image2 },
    { name: "F호텔", time: "35분", image: image3 },
  ],
};

const TripInfoPage = () => {
  const data = placeData;

  return (
    <div className="main-bg trip-info-container">
      <h1 className="page-title">{data.name}</h1>
      <img src={data.mainImage} alt={data.name} className="main-image" />
      <p className="description">{data.description}</p>

      <BasicInfo data={data} />
      <BasicCourse course={data.basicCourse} />

      <CustomCourseSection title="근처 여행지" items={data.nearPlaces} />
      <CustomCourseSection title="맛집" items={data.restaurants} />
      <CustomCourseSection title="숙박" items={data.hotels} />
    </div>
  );
};

export default TripInfoPage;
