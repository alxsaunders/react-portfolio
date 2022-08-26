import React from 'react'
import videoBg from '../assets/video.mp4'



const video = () => {
  return (
    <div className='main' id='home'>
        <div className="overlay">

        </div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
        <div className="row banner">
      
      <div className="banner-text">
         
         <h1 id='home' className="responsive-headline">Alex Saunders</h1>
         <h3>Software Developer / Designer</h3>
         <hr />
         <ul className="social">
            <a href={"https://www.linkedin.com/in/alex-saunders-665729238/"} target="_blank" className="button btn github-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
            <a href={"https://github.com/alxsaunders"} target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
         </ul>
      </div>
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Skills</a></li>
            <li><a className="smoothscroll" href="#projects">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>
   </div>

        </div>
    </div>
  )
}

export default video