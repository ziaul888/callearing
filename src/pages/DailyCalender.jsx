import React, { useState, useEffect } from "react";

import Slider from "../layout/Slider";

import CallDaily from "../Component/CallDaily";
import data from "../data";

const DailyCalender = () => {
  const [item, setItem] = useState();

  const filterCall = (id) => {
    setItem(id);
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Slider
        data={data}
        slidesPerView={7}
        slidesPerGroup={1}
        daily="date-swipe"
        daily1=""
        daily2=""
        filterCall={filterCall}
        items={item}
        setItem={setItem}
      />
      <CallDaily items={item} />
    </>
  );
};

export default DailyCalender;
