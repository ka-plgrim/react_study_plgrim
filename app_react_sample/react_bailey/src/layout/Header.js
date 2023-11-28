import React from "react";
import {Link} from "react-router-dom";

/**
 * 실제 이동 경로
 * */
const Header = () => {
    return (
        <header>
            <Link to="/">홈</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/project/bailey">Bailey</Link>
            <hr/>
        </header>
    );
};

export default Header;