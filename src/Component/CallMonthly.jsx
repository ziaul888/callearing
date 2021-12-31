import React, { useState } from "react";
import Tippy from "@tippyjs/react";
//import "tippy.js/dist/tippy.css";

import Demo from "./Demo";

const CallMonthly = () => {
  const [visible, setVisible] = useState(false);

  const showContent = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="week-day-block">
        <div className="week-day">Sun</div>
        <div className="week-day">Mon</div>
        <div className="week-day">Tue</div>
        <div className="week-day">Wed</div>
        <div className="week-day">Thu</div>
        <div className="week-day">Fri</div>
        <div className="week-day">Sat</div>
      </div>
      <div className="card month-week">
        <div className="d-block">
          <div className="card-body">
            <div className="call-card-block">
              <div className="day-block"></div>
              <div className="day-block"></div>
              <div className="day-block"></div>
              <div className="day-block">
                <div className="date">1</div>
                <div className="day-call">
                  <span className="lbl">5 Calls</span>
                  <Tippy
                    arrow={true}
                    visible={visible}
                    allowHTML={true}
                    interactive={true}
                    maxWidth={1010}
                    placement="top"
                    content={<Demo></Demo>}
                  >
                    <span>
                      <button
                        className="btn  without-focus"
                        onClick={showContent}
                        data-template="one"
                      >
                        View
                      </button>
                    </span>
                  </Tippy>
                </div>
              </div>
              <div className="day-block">
                <div className="date">2</div>
                <div className="day-call">
                  <span className="lbl">15 Calls</span>

                  <span>
                    <button className="btn tippy-btn without-focus">
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">3</div>
                <div className="day-call">
                  <span className="lbl">6 Calls</span>

                  <span>
                    <button className="btn tippy-btn without-focus">
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="two"
                    >
                      View
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallMonthly;
