import React from 'react';
import './InteryerHeader.css';
import Interyer_Bg_İmage from '../../images/İnteryer_Bg_İmage.jpg';

const InteryerHeader = () => {
  return (
    <>
    
        <header className="header">
            <div className="header__container">
            <div className="header__container-bg">
                <img src={Interyer_Bg_İmage} alt="Header bg Image" />
            </div>
            <div className="header__content">
                <h2 className="about_h2">İnteryer</h2>
                <p>
                İnteryer dizayn şirketləri, müştərilərinə mekanları estetik, 
                funksional və istifadəçi dostu edərək geniş bir xidmət 
                çeşidini təklif edirlər.
                </p>
            </div>
            </div>
        </header>

    </>
  )
}

export default InteryerHeader