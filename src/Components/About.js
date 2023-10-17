import React, { Component } from 'react';
import pic from '../assets/me1.jpg'
import resume from '../assets/Alex_Saunders.pdf';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
   
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = "public\resume\AlexSaunders.pdf"
     
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={pic} alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I am a hard-working and detail-oriented graphic designer and aspiring
               computer scientist/software developer. In addition, I am a UCF Coding
               Boot Camp graduate passionate about learning, researching, and
               writing code while I continue my pursuit of a bachelor's degree in
               computer science. I also freelance in video creation and Photoshop
               and have been doing it for multiple years. I look forward to finding an
               opportunity to take my programming and design skills and experience
               to a company where I can continue to learn and grow in these desired
               fields.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Alex Saunders</span><br />
                     <span>1-242-421-0069</span><br />
                     <span>alexsaunders242@gmail.com</span><br />
                     <span>New Prodivence, Bahamas</span><br />
                     <span>(willing to relocate/ preferably remote)</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     
                     <a href={resume} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;