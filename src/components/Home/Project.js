import React, { useState, useEffect } from "react";
import "./Page.css";
import WhatsAppButton from './WhatsAppButton';

const Service = () => {
  const [activeForm, setActiveForm] = useState("WEB SITE");
  const [activeGallery, setActiveGallery] = useState("WEB SITE");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- UPDATED DATA with descriptions ---
  const galleryData = {
    "WEB SITE": {
      "Cocoloco Gardens Resort": [
        {
          id: 1,
          img: "/Images/loco.webp",
          pageLink: "https://cocolocogardens.com",
          description3: " Individual Project - Self Employed",
          description: "A luxury resort website with about, service, packages, contact, gallery, and services showcase.",
          description2: " | React | Email.js |"
        },
      ],
      "Dhive Interiors Designer": [
        {
          id: 2,
          img: "/Images/Dhive.jpg",
          pageLink: "https://www.dhiveinteriors.com",
          description3: " Individual Project - Self Employed",
          description: "An elegant portfolio for an interior design studio included with their all completed projects with description .",
         description2: " | React | Email.js |"
        },
      ],
      "Wasala Tours": [
        {
          id: 3,
          img: "/Images/login2.png",
          pageLink: "https://www.wasalatours.com",
          description3: " Individual Project - Self Employed",
          description: "Travel and tour website for sri lanka and china with destinations and packages.",
          description2: " | React | Email.js |"
        },
      ],
      "Kings Basketball": [
        {
          id: 4,
          img: "/Images/Kings.png",
          pageLink: "https://www.kingsbasketballs.com",
          description3: " Individual Project - Self Employed",
          description: "Sports club website for basketball team news, players, and schedules.",
          description2: " | React | Email.js |"
        },
      ],
    },
    "WEB APPLICATION": {
      "Payment Management System": [
        {
          id: 3,
          img: "/Images/inventory.png",
          pageLinks: [
            "https://gym-invoice-front.onrender.com",
            "https://gym-invoice-back.onrender.com"
          ],
          description3: " Individual Project - Self Employed",
          description: "A full-stack gym payment management system with reports, calender and payment update and authentication.",
          description2: " |React| JAVA| SPRING BOOT | POSTMAN |"
        },
      ],
    }
  };

  // Function to handle click for one or multiple links
  const handleOpenLinks = (item) => {
    if (item.pageLinks && Array.isArray(item.pageLinks)) {
      item.pageLinks.forEach(link => window.open(link, "_blank"));
    } else if (item.pageLink) {
      window.open(item.pageLink, "_blank");
    }
  };

  return (
    <div>
      <div className="toggle-container">
        <div className="service-wording-heading-con">
          <h2 className="toggle-wording-heading">
            PROJECT EXPERIENCE
          </h2>

          <div className="gallery-toggle-container">
            <div className="gallery-toggle-buttons">
              {Object.keys(galleryData).map((category) => (
                <button
                  key={category}
                  className={`gallery-toggle-button ${activeGallery === category ? "active" : ""}`}
                  onClick={() => {
                    setActiveGallery(category);
                    setActiveForm(category);
                    setSelectedImage(null);
                    setCurrentIndex(0);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Display Subcategories and their Items */}
      {activeGallery && (
        <div className="gallery-images">
          <div className="subcategory-items">
            {Object.keys(galleryData[activeGallery]).map((subcategory) =>
              galleryData[activeGallery][subcategory].map((item) => (
                <div key={item.id} className="gallery-item">
                  <div className="gallery-card">
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={subcategory}
                      className="gallery-image"
                    />

                    {/* Title & description */}
                    <div className="gallery-info">
                      <h3>{subcategory}</h3>
                      <p className="description2">{item.description3}</p>
                      <p className="description">{item.description}</p>
                      <p className="description2">{item.description2}</p>

                      <button
                        className="view-site-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLinks(item);
                        }}
                      >
                        View Site
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <WhatsAppButton />
    </div>
  );
};

export default Service;
