import React from "react";
import "./UnityBg.css";
import Unity_Bg_Image from "../../images/card_consulting.jpg";
import { Link } from "react-router-dom";
import Unity_Image_Bg_2 from '../../images/About_1_Image.jpg'

const UnityBg = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__container-bg">
            <img src={Unity_Image_Bg_2} alt="Header bg Image" />
          </div>
          <div className="header__content">
            <h2 className="about_h2">Unity</h2>
            <p>
            Unity Consulting, müştərilərin iş stratejisinin təyin edilməsi və inkişaf etdirilməsi üçün kömək edir. 
            İş stratejisi, müştərinin hədəflərinə nail olmaq və rekabət sahəsində üstünlük 
            qazanmaq üçün zəruri olan nailiyyətləri təyin etməyə kömək edir.
            </p>
          </div>
        </div>
      </header>
      <div className="unity_bg">
        <div className="unity_bg-container">
          <div className="unity_bg-container_left">
            <h1 className="unity_bg-h1">Sizə Ən Yaxsı Məsləhət Lazimdir?</h1>
            <p className="unity_bg_text-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              reprehenderit neque consequuntur possimus praesentium nobis
              aliquam aperiam sint. Provident omnis in dolorum et iste, deserunt
              eum ratione eos earum itaque!
            </p>

            <Link to={"/about"}>
              <button className="unity_bg_button">Daha Çox Oxu...</button>
            </Link>
          </div>
          <div className="unity_bg-container_right">
            <div className="unity_bg_image-div">
              <img className="unity_bg_image" src={Unity_Bg_Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnityBg;
