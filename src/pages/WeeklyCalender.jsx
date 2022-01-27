import React, { useEffect, useState } from "react";
import CallWeekly from "../Component/CallWeekly";
//import WeeklySilder from "../Component/WeeklySilder";
import Slider from "../layout/Slider";
import data from "../data";

const data1 = [
  {
    id: 1,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 2,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 3,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 4,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 5,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 6,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 7,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 8,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 9,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 10,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 11,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 12,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 13,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
  {
    id: 14,
    date: "",
    day: " 04 Dec",
    call: "20",
    text: "Mon",
  },
];

const WeeklyCalender = () => {
  const [item,setItem] = useState();

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
