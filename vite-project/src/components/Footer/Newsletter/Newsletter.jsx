import "./Newsletter.scss";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-section">
        <div className="newletter-content">
          <div className="small-text m-5 text-black-400 text-2xl uppercase tracking-wide font-serif font-bold ">
            Newsleeter
          </div>
          <div className="big-text">sign up for latest update</div>
          <div className="form">
            <input
              type="text"
              placeholder="Enter your gmail"
              className="h-10 w-72 border-2 border-black rounded-sm"
            />
            <button>Subscribe</button>
          </div>
          <div className="text">
            <p>will be used under out privacy policy</p>
          </div>
          <div className="social-icons">
            <div className="icons">
              <FaLinkedin color="blue" />
            </div>
            <div className="icons">
              <FaFacebook color={"blue"} />
            </div>

            <div className="icons">
              <FaTwitter color="black" />
            </div>
            <div className="icons">
              <FaInstagram color="purple" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
