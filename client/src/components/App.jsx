import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from "../api/api"
// this is where I have to import all components I use.
import NavBar from "./Nav";
import Home from "../pages/Home";
import Location from "../pages/Location";
import AdminPage from "../pages/AdminPage";
import Footer from "./Footer";
import Error from "../pages/Error";
import Previous from "../pages/Previous"

// Everytime it rerenders it checks to see if your logged in.
const App = () => {
    const [user, setUser] = useState(false);
    const [menuItems, setMenuItems] = useState([])
    const [cart, setCart] = useState([])

    //  Checking local storage to see if your logged in.
    const checkLoggedIn = () => {
        if (localStorage.getItem('user')) {
            setUser(true)
        } else {
            setUser(false)
        }
    }

    // checking to see if I am logged in as soon as the page renders
    useEffect(() => {
        checkLoggedIn()
        api.getMenuItems().then(data => {
            setMenuItems(data.data)
        })
    })
    const updateCart = (orders) => {
        setCart(orders)
    }

    return (
        <>
            <Router>

                <NavBar admin={user} />
                <Routes>
                    <Route path="/" element={<Home updateCart={updateCart} menuItems={menuItems} cart={cart} />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/adminInfo" element={<AdminPage admin={user} />} />
                    <Route path="/previousOrders" element={<Previous admin={user} />} />

                </Routes>
                <Footer />

            </Router>
        </>
    )
}
export default App;