import React from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  
  // const [closeButton, setCloseButton] = useState(true);
  // const handleClose = () => {
  //   setCloseButton(false);
  // };
  
  return (
    <div id="two">
      <div className="d-block tippy-popup">
        <button
          type="button"
          className="close-btn btn d-md-none without-focus"
         
        >
          &times;
        </button>
        <div className="popup-call-list">
          <div className="card daily">
            <div className="card-body">
              <div className="border-right border-white">
                <h5 className="time-slot">
                  <span className="time">8:00</span>
                  <span className="count">4 Calls</span>
                </h5>
              </div>
              <div className="call-card-block">
                <div className="call-list">
                  <Link to="/" class="call-card">
                    <div class="text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </div>

                    <div class="info">
                      <span class="qno">Q3</span>
                      <span class="qyear">2020</span>
                    </div>
                  </Link>

                  <div className="call-card">
                    <div className="text">lululemon athletica inc.</div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </div>

                  <div className="call-card">
                    <div className="text">
                      Lorem, ipsum provident exercitationem labore obcaecati
                      animi!.
                    </div>

                    <div className="info">
                      <span className="qno">Q3</span>
                      <span className="qyear">2020</span>
                    </div>
                  </div>

                  {/* <div className="call-card">
                  <div className="text">lululemon athletica inc.</div>

                  <div className="info">
                    <span className="qno">Q3</span>
                    <span className="qyear">2020</span>
                  </div>
                </div> */}
                </div>
              </div>

              <div className="more-call"></div>
            </div>
          </div>

          <div className="card daily ">
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
        </div>
      </div>
    </div>
  );
};

export default Demo;
