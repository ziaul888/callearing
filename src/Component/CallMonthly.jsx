import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import { Tooltip } from "react-tippy";
import "tippy.js/themes/light.css";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import Demo from "./Demo";
import DemoDay1 from "./DemoDay1";

const CallMonthly = () => {
  const [open, setIsOpen] = useState(true);
  // const handleTip = () => {
  //   setOpen(false);
  // };
  console.log(open);
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
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">5 Calls</span>

                  <span>
                    <Tippy
                      arrow={true}
                      trigger="click"
                      allowHTML={true}
                      interactive={true}
                      maxWidth={1010}
                      content={
                        <div className="d-block tippy-popup">
                          <button
                            type="button"
                            className="close-btn btn d-md-none without-focus"
                          >
                            &times;
                          </button>
                          <DemoDay1 />
                        </div>
                      }
                      placement="top"
                      theme="light"
                      popperOptions={{
                        modifiers: [
                          {
                            name: "flip",
                            options: {
                              fallbackPlacements: ["top", "bottom"],
                            },
                          },
                        ],
                      }}
                    >
                      <button
                        className="btn tippy-btn without-focus"
                        // data-template="one"
                      >
                        View
                      </button>
                    </Tippy>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <Tippy
                    arrow={true}
                    trigger="click"
                    allowHTML={true}
                    interactive={true}
                    maxWidth={1010}
                    content={<DemoDay1 />}
                    placement="top"
                    theme="light"
                    popperOptions={{
                      modifiers: [
                        {
                          name: "flip",
                          options: {
                            fallbackPlacements: ["top", "bottom"],
                          },
                        },
                      ],
                    }}
                  >
                    <button
                      className="btn tippy-btn without-focus"
                      // data-template="one"
                    >
                      5 Calls
                    </button>
                  </Tippy>
                </div>
              </div>
              <div className="day-block">
                <div className="date">2</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">15 Calls</span>

                  <span>
                    {/* <Tippy
                      arrow={true}
                      trigger="click"
                      allowHTML={true}
                      interactive={true}
                      maxWidth={1010}
                      content={<Demo />}
                      placement="top"
                      theme="light"
                      popperOptions={{
                        modifiers: [
                          {
                            name: "flip",
                            requires: true,
                            options: {
                              fallbackPlacements: ["top", "bottom"],
                            },
                          },
                        ],
                      }}
                    > */}
                    <button
                      className="btn tippy-btn without-focus"
                      //data-template="one"
                    >
                      View
                    </button>
                    {/* </Tippy> */}
                  </span>
                </div>
                <div className="day-call d-md-none">
                  {/* <Tippy
                    arrow={true}
                    trigger="click"
                    allowHTML={true}
                    interactive={true}
                    maxWidth={1010}
                    content={<DemoDay1 />}
                    placement="top"
                    theme="light"
                    popperOptions={{
                      modifiers: [
                        {
                          name: "flip",
                          options: {
                            fallbackPlacements: ["top", "bottom"],
                          },
                        },
                      ],
                    }}
                  > */}
                  <button
                    className="btn tippy-btn without-focus"
                    //data-template="one"
                  >
                    15 Calls
                  </button>
                  {/* </Tippy> */}
                </div>
              </div>
              <div className="day-block">
                <div className="date">3</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">6 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      //data-template="two"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div class="day-call d-md-none">
                  <button
                    class="btn tippy-btn without-focus"
                    data-template="two"
                  >
                    6 Calls
                  </button>
                </div>
              </div>

              <div className="day-block">
                <div className="date">4</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <Tippy
                      arrow={true}
                      trigger="click"
                      allowHTML={true}
                      interactive={true}
                      maxWidth={1010}
                      content={<DemoDay1 />}
                      placement="top"
                      theme="light"
                      popperOptions={{
                        modifiers: [
                          {
                            name: "flip",
                            options: {
                              fallbackPlacements: ["top", "bottom"],
                            },
                          },
                        ],
                      }}
                    >
                      <button
                        className="btn tippy-btn without-focus"
                        type="button"
                        //data-template="two"
                      >
                        View
                      </button>
                    </Tippy>
                  </span>
                </div>
                <div class="day-call d-md-none">
                  <Tippy
                    arrow={true}
                    trigger="click"
                    allowHTML={true}
                    interactive={true}
                    maxWidth={1010}
                    content={<DemoDay1 />}
                    placement="top"
                    theme="light"
                    popperOptions={{
                      modifiers: [
                        {
                          name: "flip",
                          options: {
                            fallbackPlacements: ["top", "bottom"],
                          },
                        },
                      ],
                    }}
                  >
                    <button
                      class="btn tippy-btn without-focus"
                      //data-template="two"
                    >
                      65 Calls
                    </button>
                  </Tippy>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card month-week">
        <div className="d-block">
          <div className="card-body">
            <div className="call-card-block">
              <div className="day-block">
                <div className="date">5</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">5 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div class="day-call d-md-none">
                  <button
                    class="btn tippy-btn without-focus"
                    data-template="two"
                  >
                    5 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">6</div>
              </div>
              <div className="day-block">
                <div className="date">7</div>
              </div>
              <div className="day-block">
                <div className="date">8</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">6 Calls</span>

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
                <div class="day-call d-md-none">
                  <button
                    class="btn tippy-btn without-focus"
                    data-template="two"
                  >
                    6 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">9</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">65 Calls</span>

                  <span>
                    <Tippy
                      arrow={true}
                      trigger="click"
                      allowHTML={true}
                      interactive={true}
                      maxWidth={1010}
                      content={<DemoDay1 />}
                      placement="top"
                      theme="light"
                      // popperOptions={{
                      //   modifiers: [
                      //     {
                      //       name :"requires",
                      //       flip: true,
                      //     },
                      //   ],
                      // }}
                    >
                      <button
                        className="btn tippy-btn without-focus"
                        type="button"
                        data-template="one"
                      >
                        View
                      </button>
                    </Tippy>
                  </span>
                </div>
                <div class="day-call d-md-none">
                  <Tippy
                    arrow={true}
                    trigger="click"
                    allowHTML={true}
                    interactive={true}
                    maxWidth={1010}
                    content={<DemoDay1 />}
                    placement="top"
                    theme="light"
                    // popperOptions={{
                    //   modifiers: [
                    //     {
                    //       name :"requires",
                    //       flip: true,
                    //     },
                    //   ],
                    // }}
                  >
                    <button
                      class="btn tippy-btn without-focus"
                      data-template="two"
                    >
                      65 Calls
                    </button>
                  </Tippy>
                </div>
              </div>
              <div className="day-block">
                <div className="date">10</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">32 Calls</span>

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
                <div class="day-call d-md-none">
                  <button
                    class="btn tippy-btn without-focus"
                    data-template="two"
                  >
                    32 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">11</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">78 Calls</span>

                  <span>
                    <Tooltip
                      arrow={true}
                      trigger="click"
                      allowHTML={true}
                      interactive={true}
                      maxWidth={1010}
                      open={open}
                      onHide={() => {
                        console.log("call");
                        setIsOpen(false);
                      }}
                      html={
                        <div className="d-block tippy-popup">
                          <button
                            type="button"
                            className="close-btn btn d-md-none without-focus"
                            onClick={() => {
                              setIsOpen(true);
                            }}
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
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing.
                                      </div>

                                      <div class="info">
                                        <span class="qno">Q3</span>
                                        <span class="qyear">2020</span>
                                      </div>
                                    </Link>

                                    <div className="call-card">
                                      <div className="text">
                                        lululemon athletica inc.
                                      </div>

                                      <div className="info">
                                        <span className="qno">Q3</span>
                                        <span className="qyear">2020</span>
                                      </div>
                                    </div>

                                    <div className="call-card">
                                      <div className="text">
                                        Lorem, ipsum provident exercitationem
                                        labore obcaecati animi!.
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
                                      <div className="text">
                                        lululemon athletica inc.
                                      </div>

                                      <div className="info">
                                        <span className="qno">Q3</span>
                                        <span className="qyear">2020</span>
                                      </div>
                                    </div>

                                    <div className="call-card">
                                      <div className="text">
                                        lululemon athletica inc.
                                      </div>

                                      <div className="info">
                                        <span className="qno">Q3</span>
                                        <span className="qyear">2020</span>
                                      </div>
                                    </div>

                                    <div className="call-card">
                                      <div className="text">
                                        lululemon athletica inc.
                                      </div>

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
                                      <div className="text">
                                        lululemon athletica inc.
                                      </div>

                                      <div className="info">
                                        <span className="qno">Q3</span>
                                        <span className="qyear">2020</span>
                                      </div>
                                    </div>

                                    <div className="call-card">
                                      <div className="text">
                                        lululemon athletica inc.
                                      </div>

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
                      }
                      placement="top"
                      theme="light"
                      popperOptions={{
                        modifiers: [
                          {
                            name: "flip",
                            options: {
                              fallbackPlacements: ["top", "bottom"],
                            },
                          },
                        ],
                      }}
                    >
                      <button
                        className="btn tippy-btn without-focus"
                        type="button"
                        //data-template="two"
                      >
                        View
                      </button>
                    </Tooltip>
                  </span>
                </div>
                <div class="day-call d-md-none">
                  <Tippy
                    arrow={true}
                    trigger="click"
                    allowHTML={true}
                    interactive={true}
                    maxWidth={1010}
                    content={<Demo />}
                    placement="top"
                    theme="light"
                    popperOptions={{
                      modifiers: [
                        {
                          name: "flip",
                          options: {
                            fallbackPlacements: ["top", "bottom"],
                          },
                        },
                      ],
                    }}
                  >
                    <button
                      class="btn tippy-btn without-focus"
                      data-template="two"
                    >
                      78 Calls
                    </button>
                  </Tippy>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card month-week">
        <div className="d-block">
          <div className="card-body">
            <div className="call-card-block">
              <div className="day-block">
                <div className="date">12</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">9 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="one"
                  >
                    9 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">13</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">22 Calls</span>

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
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="two"
                  >
                    22 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">14</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">6 Calls</span>

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
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="two"
                  >
                    6 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">15</div>
              </div>
              <div className="day-block">
                <div className="date">16</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">44 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="one"
                  >
                    44 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">17</div>
              </div>
              <div className="day-block">
                <div className="date">18</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">11 Calls</span>

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
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="two"
                  >
                    11 Calls
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card month-week">
        <div className="d-block">
          <div className="card-body">
            <div className="call-card-block">
              <div className="day-block">
                <div className="date">19</div>
              </div>
              <div className="day-block">
                <div className="date">20</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">27 Calls</span>

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
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="two"
                  >
                    27 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">21</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">16 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="one"
                  >
                    16 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">22</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">3 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="one"
                  >
                    3 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">23</div>
              </div>
              <div className="day-block">
                <div className="date">24</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">11 Calls</span>

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
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="two"
                  >
                    11 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">25</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card month-week">
        <div className="d-block">
          <div className="card-body">
            <div className="call-card-block">
              <div className="day-block">
                <div className="date">26</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">4 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="one"
                  >
                    4 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">27</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">20 Calls</span>

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
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="two"
                  >
                    20 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">28</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">51 Calls</span>

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
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="two"
                  >
                    51 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">29</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">56 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="one"
                  >
                    56 Calls
                  </button>
                </div>
              </div>
              <div className="day-block">
                <div className="date">30</div>
              </div>
              <div className="day-block">
                <div className="date">31</div>
                <div className="day-call d-md-flex d-none">
                  <span className="lbl">7 Calls</span>

                  <span>
                    <button
                      className="btn tippy-btn without-focus"
                      type="button"
                      data-template="one"
                    >
                      View
                    </button>
                  </span>
                </div>
                <div className="day-call d-md-none">
                  <button
                    className="btn tippy-btn without-focus"
                    type="button"
                    data-template="one"
                  >
                    7 Calls
                  </button>
                </div>
              </div>
              <div className="day-block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallMonthly;
