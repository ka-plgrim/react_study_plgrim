import React, { useEffect, useState } from 'react'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parse, format } from 'date-fns';

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while(day <= endDate) {
        for(let i=0; i<7; i++) {
            formattedDate = format(day, 'd');
            days.push(
                <div className={`calendar-day-hover ${
                    !isSameMonth(day, monthStart)
                    ?'disabled'
                    :isSameDay(day,selectedDate)
                    ?'curr-date'
                    :format(currentMonth, 'M') !== format(day, 'M')
                    ?'not-valid'
                    :'valid'
                }`}
                key={day}
                onClick={() => onDateClick(parse(day))}
                >
                    {/*<span className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : ''}>*/}
                        {formattedDate}
                    {/*</span>*/}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            // <div className="row" key={day}>
                <>{days}</>
            // </div>,
        );
        days = [];
    }
    return <>{rows}</>;
};

export default RenderCells;