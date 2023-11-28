import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom';
import {logoutUser} from '../../../store/thunkFunctions';

const routes = [
    {to: '/login', name: '로그인', auth: false},
    {to: '/register', name: '회원가입', auth: false},
    {to: '', name: '로그아웃', auth: true },
    {to: '/history', name: '마이페이지', auth: true},
]

const NavItem = ({}) => {

    const isAuth = useSelector(state => state.user?.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser())
            .then(() => {
                navigate('/login');
            })
    }

    return (
        <ul>{routes.map(({to, name, auth}) => {
                if (isAuth !== auth) return null; //잘못된 접근
                if (name === '로그아웃') {
                    return <li key={name}><Link onClick={handleLogout}>{name}</Link></li> //로그아웃 ProtectedRoutes
                } else {
                    return <li key={name}><Link to={to}>{name}</Link></li> //이외 메뉴
                }
            })}
        </ul>
    )
}

export default NavItem