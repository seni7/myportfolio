import React from 'react'
import "./About.css";
import photo from  './image/photo_2022-09-17_18-03-15.jpg'
function About() {
  return (
<div className='about'>
    <div className="about-container">
     <div className="about-desc">
  <h3 className='h3pc'>Let me tell you something about me</h3>
  <h3 className='h3mo'>About</h3>
  <p><strong>Name : </strong>Senait Alemayehu</p>
  <p><strong>Age : </strong>25</p>
  <p className='edu'><strong>Education : </strong>Addis Ababa Science And Technology University</p>
  <p><strong>Phone : </strong>+251 925361823</p>
  <p><strong>City : </strong>Addis Ababa, Ethiopia</p>
  <p className="email"><strong>Email : </strong><a href='mailto: senaitalemayehu27@gmail.com'>senaitalemayehu27@gmail.com</a></p>
</div>
<div className="on__right">
<div className="about-img">
  <img
    src={photo} 
    alt="about"
  />
</div>
<div>
<p className="about-none">
  I am a young full-stack web developer, working on web development, using’  HTML, CSS, BOOTSTRAP and JAVASCRIPT with REACT freamwork’ for the front end and ‘EXPRSS NODE JS’ as a backend .I have been learning at a coding / Boot / -camp called EVANGADI for six month and ALX for one year. Know I am very interested working on  web development, And I can still continue learning more and more through period. </p>
</div>
</div>

</div>
    </div>
  )
}

export default About