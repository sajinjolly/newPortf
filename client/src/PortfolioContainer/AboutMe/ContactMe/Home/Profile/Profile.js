import React from "react";
import Typical from "react-typical";
 import "./Profile.css";
 function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>

            <a href="https://www.facebook.com/sajin.kjolly">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/sajinjolly">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://www.instagram.com/sajin_jolly/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sajin-jolly-7ba0b2241/">
              <i class="fa fa-linkedin"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M<span className="highlighted-text">Sajin</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Mearn Stack Developer",
                    1000,
                    "Full Stack Dev",
                    1000,
                    "React Dev",
                    1000,
                    "front-end Dev",
                    1000,]}/>
              </h1>
              <span className="profile-role-tagline">
              Talent to build applications with front and back end operations
            </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
                {""}
                Hire me{" "}
            </button>
            <a href='sajin.pdf' download='sajin  sajin.pdf'></a>
            <button className="btn highlighted-btn">Get Resume</button>
          </div>
        </div>
        <div className='profile-picture'>
            <div className="profile-picture-background"></div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
