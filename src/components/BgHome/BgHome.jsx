import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import img1 from "../../../src/images/Consulting_Image.jpg";
import Img2 from "../../../src/images/trade.jpg"
import Img3 from "../../../src/images/paint_company.jpg";
import "../BgHome/BgHome.css";
import { Link } from "react-router-dom";

const BgHome = () => {
  const slides = [
    {
      title: "Unity",
      bg: img1,
      btnText: "Sirket Haqqinda",
      link: 'unity'
    },
    {
      title: "EH Trade",
      bg: Img2,
      btnText: "Sirket Haqqinda",
      link: 'ehtrade'
    },
    {
      title: "Yusif-um MMC",
      bg: Img3,
      btnText: "Sirket Haqqinda",
      link: 'yusifummmc'
    },
  ];

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="swiper_container"
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText, link } = slide;

        return (
          <SwiperSlide
            key={index}
            className="slider_container"
          >
            <div className="text_title_cont">
              <div className="text_bg">
                Company
              </div>
              <h1 className="title_bg">
                {title}
              </h1>
              <Link to={`/${link}`}>
                <button className="btn_bg">
                  {btnText}
                </button>
              </Link>
            </div>
            <div className="image_container">
              <img className="bg-img" src={bg} alt="" />
            </div>
            <div className="line_bg"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default BgHome;