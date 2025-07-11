import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import MainTopPhotos from "../components/MainTopPhotos";
import MainPhotoGallery from "../components/MainPhotoGallery";

function MainPage() {
  const navigate = useNavigate();
  const handleStart = () => navigate("/recommend");

  return (
    <div className="main-bg">
      <div className="main-wrapper">
        <h1 className="main-title">
          세상은 넓고, 당신의 다음 여행은 여기서 시작됩니다
        </h1>
        <p className="main-subtitle">
          당신만의 속도로, 당신만의 방식으로 떠나는 여행
        </p>
        <button className="start-button" onClick={handleStart}>
          여행 시작하기
        </button>
      </div>

      <div className="top-photo-section">
        <MainTopPhotos />
      </div>

      <div className="photo-gallery-section">
        <MainPhotoGallery />
      </div>
    </div>
  );
}

export default MainPage;
