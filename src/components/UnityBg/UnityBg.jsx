import React from 'react';
import './UnityBg.css';
import Unity_Bg_Image from '../../images/card_consulting.jpg'

const UnityBg = () => {
  return (
    <div className='unity_bg'>
        <div className="unity_bg-container">
            <div className="unity_bg-container_left">
                <h1 className='unity_bg-h1'>Sizə Ən Yaxsı Məsləhət Lazimdir?</h1>
                <p className='unity_bg_text-p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Est reprehenderit neque consequuntur possimus praesentium nobis 
                    aliquam aperiam sint. Provident omnis in dolorum et iste, 
                    deserunt eum ratione eos earum itaque!
                </p>

                <button className='unity_bg_button'>Daha Çox Oxu...</button>
            </div>
            <div className="unity_bg-container_right">
                <div className="unity_bg_image-div">
                    <img className='unity_bg_image' src={Unity_Bg_Image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnityBg