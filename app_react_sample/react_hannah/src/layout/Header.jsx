import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {

    return (
        /**a태그의 href는 새로 고침 됨. Link to="경로"는 새로고침 없이 가능**/
        <div className="header">
            <h1>
                <Link to="/" >Hanna Board</Link>
            </h1>
            <ul className="list_day">
                <li><Link to="/">메인</Link></li>
                <li><Link to="/brd">게시판</Link></li>
                </ul>
        </div>
    );
};

export default Header;