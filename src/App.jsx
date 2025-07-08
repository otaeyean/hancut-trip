// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import RecommendPage from "./pages/RecommendPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recommend" element={<RecommendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
