import React, { useEffect, useState } from "react";
import CallMonthly from "../Component/MonthlyCall/CallMonthly";
import Slider from "../layout/Slider";

const MonthlyCanlender = () => {
  const data = [
    {
      id: 1,
      date: "2021",
      day: "",
      totalcall: 1000,
      month: "November",
    },
    {
      id: 1,
      date: "2021",
      day: "",
      totalcall: 234,
      month: "December",
    },
    {
      id: 1,
      date: "2021",
      day: "",
      totalcall: 400,
      month: "January",
    },
    {
      id: 1,
      date: "2021",
      day: "",
      totalcall: 789,
      month: "February",
    },
  ];
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
        slidesPerViewM={1}
        slidesPerViews={1}
        slidesPerGroup={1}
        daily="monthly-swipe"
        daily1="month-block"
        daily2="month"
        filterCall={filterCall}
        item={item}
      />
      <CallMonthly />
    </div>
  );
};

export default MonthlyCanlender;
