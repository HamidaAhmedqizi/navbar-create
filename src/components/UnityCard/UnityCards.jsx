import './UnityCards.css';
import unityCardsData from "../../components/UnityCardsData";

const UnityCards = () => {

  return (
    <div className="unity">
      <div className="unity_container">
        <div className="unity_top_container">
          <h2 className="unity-h2">Xidmət Etdiyimiz Sənayelər</h2>
        </div>
        <div className="unity_bottom_container">
          {unityCardsData.map((item, idx) => {
            return (
              <div className="unity_card" key={idx}>
                <div className="unity_icon_bg">
                  <div className="unity_icon-a">{item.icon}</div>
                </div>

                <div className="unity_text_cont">
                  <h4 className="unity_title-h4">{item.title}</h4>
                  <p className="unity_desc-p">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
  
}

export default UnityCards