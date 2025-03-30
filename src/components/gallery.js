import React from 'react';
import ReactDOM from "react-dom/client";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";
import image4 from "../images/image 4.png";
import image5 from "../images/image 5.png";
import image6 from "../images/image 6.png";
import image7 from "../images/image 7.png";
import image8 from "../images/image 8.png";
import image9 from "../images/image 9.png";
import image10 from "../images/image 10.png";
import image11 from "../images/image 11.png";
import image12 from "../images/image 12.png";
import "./../gallery.css"; // If gallery.css is in the src/ directory

function Images() {
    return (
        <>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "20px",
        padding: "10px",
        gap: "10px",
      }}>
           <div className="image-container">
            <img className='image' src={image1} alt="Image 1" />
            <h3>Image 1</h3>
            </div>
            <div className="image-container">
            <img className='image'src={image2} alt="Image 2" />
            <h3>Image 2</h3>
            </div>
            <div className="image-container">
            <img className='image'src={image3} alt="Image 3" />
            <h3>Image 3</h3>
            </div>
            <div className="image-container">
            <img className='image' src={image4} alt="Image 4" />
            <h3>Image 4</h3>
            </div>
            <div className="image-container">
            <img className='image' src={image5} alt="Image 5" />
            <h3>Image 5</h3>
            </div>
            <div className="image-container">
            <img className='image'src={image6} alt="Image 6" />
            <h3>Image 6</h3>
            </div>
            <div className="image-container">
            <img className='image' src={image7} alt="Image 7" />
            <h3>Image 7</h3>
            </div>
            <div className="image-container">
            <img className='image' src={image8} alt="Image 8" />
            <h3>Image 8</h3>
            </div>
            <div className="image-container">
            <img className='image'src={image9} alt="Image 9" />
            <h3>Image 9</h3>
            </div>
            <div className="image-container">
            <img className='image' src={image10} alt="Image 10" />
            <h3>Image 10</h3>
            </div>
            <div className="image-container">
            <img className='image' src={image11} alt="Image 11" />
            <h3>Image 11</h3>
            </div>
            <div className="image-container">
            <img className='image' src={image12} alt="Image 12" />
            <h3>Image 12</h3>
            </div>
            </div>
        </>
    );
}

export default Images;