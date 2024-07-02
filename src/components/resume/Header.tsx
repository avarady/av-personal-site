import React from "react";
import "../../css/header.css";

const Header = () => {
  return (
    <div className="bg-gradient-blue">
      <div className="wrapper d-flex align-items-center justify-content-center">
        <img className="profile-pic" alt="me" src="/images/me.jpg" />
        <div className="header-banner">
          <div className="header">Alexa Varady</div>
          <div className="subheader">Software Developer</div>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <a
              className="btn btn-social"
              href="https://www.linkedin.com/in/alexav"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              className="btn btn-social btn-social-lg"
              href="https://github.com/avarady"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a className="btn btn-social" href="mailto:avarady94@gmail.com">
              <i className="fa-solid fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
