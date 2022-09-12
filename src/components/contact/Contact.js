import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CommentIcon from "@mui/icons-material/Comment";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ForumIcon from "@mui/icons-material/Forum";
import SendIcon from '@mui/icons-material/Send';

import "./style.css";
import { Button } from "@mui/material";

// conatiner => contact
//row => contact-main
//col-lg-8 col-12 => contact-box
//col-lg-6 col-12 => contact-heading
//col-lg-6 col-12 => contact-phone
//col-12 => contact-message and contact-button
//col-lg-4 col-12 => contact-call

function Contact() {
  return (
    <>
      <div className="contact background">
        <h4 className="title-form">Get in touch</h4>
        <h3 className="head-form">Write Us A Message</h3>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <div className="contact-form">
            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              className="contact-box"
            >
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />

              <TextField
                id="input-with-sx"
                label="You name"
                variant="standard"
                className="contact-field"
              />
              <CommentIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className="contact-icon"
              />
              <TextField
                id="input-with-sx"
                label="Your Subject"
                variant="standard"
                className="contact-field"
              />
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "flex-end" }}
              className="contact-box"
            >
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />

              <TextField
                id="input-with-sx"
                label="Your Email"
                variant="standard"
                className="contact-field"
              />
              <PhoneIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
                className="contact-icon"
              />
              <TextField
                id="input-with-sx"
                label="Your Phone"
                variant="standard"
                className="contact-field"
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <ForumIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Your Message"
                variant="outlined"
                className="contact-field"
              />
            </Box>
          </div>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send Message
          </Button>
        </Box>
      </div>

      <div className="contact-call">
        <div className="single-head">
          <div className="single-info">
            <i className="fa fa-phone call-icon"></i>
            <h4 className="title">Call us Now:</h4>
            <ul>
              <li className="contact-list">+123 456-789-1120</li>
              <li>+522 672-452-1120</li>
            </ul>
          </div>
          <div className="single-info">
            <i className="fa fa-envelope-open call-icon"></i>
            <h4 className="title">Email:</h4>
            <ul>
              <li className="contact-list">
                <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a>
              </li>
              <li>
                <a href="mailto:info@yourwebsite.com">
                  support@yourwebsite.com
                </a>
              </li>
            </ul>
          </div>
          <div className="single-info">
            <i className="fa fa-location-arrow call-icon"></i>
            <h4 className="title">Our Address:</h4>
            <ul>
              <p className="contact-desc">
                KA-62/1, Travel Agency, </p>
               
              <p> 45 Grand Central Terminal, New York.</p>
        
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


export default Contact;
