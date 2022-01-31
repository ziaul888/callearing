import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Pagination } from "swiper";
import "swiper/css/navigation";

import "swiper/css";
SwiperCore.use([Navigation, A11y, Pagination]);
const SliderWeekly = (props) => {
  return (
    <>
      <div class="navigation-block">
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
        <div class="swiper weekly-swipe d-md-none">
          <Swiper
            className="swiper weekly-swipe d-md-none"
            slidesPerView={1}
            navigation={{
              nextEl: ".swipe-next",
              prevEl: ".swipe-prev",
            }}
            {...props}
          >
            <div>
              <SwiperSlide className="swiper-slide">
                <div className="date-block">
                  <div className="date">11 Jan - 17 Jan</div>

                  <div className="t-call">5 calls</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="date-block">
                  <div className="date">18 Jan - 24 Jan</div>

                  <div className="t-call">7 calls</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="date-block">
                  <div className="date">25 Jan - 31 Jan</div>

                  <div className="t-call">10 calls</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="date-block">
                  <div className="date">01 Feb - 07 Feb</div>

                  <div className="t-call">5 calls</div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
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
    </>
  );
};
export default SliderWeekly;
