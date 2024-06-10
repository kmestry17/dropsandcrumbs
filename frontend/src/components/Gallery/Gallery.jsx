import React from "react";
import "./Gallery.css";
import { assets } from "../../assets/assets";

const Gallery = () => {
  return (
    <div className="gallery-main">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_1} alt="" />
              <div className="overlay">
                <p className="caption">Chicken Curry</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_2} alt="" />
              <div className="overlay">
                <p className="caption">Vijayawada Biryani</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_3} alt="" />
              <div className="overlay">
                <p className="caption">Dosa Chutney</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_4} alt="" />
              <div className="overlay">
                <p className="caption">Chicken Chilly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_5} alt="" />
              <div className="overlay">
                <p className="caption">Chicken Tikka</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_6} alt="" />
              <div className="overlay">
                <p className="caption">Mutton Kheema</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_7} alt="" />
              <div className="overlay">
                <p className="caption">Pink Sauce Fetuccine</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_1} alt="" />
              <div className="overlay">
                <p className="caption">Caption Here</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6">
          <div className="thumbnail">
            <div className="img-container">
              <img className="image" src={assets.img_2} alt="" />
              <div className="overlay">
                <p className="caption">Caption Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
