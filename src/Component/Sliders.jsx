import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Pagination } from "swiper";
import "swiper/css/navigation";

import "swiper/css";
SwiperCore.use([Navigation, A11y, Pagination]);

function Silder(props) {
  const [temp, setTemp] = useState(0);
  const getCurrentItem = (index) => {
    setTemp(props.data[index].id);
    props.filterCall(props.data[index].id);
  };

  return (
    <div className="navigation-block justify-content-center">
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
        className="date-swipe"
        slidesPerView={1}
        slideToClickedSlide={true}
        // centeredSlides={true}
        // centeredSlidesBounds={true}
        slidesPerGroup={1}
        onSlideChange={(item) => getCurrentItem(item.activeIndex)}
        initialSlide={temp}
        navigation={{
          nextEl: ".swipe-next",
          prevEl: ".swipe-prev",
        }}
        {...props}
      >
        <div className="swiper-wrapper">
          {props.data.map((slide) => {
            return (
              <SwiperSlide className="swiper-slide" key={slide.id}>
                <div
                  className={`date-block ${props.daily1}`}
                  // onClick={() => props.filterCall(slide.id)}
                >
                  <div className={`date ${props.daily2}`}>
                    {slide.date} {slide.month} <span>{slide.weekDay}</span>
                  </div>

                  <div className="t-call">{slide.totalcall} calls</div>
                </div>
              </SwiperSlide>
            );
          })}
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
            strokelinecap="round"
            strokelinejoin="round"
            strokewidth="2"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Silder;
