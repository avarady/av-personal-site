import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Alexa Varady</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="w-100 d-flex justify-content-end">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects">Projects</a>
                </li>
            </ul>
        </div></div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
