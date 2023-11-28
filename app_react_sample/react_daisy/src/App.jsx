import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authUser } from './store/thunkFunctions'
import ProtectedRoutes from './components/ProtectedRoutes'
import NotAuthRoutes from './components/NotAuthRoutes'
import HistoryPage from './pages/HistoryPage'

function Layout() {
    return (
        <div>
            <ToastContainer
                position='bottom-right'
                theme='light'
                pauseOnHover
                autoClose={1500}
            />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user?.isAuth);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isAuth) {
            dispatch(authUser());
        }
    }, [isAuth, pathname, dispatch])


    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<LandingPage />} />
                {/* 로그인한 사람만 갈 수 있는 경로 */}
                <Route element={<ProtectedRoutes isAuth={isAuth} />}>
                    <Route path="/history" element={<HistoryPage />} />
                </Route>
                {/* 로그인한 사람은 갈 수 없는 경로 */}
                <Route element={<NotAuthRoutes isAuth={isAuth} />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App
