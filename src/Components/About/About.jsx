import React from 'react'
import './About.css'
import graduation from '../../assets/graduation.jpg'

const About = () => {
  return (
   <div className="about" id='About'>
    <div className="about-left">
      <img src={graduation} alt="" className='about-img'/>
      <i class='bx bx-play-circle' style={{color: '#375fa5' , fontSize: '3rem'}} ></i>
    </div>
    <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tommorow's Leader Today</h2>
      <p>Enbark on a transformative educational journey with with our university's comprehensive educative programs.
        Our cutting edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic feild of education.
      </p>
      <p>At our university, we are committed to providing a nurturing environment that fosters creativity, innovation and a passion for learning.</p>
      <p>Our dedicated faculty members are passionate educators who are committed to helping students reach their full potential.</p>
    </div>
   </div>
  )
}

export default About