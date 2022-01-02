import React, { useState } from "react";
import data from "../data";


const CallDaily = (props) => {
  return (
    <>
      {data.map((item, index) => {
        if (item?.id === props.items) {
          return item.callList?.map((time, index) => {
            console.log(time.hour);
            return (
              <div className="card" key={time.id}>
                <div className="card-body">
                  <div className="border-right border-white">
                    <h5 className="time-slot">
                      <span className="time">{time.hour}</span>{" "}
                      <span className="count">{time.call} Calls</span>
                    </h5>
                  </div>

                  <div className="call-card-block ">
                    <div className="call-list">
                      {time.calls.map((tempCall, index) => {
                        return (
                          <div className="call-card" key={tempCall.id}>
                            <div className="text">{tempCall.title}</div>

                            <div className="info">
                              <span className="qno">{tempCall.quater}</span>
                              <span className="qyear">{tempCall.year}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {time.calls.length === 5 && (
                      <div className="collapse" id="collapseExample">
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
                    )}
                  </div>

                  {time.calls.length >= 5 && (
                    <div className="more-call">
                      <button
                        className="btn py-2 px-1 without-focus"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample"
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
                            strokelinecap="round"
                            strokelinejoin="round"
                            strokeWidth="3"
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
      {/* <div className="call-card-block">
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
          </div> */}

      <div className="more-call"></div>
    </>
  );
};

export default CallDaily;
