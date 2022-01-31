import React from "react";
import useScreenType from "react-screentype-hook";
import { Link } from "react-router-dom";

const DemoDay1 = () => {
  const screenType = useScreenType({
    mobile: 768,
    tablet: 769,
    desktop: 1000,
    largeDesktop: 1600,
  });

  return (
    <div className="d-block tippy-popup">
      <button type="button" className="close-btn btn d-md-none without-focus">
        &times;
      </button>
      <div className="popup-call-list">
        <div className="card daily">
          <div className="card-body">
            <div className="border-right border-white">
              <h5 className="time-slot">
                <span className="time">8:00</span>{" "}
                <span className="count">4 Calls</span>
              </h5>
            </div>
            <div className="call-card-block">
              <div className="call-list">
                <Link to="/monthlycalender" className="call-card">
                  <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </Link>

                <Link to="/monthlycalender" className="call-card">
                  <div className="text">
                    Lorem laudantium quibusdam distinctio deserunt temporibus.
                  </div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </Link>

                <Link to="/monthlycalender" className="call-card">
                  <div className="text">
                    Lorem, ipsum provident exercitationem labore obcaecati
                    animi!
                  </div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="more-call"></div>
          </div>
        </div>

        <div className="card daily">
          <div className="card-body">
            <div className="border-right border-white">
              <h5 className="time-slot">
                <span className="time">8:00</span>{" "}
                <span className="count">4 Calls</span>
              </h5>
            </div>
            <div className="call-card-block">
              <div className="call-list">
                <div className="call-card">
                  <div className="text">
                    {" "}
                    Lorem adipisicing blanditiis possimus quia iste nisi
                    voluptate delectus.
                  </div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </div>

                <div className="call-card">
                  <div className="text">lululemon athletica inc.</div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </div>

                <div className="call-card">
                  <div className="text">lululemon athletica inc.</div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="more-call"></div>
          </div>
        </div>

        <div className="card daily">
          <div className="card-body">
            <div className="border-right border-white">
              <h5 className="time-slot">
                <span className="time">8:00</span>{" "}
                <span className="count">4 Calls</span>
              </h5>
            </div>
            <div className="call-card-block">
              <div className="call-list">
                <Link to="/monthlycalender" className="call-card">
                  <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </Link>
                <Link to="/monthlycalender" className="call-card">
                  <div className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing.
                  </div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="more-call"></div>
          </div>
        </div>

        <div className="card daily">
          <div className="card-body">
            <div className="border-right border-white">
              <h5 className="time-slot">
                <span className="time">8:00</span>{" "}
                <span className="count">4 Calls</span>
              </h5>
            </div>
            <div className="call-card-block">
              {!screenType.isMobile ? (
                <div className="call-list">
                  <Link to="/monthlycalender" className="call-card">
                    <div className="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </Link>

                  <Link to="/monthlycalender" className="call-card">
                    <div className="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </Link>

                  <Link to="/monthlycalender" className="call-card">
                    <div className="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </Link>
                  <Link to="/monthlycalender" className="call-card">
                    <div className="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="call-list">
                  <Link to="/monthlycalender" className="call-card">
                    <div className="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </Link>

                  <Link to="/monthlycalender" className="call-card">
                    <div className="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </Link>

                  <Link to="/monthlycalender" className="call-card">
                    <div className="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </Link>
                </div>
              )}

              <div className="collapse" id="collapsePopUp">
                <div className="call-list">
                  <div className="call-card">
                    <div className="text">lululemon athletica inc.</div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </div>

                  <div className="call-card">
                    <div className="text">lululemon athletica inc.</div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </div>

                  <div className="call-card">
                    <div className="text">lululemon athletica inc.</div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </div>

                  <div className="call-card">
                    <div className="text">lululemon athletica inc.</div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="more-call">
              <button
                className="btn py-2 px-1 without-focus"
                type="button"
                data-toggle="collapse"
                data-target="#collapsePopUp"
                aria-expanded="false"
                aria-controls="collapsePopUp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.728"
                  height="12.66"
                  viewBox="0 0 20.728 12.66"
                >
                  <path
                    d="M-438.544,4123.225l9.039,8.484-9.039,8.006"
                    transform="translate(4141.833 440.664) rotate(90)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDay1;
