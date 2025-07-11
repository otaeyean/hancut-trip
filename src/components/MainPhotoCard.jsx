import { useNavigate } from "react-router-dom";
import "./MainPhotoCard.css";

function MainPhotoCard({ image, date, location, size = "small" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info"); // 추후 /info/${id}로 확장 
  };

  return (
    <div className={`main-photo-card ${size}`} onClick={handleClick}>
      <div className="main-photo-inner">
        <img src={image} alt={location} className="main-photo-img" />
        <div className="main-photo-info">
          <span className="main-photo-date">{date}</span>
          <span className="main-photo-location">{location}</span>
        </div>
      </div>
    </div>
  );
}

export default MainPhotoCard;
