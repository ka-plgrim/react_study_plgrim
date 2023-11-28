import React, { useEffect, useState } from 'react'
import { subMonths, addMonths } from 'date-fns';
import RenderDays from "./Sections/RenderDays";
import RenderCells from "./Sections/RenderCells";
import RenderHeader from "./Sections/RenderHeader";
import "./styles/main-calendar.scss";

export const MainCalendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    return (
        <div className="calendar-index">
            <div className="calendar">
                <RenderHeader
                    currentMonth={currentMonth}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                />
                <div className="calendar-body">
                    <RenderDays />
                    <div className="calendar-days">
                        <RenderCells
                            currentMonth={currentMonth}
                            selectedDate={selectedDate}
                            onDateClick={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCalendar;