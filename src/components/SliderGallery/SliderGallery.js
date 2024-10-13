import React, { useState } from "react";
import './SliderGallery.modules.css';

// Şəkilləri import etmək
import image1 from "../../assets/images/image-111.jpg";
import image2 from "../../assets/images/image-22.jpg";
import image3 from "../../assets/images/image-3.jpg";
import image4 from "../../assets/images/image-44.jpg";
import image5 from "../../assets/images/image-5.jpg";
import image6 from "../../assets/images/image-6.jpg";
import image7 from "../../assets/images/image-7.jpg";
import image8 from "../../assets/images/image-8.jpg";
import image9 from "../../assets/images/image-9.jpeg";
import image10 from "../../assets/images/image-10.jpg";
import image11 from "../../assets/images/image-11.jpg";
import image12 from "../../assets/images/image-12.jpg";

const SliderGallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const allImages = [
        image1, image2, image3, image4, image5, image6
    ];

    const t90Images = [
        image7, image8, image9, image10, image11, image12
    ];

    const t110Images = [
        image1, image2, image3, image4, image5, image6
    ];

    const t130Images = [
        image7, image8
    ];

    const getImages = () => {
        switch (activeCategory) {
            case "T90":
                return t90Images;
            case "T110":
                return t110Images;
            case "T130":
                return t130Images;
            case "All":
                return allImages;
            default:
                return allImages;
        }
    };

    const imagesToShow = getImages();

    return (
        <div className="gallery-container">
            {/* Kateqoriyalar */}
            <div className="gallery-categories">
                <button
                    onClick={() => setActiveCategory("All")}
                    className={activeCategory === "All" ? "active" : ""}
                >
                    ALL
                </button>
                <button
                    onClick={() => setActiveCategory("T90")}
                    className={activeCategory === "T90" ? "active" : ""}
                >
                    T90
                </button>
                <button
                    onClick={() => setActiveCategory("T110")}
                    className={activeCategory === "T110" ? "active" : ""}
                >
                    T110
                </button>
                <button
                    onClick={() => setActiveCategory("T130")}
                    className={activeCategory === "T130" ? "active" : ""}
                >
                    T130
                </button>
                <button
                    onClick={() => setActiveCategory("TJ")}
                    className={activeCategory === "TJ" ? "active" : ""}
                >
                    TJ
                </button>
            </div>

            {/* Şəkillərin grid şəklində görünüşü */}
            <div className="gallery-grid">
                {activeCategory !== "TJ" ? (
                    imagesToShow.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img src={image} alt={`gallery-img-${index}`} />
                        </div>
                    ))
                ) : (
                    <p className="no-images">No images available for TJ category.</p>
                )}
            </div>
        </div>
    );
};

export default SliderGallery;
