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
        <div style={{marignTop:"50px",
            width : "50%",
            backgroundImage : `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
            backgroundPosition : "center",
            backgroundSize : "cover"
            }}>
            <h1 style={{marginTop : "25px"}}>Contact Form </h1>
            <form style={{
                margin : "auto",
                padding: "15px",
                maxWidth:"400px",
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

            <Link to="/">
                <input  type="button" value="Go Back"/>
            </Link>

            </form>
        </div>
    </div>
  )
}

export default MailSender
