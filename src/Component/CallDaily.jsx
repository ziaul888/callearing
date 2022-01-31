/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import data from "../data";
import useScreenType from "react-screentype-hook";

import { Link } from "react-router-dom";

const CallDaily = (props) => {
  const [tempData, setTempdata] = useState([]);

  useEffect(() => {
    setTempdata(data);
  }, []);
  const screenType = useScreenType({
    mobile: 768,
    tablet: 769,
    desktop: 1000,
    largeDesktop: 1600,
  });

  const callShow = screenType.isMobile ? 3 : 5;
  return (
    <>
      {tempData.map((item) => {
        if (item?.id === props.items) {
          return item.callList?.map((time, index) => {
            return (
              <div className="card daily" key={time.id}>
                <div className="card-body">
                  <div className="border-right border-white">
                    <h5 className="time-slot">
                      <span className="time">{time.hour}</span>{" "}
                      <span className="count">{time.calls.length} Calls</span>
                    </h5>
                  </div>
                  <div className="call-card-block ">
                    <div className="call-list">
                      {time.calls.slice(0, callShow).map((tempCall) => {
                        return (
                          <Link to="/" className="call-card" key={tempCall.id}>
                            <div className="text">{tempCall.title}</div>

                            <div className="info">
                              <span className="qno">{tempCall.quater}</span>
                              <span className="qyear">{tempCall.year}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    {time.calls && time.calls.length > callShow ? (
                      <div className="collapse" id={`collapseExample${index}`}>
                        <div className="call-list">
                          {time.calls.slice(callShow).map((item, index1) => {
                            return (
                              <div className="call-card" key={index1}>
                                <div className="text">{item.title}</div>​
                                <div className="info">
                                  <span className="qno">{item.quater}</span>
                                  <span className="qyear">{item.year}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {time.calls.length > callShow && (
                    <div className="more-call">
                      <button
                        className="btn py-2 px-1 without-focus"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapseExample${index}`}
                        aria-expanded="false"
                        aria-controls="collapseExample"
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
                  )}
                </div>
              </div>
            );
          });
        }
      })}

      <div className="more-call"></div>
    </>
  );
};

export default CallDaily;
