import React from "react";
import {Link, Route, Routes, useLocation} from 'react-router-dom';
import Home from "./Home";
import About from './About';
import { AnimatePresence } from "framer-motion";
import Work from "./Work.js";
import Contact from "./Contact";
import Skill from "./Skill";
import Navbar from "./Menu";
import Links from "./Links";

const AnimatedRoute = () => {
    const location = useLocation();
    return(
        <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/work" element={<Work />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/skill" element={<Skill />}></Route>
                <Route path="/menu" element={<Navbar />}></Route>
            </Routes>
        </AnimatePresence>
        </>
    )
}

export default AnimatedRoute;