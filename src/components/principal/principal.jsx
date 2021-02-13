import React from "react";
import "./principal.css";
import "react-slideshow-image/dist/styles.css";
import img_1 from "../assets/images/img-1.jpg";

export default function Principal() {
  return (
    <div className="image_div">
      <img className="image" src={img_1} alt=""></img>
    </div>
  );
}
