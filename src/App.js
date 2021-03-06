import React from "react";
import logo from "./img/logo.svg";
import Rectangle from "./img/Rectangle.svg";
import Rectangle1 from "./img/Rectangle8.png";
import Rectangle2 from "./img/Rectangle1.png";
import Rectangle3 from "./img/Rectangle2.png";
import Rectangle4 from "./img/Rectangle3.png";
import Rectangle5 from "./img/Rectangle4.png";
import Rectangle6 from "./img/Rectangle5.png";
import Rectangle7 from "./img/Rectangle6.png";
import Rectangle8 from "./img/Rectangle7.png";
import location_outline from "./img/location_outline.svg";
import mail from "./img/mail.png";
import phone from "./img/phone.png";
import facebook from "./img/facebook.svg";
import insta from "./img/insta.svg";
import linkedin from "./img/linkedin.svg";
import tweet from "./img/tweet.svg";

const App = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Careers</li>
          <li>Contacts</li>
        </ul>
      </div>

      <div className="banner">
        <p>About Us</p>
      </div>

      <div className="about-container">
        <div className="info">
          <p>Zpro ?</p>
          <p>
            Zpro is well-established and trusted IT company for high quality
            services with modern and custom design for reasonable cost and with
            high efficiency. We try our best to make our clients happy and
            satisfy with our creations.
          </p>
          <p>
            We provide creative, secure and bug-free websites for you at
            reasonable cost. Our company has reliable experts, such IT
            Engineers, Developers, Designers, and more. We work hard for best
            quality designs. We are your best partner and will help with
            brilliant, passionate and hard-working team members. We provide with
            first class service and deliver quality outputs. We work to the
            highest of standards in providing the best quality.
          </p>
          <p>
            In terms of Technology, we use the latest tools & technology,
            dynamic and responsive web design. We use React JS library in
            Front-End to make your web fast and more interactive and in the
            backend we use javascript frame work such as NodeJS, ExpressJS to
            make your API???s to load fast. We also use MongoDB ( A NoSQL database
            ) for storing your data and also to make your site perform faster.
          </p>
          <p>
            Our Mission is to design and customize your business platform. We
            promise you to get the best possible return on your investment with
            our experienced and passionate team who can bring positive changes
            to the company???s working conditions. We assure you that we are here
            to promote your regular and continuous development even in a
            difficult situation.
          </p>
          <p>
            We give you best in return! Now Contact Us and have a great, awesome
            looking and secure site at a resonable price.
          </p>
        </div>
      </div>

      <div className="gallery-name">
        <h2>Our Team</h2>
      </div>
      <div className="gallery">
        <div className="first-image">
          <img src={Rectangle} alt="rectangle" />
          <div className="profile-desc">
            <p>GP Adhikari</p>
            <p>CEO / Founder / Senior Back-End</p>
            <p> Developer / Designer</p>
          </div>
        </div>
        <img src={Rectangle1} alt="rectangle" />
        <img src={Rectangle2} alt="rectangle" />
        <img src={Rectangle3} alt="rectangle" />
        <img src={Rectangle4} alt="rectangle" />
        <img src={Rectangle5} alt="rectangle" />
        <img src={Rectangle6} alt="rectangle" />
        <img src={Rectangle7} alt="rectangle" />
        <img src={Rectangle8} alt="rectangle" />
      </div>
      <div className="footer">
        <div className="footer-wrapper">
          <div>
            <img src={logo} alt="logo" />
            <div className="contact-info">
              <img src={location_outline} alt="location_outline" />
              <p>Bhaktapur, Nepal</p>
            </div>
            <div className="contact-info">
              <img src={mail} alt="mail" />
              <p>zprofs.company@gmail.com</p>
            </div>
            <div className="contact-info">
              <img src={phone} alt="phone" />
              <p>+977-9876543210</p>
            </div>
          </div>
          <div className="first-footer">
            <p>Quick Links</p>
            <ul>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="sec-footer">
            <p>Resources</p>
            <ul>
              <li>Privacy Policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="third-footer">
            <p>Get In Touch</p>
            <button>Contact Us</button>
          </div>
        </div>
        <div className="foot">
          <div className="foot-container">
            <p>Copyright &copy; 2021 Zpro . All Rights Reserved.</p>

            <div className="foot-img-container">
              <div className="foot-img-wrapper">
                <img src={facebook} alt="facebook" />
              </div>
              <div className="foot-img-wrapper">
                <img src={insta} alt="instagram" />
              </div>
              <div className="foot-img-wrapper">
                <img src={linkedin} alt="linkedin" />
              </div>
              <div className="foot-img-wrapper">
                <img src={tweet} alt="tweeter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
