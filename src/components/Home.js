import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Home = () => {

    const content = {
        animate : {
            staggerChildren : 0.1,
            delayChildren : 2.8
        }
    };
    const title = {
        initial: { y: -20, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
    };
    const but = {
        initial: { y: -20, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
    };

    return(
        <>
        <motion.div 
        className="home_1"
        initial="initial"
        animate="animate"
        variants={content}
        >
            <motion.section variants={title} className="home_head">
                <h1>Hi, <br /> I'm <span className="s">Siddharth</span>, <br />Web developer</h1>
            </motion.section>
                <motion.button variants={but} className="home_but shadow-lg"><NavLink className='link_1' to={'/menu'}><DoubleArrowIcon sx={{ fontSize: 30 }}  /></NavLink></motion.button>
        </motion.div>
        </>
    )
}

export default Home;