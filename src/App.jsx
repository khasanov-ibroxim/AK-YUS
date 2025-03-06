import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTERS } from "./utils/consts.jsx";
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "@/component/loading/loading.jsx";

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    useEffect(() => {
        if (!loading) {
            AOS.init({ once: false, duration: 1000 }); // AOS faqat yuklanish tugagandan keyin ishga tushadi
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
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
            )}
        </>
    );
}

export default App;
