import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Back arrow icon
import "./Page.css";

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
  // Array of image URLs from public folder
  const images = ["/Images/C4.jpg"];

  return (
    <div className="Apps">
      {/* Back Button */}
      <BackButton />

      <h1>Certificate in Entrepreneurship and Small Business Management</h1>
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
