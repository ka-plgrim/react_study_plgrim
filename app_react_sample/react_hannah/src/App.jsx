/* Body Role */
import React, {useState, useEffect} from "react";
import {Route, Routes} from "react-router";
import Home from "./routes/Home";
import BoardList from "./routes/BoardList";
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import BoardUpdate from "./routes/BoardUpdate";

function App() {
    /*** <Route path="/이동할 주소" element={출력할 컴포넌트}/> **/
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/brd" element={<BoardList/>}/>
            <Route path="/brd/:idx" element={<BoardDetail/>}/>
            <Route path="/brd/write" element={<BoardWrite />} />
            <Route path="/brd/update/:idx" element={<BoardUpdate />} />
        </Routes>
    );
}

export default App;