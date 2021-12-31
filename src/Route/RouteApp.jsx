import React from 'react'
import { Route, Routes } from "react-router-dom"
import DailyCalender from '../pages/DailyCalender'
import WeeklyCalender from '../pages/WeeklyCalender'
import MonthlyCanlender from '../pages/MonthlyCalender'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route exact  path="/" component={DailyCalender}/>
                <Route path="/weeklycalender" component={WeeklyCalender}/>
                <Route path="/monthlycalender" component={MonthlyCanlender}/>
            </Routes>
        </>
    )
}

export default RouteApp
