import "./MainTopPhotos.css";
import MainPhotoCard from "./MainPhotoCard";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const topPhotos = [
  { id: 1, image: img1, date: "2024.3.27", location: "경주 벚꽃길" },
  { id: 2, image: img2, date: "2024.6.7", location: "강릉 대관항" },
  { id: 3, image: img3, date: "2023.11.2", location: "제주 성산일출봉" },
];

function MainTopPhotos() {
  return (
    <div className="main-top-photo-wrapper">
      {topPhotos.map((photo) => (
        <MainPhotoCard key={photo.id} {...photo} size="large" />
      ))}
    </div>
  );
}

export default MainTopPhotos;
