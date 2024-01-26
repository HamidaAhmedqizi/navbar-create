import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import img1 from "../../../public/1.jpg";
import Img2 from "../../../public/2.jpg";
import Img3 from "../../../public/3.jpg";
import "../BgHome/BgHome.css";

const BgHome = () => {
  const slides = [
    {
      title: "Your Luxury Hotel For Vacation",
      bg: img1,
      btnText: "See our rooms",
    },
    {
      title: "Rooms with a beautiful view",
      bg: Img2,
      btnText: "See our rooms",
    },
    {
      title: "Quality and big hotel",
      bg: Img3,
      btnText: "See our rooms",
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
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            key={index}
            className="slider_container"
          >
            <div className="text_title_cont">
              <div className="text_bg">
                Just Enjoy and relax
              </div>
              <h1 className="title_bg">
                {title}
              </h1>
              <button className="btn_bg">
                {btnText}
              </button>
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