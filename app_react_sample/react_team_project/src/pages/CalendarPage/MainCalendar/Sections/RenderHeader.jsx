import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

const RenderHeader = ({currentMonth, prevMonth, nextMonth}) => {

    return (
        <div className="calendar-header">
            <div className="month-picker" id="month-picker">
                <span className="month-change" id="prev-month" onClick={prevMonth}>&lt;</span>
                {format(currentMonth, 'M')}월
                <span className="month-change" id="next-month" onClick={nextMonth}>&gt;</span>
            </div>
            <span className="year-picker" id="year">{format(currentMonth, 'yyyy')}</span>
        </div>
    );
};

export default RenderHeader;