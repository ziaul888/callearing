import React from "react";
import Logo from "../asset/images/logo.418de5.svg";
import SearchIcon from "../asset/images/search.83b67b.svg";

const NavBar = () => {
  return (
    <nav className="navbar top-navbar navbar-expand-lg sticky-top">
      <div className="container-lg">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Earning Calls" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsLG"
          aria-controls="navbarsLG"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.75px"
              height="24.75px"
              viewBox="0 0 24.75 24.75"
            >
              <g>
                <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2   c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2   c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path>
              </g>
            </svg>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsLG">
          <ul className="navbar-nav align-items-lg-center ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/calender.html">
                Earning Calender
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary" href="/login.html">
                Login
              </a>
            </li>
            <li className="nav-item">
              <form>
                <div className="input-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search company"
                    aria-label="Search company"
                    aria-describedby="search-addon"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="button"
                      id="search-addon"
                    >
                      <span className="icon">
                        <img src={SearchIcon} alt="icon" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
