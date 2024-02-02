import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './OurServices.css'
import Data from '../ServicesHomeData';

const ServicesHome = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedItem(prev => (prev === index ? null : index));
  };

  return (
    <section className='services'>
      <div className='services_container'>
        <div className='services_left'>
          <h1 className='services_title'>Xidmətlərimiz</h1>
          <p className='services_text'>
            Şirkətimiz konsaltinq, boyama və inşaat materialları sahəsində fəaliyyət göstərən şirkətlərin
            birləşməsidir, müştərilərə texnologiya konsaltinqi, özəl boyalar və inşaat materialları təminatı təklif edir.
          </p>
        </div>
        <div className='services_right'>
          <div className='wrapper'>
            <div className='accordion'>
              {Data.map((item, index) => (
                <div className="item" key={index} onClick={() => toggleAnswer(index)}>
                  <div className="services_title_2">
                    <h2>{item.title}</h2>
                    <button className="service__icon">
                      {selectedItem === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                  </div>
                  <div className="content">
                    {selectedItem === index && (
                      <p>
                        {item.desc1}
                        <br />
                        <br />
                        {item.desc2}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;