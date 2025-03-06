import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTERS } from "./utils/consts.jsx";
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({ once: false });
        AOS.refresh();
    }, [location.pathname]); // Har safar sahifa o'zgarganda AOS qayta yuklanadi

    return (
        <Routes>
            {ROUTERS.map(({ Path, Component }, index) => (
                <Route key={index} path={Path} element={
                    <>
                        <Navbar />
                        <Component />
                        <Footer />
                    </>
                } />
            ))}
        </Routes>
    );
}

export default App;
