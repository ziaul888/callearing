import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="calender-options-block">
      <div className="tab-block">
        <NavLink
          to="/"
          type="button"
          className="btn tab-btn "
          activeclassName="active"
        >
          Daily
        </NavLink>
        <NavLink
          to="/weeklycalender"
          type="button"
          className="btn tab-btn"
          activeclassName="active"
        >
          Weekly
        </NavLink>
        <NavLink
          to="/monthlycalender"
          type="button"
          className="btn tab-btn"
          activeclassName="active"
        >
          Monthly
        </NavLink>
      </div>

      <div className="date-info">
        <div className="lbl text-primary">Today's Date</div>
        <div className="date">12-25-2021</div>
      </div>
    </div>
  );
};

export default TopBar;
