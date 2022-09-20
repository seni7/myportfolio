import  { useEffect } from "react";
import React from 'react';
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <footer className="footer">
    <div className="section-title">
        <h2>Skills</h2>
      </div>
    <div className="footer-info">        
      
        <div className="container1">
        <div className="col-lg-6" data-aos="fade-up" data-aos-duration='225'  >
              <div className="progress">
                <span className="skill">
                  Html <i className="val"></i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              
              <div className="progress">
                <span class="skill">
                  Css <i className="val"></i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>             
              <div className="progress">
                <span className="skill">
                  JS 'React' <i class="val"></i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              
              <div className="progress">
                <span className="skill">
                  Express'Nodejs' <i class="val"></i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Php <i className="val"></i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              
              <div className="progress">
                <span className="skill">
                  WordPress/Cms <i class="val">  </i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              </div> 
              <div className="col-lg-6" data-aos="fade-up" data-aos-duration='225' >
              <ul className="lists">
                    <li>I'm good at teamwork& Communication </li>
                    <li>I'm Critical Thinker and good problem solver</li>
                    <li>I'm Willing to learn&Open-Minded </li>
                    <li>Panctual and I have good time managment skill</li>
                    <li>I'm addaptable to new thing</li>
                    <li>Accountability, humility, and humbleness</li>
              </ul>   
              </div> 
        </div>
      <div className="resume">
        <div>
        <h5>Download Resume</h5>
        </div>
        <div>
        <a  href="../componants/Senait Alemayehu Ferede(Resume)3.pdf" download>
        <button>
          <img src="https://www.freeiconspng.com/uploads/resume-icon-png-2.png" alt=" " />
        </button>
      </a>
        </div>

      </div>
  
    </div>
    {/* <div className="footer-contact">
      <h3>Contact me</h3>
      <p>And let's get down to business</p>
    </div> */}
    <div className="footer-sns">
      <div className="design-by">Design By Senait Alemayehu</div>
      {/* <div className="sns-links">
        {/* aqui yo agregue varias de mis redes sociales ques mas utilizo actualmente */}
      <div className="links">
        <a
          href="https://t.me/Senait_Alemayehu"
          target="_blank"
          rel="noreferrer"
        >
          <i className="youtube">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
              width="20"
              height="20"
              alt=" "/>
          </i>
        </a>
        <a
          href="tel:+251 925361823"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter twitter">
            <img
              src="https://play-lh.googleusercontent.com/fyvUrxOGUaKjo21A5uHfrzWNWF2XEg88n2Dj1nkSczl8TIK-rKTjSItHyKK1CKgC-cI=w240-h480-rw"
              width="20"
              height="20"
              alt=" "/>
          </i>
        </a>
        <a className="email" href="mailto:senaitalemayehu27@gmail.com" rel="noreferrer">
          <i className="fab fa-instagram instagram">
            <img
              src="https://img.favpng.com/9/11/5/gmail-computer-icons-email-logo-png-favpng-NaLFWyhJkfzeaf2XZn1q2tWcC.jpg"
              width="20"
              height="20"
              alt=" "/>
          </i>
        </a>
        <a className="email" href="https://www.linkedin.com/in/senait-alemayehu-0852881a0/" rel="noreferrer">
          <i className="fab fa-instagram instagram">
            <img
              src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-white-png-images--pictures--becuo-16.png"
              width="20"
              height="20"
              alt=" "/>
          </i>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer