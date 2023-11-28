import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import axiosInstance from '../../utils/axios';
import {Link} from "react-router-dom";
import {OutlinedInput} from "@mui/material";

const CalendarPage = () => {

    return (
        <section>
            <div className="calendarPage">
                <h2>캘린더 팀 프로젝트</h2>
                <Link to="/calendar/main-calendar">메인 화면</Link>
                <Outlet />
            </div>
        </section>
    )
}

export default CalendarPage;