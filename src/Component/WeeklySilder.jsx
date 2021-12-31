import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
SwiperCore.use([Navigation]);
const WeeklySilder = (props) => {
  return (
    <div className="navigation-block">
      <div className="swipe-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.903"
          height="18.312"
          viewBox="0 0 10.903 18.312"
        >
          <path
            d="M-430.055,4123.225l-8.489,7.968,8.489,7.519"
            transform="translate(439.544 -4121.812)"
            fill="none"
            stroke="#4dec8c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </div>
      <Swiper
        className="swiper  weekly-swipe"
        slidesPerView={7}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerGroup={7}
        navigation={{
          prevEl: ".swipe-prev",
          nextEl: ".swipe-next",
        }}
        {...props}
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="date-block">
                <div className="date">
                  Mon <span>04 Jan</span>
                </div>

                <div className="t-call">23 calls</div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swipe-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.903"
          height="18.312"
          viewBox="0 0 10.903 18.312"
        >
          <path
            d="M-438.544,4123.225l8.489,7.968-8.489,7.519"
            transform="translate(439.958 -4121.812)"
            fill="none"
            stroke="#4dec8c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WeeklySilder;
