import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">한컷여행</Link>
      </div>
      <nav className="center-nav">
        <Link to="/" className="nav-link">
          홈
        </Link>
        <Link to="/list" className="nav-link">
          여행지
        </Link>
        <Link to="/info" className="nav-link">
          여행정보
        </Link>
        <Link to="/recommend" className="nav-link">
          여행추천
        </Link>
      </nav>
    </header>
  );
}

export default Header;
