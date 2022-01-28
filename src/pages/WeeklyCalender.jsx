import React, { useEffect, useState } from "react";
import CallWeekly from "../Component/CallWeekly";
//import WeeklySilder from "../Component/WeeklySilder";
import Slider from "../layout/Slider";
import data from "../data";
import useScreenType from "react-screentype-hook";
import CallWeeklyMo from "../Component/Mobile/CallWeeklyMo";
import SliderWeekly from "../Component/Mobile/SliderWeekly";

const WeeklyCalender = () => {
  const [item, setItem] = useState();

  const screenType = useScreenType({
    mobile: 768,
    tablet: 769,
    desktop: 1000,
    largeDesktop: 1600,
  });

  const filterCall = (id) => {
    setItem(id);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      {screenType.isMobile ? (
        <SliderWeekly />
      ) : (
        <Slider
          data={data}
          slidesPerGroup={7}
          slidesPerViewM={7}
          slidesPerViews={7}
          daily="weekly-swipe"
          daily1=""
          daily2=""
          filterCall={filterCall}
          item={item}
        />
      )}

      {screenType.isMobile ? <CallWeeklyMo /> : <CallWeekly />}
    </div>
  );
};

export default WeeklyCalender;
