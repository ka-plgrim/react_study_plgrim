import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { useEffect } from 'react'
import CalendarPage from "./pages/CalendarPage";
import BoardPage from "./pages/FakeApiPage";
import FakeApiPage from "./pages/FakeApiPage";
import UserPage from "./pages/FakeApiPage/User";
import ProductPage from "./pages/FakeApiPage/Product";
import CartPage from "./pages/FakeApiPage/Cart";
import UserDetail from "./pages/FakeApiPage/User/userDetail";
import ProductList from "./components/fake-api/Product/ProductList";
import ProductDetail from "./pages/FakeApiPage/Product/ProductDetail";
import MainCalendar from "./pages/CalendarPage/MainCalendar";
import ScheduleList from "./pages/CalendarPage/ScheduleList";

function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<LandingPage />} />
                <Route path="/calendar" element={<CalendarPage />}>
                    <Route path="/calendar/main-calendar" element={<MainCalendar />} />
                    <Route path="/calendar/search" element={<ScheduleList />} />
                </Route>
                <Route path="/fake-api" element={<FakeApiPage />}>
                    <Route path="/fake-api/user" element={<UserPage />} />
                    <Route path="/fake-api/user/:id" element={<UserDetail />}/>
                    <Route path="/fake-api/product" element={<ProductPage />} />
                    <Route path="/fake-api/product/:id" element={<ProductDetail />}/>
                    <Route path="/fake-api/product/category/:category" element={<ProductPage />}/>
                    <Route path="/fake-api/cart" element={<CartPage />}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
