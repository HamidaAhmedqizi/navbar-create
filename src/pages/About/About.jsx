import "./About.css";
import About_Bg_Image from "../../images/about_bg_image.jpg";
import About_Image_1 from '../../images/About_1_Image.jpg';
import About_Image_2 from '../../images/about_image_2.jpg';
import About_Image_3 from '../../images/about_image_3.jpg';

const About = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__container-bg">
            <img src={About_Bg_Image} alt="Header bg Image" />
          </div>
          <div className="header__content">
            <h2 className="about_h2">Haqqımızda</h2>
            <p>
              Sena Qrup, bu şirkətlər arasında sahib olduğu fəaliyyət sahələri
              ilə müştərilərə müxtəlif xidmətlər təqdim etməklə birlikdə,
              sürətli inkişaf və sənaye sahəsində keyfiyyətli məhsulların
              təminatı ilə tanınır.
            </p>
          </div>
        </div>
      </header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img className="about_line_img" src={About_Image_1} alt="Story Image" />
          </div>

          <div className="about__section-content">
            <h1>Məqsədimiz</h1>

            <p>
            Sena Qrupunun məqsədi, müxtəlif sahələrdə fəaliyyət göstərən şirkətlərin birləşməsi 
            ilə müştərilərinin tələblərinə uyğun, təkmilləşdirilmiş və inovativ xidmətlər və 
            məhsullar təmin etməkdir. Qrup, sürətli inkışaf, müştəri memnuniyyəti, 
            sosial və biznes etika prinsipləri ilə fəaliyyət göstərərək texnologiya və 
            innovasiyada ən son nailiyyətlərə nail olmağa nail olmağı hədəfləyir.
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Vəzifəmiz</h1>

            <p>
            Sena Qrupunun vəzifəsi, müxtəlif sahələrdə fəaliyyət göstərən şirkətlərini 
            birləşdirərək müştərilərinə təkmilləşdirilmiş, inovativ, və 
            keyfiyyətli xidmətlər və məhsullar təmin etməkdir. 
            Qrup, sürətli inkişaf, müştəri memnuniyyəti, sosial 
            və biznes etika prinsipləri ilə fəaliyyət göstərərək 
            texnologiya və innovasiyada ən son nailiyyətlərə 
            nail olmağa nail olmağı hədəfləyir.
            </p>
          </div>

          <div className="about__section-image">
            <img className="about_line_img" src={About_Image_2} alt="Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img className="about_line_img" src={About_Image_3} alt="mission Image" />
          </div>

          <div className="about__section-content">
            <h1>İstiqamətimiz</h1>

            <p>
            Sena Qrupunun istiqaməti, müxtəlif sahələrdə fəaliyyət göstərən 
            şirkətlərin birləşməsi ilə keyfiyyətli, inovativ, və 
            müstəqil xidmətlər təmin etməkdir. 
            Qrup, konsaltinq, boyama, və inşaat materialları 
            sahələrində fəaliyyət göstərən şirkətlərini 
            birləşdirərək müştərilərə geniş bir xidmət portfeli sunmağı hədəfləyir. 
            İstiqaməti, sürətli inkişaf, müştəri memnuniyyəti, sosial və 
            biznes etika prinsipləri, texnologiya və 
            innovasiyada irəliləmə ilə əhatə olunmuşdur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
