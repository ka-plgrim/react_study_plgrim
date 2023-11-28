import {Link} from "react-router-dom";
import React from "react";

const Menu = function() {
    return (
        <>
            <ul>
                <li><Link to="/project/bailey/board">게시판</Link></li>
                <li><Link to="/project/bailey/board">Tic-Tac-Toe</Link></li>
                <li><Link to="/project/bailey/json-object">json object(Post)</Link></li>
                <li><Link to="/project/bailey/request-param">request param(Get)</Link></li>
                <li><Link to="/project/bailey/think-with-react">think-with-react</Link></li>
                <li><Link to="/project/bailey/prop-example/gallery">gallery</Link></li>
                <li><Link to="/project/bailey/prop-example/avartar">avartar</Link></li>
                <li><Link to="/project/bailey/prop-example/card">pass-jsx-to-prop</Link></li>
                <li><Link to="/project/bailey/prop-example/drinks">drinks</Link></li>
                <li><Link to="/project/bailey/prop-example/persons">persons</Link></li>
                <li><Link to="/project/bailey/prop-example/persons/scientists">scientists</Link></li>
                <li><Link to="/project/bailey/prop-example/persons/recipes">recipes</Link></li>
                <li><Link to="/project/bailey/state-example/on-off-counter">on-off-counter</Link></li>
            </ul>
        </>
    )
}

export default Menu;