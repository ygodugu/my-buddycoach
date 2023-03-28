import React from 'react';
import {Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./mailSender.css"


const MailSender = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n1ocx3u', 'template_edit8ae', e.target, 'gnWXvxMKk6oOfbOnQ')
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });
    e.target.reset();
  }

  return (
    <div className="UpdateBadges">
        <div>
            <h1 style={{marginTop : "25px", marginLeft:"12px" }}>Contact Form </h1>
            <form style={{
                margin : "auto",
                padding: "15px",
                maxWidth:"400px",
                backgroundColor: "lightblue",
                alignItems:"center"
            }}
            onSubmit={handleSubmit}
            >
            <label htmlFor="Name">Name</label>
            <input
                type="Text"
                id="Name"
                name="Name"
                placeholder='Full Name'
                />
            <label htmlFor="Email">Email</label>
            <input
                type="Email"
                id="Email"
                name="User_email"
                placeholder='Example@gmail.com'
                />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" cols="50"></textarea>
            <input type="submit" value="send"/>

            <Link to="/Home">
                <input  type="button" value="Go Back"/>
            </Link>

            </form>
        </div>
    </div>
  )
}

export default MailSender
