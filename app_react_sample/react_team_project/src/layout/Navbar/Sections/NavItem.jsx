import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

const routes = [
    {to: '/calendar', name: '캘린더', auth: false},
    {to: '/fake-api', name: 'fake-api', auth: false}
]

const NavItem = ({}) => {

    return (
        <ul>{routes.map(({to, name, auth}) => {
            return <li key={name}><Link to={to}>{name}</Link></li>
        })}</ul>
    )
}

export default NavItem