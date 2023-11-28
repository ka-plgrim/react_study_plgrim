import React, { useEffect, useState } from 'react'
const RenderDays = () => {

    const days = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

    for(let i=0; i<7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }

    return <div className="calendar-week-day">{days}</div>;
}

export default RenderDays;