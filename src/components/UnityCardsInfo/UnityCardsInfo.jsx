import React from 'react';
import './UnityCardsInfo.css';
import unityInfoData from '../UnityInfoData';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const UnityCardsInfo = () => {
  return (
    <div className='UnityCardsInfo'>
        <div className="UnityCardsInfo_container">
            {
                unityInfoData.map((item, idx) => {
                    return (
                        <div className='unity_info_card' key={idx}>
                            <div className='info_icon_bg'>
                                {item.icon}
                            </div>
                            <div className='info_title_desc_container'>
                                <h3 className='info_title-h3'>{item.title}</h3>
                                <p className='info_desc-p'>{item.desc}</p>
                            </div>
                            <div className='info_button_container'>
                                <Link to={'/interyer'}>
                                    <button className='info_btn_more'>Daha Ətraflı <FaArrowRight /></button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UnityCardsInfo;