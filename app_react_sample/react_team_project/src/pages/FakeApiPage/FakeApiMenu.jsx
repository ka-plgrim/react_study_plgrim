import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

const routes = [
    {to: '/fake-api/user', name: '회원', auth: false},
    {to: '/fake-api/product', name: '상품', auth: false},
    {to: '/fake-api/cart', name: '장바구니', auth: false}
]

const FakeApiMenu = ({}) => {
    return (
        <ul>
            {routes.map(({to, name, auth}) => {return <li key={name}><Link to={to}>{name}</Link></li>})}
        </ul>
    )
}

export default FakeApiMenu;