import React from 'react';
import './NavHeader.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaEarthEurope } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const NavHeader = () => {
  return (
    <div className='nav_Header_container'>
        <div className='nav_Header_bg'>
            <div className='nav_Header_left'>
                
                <div className='nav_Header_left_email_icon'>
                    <MdOutlineMail className='email_icon_left' />
                    <a className='email' href=''>office@sena.az</a>
                </div>
                <div className='icon_num'>
                    <FaPhoneAlt className='left_icon_phone' />
                    <a href=''>+994 55 202 17 87</a>
                </div>
            </div>
            <div className='nav_Header_right'>
                <div className='nav_Header_right_BG'>
                    <FaEarthEurope className='earth_icon_right' />
                    <p className='language_right_text'>Az</p>
                    <select className='select_language' name="cars" id="cars">
                        <option value="volvo">AZ</option>
                        <option value="saab">EN</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavHeader