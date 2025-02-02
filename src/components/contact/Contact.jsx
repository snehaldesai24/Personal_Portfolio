// import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithubSquare } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import './Contact.css';

// const Contact = () => {
//   return (
//     <>
//       <div className="container contact" id="contact">
//         <h1>CONTACT ME</h1>
//         <div
//           className="contact-icon"
//           data-aos="zoom-in-up"
//           data-aos-duration="1000"
//         >
//           <a href="https://www.google.com" target="_blank" className="citems">
//             <FaInstagram className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="citems">
//             <CiFacebook className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="citems">
//             <CiLinkedin className="icons" />
//           </a>
//           <a href="https://www.google.com" target="_blank" className="citems">
//             <FaSquareXTwitter className="icons" />
//           </a>
//           <a href="https://www.github.com" target="_blank" className="citems">
//             <FaGithubSquare className="icons" />
//           </a>
//           <a
//             href="mailto:webdevmastery@gmail.com"
//             target="_blank"
//             className="citems"
//           >
//             <SiGmail className="icons" />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        {/* Contact Form */}
        <form className="contact-form" data-aos="fade-up" data-aos-duration="1000">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com" target="_blank" className="citems">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="citems">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/snehal-desai-29759b1ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="citems">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="citems">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/snehaldesai24" target="_blank" className="citems">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:webdevmastery@gmail.com" target="_blank" className="citems">
            <SiGmail className="icons" />
          </a>
        </div>

        
      </div>
    </>
  );
};

export default Contact;
