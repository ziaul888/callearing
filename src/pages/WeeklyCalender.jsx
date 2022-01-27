import React, { useEffect, useState } from "react";
import CallWeekly from "../Component/CallWeekly";
//import WeeklySilder from "../Component/WeeklySilder";
import Slider from "../layout/Slider";
import data from "../data";

const WeeklyCalender = () => {
  const [item, setItem] = useState();

  const filterCall = (id) => {
    setItem(id);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
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
      <CallWeekly />
    </div>
  );
};

export default WeeklyCalender;
