import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import './Footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-container'>
        <div className="footer_container_item">
          <div className="footer_title_pages">
            <div className='logo'>
              <h2>Nature</h2>
            </div>
            <div className='footer_text'>
              <p className='text_underline'>Bizi izləyin</p>
            </div>
            <div className="socials_link">
              <Link><FaFacebookF  className='footer_icon'/></Link>
              <Link><FaInstagram  className='footer_icon'/></Link>
              <Link><FaLinkedinIn  className='footer_icon' /></Link>
              <Link><FaTelegram  className='footer_icon'/></Link>
            </div>
          </div>
        </div>
        <div className="footer_container_item">
          <div className='footer_title_pages'>
            <div className='footer_title'>
              <h4>Links</h4>
            </div>
            <div className="footer_pages">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
            </div>
          </div>
        </div>
        <div className="footer_container_item">
          <div className='footer_title_pages'>
            <div className='footer_title'>
              <h4>Contact</h4>
            </div>
            <div className="footer_contact">
              <div className='link_icon'>
                <FaPhoneAlt className='footer_icon' />
                <a href="">+994 55 202 17 87</a>
              </div>
              <div className="link_icon">
                <MdMailOutline  className='footer_icon'/>
                <a href="">office@sena.az</a>
              </div>
              <div className='link_icon'>
                <FaLocationDot className='footer_icon' />
                <p className='text_underline'>Yasamal r,Həsən bəy zərdabi küçəsi, Melissa Park </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer