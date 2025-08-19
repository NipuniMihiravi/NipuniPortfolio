import React from "react";
import "./Page.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Back arrow icon

// BackButton component
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        cursor: "pointer"
      }}
      onClick={() => navigate(-1)} // go back to previous page
    >
      <IoArrowBack size={40} color="#DDA0DD" />
    </div>
  );
};

// Main App component
function App() {
  const images = [

    "/images/C3.jpg",
    "/images/C1.jpg",
    "/images/C2.jpg"
  ];

  return (
    <div className="Apps">
      <h1>Higher National Diploma in Software Engineering</h1>
      <div className="images-grid">
        {images.map((img, index) => (
          <div key={index} className="image-container">
            <img src={img} alt={`img-${index}`} className="display-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
